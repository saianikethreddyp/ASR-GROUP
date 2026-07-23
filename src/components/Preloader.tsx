"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

const SESSION_KEY = "asr-intro-seen";
const FULL_SEQUENCE_MS = 3450;
const QUICK_SEQUENCE_MS = 520;
const EASE = [0.22, 1, 0.36, 1] as const;

function AsrMark() {
  return (
    <Image
      src="/brand/asr-group-2024-full.png"
      alt="ASR Group — Inspire the Future"
      width={1656}
      height={888}
      priority
      className={`h-auto w-full mix-blend-multiply ${styles.logo}`}
    />
  );
}

export default function Preloader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [quick, setQuick] = useState(false);

  useEffect(() => {
    let seen = false;

    try {
      seen = window.sessionStorage.getItem(SESSION_KEY) === "true";
      window.sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // The intro still works when storage is unavailable.
    }

    const modeFrame = window.requestAnimationFrame(() => {
      setQuick(seen || Boolean(reduceMotion));
    });

    const previousOverflow = document.body.style.overflow;
    if (!seen && !reduceMotion) document.body.style.overflow = "hidden";

    const timeout = window.setTimeout(
      () => setVisible(false),
      seen || reduceMotion ? QUICK_SEQUENCE_MS : FULL_SEQUENCE_MS,
    );

    return () => {
      window.cancelAnimationFrame(modeFrame);
      window.clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
      document.documentElement.dataset.introComplete = "true";
      window.dispatchEvent(new CustomEvent("asr:intro-complete"));
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className={`${styles.surface} fixed inset-0 z-[1000] grid place-items-center overflow-hidden bg-[#f2eee6]`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: quick ? 0.22 : 0.38, ease: EASE }}
          role="status"
          aria-live="polite"
          aria-label="Loading ASR Group"
        >
          {!quick ? (
            <motion.div
              className={styles.frame}
              initial={{ opacity: 0, scale: 0.18 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.18, 1, 1, 5.8],
              }}
              transition={{
                duration: 3.18,
                times: [0, 0.24, 0.72, 1],
                ease: EASE,
              }}
              aria-hidden="true"
            >
              <span className={styles.corner} />
              <span className={styles.corner} />
              <span className={styles.corner} />
              <span className={styles.corner} />
            </motion.div>
          ) : null}

          <motion.div
            className="relative z-10 flex w-[min(72vw,22rem)] flex-col items-center"
            initial={{ opacity: 0, y: quick ? 0 : 12 }}
            animate={{
              opacity: quick ? [0, 1, 1, 0] : [0, 1, 1, 0],
              y: quick ? 0 : [12, 0, 0, -8],
            }}
            transition={{
              duration: quick ? 0.48 : 3.08,
              times: quick ? [0, 0.25, 0.7, 1] : [0, 0.22, 0.76, 1],
              ease: EASE,
            }}
          >
            <motion.div
              className="w-[min(68vw,17rem)] overflow-hidden"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: quick ? 0.2 : 0.92, delay: quick ? 0 : 0.48, ease: EASE }}
            >
              <AsrMark />
            </motion.div>

            <motion.div
              className="mt-6 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.62, delay: quick ? 0.08 : 1.02 }}
            >
              <motion.span
                className={styles.rule}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: quick ? 0.08 : 1.02, ease: EASE }}
                aria-hidden="true"
              />
              <span className="whitespace-nowrap text-[0.58rem] font-semibold tracking-[0.28em] text-[#26303a] uppercase sm:text-[0.65rem]">
                Interiors · Construction
              </span>
            </motion.div>
          </motion.div>

          {!quick ? (
            <motion.p
              className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.52rem] font-semibold tracking-[0.28em] text-[#5f625f] uppercase sm:bottom-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.72, 0] }}
              transition={{ duration: 2.45, delay: 0.58, times: [0, 0.32, 1] }}
            >
              Hyderabad · Since 1999
            </motion.p>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
