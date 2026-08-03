import type { Metadata } from "next";
import ClientsPage from "@/components/ClientsPage";

export const metadata: Metadata = {
  title: "ASR Group Clients | Interior & Construction Experience",
  description:
    "Explore selected organizations, developers and institutions represented in ASR Group's Hyderabad interior and construction project experience.",
  alternates: { canonical: "/clients" },
};

export default function Page() {
  return <ClientsPage />;
}
