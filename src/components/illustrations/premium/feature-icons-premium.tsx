"use client";

import type { ReactNode } from "react";
import { PremiumDefs } from "./premium-defs";

export type FeatureIconVariant =
  | "inventory"
  | "billing"
  | "analytics"
  | "production"
  | "employees"
  | "reports"
  | "prediction"
  | "cloud"
  | "procurement"
  | "gate"
  | "speed"
  | "security"
  | "compliance"
  | "support"
  | "alerts"
  | "recommend"
  | "monitor";

function IconSvg({ children, pid }: { children: ReactNode; pid: string }) {
  return (
    <svg viewBox="0 0 48 48" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <PremiumDefs id={pid} />
      <rect width="48" height="48" rx="12" fill={`url(#${pid}-soft)`} />
      {children}
    </svg>
  );
}

function InventoryIcon() {
  const p = "fi-inv";
  return (
    <IconSvg pid={p}>
      <rect x="10" y="14" width="28" height="22" rx="4" fill="#FFFFFF" stroke="#A78BFA" strokeWidth="1.5" />
      <path d="M14 20 H34 M14 26 H30 M14 32 H26" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="34" cy="30" r="5" fill={`url(#${p}-brand)`} opacity="0.85" />
    </IconSvg>
  );
}

function BillingIcon() {
  const p = "fi-bill";
  return (
    <IconSvg pid={p}>
      <rect x="12" y="10" width="24" height="30" rx="3" fill="#FFFFFF" stroke="#A78BFA" strokeWidth="1.5" />
      <path d="M16 18 H28 M16 24 H32 M16 30 H24" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 32 L34 36 L30 40" stroke="#10B981" strokeWidth="2" fill="none" />
    </IconSvg>
  );
}

function AnalyticsIcon() {
  const p = "fi-ana";
  return (
    <IconSvg pid={p}>
      <polyline
        points="10,34 18,26 24,30 32,18 38,22"
        fill="none"
        stroke={`url(#${p}-brand)`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="38" cy="22" r="3" fill="#7C3AED" />
      <rect x="10" y="10" width="12" height="8" rx="2" fill="#EDE9FE" />
    </IconSvg>
  );
}

function ProductionIcon() {
  const p = "fi-prod";
  return (
    <IconSvg pid={p}>
      <path d="M12 34 L20 18 L28 28 L36 14 L38 34 Z" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="1.5" />
      <circle cx="24" cy="12" r="4" fill={`url(#${p}-brand)`} />
    </IconSvg>
  );
}

function EmployeesIcon() {
  const p = "fi-emp";
  return (
    <IconSvg pid={p}>
      <circle cx="18" cy="18" r="5" fill="#A78BFA" />
      <circle cx="30" cy="18" r="5" fill="#8B5CF6" />
      <path d="M10 34 C12 28 16 26 18 26 C20 26 24 28 26 34" fill="#EDE9FE" />
      <path d="M22 34 C24 28 28 26 30 26 C32 26 36 28 38 34" fill="#EDE9FE" />
    </IconSvg>
  );
}

function ReportsIcon() {
  const p = "fi-rep";
  return (
    <IconSvg pid={p}>
      <rect x="12" y="10" width="24" height="28" rx="3" fill="#FFFFFF" stroke="#A78BFA" strokeWidth="1.5" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="16" y={16 + i * 7} width={16 - i * 2} height="4" rx="2" fill="#7C3AED" opacity={0.5 + i * 0.15} />
      ))}
    </IconSvg>
  );
}

function PredictionIcon() {
  const p = "fi-pred";
  return (
    <IconSvg pid={p}>
      <circle cx="24" cy="24" r="14" fill="#F5F3FF" stroke="#A78BFA" strokeWidth="1.5" />
      <path d="M24 14 V24 L30 28" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="14" r="3" fill={`url(#${p}-brand)`} />
    </IconSvg>
  );
}

function CloudIcon() {
  const p = "fi-cloud";
  return (
    <IconSvg pid={p}>
      <path
        d="M14 30 C10 30 8 26 12 24 C10 18 18 16 22 20 C24 16 34 16 36 22 C40 22 42 28 36 30 Z"
        fill="#FFFFFF"
        stroke="#8B5CF6"
        strokeWidth="1.5"
      />
      <path d="M24 30 V36 M20 33 L24 37 L28 33" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
    </IconSvg>
  );
}

function GenericMillIcon() {
  const p = "fi-gen";
  return (
    <IconSvg pid={p}>
      <path d="M14 32 L24 16 L34 32 Z" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
      <rect x="18" y="28" width="12" height="6" rx="1" fill={`url(#${p}-brand)`} opacity="0.7" />
    </IconSvg>
  );
}

const ICON_MAP: Record<string, () => ReactNode> = {
  inventory: InventoryIcon,
  billing: BillingIcon,
  analytics: AnalyticsIcon,
  production: ProductionIcon,
  employees: EmployeesIcon,
  reports: ReportsIcon,
  prediction: PredictionIcon,
  cloud: CloudIcon,
  procurement: InventoryIcon,
  gate: ProductionIcon,
  speed: AnalyticsIcon,
  security: BillingIcon,
  compliance: ReportsIcon,
  support: EmployeesIcon,
  alerts: PredictionIcon,
  recommend: AnalyticsIcon,
  monitor: ProductionIcon,
};

export function FeatureIconPremium({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICON_MAP[name] ?? GenericMillIcon;
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-[#7C3AED]/12 transition-all duration-300 group-hover:ring-[#7C3AED]/25 ${className}`}
    >
      <Icon />
    </span>
  );
}
