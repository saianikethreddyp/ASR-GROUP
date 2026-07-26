"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import ClosingCta from "@/components/ClosingCta";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";
import Reveal from "@/components/Reveal";
import {
  galleryCategories,
  type GalleryCategory,
} from "@/data/galleryCategories";
import { signatureProjects } from "@/data/signatureProjects";

export default function GalleryPage({
  initialCategory = "All",
}: {
  initialCategory?: GalleryCategory;
}) {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>(initialCategory);
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return signatureProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.galleryCategory === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        `${project.title} ${project.location} ${project.sector}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  function selectCategory(category: GalleryCategory) {
    setActiveCategory(category);
    const url = new URL(window.location.href);
    if (category === "All") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", category);
    }
    window.history.replaceState({}, "", `${url.pathname}${url.search}`);
  }

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <section className="relative px-5 pb-16 pt-36 sm:px-9 sm:pb-20 sm:pt-44 lg:px-[4.8rem] lg:pb-28 lg:pt-52" aria-labelledby="gallery-title">
        <InternalHeader activeLabel="Gallery" />
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,.82fr)] lg:items-end lg:gap-20">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-6 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Gallery</p>
            <h1 id="gallery-title" className="font-display max-w-[11ch] text-[clamp(4.2rem,7.5vw,8.7rem)] leading-[0.88] tracking-[-0.055em]">The work, in full view.</h1>
          </motion.div>
          <motion.p className="max-w-[35rem] text-[clamp(1rem,1.3vw,1.16rem)] leading-[1.72] text-[#465058] lg:pb-2" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0.01 : 0.78, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}>
            Browse by category, or open a project to learn more about ASR&apos;s work.
          </motion.p>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-9 sm:pb-28 lg:px-[4.8rem] lg:pb-36">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="border-y border-[#111820]/16 py-5">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
                {galleryCategories.map((category) => {
                  const active = category === activeCategory;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => selectCategory(category)}
                      aria-pressed={active}
                      className={`min-h-11 shrink-0 rounded-full border px-5 text-xs font-semibold transition-colors ${
                        active
                          ? "border-[#111820] bg-[#111820] text-[#f2eee6]"
                          : "border-[#111820]/18 text-[#465058] hover:border-[#111820]/42 hover:text-[#111820]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
              <label className="flex min-h-12 w-full items-center gap-3 border-b border-[#111820]/28 xl:w-[22rem]">
                <span className="sr-only">Search projects or locations</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current text-[#70777c]" strokeWidth="1.6">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="m16 16 4 4" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search projects or locations"
                  className="h-12 w-full bg-transparent text-sm text-[#111820] outline-none placeholder:text-[#70777c]"
                />
              </label>
            </div>
          </Reveal>

          <div className="mt-14 flex items-baseline justify-between gap-6">
            <h2 className="font-display text-[clamp(2.4rem,3.8vw,4.8rem)] leading-none tracking-[-0.04em]">Browse by project</h2>
            <p aria-live="polite" className="text-xs text-[#626a70]">
              {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProjects.length ? (
              <motion.div layout className="mt-10 grid gap-x-5 gap-y-14 md:grid-cols-2">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    layout
                    key={project.slug}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                    transition={{ duration: reduceMotion ? 0.01 : 0.45, delay: index * 0.04 }}
                  >
                    <Link href={`/gallery/${project.slug}`} className="group block">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#d8d0c4]">
                        <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
                        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                          <span className="rounded-full bg-[#081523]/88 px-3 py-2 text-[0.58rem] font-semibold tracking-[0.11em] text-white uppercase backdrop-blur-sm">{project.galleryCategory}</span>
                        </div>
                      </div>
                      <div className="mt-5 flex items-start justify-between gap-6">
                        <div>
                          <h3 className="font-display text-[clamp(2rem,3vw,3.6rem)] leading-none tracking-[-0.04em]">{project.title}</h3>
                          <p className="mt-3 text-xs text-[#626a70]">{project.discipline} · {project.sector} · {project.location}</p>
                        </div>
                        <span aria-hidden="true" className="mt-1 text-xl text-[#9a7645] transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                      <p className="mt-4 max-w-[42rem] text-sm leading-6 text-[#505961]">{project.summary}</p>
                      <p className="mt-4 text-[0.66rem] leading-5 text-[#70777c]">{project.imageNote}</p>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div key="empty" className="mt-10 grid min-h-[23rem] place-items-center rounded-[18px] border border-[#111820]/16 px-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div>
                  <h3 className="font-display text-[clamp(2.2rem,4vw,4.4rem)] leading-none tracking-[-0.04em]">No projects found.</h3>
                  <p className="mx-auto mt-5 max-w-[34rem] text-sm leading-6 text-[#586168]">Try another category or search term.</p>
                  <button type="button" onClick={() => { selectCategory("All"); setQuery(""); }} className="mt-7 text-xs font-semibold text-[#9a7645] underline underline-offset-4">View all projects</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <ClosingCta
        eyebrow="Start a project"
        title="Seen something you like?"
        body="Share the project or image with us and tell us about your space."
      />
      <InternalFooter />
    </article>
  );
}
