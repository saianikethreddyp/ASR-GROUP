"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import ClosingCta from "@/components/ClosingCta";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";
import Reveal from "@/components/Reveal";
import { signatureProjects } from "@/data/signatureProjects";

const primaryFilters = ["All Projects", "Interiors", "Construction"] as const;
const interiorFilters = [
  "All Interiors",
  "Residential",
  "Corporate & Commercial",
  "Branded Environments",
  "Institutional",
] as const;

type PrimaryFilter = (typeof primaryFilters)[number];
type InteriorFilter = (typeof interiorFilters)[number];

const workTypes = [
  {
    title: "Residential Interiors",
    category: "Interiors · Residential",
    description:
      "Complete interior environments shaped around the people who live in them—from space planning and custom joinery to lighting, materials, kitchens, wardrobes, and final execution.",
    image: "/media/asr-interiors-capability.png",
    alt: "Warm residential interior showing joinery, materials, and lighting",
    href: "/gallery",
  },
  {
    title: "Corporate & Commercial Interiors",
    category: "Interiors · Corporate & Commercial",
    description:
      "Workplaces and commercial spaces coordinated around function, technical requirements, organizational identity, and everyday performance.",
    image: "/media/asr-aperture-material-study.jpg",
    alt: "Architectural material and technical coordination study",
    href: "/gallery",
  },
  {
    title: "Construction",
    category: "Construction · Residential & Commercial",
    description:
      "Buildings coordinated across planning, civil works, engineering inputs, specialist requirements, finishing, and handover.",
    image: "/media/asr-construction-capability.png",
    alt: "Construction capability and architectural delivery",
    href: "/gallery?category=Construction",
  },
] as const;

