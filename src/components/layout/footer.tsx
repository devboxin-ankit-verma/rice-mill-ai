import { Container } from "@/components/ui/container";
import { FOOTER } from "@/constants/landing";
import { BRAND } from "@/constants/navigation";
import Link from "next/link";
import { Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";

const socialIcons = {
  Twitter: Share2,
  LinkedIn: Globe,
  YouTube: MessageCircle,
} as const;

export function Footer() {
  const contactItems = [
    FOOTER.contact.email
      ? {
          key: "email",
          icon: Mail,
          value: FOOTER.contact.email,
        }
      : null,
    FOOTER.contact.phone
      ? {
          key: "phone",
          icon: Phone,
          value: FOOTER.contact.phone,
        }
      : null,
    FOOTER.contact.address
      ? {
          key: "address",
          icon: MapPin,
          value: FOOTER.contact.address,
        }
      : null,
  ].filter(Boolean) as Array<{ key: string; icon: typeof Mail; value: string }>;

  return (
    <footer className="border-t border-[#E5E7EB] bg-[#FAF7FF] pt-18 pb-8">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="font-jakarta text-lg font-bold text-text-primary">
              {BRAND.name}
            </Link>
            <p className="text-body mt-3 max-w-sm text-[15px]">{FOOTER.description}</p>
            {contactItems.length > 0 && (
              <ul className="mt-6 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.key} className="flex items-center gap-2.5 text-[14px] text-[#6B7280]">
                      <Icon className="h-4 w-4 text-[#7C3AED]" aria-hidden />
                      {item.value}
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="mt-6 flex gap-3">
              {FOOTER.social.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons] ?? Share2;
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/30 hover:text-[#7C3AED]"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-jakarta text-sm font-semibold text-text-primary">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#6B7280] transition-colors duration-300 hover:text-[#7C3AED]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E5E7EB] pt-8 sm:flex-row">
          <p className="text-[13px] text-[#6B7280]">
            © 2026 <span className="font-medium text-text-primary">MillFlow AI</span> — Powered by{" "}
            <a
              href="https://developerbox.co.in"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#7C3AED] hover:underline"
            >
              Developer Box AI
            </a>
          </p>
          <p className="text-center text-[13px] font-medium text-[#9CA3AF] sm:text-right">
            {FOOTER.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
