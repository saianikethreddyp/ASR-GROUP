"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  ["About Us", "/about"],
  ["Interiors", "/interiors"],
  ["Construction", "/construction"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"],
] as const;

const businessUnits = [
  { name: "ASR Interio", href: "/interiors", external: false },
  { name: "ASR Home LLP", href: "/construction", external: false },
  {
    name: "ASR Real Estate",
    href: "https://avaniprojectsindia.com/",
    external: true,
  },
  {
    name: "ASR Advertising",
    href: "https://airakonnect.com/",
    external: true,
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

type BusinessUnit = (typeof businessUnits)[number];

function CompanyTickerItem({
  unit,
  unitIndex,
  interactive = true,
}: {
  unit: BusinessUnit;
  unitIndex: number;
  interactive?: boolean;
}) {
  const content = (
    <>
      <span className="hero-company-number">0{unitIndex + 1}</span>
      <span className="hero-company-name">{unit.name}</span>
      <span className="hero-company-divider" aria-hidden="true" />
    </>
  );

  if (interactive && unit.href) {
    return (
      <Link
        href={unit.href}
        target={unit.external ? "_blank" : undefined}
        rel={unit.external ? "noreferrer" : undefined}
        aria-label={unit.external ? `${unit.name} — opens external website` : unit.name}
        className="hero-company-item"
      >
        {content}
      </Link>
    );
  }

  return <span className="hero-company-item">{content}</span>;
}

export default function HeroHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const complete = () => setIntroComplete(true);

    if (document.documentElement.dataset.introComplete === "true") {
      complete();
      return;
    }

    window.addEventListener("asr:intro-complete", complete);
    return () => window.removeEventListener("asr:intro-complete", complete);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const enter = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.85, ease };

  return (
    <section
      id="hero"
      className="hero-film relative isolate min-h-[100svh] overflow-hidden bg-[#080d12] text-white"
      aria-labelledby="hero-title"
    >
      <video
        className="hero-film-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/asr-continuous-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/media/asr-continuous-hero.webm" type="video/webm" />
        <source src="/media/asr-continuous-hero.mp4" type="video/mp4" />
      </video>

      <Image
        src="/media/asr-continuous-hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-film-poster"
      />

      <div className="hero-film-overlay" aria-hidden="true" />

      <motion.header
        className="absolute inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-9"
        initial={{ opacity: 0, y: -18 }}
        animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
        transition={{ ...enter, delay: reduceMotion ? 0 : 0.08 }}
      >
        <div
          className={`relative mx-auto flex h-[64px] max-w-[1540px] items-center justify-between rounded-[12px] border px-4 backdrop-blur-[14px] transition-colors sm:h-[70px] sm:px-5 ${
            menuOpen
              ? "border-[#111820]/10 bg-white text-[#111820]"
              : "border-white/15 bg-[#07111c]/25 text-white shadow-[0_10px_36px_rgba(0,0,0,.12)]"
          }`}
        >
          <Link
            href="#hero"
            className="relative z-10 block w-[116px] shrink-0 sm:w-[136px]"
            aria-label="ASR Group home"
          >
            <Image
              src={
                menuOpen
                  ? "/brand/asr-group-2024-header.png"
                  : "/brand/asr-group-2024-header-reversed.svg"
              }
              alt="ASR Group"
              width={410}
              height={180}
              priority
              className="h-auto w-full object-contain"
            />
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[clamp(.85rem,1.7vw,2.2rem)] xl:flex"
            aria-label="Primary navigation"
          >
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="group relative py-3 text-[0.76rem] font-medium tracking-[-0.01em] text-white/82"
              >
                {label}
                <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-[#c6a36b] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden min-h-10 items-center justify-center rounded-[8px] border border-white/30 bg-black/10 px-6 text-[0.75rem] font-semibold text-white backdrop-blur-[10px] transition-colors hover:border-[#d6b477]/70 hover:bg-[#d6b477]/16 xl:flex"
          >
            Start a project
          </Link>

          <button
            type="button"
            className={`relative z-10 grid h-10 w-10 place-items-center rounded-[8px] border xl:hidden ${
              menuOpen ? "border-[#111820]/15 bg-white" : "border-white/25 bg-black/10"
            }`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="hero-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute h-px w-5 transition-transform duration-300 ${
                menuOpen ? "bg-[#111820]" : "bg-white"
              } ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-px w-5 transition-transform duration-300 ${
                menuOpen ? "bg-[#111820]" : "bg-white"
              } ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="hero-mobile-menu"
            className="fixed inset-0 z-20 flex flex-col bg-white px-6 pb-8 pt-28 text-[#111820] xl:hidden"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease }}
          >
            <nav className="mt-auto border-t border-[#111820]/15" aria-label="Mobile navigation">
              {navItems.map(([label, href], index) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-[#111820]/15 py-4 text-2xl font-light tracking-[-0.035em]"
                >
                  {label}
                  <span className="text-[0.58rem] tracking-[0.2em] text-[#c6a36b]">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="cta-primary mt-8 flex min-h-12 items-center justify-center rounded-[10px] text-sm font-semibold"
            >
              Start a project
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] items-end px-5 pb-32 pt-32 sm:px-9 sm:pb-36 lg:px-[4.8rem]">
        <div className="w-full text-left">
          <div className="w-full text-center">
            <motion.p
              className="hero-brand-title relative left-px mb-3 text-[clamp(1.05rem,1.65vw,1.65rem)] text-white/94 drop-shadow-[0_2px_14px_rgba(0,0,0,.3)]"
              initial={{ opacity: 0, y: 12 }}
              animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ ...enter, delay: reduceMotion ? 0 : 0.12 }}
            >
              ASR Group
            </motion.p>
            <motion.p
              className="relative left-[2px] mb-5 text-[0.68rem] font-semibold tracking-[0.24em] text-white/74 uppercase drop-shadow-[0_2px_14px_rgba(0,0,0,.3)] sm:mb-6 sm:text-[0.76rem]"
              initial={{ opacity: 0, y: 12 }}
              animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ ...enter, delay: reduceMotion ? 0 : 0.2 }}
            >
              Inspire the Future
            </motion.p>
            <motion.h1
              id="hero-title"
              className="hero-title mx-auto font-display text-white drop-shadow-[0_3px_26px_rgba(0,0,0,.32)] sm:whitespace-nowrap"
              initial={{ opacity: 0, y: 42 }}
              animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 42 }}
              transition={{ ...enter, delay: reduceMotion ? 0 : 0.28 }}
            >
              <span className="block sm:inline">Everything</span>{" "}
              <span className="block sm:inline">Under One Roof.</span>
            </motion.h1>
          </div>
        </div>
      </div>

      <motion.div
        className="hero-company-rail absolute inset-x-5 bottom-4 z-10 sm:inset-x-9 sm:bottom-5 lg:inset-x-[4.8rem]"
        initial={{ opacity: 0, y: 16 }}
        animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ ...enter, delay: reduceMotion ? 0 : 0.58 }}
      >
        <nav
          aria-label="ASR Group companies"
          className="flex h-full items-center"
        >
          <span className="hero-company-label" aria-hidden="true">
            <span className="sm:hidden">ASR</span>
            <span className="hidden sm:inline">Our companies</span>
          </span>

          <div className="hero-company-window">
            <div className="hero-company-track">
              <div className="hero-company-sequence">
                {businessUnits.map((unit, unitIndex) => (
                  <CompanyTickerItem
                    key={unit.name}
                    unit={unit}
                    unitIndex={unitIndex}
                  />
                ))}
              </div>

              <div className="hero-company-sequence" aria-hidden="true">
                {businessUnits.map((unit, unitIndex) => (
                  <CompanyTickerItem
                    key={`${unit.name}-duplicate`}
                    unit={unit}
                    unitIndex={unitIndex}
                    interactive={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </nav>
      </motion.div>
    </section>
  );
}
