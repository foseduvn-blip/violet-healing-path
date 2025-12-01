import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import SessionsSection from "@/components/landing/SessionsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TargetAudienceSection from "@/components/landing/TargetAudienceSection";
import InstructorSection from "@/components/landing/InstructorSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import ClosingSection from "@/components/landing/ClosingSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <WhatIsSection />
      <SessionsSection />
      <BenefitsSection />
      <TargetAudienceSection />
      <InstructorSection />
      <PricingSection />
      <FAQSection />
      <ClosingSection />
      <Footer />
    </main>
  );
};

export default Index;
