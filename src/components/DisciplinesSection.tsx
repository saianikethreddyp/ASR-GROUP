"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import advertisingImage from "../../public/media/asr-advertising-capability.jpg";
import journeyImage from "../../public/media/asr-connected-journey-sketch.jpg";
import constructionImage from "../../public/media/asr-construction-capability.png";
import interiorsImage from "../../public/media/asr-interiors-capability.png";
import realEstateImage from "../../public/media/asr-real-estate-capability.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

type Discipline = {
  number: string;
  title: string;
  stage: string;
  headline: string;
  description: string;
  image: StaticImageData;
  imagePosition?: string;
  href: string;
  action: string;
  metrics?: Array<{
    value: string;
    label: string;
  }>;
};

const realEstate: Discipline = {
  number: "01",
  title: "Real Estate",
  stage: "The opportunity",
  headline: "Start with the right ground.",
  description:
    "A direct pathway for land and property requirements within the wider ASR Group.",
  image: realEstateImage,
  imagePosition: "50% 54%",
  href: "/contact",
  action: "Discuss Real Estate",
};

const construction: Discipline = {
  number: "02",
  title: "Construction",
  stage: "The build",
  headline: "Build with control.",
  description:
    "Experienced management across civil works, finishing and handover, with each stage completed in the right order.",
  image: constructionImage,
  imagePosition: "50% 48%",
  href: "/construction",
  action: "Explore Construction",
  metrics: [
    { value: "20", label: "years of experience" },
    { value: "6 lakh+", label: "sq. ft. completed" },
  ],
};

const interiors: Discipline = {
  number: "03",
  title: "Interiors",
  stage: "At the core",
  headline: "Shape how the space lives.",
  description:
    "Complete interiors for homes, workplaces and brand spaces, managed from the approved design to the final finish.",
  image: interiorsImage,
  imagePosition: "50% 54%",
  href: "/interiors",
  action: "Explore Interiors",
  metrics: [
    { value: "25", label: "years of craft" },
    { value: "4,000+", label: "residential spaces" },
  ],
};

const advertising: Discipline = {
  number: "04",
  title: "Advertising",
  stage: "The market",
  headline: "Take the vision to market.",
  description:
    "A direct pathway for brand, communication and campaign requirements within the wider ASR Group.",
  image: advertisingImage,
  imagePosition: "50% 45%",
  href: "/contact",
  action: "Discuss Advertising",
};

