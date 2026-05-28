"use client";

import { BRAND, CTA, LOGIN, NAV_LINKS, type NavLink } from "@/constants/navigation";
import { BrandLogoMark } from "@/components/layout/brand-logo-mark";
import {
  hamburgerLine,
  mobileDrawer,
  mobileNavItem,
  mobileNavStagger,
  mobileOverlay,
  navbarFadeIn,
} from "@/lib/motion/variants";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

function BrandLogo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 rounded-lg"
      aria-label={`${BRAND.name} home`}
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-500/15 via-white to-purple-500/10 ring-1 ring-violet-500/20 shadow-[0_1px_2px_rgba(124,58,237,0.08)] transition-shadow duration-300 group-hover:shadow-[0_4px_16px_rgba(124,58,237,0.12)]">
        <BrandLogoMark className="h-6 w-6 drop-shadow-[0_8px_18px_rgba(124,58,237,0.25)]" title={`${BRAND.name} logo`} />
        <span className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-violet-400/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:from-violet-400/5 group-hover:to-purple-500/10 group-hover:opacity-100" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-jakarta text-[15px] font-bold tracking-[-0.02em] text-text-primary sm:text-base">
          MillFlow <span className="text-brand-gradient">AI</span>
        </span>
        <span className="mt-1 text-[11px] font-medium tracking-[-0.01em] text-[#6B7280]">
          by Developer Box AI
        </span>
      </span>
    </Link>
  );
}

function DesktopNavLink({ label, href }: NavLink) {
  return (
    <Link
      href={href}
      className="group relative px-3 py-2 text-[13.5px] font-medium tracking-[-0.01em] text-[#6B7280] transition-colors duration-300 hover:text-text-primary outline-none focus-visible:text-text-primary"
    >
      {label}
      <motion.span
        className="absolute bottom-1 left-3 right-3 h-px origin-left bg-linear-to-r from-violet-500/80 to-purple-500/80"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
    </Link>
  );
}

function BookDemoButton({
  fullWidth = false,
  onClick,
}: {
  fullWidth?: boolean;
  onClick?: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={fullWidth ? "w-full" : undefined}
    >
      <Link
        href={CTA.href}
        onClick={onClick}
        className={`group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-violet-600 via-violet-600 to-purple-600 px-5 text-[13.5px] font-semibold tracking-[-0.01em] text-white shadow-[0_4px_14px_rgba(124,58,237,0.35),0_1px_2px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(124,58,237,0.42),0_2px_4px_rgba(0,0,0,0.06)] outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 ${fullWidth ? "w-full" : ""}`}
      >
        <span
          className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <span className="relative">{CTA.label}</span>
      </Link>
    </motion.div>
  );
}

function MobileMenuButton({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 ring-1 ring-zinc-200/80 bg-white/90 transition-colors hover:bg-white hover:text-zinc-900 outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 lg:hidden"
      whileTap={{ scale: 0.96 }}
    >
      <span className="flex h-4 w-[18px] flex-col justify-between">
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            custom={index}
            variants={hamburgerLine(index)}
            animate={isOpen ? "open" : "closed"}
            className="block h-[1.5px] w-full rounded-full bg-zinc-800 origin-center"
          />
        ))}
      </span>
    </motion.button>
  );
}

function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            variants={mobileOverlay}
            initial="closed"
            animate="open"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-60 bg-zinc-900/25 lg:hidden"
          />
          <motion.aside
            variants={mobileDrawer}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-y-0 right-0 z-70 flex w-full max-w-[min(100%,340px)] flex-col border-l border-white/40 bg-white shadow-[-8px_0_40px_rgba(0,0,0,0.06)] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-[72px] items-center justify-between border-b border-zinc-200/60 px-5">
              <BrandLogo />
              <MobileMenuButton isOpen onToggle={onClose} />
            </div>

            <motion.nav
              variants={mobileNavStagger}
              initial="closed"
              animate="open"
              className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={mobileNavItem}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex min-h-[48px] items-center rounded-xl px-4 text-[15px] font-medium tracking-[-0.01em] text-zinc-700 transition-colors active:bg-violet-50/80 hover:bg-violet-50/50 hover:text-zinc-900"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <div className="flex flex-col gap-3 border-t border-zinc-200/60 p-5">
              <Link
                href={LOGIN.href}
                onClick={onClose}
                className="flex h-11 items-center justify-center rounded-full border border-[#E5E7EB] text-[15px] font-semibold text-[#374151] transition-colors hover:bg-[#F5F3FF]"
              >
                {LOGIN.label}
              </Link>
              <BookDemoButton fullWidth onClick={onClose} />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => handleScroll());
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);
  const toggleMobile = () => setIsMobileOpen((prev) => !prev);

  return (
    <>
      <motion.header
        variants={navbarFadeIn}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="visible"
        className="fixed inset-x-0 top-0 z-50"
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.82)"
              : "rgba(255, 255, 255, 0.55)",
            boxShadow: isScrolled
              ? "0 1px 0 rgba(0,0,0,0.03), 0 8px 32px -8px rgba(124, 58, 237, 0.08)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className=""
        >
          <div className="landing-container flex h-[74px] items-center justify-between gap-4">
            <div className="flex min-w-0 flex-1 items-center lg:flex-none">
              <BrandLogo />
            </div>

            <nav
              className="hidden flex-1 items-center justify-center lg:flex"
              aria-label="Primary"
            >
              <div className="flex items-center gap-0.5 rounded-full border border-white/60 bg-white/85 px-1.5 py-1">
                {NAV_LINKS.map((link) => (
                  <DesktopNavLink key={link.href} {...link} />
                ))}
              </div>
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <Link
                href={LOGIN.href}
                id="login"
                className="hidden h-10 items-center justify-center rounded-full px-4 text-[13.5px] font-semibold text-[#6B7280] transition-all duration-300 hover:bg-[#F5F3FF] hover:text-text-primary lg:inline-flex"
              >
                {LOGIN.label}
              </Link>
              <div className="hidden lg:block">
                <BookDemoButton />
              </div>
              <MobileMenuButton
                isOpen={isMobileOpen}
                onToggle={toggleMobile}
              />
            </div>
          </div>
        </motion.div>
      </motion.header>

      <MobileDrawer isOpen={isMobileOpen} onClose={closeMobile} />
    </>
  );
}
