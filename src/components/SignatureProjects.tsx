"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { signatureProjects, type SignatureProject } from "@/data/signatureProjects";

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectLink({ project }: { project: SignatureProject }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group mt-8 inline-flex min-h-12 items-center gap-8 rounded-[10px] border border-[#111820]/28 px-6 text-[0.72rem] font-semibold tracking-[0.12em] text-[#111820] uppercase transition-colors hover:border-[#111820] hover:bg-[#111820] hover:text-[#f4f0e8]"
    >
      View project
      <span
        aria-hidden="true"
        className="text-base transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

function ProjectCopy({
  project,
  index,
}: {
  project: SignatureProject;
  index: number;
}) {
  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.62, ease }}
      className="flex h-full flex-col justify-end"
    >
      <div className="mb-auto flex items-center gap-3">
        <span className="rounded-full border border-[#a7834e]/70 px-3 py-1.5 text-[0.58rem] font-semibold tracking-[0.17em] text-[#87673b] uppercase">
          {project.discipline}
        </span>
        <span className="text-[0.62rem] tracking-[0.14em] text-[#111820]/48 uppercase">
          {project.sector}
        </span>
      </div>

      <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
        0{index + 1} / 0{signatureProjects.length}
      </p>
      <h3 className="mt-4 max-w-[11ch] text-[clamp(2.8rem,4.2vw,5rem)] leading-[0.93] font-normal tracking-[-0.055em] text-[#111820]">
        {project.title}
      </h3>
      <p className="mt-5 text-[0.68rem] font-semibold tracking-[0.15em] text-[#111820]/54 uppercase">
        {project.location}
      </p>
      <p className="mt-5 max-w-[31rem] text-[clamp(0.88rem,1vw,1rem)] leading-7 text-[#38414a]">
        {project.summary}
      </p>
      <ProjectLink project={project} />
    </motion.div>
  );
}

function MobileProject({
  project,
  index,
}: {
  project: SignatureProject;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="overflow-hidden rounded-[18px] border border-[#111820]/10 bg-[#e9e3d9]"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ amount: 0.16, once: true }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1023px) 100vw, 55vw"
          className="object-cover [filter:saturate(.88)_contrast(1.025)]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,10,15,.72),transparent_48%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between">
          <span className="rounded-full border border-white/38 bg-[#081523]/45 px-3 py-1.5 text-[0.58rem] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-sm">
            {project.discipline}
          </span>
          <span className="text-[0.62rem] tracking-[0.18em] text-white/78">
            0{index + 1}
          </span>
        </div>
      </div>
      <div className="px-6 pb-8 pt-6">
        <p className="text-[0.62rem] font-semibold tracking-[0.15em] text-[#c6a36b] uppercase">
          {project.sector}
        </p>
        <h3 className="mt-3 text-[clamp(2.2rem,10vw,3.5rem)] leading-[0.96] tracking-[-0.052em]">
          {project.title}
        </h3>
        <p className="mt-4 text-[0.68rem] font-semibold tracking-[0.14em] text-[#111820]/54 uppercase">
          {project.location}
        </p>
        <p className="mt-4 text-sm leading-6 text-[#38414a]">{project.summary}</p>
        <ProjectLink project={project} />
      </div>
    </motion.article>
  );
}

export default function SignatureProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.35,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reduceMotion) return;
    const nextIndex = Math.min(
      signatureProjects.length - 1,
      Math.floor(latest * signatureProjects.length),
    );
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  const activeProject = signatureProjects[activeIndex];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#f2eee6] text-[#111820]"
      aria-labelledby="signature-work-title"
    >
      <div className="border-y border-[#111820]/12 px-6 py-8 sm:px-9 lg:px-[4.8rem]">
        <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-8">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.19em] text-[#c6a36b] uppercase">
              Selected work
            </p>
            <h2
              id="signature-work-title"
              className="mt-3 max-w-[18ch] text-[clamp(2rem,3.2vw,3.8rem)] leading-[1] tracking-[-0.048em]"
            >
              Projects that define our standard.
            </h2>
          </div>
          <p className="hidden max-w-[28rem] text-sm leading-6 text-[#111820]/58 md:block">
            A focused record of institutional trust, restoration expertise and precision-led
            interior execution.
          </p>
        </div>
      </div>

      <div className="relative hidden h-[360svh] lg:block">
        <div className="sticky top-0 h-[100svh] overflow-hidden p-4">
          <div className="mx-auto grid h-full max-w-[1580px] grid-cols-[minmax(22rem,0.78fr)_minmax(0,1.42fr)] gap-4">
            <div className="relative overflow-hidden rounded-[18px] border border-[#111820]/10 bg-[#e9e3d9] px-[clamp(2.2rem,4vw,4.5rem)] py-[clamp(2.4rem,5vh,4.5rem)]">
              <AnimatePresence mode="wait" initial={false}>
                <ProjectCopy
                  key={activeProject.slug}
                  project={activeProject}
                  index={activeIndex}
                />
              </AnimatePresence>
            </div>

            <div className="relative overflow-hidden rounded-[18px] bg-[#171a1b]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeProject.slug}
                  className="absolute inset-0"
                  initial={
                    reduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, scale: 1.035, clipPath: "inset(8% 0 0 0 round 18px)" }
                  }
                  animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0 round 18px)" }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 1.015, clipPath: "inset(0 0 8% 0 round 18px)" }
                  }
                  transition={{ duration: 0.86, ease }}
                >
                  <Image
                    src={activeProject.image}
                    alt={activeProject.imageAlt}
                    fill
                    sizes="65vw"
                    className="object-cover [filter:saturate(.88)_contrast(1.025)]"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,7,5,.38),transparent_48%)]"
                    aria-hidden="true"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div
            className="absolute inset-x-5 bottom-2 z-20 h-px overflow-hidden bg-[#111820]/14"
            aria-hidden="true"
          >
            <motion.div
              className="h-full origin-left bg-[#c6a36b]"
              style={{ scaleX: reduceMotion ? 1 : progress }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3 px-3 py-3 lg:hidden">
        {signatureProjects.map((project, index) => (
          <MobileProject key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
