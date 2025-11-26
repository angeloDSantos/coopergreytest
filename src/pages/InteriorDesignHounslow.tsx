import Navigation from "@/components/Navigation";
import LuxuryFooter from "@/components/LuxuryFooter";
import { Button } from "@/components/ui/button";
import BaroqueOrnaments from "@/components/BaroqueOrnaments";

const InteriorDesignHounslow = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-charcoal-light relative overflow-hidden">
        <BaroqueOrnaments variant="corner-flourish" position="bottom-right" opacity={0.15} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-poppins text-4xl md:text-6xl font-bold text-foreground mb-6">
              Interior Design Services in Hounslow
            </h1>
            <p className="font-poppins text-xl text-muted-foreground mb-8 leading-relaxed">
              Complete interior design solutions for homes and businesses across the London Borough of Hounslow
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Expert Interior Design in Hounslow
              </h2>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                Our <strong>interior design team</strong> serves the entire London Borough of Hounslow, creating beautiful, functional spaces that reflect your personal style and lifestyle. From complete home transformations to single room redesigns, we bring your vision to life with meticulous attention to detail.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                Whether you're in Chiswick, Brentford, Isleworth, or Hounslow town centre, our interior design services combine creative vision with practical expertise. We understand the architectural diversity of Hounslow properties and work with you to create interiors that enhance your home's unique character.
              </p>
            </div>

            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Areas We Cover in Hounslow
              </h2>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                Our Hounslow interior design services cover the entire borough, including:
              </p>
              <ul className="font-poppins text-lg text-muted-foreground space-y-2 mb-4 list-disc list-inside">
                <li>Chiswick</li>
                <li>Brentford</li>
                <li>Isleworth</li>
                <li>Hounslow town centre</li>
                <li>Feltham</li>
                <li>Bedfont</li>
                <li>Hanworth</li>
                <li>Cranford</li>
                <li>Heston</li>
              </ul>
            </div>

            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Hounslow Interior Design Services
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Complete Home Design
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Full interior design services for Hounslow properties, from initial concept to final installation. We handle every aspect of your home transformation, creating cohesive, beautiful spaces throughout.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Room Redesign
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Single room interior design services for Hounslow homes. Whether it's a living room, kitchen, bedroom, or bathroom, we create spaces that perfectly suit your needs and style.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Colour Consultation
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Expert colour advice for Hounslow properties, helping you choose the perfect palette to enhance your home's architecture and create the desired atmosphere.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Furniture and Accessories
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Sourcing and styling services for furniture, lighting, and accessories. We work with trusted suppliers to find pieces that perfectly complement your Hounslow home's design.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    Project Management
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Complete project management for Hounslow interior design projects, coordinating all trades and suppliers to ensure smooth execution from start to finish.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h2 className="font-poppins text-3xl font-bold text-foreground mb-4">
                Why Choose Our Hounslow Interior Design Services?
              </h2>
              <ul className="font-poppins text-muted-foreground space-y-3 list-disc list-inside">
                <li>Experienced interior design team serving Hounslow for over 25 years</li>
                <li>Understanding of period and contemporary property styles</li>
                <li>Complete design and project management services</li>
                <li>Access to premium suppliers and materials</li>
                <li>Free initial consultations for Hounslow projects</li>
                <li>Personalised designs that reflect your style and lifestyle</li>
                <li>Seamless integration with our painting and decorating services</li>
              </ul>
            </div>

            <div className="text-center pt-8">
              <Button
                onClick={() => window.location.href = "/#contact"}
                className="bg-gold hover:bg-gold-light text-charcoal font-poppins font-semibold text-lg px-10 py-6 tracking-wide uppercase"
              >
                Start Your Hounslow Interior Design Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  );
};

export default InteriorDesignHounslow;

