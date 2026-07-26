"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ClosingCta from "@/components/ClosingCta";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";

const ease = [0.22, 1, 0.36, 1] as const;

const leaders = [
  {
    name: "A. S. Ram Raju",
    role: "Managing Director",
    summary: "Direction across ASR Group’s interior and construction activities.",
  },
  {
    name: "G. S. Rao",
    role: "Director, Production",
    summary:
      "Production planning, joinery and workshop output behind every interior project.",
  },
  {
    name: "Siddhiq",
    role: "Director, Marketing",
    summary:
      "Client relationships, and the first conversation on most ASR projects.",
  },
  {
    name: "M. Srinivasa Rao",
    role: "Architect",
    summary:
      "Design and architectural coordination alongside the ASR project teams.",
  },
] as const;

const divisions = [
  {
    title: "ASR Interiors",
    details: ["25 years of experience", "4,000+ residential spaces built"],
    href: "/interiors",
  },
  {
    title: "ASR Constructions",
    details: ["20 years of experience", "6 lakh+ spaces constructed"],
    href: "/construction",
  },
  {
    title: "ASR Real Estate",
    details: ["Open plots and layouts", "Helping you find the right property"],
    href: "#", // Awaiting external URL
  },
  {
    title: "ASR Advertising",
    details: ["Digital Out-of-Home Advertising"],
    href: "#", // Awaiting external URL
  },
] as const;

