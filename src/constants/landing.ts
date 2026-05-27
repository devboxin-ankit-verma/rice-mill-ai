export const HERO = {
  badge: "AI-Powered Mill Operations",
  title: "Run your rice mill smarter",
  description:
    "Automate inventory, production, analytics, billing, and operations with a modern AI-driven ERP platform built for rice mills.",
  primaryCta: "Start Free Trial",
  secondaryCta: "Watch Demo",
  trustBadges: ["GST compliant", "Bank-grade security", "24/7 AI monitoring"],
} as const;

export const HERO_STATS = [
  { value: "500+", label: "Mills onboarded" },
  { value: "98%", label: "Efficiency gain" },
  { value: "40%", label: "Less manual work" },
] as const;

export const STATS_STRIP = [
  { value: 500, suffix: "+", label: "Mills" },
  { value: 98, suffix: "%", label: "Efficiency" },
  { value: 24, suffix: "/7", label: "AI Monitoring" },
  { value: 40, suffix: "%", label: "Reduced Manual Work" },
] as const;

export const TRUSTED_LOGOS = [
  "Punjab Grains Co.",
  "Haryana Mills",
  "Odisha Rice Hub",
  "CG Agro",
  "Bharat Paddy",
  "North India Mills",
] as const;

export const FEATURES = {
  badge: "Core capabilities",
  title: "Everything to automate your mill",
  description:
    "Enterprise-grade modules designed for government mills, private units, and export-focused operations.",
  items: [
    {
      title: "Inventory Management",
      description:
        "Real-time stock across godowns with alerts, batch tracking, and grade classification.",
      icon: "inventory",
    },
    {
      title: "Smart Billing",
      description:
        "GST-compliant invoicing, challans, and automated reconciliation in one flow.",
      icon: "billing",
    },
    {
      title: "AI Analytics",
      description:
        "Predictive yield analysis, price forecasting, and anomaly detection for smarter decisions.",
      icon: "analytics",
    },
    {
      title: "Production Tracking",
      description:
        "Monitor shift output, yield ratios, machine uptime, and production KPIs live.",
      icon: "production",
    },
    {
      title: "Employee Management",
      description:
        "Shift scheduling, attendance, payroll integration, and role-based permissions.",
      icon: "employees",
    },
    {
      title: "Real-Time Reports",
      description:
        "Executive dashboards, custom exports, and audit-ready compliance reports.",
      icon: "reports",
    },
    {
      title: "Stock Prediction",
      description:
        "AI-driven demand forecasting and procurement timing recommendations.",
      icon: "prediction",
    },
    {
      title: "Cloud Sync",
      description:
        "Secure multi-device sync with offline mode for low-connectivity mill floors.",
      icon: "cloud",
    },
  ],
} as const;

export const WORKFLOW = {
  badge: "End-to-end workflow",
  title: "From procurement to analytics in one flow",
  description:
    "Every stage of your mill operation linked — fewer handoffs, fewer errors, faster decisions.",
  steps: [
    {
      step: "01",
      title: "Procurement",
      description:
        "Track paddy intake, mandi arrivals, broker commissions, and supplier payments with weighbridge sync.",
    },
    {
      step: "02",
      title: "Production",
      description:
        "Monitor shift output, yield ratios, machine uptime, and production KPIs in real time.",
    },
    {
      step: "03",
      title: "Packaging",
      description:
        "Batch labeling, quality checks, moisture tracking, and grade classification at every stage.",
    },
    {
      step: "04",
      title: "Sales",
      description:
        "Delivery challans, transporter freight, and order management from one unified system.",
    },
    {
      step: "05",
      title: "Analytics",
      description:
        "AI-powered insights on revenue, yield trends, and operational performance.",
    },
  ],
} as const;

export const DASHBOARD = {
  badge: "Dashboard preview",
  title: "See your entire mill at a glance",
  description:
    "Real-time visibility into procurement, production, inventory, and revenue — for owners and floor managers.",
  highlights: [
    "Daily production vs. target",
    "Stock value by warehouse",
    "Outstanding receivables",
    "Milling yield trends",
  ],
} as const;

/** @deprecated Use AI_AUTOMATION — kept for legacy components */
export const AI_FEATURE = {
  title: "Make intelligent decisions every day",
  description:
    "Our AI engine analyzes production patterns, market rates, and historical data to surface actionable insights.",
  bullets: [
    "Predictive maintenance alerts for critical machinery",
    "Yield optimization across milling lines and shifts",
    "Market price forecasting for procurement timing",
    "Weight deviation detection between mandi and mill",
  ],
} as const;

