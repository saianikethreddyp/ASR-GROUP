export type Division = {
  slug: "interiors" | "construction";
  name: "Interiors" | "Construction";
  eyebrow: string;
  title: string;
  introduction: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  metrics: ReadonlyArray<{
    value: string;
    label: string;
  }>;
  audienceTitle: string;
  audiences: ReadonlyArray<{
    title: string;
    body: string;
  }>;
  scopeTitle: string;
  scopeIntroduction: string;
  services: ReadonlyArray<string>;
  outcomeTitle: string;
  outcomeBody: string;
  process: ReadonlyArray<{
    title: string;
    body: string;
  }>;
  clientsTitle: string;
  clientsIntroduction: string;
  clients: ReadonlyArray<{
    name: string;
    industry: string;
  }>;
  galleryHref: string;
  galleryLabel: string;
  galleryTitle: string;
  galleryBody: string;
  relatedHref: string;
  relatedLabel: string;
  relatedTitle: string;
  relatedBody: string;
  closingTitle: string;
  closingBody: string;
};

export const divisions: Record<Division["slug"], Division> = {
  interiors: {
    slug: "interiors",
    name: "Interiors",
    eyebrow: "ASR Interio",
    title: "Finished exactly as drawn.",
    introduction:
      "Homes, workplaces, retail and hospitality interiors—designed, made and installed by ASR Group. What you approve on paper is what gets handed over.",
    image: "/media/asr-interiors-capability.png",
    imageAlt:
      "Warm interior showing coordinated materials, lighting and joinery",
    imagePosition: "50% 54%",
    metrics: [
      { value: "25+ years", label: "Interior experience" },
      {
        value: "4,000+",
        label: "Residential spaces",
      },
    ],
    audienceTitle: "Start with the space you need to make work.",
    audiences: [
      {
        title: "A complete home",
        body:
          "ASR plans the layout, materials, kitchens, wardrobes and custom woodwork as one complete home.",
      },
      {
        title: "A workplace",
        body:
          "ASR designs office interiors around your people, daily work, technical needs and identity.",
      },
      {
        title: "A customer-facing space",
        body:
          "ASR plans shops, restaurants, hotels and brand spaces where every detail supports the business.",
      },
      {
        title: "Focused custom work",
        body:
          "ASR makes kitchens, wardrobes and custom woodwork with practical storage and careful finishing.",
      },
    ],
    scopeTitle: "One plan for the complete interior.",
    scopeIntroduction:
      "The work is planned around your project. ASR can manage each stage from the approved design to the finished space.",
    services: [
      "Full-home interiors",
      "Corporate and office interiors",
      "Retail and brand spaces",
      "Restaurants, hospitality and business spaces",
      "Kitchens, wardrobes and custom woodwork",
      "Interior project management",
    ],
    outcomeTitle: "The finished space should match the approved design.",
    outcomeBody:
      "A strong interior brings function, materials, lighting, production and installation together. These decisions stay connected from planning to completion.",
    process: [
      {
        title: "Understand",
        body:
          "We learn how you want the space to look and work.",
      },
      {
        title: "Plan",
        body:
          "We agree on the design, materials, work and responsibilities.",
      },
      {
        title: "Design",
        body:
          "We develop the approved design, materials and details into one coordinated direction.",
      },
      {
        title: "Handover",
        body:
          "We complete the installation, check the finished space and hand it over against the approved design.",
      },
    ],
    clientsTitle: "Experience across spaces that have to perform.",
    clientsIntroduction:
      "Selected organizations represented in ASR Interio’s workplace, institutional, healthcare, retail, hospitality and branded-environment experience.",
    clients: [
      { name: "ICRISAT", industry: "Institutions & Public" },
      { name: "Wipro", industry: "Technology & Business" },
      { name: "Rallis India", industry: "Industry & Enterprise" },
      { name: "Hetero Drugs", industry: "Healthcare & Pharma" },
      { name: "BMW", industry: "Automotive & Enterprise" },
      { name: "Reliance Fresh", industry: "Retail & Commercial" },
      { name: "Hotel Halliburton", industry: "Hospitality" },
      {
        name: "United Nations Organization project",
        industry: "Institutions & Public",
      },
    ],
    galleryHref: "/gallery",
    galleryLabel: "View interior work",
    galleryTitle: "See the materials, details and finished environments.",
    galleryBody:
      "Residential, workplace, branded and institutional interiors — photographed up close.",
    relatedHref: "/construction",
    relatedLabel: "Explore Construction",
    relatedTitle: "Does the requirement begin with the building itself?",
    relatedBody:
      "ASR Construction manages planning, civil works, engineering needs, specialist work, finishing and handover.",
    closingTitle: "Planning an interior?",
    closingBody:
      "Share the type of space, location and current stage. ASR will help identify the work required and the next step.",
  },
  construction: {
    slug: "construction",
    name: "Construction",
    eyebrow: "ASR Home LLP",
    title: "Strong where it doesn’t show.",
    introduction:
      "Residential, commercial and institutional builds. ASR Group carries the structure, the services and the finish—and the responsibility for all three.",
    image: "/media/asr-construction-capability.png",
    imageAlt:
      "Construction environment showing structure and architectural delivery",
    imagePosition: "50% 48%",
    metrics: [
      { value: "20+ years", label: "Construction experience" },
      {
        value: "6 lakh+ sq. ft.",
        label: "Constructed",
      },
    ],
    audienceTitle: "Start with the responsibility your project needs.",
    audiences: [
      {
        title: "Residential construction",
        body:
          "ASR builds homes, villas and residential developments from the early stages through finishing.",
      },
      {
        title: "Commercial construction",
        body:
          "ASR manages commercial projects so the structure, services, schedule and finishes work together.",
      },
      {
        title: "Institutional environments",
        body:
          "ASR delivers public and institutional projects with careful planning and clear responsibility.",
      },
      {
        title: "Structural and specialist works",
        body:
          "ASR coordinates structural steel, glazing, ACP, metal work and related specialist work with the wider build.",
      },
    ],
    scopeTitle: "The main parts of the build, managed together.",
    scopeIntroduction:
      "Every construction project is different. ASR clearly defines the work and brings the required technical and site teams together.",
    services: [
      "Construction planning and site work",
      "Architectural coordination",
      "Structural and civil works",
      "Mechanical and electrical coordination",
      "Structural steel works and glazing",
      "Project management and handover",
    ],
    outcomeTitle: "Good construction depends on connected decisions.",
    outcomeBody:
      "Construction becomes harder when planning, engineering, specialist contractors and site teams work separately. ASR keeps responsibilities clear and decisions connected through completion.",
    process: [
      {
        title: "Understand",
        body:
          "We clarify the project, drawings, priorities and responsibilities.",
      },
      {
        title: "Plan",
        body:
          "We agree on the work, schedule, materials and technical requirements.",
      },
      {
        title: "Build",
        body:
          "We manage civil work, services, specialists and finishing against the plan.",
      },
      {
        title: "Handover",
        body:
          "We complete the final checks, close the agreed work and hand over the project clearly.",
      },
    ],
    clientsTitle: "Experience across complex built environments.",
    clientsIntroduction:
      "Selected developers, infrastructure organizations and industrial businesses represented in ASR Home LLP’s wider project experience.",
    clients: [
      { name: "India Cements", industry: "Industry & Enterprise" },
      { name: "K. Raheja IT Park", industry: "Development" },
      { name: "Karnataka Thermal Power", industry: "Infrastructure" },
      { name: "TCI Constructions", industry: "Development" },
      { name: "DSR Constructions", industry: "Development" },
      { name: "Manjeera Group", industry: "Development" },
      { name: "Ramky", industry: "Development" },
      { name: "Indu Projects", industry: "Development" },
    ],
    galleryHref: "/gallery?category=Construction",
    galleryLabel: "View construction work",
    galleryTitle: "See completed construction work.",
    galleryBody:
      "Construction and institutional projects, with details of the work ASR completed.",
    relatedHref: "/interiors",
    relatedLabel: "Explore Interiors",
    relatedTitle: "Does the requirement begin inside the space?",
    relatedBody:
      "ASR Interiors brings planning, materials, custom work, services and installation together for homes, workplaces and brand spaces.",
    closingTitle: "Planning a construction project?",
    closingBody:
      "Share the project type, location, approximate size and current stage. ASR will explain how the team can help.",
  },
};
