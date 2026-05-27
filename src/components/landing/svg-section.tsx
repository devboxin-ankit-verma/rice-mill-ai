"use client";

import { SmartFactoryPremium } from "@/components/illustrations/premium/smart-factory-premium";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { ShieldCheck, Zap } from "lucide-react";

export function SvgSection() {
  return (
    <section id="svg" className="section-padding section-light scroll-mt-24 overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              badge="Smart factory"
              title="Automated rice mill operations, monitored by AI"
              description="IoT-ready production lines, robotic workflows, and real-time cloud monitoring — built specifically for modern rice mills."
              align="left"
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <FadeIn>
                <div className="glass-card flex items-start gap-3 p-5">
                  <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#7C3AED]">
                    <ShieldCheck className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <div>
                    <p className="font-jakarta text-[15px] font-semibold text-text-primary">
                      Audit-ready flow
                    </p>
                    <p className="mt-1 text-[14px] text-[#6B7280]">
                      Traceability from gate entry to dispatch.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.05}>
                <div className="glass-card flex items-start gap-3 p-5">
                  <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#7C3AED]">
                    <Zap className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <div>
                    <p className="font-jakarta text-[15px] font-semibold text-text-primary">
                      Real-time intelligence
                    </p>
                    <p className="mt-1 text-[14px] text-[#6B7280]">
                      AI insights across every production shift.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.1} className="relative">
            <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-[0_22px_60px_-30px_rgba(124,58,237,0.25)]">
              <SmartFactoryPremium className="w-full" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
