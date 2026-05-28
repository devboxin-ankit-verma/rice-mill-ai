"use client";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { TESTIMONIALS } from "@/constants/landing";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="testimonials" className="section-padding section-light section-shell scroll-mt-24 overflow-hidden">
      <Container>
        <SectionHeader badge={TESTIMONIALS.badge} title={TESTIMONIALS.title} />

        <div className="mt-14 -mx-5 flex gap-6 overflow-x-auto px-5 pb-4 snap-x snap-mandatory scrollbar-hide md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 lg:gap-7">
          {TESTIMONIALS.items.map((item, i) => (
            <FadeIn
              key={item.name}
              delay={0.06 * i}
              className="w-[86vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink md:min-w-0"
            >
              <motion.article
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                className="card-premium flex h-full flex-col p-6 md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <Quote className="h-8 w-8 shrink-0 text-[#A78BFA]/60" strokeWidth={1.5} aria-hidden />
                  <div className="flex gap-0.5">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-[#7C3AED] text-[#7C3AED]"
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
                <p className="text-body mt-4 flex-1 text-[15px] text-[#374151]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#E5E7EB] pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                    {item.initials}
                  </span>
                  <div>
                    <p className="font-jakarta text-[15px] font-semibold text-text-primary">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[13px] text-[#6B7280]">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
