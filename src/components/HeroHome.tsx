"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  ["About Us", "#about"],
  ["Clients", "#clients"],
  ["Projects", "#projects"],
  ["Gallery", "#gallery"],
  ["Contact Us", "#contact"],
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

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
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#09111c] text-[#f4f0e8]"
      aria-labelledby="hero-title"
    >
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover object-[38%_center]"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/media/asr-monumental-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/media/asr-monumental-hero.webm" type="video/webm" />
        <source src="/media/asr-monumental-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-contrast" aria-hidden="true" />

      <motion.header
        className="absolute inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-9"
        initial={{ opacity: 0, y: -18 }}
        animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
        transition={{ ...enter, delay: reduceMotion ? 0 : 0.08 }}
      >
        <div className="relative mx-auto flex h-[76px] max-w-[1540px] items-center justify-between overflow-hidden rounded-[17px] border border-white/25 bg-[#081523]/82 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_18px_50px_rgba(0,0,0,.16)] backdrop-blur-md sm:h-[90px] sm:px-6">
          <Link
            href="#hero"
            className="relative z-10 block w-[116px] shrink-0 sm:w-[136px]"
            aria-label="ASR Group home"
          >
            <Image
              src="/brand/asr-group-2024-header-reversed.svg"
              alt="ASR Group"
              width={410}
              height={180}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
            />
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[clamp(1.5rem,3vw,3.8rem)] lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="group relative py-3 text-[0.9rem] font-medium tracking-[-0.01em] text-white/90"
              >
                {label}
                <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-[#c6a36b] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <Link
            href="mailto:info@asrgroup.com?subject=New%20project%20enquiry"
            className="hidden min-h-12 min-w-[11.5rem] items-center justify-center rounded-[10px] bg-[#f4f0e8] px-8 text-[0.82rem] font-semibold transition-colors hover:bg-white sm:flex"
            style={{ color: "#111820" }}
          >
            Start a project
          </Link>

          <button
            type="button"
            className="relative z-10 grid h-11 w-11 place-items-center rounded-[10px] border border-white/20 bg-white/5 sm:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="hero-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute h-px w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-white transition-transform duration-300 ${
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
            className="fixed inset-0 z-20 flex flex-col bg-[#081523] px-6 pb-8 pt-28 sm:hidden"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease }}
          >
            <nav className="mt-auto border-t border-white/15" aria-label="Mobile navigation">
              {navItems.map(([label, href], index) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/15 py-4 text-2xl font-light tracking-[-0.035em]"
                >
                  {label}
                  <span className="text-[0.58rem] tracking-[0.2em] text-[#c6a36b]">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              href="mailto:info@asrgroup.com?subject=New%20project%20enquiry"
              className="mt-8 flex min-h-12 items-center justify-center rounded-[10px] bg-[#f4f0e8] text-sm font-semibold"
              style={{ color: "#111820" }}
            >
              Start a project
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] items-end px-5 pb-6 pt-32 sm:px-9 sm:pb-8 lg:px-[4.8rem] lg:pb-11">
        <div className="grid w-full items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-[760px]">
            <motion.h1
              id="hero-title"
              className="text-[clamp(3.6rem,6.8vw,6.9rem)] leading-[0.88] font-normal tracking-[-0.062em] text-[#f6f2eb] [text-shadow:0_3px_35px_rgba(0,0,0,.5)]"
              initial={{ opacity: 0, y: 42, clipPath: "inset(0 0 28% 0)" }}
              animate={
                introComplete
                  ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
                  : { opacity: 0, y: 42, clipPath: "inset(0 0 28% 0)" }
              }
              transition={{ ...enter, delay: reduceMotion ? 0 : 0.16 }}
            >
              <span className="block whitespace-nowrap">From structure</span>
              <span className="block">to soul.</span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-[550px] text-[clamp(0.95rem,1.25vw,1.18rem)] leading-[1.55] font-normal tracking-[-0.018em] text-white/88 [text-shadow:0_2px_16px_rgba(0,0,0,.7)]"
              initial={{ opacity: 0, y: 16 }}
              animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ ...enter, delay: reduceMotion ? 0 : 0.34 }}
            >
              Interiors shaped by 25 years of craft. Construction delivered with 20 years of
              experience.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ ...enter, delay: reduceMotion ? 0 : 0.46 }}
            >
              <Link
                href="#projects"
                className="flex min-h-12 min-w-[11.5rem] items-center justify-center rounded-[10px] bg-[#f4f0e8] px-8 text-[0.82rem] font-semibold transition-colors hover:bg-white"
                style={{ color: "#111820" }}
              >
                View our work
              </Link>
              <Link
                href="#about"
                className="flex min-h-12 min-w-[10.5rem] items-center justify-center rounded-[10px] border border-white/55 bg-[#0a1521]/25 px-8 text-[0.82rem] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#111820]"
              >
                Discover ASR
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hidden min-h-12 items-center rounded-[12px] border border-white/40 bg-[#0a1521]/45 px-7 text-sm font-light tracking-[0.01em] text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-sm lg:flex"
            initial={{ opacity: 0, y: 18 }}
            animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ ...enter, delay: reduceMotion ? 0 : 0.58 }}
          >
            Interiors · Construction
          </motion.div>
        </div>
      </div>
    </section>
  );
}
