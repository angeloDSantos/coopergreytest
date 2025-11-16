import Navigation from "@/components/Navigation";
import LuxuryHero from "@/components/LuxuryHero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import LuxuryServices from "@/components/LuxuryServices";
import AboutSection from "@/components/AboutSection";
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
      <LuxuryContact />
      <LuxuryFooter />
    </div>
  );
};

export default Index;
