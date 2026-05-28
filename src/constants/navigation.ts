export type NavLink = {
  label: string;
  href: string;
};

export const BRAND = {
  name: "MillFlow AI",
  tagline: "AI-Powered Rice Mill Management",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const CTA = {
  label: "Book Demo",
  href: "#contact",
} as const;

export const LOGIN = {
  label: "Login",
  href: "#contact",
} as const;
