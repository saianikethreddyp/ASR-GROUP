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
  galleryCategory:
    | "Residential Interiors"
    | "Corporate & Commercial"
    | "Branded Environments"
    | "Institutional"
    | "Construction";
  scope: string;
  status: "Completed" | "Photography pending";
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
      "A prestigious institutional engagement completed for the C.M. Camp Office in Telangana.",
    detail:
      "The C.M. Camp Office is identified in the ASR company profile among the group’s successfully completed prestigious projects. The engagement reflects the coordination and finish discipline expected within a high-responsibility government environment.",
    image: "/media/projects/cm-camp-office-illustrative.jpg",
    imageAlt:
      "Illustrative architectural view of a formal executive office with walnut panelling and stone finishes",
    imageNote: "Illustrative visual — original project photography pending.",
    galleryCategory: "Institutional",
    scope: "Completed-project record; exact ASR scope pending client confirmation",
    status: "Photography pending",
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
      "Restoration works undertaken for one of Hyderabad’s distinguished civic landmarks.",
    detail:
      "ASR’s company profile records restoration works for Jubilee Hall in Public Gardens, Hyderabad. Heritage work requires measured intervention, sequencing and respect for the existing architectural character.",
    image: "/media/projects/jubilee-hall-restoration-illustrative.jpg",
    imageAlt:
      "Illustrative blue-hour view of a restored historic civic hall with illuminated arched colonnades",
    imageNote: "Illustrative visual — original project photography pending.",
    galleryCategory: "Construction",
    scope: "Restoration works recorded in the ASR company profile",
    status: "Photography pending",
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
      "Institutional project work delivered for the Telangana Legislative Assembly in Hyderabad.",
    detail:
      "Projects for the Telangana Legislative Assembly are listed in ASR’s company profile among its prestigious completed work. The record demonstrates experience within formal institutional settings where quality, precision and accountability matter.",
    image: "/media/projects/telangana-assembly-illustrative.jpg",
    imageAlt:
      "Illustrative architectural view of a formal assembly chamber with timber joinery and stone finishes",
    imageNote: "Illustrative visual — original project photography pending.",
    galleryCategory: "Institutional",
    scope: "Completed-project record; exact ASR scope pending client confirmation",
    status: "Photography pending",
    imageGroup: "Overall Spaces",
    facts: [
      { label: "Project", value: "Telangana Legislative Assembly" },
      { label: "Sector", value: "Government & institutional" },
      { label: "Location", value: "Hyderabad" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "bmw-service-station",
    title: "BMW Service Station",
    discipline: "Interiors",
    sector: "Retail & brand environment",
    location: "Location pending confirmation",
    summary:
      "A branded automotive environment included in ASR’s completed project record.",
    detail:
      "ASR’s source material records BMW showroom and service-station environments. Brand environments demand disciplined execution across approved visual, material, operational, and customer-experience standards. The location will be published after the source discrepancy is resolved.",
    image: "/media/projects/bmw-service-station-brochure.jpg",
    imageAlt:
      "BMW display environment with a silver vehicle, timber wall finish and illuminated brand wall",
    imageNote: "Image supplied in the ASR company profile.",
    galleryCategory: "Branded Environments",
    scope: "Brand-environment project record; exact scope pending confirmation",
    status: "Completed",
    imageGroup: "Customer & Display Areas",
    facts: [
      { label: "Project", value: "BMW Service Station" },
      { label: "Sector", value: "Retail & brand environment" },
      { label: "Location", value: "Pending confirmation" },
      { label: "Record", value: "ASR company profile" },
    ],
  },
];

export function getSignatureProject(slug: string) {
  return signatureProjects.find((project) => project.slug === slug);
}
