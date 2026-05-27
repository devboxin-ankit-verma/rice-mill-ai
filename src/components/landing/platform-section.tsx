"use client";

import { CloudMonitoringPremium } from "@/components/illustrations/premium/cloud-monitoring-premium";
import { MobileAppPremium } from "@/components/illustrations/premium/mobile-app-premium";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { PLATFORM } from "@/constants/landing";

export function PlatformSection() {
  return (
    <section id="platform" className="section-padding section-light scroll-mt-24 overflow-hidden">
      <Container>
        <SectionHeader
          badge={PLATFORM.badge}
          title={PLATFORM.title}
          description={PLATFORM.description}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-1">
              <div className="order-2 md:order-1 lg:order-0">
                <p className="text-label font-jakarta text-[#7C3AED]">{PLATFORM.mobile.badge}</p>
                <h3 className="font-jakarta mt-2 text-xl font-bold text-text-primary md:text-2xl">
                  {PLATFORM.mobile.title}
                </h3>
                <p className="text-body mt-3 text-[15px]">{PLATFORM.mobile.description}</p>
              </div>
              <div className="order-1 mx-auto w-full max-w-[360px] md:order-2 lg:order-0 lg:max-w-none">
                <MobileAppPremium className="w-full" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-1">
              <div className="order-2 md:order-1 lg:order-0">
                <p className="text-label font-jakarta text-[#7C3AED]">{PLATFORM.cloud.badge}</p>
                <h3 className="font-jakarta mt-2 text-xl font-bold text-text-primary md:text-2xl">
                  {PLATFORM.cloud.title}
                </h3>
                <p className="text-body mt-3 text-[15px]">{PLATFORM.cloud.description}</p>
              </div>
              <div className="order-1 mx-auto w-full max-w-[520px] md:order-2 lg:order-0">
                <CloudMonitoringPremium className="w-full" />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
