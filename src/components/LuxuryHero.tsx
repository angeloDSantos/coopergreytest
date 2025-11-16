import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPaintedWalls from "@/assets/hero-sage-room.png";
import heroMobile from "@/assets/hero-mobile-sage.png";
import coopersLogo from "@/assets/coopers-logo-grey.png";

const LuxuryHero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden pt-20">
      {/* Static Background - Mobile */}
      <div
        className="absolute inset-0 top-0 bg-center md:hidden"
        style={{
          backgroundImage: `url(${heroMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Static Background - Desktop */}
      <div
        className="absolute inset-0 top-0 bg-center md:bg-fixed hidden md:block"
        style={{
          backgroundImage: `url(${heroPaintedWalls})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative h-full">
        {/* Logo centered independently */}
        <div className="absolute inset-0 flex items-center justify-center -mt-24">
          <img 
            src={coopersLogo} 
            alt="Coopers Interiors - No job too big or small" 
            className="h-[28rem] sm:h-[36rem] md:h-[44rem] lg:h-[51rem] xl:h-[55rem] 2xl:h-[59rem] w-auto max-w-[90vw] object-contain animate-in fade-in duration-1000"
          />
        </div>

        {/* Buttons positioned independently at a fixed location */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center animate-in fade-in duration-1000 delay-300">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 px-4">
            <Button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gold hover:bg-gold-light text-background border-2 border-gold font-poppins font-semibold text-lg px-10 py-6 tracking-wide uppercase transition-all duration-300 hover:scale-105"
            >
              See Our Work
            </Button>

            <Button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              className="bg-transparent hover:bg-gold border-2 border-gold text-gold hover:text-background hover:shadow-[0_0_20px_rgba(115,115,115,0.4)] font-poppins font-semibold text-lg px-10 py-6 tracking-wide uppercase transition-all duration-300 hover:scale-105"
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <ChevronDown className="text-gold" size={32} strokeWidth={1} />
      </div>
    </section>
  );
};

export default LuxuryHero;
