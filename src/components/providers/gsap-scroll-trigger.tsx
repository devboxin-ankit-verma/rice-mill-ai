"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "./smooth-scroll";

/**
 * Bridges Lenis scrolling -> GSAP ScrollTrigger updates.
 * Keep it minimal to avoid scroll jank.
 */
export function GsapScrollTrigger() {
  const lenis = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const handleLenisScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleLenisScroll);

    // Allow initial layout to settle before first refresh.
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", handleLenisScroll);
    };
  }, [lenis]);

  return null;
}

