import Link from "next/link";

import { Container } from "@/components/ui/container";

const solutions = [
  {
    title: "Government mills",
    description:
      "Compliance-first workflows for procurement, weighbridge checks, dispatch control, and audit-ready reporting.",
    href: "/solutions/government-mills",
  },
  {
    title: "Private mills",
    description:
      "Speed and visibility for high-throughput operations — live inventory, production KPIs, billing, and analytics.",
    href: "/solutions/private-mills",
  },
  {
    title: "Aarth management",
    description:
      "Broker/commission tracking, settlement support, and transparent reconciliation across procurement and sales.",
    href: "/solutions/aarth-management",
  },
] as const;

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px] pb-18">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">Solutions</h1>
        <p className="text-body mt-6 max-w-2xl">
          MillFlow AI adapts to how your mill actually works — from mandi procurement to packaging, dispatch, and
          reporting.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {solutions.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_60px_-40px_rgba(17,24,39,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <h2 className="font-jakarta text-lg font-semibold text-text-primary">{item.title}</h2>
              <p className="mt-2 text-[14px] text-[#6B7280]">{item.description}</p>
              <span className="mt-4 inline-flex text-[13px] font-semibold text-[#7C3AED]">Learn more</span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

