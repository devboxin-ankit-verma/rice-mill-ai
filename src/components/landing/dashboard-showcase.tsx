"use client";

import { ErpDashboardPremium } from "@/components/illustrations/premium/erp-dashboard-premium";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { DASHBOARD } from "@/constants/landing";
import { Check } from "lucide-react";

export function DashboardShowcase() {
  return (
    <section id="dashboard" className="section-padding section-tint section-shell scroll-mt-24 overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              badge={DASHBOARD.badge}
              title={DASHBOARD.title}
              description={DASHBOARD.description}
              align="left"
            />
            <ul className="mt-9 space-y-4">
              {DASHBOARD.highlights.map((item, i) => (
                <FadeIn key={item} delay={0.05 * i}>
                  <li className="surface-premium flex items-start gap-3 p-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                    </span>
                    <span className="text-[15px] font-medium text-[#374151] md:text-base">
                      {item}
                    </span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <FadeIn delay={0.1} className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:max-w-none">
            <div className="hero-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden />
            <div className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-[0_22px_60px_-30px_rgba(124,58,237,0.25)]">
              <ErpDashboardPremium className="w-full" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
