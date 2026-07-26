export type Division = {
  slug: "interiors" | "construction";
  name: "Interiors" | "Construction";
  eyebrow: string;
  title: string;
  introduction: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  imageNote: string;
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
    eyebrow: "ASR Interiors",
    title: "Finished exactly as drawn.",
    introduction:
      "Homes, workplaces, retail and hospitality interiors—designed, made and installed by one ASR team. What you approve on paper is what gets handed over.",
    image: "/media/asr-interiors-capability.png",
    imageAlt:
      "Representative warm interior showing coordinated materials, lighting and joinery",
    imagePosition: "50% 54%",
    imageNote:
      "Representative visual, not project photography.",
    metrics: [
      { value: "25 years", label: "Interior experience" },
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
          "For homeowners who want the layout, materials, kitchens, wardrobes and custom woodwork planned as one complete home.",
      },
      {
        title: "A workplace",
        body:
          "For organizations that need office interiors designed around their people, daily work, technical needs and identity.",
      },
      {
        title: "A customer-facing space",
        body:
          "For shops, restaurants, hotels and brand spaces where layout, lighting and details must support the business.",
      },
      {
        title: "Focused custom work",
        body:
          "For kitchens, wardrobes and custom woodwork with practical storage, dependable hardware and careful finishing.",
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
          "We begin with the people, purpose, priorities and practical requirements behind the space.",
      },
      {
        title: "Plan",
        body:
          "We agree on the design, work required, materials, services and responsibilities.",
      },
      {
        title: "Coordinate",
        body:
          "We coordinate production, material orders, specialist work and installation on site.",
      },
      {
        title: "Deliver",
        body:
          "We check the completed work against the approved design before handover.",
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
    eyebrow: "ASR Construction",
    title: "Strong where it doesn’t show.",
    introduction:
      "Residential, commercial and institutional builds. One ASR team carries the structure, the services and the finish—and the responsibility for all three.",
    image: "/media/asr-construction-capability.png",
    imageAlt:
      "Representative construction environment showing structure and architectural delivery",
    imagePosition: "50% 48%",
    imageNote:
      "Representative visual, not project photography.",
    metrics: [
      { value: "20 years", label: "Construction experience" },
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
          "For owners planning a home, villa or residential development that needs one team from the early building stages through finishing.",
      },
      {
        title: "Commercial construction",
        body:
          "For business and commercial projects where the structure, services, schedule, daily needs and finishes must work together.",
      },
      {
        title: "Institutional environments",
        body:
          "For public and institutional projects that require careful planning, clear responsibility and respect for the setting.",
      },
      {
        title: "Structural and specialist works",
        body:
          "For structural steel, glazing, ACP, metal work and related specialist work that must fit the wider build.",
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
        title: "Define",
        body:
          "We clarify the project purpose, current stage, available drawings, priorities and responsibilities already in place.",
      },
      {
        title: "Plan",
        body:
          "We agree on the work, schedule, engineering needs, materials and specialist requirements before construction moves ahead.",
      },
      {
        title: "Execute",
        body:
          "We manage civil works, services, specialist contractors and finishing against the agreed plan.",
      },
      {
        title: "Hand over",
        body:
          "We review the completed work and prepare the project for handover.",
      },
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
