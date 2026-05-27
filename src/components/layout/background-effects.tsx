"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const Galaxy = dynamic(() => import("@/components/background/Galaxy"), {
  ssr: false,
});

export function BackgroundEffects() {
  const prefersReducedMotion = useReducedMotion();
  const [enableGalaxy, setEnableGalaxy] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const isDesktop = window.matchMedia?.("(min-width: 1024px)")?.matches ?? true;
    if (!isDesktop) return;

    const idle = (cb: () => void) => {
      const ric = window.requestIdleCallback as undefined | ((fn: () => void, opts?: { timeout?: number }) => number);
      if (typeof ric === "function") ric(cb, { timeout: 1200 });
      else setTimeout(cb, 450);
    };

    idle(() => setEnableGalaxy(true));
  }, [prefersReducedMotion]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {enableGalaxy && (
        <div className="pointer-events-auto absolute inset-0 opacity-[0.75]">
          <Galaxy
            density={1.2}
            glowIntensity={0.4}
            saturation={0.55}
            hueShift={260}
            twinkleIntensity={0.32}
            rotationSpeed={0.06}
            starSpeed={0.5}
            mouseInteraction
            mouseRepulsion
            transparent
          />
        </div>
      )}
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { scale: [1, 1.05, 1], opacity: [0.4, 0.55, 0.4] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)]"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-[-15%] top-[20%] h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.1)_0%,transparent_70%)]"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -20, 0], opacity: [0.25, 0.4, 0.25] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] left-[30%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.08)_0%,transparent_70%)]"
      />

      {/* Intentionally no full-screen dot particles. */}
    </div>
  );
}
