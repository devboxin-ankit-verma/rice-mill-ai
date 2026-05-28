import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function AarthManagementSolutionPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px] pb-18">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">Aarth management</h1>
        <p className="text-body mt-6 max-w-2xl">
          Track brokers, commissions, supplier settlements, and payment status with clear reconciliation — connected to
          procurement, billing, and dispatch.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Transparency for every transaction</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Broker-wise commission tracking</li>
              <li>Supplier payment status and settlements</li>
              <li>Weight and rate reconciliation across entries</li>
              <li>Export-ready reports for audit and review</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Connected with operations</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Links procurement, production, billing, and dispatch</li>
              <li>Fewer disputes with clear history and approvals</li>
              <li>Role-based access for teams</li>
              <li>Alerts for pending payments and deviations</li>
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

