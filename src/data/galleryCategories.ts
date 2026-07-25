export const galleryCategories = [
  "All",
  "Branded Environments",
  "Institutional",
  "Construction",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
