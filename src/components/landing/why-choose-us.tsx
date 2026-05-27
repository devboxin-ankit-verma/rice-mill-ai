import { FeatureIcon } from "@/components/landing/feature-icons";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { WHY_CHOOSE } from "@/constants/landing";

export function WhyChooseUs() {
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
              <article className="card-premium flex h-full gap-5 p-6 md:p-8">
                <FeatureIcon name={item.icon} className="h-12 w-12 rounded-2xl" />
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
