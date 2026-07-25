import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GalleryCollectionPage from "@/components/GalleryCollectionPage";
import { getSignatureProject, signatureProjects } from "@/data/signatureProjects";

type GalleryCollectionProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return signatureProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: GalleryCollectionProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getSignatureProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} Gallery | ASR Group`,
    description: project.summary,
  };
}

export default async function Page({ params }: GalleryCollectionProps) {
  const { slug } = await params;
  const project = getSignatureProject(slug);

  if (!project) notFound();

  return <GalleryCollectionPage project={project} />;
}
