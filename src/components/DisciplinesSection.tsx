"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import constructionImage from "../../public/media/asr-construction-capability.png";
import interiorsImage from "../../public/media/asr-interiors-capability.png";

const ease = [0.22, 1, 0.36, 1] as const;

type Discipline = {
  number: string;
  title: string;
  headline: string;
  description: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  image: StaticImageData;
  imagePosition?: string;
};

const disciplines: [Discipline, Discipline] = [
  {
    number: "01",
    title: "Interiors",
    headline: "Interiors, considered in every detail.",
    description:
      "Complete interior execution for homes, workplaces and brand environments—coordinated from approved design through the final finish.",
    metrics: [
      { value: "25", label: "years of craft" },
      { value: "4,000+", label: "projects delivered" },
    ],
    image: interiorsImage,
    imagePosition: "50% 54%",
  },
  {
    number: "02",
    title: "Construction",
    headline: "Construction, controlled from start to handover.",
    description:
      "Experienced coordination across civil works, finishing and handover—where sequence, quality and accountability matter.",
    metrics: [
      { value: "20", label: "years of execution" },
      { value: "6 lakh", label: "sq. ft. delivered" },
    ],
    image: constructionImage,
    imagePosition: "50% 48%",
  },
];

function MobileDiscipline({ discipline }: { discipline: Discipline }) {
  return (
    <motion.article
      className="relative min-h-[76svh] overflow-hidden rounded-[18px] bg-[#111820] text-[#f4f0e8]"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.18, once: true }}
      transition={{ duration: 0.9, ease }}
      aria-labelledby={`mobile-${discipline.title.toLowerCase()}-title`}
    >
      <Image
        src={discipline.image}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: discipline.imagePosition }}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,8,12,.94)_0%,rgba(4,8,12,.5)_52%,rgba(4,8,12,.14)_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 flex min-h-[76svh] flex-col justify-end px-6 pb-9 pt-24">
        <div className="mb-auto flex items-center justify-between border-b border-white/30 pb-4 text-[0.68rem] tracking-[0.18em] text-white/72 uppercase">
          <span>{discipline.number}</span>
          <span>ASR {discipline.title}</span>
        </div>
        <h3
          id={`mobile-${discipline.title.toLowerCase()}-title`}
          className="max-w-[18ch] text-[clamp(2.25rem,9.5vw,3.6rem)] leading-[0.98] font-normal tracking-[-0.05em]"
        >
          {discipline.headline}
        </h3>
        <p className="mt-5 max-w-[36rem] text-sm leading-6 text-white/76">
          {discipline.description}
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/25 pt-5">
          {discipline.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="text-[0.68rem] leading-4 tracking-[0.08em] text-white/60 uppercase">
                {metric.label}
              </dt>
              <dd className="mt-1 text-[clamp(1.8rem,8vw,2.8rem)] leading-none tracking-[-0.045em]">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}

