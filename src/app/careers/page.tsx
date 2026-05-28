import { Container } from "@/components/ui/container";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px] pb-18">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">Careers</h1>
        <p className="text-body mt-6 max-w-2xl">
          We’re building modern, reliable software for rice mills — designed for real operations, real teams, and real
          compliance needs.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Teams</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Frontend (Next.js, performance-first UI)</li>
              <li>Backend (APIs, data workflows, integrations)</li>
              <li>Design (systems, typography, product polish)</li>
              <li>Customer success (onboarding for mills)</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">How to apply</h2>
            <p className="mt-2 text-[14px] text-[#6B7280]">
              Share your profile and portfolio. If your work matches upcoming openings, we’ll reach out.
            </p>
            <p className="mt-4 text-[14px] font-semibold text-text-primary">Email: <span className="font-normal text-[#6B7280]">hr@millflow.ai (placeholder)</span></p>
          </div>
        </div>
      </Container>
    </div>
  );
}

