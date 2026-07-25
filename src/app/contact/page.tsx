import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact ASR Group | Start a Project Conversation",
  description:
    "Contact ASR Group in Hyderabad about an interior or construction project and share the information available today.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
