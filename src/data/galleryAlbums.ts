import {
  getSignatureProject,
  type SignatureProject,
} from "@/data/signatureProjects";

export type GalleryImageGroup =
  | "Overall Spaces"
  | "Living & Shared Areas"
  | "Dining & Entertaining"
  | "Plans & Layouts"
  | "Bedrooms & Private Areas"
  | "Kitchens & Wardrobes"
  | "Workspaces"
  | "Living Space"
  | "Drawing Room"
  | "Dining Area"
  | "Kitchen"
  | "Floor Plan"
  | "Ground Floor Plan"
  | "First Floor Plan"
  | "Pooja Room"
  | "Master Bedroom"
  | "Bedroom"
  | "Children's Bedroom"
  | "Guest Bedroom"
  | "Study Room"
  | "Home Theatre"
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
  kind?: "image" | "floor-plan";
};

export type GalleryAlbumCategory =
  | "Interiors"
  | "Infra Projects"
  | "Real Estate Layouts"
  | "Advertising";

export type GalleryAlbum = {
  slug: string;
  projectSlug?: string;
  title: string;
  discipline: SignatureProject["discipline"];
  category: GalleryAlbumCategory;
  segment?:
    | "Residential"
    | "Commercial & Institutional"
    | "Standalone Apartment"
    | "High-Rise Buildings";
  location: string;
  clientName?: string;
  context?: string;
  summary: string;
  scope: string;
  images: GalleryImage[];
};

type InteriorAlbumInput = Omit<
  GalleryAlbum,
  "discipline" | "category" | "projectSlug"
>;

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
      project.discipline === "Interiors" ? "Interiors" : "Infra Projects",
    segment:
      project.discipline === "Interiors"
        ? "Commercial & Institutional"
        : project.segment,
    location: project.location,
    summary: project.summary,
    scope: project.scope,
    images,
  };
}

function createInteriorAlbum(input: InteriorAlbumInput): GalleryAlbum {
  return {
    ...input,
    discipline: "Interiors",
    category: "Interiors",
    segment: "Residential",
  };
}

function interiorView({
  residence,
  file,
  ...image
}: Omit<GalleryImage, "src"> & { residence: string; file: string }): GalleryImage {
  return {
    ...image,
    src: `/media/gallery/interiors/${residence}/${file}`,
  };
}

