import Navigation from "@/components/Navigation";
import LuxuryFooter from "@/components/LuxuryFooter";
import { Button } from "@/components/ui/button";
import BaroqueOrnaments from "@/components/BaroqueOrnaments";

const PaintingDecoratingRichmond = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-charcoal-light relative overflow-hidden">
        <BaroqueOrnaments variant="corner-flourish" position="top-right" opacity={0.15} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-poppins text-4xl md:text-6xl font-bold text-foreground mb-6">
              Painting and Decorating Services in Richmond
            </h1>
            <p className="font-poppins text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional Richmond painter and decorator services for homes and businesses across Richmond upon Thames
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Expert Richmond Painter and Decorator
              </h2>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                As a trusted <strong>Richmond painter and decorator</strong>, Coopers Interiors has transformed hundreds of properties across Richmond upon Thames. From period Victorian terraces in Kew to contemporary apartments in Twickenham, we bring decades of expertise to every Richmond project.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                Our Richmond painter and decorator team understands the unique character of properties throughout the borough. Whether you're restoring original features in a period home or creating a modern interior in a new build, we tailor our approach to preserve and enhance your property's distinctive style.
              </p>
            </div>

            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Areas We Cover in Richmond
              </h2>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                Our Richmond painter and decorator services cover the entire borough, including:
              </p>
              <ul className="font-poppins text-lg text-muted-foreground space-y-2 mb-4 list-disc list-inside">
                <li>Richmond town centre</li>
                <li>Twickenham</li>
                <li>Kew</li>
                <li>Barnes</li>
                <li>Mortlake</li>
                <li>Sheen</li>
                <li>Ham</li>
                <li>East Sheen</li>
                <li>North Sheen</li>
              </ul>
            </div>

            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Richmond Painting and Decorating Services
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Interior Painting
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Complete interior painting services for Richmond homes, using premium paints and finishes. We handle everything from preparation to final touches, ensuring flawless results that last.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Exterior Painting
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Protect and enhance your Richmond property's exterior with our professional exterior painting services. We use weather-resistant paints and proper preparation techniques for long-lasting results.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Wallpapering
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Expert wallpaper installation and removal services for Richmond properties. From traditional patterns to contemporary designs, we ensure perfect alignment and professional finishes.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Decorative Finishes
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Specialised decorative finishes including feature walls, textured effects, and bespoke paint techniques to create unique interiors in your Richmond home.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h2 className="font-poppins text-3xl font-bold text-foreground mb-4">
                Why Choose Our Richmond Painter and Decorator Services?
              </h2>
              <ul className="font-poppins text-muted-foreground space-y-3 list-disc list-inside">
                <li>Over 25 years of experience in Richmond and surrounding areas</li>
                <li>Fully insured and qualified team</li>
                <li>Premium materials and craftsmanship</li>
                <li>Free, no-obligation quotes for all Richmond projects</li>
                <li>Understanding of period and modern property requirements</li>
                <li>Minimal disruption to your daily life</li>
              </ul>
            </div>

            <div className="text-center pt-8">
              <Button
                onClick={() => window.location.href = "/#contact"}
                className="bg-gold hover:bg-gold-light text-charcoal font-poppins font-semibold text-lg px-10 py-6 tracking-wide uppercase"
              >
                Get Your Free Richmond Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  );
};

export default PaintingDecoratingRichmond;

