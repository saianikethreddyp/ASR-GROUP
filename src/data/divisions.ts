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
    title: "Spaces shaped around how people live, work and experience a brand.",
    introduction:
      "ASR designs and executes complete interiors for premium homes, workplaces, retail environments, hospitality spaces and other commercial settings—bringing planning, materials, services, custom work and site execution into one coordinated process.",
    image: "/media/asr-interiors-capability.png",
    imageAlt:
      "Representative warm interior showing coordinated materials, lighting and joinery",
    imagePosition: "50% 54%",
    imageNote:
      "Representative visual · final project photography is presented in the Gallery where approved.",
    metrics: [
      { value: "25 years", label: "Interior experience" },
      {
        value: "4,000+",
        label: "Residential spaces represented in ASR’s profile",
      },
    ],
    audienceTitle: "Start with the space you need to make work.",
    audiences: [
      {
        title: "A complete home",
        body:
          "For homeowners who want planning, materials, kitchens, wardrobes, custom joinery and execution considered as one living environment.",
      },
      {
        title: "A workplace",
        body:
          "For organizations that need an office or corporate fit-out aligned with people, operations, technical requirements and identity.",
      },
      {
        title: "A customer-facing space",
        body:
          "For retail, hospitality and branded environments where circulation, lighting, detail and operational performance all represent the business.",
      },
      {
        title: "Focused custom work",
        body:
          "For kitchens, wardrobes and joinery that require thoughtful storage planning, dependable hardware and controlled finishing.",
      },
    ],
    scopeTitle: "One interior brief. The connected disciplines to deliver it.",
    scopeIntroduction:
      "The exact scope is defined around the project. ASR can coordinate the work required from approved intent through the finished space.",
    services: [
      "Full-home interiors",
      "Corporate and office fit-outs",
      "Retail and branded environments",
      "Restaurants, hospitality and business spaces",
      "Kitchens, wardrobes and custom joinery",
      "Interior project management and execution",
    ],
    outcomeTitle: "The intent should survive the execution.",
    outcomeBody:
      "A strong interior is not a collection of isolated finishes. It is the result of decisions about function, materials, lighting, services, production and installation staying connected as the work moves forward.",
    process: [
      {
        title: "Understand",
        body:
          "We begin with the people, purpose, priorities and practical requirements behind the space.",
      },
      {
        title: "Plan",
        body:
          "Design intent, scope, materials, services, responsibilities and execution requirements are aligned.",
      },
      {
        title: "Coordinate",
        body:
          "Production, procurement, specialist inputs and on-site execution move around one shared direction.",
      },
      {
        title: "Deliver",
        body:
          "The work is reviewed against the agreed intent and brought together for a considered handover.",
      },
    ],
    galleryHref: "/gallery?category=Residential%20Interiors",
    galleryLabel: "View interior work",
    galleryTitle: "See the materials, details and finished environments.",
    galleryBody:
      "Explore the currently available residential, workplace, branded and institutional interior collections in the ASR Gallery.",
    relatedHref: "/construction",
    relatedLabel: "Explore Construction",
    relatedTitle: "Does the requirement begin with the building itself?",
    relatedBody:
      "ASR Construction connects planning, civil works, engineering coordination, specialist execution, finishing and handover.",
    closingTitle: "Planning an interior?",
    closingBody:
      "Share the type of space, location and current stage. ASR will help identify the scope and the most useful next step.",
  },
  construction: {
    slug: "construction",
    name: "Construction",
    eyebrow: "ASR Construction",
    title: "Built from the ground up, with responsibility under one roof.",
    introduction:
      "ASR delivers comprehensive construction solutions for residential, commercial and institutional requirements, connecting planning, engineering coordination, structural and civil works, specialist execution, finishing and handover.",
    image: "/media/asr-construction-capability.png",
    imageAlt:
      "Representative construction environment showing structure and architectural delivery",
    imagePosition: "50% 48%",
    imageNote:
      "Representative visual · verified project imagery and scope are presented in the Gallery where approved.",
    metrics: [
      { value: "20 years", label: "Construction experience" },
      {
        value: "6 lakh+ sq. ft.",
        label: "Construction delivery stated in ASR’s profile",
      },
    ],
    audienceTitle: "Start with the responsibility your project needs.",
    audiences: [
      {
        title: "Residential construction",
        body:
          "For owners planning a home, villa or residential development that needs coordinated execution from the early build stages through finish.",
      },
      {
        title: "Commercial construction",
        body:
          "For business and commercial requirements where structure, services, programme, operational needs and finish must remain aligned.",
      },
      {
        title: "Institutional environments",
        body:
          "For serious public or institutional settings that require measured coordination, accountability and respect for the project context.",
      },
      {
        title: "Structural and specialist works",
        body:
          "For structural steel, glazing, ACP, uPVC, metal work and related scopes that must connect cleanly with the wider build.",
      },
    ],
    scopeTitle: "The major build disciplines, coordinated around one outcome.",
    scopeIntroduction:
      "Every construction scope is different. ASR defines responsibilities clearly and connects the required technical and execution teams around the agreed brief.",
    services: [
      "Construction planning and execution",
      "Architectural coordination",
      "Structural and civil works",
      "Mechanical and electrical coordination",
      "Structural steel works and glazing",
      "Project management and handover",
    ],
    outcomeTitle: "Control comes from keeping decisions connected.",
    outcomeBody:
      "Construction becomes harder when planning, engineering inputs, specialist packages and site execution move independently. ASR’s integrated model is designed to keep responsibilities visible and decisions connected through delivery.",
    process: [
      {
        title: "Define",
        body:
          "We clarify the project purpose, current stage, available drawings, priorities and responsibilities already in place.",
      },
      {
        title: "Plan",
        body:
          "Scope, sequencing, engineering inputs, materials and specialist requirements are coordinated before execution advances.",
      },
      {
        title: "Execute",
        body:
          "Civil works, services, specialist packages and finishing are managed against the agreed direction.",
      },
      {
        title: "Hand over",
        body:
          "The completed work is reviewed, brought together and prepared for a responsible project handover.",
      },
    ],
    galleryHref: "/gallery?category=Construction",
    galleryLabel: "View construction work",
    galleryTitle: "See construction responsibility in practice.",
    galleryBody:
      "Explore the construction and institutional collections currently available in the ASR Gallery, with scope described where it is verified.",
    relatedHref: "/interiors",
    relatedLabel: "Explore Interiors",
    relatedTitle: "Does the requirement begin inside the space?",
    relatedBody:
      "ASR Interiors brings planning, materials, custom work, services and site execution together for homes, workplaces and branded environments.",
    closingTitle: "Planning a construction project?",
    closingBody:
      "Share the project type, location, approximate scale and current stage. ASR will help clarify where the team can take responsibility.",
  },
};