export const FINANCE_FEATURE = {
  title: "Gain full financial visibility & control",
  description:
    "See revenue, expenses, and cash flow in one unified view.",
  tabs: ["Revenue", "Expenses", "Profitability", "Cash Flow"] as const,
} as const;

export const PROBLEMS = {
  badge: "Operational challenges",
  title: "Running a rice mill shouldn't feel chaotic",
  description:
    "Spreadsheets and disconnected tools create blind spots that cost time, money, and trust.",
  items: [
    {
      title: "Manual weighbridge errors",
      description: "Weight mismatches lead to disputes and revenue leakage.",
    },
    {
      title: "Inventory blind spots",
      description: "Stock across warehouses is hard to track in real time.",
    },
    {
      title: "Delayed GST billing",
      description: "Invoices and compliance reports pile up — slowing dispatch.",
    },
    {
      title: "Fragmented workflows",
      description: "Teams work in silos with no single source of truth.",
    },
  ],
} as const;

export const AI_AUTOMATION = {
  badge: "AI automation",
  title: "Intelligent automation for every shift",
  description:
    "Our AI engine monitors production patterns, market rates, and historical data to surface actionable insights automatically.",
  nodes: [
    {
      title: "AI Prediction",
      description: "Forecast yield, demand, and procurement windows with machine learning models.",
      icon: "prediction",
    },
    {
      title: "Automated Alerts",
      description: "Instant notifications for stock lows, weight deviations, and machine anomalies.",
      icon: "alerts",
    },
    {
      title: "Smart Recommendations",
      description: "Actionable suggestions for pricing, scheduling, and resource allocation.",
      icon: "recommend",
    },
    {
      title: "Machine Monitoring",
      description: "Predictive maintenance alerts and uptime tracking for critical machinery.",
      icon: "monitor",
    },
  ],
} as const;

export const ANALYTICS = {
  badge: "Smart analytics",
  title: "Advanced insights that drive profit",
  description:
    "KPI dashboards, AI-generated reports, and performance metrics — all in one glass-clear view.",
  kpis: [
    { label: "Revenue Growth", value: "+32%", trend: "up" },
    { label: "Yield Rate", value: "68.4%", trend: "up" },
    { label: "Cost Reduction", value: "18%", trend: "up" },
    { label: "Dispatch Speed", value: "2.4x", trend: "up" },
  ],
} as const;

export const PLATFORM = {
  badge: "Mobile & cloud",
  title: "Monitor every mill from anywhere",
  description:
    "Field teams use the mobile app for live stock and alerts. Operations leaders sync every site through cloud AI monitoring.",
  mobile: {
    badge: "Mobile app",
    title: "Rice stock & alerts on the go",
    description:
      "Gate passes, approvals, live production KPIs, and AI low-stock alerts — optimized for mill floors and low connectivity.",
  },
  cloud: {
    badge: "Cloud monitoring",
    title: "Connected mills, one control plane",
    description:
      "IoT-ready sync across multiple units with real-time dashboards, AI anomaly detection, and unified ERP visibility.",
  },
} as const;

export const COMPARISON = {
  badge: "Why choose us",
  title: "Traditional systems vs MillFlow AI",
  description:
    "See how modern AI-powered automation transforms every aspect of mill operations.",
  traditional: [
    "Manual spreadsheets & paper registers",
    "Delayed GST billing & compliance gaps",
    "Inventory blind spots across godowns",
    "Fragmented teams with no single source of truth",
    "Reactive decisions after problems occur",
  ],
  modern: [
    "Unified cloud ERP with real-time sync",
    "Automated GST invoicing & audit-ready records",
    "Live stock tracking with AI predictions",
    "Connected workflows from gate to dispatch",
    "Proactive AI alerts & smart recommendations",
  ],
} as const;

export const WHY_CHOOSE = {
  badge: "Built for trust",
  title: "Enterprise-grade reliability you can depend on",
  description:
    "Industrial-grade security with modern SaaS polish — so your team actually enjoys using it.",
  items: [
    {
      title: "Bank-grade security",
      description:
        "256-bit encryption, 2FA, and isolated tenant data on secure cloud servers.",
      icon: "security",
    },
    {
      title: "99.9% Uptime",
      description:
        "Redundant infrastructure with primary and secondary backups for zero data loss.",
      icon: "compliance",
    },
    {
      title: "24/7 Support",
      description:
        "Dedicated onboarding and WhatsApp support for mills across India.",
      icon: "support",
    },
    {
      title: "Regular Updates",
      description:
        "GST rule updates, new features, and compliance patches delivered automatically.",
      icon: "speed",
    },
  ],
} as const;

