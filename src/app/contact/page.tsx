import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px] pb-18">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">Contact MillFlow AI</h1>
        <p className="text-body mt-6 max-w-2xl">
          Looking to automate procurement, production, inventory, GST billing, or dispatch? Share your requirements and
          we’ll help you plan the fastest rollout for your mill.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_60px_-40px_rgba(17,24,39,0.22)]">
            <h2 className="font-jakarta text-xl font-semibold text-text-primary">Book a demo</h2>
            <p className="mt-2 text-[14px] text-[#6B7280]">
              Use the demo form on the home page so we can capture your details in one place.
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_18px_40px_-24px_rgba(124,58,237,0.65)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Go to demo form
            </Link>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_60px_-40px_rgba(17,24,39,0.22)]">
            <h2 className="font-jakarta text-xl font-semibold text-text-primary">What we can help with</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Gate entry + weighbridge reconciliation</li>
              <li>Batch-based inventory across godowns</li>
              <li>Production KPIs, yield ratios, and shift output</li>
              <li>GST invoicing, challans, and audit-ready reports</li>
              <li>Role-based access for owners and floor teams</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

