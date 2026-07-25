import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "ASR Group Projects | Interiors & Construction",
  description:
    "Find selected ASR Group projects across residential interiors, workplaces, branded environments, institutional work, and construction.",
};

export default function Page() {
  return <ProjectsPage />;
}
