import dynamic from "next/dynamic";
import { Hero } from "@/components/landing/hero";
import { Footer } from "@/components/layout/footer";

const TrustedBy = dynamic(() => import("@/components/landing/trusted-by").then((m) => m.TrustedBy));
const Features = dynamic(() => import("@/components/landing/features").then((m) => m.Features));
const DashboardShowcase = dynamic(() =>
  import("@/components/landing/dashboard-showcase").then((m) => m.DashboardShowcase),
);
const SvgSection = dynamic(() => import("@/components/landing/svg-section").then((m) => m.SvgSection));
const AiAutomation = dynamic(() => import("@/components/landing/ai-automation").then((m) => m.AiAutomation));
const Workflow = dynamic(() => import("@/components/landing/workflow").then((m) => m.Workflow));
const SmartAnalytics = dynamic(() => import("@/components/landing/smart-analytics").then((m) => m.SmartAnalytics));
const PlatformSection = dynamic(() =>
  import("@/components/landing/platform-section").then((m) => m.PlatformSection),
);
const Comparison = dynamic(() => import("@/components/landing/comparison").then((m) => m.Comparison));
const WhyChooseUs = dynamic(() => import("@/components/landing/why-choose-us").then((m) => m.WhyChooseUs));
const Testimonials = dynamic(() => import("@/components/landing/testimonials").then((m) => m.Testimonials));
const Pricing = dynamic(() => import("@/components/landing/pricing").then((m) => m.Pricing));
const Faq = dynamic(() => import("@/components/landing/faq").then((m) => m.Faq));

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
