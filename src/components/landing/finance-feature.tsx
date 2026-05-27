"use client";

import { DashboardFinanceMockup } from "@/components/mockups/dashboard-finance";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FINANCE_FEATURE } from "@/constants/landing";

export function FinanceFeatureSection() {
  return (
    <section id="finance" className="section-padding section-tint scroll-mt-24">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-jakarta text-section-heading text-balance text-text-primary">
            {FINANCE_FEATURE.title}
          </h2>
          <p className="text-body mt-4">{FINANCE_FEATURE.description}</p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-12">
          <DashboardFinanceMockup />
        </FadeIn>
      </Container>
    </section>
  );
}
