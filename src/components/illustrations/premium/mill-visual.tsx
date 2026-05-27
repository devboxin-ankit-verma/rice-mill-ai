"use client";

import { MILL_IMAGES, type MillVisualVariant } from "@/lib/assets/mill-images";
import { floatAnimation } from "@/lib/motion/variants";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const MIN_HEIGHT: Record<Exclude<MillVisualVariant, "hero">, string> = {
  factory: "300px",
  workflow: "280px",
  dashboard: "280px",
  analytics: "280px",
  mobile: "300px",
  cloud: "280px",
};

type MillVisualProps = {
  variant: Exclude<MillVisualVariant, "hero">;
  className?: string;
  alt?: string;
};

export function MillVisual({
  variant,
  className = "",
  alt = "AI-powered rice mill software illustration",
}: MillVisualProps) {
  const prefersReducedMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const minHeight = MIN_HEIGHT[variant];
  const src = MILL_IMAGES[variant];

  return (
    <motion.div
      className={`relative flex w-full items-center justify-center ${className}`}
      style={{ minHeight }}
      animate={prefersReducedMotion ? undefined : floatAnimation}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_70%)]"
        aria-hidden
      />
      <div
        className={`relative w-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ minHeight }}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
          className="mx-auto h-auto w-full max-h-[540px] object-contain drop-shadow-[0_28px_56px_rgba(109,40,217,0.2)]"
          onLoad={() => setLoaded(true)}
        />
      </div>
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse rounded-2xl bg-linear-to-br from-[#F5F3FF] to-[#EDE9FE]"
          aria-hidden
        />
      )}
    </motion.div>
  );
}
