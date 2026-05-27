"use client";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FINAL_CTA } from "@/constants/landing";
import { CTA } from "@/constants/navigation";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function CtaBannerSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pb-0 pt-0">
      <Container className="pb-16 md:pb-20">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-violet-600 to-purple-700 px-8 py-14 shadow-[0_28px_72px_-26px_rgba(124,58,237,0.5)] sm:px-14 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZG9kIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <h2 className="font-jakarta max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Ready to transform your rice mill?
              </h2>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={prefersReducedMotion ? undefined : { y: -2 }}>
                  <Link
                    href="#contact"
                    className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#7C3AED] shadow-lg transition-shadow hover:shadow-xl"
                  >
                    {FINAL_CTA.primary}
                  </Link>
                </motion.div>
                <Link
                  href={CTA.href}
                  className="inline-flex h-11 items-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {FINAL_CTA.secondary}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
