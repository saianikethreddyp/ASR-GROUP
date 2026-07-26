"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ClosingCta from "@/components/ClosingCta";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";
import Reveal from "@/components/Reveal";
import type { SignatureProject } from "@/data/signatureProjects";

export default function GalleryCollectionPage({
  project,
}: {
  project: SignatureProject;
}) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!viewerOpen) return;
    const previousOverflow = document.body.style.overflow;
    const opener = openerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setViewerOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      opener?.focus();
    };
  }, [viewerOpen]);

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <section className="relative px-5 pb-14 pt-36 sm:px-9 sm:pb-20 sm:pt-44 lg:px-[4.8rem] lg:pb-24 lg:pt-52">
        <InternalHeader activeLabel="Gallery" />
        <div className="mx-auto max-w-[1540px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center justify-between gap-5">
              <Link href="/projects" className="text-xs font-semibold text-[#596168] transition-colors hover:text-[#9a7645]">← Back to Projects</Link>
              <Link href="/gallery" className="text-xs font-semibold text-[#596168] transition-colors hover:text-[#9a7645]">View all projects</Link>
            </div>
            <p className="mb-5 mt-16 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Project Gallery</p>
            <h1 className="font-display max-w-[15ch] text-[clamp(4rem,7.2vw,8.4rem)] leading-[0.89] tracking-[-0.055em]">{project.title}</h1>
            <p className="mt-7 text-sm font-semibold text-[#596168]">{project.galleryCategory} · {project.location}</p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-9 sm:pb-24 lg:px-[4.8rem] lg:pb-32">
        <div className="mx-auto max-w-[1540px]">
          <motion.button
            ref={openerRef}
            type="button"
            onClick={() => setViewerOpen(true)}
            className="group relative block aspect-[16/9] w-full overflow-hidden rounded-[18px] bg-[#d8d0c4] text-left"
            initial={reduceMotion ? false : { opacity: 0.7, scale: 0.992 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            aria-label={`Open full-screen image of ${project.title}`}
          >
            <Image src={project.image} alt={project.imageAlt} fill sizes="100vw" preload className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]" />
            <span className="absolute bottom-4 right-4 rounded-full bg-[#081523]/88 px-4 py-2 text-[0.62rem] font-semibold tracking-[0.08em] text-white uppercase backdrop-blur-sm">Open image</span>
          </motion.button>
          <div className="mt-5 flex flex-col justify-between gap-3 text-[0.68rem] leading-5 text-[#667077] sm:flex-row">
            <p>{project.imageGroup}</p>
            <p>{project.imageNote}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[minmax(0,1.24fr)_minmax(20rem,.76fr)] lg:gap-20">
          <Reveal>
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Project information</p>
            <h2 className="font-display max-w-[13ch] text-[clamp(3.1rem,5vw,6rem)] leading-[0.94] tracking-[-0.045em]">About this project.</h2>
            <p className="mt-8 max-w-[48rem] text-[clamp(1rem,1.25vw,1.16rem)] leading-8 text-[#465058]">{project.detail}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="border-t border-[#111820]/18">
              {[
                ["Project", project.title],
                ["Location", project.location],
                ["Category", project.galleryCategory],
                ["What ASR did", project.scope],
                ["Status", project.status],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-5 border-b border-[#111820]/16 py-5">
                  <dt className="text-[0.58rem] font-semibold tracking-[0.13em] text-[#70777c] uppercase">{label}</dt>
                  <dd className="text-sm leading-6 text-[#30383f]">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {project.illustrative ? (
        <section className="px-5 pb-24 sm:px-9 sm:pb-28 lg:px-[4.8rem] lg:pb-36">
          <Reveal className="mx-auto grid min-h-[20rem] max-w-[1320px] place-items-center rounded-[18px] border border-[#111820]/16 px-6 py-12 text-center">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,4vw,4.8rem)] leading-none tracking-[-0.04em]">Photography of this project is on its way.</h2>
              <p className="mx-auto mt-5 max-w-[38rem] text-sm leading-6 text-[#586168]">The visual above is an illustration. Ask the ASR team to see similar completed work.</p>
            </div>
          </Reveal>
        </section>
      ) : null}

      <ClosingCta
        eyebrow="Start a project"
        title="Could this inspire your project?"
        body="Share this project with us and tell us about your space and priorities."
      />
      <InternalFooter />

      <AnimatePresence>
        {viewerOpen ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} image viewer`}
            className="fixed inset-0 z-[100] flex flex-col bg-[#07111b] text-white"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.28 }}
          >
            <div className="flex min-h-20 items-center justify-between gap-5 border-b border-white/14 px-5 sm:px-8">
              <div>
                <p className="text-[0.58rem] font-semibold tracking-[0.15em] text-[#c6a36b] uppercase">{project.title}</p>
                <p className="mt-1 text-xs text-white/55">Image 1 of 1 · {project.imageGroup}</p>
              </div>
              <button ref={closeButtonRef} type="button" onClick={() => setViewerOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/24 text-xl transition-colors hover:border-white/60" aria-label="Close gallery">×</button>
            </div>
            <div className="relative min-h-0 flex-1">
              <Image src={project.image} alt={project.imageAlt} fill sizes="100vw" className="object-contain p-4 sm:p-8" />
            </div>
            <div className="flex min-h-24 items-center justify-center border-t border-white/14 px-5 sm:px-8">
              <p className="max-w-[34rem] text-center text-[0.64rem] leading-5 text-white/48">{project.imageNote}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
