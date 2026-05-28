import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function GovernmentMillsSolutionPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px] pb-18">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">Government mills</h1>
        <p className="text-body mt-6 max-w-2xl">
          MillFlow AI supports compliance-first operations with audit-ready records, controlled dispatch workflows, and
          clear reconciliation across procurement, production, and billing.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Typical workflows</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Procurement intake + weighbridge reconciliation</li>
              <li>Batch-wise stock ledger across godowns</li>
              <li>Production tracking with yield ratios and shift KPIs</li>
              <li>GST invoicing + challans + compliance reports</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Controls & security</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Role-based access for owners, accountants, and floor operators</li>
              <li>Change history for critical entries (billing, dispatch, stock)</li>
              <li>Secure cloud backups with controlled access</li>
              <li>Operational alerts for deviations and stock thresholds</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_18px_40px_-24px_rgba(124,58,237,0.65)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book a demo
          </Link>
          <Link href="/solutions" className="inline-flex items-center text-[14px] font-semibold text-[#7C3AED]">
            Back to solutions
          </Link>
        </div>
      </Container>
    </div>
  );
}

