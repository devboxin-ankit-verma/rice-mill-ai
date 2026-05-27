import { Container } from "@/components/ui/container";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px]">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">Careers</h1>
        <p className="text-body mt-6 max-w-2xl">
          We’re building modern software for rice mills. Share your profile and we’ll reach out when roles open up.
        </p>
      </Container>
    </div>
  );
}

