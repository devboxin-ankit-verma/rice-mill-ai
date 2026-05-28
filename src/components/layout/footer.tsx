"use client";

import { Container } from "@/components/ui/container";
import { FOOTER } from "@/constants/landing";
import { BRAND } from "@/constants/navigation";
import Link from "next/link";
import { BrandLogoMark } from "@/components/layout/brand-logo-mark";
import { Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";

function FacebookIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={props.className} fill="currentColor">
      <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.7v1.9H7.2v3.2h2.3V22h4z" />
    </svg>
  );
}

function InstagramIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={props.className} fill="currentColor">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <path d="M17.6 6.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
    </svg>
  );
}

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

  const columns = [
    FOOTER.columns.find((c) => c.title === "Company"),
    FOOTER.columns.find((c) => c.title === "Product"),
    FOOTER.columns.find((c) => c.title === "Solutions"),
    FOOTER.columns.find((c) => c.title === "Legal"),
  ].filter(Boolean) as unknown as Array<(typeof FOOTER.columns)[number]>;

  function openSharePopup() {
    const url = typeof window !== "undefined" ? window.location.origin : "https://developerbox.co.in";
    const w = 980;
    const h = 640;
    const y = window.screenY + Math.max(0, (window.outerHeight - h) / 2);
    const x = window.screenX + Math.max(0, (window.outerWidth - w) / 2);
    window.open(
      url,
      "millflow_share",
      `popup=yes,width=${w},height=${h},left=${Math.floor(x)},top=${Math.floor(y)}`,
    );
  }

  return (
    <footer className="border-t border-[#E5E7EB] bg-[#FAF7FF] pt-18 pb-8">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="lg:max-w-[420px]">
            <Link
              href="/#top"
              className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 rounded-lg"
              aria-label={`${BRAND.name} home`}
            >
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-500/15 via-white to-purple-500/10 ring-1 ring-violet-500/20 shadow-[0_1px_2px_rgba(124,58,237,0.08)] transition-shadow duration-300 group-hover:shadow-[0_4px_16px_rgba(124,58,237,0.12)]">
                <BrandLogoMark
                  className="h-6 w-6 drop-shadow-[0_8px_18px_rgba(124,58,237,0.25)]"
                  title={`${BRAND.name} logo`}
                />
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-violet-400/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:from-violet-400/5 group-hover:to-purple-500/10 group-hover:opacity-100" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-jakarta text-[15px] font-bold tracking-[-0.02em] text-text-primary sm:text-base">
                  MillFlow <span className="text-brand-gradient">AI</span>
                </span>
                <span className="mt-1 text-[11px] font-medium tracking-[-0.01em] text-[#6B7280]">
                  by Developerbox Ai Factory
                </span>
              </span>
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
              <button
                type="button"
                aria-label="Share MillFlow AI"
                onClick={openSharePopup}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/30 hover:text-[#7C3AED]"
              >
                <Share2 className="h-4 w-4" />
              </button>
              <a
                href="https://www.facebook.com/devboxin"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/30 hover:text-[#7C3AED]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/devboxin/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/30 hover:text-[#7C3AED]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {columns.map((col) => (
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
              Developerbox Ai Factory
            </a>
          </p>
          <p className="text-center text-[13px] font-medium text-[#9CA3AF] sm:text-right">
            {FOOTER.tagline}
          </p>
        </div>
      </Container>

      <a
        href="https://wa.me/9111333253"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp: 9111333253"
        className="group fixed bottom-5 right-5 z-90 inline-flex items-center gap-2 rounded-full bg-transparent px-3 py-3 text-[#25D366] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.55)] ring-1 ring-[#E5E7EB] transition-transform duration-300 hover:-translate-y-0.5 hover:ring-violet-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center">
          <svg viewBox="0 0 32 32" aria-hidden className="h-6 w-6 fill-current">
            <path d="M19.11 17.06c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13-.18.26-.69.85-.84 1.03-.16.18-.31.2-.57.07-.26-.13-1.09-.4-2.08-1.28-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.16.18-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.45-.83-1.99-.22-.53-.44-.46-.6-.46h-.51c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.19 0 1.29.94 2.54 1.07 2.72.13.18 1.86 2.84 4.5 3.98.63.27 1.12.43 1.51.55.63.2 1.2.17 1.65.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.16-1.24-.07-.11-.24-.18-.5-.31z" />
            <path d="M16.03 3C9.39 3 4 8.28 4 14.79c0 2.27.67 4.39 1.82 6.19L4 29l8.27-1.74c1.73.94 3.73 1.48 5.86 1.48 6.64 0 12.03-5.28 12.03-11.79C30.16 8.28 22.67 3 16.03 3zm0 23.57c-2.03 0-3.91-.55-5.51-1.5l-.4-.23-4.91 1.03 1.04-4.68-.26-.41c-1.06-1.67-1.67-3.63-1.67-5.69 0-5.3 4.47-9.61 9.71-9.61 5.24 0 10.45 4.31 10.45 9.61 0 5.3-5.21 9.61-10.45 9.61z" />
          </svg>
        </span>
        <span className="hidden text-[13px] font-semibold tracking-wide text-text-primary sm:inline">
          WhatsApp
        </span>
      </a>
    </footer>
  );
}
