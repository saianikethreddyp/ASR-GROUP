import type { Metadata } from "next";
import ClientsPage from "@/components/ClientsPage";

export const metadata: Metadata = {
  title: "ASR Group Clients | Corporate, Residential & Institutional Experience",
  description:
    "Explore selected organizations, brands, developers, communities, and institutions represented in ASR Group's project experience.",
};

export default function Page() {
  return <ClientsPage />;
}
