import { Container } from "@/components/ui/container";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px] pb-18">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">Privacy Policy</h1>
        <p className="text-body mt-6 max-w-2xl">
          This policy explains how MillFlow AI handles information submitted on this website and in demo requests. If you
          need a signed enterprise addendum, request it during onboarding.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">What we collect</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>Contact details you submit (name, phone, email, company)</li>
              <li>Demo requirements and mill operational notes you share</li>
              <li>Basic website analytics for performance and security</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="font-jakarta text-lg font-semibold text-text-primary">How we use it</h2>
            <ul className="mt-4 space-y-2 text-[14px] text-[#6B7280]">
              <li>To schedule demos and provide onboarding support</li>
              <li>To improve product features and user experience</li>
              <li>To prevent abuse, fraud, and unauthorized access</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

