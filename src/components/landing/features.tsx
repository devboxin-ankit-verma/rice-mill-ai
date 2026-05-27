"use client";

import { FeatureIcon } from "@/components/landing/feature-icons";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { FEATURES } from "@/constants/landing";
import { motion, useReducedMotion } from "framer-motion";

export function Features() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="features" className="section-padding scroll-mt-24">
      <Container>
        <SectionHeader
          badge={FEATURES.badge}
          title={FEATURES.title}
          description={FEATURES.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {FEATURES.items.map((item, i) => (
            <FadeIn key={item.title} delay={0.04 * i}>
              <motion.article
                whileHover={prefersReducedMotion ? undefined : { y: -5 }}
                className="card-gradient-border group flex h-full min-h-[240px] flex-col p-6 md:p-7"
              >
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="mb-2"
                >
                  <FeatureIcon name={item.icon} />
                </motion.div>
                <h3 className="text-card-title font-jakarta mt-4">
                  {item.title}
                </h3>
                <p className="text-body mt-3 flex-1 text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
