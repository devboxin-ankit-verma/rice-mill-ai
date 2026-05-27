"use client";

import { WorkflowPipelinePremium } from "@/components/illustrations/premium/workflow-pipeline-premium";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { WORKFLOW } from "@/constants/landing";
import { motion, useReducedMotion } from "framer-motion";

export function Workflow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="workflow" className="section-padding section-tint section-shell scroll-mt-24 overflow-hidden">
      <Container>
        <SectionHeader
          badge={WORKFLOW.badge}
          title={WORKFLOW.title}
          description={WORKFLOW.description}
        />

        <FadeIn className="mt-10 hidden lg:block">
          <WorkflowPipelinePremium />
        </FadeIn>

        <div className="relative mt-14 hidden md:block">
          <div
            className="absolute left-[10%] right-[10%] top-[28px] h-0.5 bg-gradient-to-r from-[#E9D5FF] via-[#A78BFA] to-[#E9D5FF]"
            aria-hidden
          />
          <div className="grid grid-cols-5 gap-4">
            {WORKFLOW.steps.map((step, i) => (
              <FadeIn key={step.title} delay={0.08 * i}>
                <article className="surface-premium relative flex h-full flex-col items-center px-4 py-5 text-center">
                  <motion.div
                    animate={prefersReducedMotion ? undefined : { scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.4)]"
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="font-jakarta mt-5 text-[15px] font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-body mt-2 text-[13px] leading-relaxed">
                    {step.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="relative mt-14 md:hidden">
          <div className="absolute bottom-4 left-[27px] top-4 w-0.5 bg-gradient-to-b from-[#A78BFA] to-[#E9D5FF]" aria-hidden />
          <div className="space-y-8">
            {WORKFLOW.steps.map((step, i) => (
              <FadeIn key={step.title} delay={0.06 * i}>
                <article className="surface-premium relative flex gap-5 p-4">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-sm font-bold text-white shadow-md">
                    {step.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-jakarta text-base font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-body mt-1.5 text-[14px]">{step.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
