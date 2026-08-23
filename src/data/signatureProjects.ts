export type SignatureProject = {
  slug: string;
  title: string;
  discipline: "Interiors" | "Infra Projects";
  /** Building type used to group Infra Projects into page subsections. */
  segment?: "Standalone Apartment" | "High-Rise Buildings";
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
    | "Infra Projects";
  scope: string;
  status: "Completed" | "Ongoing" | "Proposed";
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
    discipline: "Infra Projects",
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
    galleryCategory: "Infra Projects",
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
  {
    slug: "vasavi-urban-raise",
    title: "Vasavi Urban Raise",
    discipline: "Infra Projects",
    segment: "High-Rise Buildings",
    sector: "Residential construction",
    location: "Bachupalli, Hyderabad",
    summary:
      "A 3-tower, 22-floor residential development in Bachupalli, with two towers completed and one underway.",
    detail:
      "ASR Infra is delivering foundation, basement and shuttering works across three residential towers of 22 floors each for GR Infracon Pvt. Ltd. in Bachupalli, Hyderabad. Two towers are complete and the third is in progress, across roughly 10 lakh sq. ft.",
    image: "/media/gallery/infra/vasavi-urban-raise/cover.jpg",
    imageAlt:
      "Vasavi Urban Raise residential tower under construction, showing exposed concrete floors and scaffolding",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "Foundation, basement and shuttering works across 3 residential towers (22 floors each)",
    status: "Ongoing",
    imageGroup: "Construction Process",
    facts: [
      { label: "Project", value: "Vasavi Urban Raise" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "Bachupalli, Hyderabad" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "jayabheri-nexa",
    title: "Jayabheri NEXA",
    discipline: "Infra Projects",
    sector: "Commercial construction",
    location: "Kondapur, Hyderabad",
    summary:
      "A 7-floor commercial building completed for MAA Consultancy in Kondapur.",
    detail:
      "ASR Infra completed site preparation and structural works, including post-tensioned slabs, for the Jayabheri NEXA commercial building in Kondapur, Hyderabad. The building spans roughly 17,500 sq. ft. across seven floors.",
    image: "/media/gallery/infra/jayabheri-nexa/cover.jpg",
    imageAlt:
      "Completed Jayabheri NEXA commercial building with a dark glazed facade in Kondapur",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "Site preparation and structural works, including post-tensioned slabs",
    status: "Completed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "Jayabheri NEXA" },
      { label: "Sector", value: "Commercial construction" },
      { label: "Location", value: "Kondapur, Hyderabad" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "gandipet-lake-view-villa",
    title: "Gandipet Lake View Villa",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Luxury residential villa",
    location: "Gandipet, Hyderabad",
    summary:
      "A luxury G+1 residential villa under construction on Gandipet's lake-view stretch.",
    detail:
      "ASR Infra is carrying out end-to-end construction, from foundation to handover, for a luxury G+1 residential villa of around 7,000 sq. ft. for SRU Projects in Gandipet, Hyderabad.",
    image: "/media/gallery/infra/gandipet-lake-view-villa/cover.jpg",
    imageAlt:
      "Foundation and slab work in progress for the Gandipet lake-view luxury villa",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "End-to-end construction from foundation to handover",
    status: "Ongoing",
    imageGroup: "Construction Process",
    facts: [
      { label: "Project", value: "Gandipet Lake View Villa" },
      { label: "Sector", value: "Luxury residential villa" },
      { label: "Location", value: "Gandipet, Hyderabad" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "praneeth-pranav-daffodils",
    title: "Praneeth Pranav Daffodils",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Residential construction",
    location: "Bowrampet, Hyderabad",
    summary:
      "A 6-floor lake-view residential apartment community completed for Praneeth Groups in Bowrampet.",
    detail:
      "ASR Infra completed foundation and structural RCC works for Praneeth Pranav Daffodils, a 6-floor residential apartment development for Praneeth Groups in Bowrampet, Hyderabad, covering roughly 1.8 lakh sq. ft.",
    image: "/media/gallery/infra/praneeth-pranav-daffodils/cover.jpg",
    imageAlt:
      "Completed Praneeth Pranav Daffodils apartment entrance with signage and landscaping",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "Foundation and structural RCC works",
    status: "Completed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "Praneeth Pranav Daffodils" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "Bowrampet, Hyderabad" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "gitam-residency",
    title: "GITAM Residency",
    discipline: "Infra Projects",
    segment: "High-Rise Buildings",
    sector: "Residential construction",
    location: "Rudraram, GITAM University, Hyderabad",
    summary:
      "A high-rise residential apartment tower under construction at GITAM University, Rudraram.",
    detail:
      "ASR Infra is carrying out foundation and RCC structural works for a residential apartment tower for GR Infracon Pvt. Ltd. near GITAM University in Rudraram, Hyderabad, across approximately 5 lakh sq. ft.",
    image: "/media/gallery/infra/gitam-residency/cover.jpg",
    imageAlt:
      "GITAM Residency apartment tower under construction with scaffolding and a tower crane",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "Foundation and RCC structural works",
    status: "Ongoing",
    imageGroup: "Construction Process",
    facts: [
      { label: "Project", value: "GITAM Residency" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "Rudraram, GITAM University, Hyderabad" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "hedgewar-hospital-research-centre",
    title: "Dr. Hedgewar Hospital & Research Centre",
    discipline: "Infra Projects",
    sector: "Healthcare",
    location: "Gadchiroli, Maharashtra",
    summary:
      "A hospital and research centre under development for Lloyds Metals in Gadchiroli, Maharashtra.",
    detail:
      "ASR Infra is delivering end-to-end construction, from foundation to handover, for the Dr. Hedgewar Hospital & Research Centre for Lloyds Metals Pvt. Ltd. in Gadchiroli, Maharashtra, across approximately 2.82 lakh sq. ft.",
    image: "/media/gallery/infra/hedgewar-hospital-research-centre/cover.jpg",
    imageAlt:
      "Architectural rendering of the Dr. Hedgewar Hospital & Research Centre building",
    imageNote: "Illustrative render, not project photography.",
    illustrative: true,
    galleryCategory: "Infra Projects",
    scope: "End-to-end construction from foundation to handover",
    status: "Ongoing",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "Dr. Hedgewar Hospital & Research Centre" },
      { label: "Sector", value: "Healthcare" },
      { label: "Location", value: "Gadchiroli, Maharashtra" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "southwoods-shamshabad",
    title: "Southwoods",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Luxury residential villa",
    location: "Shamshabad, Hyderabad",
    summary:
      "A luxury G+1 residential villa under construction for the Vaishnaoi Group in Shamshabad.",
    detail:
      "ASR Infra is carrying out end-to-end construction, from foundation to handover, for Southwoods, a luxury G+1 residential villa of around 7,000 sq. ft. for the Vaishnaoi Group in Shamshabad, Hyderabad.",
    image: "/media/gallery/infra/southwoods-shamshabad/cover.jpg",
    imageAlt:
      "Excavation and site preparation underway for the Southwoods luxury villa",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "End-to-end construction from foundation to handover",
    status: "Ongoing",
    imageGroup: "Construction Process",
    facts: [
      { label: "Project", value: "Southwoods" },
      { label: "Sector", value: "Luxury residential villa" },
      { label: "Location", value: "Shamshabad, Hyderabad" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "sylvanor-mokila",
    title: "SYLVANOR",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Luxury residential villa",
    location: "Mokila, Hyderabad",
    summary:
      "A luxury G+1 residential villa under construction for Bluefins in Mokila.",
    detail:
      "ASR Infra is delivering end-to-end construction, from foundation to handover, for SYLVANOR, a luxury G+1 residential villa of around 7,000 sq. ft. for Bluefins in Mokila, Hyderabad.",
    image: "/media/gallery/infra/sylvanor-mokila/cover.jpg",
    imageAlt: "Architectural rendering of the SYLVANOR luxury villa development",
    imageNote: "Illustrative render, not project photography.",
    illustrative: true,
    galleryCategory: "Infra Projects",
    scope: "End-to-end construction from foundation to handover",
    status: "Ongoing",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "SYLVANOR" },
      { label: "Sector", value: "Luxury residential villa" },
      { label: "Location", value: "Mokila, Hyderabad" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "mangalam-rise",
    title: "Mangalam Rise",
    discipline: "Infra Projects",
    segment: "High-Rise Buildings",
    sector: "Residential construction",
    location: "Somajiguda, Hyderabad",
    summary:
      "A residential apartment development under construction for GR Infracon in Somajiguda.",
    detail:
      "ASR Infra is delivering end-to-end construction, from foundation to handover, for Mangalam Rise, a residential apartment development for GR Infracon in Somajiguda, Hyderabad, across approximately 2.5 lakh sq. ft.",
    image: "/media/gallery/infra/mangalam-rise/cover.jpg",
    imageAlt:
      "Foundation excavation and shuttering underway at the Mangalam Rise site",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "End-to-end construction from foundation to handover",
    status: "Ongoing",
    imageGroup: "Construction Process",
    facts: [
      { label: "Project", value: "Mangalam Rise" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "Somajiguda, Hyderabad" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "karachi-commercial",
    title: "Karachi Commercial",
    discipline: "Infra Projects",
    sector: "Commercial construction",
    location: "Kokapet, Hyderabad",
    summary: "A commercial building under construction in Kokapet, Hyderabad.",
    detail:
      "ASR Infra is delivering end-to-end construction, from foundation to handover, for a commercial building of approximately 1 lakh sq. ft. in Kokapet, Hyderabad.",
    image: "/media/gallery/infra/karachi-commercial/cover.jpg",
    imageAlt: "Deep excavation underway at the Karachi Commercial building site",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "End-to-end construction from foundation to handover",
    status: "Ongoing",
    imageGroup: "Construction Process",
    facts: [
      { label: "Project", value: "Karachi Commercial" },
      { label: "Sector", value: "Commercial construction" },
      { label: "Location", value: "Kokapet, Hyderabad" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "trendsquare-world-of-garden",
    title: "TrendSquare World of Garden",
    discipline: "Infra Projects",
    segment: "High-Rise Buildings",
    sector: "Residential construction",
    location: "Bangalore",
    summary:
      "A large residential development under construction for GR Infracon in Bangalore.",
    detail:
      "ASR Infra is delivering end-to-end construction, from foundation to handover, for TrendSquare World of Garden, a development for GR Infracon in Bangalore, across approximately 5 lakh sq. ft.",
    image: "/media/gallery/infra/trendsquare-world-of-garden/cover.jpg",
    imageAlt:
      "Tower cranes and early structural work at the TrendSquare World of Garden site",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "End-to-end construction from foundation to handover",
    status: "Ongoing",
    imageGroup: "Construction Process",
    facts: [
      { label: "Project", value: "TrendSquare World of Garden" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "Bangalore" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "heyday-senior-living-community",
    title: "Heyday Senior Living Community",
    discipline: "Infra Projects",
    segment: "High-Rise Buildings",
    sector: "Senior living residential",
    location: "Kollur, Hyderabad",
    summary:
      "A 13 lakh sq. ft. senior living community under construction for Incor in Kollur.",
    detail:
      "ASR Infra is carrying out shell and core construction for Heyday, a senior living community for Incor in Kollur, Hyderabad, across approximately 13 lakh sq. ft.",
    image: "/media/gallery/infra/heyday-senior-living-community/cover.jpg",
    imageAlt:
      "Multi-block structure under construction with a tower crane at Heyday senior living community",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "Shell and core construction",
    status: "Ongoing",
    imageGroup: "Construction Process",
    facts: [
      { label: "Project", value: "Heyday Senior Living Community" },
      { label: "Sector", value: "Senior living residential" },
      { label: "Location", value: "Kollur, Hyderabad" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "royal-ridge",
    title: "Royal Ridge",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Residential construction",
    location: "JP Nagar, Hyderabad",
    summary: "A 3 & 4 BHK residential apartment development in JP Nagar, Hyderabad.",
    detail:
      "Royal Ridge is a 3 & 4 BHK residential apartment development in JP Nagar, Hyderabad.",
    image: "/media/gallery/infra/royal-ridge/cover.jpg",
    imageAlt: "Royal Ridge residential apartment building elevation in JP Nagar, Hyderabad",
    imageNote: "Illustrative render, not project photography.",
    illustrative: true,
    galleryCategory: "Infra Projects",
    scope: "Residential apartments — 3 & 4 BHK",
    status: "Proposed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "Royal Ridge" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "JP Nagar, Hyderabad" },
      { label: "Status", value: "Proposed" },
    ],
  },
  {
    slug: "asr-residency",
    title: "ASR Residency",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Residential construction",
    location: "Bhimavaram, Andhra Pradesh",
    summary:
      "A 2 & 3 BHK residential apartment development in Bhimavaram, Andhra Pradesh.",
    detail:
      "ASR Residency is a 2 & 3 BHK residential apartment development in Bhimavaram, Andhra Pradesh.",
    image: "/media/gallery/infra/asr-residency/cover.jpg",
    imageAlt: "ASR Residency apartment building elevation in Bhimavaram, Andhra Pradesh",
    imageNote: "Illustrative render, not project photography.",
    illustrative: true,
    galleryCategory: "Infra Projects",
    scope: "Residential apartments — 2 & 3 BHK",
    status: "Proposed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "ASR Residency" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "Bhimavaram, Andhra Pradesh" },
      { label: "Status", value: "Proposed" },
    ],
  },
  {
    slug: "rr-residency",
    title: "RR Residency",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Residential construction",
    location: "Gokul Plots, Hyderabad",
    summary:
      "A 2 & 3 BHK residential apartment development with ground-floor retail in Gokul Plots, Hyderabad.",
    detail:
      "RR Residency is a 2 & 3 BHK residential apartment development with ground-floor retail space in Gokul Plots, Hyderabad.",
    image: "/media/gallery/infra/rr-residency/cover.jpg",
    imageAlt:
      "RR Residency apartment building elevation with ground-floor retail in Gokul Plots, Hyderabad",
    imageNote: "Illustrative render, not project photography.",
    illustrative: true,
    galleryCategory: "Infra Projects",
    scope: "Residential apartments with ground-floor retail — 2 & 3 BHK",
    status: "Proposed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "RR Residency" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "Gokul Plots, Hyderabad" },
      { label: "Status", value: "Proposed" },
    ],
  },
  {
    slug: "kings-residency",
    title: "Kings Residency",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Residential construction",
    location: "Bhimavaram, Hyderabad",
    summary: "A 3 & 4 BHK residential apartment development in Bhimavaram, Hyderabad.",
    detail:
      "Kings Residency is a 3 & 4 BHK residential apartment development in Bhimavaram, Hyderabad.",
    image: "/media/gallery/infra/kings-residency/cover.jpg",
    imageAlt: "Kings Residency apartment building elevation in Bhimavaram, Hyderabad",
    imageNote: "Illustrative render, not project photography.",
    illustrative: true,
    galleryCategory: "Infra Projects",
    scope: "Residential apartments — 3 & 4 BHK",
    status: "Proposed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "Kings Residency" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "Bhimavaram, Hyderabad" },
      { label: "Status", value: "Proposed" },
    ],
  },
  {
    slug: "indus-villas",
    title: "Indus Villas",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Residential villa",
    location: "Not specified",
    summary: "A completed independent residential villa.",
    detail:
      "Indus Villas is a completed independent residential villa, shown here in the ASR project record.",
    image: "/media/gallery/infra/indus-villas/cover.jpg",
    imageAlt:
      "Indus Villas — completed two-storey independent residential villa with a private driveway and gate",
    imageNote: "From the ASR Infra project archive.",
    illustrative: false,
    galleryCategory: "Infra Projects",
    scope: "Independent residential villa",
    status: "Completed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "Indus Villas" },
      { label: "Sector", value: "Residential villa" },
      { label: "Location", value: "Not specified" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "sai-nilayam",
    title: "Sai Nilayam",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Residential construction",
    location: "Gokul Plots, Hyderabad",
    summary: "A 2 & 3 BHK residential apartment development in Gokul Plots, Hyderabad.",
    detail:
      "Sai Nilayam is a 2 & 3 BHK residential apartment development in Gokul Plots, Hyderabad.",
    image: "/media/gallery/infra/sai-nilayam/cover.jpg",
    imageAlt: "Sai Nilayam apartment building elevation in Gokul Plots, Hyderabad",
    imageNote: "Illustrative render, not project photography.",
    illustrative: true,
    galleryCategory: "Infra Projects",
    scope: "Residential apartments — 2 & 3 BHK",
    status: "Proposed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "Sai Nilayam" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "Gokul Plots, Hyderabad" },
      { label: "Status", value: "Proposed" },
    ],
  },
  {
    slug: "royal-residences",
    title: "Royal Residences",
    discipline: "Infra Projects",
    segment: "Standalone Apartment",
    sector: "Residential construction",
    location: "Miyapur, Hyderabad",
    summary: "A 2 & 3 BHK residential apartment development in Miyapur, Hyderabad.",
    detail:
      "Royal Residences is a 2 & 3 BHK residential apartment development in Miyapur, Hyderabad.",
    image: "/media/gallery/infra/royal-residences/cover.jpg",
    imageAlt: "Royal Residences apartment building elevation in Miyapur, Hyderabad",
    imageNote: "Illustrative render, not project photography.",
    illustrative: true,
    galleryCategory: "Infra Projects",
    scope: "Residential apartments — 2 & 3 BHK",
    status: "Proposed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "Royal Residences" },
      { label: "Sector", value: "Residential construction" },
      { label: "Location", value: "Miyapur, Hyderabad" },
      { label: "Status", value: "Proposed" },
    ],
  },
  {
    slug: "asr-avalon",
    title: "ASR Avalon",
    discipline: "Infra Projects",
    sector: "Hospitality construction",
    location: "Lingampally, Hyderabad",
    summary: "A hotel-rooms development in Lingampally, Hyderabad.",
    detail: "ASR Avalon is a hotel-rooms development in Lingampally, Hyderabad.",
    image: "/media/gallery/infra/asr-avalon/cover.jpg",
    imageAlt: "ASR Avalon hotel-rooms building elevation in Lingampally, Hyderabad",
    imageNote: "Illustrative render, not project photography.",
    illustrative: true,
    galleryCategory: "Infra Projects",
    scope: "Hotel rooms development",
    status: "Proposed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "ASR Avalon" },
      { label: "Sector", value: "Hospitality construction" },
      { label: "Location", value: "Lingampally, Hyderabad" },
      { label: "Status", value: "Proposed" },
    ],
  },
  {
    slug: "royal-nest",
    title: "Royal Nest",
    discipline: "Infra Projects",
    sector: "Hospitality construction",
    location: "Parwat Nagar",
    summary: "A hotel-rooms development in Parwat Nagar.",
    detail: "Royal Nest is a hotel-rooms development in Parwat Nagar.",
    image: "/media/gallery/infra/royal-nest/cover.jpg",
    imageAlt: "Royal Nest hotel-rooms building elevation in Parwat Nagar",
    imageNote: "Illustrative render, not project photography.",
    illustrative: true,
    galleryCategory: "Infra Projects",
    scope: "Hotel rooms development",
    status: "Proposed",
    imageGroup: "Exterior & Built Form",
    facts: [
      { label: "Project", value: "Royal Nest" },
      { label: "Sector", value: "Hospitality construction" },
      { label: "Location", value: "Parwat Nagar" },
      { label: "Status", value: "Proposed" },
    ],
  },
];

export function getSignatureProject(slug: string) {
  return signatureProjects.find((project) => project.slug === slug);
}
