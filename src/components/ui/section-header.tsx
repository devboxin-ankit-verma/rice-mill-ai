import { FadeIn } from "@/components/ui/fade-in";
import { WordReveal } from "@/components/ui/word-reveal";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isLeft = align === "left";
  // Mobile-first: always center on small screens.
  // If a section wants left alignment, apply it from lg+ only.
  const alignClass = isLeft
    ? "mx-auto items-center text-center lg:mx-0 lg:items-start lg:text-left"
    : "mx-auto items-center text-center";

  const badgeClass = isLeft ? "mx-auto lg:mx-0" : "mx-auto";
  const descClass = isLeft ? "mx-auto lg:mx-0" : "mx-auto";

  return (
    <FadeIn className={`section-header flex w-full max-w-3xl flex-col gap-4 ${alignClass}`}>
      {badge && (
        <p
          className={`text-label font-jakarta w-fit rounded-full border border-brand-200 bg-white/90 px-3.5 py-1.5 text-brand-600 ${badgeClass}`}
        >
          {badge}
        </p>
      )}
      <h2 className="font-jakarta text-section-heading w-full text-text-primary">
        <WordReveal text={title} />
      </h2>
      {description && (
        <p className={`text-body mt-1 max-w-2xl leading-relaxed ${descClass}`}>{description}</p>
      )}
    </FadeIn>
  );
}
