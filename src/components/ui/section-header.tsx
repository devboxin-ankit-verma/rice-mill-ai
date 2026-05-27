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
  const alignClass =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <FadeIn className={`section-header flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {badge && (
        <p className="text-label font-jakarta w-fit rounded-full border border-brand-200 bg-white/90 px-3.5 py-1.5 text-brand-600">
          {badge}
        </p>
      )}
      <h2 className="font-jakarta text-section-heading w-full text-text-primary">
        <WordReveal text={title} />
      </h2>
      {description && (
        <p className="text-body mt-1 max-w-[42rem] leading-relaxed">{description}</p>
      )}
    </FadeIn>
  );
}
