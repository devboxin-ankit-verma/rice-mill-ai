"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { HERO, HERO_STATS } from "@/constants/landing";
import { CTA } from "@/constants/navigation";
import { HeroFactoryPremium } from "@/components/illustrations/premium/hero-factory-premium";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, Play, Sparkles } from "lucide-react";
import { useRef } from "react";

const STAT_NUMBERS = [
  { value: 500, suffix: "+" },
  { value: 98, suffix: "%" },
  { value: 40, suffix: "%" },
] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const threeMouseRef = useRef({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
    threeMouseRef.current = { x: nx * 2, y: ny * 2 };
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    threeMouseRef.current = { x: 0, y: 0 };
  }

  return (
    <section
      className="landing-mesh relative overflow-hidden pt-[72px]"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-glow left-1/2 top-20 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0" aria-hidden />

      {!prefersReducedMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute left-[8%] top-32 h-48 w-48 rounded-full bg-violet-300/20"
            aria-hidden
            animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-24 right-[12%] h-40 w-40 rounded-full bg-purple-200/30"
            aria-hidden
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      <Container className="relative z-10 section-padding pb-16! md:pb-20! lg:pb-24!">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="order-1 -mt-2 flex flex-col items-center gap-5 text-pretty text-center sm:gap-6 sm:-mt-1 lg:order-0 lg:items-start lg:gap-6 lg:text-left lg:-mt-3">
            <FadeIn className="w-full lg:w-auto">
              <p className="text-hero-badge text-brand-600 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-border bg-white/90 px-3.5 py-1.5 text-center shadow-sm sm:px-4 sm:py-2 lg:justify-start">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-600 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
                </span>
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-500" aria-hidden />
                <span>{HERO.badge}</span>
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="font-jakarta text-hero max-w-2xl text-text-primary">
                Run your{" "}
                <span className="text-brand-gradient">rice mill</span> smarter
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-body mx-auto max-w-2xl lg:mx-0">
                {HERO.description}
              </p>
            </FadeIn>

            <FadeIn
              delay={0.15}
              className="mt-2 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start"
            >
              <Button href="#contact" className="btn-glow w-full sm:w-auto">
                {HERO.primaryCta}
              </Button>
              <Button href={CTA.href} variant="secondary" className="group w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4 text-[#7C3AED] transition-transform group-hover:scale-110" />
                {HERO.secondaryCta}
              </Button>
            </FadeIn>

            <FadeIn
              delay={0.2}
              className="flex w-full max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:max-w-none lg:justify-start"
            >
              {HERO.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-sm font-medium leading-snug text-text-secondary"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success" strokeWidth={2} />
                  {badge}
                </span>
              ))}
            </FadeIn>

            <FadeIn
              delay={0.25}
              className="grid w-full max-w-md grid-cols-3 gap-6 border-t border-[#E5E7EB] pt-7 sm:gap-8 lg:max-w-lg lg:pt-8"
            >
              {HERO_STATS.map((stat, i) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-jakarta text-lg font-bold text-[#7C3AED] sm:text-xl">
                    <AnimatedCounter
                      value={STAT_NUMBERS[i].value}
                      suffix={STAT_NUMBERS[i].suffix}
                      duration={1800}
                    />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-text-secondary sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </FadeIn>
          </div>

          <FadeIn
            delay={0.12}
            className="order-2 relative mx-auto w-full max-w-[620px] lg:order-0 lg:ml-auto lg:max-w-none"
          >
            <motion.div
              style={{ x: parallaxX, y: parallaxY }}
              className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[400px]"
            >
              <HeroFactoryPremium className="h-full w-full" />
            </motion.div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
