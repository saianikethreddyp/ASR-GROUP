"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type CredentialProps = {
  value: string;
  label: string;
  align?: "left" | "right";
  className: string;
  opacity?: MotionValue<number>;
  y?: MotionValue<number>;
};

function Credential({
  value,
  label,
  align = "left",
  className,
  opacity,
  y,
}: CredentialProps) {
  return (
    <motion.div
      className={`absolute z-20 bg-[#f2eee6]/94 py-2 backdrop-blur-[2px] ${className} ${
        align === "right" ? "text-right" : "text-left"
      }`}
      style={{ opacity, y }}
    >
      <p className="text-[clamp(1.65rem,2.35vw,2.65rem)] leading-none tracking-[-0.055em] text-[#111820]">
        {value}
      </p>
      <p className="mt-2 text-[0.58rem] font-semibold tracking-[0.15em] text-[#555d62] uppercase">
        {label}
      </p>
    </motion.div>
  );
}

const credentials = [
  { value: "25 years", label: "Interior craft" },
  { value: "20 years", label: "Construction execution" },
  { value: "4,000+", label: "Projects delivered" },
  { value: "6 lakh", label: "Sq. ft. delivered" },
] as const;

export default function ApertureStandard() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rawApertureWidth = useTransform(
    scrollYProgress,
    [0.08, 0.58, 0.76, 1],
    ["1px", "74%", "74%", "74%"],
  );
  const apertureWidth = useSpring(rawApertureWidth, {
    stiffness: 92,
    damping: 25,
    mass: 0.38,
  });
  const imageScale = useTransform(scrollYProgress, [0.08, 0.7], [1.07, 1]);
  const lineScale = useTransform(scrollYProgress, [0, 0.16], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0.48, 0.67], [1, 0]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.12], [0.55, 1]);
  const firstCredentialOpacity = useTransform(
    scrollYProgress,
    [0.34, 0.48],
    [0, 1],
  );
  const secondCredentialOpacity = useTransform(
    scrollYProgress,
    [0.43, 0.57],
    [0, 1],
  );
  const thirdCredentialOpacity = useTransform(
    scrollYProgress,
    [0.52, 0.66],
    [0, 1],
  );
  const fourthCredentialOpacity = useTransform(
    scrollYProgress,
    [0.61, 0.75],
    [0, 1],
  );
  const firstCredentialY = useTransform(scrollYProgress, [0.34, 0.52], [18, 0]);
  const secondCredentialY = useTransform(scrollYProgress, [0.43, 0.61], [18, 0]);
  const thirdCredentialY = useTransform(scrollYProgress, [0.52, 0.7], [18, 0]);
  const fourthCredentialY = useTransform(scrollYProgress, [0.61, 0.79], [18, 0]);
  const trustOpacity = useTransform(scrollYProgress, [0.7, 0.86], [0, 1]);
  const trustY = useTransform(scrollYProgress, [0.7, 0.86], [14, 0]);

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="relative bg-[#f2eee6] text-[#111820]"
      aria-labelledby="standard-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,24,32,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,32,.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 74% 78% at 66% 50%, black, transparent 82%)",
        }}
      />

      <div className="hidden h-[175svh] lg:block">
        <div className="sticky top-0 h-[100svh] overflow-hidden px-[4.8rem] py-8">
          <div className="mx-auto grid h-full max-w-[1540px] grid-cols-[minmax(20rem,.68fr)_minmax(0,1.32fr)] items-center gap-[clamp(3rem,6vw,7.5rem)]">
            <motion.div
              className="relative z-10 max-w-[31rem]"
              style={{ opacity: reduceMotion ? 1 : copyOpacity }}
            >
              <p className="text-[0.62rem] font-semibold tracking-[0.19em] text-[#9a7645] uppercase">
                Behind the finish
              </p>
              <h2
                id="standard-title"
                className="mt-5 text-[clamp(3rem,4.65vw,5.6rem)] leading-[0.94] font-normal tracking-[-0.06em]"
              >
                The finished space is only the visible part of the work.
              </h2>
              <p className="mt-7 max-w-[27rem] text-[0.95rem] leading-7 text-[#4a5358]">
                Integrated planning and accountable execution carry the approved intent through
                every decision that follows.
              </p>
              <Link
                href="#about"
                className="group mt-8 inline-flex min-h-12 items-center gap-8 rounded-[10px] border border-[#111820]/28 px-6 text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-colors hover:border-[#111820] hover:bg-[#111820] hover:text-[#f4f0e8]"
              >
                Discover ASR
                <span
                  aria-hidden="true"
                  className="text-base transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </motion.div>

            <div className="relative z-10 h-[74svh] min-h-[34rem]">
              <div className="absolute inset-x-0 top-1/2 h-[72%] -translate-y-1/2">
                <motion.div
                  className="absolute inset-y-0 left-1/2 overflow-hidden rounded-[18px] border border-[#111820]/10 bg-[#dfd8cc] shadow-[0_20px_60px_rgba(17,24,32,.08)]"
                  style={{
                    width: reduceMotion ? "74%" : apertureWidth,
                    x: "-50%",
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ scale: reduceMotion ? 1 : imageScale }}
                  >
                    <Image
                      src="/media/asr-aperture-material-study.jpg"
                      alt="Architectural material study showing walnut joinery, warm stone, a brass junction and technical drawings"
                      fill
                      sizes="52vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,10,7,.2),transparent_45%)]"
                    aria-hidden="true"
                  />
                </motion.div>

                <motion.span
                  className="absolute inset-y-0 left-1/2 z-10 w-px origin-center bg-[#a7834e]"
                  style={{
                    opacity: reduceMotion ? 0 : lineOpacity,
                    scaleY: reduceMotion ? 1 : lineScale,
                  }}
                  aria-hidden="true"
                />
              </div>

              <Credential
                value="25 years"
                label="Interior craft"
                className="left-0 top-[2%] pr-5"
                opacity={reduceMotion ? undefined : firstCredentialOpacity}
                y={reduceMotion ? undefined : firstCredentialY}
              />
              <Credential
                value="20 years"
                label="Construction execution"
                align="right"
                className="right-0 top-[2%] pl-5"
                opacity={reduceMotion ? undefined : secondCredentialOpacity}
                y={reduceMotion ? undefined : secondCredentialY}
              />
              <Credential
                value="4,000+"
                label="Projects delivered"
                className="bottom-[1%] left-0 pr-5"
                opacity={reduceMotion ? undefined : thirdCredentialOpacity}
                y={reduceMotion ? undefined : thirdCredentialY}
              />
              <Credential
                value="6 lakh"
                label="Sq. ft. delivered"
                align="right"
                className="bottom-[1%] right-0 pl-5"
                opacity={reduceMotion ? undefined : fourthCredentialOpacity}
                y={reduceMotion ? undefined : fourthCredentialY}
              />
            </div>
          </div>

          <motion.div
            className="absolute inset-x-[4.8rem] bottom-6 border-t border-[#111820]/16 pt-4"
            style={{
              opacity: reduceMotion ? 1 : trustOpacity,
              y: reduceMotion ? 0 : trustY,
            }}
          >
            <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-8">
              <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-[#8a6a3f] uppercase">
                Institutional trust
              </p>
              <p className="text-right text-[0.68rem] tracking-[0.05em] text-[#4d555a]">
                C.M. Camp Office <span className="px-2 text-[#a7834e]">·</span>
                Telangana Legislative Assembly
                <span className="px-2 text-[#a7834e]">·</span>
                Jubilee Hall restoration
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative px-5 py-20 sm:px-9 sm:py-24 lg:hidden">
        <p className="text-[0.6rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
          Behind the finish
        </p>
        <h2 className="mt-5 max-w-[12ch] text-[clamp(2.7rem,12vw,4.5rem)] leading-[0.94] tracking-[-0.058em]">
          The finished space is only the visible part of the work.
        </h2>
        <p className="mt-6 max-w-[34rem] text-sm leading-6 text-[#4a5358]">
          Integrated planning and accountable execution carry the approved intent through every
          decision that follows.
        </p>
        <Link
          href="#about"
          className="mt-7 inline-flex min-h-12 items-center gap-7 rounded-[10px] border border-[#111820]/28 px-6 text-[0.68rem] font-semibold tracking-[0.12em] uppercase"
        >
          Discover ASR <span aria-hidden="true">→</span>
        </Link>

        <motion.div
          className="relative mt-14 aspect-[4/5] overflow-hidden rounded-[18px] bg-[#dfd8cc]"
          initial={
            reduceMotion ? false : { clipPath: "inset(0 48% 0 48% round 18px)" }
          }
          whileInView={
            reduceMotion ? undefined : { clipPath: "inset(0 0% 0 0% round 18px)" }
          }
          viewport={{ amount: 0.25, once: true }}
          transition={{ duration: 1.15, ease }}
        >
          <Image
            src="/media/asr-aperture-material-study.jpg"
            alt="Architectural material study showing walnut joinery, warm stone, a brass junction and technical drawings"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <dl className="mt-10 grid grid-cols-2 border-t border-[#111820]/16">
          {credentials.map((credential) => (
            <div
              key={credential.label}
              className="border-b border-[#111820]/14 py-6 odd:pr-5 even:border-l even:pl-5"
            >
              <dt className="text-[0.58rem] font-semibold tracking-[0.13em] text-[#5b6266] uppercase">
                {credential.label}
              </dt>
              <dd className="mt-2 text-[clamp(1.8rem,8vw,2.8rem)] leading-none tracking-[-0.05em]">
                {credential.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 border-t border-[#111820]/16 pt-5">
          <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-[#8a6a3f] uppercase">
            Institutional trust
          </p>
          <p className="mt-3 text-sm leading-6 text-[#4d555a]">
            C.M. Camp Office · Telangana Legislative Assembly · Jubilee Hall restoration
          </p>
        </div>
      </div>
    </section>
  );
}
