export type SignatureProject = {
  slug: string;
  title: string;
  discipline: "Interiors" | "Construction";
  sector: string;
  location: string;
  summary: string;
  detail: string;
  image: string;
  imageAlt: string;
  imageNote: string;
  /** True when the image is an illustration rather than project photography. */
  illustrative: boolean;
  galleryCategory:
    | "Branded Environments"
    | "Institutional"
    | "Construction";
  scope: string;
  status: "Completed";
  imageGroup: string;
  facts: Array<{
    label: string;
    value: string;
  }>;
};

export const signatureProjects: SignatureProject[] = [
  {
    slug: "cm-camp-office-telangana",
    title: "C.M. Camp Office",
    discipline: "Interiors",
    sector: "Government & institutional",
    location: "Telangana",
    summary:
      "Interior work completed for the C.M. Camp Office in Telangana.",
    detail:
      "The C.M. Camp Office is one of ASR’s completed government projects. The work required careful coordination and a high standard of finish.",
    image: "/media/projects/cm-camp-office-illustrative.jpg",
    imageAlt:
      "Illustrative architectural view of a formal executive office with walnut panelling and stone finishes",
    imageNote: "Illustrative visual, not project photography.",
    illustrative: true,
    galleryCategory: "Institutional",
    scope: "Interior works for a government executive environment",
    status: "Completed",
    imageGroup: "Overall Spaces",
    facts: [
      { label: "Project", value: "C.M. Camp Office" },
      { label: "Sector", value: "Government & institutional" },
      { label: "Location", value: "Telangana" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "jubilee-hall-restoration",
    title: "Jubilee Hall Restoration",
    discipline: "Construction",
    sector: "Heritage restoration",
    location: "Public Gardens, Hyderabad",
    summary:
      "Restoration work completed at Jubilee Hall in Public Gardens, Hyderabad.",
    detail:
      "ASR carried out restoration work at Jubilee Hall in Public Gardens, Hyderabad. The work was carefully planned to respect the building’s existing character.",
    image: "/media/projects/jubilee-hall-restoration-illustrative.jpg",
    imageAlt:
      "Illustrative blue-hour view of a restored historic civic hall with illuminated arched colonnades",
    imageNote: "Illustrative visual, not project photography.",
    illustrative: true,
    galleryCategory: "Construction",
    scope: "Restoration works to a heritage civic building",
    status: "Completed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "Jubilee Hall restoration" },
      { label: "Sector", value: "Heritage restoration" },
      { label: "Location", value: "Public Gardens, Hyderabad" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "telangana-legislative-assembly",
    title: "Telangana Legislative Assembly",
    discipline: "Interiors",
    sector: "Government & institutional",
    location: "Hyderabad",
    summary:
      "Project work completed for the Telangana Legislative Assembly in Hyderabad.",
    detail:
      "ASR’s work for the Telangana Legislative Assembly is one of the company’s completed government projects in Hyderabad.",
    image: "/media/projects/telangana-assembly-illustrative.jpg",
    imageAlt:
      "Illustrative architectural view of a formal assembly chamber with timber joinery and stone finishes",
    imageNote: "Illustrative visual, not project photography.",
    illustrative: true,
    galleryCategory: "Institutional",
    scope: "Interior works for a legislative environment",
    status: "Completed",
    imageGroup: "Overall Spaces",
    facts: [
      { label: "Project", value: "Telangana Legislative Assembly" },
      { label: "Sector", value: "Government & institutional" },
      { label: "Location", value: "Hyderabad" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "bmw-showroom-jubilee-hills",
    title: "BMW Showroom",
    discipline: "Interiors",
    sector: "Retail & brand environment",
    location: "Jubilee Hills, Hyderabad",
    summary:
      "A BMW showroom completed to the brand’s standards.",
    detail:
      "ASR completed the BMW showroom in Jubilee Hills with approved materials, lighting, display areas and customer spaces.",
    image: "/media/projects/bmw-service-station-brochure.jpg",
    imageAlt:
      "BMW showroom environment with a silver vehicle, timber wall finish and illuminated brand wall",
    imageNote: "From the ASR project archive.",
    illustrative: false,
    galleryCategory: "Branded Environments",
    scope: "BMW showroom brand environment",
    status: "Completed",
    imageGroup: "Customer & Display Areas",
    facts: [
      { label: "Project", value: "BMW Showroom" },
      { label: "Sector", value: "Retail & brand environment" },
      { label: "Location", value: "Jubilee Hills, Hyderabad" },
      { label: "Status", value: "Completed" },
    ],
  },
];

export function getSignatureProject(slug: string) {
  return signatureProjects.find((project) => project.slug === slug);
}
