import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Interior & Construction Projects in Hyderabad | ASR Group",
  description:
    "Explore selected ASR Group interior and construction projects in Hyderabad, including workplace, branded, institutional and completed building work.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <ProjectsPage />;
}
