import BaroqueOrnaments from "@/components/BaroqueOrnaments";

const AreasServed = () => {
  return (
    <section id="areas" className="py-32 bg-background relative overflow-hidden">
      <BaroqueOrnaments variant="corner-flourish" position="top-left" opacity={0.15} />
      <BaroqueOrnaments variant="corner-flourish" position="bottom-right" opacity={0.15} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-in fade-in duration-1000">
          <p className="font-poppins text-gold text-sm tracking-widest uppercase mb-4">
            Coverage
          </p>
          <h2 className="font-poppins text-4xl md:text-6xl font-bold text-foreground mb-6">
            Areas We Serve
          </h2>
          <p className="font-playfair text-xl text-muted-foreground italic max-w-2xl mx-auto">
            Professional painting, decorating and interior design services across West London
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Richmond Section */}
          <div className="bg-charcoal-light p-8 md:p-12 rounded-lg animate-in fade-in duration-1000">
            <h3 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
              Richmond Painter and Decorator Services
            </h3>
            <p className="font-poppins text-muted-foreground text-lg leading-relaxed mb-4">
              As a trusted <strong>Richmond painter and decorator</strong>, we've transformed hundreds of homes across Richmond upon Thames, from period properties in Richmond town centre to modern apartments in Twickenham. Our team brings decades of expertise to every project, whether it's a Victorian terrace in Kew, a contemporary home in Barnes, or a commercial space in Richmond town centre.
            </p>
            <p className="font-poppins text-muted-foreground text-lg leading-relaxed">
              We cover all areas of the Richmond borough including <strong>Twickenham, Kew, Barnes, Mortlake, Sheen, and Ham</strong>. Our Richmond painter and decorator services include interior and exterior painting, wallpapering, decorative finishes, and complete interior design solutions. No job is too big or too small—we treat every Richmond property with the same attention to detail and commitment to excellence.
            </p>
          </div>

          {/* Ealing Section */}
          <div className="bg-charcoal-light p-8 md:p-12 rounded-lg animate-in fade-in duration-1000" style={{ animationDelay: "200ms" }}>
            <h3 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ealing Painter and Decorator Services
            </h3>
            <p className="font-poppins text-muted-foreground text-lg leading-relaxed mb-4">
              Our <strong>Ealing painter and decorator</strong> team brings the same attention to detail to homes in Ealing Broadway, Hanwell, Southall, Acton, and Greenford. Whether you're looking for a complete interior redesign or a fresh coat of paint, our Ealing-based specialists understand the unique character of properties across the borough.
            </p>
            <p className="font-poppins text-muted-foreground text-lg leading-relaxed">
              From Edwardian homes in Ealing Common to modern developments in Northolt, our Ealing painter and decorator services cover the full spectrum of interior finishing work. We specialise in period property restoration, contemporary design, and everything in between. Our team is fully insured and brings premium materials and craftsmanship to every Ealing project.
            </p>
          </div>

          {/* Hounslow Section */}
          <div className="bg-charcoal-light p-8 md:p-12 rounded-lg animate-in fade-in duration-1000" style={{ animationDelay: "400ms" }}>
            <h3 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hounslow Painter and Decorator Services
            </h3>
            <p className="font-poppins text-muted-foreground text-lg leading-relaxed mb-4">
              In Hounslow, we've completed projects in <strong>Chiswick, Brentford, Isleworth, Feltham, and Hounslow town centre</strong>, delivering flawless finishes that stand the test of time. Our Hounslow painter and decorator team combines traditional craftsmanship with modern techniques to achieve exceptional results.
            </p>
            <p className="font-poppins text-muted-foreground text-lg leading-relaxed">
              Whether you need interior design services in Chiswick, plastering work in Brentford, or complete home transformation in Isleworth, our Hounslow-based specialists are here to help. We understand the architectural diversity of the borough and tailor our approach to each property's unique character and your personal style.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8 animate-in fade-in duration-1000" style={{ animationDelay: "600ms" }}>
            <p className="font-poppins text-lg text-muted-foreground mb-6">
              Not sure if we cover your area? We work across West London and beyond.
            </p>
            <a
              href="#contact"
              className="inline-block font-poppins text-gold hover:text-gold-light transition-colors text-lg font-semibold"
            >
              Contact us to discuss your project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasServed;

