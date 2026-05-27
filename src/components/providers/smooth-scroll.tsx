"use client";

import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useReducedMotion } from "framer-motion";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Defer state update to avoid synchronous setState-in-effect warnings.
    requestAnimationFrame(() => setLenis(instance));

    let rafId = 0;
    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    function onVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(raf);
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      instance.destroy();
      setLenis(null);
    };
  }, [prefersReducedMotion]);

  const value = useMemo(() => lenis, [lenis]);

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
