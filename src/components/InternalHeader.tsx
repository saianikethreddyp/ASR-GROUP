"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const navigation = [
  ["About Us", "/about"],
  ["Interiors", "/interiors"],
  ["Construction", "/construction"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"],
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export default function InternalHeader({
  activeLabel,
  tone = "light",
}: {
  activeLabel?: string;
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const light = tone === "light";

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-9">
      <motion.div
        className={`relative mx-auto flex h-[76px] max-w-[1540px] items-center justify-between rounded-[17px] border px-4 shadow-[0_18px_50px_rgba(17,24,32,.12)] backdrop-blur-[28px] backdrop-saturate-[165%] sm:h-[90px] sm:px-6 ${
          light
            ? "border-[#111820]/10 bg-white/82"
            : "border-white/25 bg-[linear-gradient(135deg,rgba(255,255,255,.13)_0%,rgba(8,21,35,.44)_45%,rgba(8,21,35,.28)_100%)]"
        }`}
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.75, ease }}
      >
        <Link
          href="/"
          className="relative z-10 block w-[116px] shrink-0 sm:w-[136px]"
          aria-label="ASR Group home"
        >
          <Image
            src={
              light
                ? "/brand/asr-group-2024-header.png"
                : "/brand/asr-group-2024-header-reversed.svg"
            }
            alt="ASR Group"
            width={410}
            height={180}
            preload
            className="h-auto w-full object-contain"
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[clamp(.85rem,1.7vw,2.2rem)] xl:flex"
          aria-label="Primary navigation"
        >
          {navigation.map(([label, href]) => {
            const active = label === activeLabel;
            return (
              <Link
                key={label}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative py-3 text-[0.8rem] font-medium tracking-[-0.01em] transition-colors ${
                  active
                    ? light
                      ? "text-[#111820]"
                      : "text-white"
                    : light
                      ? "text-[#111820]/62 hover:text-[#111820]"
                      : "text-white/72 hover:text-white"
                }`}
              >
                {label}
                {active ? (
                  <span className="absolute inset-x-1 bottom-1 h-px bg-[#c6a36b]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link
          href={activeLabel === "Contact Us" ? "#enquiry-form" : "/contact"}
          className="cta-primary hidden min-h-12 min-w-[10.75rem] items-center justify-center rounded-[10px] px-7 text-[0.8rem] font-semibold xl:flex"
        >
          Start a project
        </Link>

        <button
          type="button"
          className={`relative z-50 grid h-11 w-11 place-items-center rounded-[10px] border xl:hidden ${
            light
              ? "border-[#111820]/15 bg-white text-[#111820]"
              : "border-white/18 bg-white/6 text-white"
          }`}
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="internal-mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-[4px]"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-[4px]"
            }`}
          />
        </button>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="internal-mobile-menu"
            className="fixed inset-0 z-30 flex flex-col bg-[#081523] px-6 pb-8 pt-28 text-white xl:hidden"
            initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduceMotion ? 0.01 : 0.42, ease }}
          >
            <nav className="mt-auto border-t border-white/15" aria-label="Mobile navigation">
              {navigation.map(([label, href], index) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-display flex items-center justify-between border-b border-white/15 py-4 text-[2rem] leading-none"
                >
                  {label}
                  <span className="font-sans text-[0.58rem] tracking-[0.18em] text-[#9a7645]">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              href={activeLabel === "Contact Us" ? "#enquiry-form" : "/contact"}
              onClick={() => setOpen(false)}
              className="cta-primary mt-8 flex min-h-12 items-center justify-center rounded-[10px] text-sm font-semibold"
            >
              Start a project
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
