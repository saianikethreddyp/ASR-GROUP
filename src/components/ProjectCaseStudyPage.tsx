"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ClosingCta from "@/components/ClosingCta";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";
import Reveal from "@/components/Reveal";
import { getGalleryAlbumForProject } from "@/data/galleryAlbums";
import {
  signatureProjects,
  type SignatureProject,
} from "@/data/signatureProjects";

export default function ProjectCaseStudyPage({
  project,
}: {
  project: SignatureProject;
}) {
  const reduceMotion = useReducedMotion();
  const galleryAlbum = getGalleryAlbumForProject(project.slug);
  const relatedProjects = signatureProjects
    .filter(
      (candidate) =>
        candidate.slug !== project.slug &&
        candidate.discipline === project.discipline,
    )
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <section className="relative px-5 pb-12 pt-36 sm:px-9 sm:pb-16 sm:pt-44 lg:px-[4.8rem] lg:pb-20 lg:pt-48">
        <InternalHeader activeLabel="Projects" />
        <div className="mx-auto max-w-[1540px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-5">
              <Link
                href="/projects"
                className="text-xs font-semibold text-[#596168] transition-colors hover:text-[#9a7645]"
              >
                ← All projects
              </Link>
              {galleryAlbum ? (
                <Link
                  href={`/gallery/${galleryAlbum.slug}`}
                  className="text-xs font-semibold text-[#596168] transition-colors hover:text-[#9a7645]"
                >
                  Open complete album · {galleryAlbum.images.length}{" "}
                  {galleryAlbum.images.length === 1 ? "image" : "images"}
                </Link>
              ) : null}
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,.6fr)] lg:items-end lg:gap-16">
              <div>
                <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
                  Project case study
                </p>
                <h1 className="font-display max-w-[14ch] text-[clamp(3.8rem,7vw,8rem)] tracking-[-0.055em]">
                  {project.title}
                </h1>
              </div>
              <p className="text-sm font-semibold leading-6 text-[#596168] lg:pb-2">
                {project.discipline} · {project.galleryCategory}
                <br />
                {project.location}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-9 sm:pb-24 lg:px-[4.8rem] lg:pb-28">
        <div className="mx-auto max-w-[1540px]">
          <motion.div
            className="relative aspect-[16/9] overflow-hidden rounded-[18px] bg-[#d8d0c4]"
            initial={reduceMotion ? false : { opacity: 0.7, scale: 0.992 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </motion.div>
          <div className="mt-4 flex flex-col justify-between gap-2 text-[0.68rem] leading-5 text-[#667077] sm:flex-row">
            <p>{project.imageGroup}</p>
            <p>{project.imageNote}</p>
          </div>
        </div>
      </section>

      {project.illustrative ? (
        <section className="px-5 pb-8 sm:px-9 lg:px-[4.8rem]">
          <Reveal className="mx-auto flex max-w-[1320px] flex-col gap-4 border-y border-[#111820]/18 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-[#30383f]">
              Original project photography is being prepared for this record.
            </p>
            <p className="max-w-[38rem] text-sm leading-6 text-[#586168]">
              The project information below describes ASR&apos;s completed
              record. Available verified photography is kept separately in the
              Gallery.
            </p>
          </Reveal>
        </section>
      ) : null}

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,.8fr)] lg:gap-20">
          <Reveal>
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
              Project record
            </p>
            <h2 className="font-display max-w-[12ch] text-[clamp(3rem,5vw,5.8rem)] tracking-[-0.045em]">
              Context and responsibility.
            </h2>
            <p className="mt-8 max-w-[48rem] text-[clamp(1rem,1.25vw,1.16rem)] leading-8 text-[#465058]">
              {project.detail}
            </p>
            <div className="mt-10 border-l-2 border-[#c6a36b] pl-6">
              <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-[#777d82] uppercase">
                What ASR did
              </p>
              <p className="mt-3 max-w-[42rem] text-lg leading-8 text-[#30383f]">
                {project.scope}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="border-t border-[#111820]/18">
              {[
                ["Project", project.title],
                ["Sector", project.sector],
                ["Location", project.location],
                ["Discipline", project.discipline],
                ["Status", project.status],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[6.5rem_1fr] gap-5 border-b border-[#111820]/16 py-5"
                >
                  <dt className="text-[0.58rem] font-semibold tracking-[0.13em] text-[#70777c] uppercase">
                    {label}
                  </dt>
                  <dd className="text-sm leading-6 text-[#30383f]">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {relatedProjects.length ? (
        <section className="px-5 pb-24 sm:px-9 sm:pb-28 lg:px-[4.8rem] lg:pb-36">
          <div className="mx-auto max-w-[1540px]">
            <Reveal className="flex items-end justify-between gap-8 border-t border-[#111820]/18 pt-12">
              <div>
                <p className="mb-4 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
                  Related experience
                </p>
                <h2 className="font-display text-[clamp(2.8rem,4.5vw,5rem)] tracking-[-0.04em]">
                  More {project.discipline.toLowerCase()} work.
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden text-xs font-semibold text-[#9a7645] sm:block"
              >
                All projects →
              </Link>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {relatedProjects.map((related, index) => (
                <Reveal key={related.slug} delay={index * 0.06}>
                  <Link
                    href={`/projects/${related.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] bg-[#d8d0c4]">
                      <Image
                        src={related.image}
                        alt={related.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-5">
                      <div>
                        <h3 className="font-display text-[clamp(2rem,3vw,3.5rem)] tracking-[-0.04em]">
                          {related.title}
                        </h3>
                        <p className="mt-2 text-xs text-[#626a70]">
                          {related.location}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="text-xl text-[#9a7645] transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ClosingCta
        eyebrow="Start a project"
        title="Planning something similar?"
        body="Share this project with us and tell us about your location, priorities and current stage."
      />
      <InternalFooter />
    </article>
  );
}
