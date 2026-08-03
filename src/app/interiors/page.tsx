import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Turnkey Interior Designers in Hyderabad | ASR Interio",
  description:
    "ASR Interio delivers turnkey home, office, retail and hospitality interiors in Hyderabad, including kitchens, wardrobes, custom joinery and project management.",
  alternates: { canonical: "/interiors" },
};

export default function InteriorsPage() {
  return <DivisionPage division={divisions.interiors} />;
}
