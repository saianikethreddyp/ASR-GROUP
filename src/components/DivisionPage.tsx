"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";
import Reveal from "@/components/Reveal";
import type { Division } from "@/data/divisions";

const ease = [0.22, 1, 0.36, 1] as const;

export default function DivisionPage({ division }: { division: Division }) {
  const reduceMotion = useReducedMotion();
  const contactHref = `/contact?division=${division.slug}#enquiry-form`;

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <section
        className="relative isolate min-h-[92svh] overflow-hidden bg-[#081523] px-5 pb-10 pt-36 text-[#f2eee6] sm:px-9 sm:pb-12 sm:pt-44 lg:px-[4.8rem] lg:pb-16 lg:pt-48"
        aria-labelledby="division-title"
      >
        <InternalHeader />
        <Image
          src={division.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: division.imagePosition }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,10,17,.93)_0%,rgba(4,10,17,.7)_48%,rgba(4,10,17,.2)_100%),linear-gradient(to_top,rgba(4,10,17,.72),transparent_58%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(92svh-12rem)] max-w-[1540px] flex-col justify-end">
          <motion.div
            className="max-w-[950px]"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: 0.12, ease }}
          >
            <p className="mb-6 text-[0.67rem] font-semibold tracking-[0.18em] text-[#c6a36b] uppercase">
              {division.eyebrow}
            </p>
            <h1
              id="division-title"
              className="font-display display-heading-long max-w-[13ch] text-[clamp(3.7rem,6.5vw,7.4rem)] text-[#f6f2eb] [text-shadow:0_3px_35px_rgba(0,0,0,.35)]"
            >
              {division.title}
            </h1>
            <p className="mt-7 max-w-[720px] text-[clamp(0.98rem,1.2vw,1.13rem)] leading-[1.7] text-white/76">
              {division.introduction}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={contactHref}
                className="cta-primary inline-flex min-h-13 items-center gap-9 rounded-[10px] px-7 text-[0.78rem] font-semibold"
              >
                Start a project
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={division.galleryHref}
                className="inline-flex min-h-13 items-center rounded-[10px] border border-white/40 bg-[#081523]/28 px-7 text-[0.78rem] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#111820]"
              >
                {division.galleryLabel}
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-col gap-5 border-t border-white/25 pt-6 sm:flex-row sm:items-end sm:justify-between"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.7, delay: 0.38 }}
          >
            <dl className="grid max-w-[650px] grid-cols-2 gap-6 sm:gap-12">
              {division.metrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="font-display text-[clamp(1.8rem,2.8vw,3.2rem)] leading-none">
                    {metric.value}
                  </dd>
                  <dt className="mt-2 max-w-[22ch] text-[0.62rem] leading-5 tracking-[0.09em] text-white/58 uppercase">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
            <p className="max-w-[30rem] text-[0.6rem] leading-5 text-white/48 sm:text-right">
              {division.imageNote}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1540px]">
          <Reveal>
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
              Find your starting point
            </p>
            <h2 className="max-w-[12ch] text-[clamp(3.1rem,5vw,6rem)]">
              {division.audienceTitle}
            </h2>
          </Reveal>
          <div className="mt-14 grid border-t border-[#111820]/16 md:grid-cols-2">
            {division.audiences.map((audience, index) => (
              <Reveal
                key={audience.title}
                className={`border-b border-[#111820]/16 py-8 md:px-8 md:py-10 ${
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
                }`}
                delay={(index % 2) * 0.06}
              >
                <p className="text-[0.62rem] font-semibold tracking-[0.15em] text-[#9a7645]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-[clamp(2rem,3vw,3.3rem)]">{audience.title}</h3>
                <p className="mt-5 max-w-[34rem] text-sm leading-7 text-[#505961]">
                  {audience.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e3d9] px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto grid max-w-[1540px] gap-14 lg:grid-cols-[minmax(20rem,.82fr)_minmax(30rem,1.18fr)] lg:gap-24">
          <Reveal>
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
              Scope
            </p>
            <h2 className="max-w-[12ch] text-[clamp(3rem,4.7vw,5.7rem)]">
              {division.scopeTitle}
            </h2>
            <p className="mt-7 max-w-[35rem] text-[0.98rem] leading-7 text-[#505961]">
              {division.scopeIntroduction}
            </p>
          </Reveal>
          <div className="border-t border-[#111820]/18">
            {division.services.map((service, index) => (
              <Reveal
                key={service}
                className="grid grid-cols-[2.8rem_1fr] items-center gap-4 border-b border-[#111820]/18 py-5 sm:grid-cols-[4rem_1fr] sm:py-6"
                delay={(index % 3) * 0.035}
              >
                <span className="text-[0.62rem] font-semibold tracking-[0.14em] text-[#9a7645]">
                  0{index + 1}
                </span>
                <p className="font-display text-[clamp(1.55rem,2.4vw,2.7rem)] leading-tight">
                  {service}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081523] px-5 py-20 text-[#f2eee6] sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,.65fr)] lg:items-end lg:gap-20">
            <h2 className="max-w-[12ch] text-[clamp(3.1rem,5vw,6rem)]">
              {division.outcomeTitle}
            </h2>
            <p className="max-w-[36rem] text-[0.97rem] leading-7 text-white/64">
              {division.outcomeBody}
            </p>
          </Reveal>
          <div className="mt-16 grid border-t border-white/16 sm:grid-cols-2 lg:grid-cols-4">
            {division.process.map((step, index) => (
              <Reveal
                key={step.title}
                className="border-b border-white/16 py-8 sm:px-7 lg:border-r lg:last:border-r-0"
                delay={index * 0.05}
              >
                <p className="text-[0.62rem] font-semibold tracking-[0.15em] text-[#c6a36b]">
                  0{index + 1}
                </p>
                <h3 className="mt-6 text-[clamp(2rem,2.8vw,3rem)]">{step.title}</h3>
                <p className="mt-5 text-sm leading-6 text-white/58">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto grid max-w-[1540px] gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="flex min-h-[28rem] flex-col justify-end rounded-[18px] bg-[#dcd4c8] p-7 sm:p-10 lg:p-12">
            <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-[#9a7645] uppercase">
              Relevant work
            </p>
            <h2 className="mt-5 max-w-[12ch] text-[clamp(3rem,4.7vw,5.6rem)]">
              {division.galleryTitle}
            </h2>
            <p className="mt-6 max-w-[40rem] text-sm leading-7 text-[#505961]">
              {division.galleryBody}
            </p>
            <Link
              href={division.galleryHref}
              className="mt-8 inline-flex w-fit items-center gap-7 text-xs font-semibold text-[#8f6c3d]"
            >
              {division.galleryLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal className="flex min-h-[28rem] flex-col justify-end rounded-[18px] bg-[#111820] p-7 text-[#f2eee6] sm:p-10 lg:p-12" delay={0.07}>
            <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-[#c6a36b] uppercase">
              The connected discipline
            </p>
            <h2 className="mt-5 max-w-[12ch] text-[clamp(2.7rem,4vw,4.8rem)]">
              {division.relatedTitle}
            </h2>
            <p className="mt-6 max-w-[35rem] text-sm leading-7 text-white/62">
              {division.relatedBody}
            </p>
            <Link
              href={division.relatedHref}
              className="mt-8 inline-flex w-fit items-center gap-7 text-xs font-semibold text-[#c6a36b]"
            >
              {division.relatedLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-5 pt-4 sm:px-9 sm:pb-9 lg:px-[4.8rem] lg:pb-[4.8rem]">
        <Reveal className="mx-auto grid max-w-[1540px] gap-8 rounded-[18px] bg-[#081523] px-6 py-12 text-[#f2eee6] sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,.9fr)] lg:items-end lg:gap-16 lg:px-14 lg:py-16">
          <div>
            <p className="mb-4 text-[0.62rem] font-semibold tracking-[0.17em] text-[#c6a36b] uppercase">
              Start a project
            </p>
            <h2 className="max-w-[14ch] text-[clamp(2.35rem,3.8vw,4.35rem)]">
              {division.closingTitle}
            </h2>
          </div>
          <div>
            <p className="max-w-[35rem] text-[0.94rem] leading-7 text-white/66">
              {division.closingBody}
            </p>
            <Link
              href={contactHref}
              className="cta-primary mt-7 inline-flex min-h-13 items-center gap-9 rounded-[10px] px-6 text-[0.76rem] font-semibold"
            >
              Start a project
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <InternalFooter />
    </article>
  );
}
