"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { STATS_STRIP, TRUSTED_LOGOS } from "@/constants/landing";

export function TrustedBy() {
  return (
    <section className="relative section-shell bg-[#FAF7FF] py-14 md:py-16">
      <Container>
        <FadeIn>
          <p className="text-center text-[13px] font-semibold tracking-[0.01em] text-[#6B7280]">
            Trusted by leading rice mills across India
          </p>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {TRUSTED_LOGOS.map((name) => (
              <span
                key={name}
                className="font-jakarta text-sm font-semibold tracking-tight text-[#9CA3AF] transition-colors duration-300 hover:text-[#7C3AED] sm:text-[15px]"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS_STRIP.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.05 * i} className="text-center">
              <div className="kpi-card h-full px-4 py-4 md:px-5 md:py-5">
                <p className="font-jakarta text-2xl font-bold text-[#7C3AED] md:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-[13px] font-medium text-[#6B7280]">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
