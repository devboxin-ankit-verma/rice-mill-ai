import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function PrivateMillsSolutionPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px] pb-18">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">Private mills</h1>
        <p className="text-body mt-6 max-w-2xl">
          For high-throughput private operations, MillFlow AI focuses on speed, accuracy, and real-time visibility across
          inventory, production, billing, dispatch, and analytics.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Run faster every day</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Live stock across godowns with alerts and batch tracking</li>
              <li>Production dashboards with yield trends and downtime visibility</li>
              <li>GST billing with quick invoice generation and reconciliation</li>
              <li>Dispatch management for orders and transporter tracking</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Smarter decisions</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>AI insights for yield anomalies and stock risk</li>
              <li>Daily profitability and performance KPIs</li>
              <li>Multi-user roles for teams and multi-mill groups</li>
              <li>Export-ready reports for audits and partners</li>
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

