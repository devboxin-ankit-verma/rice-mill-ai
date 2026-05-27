import { Container } from "@/components/ui/container";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-[96px]">
      <Container>
        <h1 className="font-jakarta text-hero text-text-primary">About MillFlow AI</h1>
        <p className="text-body mt-6 max-w-2xl">
          MillFlow AI helps rice mills streamline procurement, production, inventory, billing, and analytics with a modern,
          AI-assisted ERP workflow.
        </p>
      </Container>
    </div>
  );
}

