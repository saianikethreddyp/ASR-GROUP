export const galleryCategories = [
  "All",
  "Residential Interiors",
  "Corporate & Commercial",
  "Branded Environments",
  "Institutional",
  "Construction",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
