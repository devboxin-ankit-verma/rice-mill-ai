import { AiAutomation } from "@/components/landing/ai-automation";
import { Comparison } from "@/components/landing/comparison";
import { DashboardShowcase } from "@/components/landing/dashboard-showcase";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { PlatformSection } from "@/components/landing/platform-section";
import { SmartAnalytics } from "@/components/landing/smart-analytics";
import { SvgSection } from "@/components/landing/svg-section";
import { Testimonials } from "@/components/landing/testimonials";
import { TrustedBy } from "@/components/landing/trusted-by";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { Workflow } from "@/components/landing/workflow";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <DashboardShowcase />
        <SvgSection />
        <AiAutomation />
        <Workflow />
        <SmartAnalytics />
        <PlatformSection />
        <Comparison />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
