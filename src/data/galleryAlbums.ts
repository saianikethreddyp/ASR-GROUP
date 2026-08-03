import {
  getSignatureProject,
  type SignatureProject,
} from "@/data/signatureProjects";

export type GalleryImageGroup =
  | "Overall Spaces"
  | "Living & Shared Areas"
  | "Bedrooms & Private Areas"
  | "Kitchens & Wardrobes"
  | "Workspaces"
  | "Customer & Display Areas"
  | "Materials & Details"
  | "Exterior & Built Form"
  | "Construction Process";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  group: GalleryImageGroup;
  width: number;
  height: number;
  objectPosition?: string;
};

export type GalleryAlbumCategory =
  | "Interiors"
  | "Construction"
  | "Real Estate Layouts"
  | "Advertising";

export type GalleryAlbum = {
  slug: string;
  projectSlug: string;
  title: string;
  discipline: SignatureProject["discipline"];
  category: GalleryAlbumCategory;
  location: string;
  summary: string;
  scope: string;
  images: GalleryImage[];
};

function createAlbum(
  projectSlug: string,
  images: GalleryImage[],
): GalleryAlbum {
  const project = getSignatureProject(projectSlug);

  if (!project) {
    throw new Error(`Gallery album project not found: ${projectSlug}`);
  }

  return {
    slug: project.slug,
    projectSlug: project.slug,
    title: project.title,
    discipline: project.discipline,
    category:
      project.discipline === "Interiors" ? "Interiors" : "Construction",
    location: project.location,
    summary: project.summary,
    scope: project.scope,
    images,
  };
}

export const galleryAlbums: GalleryAlbum[] = [
  createAlbum("bmw-service-station", [
    {
      id: "customer-display-environment",
      src: "/media/projects/bmw-service-station-brochure.jpg",
      alt: "BMW display environment with a silver vehicle, timber wall finish and illuminated brand wall",
      caption:
        "Customer and display environment bringing together lighting, approved materials and brand presentation.",
      group: "Customer & Display Areas",
      width: 1007,
      height: 696,
      objectPosition: "50% 50%",
    },
  ]),
  createAlbum("cm-camp-office-telangana", [
    {
      id: "executive-office-study",
      src: "/media/projects/cm-camp-office-illustrative.jpg",
      alt: "Architectural illustration of a formal executive office with walnut panelling and stone finishes",
      caption:
        "Illustrative view accompanying the C.M. Camp Office project record; project photography is still being catalogued.",
      group: "Overall Spaces",
      width: 1536,
      height: 1024,
      objectPosition: "50% 50%",
    },
  ]),
  createAlbum("jubilee-hall-restoration", [
    {
      id: "restored-civic-hall-study",
      src: "/media/projects/jubilee-hall-restoration-illustrative.jpg",
      alt: "Architectural illustration of a restored historic civic hall with illuminated arched colonnades",
      caption:
        "Illustrative view accompanying the Jubilee Hall restoration record; project photography is still being catalogued.",
      group: "Exterior & Built Form",
      width: 1536,
      height: 1024,
      objectPosition: "50% 50%",
    },
  ]),
  createAlbum("telangana-legislative-assembly", [
    {
      id: "assembly-chamber-study",
      src: "/media/projects/telangana-assembly-illustrative.jpg",
      alt: "Architectural illustration of a formal assembly chamber with timber joinery and stone finishes",
      caption:
        "Illustrative view accompanying the Telangana Legislative Assembly record; project photography is still being catalogued.",
      group: "Overall Spaces",
      width: 1536,
      height: 1024,
      objectPosition: "50% 50%",
    },
  ]),
];

export const galleryAlbumCategories: GalleryAlbumCategory[] = [
  "Interiors",
  "Construction",
  "Real Estate Layouts",
];

export function getGalleryAlbum(slug: string) {
  return galleryAlbums.find((album) => album.slug === slug);
}

export function getGalleryAlbumForProject(projectSlug: string) {
  return galleryAlbums.find((album) => album.projectSlug === projectSlug);
}
