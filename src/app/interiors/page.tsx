import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = {
  title: "ASR Interiors | Premium Interior Execution in Hyderabad",
  description:
    "Explore ASR Group interior services for premium homes, workplaces, branded environments, hospitality spaces, kitchens, wardrobes and custom joinery.",
};

export default function InteriorsPage() {
  return <DivisionPage division={divisions.interiors} />;
}
