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
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Richmond Painter and Decorator | Coopers Interiors | Checkatrade Approved | Rated 4.8/5"
        description="Coopers Interiors: Checkatrade Approved Richmond painter and decorator rated 4.8/5. Expert interior design, painting, decorating, and plastering services across Richmond upon Thames, Ealing and Hounslow. Call 07725 349084 for a free, no-obligation quote."
        keywords="Coopers Interiors, Richmond painter and decorator, Richmond upon Thames painter, Ealing painter and decorator, Hounslow painter and decorator, interior design Richmond, interior design Ealing, interior design Hounslow, Checkatrade approved, plastering Ealing, Richmond decorating services, painting services Richmond, decorating services Richmond, professional painter Richmond, local painter Richmond"
        canonical="https://www.coopersinteriors.co.uk/"
      />
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
