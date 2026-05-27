"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { PRICING } from "@/constants/landing";
import { Check } from "lucide-react";
import { useState } from "react";

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding section-shell scroll-mt-24">
      <Container>
        <SectionHeader
          badge={PRICING.badge}
          title={PRICING.title}
          description={PRICING.description}
        />

        <FadeIn className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white/95 p-1.5 shadow-[0_10px_24px_-16px_rgba(124,58,237,0.28)]">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-300 ${
                !yearly
                  ? "bg-brand-gradient text-white shadow-md"
                  : "text-[#6B7280] hover:text-text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-300 ${
                yearly
                  ? "bg-brand-gradient text-white shadow-md"
                  : "text-[#6B7280] hover:text-text-primary"
              }`}
            >
              Yearly
              <span className="ml-1.5 text-[11px] font-medium opacity-90">Save 20%</span>
            </button>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {PRICING.plans.map((plan, i) => {
            const price =
              plan.monthlyPrice === null
                ? null
                : yearly
                  ? plan.yearlyPrice
                  : plan.monthlyPrice;

            return (
              <FadeIn key={plan.name} delay={0.08 * i}>
                <article
                  className={`card-gradient-border relative flex h-full flex-col p-6 md:p-8 ${
                    plan.popular
                      ? "ring-2 ring-[#7C3AED]/30 shadow-[0_24px_64px_-22px_rgba(124,58,237,0.36)]"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-jakarta text-xl font-bold text-text-primary">
                    {plan.name}
                  </h3>
                  <p className="text-body mt-2 text-[14px]">{plan.description}</p>

                  <div className="mt-6">
                    {price === null ? (
                      <p className="font-jakarta text-3xl font-bold text-text-primary">
                        Custom
                      </p>
                    ) : (
                      <p className="font-jakarta text-3xl font-bold text-text-primary">
                        {formatPrice(price)}
                        <span className="text-base font-medium text-[#6B7280]">/mo</span>
                      </p>
                    )}
                  </div>

                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EDE9FE] text-[#7C3AED]">
                          <Check className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        <span className="text-[14px] text-[#374151]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#contact"
                    variant={plan.popular ? "primary" : "secondary"}
                    className={`mt-8 w-full btn-glow ${plan.popular ? "" : ""}`}
                  >
                    {plan.cta}
                  </Button>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
