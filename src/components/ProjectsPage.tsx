"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import ClosingCta from "@/components/ClosingCta";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";
import Reveal from "@/components/Reveal";
import { getGalleryAlbumForProject } from "@/data/galleryAlbums";
import { signatureProjects } from "@/data/signatureProjects";

const filters = ["All Projects", "Interiors", "Infra Projects"] as const;
type ProjectFilter = (typeof filters)[number];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All Projects");
  const reduceMotion = useReducedMotion();

  const visibleProjects = useMemo(
    () =>
      signatureProjects.filter(
        (project) =>
          activeFilter === "All Projects" ||
          project.discipline === activeFilter,
      ),
    [activeFilter],
  );

  const photographedProjectCount = signatureProjects.filter(
    (project) => !project.illustrative,
  ).length;

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <section
        className="relative px-5 pb-16 pt-36 sm:px-9 sm:pb-20 sm:pt-44 lg:px-[4.8rem] lg:pb-24 lg:pt-48"
        aria-labelledby="projects-title"
      >
        <InternalHeader activeLabel="Projects" />
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(25rem,.96fr)] lg:items-end lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.85,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-6 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
              Projects
            </p>
            <h1
              id="projects-title"
              className="font-display display-heading-long max-w-[10.5ch] text-[clamp(3.8rem,6.4vw,7.5rem)] tracking-[-0.05em]"
            >
              Work that proves what ASR can deliver.
            </h1>
            <p className="type-lead mt-7 max-w-[42rem] text-[#465058]">
              Explore completed Interiors and Infra Projects work by sector,
              location and ASR&apos;s responsibility.
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.78,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#d8d0c4]">
              <Image
                src="/media/projects/bmw-service-station-brochure.jpg"
                alt="BMW showroom environment completed by ASR Group"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-5 text-xs text-[#626a70]">
              <p>BMW Showroom</p>
              <p>Jubilee Hills, Hyderabad</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 sm:px-9 lg:px-[4.8rem]">
        <Reveal className="mx-auto grid max-w-[1540px] border-y border-[#111820]/16 sm:grid-cols-3">
          {[
            ["Disciplines", "Interiors + Infra Projects"],
            ["Project records", String(signatureProjects.length).padStart(2, "0")],
            [
              "Photography",
              `${String(photographedProjectCount).padStart(2, "0")} verified set`,
            ],
          ].map(([label, value], index) => (
            <div
              key={label}
              className={`py-6 sm:px-7 sm:py-7 ${
                index > 0
                  ? "border-t border-[#111820]/16 sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-[#777d82] uppercase">
                {label}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#30383f]">
                {value}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
                Selected records
              </p>
              <h2 className="font-display max-w-[11ch] text-[clamp(3rem,5vw,5.8rem)] tracking-[-0.045em]">
                Find the experience closest to your brief.
              </h2>
            </div>
            <p className="max-w-[31rem] text-sm leading-6 text-[#586168]">
              Compare completed work by discipline, location and ASR&apos;s
              responsibility.
            </p>
          </Reveal>

          <Reveal className="mt-12 flex flex-col gap-5 border-y border-[#111820]/16 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
              {filters.map((filter) => {
                const active = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={active}
                    className={`min-h-11 shrink-0 rounded-full border px-5 text-xs font-semibold transition-colors ${
                      active
                        ? "border-[#111820] bg-[#111820] text-[#f2eee6]"
                        : "border-[#111820]/18 text-[#465058] hover:border-[#111820]/42 hover:text-[#111820]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
            <p aria-live="polite" className="text-xs text-[#626a70]">
              {visibleProjects.length}{" "}
              {visibleProjects.length === 1 ? "project" : "projects"}
            </p>
          </Reveal>

          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="mt-12 grid gap-x-5 gap-y-16 lg:grid-cols-3"
            >
              {visibleProjects.map((project, index) => (
                <motion.article
                  layout
                  key={project.slug}
                  className="min-w-0"
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.45,
                    delay: index * 0.04,
                  }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block h-full"
                  >
                    <div
                      className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#d8d0c4]"
                    >
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-x-4 bottom-4 flex justify-end">
                        <span className="rounded-full bg-[#f2eee6]/92 px-3 py-2 text-[0.58rem] font-semibold tracking-[0.1em] text-[#111820] uppercase backdrop-blur-sm">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-[#111820]/18 pt-5">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-[#9a7645] uppercase">
                            {project.discipline} · {project.galleryCategory}
                          </p>
                          <h3 className="font-display mt-3 text-[clamp(2.3rem,3.4vw,4.1rem)] tracking-[-0.04em]">
                            {project.title}
                          </h3>
                        </div>
                        <span
                          aria-hidden="true"
                          className="mt-1 text-xl text-[#9a7645] transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </div>
                      <p className="mt-4 max-w-[42rem] text-sm leading-6 text-[#505961]">
                        {project.summary}
                      </p>
                      <dl className="mt-6 grid gap-4 border-t border-[#111820]/14 pt-4 text-xs sm:grid-cols-2">
                        <div>
                          <dt className="text-[#777d82]">Location</dt>
                          <dd className="mt-1 font-semibold text-[#30383f]">
                            {project.location}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[#777d82]">ASR scope</dt>
                          <dd className="mt-1 font-semibold leading-5 text-[#30383f]">
                            {project.scope}
                          </dd>
                        </div>
                      </dl>
                      <p className="mt-6 text-xs font-semibold text-[#9a7645]">
                        View case study
                      </p>
                      {getGalleryAlbumForProject(project.slug) ? (
                        <p className="mt-2 text-[0.66rem] text-[#70777c]">
                          Gallery album available
                        </p>
                      ) : null}
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <ClosingCta
        title="Planning something similar?"
        body="Share the project type, location and current stage. We’ll help identify the most useful next step."
      />
      <InternalFooter />
    </article>
  );
}