export default function ProjectsPage() {
  const [primaryFilter, setPrimaryFilter] = useState<PrimaryFilter>("All Projects");
  const [interiorFilter, setInteriorFilter] = useState<InteriorFilter>("All Interiors");
  const reduceMotion = useReducedMotion();
  const featuredProject =
    signatureProjects.find((project) => project.slug === "bmw-service-station") ??
    signatureProjects[0];

  const visibleProjects = useMemo(() => {
    return signatureProjects.filter((project) => {
      if (primaryFilter !== "All Projects" && project.discipline !== primaryFilter) {
        return false;
      }
      if (primaryFilter !== "Interiors" || interiorFilter === "All Interiors") {
        return true;
      }
      if (interiorFilter === "Institutional") {
        return project.galleryCategory === "Institutional";
      }
      return project.galleryCategory === interiorFilter;
    });
  }, [interiorFilter, primaryFilter]);

  const selectPrimary = (filter: PrimaryFilter) => {
    setPrimaryFilter(filter);
    if (filter !== "Interiors") setInteriorFilter("All Interiors");
  };

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <section className="relative px-5 pb-18 pt-36 sm:px-9 sm:pb-24 sm:pt-44 lg:px-[4.8rem] lg:pb-32 lg:pt-52" aria-labelledby="projects-title">
        <InternalHeader activeLabel="Projects" />
        <div className="mx-auto grid max-w-[1540px] gap-11 lg:grid-cols-[minmax(0,1.12fr)_minmax(23rem,.88fr)] lg:items-end lg:gap-16">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-6 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Projects</p>
            <h1 id="projects-title" className="font-display display-heading-long max-w-[12ch] text-[clamp(4rem,7vw,8.2rem)] leading-[0.89] tracking-[-0.055em]">Find the work most relevant to what you are planning.</h1>
          </motion.div>
          <motion.div
            className="lg:pb-2"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.78, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#d8d0c4]">
              <Image
                src="/media/projects/bmw-service-station-brochure.jpg"
                alt="BMW customer environment represented in ASR's project record"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <p className="mt-6 max-w-[35rem] text-[clamp(1rem,1.2vw,1.12rem)] leading-[1.72] text-[#465058]">
              Selected work across Interiors and Construction. Open any project to see its spaces, materials and details together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1540px]">
          <Reveal>
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Featured work</p>
            <h2 className="font-display max-w-[12ch] text-[clamp(3.2rem,5vw,6rem)] leading-[0.94] tracking-[-0.045em]">A closer look at responsibility in practice.</h2>
          </Reveal>
          <Reveal className="mt-12 overflow-hidden rounded-[18px] bg-[#081523] text-[#f2eee6]" delay={0.08}>
            <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(26rem,.8fr)]">
              <div className="relative aspect-[16/11] min-h-[26rem] lg:aspect-auto">
                <Image src={featuredProject.image} alt={featuredProject.imageAlt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-between px-6 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                <div>
                  <p className="text-[0.62rem] font-semibold tracking-[0.15em] text-[#c6a36b] uppercase">{featuredProject.discipline} · {featuredProject.galleryCategory}</p>
                  <h3 className="font-display mt-5 text-[clamp(3rem,4.4vw,5.4rem)] leading-[0.92] tracking-[-0.045em]">{featuredProject.title}</h3>
                  <p className="mt-5 text-xs font-semibold text-white/52">{featuredProject.location}</p>
                  <p className="mt-7 max-w-[34rem] text-[0.98rem] leading-7 text-white/66">An automotive customer environment requiring disciplined execution across materials, lighting, display, customer zones, and brand standards.</p>
                  <p className="mt-5 text-[0.66rem] leading-5 text-white/44">{featuredProject.imageNote}</p>
                </div>
                <Link href={`/gallery/${featuredProject.slug}`} className="cta-primary group mt-10 inline-flex min-h-14 w-fit items-center gap-10 rounded-[10px] px-7 text-[0.78rem] font-semibold">View project <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="flex flex-col gap-7 border-y border-[#111820]/16 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {primaryFilters.map((filter) => (
                <button key={filter} type="button" onClick={() => selectPrimary(filter)} aria-pressed={primaryFilter === filter} className={`min-h-11 rounded-full border px-5 text-xs font-semibold transition-colors ${primaryFilter === filter ? "border-[#111820] bg-[#111820] text-[#f2eee6]" : "border-[#111820]/18 text-[#465058] hover:border-[#111820]/42 hover:text-[#111820]"}`}>
                  {filter}
                </button>
              ))}
            </div>
            <p aria-live="polite" className="text-xs text-[#626a70]">{visibleProjects.length} project {visibleProjects.length === 1 ? "record" : "records"}</p>
          </Reveal>

          <AnimatePresence initial={false}>
            {primaryFilter === "Interiors" ? (
              <motion.div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-[#111820]/16 py-5" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                {interiorFilters.map((filter) => (
                  <button key={filter} type="button" onClick={() => setInteriorFilter(filter)} aria-pressed={interiorFilter === filter} className={`text-xs font-semibold transition-colors ${interiorFilter === filter ? "text-[#9a7645]" : "text-[#687077] hover:text-[#111820]"}`}>{filter}</button>
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="mt-14">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.article key={project.slug} layout initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: 10 }} transition={{ duration: reduceMotion ? 0.01 : 0.45, delay: index * 0.04 }} className="border-b border-[#111820]/18 py-8 first:border-t lg:py-10">
                  <Link href={`/gallery/${project.slug}`} className="group grid gap-7 lg:grid-cols-[4rem_minmax(17rem,.52fr)_minmax(20rem,.78fr)_minmax(17rem,.7fr)] lg:items-center lg:gap-10">
                    <p className="text-[0.66rem] font-semibold tracking-[0.14em] text-[#9a7645]">0{index + 1}</p>
                    <div>
                      <h2 className="font-display text-[clamp(2.2rem,3.4vw,4rem)] leading-[0.95] tracking-[-0.04em]">{project.title}</h2>
                      <p className="mt-3 text-xs text-[#626a70]">{project.discipline} · {project.galleryCategory}</p>
                    </div>
                    <p className="max-w-[38rem] text-sm leading-6 text-[#505961]">{project.summary}</p>
                    <div className="flex items-center justify-between gap-5 lg:justify-end">
                      <p className="text-xs text-[#626a70]">{project.location}</p>
                      <span aria-hidden="true" className="text-xl text-[#9a7645] transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1540px]">
          <Reveal>
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Explore by work type</p>
            <h2 className="font-display max-w-[12ch] text-[clamp(3.2rem,5vw,6rem)] leading-[0.94] tracking-[-0.045em]">More ways to find relevant work.</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {workTypes.map((workType, index) => (
              <Reveal key={workType.title} delay={index * 0.07}>
                <article className="h-full">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#d8d0c4]">
                    <Image src={workType.image} alt={workType.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <p className="mt-5 text-[0.62rem] font-semibold tracking-[0.13em] text-[#9a7645] uppercase">{workType.category}</p>
                  <h3 className="font-display mt-3 text-[clamp(2rem,2.8vw,3.4rem)] leading-[0.96] tracking-[-0.035em]">{workType.title}</h3>
                  <p className="mt-5 text-sm leading-6 text-[#505961]">{workType.description}</p>
                  <Link href={workType.href} className="mt-6 inline-flex items-center gap-5 text-xs font-semibold text-[#9a7645]">View gallery <span aria-hidden="true">→</span></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        title="Have a project in mind?"
        body="Share the type, location and current stage. We’ll help define the most useful next step."
      />
      <InternalFooter />
    </article>
  );
}
