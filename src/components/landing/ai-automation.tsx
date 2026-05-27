"use client";

import { FeatureIcon } from "@/components/landing/feature-icons";
import { WorkflowPipelinePremium } from "@/components/illustrations/premium/workflow-pipeline-premium";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { AI_AUTOMATION } from "@/constants/landing";
import { motion, useReducedMotion } from "framer-motion";

export function AiAutomation() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="ai-automation" className="section-padding scroll-mt-24 overflow-hidden">
      <Container>
        <SectionHeader
          badge={AI_AUTOMATION.badge}
          title={AI_AUTOMATION.title}
          description={AI_AUTOMATION.description}
        />

        <FadeIn className="mt-12 hidden md:block">
          <WorkflowPipelinePremium className="mx-auto max-w-4xl" />
        </FadeIn>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {AI_AUTOMATION.nodes.map((node, i) => (
            <FadeIn key={node.title} delay={0.1 * i}>
              <motion.article
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                className="surface-premium relative flex h-full flex-col items-center p-5 text-center md:items-start md:p-6 md:text-left"
              >
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          boxShadow: [
                            "0 0 0 0 rgba(124,58,237,0)",
                            "0 0 0 8px rgba(124,58,237,0.08)",
                            "0 0 0 0 rgba(124,58,237,0)",
                          ],
                        }
                  }
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  className="mb-5"
                >
                  <FeatureIcon name={node.icon} className="h-14 w-14 rounded-2xl" />
                </motion.div>
                <h3 className="font-jakarta text-lg font-semibold text-text-primary">
                  {node.title}
                </h3>
                <p className="text-body mt-2 text-[14px] leading-relaxed">
                  {node.description}
                </p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
