import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About ASR Group | The People Behind Our Work",
  description:
    "Meet the founders and leadership behind ASR Group and learn how decades of experience in interiors and construction shape every project.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
