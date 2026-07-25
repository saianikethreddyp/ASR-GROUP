import { appendFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";

/**
 * Enquiry intake.
 *
 * Two sinks, tried independently:
 *   1. A CSV file on disk — openable directly in Excel / Google Sheets.
 *      Works with zero configuration. Note that serverless hosts
 *      (Vercel, Netlify) have a read-only filesystem, so on those this
 *      sink fails by design and the webhook below is the real path.
 *   2. ENQUIRY_WEBHOOK_URL — a Google Apps Script Web App bound to a
 *      Sheet (or any endpoint accepting JSON). This is the production path.
 *
 * We only report success if at least one sink accepted the lead. If both
 * fail we return 502 so the UI can show the phone number instead of
 * silently swallowing a qualified enquiry.
 */

const CSV_HEADER =
  "submitted_at,full_name,phone,email,team,location,project_brief\n";

const FIELD_LABELS = {
  fullName: "name",
  phone: "phone number",
  team: "project type",
  location: "project location",
  projectBrief: "project description",
} as const;

type Enquiry = {
  fullName: string;
  phone: string;
  email: string;
  team: string;
  location: string;
  projectBrief: string;
};

function csvCell(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

async function writeToCsv(enquiry: Enquiry, submittedAt: string) {
  const csvPath =
    process.env.ENQUIRY_CSV_PATH ??
    path.join(process.cwd(), "data", "enquiries.csv");

  await mkdir(path.dirname(csvPath), { recursive: true });

  const isNewFile = await stat(csvPath).then(
    () => false,
    () => true,
  );

  const row =
    [
      submittedAt,
      enquiry.fullName,
      enquiry.phone,
      enquiry.email,
      enquiry.team,
      enquiry.location,
      enquiry.projectBrief,
    ]
      .map(csvCell)
      .join(",") + "\n";

  await appendFile(csvPath, isNewFile ? CSV_HEADER + row : row, "utf8");
}

async function postToWebhook(enquiry: Enquiry, submittedAt: string) {
  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ submittedAt, ...enquiry }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Webhook responded ${response.status}`);
  }

  return true;
}

export async function POST(request: Request) {
  let payload: Partial<Record<keyof Enquiry, unknown>>;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { error: "We could not read that submission. Please try again." },
      { status: 400 },
    );
  }

  const enquiry: Enquiry = {
    fullName: String(payload.fullName ?? "").trim(),
    phone: String(payload.phone ?? "").trim(),
    email: String(payload.email ?? "").trim(),
    team: String(payload.team ?? "").trim(),
    location: String(payload.location ?? "").trim(),
    projectBrief: String(payload.projectBrief ?? "").trim(),
  };

  const missing = (
    Object.keys(FIELD_LABELS) as Array<keyof typeof FIELD_LABELS>
  ).filter((field) => !enquiry[field]);

  if (missing.length) {
    return Response.json(
      {
        error: `Please add your ${missing
          .map((field) => FIELD_LABELS[field])
          .join(", ")}.`,
      },
      { status: 400 },
    );
  }

  if (enquiry.phone.replace(/\D/g, "").length < 8) {
    return Response.json(
      {
        error:
          "Enter a valid phone or WhatsApp number so the ASR team can respond.",
      },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toISOString();

  const results = await Promise.allSettled([
    writeToCsv(enquiry, submittedAt),
    postToWebhook(enquiry, submittedAt),
  ]);

  const delivered = results.some((result) => result.status === "fulfilled");

  if (!delivered) {
    for (const result of results) {
      if (result.status === "rejected") {
        console.error("[enquiry] sink failed:", result.reason);
      }
    }

    return Response.json(
      {
        error:
          "We could not record your enquiry just now. Please call the ASR team on +91 80086 67766 and we will pick it up straight away.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