export default function DisciplinesSection() {
  const scrollSection = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ["start start", "end end"],
  });

  const splitTarget = useTransform(
    scrollYProgress,
    [0, 0.14, 0.34, 0.5, 0.72, 0.9, 1],
    [50, 50, 55, 50, 45, 50, 50],
  );
  const split = useSpring(splitTarget, {
    stiffness: 105,
    damping: 26,
    mass: 0.28,
  });
  const leftBasis = useMotionTemplate`${split}%`;

  const interiorsContentOpacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.26, 0.43, 0.54],
    [0.7, 0.72, 1, 1, 0.7],
  );
  const constructionContentOpacity = useTransform(
    scrollYProgress,
    [0.44, 0.57, 0.7, 0.88, 1],
    [0.7, 0.72, 1, 1, 0.7],
  );
  const interiorsImageScale = useTransform(scrollYProgress, [0, 0.42, 1], [1.045, 1, 1.025]);
  const constructionImageScale = useTransform(scrollYProgress, [0, 0.65, 1], [1.035, 1, 1.015]);
  const progressScale = reduceMotion ? 1 : scrollYProgress;

  return (
    <section id="about" className="bg-[#f2eee6] text-[#111820]" aria-labelledby="disciplines-title">
      <h2 id="disciplines-title" className="sr-only">
        ASR Interiors and Construction
      </h2>

      <div className="flex h-[82px] items-center border-y border-[#111820]/12 bg-[#e9e3d9] px-6 text-[#111820] sm:h-[94px] sm:px-9 lg:px-[4.8rem]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center gap-5 sm:gap-8">
          <span className="h-px flex-1 bg-[#111820]/22" aria-hidden="true" />
          <p className="shrink-0 text-center text-[0.62rem] font-semibold tracking-[0.18em] uppercase sm:text-[0.68rem]">
            Two disciplines <span className="px-1.5 text-[#a7834e]">·</span> One ASR standard
          </p>
          <span className="h-px flex-1 bg-[#111820]/22" aria-hidden="true" />
        </div>
      </div>

      <div ref={scrollSection} className="relative hidden h-[165svh] lg:block">
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-[#f2eee6] p-4 sm:p-5">
          <div className="flex h-full gap-3">
            <motion.article
              className="relative h-full shrink-0 overflow-hidden rounded-[18px]"
              style={{ flexBasis: reduceMotion ? "50%" : leftBasis }}
              aria-labelledby="interiors-title"
            >
              <motion.div className="absolute inset-0" style={{ scale: reduceMotion ? 1 : interiorsImageScale }}>
                <Image
                  src={interiorsImage}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="58vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 54%" }}
                />
              </motion.div>
              <div
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,8,12,.92)_0%,rgba(4,8,12,.42)_48%,rgba(4,8,12,.12)_100%)]"
                aria-hidden="true"
              />
              <motion.div
                className="relative z-10 flex h-full flex-col justify-end px-[clamp(2rem,4vw,4.8rem)] pb-[clamp(2.5rem,5vh,4rem)] pt-28 text-[#f4f0e8]"
                style={{ opacity: reduceMotion ? 1 : interiorsContentOpacity }}
              >
                <div className="mb-auto flex items-center justify-between border-b border-white/30 pb-4 text-[0.68rem] tracking-[0.18em] text-white/72 uppercase">
                  <span>01</span>
                  <span>ASR Interiors</span>
                </div>
                <h3
                  id="interiors-title"
                  className="max-w-[14ch] text-[clamp(2.65rem,3.55vw,4.7rem)] leading-[0.96] font-normal tracking-[-0.052em]"
                >
                  Interiors, considered in every detail.
                </h3>
                <div className="mt-7 grid items-end gap-8 xl:grid-cols-[minmax(18rem,1fr)_auto]">
                  <p className="max-w-[31rem] text-[clamp(.84rem,.92vw,.98rem)] leading-[1.62] text-white/72">
                    Complete interior execution for homes, workplaces and brand
                    environments—coordinated from approved design through the final finish.
                  </p>
                  <dl className="grid grid-cols-2 gap-7 border-t border-white/25 pt-4 xl:min-w-[22rem]">
                    {disciplines[0].metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="text-[0.62rem] tracking-[0.1em] text-white/58 uppercase">
                          {metric.label}
                        </dt>
                        <dd className="mt-1 text-[clamp(1.65rem,2.1vw,2.7rem)] leading-none tracking-[-0.05em]">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.div>
            </motion.article>

            <motion.article
              className="relative h-full min-w-0 flex-1 overflow-hidden rounded-[18px]"
              aria-labelledby="construction-title"
            >
              <motion.div className="absolute inset-0" style={{ scale: reduceMotion ? 1 : constructionImageScale }}>
                <Image
                  src={constructionImage}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="58vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 48%" }}
                />
              </motion.div>
              <div
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,8,12,.94)_0%,rgba(4,8,12,.5)_50%,rgba(4,8,12,.17)_100%)]"
                aria-hidden="true"
              />
              <motion.div
                className="relative z-10 flex h-full flex-col justify-end px-[clamp(2rem,4vw,4.8rem)] pb-[clamp(2.5rem,5vh,4rem)] pt-28 text-[#f4f0e8]"
                style={{ opacity: reduceMotion ? 1 : constructionContentOpacity }}
              >
                <div className="mb-auto flex items-center justify-between border-b border-white/30 pb-4 text-[0.68rem] tracking-[0.18em] text-white/72 uppercase">
                  <span>02</span>
                  <span>ASR Construction</span>
                </div>
                <h3
                  id="construction-title"
                  className="max-w-[14ch] text-[clamp(2.65rem,3.55vw,4.7rem)] leading-[0.96] font-normal tracking-[-0.052em]"
                >
                  Construction, controlled from start to handover.
                </h3>
                <div className="mt-7 grid items-end gap-8 xl:grid-cols-[minmax(18rem,1fr)_auto]">
                  <p className="max-w-[31rem] text-[clamp(.84rem,.92vw,.98rem)] leading-[1.62] text-white/72">
                    Experienced coordination across civil works, finishing and handover—where
                    sequence, quality and accountability matter.
                  </p>
                  <dl className="grid grid-cols-2 gap-7 border-t border-white/25 pt-4 xl:min-w-[22rem]">
                    {disciplines[1].metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="text-[0.62rem] tracking-[0.1em] text-white/58 uppercase">
                          {metric.label}
                        </dt>
                        <dd className="mt-1 text-[clamp(1.65rem,2.1vw,2.7rem)] leading-none tracking-[-0.05em]">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.div>
            </motion.article>
          </div>

          <div className="absolute inset-x-5 bottom-2 z-20 h-px overflow-hidden rounded-full bg-[#111820]/14" aria-hidden="true">
            <motion.div
              className="h-full origin-left bg-[#c6a36b]"
              style={{ scaleX: progressScale }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3 bg-[#f2eee6] px-3 pb-3 lg:hidden">
        {disciplines.map((discipline) => (
          <MobileDiscipline key={discipline.title} discipline={discipline} />
        ))}
      </div>
    </section>
  );
}
