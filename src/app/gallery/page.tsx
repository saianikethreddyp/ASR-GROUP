import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";
import {
  galleryCategories,
  type GalleryCategory,
} from "@/data/galleryCategories";

export const metadata: Metadata = {
  title: "ASR Group Gallery | Project Photography",
  description:
    "Browse ASR Group project galleries across residential interiors, workplaces, branded environments, institutional projects, and construction.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string | string[];
  }>;
}) {
  const rawCategory = (await searchParams).category;
  const requestedCategory = Array.isArray(rawCategory)
    ? rawCategory[0]
    : rawCategory;
  const initialCategory = galleryCategories.includes(
    requestedCategory as GalleryCategory,
  )
    ? (requestedCategory as GalleryCategory)
    : "All";

  return <GalleryPage initialCategory={initialCategory} />;
}
