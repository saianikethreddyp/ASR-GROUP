import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Infra Projects Company in Hyderabad | ASR Infra",
  description:
    "ASR Infra delivers residential, commercial and institutional construction in Hyderabad, coordinating civil works, specialist systems, project management and handover.",
  alternates: { canonical: "/construction" },
};

export default function ConstructionPage() {
  return <DivisionPage division={divisions.construction} />;
}