const approach = [
  {
    number: "01",
    title: "Understand the brief",
    body:
      "We begin by understanding what the project must achieve—the people it serves, the way it must function, the priorities that shape it, and the responsibilities already in place.",
    image: "/media/asr-aperture-material-study.jpg",
    alt: "Architectural drawings, materials and technical details used to understand a project brief",
  },
  {
    number: "02",
    title: "Bring the disciplines together",
    body:
      "Design decisions, technical requirements, materials, specialist inputs, production, and site execution are coordinated around one shared direction.",
    image: "/media/asr-interiors-capability.png",
    alt: "Warm interior material and joinery coordination study",
  },
  {
    number: "03",
    title: "Carry the standard through",
    body:
      "The work is reviewed through execution so that the approved intent remains connected to what is finally delivered and handed over.",
    image: "/media/asr-construction-capability.png",
    alt: "Construction execution and finished architectural detailing",
  },
] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.72, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <section
        className="relative min-h-[100svh] overflow-hidden px-5 pb-16 pt-32 sm:px-9 sm:pb-20 sm:pt-36 lg:px-[4.8rem] lg:pb-12 lg:pt-36"
        aria-labelledby="about-hero-title"
      >
        <InternalHeader activeLabel="About Us" />

        <div className="mx-auto grid min-h-[calc(100svh-9rem)] max-w-[1540px] items-center gap-12 lg:grid-cols-[minmax(0,.98fr)_minmax(31rem,1.02fr)] lg:gap-[clamp(3rem,5vw,6rem)]">
          <div className="relative z-10 max-w-[48rem]">
            <motion.h1
              id="about-hero-title"
              className="font-display display-heading-long max-w-[12ch] text-[clamp(3.7rem,5.75vw,6.6rem)] leading-[0.94] font-normal tracking-[-0.045em]"
              initial={reduceMotion ? false : { opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: 0.12, ease }}
            >
              Built by experience. Led by people who stay close to the work.
            </motion.h1>

            <motion.p
              className="mt-7 max-w-[39rem] text-[clamp(0.96rem,1.15vw,1.12rem)] leading-[1.72] text-[#465058]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.75, delay: 0.28, ease }}
            >
              For more than two decades, ASR has worked across interiors and construction with
              one consistent responsibility: to understand the intent, coordinate what the
              project demands, and carry the agreed standard through execution.
            </motion.p>

            <motion.p
              className="mt-7 text-sm font-semibold tracking-[-0.01em] text-[#9a7645] sm:text-base"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.7, delay: 0.42 }}
            >
              25 years in Interiors <span className="px-2 text-[#111820]/28">·</span> 20 years
              in Construction
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.7, delay: 0.52, ease }}
            >
              <Link
                href="#leadership"
                className="cta-primary group mt-8 inline-flex min-h-14 items-center gap-10 rounded-[10px] px-7 text-[0.78rem] font-semibold tracking-[0.02em]"
              >
                Meet the people behind ASR
                <span
                  aria-hidden="true"
                  className="text-[#111820]/70 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="relative aspect-[4/5] min-h-[31rem] overflow-hidden rounded-[18px] bg-[#d8d0c4] lg:h-[min(76svh,51rem)] lg:min-h-[38rem] lg:aspect-auto"
            initial={reduceMotion ? false : { opacity: 0.65, scale: 0.985, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 1.05, delay: 0.16, ease }}
          >
            <Image
              src="/media/asr-aperture-material-study.jpg"
              alt="Architectural material study with walnut, stone, brass and technical drawings"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              preload
              loading="eager"
              className="object-cover object-[67%_center]"
            />
          </motion.div>
        </div>
      </section>

      <section
        id="leadership"
        className="scroll-mt-8 px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32"
        aria-labelledby="leadership-title"
      >
        <div className="mx-auto flex max-w-[1540px] flex-col gap-12 xl:gap-14">
          <Reveal>
            <h2
              id="leadership-title"
              className="font-display text-[clamp(3.3rem,4.8vw,5.8rem)] leading-[0.96] tracking-[-0.042em]"
            >
              The people behind the standard.
            </h2>
          </Reveal>

          <div className="-mx-5 overflow-x-auto px-5 pb-5 sm:-mx-9 sm:px-9 xl:mx-0 xl:overflow-visible xl:px-0">
            <div className="grid min-w-[66rem] grid-cols-4 gap-4 xl:min-w-0">
              {leaders.map((leader, index) => (
                <Reveal key={`${leader.name}-${index}`} delay={index * 0.08}>
                  <article>
                    <div className="grid aspect-[3/4] place-items-center overflow-hidden bg-[#282b2d] px-5 text-center">
                      <p
                        aria-hidden="true"
                        className="font-display text-[clamp(2.6rem,3.6vw,3.9rem)] leading-none tracking-[-0.04em] text-[#c6a36b]"
                      >
                        {leader.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 3)}
                      </p>
                    </div>
                    <h3 className="font-display mt-5 text-[clamp(1.55rem,2vw,2.25rem)] leading-none tracking-[-0.025em]">
                      {leader.name}
                    </h3>
                    <p className="mt-2 text-[0.66rem] font-semibold tracking-[0.12em] text-[#9a7645] uppercase">
                      {leader.role}
                    </p>
                    <p className="mt-5 max-w-[16rem] text-sm leading-6 text-[#505961]">
                      {leader.summary}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,.92fr)_minmax(30rem,1.08fr)] lg:gap-[clamp(3rem,7vw,8rem)]">
            <Reveal>
              <h2 className="font-display max-w-[12ch] text-[clamp(3.3rem,5vw,6rem)] leading-[0.94] tracking-[-0.043em]">
                Two disciplines. One accountable way of working.
              </h2>
              <div className="mt-8 max-w-[38rem] space-y-5 text-[0.98rem] leading-7 text-[#465058]">
                <p>
                  ASR&apos;s experience has developed across two closely connected fields:
                  Interiors and Construction.
                </p>
                <p>
                  Bringing these disciplines closer allows the team to consider the project as
                  a whole rather than as a series of disconnected packages.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#d8d0c4]">
                <Image
                  src="/media/asr-aperture-material-study.jpg"
                  alt="Material study bringing together stone, timber, brass and technical coordination"
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid border-y border-[#111820]/16 sm:grid-cols-2 xl:grid-cols-4">
            {divisions.map((division, index) => (
              <Reveal
                key={division.title}
                delay={index * 0.07}
                className={`flex flex-col py-7 sm:px-7 sm:first:pl-0 xl:py-9 ${
                  index > 0 ? "sm:border-l sm:border-[#111820]/12" : ""
                }`}
              >
                <Link href={division.href} className="group flex h-full flex-col">
                  <h3 className="font-display text-[clamp(1.8rem,2.5vw,2.5rem)] leading-[1.05] tracking-[-0.03em] transition-colors group-hover:text-[#9a7645]">
                    {division.title}
                  </h3>
                  <div className="mt-5 flex-grow space-y-2">
                    {division.details.map((detail, i) => (
                      <p key={i} className="text-sm leading-6 text-[#505961]">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.1em] text-[#9a7645] uppercase">
                    Explore <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="flex justify-center text-center">
            <h2 className="font-display max-w-[30ch] text-[clamp(3.3rem,5vw,6rem)] leading-[0.94] tracking-[-0.043em]">
              Intent is protected through coordination.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-5">
            {approach.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08} className="min-w-0">
                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d0c4] lg:aspect-[1.2/1]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 34vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-[3.5rem_1fr] gap-4 lg:px-4 lg:first:pl-0">
                    <p className="font-display text-[2.35rem] leading-none text-[#b58b51]">
                      {step.number}
                    </p>
                    <div className="min-w-0">
                      <h3 className="font-display text-[clamp(1.7rem,2vw,2.2rem)] leading-[1.02] tracking-[-0.025em]">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-[24rem] text-sm leading-6 text-[#505961]">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Start with clarity"
        title="Let’s make the brief clearer."
        body="Share what you know today. We’ll help define the scope and connect you with the right ASR team."
      />

      <InternalFooter />
    </article>
  );
}
