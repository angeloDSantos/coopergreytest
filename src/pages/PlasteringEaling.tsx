import Navigation from "@/components/Navigation";
import LuxuryFooter from "@/components/LuxuryFooter";
import { Button } from "@/components/ui/button";
import BaroqueOrnaments from "@/components/BaroqueOrnaments";
import SEOHead from "@/components/SEOHead";

const PlasteringEaling = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Professional Plastering Services in Ealing | Coopers Interiors | Ealing Plasterer"
        description="Coopers Interiors: Expert Ealing plastering services for homes and businesses across the London Borough of Ealing. Professional skimming, replastering, patch repairs, decorative mouldings, and rendering. Call 07725 349084 for a free quote."
        keywords="Coopers Interiors, Ealing plastering, plastering services Ealing, Ealing plasterer, skimming Ealing, replastering Ealing, patch repairs Ealing, decorative mouldings Ealing, rendering Ealing, Artex removal Ealing"
        canonical="https://www.coopersinteriors.co.uk/services/plastering-ealing"
      />
      <Navigation />
      
      <section className="pt-32 pb-20 bg-charcoal-light relative overflow-hidden">
        <BaroqueOrnaments variant="corner-flourish" position="top-left" opacity={0.15} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-poppins text-4xl md:text-6xl font-bold text-foreground mb-6">
              Professional Plastering Services in Ealing
            </h1>
            <p className="font-poppins text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert plastering and rendering services for homes and businesses across the London Borough of Ealing
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Expert Ealing Plastering Services
              </h2>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                Our specialist <strong>Ealing plastering team</strong> serves the entire London Borough of Ealing, delivering flawless surfaces and architectural details for residential and commercial properties. With over 25 years of experience, we understand the unique requirements of Ealing's diverse property portfolio.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                From Edwardian homes in Ealing Common to modern developments in Northolt, our Ealing plastering services ensure perfect surfaces ready for painting or finishing. We combine traditional techniques with modern materials to achieve exceptional results that stand the test of time.
              </p>
            </div>

            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Areas We Cover in Ealing
              </h2>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                Our Ealing plastering services cover all areas of the borough, including:
              </p>
              <ul className="font-poppins text-lg text-muted-foreground space-y-2 mb-4 list-disc list-inside">
                <li>Ealing Broadway</li>
                <li>Hanwell</li>
                <li>Southall</li>
                <li>Acton</li>
                <li>Greenford</li>
                <li>Northolt</li>
                <li>Perivale</li>
                <li>West Ealing</li>
                <li>Ealing Common</li>
              </ul>
            </div>

            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Ealing Plastering Services
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Skimming and Replastering
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Complete room replastering and skimming services for Ealing properties. We create smooth, even surfaces perfect for painting or wallpapering, using premium plastering materials.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Patch Repairs
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Expert patch repair services for damaged or cracked plaster in Ealing homes. We seamlessly blend repairs with existing surfaces for invisible results.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Decorative Mouldings
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Installation and restoration of decorative plaster mouldings, cornices, and ceiling roses for period properties throughout Ealing.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Rendering
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Professional external rendering services for Ealing properties, improving appearance and weather protection with smooth or textured finishes.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Artex Removal
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Professional Artex removal and smoothing services, creating modern, clean surfaces in Ealing homes ready for contemporary finishes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h2 className="font-poppins text-3xl font-bold text-foreground mb-4">
                Why Choose Our Ealing Plastering Services?
              </h2>
              <ul className="font-poppins text-muted-foreground space-y-3 list-disc list-inside">
                <li>Specialist plastering team with decades of Ealing experience</li>
                <li>Fully insured and qualified professionals</li>
                <li>Premium materials for lasting results</li>
                <li>Free quotes for all Ealing plastering projects</li>
                <li>Understanding of period and modern property requirements</li>
                <li>Clean, professional service with minimal disruption</li>
                <li>Complete project management from start to finish</li>
              </ul>
            </div>

            <div className="text-center pt-8">
              <Button
                onClick={() => window.location.href = "/#contact"}
                className="bg-gold hover:bg-gold-light text-charcoal font-poppins font-semibold text-lg px-10 py-6 tracking-wide uppercase"
              >
                Get Your Free Ealing Plastering Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  );
};

export default PlasteringEaling;

