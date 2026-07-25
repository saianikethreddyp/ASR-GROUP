import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = {
  title: "ASR Construction | Integrated Project Delivery in Hyderabad",
  description:
    "Explore ASR Group construction capabilities across residential, commercial and institutional projects, civil works, specialist systems and handover.",
};

export default function ConstructionPage() {
  return <DivisionPage division={divisions.construction} />;
}
