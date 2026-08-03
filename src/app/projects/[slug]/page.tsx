import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudyPage from "@/components/ProjectCaseStudyPage";
import { getSignatureProject, signatureProjects } from "@/data/signatureProjects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return signatureProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getSignatureProject(slug);

  if (!project) return {};

  return {
    title: `${project.title}, ${project.location} | ASR Group Projects`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getSignatureProject(slug);

  if (!project) notFound();

  return <ProjectCaseStudyPage project={project} />;
}
