import { Container } from "@/components/ui/container";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px] pb-18">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">Terms of Service</h1>
        <p className="text-body mt-6 max-w-2xl">
          These terms cover the use of the MillFlow AI website and demo process. Production deployments may include
          additional contractual terms based on your plan and integrations.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Acceptable use</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Use the site for legitimate demo and evaluation requests</li>
              <li>Do not attempt to disrupt, scrape, or attack the service</li>
              <li>Do not share false information or impersonate others</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">Disclaimers</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Product features may evolve as we ship updates</li>
              <li>Availability may vary by region and plan</li>
              <li>Security and compliance controls are detailed in onboarding</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

