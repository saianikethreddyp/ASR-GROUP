"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    const lenis = new Lenis({
      anchors: {
        duration: 1.15,
        offset: -24,
      },
      autoRaf: true,
      autoToggle: true,
      lerp: 0.085,
      smoothWheel: true,
      stopInertiaOnNavigate: true,
      syncTouch: false,
      touchMultiplier: 1,
      wheelMultiplier: 0.88,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
