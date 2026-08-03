import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About ASR Group | Hyderabad Interiors & Construction Team",
  description:
    "Meet the ASR Group team behind turnkey interiors and construction in Hyderabad, with decades of experience across homes, workplaces and built environments.",
  alternates: { canonical: "/about" },
};

export default function AboutRoute() {
  return <AboutPage />;
}
