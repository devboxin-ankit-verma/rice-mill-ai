import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { COMPARISON } from "@/constants/landing";
import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <section className="section-padding section-light section-shell">
      <Container>
        <SectionHeader
          badge={COMPARISON.badge}
          title={COMPARISON.title}
          description={COMPARISON.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeIn>
            <article className="card-premium h-full p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 ring-1 ring-red-100">
                  <X className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="text-card-title font-jakarta text-lg font-bold">
                  Traditional System
                </h3>
              </div>
              <ul className="space-y-4">
                {COMPARISON.traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" strokeWidth={2} aria-hidden />
                    <span className="text-[15px] text-[#6B7280]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="relative h-full overflow-hidden rounded-2xl border-2 border-[#7C3AED]/25 bg-white p-6 shadow-[0_24px_64px_-20px_rgba(124,58,237,0.26)] md:p-8">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.06),transparent_60%)]"
                aria-hidden
              />
              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#7C3AED] ring-1 ring-[#7C3AED]/20">
                    <Check className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="text-card-title font-jakarta text-lg font-bold">
                    RiceMill AI
                  </h3>
                  <span className="ml-auto rounded-full bg-brand-gradient px-3 py-0.5 text-[11px] font-bold text-white">
                    Recommended
                  </span>
                </div>
                <ul className="space-y-4">
                  {COMPARISON.modern.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white">
                        <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                      </span>
                      <span className="text-[15px] font-medium text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
