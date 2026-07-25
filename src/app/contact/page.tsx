import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact ASR Group | Start a Project Conversation",
  description:
    "Contact ASR Group in Hyderabad about an interior or construction project and share the information available today.",
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
