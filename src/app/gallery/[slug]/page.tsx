import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import GalleryAlbumPage from "@/components/GalleryAlbumPage";
import { galleryAlbums, getGalleryAlbum } from "@/data/galleryAlbums";
import { getSignatureProject } from "@/data/signatureProjects";

type GalleryCollectionProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return galleryAlbums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({
  params,
}: GalleryCollectionProps): Promise<Metadata> {
  const { slug } = await params;
  const album = getGalleryAlbum(slug);

  if (!album) return {};

  return {
    title: `${album.title} Gallery | ASR Group`,
    description: album.context
      ? `${album.summary} ${album.context}.`
      : `Browse ASR Group's ${album.title} project gallery, including available interior and construction images from the project record.`,
    alternates: { canonical: `/gallery/${album.slug}` },
  };
}

export default async function Page({ params }: GalleryCollectionProps) {
  const { slug } = await params;
  const album = getGalleryAlbum(slug);

  if (!album) {
    const project = getSignatureProject(slug);
    if (project) permanentRedirect(`/projects/${slug}`);
    notFound();
  }

  return <GalleryAlbumPage album={album} />;
}