const connectedDisciplines = [realEstate, construction, interiors, advertising];
const mobileDisciplines = [realEstate, construction, interiors, advertising];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10h11m-4.25-4.25L15 10l-4.25 4.25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DisciplineCard({
  discipline,
  featured = false,
  className = "",
}: {
  discipline: Discipline;
  featured?: boolean;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const titleId = `discipline-${discipline.title.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <Link
      href={discipline.href}
      className={`group block rounded-[18px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a7834e] ${className}`}
      aria-labelledby={titleId}
    >
      <motion.article
        className="relative h-full min-h-[inherit] overflow-hidden rounded-[18px] bg-[#111820] text-[#f4f0e8]"
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.16, once: true }}
        transition={{ duration: 0.85, ease }}
      >
        <Image
          src={discipline.image}
          alt=""
          fill
          placeholder="blur"
          sizes={
            featured
              ? "(max-width: 1023px) 100vw, 66vw"
              : "(max-width: 1023px) 100vw, 34vw"
          }
          className="object-cover saturate-[.68] brightness-[.82] contrast-[1.12] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.018] group-hover:saturate-[.82] group-hover:brightness-[.88]"
          style={{ objectPosition: discipline.imagePosition }}
        />
        <div
          className="absolute inset-0 bg-[#091520]/15 mix-blend-multiply"
          aria-hidden="true"
        />
        <div
          className={`absolute inset-0 ${
            featured
              ? "bg-[linear-gradient(to_top,rgba(4,8,12,.96)_0%,rgba(4,8,12,.48)_50%,rgba(4,8,12,.12)_100%)]"
              : "bg-[linear-gradient(to_top,rgba(4,8,12,.96)_0%,rgba(4,8,12,.58)_56%,rgba(4,8,12,.15)_100%)]"
          }`}
          aria-hidden="true"
        />

        <div
          className={`relative z-10 flex h-full min-h-[inherit] flex-col justify-end ${
            featured
              ? "px-[clamp(1.5rem,4vw,4.8rem)] pb-[clamp(2rem,5vh,4rem)] pt-24"
              : "px-[clamp(1.4rem,2.7vw,2.8rem)] pb-[clamp(1.8rem,4vh,2.8rem)] pt-20"
          }`}
        >
          <div className="mb-auto flex items-center justify-between border-b border-white/28 pb-4 text-[0.62rem] font-semibold tracking-[0.17em] text-white/70 uppercase">
            <span>{discipline.number}</span>
            <span>{discipline.stage}</span>
          </div>

          <p className="mb-4 text-[0.58rem] font-semibold tracking-[0.18em] text-[#d0ad73] uppercase">
            ASR {discipline.title}
          </p>
          <h3
            id={titleId}
            className={`max-w-[15ch] font-normal tracking-[-0.052em] ${
              featured
                ? "text-[clamp(3rem,5vw,6rem)] leading-[0.92]"
                : "text-[clamp(2.25rem,3.15vw,3.8rem)] leading-[0.95]"
            }`}
          >
            {discipline.headline}
          </h3>

          <div
            className={`mt-6 grid items-end gap-6 ${
              featured && discipline.metrics
                ? "xl:grid-cols-[minmax(18rem,1fr)_auto]"
                : ""
            }`}
          >
            <p
              className={`leading-[1.65] text-white/74 ${
                featured
                  ? "max-w-[35rem] text-[clamp(.88rem,1vw,1rem)]"
                  : "max-w-[30rem] text-[0.86rem]"
              }`}
            >
              {discipline.description}
            </p>

            {discipline.metrics ? (
              <dl
                className={`grid grid-cols-2 gap-6 border-t border-white/24 pt-4 ${
                  featured ? "xl:min-w-[22rem]" : ""
                }`}
              >
                {discipline.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="text-[0.56rem] tracking-[0.09em] text-white/56 uppercase">
                      {metric.label}
                    </dt>
                    <dd
                      className={`mt-1 leading-none tracking-[-0.05em] ${
                        featured
                          ? "text-[clamp(1.8rem,2.4vw,3rem)]"
                          : "text-[clamp(1.55rem,2vw,2.25rem)]"
                      }`}
                    >
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <span className="mt-7 flex w-fit items-center gap-7 border-b border-[#c6a36b]/65 pb-2 text-[0.65rem] font-semibold tracking-[0.11em] text-white uppercase transition-colors group-hover:border-[#c6a36b] group-hover:text-[#d8b77f]">
            {discipline.action}
            <ArrowIcon />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}

function JourneyCard({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`relative overflow-hidden rounded-[18px] border border-[#111820]/10 bg-[#e9e3d9] text-[#111820] ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.16, once: true }}
      transition={{ duration: 0.85, ease }}
      aria-labelledby="journey-card-title"
    >
      <div className="absolute inset-0">
        <Image
          src={journeyImage}
          alt=""
          fill
          placeholder="blur"
          sizes="(max-width: 1023px) 100vw, 66vw"
          className="object-cover object-center saturate-[.72] contrast-[1.06]"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(233,227,217,.98)_0%,rgba(233,227,217,.94)_46%,rgba(233,227,217,.2)_68%,rgba(233,227,217,.82)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full min-h-[inherit] flex-col px-[clamp(1.5rem,4vw,4.8rem)] pb-[clamp(1.8rem,4vh,3.2rem)] pt-[clamp(1.6rem,4vh,3rem)]">
        <div className="flex items-center justify-between border-b border-[#111820]/20 pb-4 text-[0.62rem] font-semibold tracking-[0.17em] text-[#4e575d] uppercase">
          <span>ASR Group</span>
          <span>Connected delivery</span>
        </div>

        <div className="mt-[clamp(2.6rem,8vh,6.5rem)]">
          <p className="text-[0.6rem] font-semibold tracking-[0.19em] text-[#9a7645] uppercase">
            One accountable journey
          </p>
          <h3
            id="journey-card-title"
            className="mt-5 max-w-[9ch] text-[clamp(3.5rem,6vw,7.2rem)] leading-[0.88] font-normal tracking-[-0.062em]"
          >
            One group. Every stage.
          </h3>
          <p className="mt-6 max-w-[31rem] text-[clamp(.9rem,1vw,1.02rem)] leading-7 text-[#485159]">
            From finding the right property to construction, interiors and advertising, ASR
            brings every stage together through one group.
          </p>
        </div>

        <ol className="mt-auto grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#111820]/18 bg-[#e9e3d9]/78 pt-5 backdrop-blur-[3px] sm:grid-cols-4">
          {mobileDisciplines.map((discipline) => (
            <li key={discipline.title}>
              <span className="text-[0.54rem] font-semibold tracking-[0.13em] text-[#9a7645] uppercase">
                {discipline.number}
              </span>
              <span className="mt-1 block text-[0.64rem] font-semibold tracking-[0.08em] text-[#303940] uppercase">
                {discipline.title}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </motion.article>
  );
}

export default function DisciplinesSection() {
  return (
    <section
      id="about"
      className="bg-[#f2eee6] text-[#111820]"
      aria-labelledby="disciplines-title"
    >
      <div className="border-y border-[#111820]/12 bg-[#e9e3d9] px-6 py-10 sm:px-9 sm:py-12 lg:px-[4.8rem]">
        <div className="mx-auto grid w-full max-w-[1440px] items-end gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,.55fr)]">
          <h2
            id="disciplines-title"
            className="max-w-[12ch] text-[clamp(2.7rem,4.8vw,5.5rem)] leading-[0.94] font-normal tracking-[-0.058em]"
          >
            Interior-led. End-to-end capable.
          </h2>
          <p className="max-w-[34rem] text-[0.92rem] leading-7 text-[#4a5358] lg:justify-self-end">
            Interiors are at the heart of ASR, supported by connected capabilities across Real
            Estate, Construction and Advertising.
          </p>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1600px] grid-cols-[minmax(0,1.65fr)_minmax(23rem,.82fr)] items-start gap-3 p-4 lg:grid">
        <JourneyCard className="sticky top-4 h-[calc(100svh-2rem)] min-h-[42rem]" />

        <div className="space-y-3">
          {connectedDisciplines.map((discipline) => (
            <DisciplineCard
              key={discipline.title}
              discipline={discipline}
              className={
                discipline.title === "Interiors"
                  ? "h-[88svh] min-h-[44rem]"
                  : "h-[68svh] min-h-[35rem]"
              }
            />
          ))}
        </div>
      </div>

      <div className="space-y-3 px-3 py-3 lg:hidden">
        <JourneyCard className="min-h-[72svh]" />
        {mobileDisciplines.map((discipline) => (
          <DisciplineCard
            key={discipline.title}
            discipline={discipline}
            featured={discipline.title === "Interiors"}
            className={
              discipline.title === "Interiors"
                ? "min-h-[82svh]"
                : "min-h-[68svh]"
            }
          />
        ))}
      </div>
    </section>
  );
}
