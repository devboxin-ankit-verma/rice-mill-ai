"use client";

import { FeatureIcon } from "@/components/landing/feature-icons";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { WHY_CHOOSE } from "@/constants/landing";
import { motion, useReducedMotion } from "framer-motion";

export function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          badge={WHY_CHOOSE.badge}
          title={WHY_CHOOSE.title}
          description={WHY_CHOOSE.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {WHY_CHOOSE.items.map((item, i) => (
            <FadeIn key={item.title} delay={0.06 * i}>
              <motion.article
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="card-premium flex h-full flex-col gap-5 p-6 sm:flex-row sm:items-start md:p-8"
              >
                <FeatureIcon name={item.icon} className="h-12 w-12 shrink-0 rounded-2xl" />
                <div className="min-w-0">
                  <h3 className="text-card-title font-jakarta text-lg">
                    {item.title}
                  </h3>
                  <p className="text-body mt-2 text-[15px]">{item.description}</p>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
