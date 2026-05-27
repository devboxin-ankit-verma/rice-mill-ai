"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { useMemo, useState } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-brand-gradient text-white shadow-[0_4px_14px_rgba(124,58,237,0.3)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-[#111827] border border-[#E5E7EB] hover:border-violet-300 hover:bg-[#FAF7FF] hover:-translate-y-0.5 shadow-sm",
  ghost:
    "bg-transparent text-[#6B7280] hover:text-[#111827] hover:bg-[#F5F3FF]",
};

const base =
  "inline-flex h-11 items-center justify-center rounded-full px-6 text-[15px] font-semibold tracking-[-0.01em] transition-all duration-300 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2";

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const prefersReducedMotion = useReducedMotion();

  const magnetic = variant === "primary" && !prefersReducedMotion;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 250, damping: 22, mass: 0.25 });
  const springY = useSpring(my, { stiffness: 250, damping: 22, mass: 0.25 });

  const [ripple, setRipple] = useState<
    { key: number; x: number; y: number; r: number } | null
  >(null);
  const rippleKey = useMemo(() => (ripple ? ripple.key : 0), [ripple]);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    if (!magnetic) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    // small, premium-feeling offsets only
    mx.set(dx * 8);
    my.set(dy * 8);
  }

  function handlePointerLeave() {
    if (!magnetic) return;
    mx.set(0);
    my.set(0);
  }

  function handlePointerDown(e: React.PointerEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const r = Math.max(rect.width, rect.height) * 0.9;
    setRipple({ key: Date.now(), x, y, r });
  }

  if (href) {
    return (
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative inline-flex"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
      >
        <Link href={href} className={classes} aria-label={typeof children === "string" ? children : undefined}>
          {children}
        </Link>
        {ripple && (
          <motion.span
            key={rippleKey}
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-white/35"
            style={{
              width: ripple.r,
              height: ripple.r,
              left: ripple.x - ripple.r / 2,
              top: ripple.y - ripple.r / 2,
              transform: "translateZ(0)",
            }}
            initial={{ opacity: 0, scale: 0.25 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
          </motion.span>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="relative inline-flex"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
    >
      <button type={type} onClick={onClick} className={classes}>
        {children}
      </button>
      {ripple && (
        <motion.span
          key={rippleKey}
          aria-hidden
          className="pointer-events-none absolute rounded-full bg-white/35"
          style={{
            width: ripple.r,
            height: ripple.r,
            left: ripple.x - ripple.r / 2,
            top: ripple.y - ripple.r / 2,
            transform: "translateZ(0)",
          }}
          initial={{ opacity: 0, scale: 0.25 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
        </motion.span>
      )}
    </motion.div>
  );
}