export const PRICING = {
  badge: "Pricing",
  title: "Plans that scale with your mill",
  description:
    "Start free, upgrade as you grow. No hidden fees — transparent pricing for every operation size.",
  plans: [
    {
      name: "Starter",
      description: "For single-unit mills getting started with digitization.",
      monthlyPrice: 4999,
      yearlyPrice: 3999,
      features: [
        "Up to 2 godowns",
        "Core inventory & billing",
        "Mobile app access",
        "Email support",
        "GST invoicing",
      ],
      cta: "Start free trial",
      popular: false,
    },
    {
      name: "Business",
      description: "For growing mills with multiple locations and teams.",
      monthlyPrice: 12999,
      yearlyPrice: 9999,
      features: [
        "Unlimited godowns",
        "AI analytics & predictions",
        "Production tracking",
        "Priority support",
        "Multi-user roles",
        "Custom reports",
      ],
      cta: "Start free trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large groups, government mills, and export operations.",
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        "Multi-mill management",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise option",
        "SLA guarantee",
        "White-label reports",
      ],
      cta: "Contact sales",
      popular: false,
    },
  ],
} as const;

export const TESTIMONIALS = {
  badge: "Customer stories",
  title: "Trusted by rice mill owners worldwide",
  items: [
    {
      quote:
        "RiceMill AI has streamlined our entire operation — from gate entry to GST billing. We cut manual work by half within the first quarter.",
      name: "Rajesh Kumar",
      role: "Owner, Punjab Grains Co.",
      rating: 5,
      initials: "RK",
    },
    {
      quote:
        "Inventory across three godowns is finally accurate. The dashboard gives me confidence before every procurement decision.",
      name: "Ranjeet Kumar",
      role: "Director, Haryana Mills",
      rating: 5,
      initials: "RK",
    },
    {
      quote:
        "GST compliance used to keep us up at night. Now invoices, challans, and returns are handled in one system.",
      name: "Raghav Singh",
      role: "Operations Head, Ludhiana",
      rating: 5,
      initials: "RS",
    },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    question: "Can I use this software on mobile?",
    answer:
      "Yes. Our mobile app lets you manage gate passes, stock, approvals, and Aarth operations on the go, with offline sync for low-connectivity areas.",
  },
  {
    question: "Is my data protected?",
    answer:
      "Your data is stored on secure cloud servers with two-factor authentication, role-based access, and encrypted backups.",
  },
  {
    question: "Can I add multiple companies or mill locations?",
    answer:
      "Yes. Depending on your plan, you can manage multiple companies and mill sites from one account with consolidated reporting.",
  },
  {
    question: "Does it support GST-compliant invoicing?",
    answer:
      "Absolutely. Auto GST calculation, audit-ready records, and export-ready tax reports are built in.",
  },
  {
    question: "Can I use the software offline?",
    answer:
      "Yes. Our offline module supports core operations. Data syncs automatically when you're back online.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most mills go live within 2–4 weeks with guided onboarding, data migration, and dedicated training support.",
  },
] as const;

export const FINAL_CTA = {
  title: "Transform Your Rice Mill with AI Automation",
  description:
    "Join hundreds of millers running smarter with AI-powered insights, automated billing, and real-time control.",
  primary: "Start Free Trial",
  secondary: "Book a Demo",
} as const;

export const FOOTER = {
  description:
    "AI-powered ERP for rice mill procurement, production, inventory, and GST billing — built for modern Indian millers.",
  tagline: "MillFlow AI — Built for modern rice mill automation.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Workflow", href: "#workflow" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Government Mills", href: "#solutions" },
        { label: "Private Mills", href: "#solutions" },
        { label: "Aarth Management", href: "#workflow" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "#contact" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
      ],
    },
  ],
  social: [
    { label: "Twitter", href: "https://developerbox.co.in" },
    { label: "LinkedIn", href: "https://developerbox.co.in" },
    { label: "YouTube", href: "https://developerbox.co.in" },
  ],
  contact: {
    email: "",
    phone: "",
    address: "",
  },
  copyright: "",
} as const;
