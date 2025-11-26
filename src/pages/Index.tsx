import Navigation from "@/components/Navigation";
import LuxuryHero from "@/components/LuxuryHero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import LuxuryServices from "@/components/LuxuryServices";
import AboutSection from "@/components/AboutSection";
import AreasServed from "@/components/AreasServed";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LuxuryContact from "@/components/LuxuryContact";
import LuxuryFooter from "@/components/LuxuryFooter";
import BaroqueDivider from "@/components/BaroqueDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LuxuryHero />
      <ProjectsShowcase />
      <LuxuryServices />
      <AboutSection />
      <AreasServed />
      <TestimonialsSection />
      <FAQSection />
      <LuxuryContact />
      <LuxuryFooter />
    </div>
  );
};

export default Index;
