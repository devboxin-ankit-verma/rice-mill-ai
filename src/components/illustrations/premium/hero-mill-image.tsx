"use client";

import { HERO_MILL_IMAGE } from "@/lib/assets/mill-images";
import {
  heroEntrance,
  heroFloatAnimation,
  heroGlowPulse,
} from "@/lib/motion/variants";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type HeroMillImageProps = {
  className?: string;
};

/** Hero section only — premium mill render with smooth SVG motion */
export function HeroMillImage({ className = "" }: HeroMillImageProps) {
  const prefersReducedMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className={`relative flex w-full items-center justify-center ${className}`}
      style={{ minHeight: "320px" }}
      variants={heroEntrance}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.14),transparent_68%)]"
        aria-hidden
        animate={prefersReducedMotion ? undefined : heroGlowPulse}
      />

      <div className="relative aspect-4/3 w-full max-w-[620px]">
        <motion.div
          className="relative z-10"
          animate={prefersReducedMotion ? undefined : heroFloatAnimation}
        >
          <div
            className={`relative w-full transition-opacity duration-700 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={HERO_MILL_IMAGE}
              alt="AI-powered rice mill — silos, production, logistics, and smart ERP"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
              className="mx-auto h-auto w-full max-h-[520px] object-contain drop-shadow-[0_32px_64px_rgba(109,40,217,0.22)]"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </motion.div>
      </div>

      {!loaded && (
        <div
          className="absolute inset-0 z-20 animate-pulse rounded-2xl bg-linear-to-br from-[#F5F3FF] to-[#EDE9FE]"
          aria-hidden
        />
      )}
    </motion.div>
  );
}
