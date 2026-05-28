import { Container } from "@/components/ui/container";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px] pb-18">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">About MillFlow AI</h1>
        <p className="text-body mt-6 max-w-2xl">
          MillFlow AI is built for rice mills that want clean, fast operations — from mandi procurement to production,
          inventory, GST billing, dispatch, and analytics.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">What we solve</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Manual entries and mismatched weights</li>
              <li>Unclear stock across godowns and batches</li>
              <li>Delayed GST billing and compliance reporting</li>
              <li>Production visibility without real KPIs</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">What you get</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Real-time dashboards for owners and managers</li>
              <li>Role-based access and approval flows</li>
              <li>Audit-ready exports and compliance support</li>
              <li>AI alerts for anomalies and stock risks</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

