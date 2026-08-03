import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";

export const metadata: Metadata = {
  title: "Interior & Construction Project Gallery | ASR Group Hyderabad",
  description:
    "Browse ASR Group project albums across Hyderabad interiors and construction, including branded, institutional and completed built environments.",
  alternates: { canonical: "/gallery" },
};

export default function Page() {
  return <GalleryPage />;
}
