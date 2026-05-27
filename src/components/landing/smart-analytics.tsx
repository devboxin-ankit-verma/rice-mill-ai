"use client";

import { AnalyticsPremium } from "@/components/illustrations/premium/analytics-premium";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { ANALYTICS } from "@/constants/landing";
import { TrendingUp } from "lucide-react";

export function SmartAnalytics() {
  return (
    <section id="analytics" className="section-padding scroll-mt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              badge={ANALYTICS.badge}
              title={ANALYTICS.title}
              description={ANALYTICS.description}
              align="left"
            />

            <div className="mt-10 grid grid-cols-2 gap-4">
              {ANALYTICS.kpis.map((kpi, i) => (
                <FadeIn key={kpi.label} delay={0.06 * i}>
                  <div className="glass-card p-5 md:p-6">
                    <p className="text-[12px] font-medium text-[#6B7280]">{kpi.label}</p>
                    <p className="font-jakarta mt-1 flex items-center gap-2 text-2xl font-bold text-[#7C3AED]">
                      {kpi.value}
                      <TrendingUp className="h-4 w-4 text-[#10B981]" aria-hidden />
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.2} className="mt-8 grid grid-cols-3 gap-4 border-t border-[#E5E7EB] pt-8">
              {[
                { value: 12500, suffix: "+", label: "Transactions" },
                { value: 99, suffix: ".9%", label: "Uptime" },
                { value: 48, suffix: "h", label: "Avg. ROI" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-jakarta text-xl font-bold text-text-primary sm:text-2xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-0.5 text-[12px] text-[#6B7280]">{stat.label}</p>
                </div>
              ))}
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="relative">
            <AnalyticsPremium className="w-full" />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
