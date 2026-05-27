"use client";

import { DashboardAnalyticsMockup } from "@/components/mockups/dashboard-analytics";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { AI_FEATURE } from "@/constants/landing";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function AiFeatureSection() {
  return (
    <section id="solutions" className="section-padding scroll-mt-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeIn>
            <h2 className="font-jakarta text-section-heading text-balance text-text-primary">
              {AI_FEATURE.title}
            </h2>
            <p className="text-body mt-5 max-w-xl leading-relaxed">
              {AI_FEATURE.description}
            </p>
          </FadeIn>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-4"
          >
            {AI_FEATURE.bullets.map((bullet) => (
              <motion.li
                key={bullet}
                variants={staggerItem}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EDE9FE] text-[#7C3AED]">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="text-[15px] text-[#374151]">{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <DashboardAnalyticsMockup />
      </Container>
    </section>
  );
}
