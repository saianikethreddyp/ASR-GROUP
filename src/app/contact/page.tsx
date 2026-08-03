import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact ASR Group | Interiors & Construction in Hyderabad",
  description:
    "Contact ASR Group in Hyderabad to discuss a home, workplace, commercial interior or construction project and its next steps.",
  alternates: { canonical: "/contact" },
};

export default async function ContactRoute({
  searchParams,
}: {
  searchParams: Promise<{ division?: string | string[] }>;
}) {
  const rawDivision = (await searchParams).division;
  const division = Array.isArray(rawDivision) ? rawDivision[0] : rawDivision;
  const initialTeam =
    division === "interiors" || division === "construction"
      ? division
      : undefined;

  return <ContactPage initialTeam={initialTeam} />;
}
