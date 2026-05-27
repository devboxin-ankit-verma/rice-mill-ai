"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FINAL_CTA } from "@/constants/landing";
import { CTA } from "@/constants/navigation";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function FinalCta() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="section-padding scroll-mt-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-14 text-center shadow-[0_30px_76px_-30px_rgba(124,58,237,0.55)] md:px-12 md:py-20 lg:px-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_50%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(109,40,217,0.3),transparent_60%)]"
              aria-hidden
            />

            {/* Floating decorative elements */}
            {!prefersReducedMotion && (
              <>
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute left-[10%] top-[20%] h-16 w-16 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm"
                  aria-hidden
                />
                <motion.div
                  animate={{ y: [0, 12, 0], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="pointer-events-none absolute bottom-[25%] right-[12%] h-12 w-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
                  aria-hidden
                />
              </>
            )}

            <div className="relative">
              <h2 className="font-jakarta text-section-heading mx-auto max-w-3xl text-balance text-white">
                {FINAL_CTA.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-[17px]">
                {FINAL_CTA.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href="#contact"
                  variant="secondary"
                  className="btn-glow w-full border-white/20 bg-white text-[#7C3AED] shadow-lg hover:bg-white/95 sm:w-auto"
                >
                  {FINAL_CTA.primary}
                </Button>
                <Link
                  href={CTA.href}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/20 hover:-translate-y-0.5 sm:w-auto"
                >
                  {FINAL_CTA.secondary}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
