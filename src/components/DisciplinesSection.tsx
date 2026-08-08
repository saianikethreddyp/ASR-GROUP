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

type BusinessStage = {
  number: string;
  stage: string;
  company: string;
  description: string;
  image: StaticImageData;
  imagePosition: string;
  href: string | null;
  external?: boolean;
};

const businessStages: BusinessStage[] = [
  {
    number: "01",
    stage: "Find",
    company: "ASR Real Estate",
    description:
      "Land and property opportunities considered as the foundation of what comes next.",
    image: realEstateImage,
    imagePosition: "50% 52%",
    href: "https://avaniprojectsindia.com/",
    external: true,
  },
  {
    number: "02",
    stage: "Build",
    company: "ASR Home LLP",
    description:
      "Construction planned and managed from structure through completion.",
    image: constructionImage,
    imagePosition: "50% 48%",
    href: "/construction",
  },
  {
    number: "03",
    stage: "Design",
    company: "ASR Interio",
    description:
      "Interiors shaped around how each home, workplace or brand space should live.",
    image: interiorsImage,
    imagePosition: "50% 54%",
    href: "/interiors",
  },
  {
    number: "04",
    stage: "Promote",
    company: "ASR Advertising",
    description:
      "Brand and communication thinking that carries the completed vision into the market.",
    image: advertisingImage,
    imagePosition: "50% 45%",
    href: "https://airakonnect.com/",
    external: true,
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
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

function BusinessPanel({ business }: { business: BusinessStage }) {
  const reduceMotion = useReducedMotion();
  const titleId = `business-${business.stage.toLowerCase()}`;

  const panel = (
    <motion.article
      className="relative min-h-[32rem] overflow-hidden rounded-[18px] bg-[#09111c] text-[#f4f0e8] sm:min-h-[35rem]"
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.18, once: true }}
      transition={{ duration: 0.82, ease }}
      aria-labelledby={titleId}
    >
      <Image
        src={business.image}
        alt=""
        fill
        placeholder="blur"
        sizes="(max-width: 639px) 100vw, (max-width: 1199px) 50vw, 25vw"
        className="object-cover saturate-[.7] brightness-[.76] contrast-[1.08] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.025] group-hover:saturate-[.86] group-hover:brightness-[.83]"
        style={{ objectPosition: business.imagePosition }}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,8,13,.97)_0%,rgba(3,8,13,.55)_52%,rgba(3,8,13,.14)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[inherit] flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between border-b border-white/28 pb-4 text-[0.58rem] font-semibold tracking-[0.18em] text-white/70 uppercase">
          <span>{business.number}</span>
          <span>{business.company}</span>
        </div>

        <div className="mt-auto pt-24">
          <h3
            id={titleId}
            className="text-[clamp(3.4rem,5vw,5.3rem)] leading-[0.9] tracking-[-0.045em]"
          >
            {business.stage}.
          </h3>
          <p className="mt-5 max-w-[28rem] text-[0.86rem] leading-6 text-white/72">
            {business.description}
          </p>

          {business.href ? (
            <span className="mt-7 flex w-fit items-center gap-7 border-b border-[#c6a36b]/70 pb-2 text-[0.62rem] font-semibold tracking-[0.12em] text-white uppercase transition-colors group-hover:border-[#d5b274] group-hover:text-[#d5b274]">
              Explore {business.company}
              <ArrowIcon />
            </span>
          ) : (
            <span className="mt-7 block text-[0.6rem] font-semibold tracking-[0.14em] text-white/48 uppercase">
              ASR Group capability
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );

  if (!business.href) {
    return <div className="group block">{panel}</div>;
  }

  return (
    <Link
      href={business.href}
      target={business.external ? "_blank" : undefined}
      rel={business.external ? "noreferrer" : undefined}
      aria-label={
        business.external
          ? `Explore ${business.company} — opens external website`
          : `Explore ${business.company}`
      }
      className="group block rounded-[18px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a7834e]"
    >
      {panel}
    </Link>
  );
}

export default function DisciplinesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="businesses"
      className="overflow-hidden bg-[#f2eee6] text-[#111820]"
      aria-labelledby="disciplines-title"
    >
      <div className="relative isolate overflow-hidden border-y border-[#111820]/12 px-6 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-28">
        <Image
          src={journeyImage}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-80 saturate-[.7] contrast-[1.08]"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(242,238,230,.93)_0%,rgba(242,238,230,.72)_52%,rgba(242,238,230,.46)_100%)]"
          aria-hidden="true"
        />

        <motion.div
          className="mx-auto grid max-w-[1440px] items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,.58fr)]"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.25, once: true }}
          transition={{ duration: 0.85, ease }}
        >
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-[#9a7645] uppercase">
              What we do
            </p>
            <h2
              id="disciplines-title"
              className="mt-5 max-w-[17ch] text-[clamp(2.8rem,5vw,6rem)] leading-[0.9] tracking-[-0.055em]"
            >
              One group. One team.
            </h2>
          </div>
          <div className="lg:justify-self-end lg:pb-2">
            <p className="max-w-[27rem] border-t border-[#111820]/18 pt-5 text-[clamp(1rem,1.2vw,1.15rem)] leading-7 text-[#4f5a60]">
              ASR Group brings the work together from the first plan to the finished space.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-3 p-3 sm:grid-cols-2 sm:p-4 xl:grid-cols-4">
        {businessStages.map((business) => (
          <BusinessPanel key={business.stage} business={business} />
        ))}
      </div>
    </section>
  );
}
