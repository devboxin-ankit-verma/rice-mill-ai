import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { PROBLEMS } from "@/constants/landing";
import { AlertTriangle } from "lucide-react";

export function Problems() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          badge={PROBLEMS.badge}
          title={PROBLEMS.title}
          description={PROBLEMS.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {PROBLEMS.items.map((item, i) => (
            <FadeIn key={item.title} delay={0.06 * i}>
              <article className="card-premium flex h-full gap-4 p-6 md:p-8">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500 ring-1 ring-red-100">
                  <AlertTriangle className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <h3 className="text-card-title font-jakarta text-lg">
                    {item.title}
                  </h3>
                  <p className="text-body mt-2 text-[15px]">{item.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
