import type { MetadataRoute } from "next";
import { galleryAlbums } from "@/data/galleryAlbums";
import { signatureProjects } from "@/data/signatureProjects";
import { absoluteUrl } from "@/lib/site";

const pages: Array<{
  pathname: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { pathname: "/", changeFrequency: "weekly", priority: 1 },
  { pathname: "/interiors", changeFrequency: "monthly", priority: 0.9 },
  { pathname: "/construction", changeFrequency: "monthly", priority: 0.9 },
  { pathname: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/gallery", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/about", changeFrequency: "yearly", priority: 0.6 },
  { pathname: "/clients", changeFrequency: "monthly", priority: 0.7 },
  { pathname: "/contact", changeFrequency: "yearly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map(({ pathname, changeFrequency, priority }) => ({
      url: absoluteUrl(pathname),
      changeFrequency,
      priority,
    })),
    ...signatureProjects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...galleryAlbums.map((album) => ({
      url: absoluteUrl(`/gallery/${album.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: album.images.map((image) => absoluteUrl(image.src)),
    })),
  ];
}