export const galleryAlbums: GalleryAlbum[] = [
  createInteriorAlbum({
    slug: "residence-01",
    title: "Residence 01",
    location: "Private residence",
    context: "Design-stage interior views",
    summary:
      "A curated collection of residential interior views, presented as a design study.",
    scope: "Residential interior design",
    images: [
      interiorView({ id: "residence-01-living", residence: "residence-01", file: "01-living-area.jpg", alt: "Warm residential living area with a feature wall, upholstered seating and layered lighting", caption: "Living area with a composed feature wall, seating and ambient lighting.", group: "Living Space", width: 1600, height: 900 }),
      interiorView({ id: "residence-01-dining", residence: "residence-01", file: "02-dining-area.jpg", alt: "Residential dining area with a contemporary dining table and feature lighting", caption: "Dining area designed as a natural extension of the shared living space.", group: "Dining Area", width: 1600, height: 900 }),
      interiorView({ id: "residence-01-kitchen", residence: "residence-01", file: "03-kitchen.jpg", alt: "Contemporary residential kitchen with cabinetry, work surface and integrated appliances", caption: "Kitchen with a cohesive cabinet and work-surface composition.", group: "Kitchen", width: 1600, height: 900 }),
      interiorView({ id: "residence-01-primary-bedroom", residence: "residence-01", file: "04-primary-bedroom.jpg", alt: "Master bedroom with a layered headboard wall, bedside lighting and soft furnishings", caption: "Master bedroom centred on a layered headboard wall and soft lighting.", group: "Master Bedroom", width: 1600, height: 763 }),
      interiorView({ id: "residence-01-bedroom", residence: "residence-01", file: "05-bedroom.jpg", alt: "Bedroom interior with a tailored bed wall and warm neutral finishes", caption: "Bedroom with tailored wall detailing and warm neutral finishes.", group: "Bedroom", width: 1600, height: 900 }),
      interiorView({ id: "residence-01-bedroom-detail", residence: "residence-01", file: "06-bedroom-feature-wall.jpg", alt: "Bedroom feature wall with integrated lighting and a bedside composition", caption: "A close view of the bedroom feature wall and integrated lighting.", group: "Bedroom", width: 1600, height: 900 }),
      interiorView({ id: "residence-01-study", residence: "residence-01", file: "07-study-and-tv-unit.jpg", alt: "Residential study and television unit with integrated storage and shelving", caption: "Integrated study and television unit with practical storage.", group: "Study Room", width: 1600, height: 900 }),
    ],
  }),
  createInteriorAlbum({
    slug: "residence-02",
    title: "Residence 02",
    clientName: "Mr. Anil Garu",
    location: "Bhimavaram",
    context: "Design-stage interior views",
    summary:
      "A 4BHK residential interior study, bringing shared spaces, private rooms and the approved layout together.",
    scope: "4BHK residential interior design",
    images: [
      interiorView({ id: "residence-02-drawing", residence: "residence-02", file: "01-drawing-area.jpg", alt: "Drawing area with a feature wall, lounge seating and layered lighting", caption: "Drawing area with a layered feature wall and formal lounge seating.", group: "Drawing Room", width: 1599, height: 899 }),
      interiorView({ id: "residence-02-living-dining", residence: "residence-02", file: "02-living-and-dining.jpg", alt: "Open living and dining area with coordinated furniture, lighting and wall finishes", caption: "Living and dining spaces developed as one connected composition.", group: "Living Space", width: 1600, height: 900 }),
      interiorView({ id: "residence-02-plan", residence: "residence-02", file: "floor-plan.png", alt: "Complete approved furniture and interior layout for Residence 02", caption: "Approved furniture and interior layout for the complete residence.", group: "Floor Plan", width: 1450, height: 2670, kind: "floor-plan" }),
      interiorView({ id: "residence-02-dining", residence: "residence-02", file: "03-dining-area.jpg", alt: "Residential dining area with a statement wall and contemporary table setting", caption: "Dining area with a defined gathering space and feature-wall treatment.", group: "Dining Area", width: 1600, height: 900 }),
      interiorView({ id: "residence-02-kitchen", residence: "residence-02", file: "04-kitchen.jpg", alt: "Modern kitchen with integrated cabinets, appliances and work surfaces", caption: "Kitchen with integrated cabinets, appliances and practical work surfaces.", group: "Kitchen", width: 1599, height: 899 }),
      interiorView({ id: "residence-02-pooja", residence: "residence-02", file: "05-pooja-area.jpg", alt: "Pooja area with a detailed backdrop, storage and warm lighting", caption: "Pooja area with a detailed backdrop and restrained warm lighting.", group: "Pooja Room", width: 1599, height: 899 }),
      interiorView({ id: "residence-02-primary-bedroom", residence: "residence-02", file: "06-primary-bedroom.jpg", alt: "Master bedroom with upholstered headboard wall, bedside units and warm ambient lighting", caption: "Master bedroom with a calm, layered headboard composition.", group: "Master Bedroom", width: 1599, height: 899 }),
      interiorView({ id: "residence-02-childrens-bedroom", residence: "residence-02", file: "07-childrens-bedroom.jpg", alt: "Children's bedroom with a playful feature wall, bed and study elements", caption: "Children's bedroom with integrated study and storage elements.", group: "Children's Bedroom", width: 1600, height: 900 }),
      interiorView({ id: "residence-02-guest-bedroom", residence: "residence-02", file: "08-guest-bedroom.jpg", alt: "Guest bedroom with a tailored bed wall, wardrobe and balanced lighting", caption: "Guest bedroom with a tailored bed wall and balanced lighting.", group: "Guest Bedroom", width: 1600, height: 900 }),
      interiorView({ id: "residence-02-study", residence: "residence-02", file: "09-study-room.jpg", alt: "Study room with a desk, display shelving and integrated storage", caption: "Study room with a practical desk, display shelving and storage.", group: "Study Room", width: 1600, height: 900 }),
      interiorView({ id: "residence-02-home-theatre", residence: "residence-02", file: "10-home-theatre.jpg", alt: "Home theatre with dark wall finishes, lounge seating and atmospheric lighting", caption: "Home theatre designed for a focused, immersive viewing experience.", group: "Home Theatre", width: 1600, height: 900 }),
    ],
  }),
  createInteriorAlbum({
    slug: "residence-03",
    title: "Residence 03",
    clientName: "Mr. Vasu Garu",
    location: "Bhimavaram",
    context: "Design-stage interior views",
    summary:
      "A compact residential interior study pairing the approved layout with key shared and private spaces.",
    scope: "Residential interior design",
    images: [
      interiorView({ id: "residence-03-living", residence: "residence-03", file: "01-living-area.jpg", alt: "Contemporary living area with a television wall, lounge seating and layered lighting", caption: "Living area with a detailed television wall and lounge seating.", group: "Living Space", width: 1600, height: 900 }),
      interiorView({ id: "residence-03-dining", residence: "residence-03", file: "02-dining-area.jpg", alt: "Dining area with a compact dining table, crockery unit and warm lighting", caption: "Dining area designed to connect naturally with the adjoining living space.", group: "Dining Area", width: 1600, height: 900 }),
      interiorView({ id: "residence-03-plan", residence: "residence-03", file: "floor-plan.png", alt: "Complete approved furniture and interior layout for Residence 03", caption: "Approved furniture and interior layout for the complete residence.", group: "Floor Plan", width: 1230, height: 1880, kind: "floor-plan" }),
      interiorView({ id: "residence-03-kitchen", residence: "residence-03", file: "03-kitchen.jpg", alt: "Contemporary kitchen with coordinated lower and upper cabinets, appliances and worktop", caption: "Kitchen with a compact, efficient cabinet and appliance layout.", group: "Kitchen", width: 1600, height: 900 }),
      interiorView({ id: "residence-03-primary-bedroom", residence: "residence-03", file: "04-primary-bedroom.jpg", alt: "Master bedroom with an upholstered bed wall, bedside storage and warm lighting", caption: "Master bedroom with a soft, layered bed-wall composition.", group: "Master Bedroom", width: 1600, height: 900 }),
      interiorView({ id: "residence-03-bedroom", residence: "residence-03", file: "05-bedroom.jpg", alt: "Bedroom with a feature headboard wall, upholstered bed and integrated storage", caption: "Bedroom with a tailored headboard wall and integrated storage.", group: "Bedroom", width: 1600, height: 900 }),
      interiorView({ id: "residence-03-bedroom-seating", residence: "residence-03", file: "06-bedroom-seating.jpg", alt: "Bedroom seating area with a television wall, armchair and warm finish palette", caption: "A private seating corner completed with a television wall and warm finishes.", group: "Bedroom", width: 1600, height: 900 }),
    ],
  }),
  createInteriorAlbum({
    slug: "residence-04",
    title: "Residence 04",
    clientName: "Mr. Ravi Garu",
    location: "Birla Aloktya, Bangalore",
    context: "Design-stage interior views",
    summary:
      "A duplex residence study with ground- and first-floor layouts shown alongside selected interior views.",
    scope: "Duplex residential interior design",
    images: [
      interiorView({ id: "residence-04-overall", residence: "residence-04", file: "02-open-living-layout.jpg", alt: "Open living layout with seating, feature walls and integrated lighting", caption: "Open living layout with connected seating, feature walls and lighting.", group: "Living Space", width: 1600, height: 900 }),
      interiorView({ id: "residence-04-ground-plan", residence: "residence-04", file: "ground-floor-plan.png", alt: "Approved ground-floor furniture and interior layout for Residence 04", caption: "Approved ground-floor furniture and interior layout.", group: "Ground Floor Plan", width: 1940, height: 2580, kind: "floor-plan" }),
      interiorView({ id: "residence-04-first-plan", residence: "residence-04", file: "first-floor-plan.png", alt: "Approved first-floor furniture and interior layout for Residence 04", caption: "Approved first-floor furniture and interior layout.", group: "First Floor Plan", width: 1830, height: 2400, kind: "floor-plan" }),
      interiorView({ id: "residence-04-living", residence: "residence-04", file: "01-living-area.jpg", alt: "Living area with a television wall, lounge seating and warm contemporary finishes", caption: "Selected shared-space view from the residence interior study.", group: "Living Space", width: 1600, height: 900 }),
      interiorView({ id: "residence-04-kitchen", residence: "residence-04", file: "03-kitchen.jpg", alt: "Modern kitchen with a tall cabinet wall, counter space and integrated appliances", caption: "Kitchen with a practical tall-cabinet wall and integrated appliances.", group: "Kitchen", width: 1600, height: 900 }),
      interiorView({ id: "residence-04-bedroom", residence: "residence-04", file: "04-bedroom.jpg", alt: "Bedroom with an upholstered bed wall, bedside lighting and integrated wardrobe", caption: "Selected private-space view from the residence interior study.", group: "Bedroom", width: 1600, height: 900 }),
      interiorView({ id: "residence-04-childrens-bedroom", residence: "residence-04", file: "05-childrens-bedroom.jpg", alt: "Children's bedroom with a playful feature wall, bed and study corner", caption: "Children's bedroom with integrated study and storage.", group: "Children's Bedroom", width: 1600, height: 900 }),
      interiorView({ id: "residence-04-bedroom-detail", residence: "residence-04", file: "06-bedroom-window-wall.jpg", alt: "Bedroom with a window-side bed wall, warm panelling and bedside lighting", caption: "Bedroom detail with a warm window-side wall treatment.", group: "Bedroom", width: 1600, height: 900 }),
    ],
  }),
  createAlbum("bmw-showroom-jubilee-hills", [
    {
      id: "customer-display-environment",
      src: "/media/projects/bmw-service-station-brochure.jpg",
      alt: "BMW showroom environment with a silver vehicle, timber wall finish and illuminated brand wall",
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
  createAlbum("vasavi-urban-raise", [
    {
      id: "vasavi-urban-raise-towers",
      src: "/media/gallery/infra/vasavi-urban-raise/cover.jpg",
      alt: "Vasavi Urban Raise residential tower under construction, showing exposed concrete floors and scaffolding",
      caption:
        "Vasavi Urban Raise mid-construction, showing the completed and ongoing tower structures side by side.",
      group: "Construction Process",
      width: 1080,
      height: 1920,
    },
  ]),
  createAlbum("jayabheri-nexa", [
    {
      id: "jayabheri-nexa-facade",
      src: "/media/gallery/infra/jayabheri-nexa/cover.jpg",
      alt: "Completed Jayabheri NEXA commercial building with a dark glazed facade in Kondapur",
      caption: "Jayabheri NEXA's completed glazed facade in Kondapur.",
      group: "Exterior & Built Form",
      width: 927,
      height: 1536,
    },
  ]),
  createAlbum("gandipet-lake-view-villa", [
    {
      id: "gandipet-villa-foundation",
      src: "/media/gallery/infra/gandipet-lake-view-villa/cover.jpg",
      alt: "Foundation and slab work in progress for the Gandipet lake-view luxury villa",
      caption: "Foundation and slab work for the Gandipet lake-view villa.",
      group: "Construction Process",
      width: 1488,
      height: 672,
    },
  ]),
  createAlbum("praneeth-pranav-daffodils", [
    {
      id: "praneeth-daffodils-entrance",
      src: "/media/gallery/infra/praneeth-pranav-daffodils/cover.jpg",
      alt: "Completed Praneeth Pranav Daffodils apartment entrance with signage and landscaping",
      caption:
        "The completed Praneeth Pranav Daffodils entrance, landscaping and signage.",
      group: "Exterior & Built Form",
      width: 1152,
      height: 870,
    },
  ]),
  createAlbum("gitam-residency", [
    {
      id: "gitam-residency-structure",
      src: "/media/gallery/infra/gitam-residency/cover.jpg",
      alt: "GITAM Residency apartment tower under construction with scaffolding and a tower crane",
      caption:
        "GITAM Residency under construction, with scaffolding and a tower crane in place.",
      group: "Construction Process",
      width: 864,
      height: 1536,
    },
  ]),
  createAlbum("hedgewar-hospital-research-centre", [
    {
      id: "hedgewar-hospital-render",
      src: "/media/gallery/infra/hedgewar-hospital-research-centre/cover.jpg",
      alt: "Architectural rendering of the Dr. Hedgewar Hospital & Research Centre building",
      caption: "Architectural rendering of the Dr. Hedgewar Hospital & Research Centre.",
      group: "Exterior & Built Form",
      width: 2706,
      height: 1914,
    },
  ]),
  createAlbum("southwoods-shamshabad", [
    {
      id: "southwoods-site-prep",
      src: "/media/gallery/infra/southwoods-shamshabad/cover.jpg",
      alt: "Excavation and site preparation underway for the Southwoods luxury villa",
      caption: "Site excavation and preparation for the Southwoods villa.",
      group: "Construction Process",
      width: 864,
      height: 1536,
    },
  ]),
  createAlbum("sylvanor-mokila", [
    {
      id: "sylvanor-render",
      src: "/media/gallery/infra/sylvanor-mokila/cover.jpg",
      alt: "Architectural rendering of the SYLVANOR luxury villa development",
      caption: "Architectural rendering of the SYLVANOR villa development.",
      group: "Exterior & Built Form",
      width: 888,
      height: 510,
    },
  ]),
  createAlbum("mangalam-rise", [
    {
      id: "mangalam-rise-foundation",
      src: "/media/gallery/infra/mangalam-rise/cover.jpg",
      alt: "Foundation excavation and shuttering underway at the Mangalam Rise site",
      caption: "Foundation excavation and shuttering at the Mangalam Rise site.",
      group: "Construction Process",
      width: 1440,
      height: 1080,
    },
  ]),
  createAlbum("karachi-commercial", [
    {
      id: "karachi-commercial-excavation",
      src: "/media/gallery/infra/karachi-commercial/cover.jpg",
      alt: "Deep excavation underway at the Karachi Commercial building site",
      caption: "Deep excavation at the Karachi Commercial site.",
      group: "Construction Process",
      width: 1536,
      height: 864,
    },
  ]),
  createAlbum("trendsquare-world-of-garden", [
    {
      id: "trendsquare-world-of-garden-site",
      src: "/media/gallery/infra/trendsquare-world-of-garden/cover.jpg",
      alt: "Tower cranes and early structural work at the TrendSquare World of Garden site",
      caption: "Tower cranes and early structural work at TrendSquare World of Garden.",
      group: "Construction Process",
      width: 1440,
      height: 1242,
    },
  ]),
  createAlbum("heyday-senior-living-community", [
    {
      id: "heyday-senior-living-structure",
      src: "/media/gallery/infra/heyday-senior-living-community/cover.jpg",
      alt: "Multi-block structure under construction with a tower crane at Heyday senior living community",
      caption: "Multi-block structure and tower crane at the Heyday senior living site.",
      group: "Construction Process",
      width: 1080,
      height: 1920,
    },
  ]),
  createAlbum("royal-ridge", [
    {
      id: "royal-ridge-elevation",
      src: "/media/gallery/infra/royal-ridge/cover.jpg",
      alt: "Royal Ridge residential apartment building elevation in JP Nagar, Hyderabad",
      caption: "Royal Ridge, a 3 & 4 BHK residential development in JP Nagar, Hyderabad.",
      group: "Exterior & Built Form",
      width: 1280,
      height: 960,
    },
  ]),
  createAlbum("asr-residency", [
    {
      id: "asr-residency-elevation",
      src: "/media/gallery/infra/asr-residency/cover.jpg",
      alt: "ASR Residency apartment building elevation in Bhimavaram, Andhra Pradesh",
      caption: "ASR Residency, a 2 & 3 BHK residential development in Bhimavaram, Andhra Pradesh.",
      group: "Exterior & Built Form",
      width: 1280,
      height: 1033,
    },
  ]),
  createAlbum("rr-residency", [
    {
      id: "rr-residency-elevation",
      src: "/media/gallery/infra/rr-residency/cover.jpg",
      alt: "RR Residency apartment building elevation with ground-floor retail in Gokul Plots, Hyderabad",
      caption: "RR Residency, with ground-floor retail, in Gokul Plots, Hyderabad.",
      group: "Exterior & Built Form",
      width: 1082,
      height: 1280,
    },
  ]),
  createAlbum("kings-residency", [
    {
      id: "kings-residency-elevation",
      src: "/media/gallery/infra/kings-residency/cover.jpg",
      alt: "Kings Residency apartment building elevation in Bhimavaram, Hyderabad",
      caption: "Kings Residency, a 3 & 4 BHK residential development in Bhimavaram, Hyderabad.",
      group: "Exterior & Built Form",
      width: 1280,
      height: 1087,
    },
  ]),
  createAlbum("indus-villas", [
    {
      id: "indus-villas-exterior",
      src: "/media/gallery/infra/indus-villas/cover.jpg",
      alt: "Indus Villas — completed two-storey independent residential villa with a private driveway and gate",
      caption: "Indus Villas, a completed independent residential villa.",
      group: "Exterior & Built Form",
      width: 853,
      height: 1280,
    },
  ]),
  createAlbum("sai-nilayam", [
    {
      id: "sai-nilayam-elevation",
      src: "/media/gallery/infra/sai-nilayam/cover.jpg",
      alt: "Sai Nilayam apartment building elevation in Gokul Plots, Hyderabad",
      caption: "Sai Nilayam, a 2 & 3 BHK residential development in Gokul Plots, Hyderabad.",
      group: "Exterior & Built Form",
      width: 995,
      height: 1280,
    },
  ]),
  createAlbum("royal-residences", [
    {
      id: "royal-residences-elevation",
      src: "/media/gallery/infra/royal-residences/cover.jpg",
      alt: "Royal Residences apartment building elevation in Miyapur, Hyderabad",
      caption: "Royal Residences, a 2 & 3 BHK residential development in Miyapur, Hyderabad.",
      group: "Exterior & Built Form",
      width: 1280,
      height: 875,
    },
  ]),
  createAlbum("asr-avalon", [
    {
      id: "asr-avalon-elevation",
      src: "/media/gallery/infra/asr-avalon/cover.jpg",
      alt: "ASR Avalon hotel-rooms building elevation in Lingampally, Hyderabad",
      caption: "ASR Avalon, a hotel-rooms development in Lingampally, Hyderabad.",
      group: "Exterior & Built Form",
      width: 1280,
      height: 1280,
    },
  ]),
  createAlbum("royal-nest", [
    {
      id: "royal-nest-elevation",
      src: "/media/gallery/infra/royal-nest/cover.jpg",
      alt: "Royal Nest hotel-rooms building elevation in Parwat Nagar",
      caption: "Royal Nest, a hotel-rooms development in Parwat Nagar.",
      group: "Exterior & Built Form",
      width: 916,
      height: 1280,
    },
  ]),
];

export const galleryAlbumCategories: GalleryAlbumCategory[] = [
  "Interiors",
  "Infra Projects",
  "Real Estate Layouts",
];

export function getGalleryAlbum(slug: string) {
  return galleryAlbums.find((album) => album.slug === slug);
}

export function getGalleryAlbumForProject(projectSlug: string) {
  return galleryAlbums.find((album) => album.projectSlug === projectSlug);
}
