import BaroqueOrnaments from "@/components/BaroqueOrnaments";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-charcoal-light relative overflow-hidden">
      <BaroqueOrnaments variant="corner-flourish" position="top-right" opacity={0.18} />
      <BaroqueOrnaments variant="corner-flourish" position="bottom-left" opacity={0.16} />
      <BaroqueOrnaments variant="side-accent" position="left" opacity={0.12} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative h-[600px] overflow-hidden animate-in fade-in duration-1000">
            <img
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2400"
              alt="Craftsman at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-light via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-in fade-in duration-1000" style={{ animationDelay: "200ms" }}>
            <div>
              <p className="font-poppins text-gold text-sm tracking-widest uppercase mb-4">
                About Us
              </p>
              <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-6">
                Where Craftsmanship
                <br />
                Meets <span className="text-gold">Vision</span>
              </h2>
            </div>

            <p className="font-poppins text-muted-foreground text-lg leading-relaxed">
              Richmond painter and decorator Coopers Interiors brings decades of expertise to every project. 
              We transform homes and interiors across the boroughs of Richmond upon Thames, Ealing and Hounslow 
              with meticulous attention to detail and an unwavering commitment to quality.
            </p>

            <p className="font-poppins text-muted-foreground text-lg leading-relaxed">
              From historic restorations to contemporary designs, our team approaches each commission 
              with the same dedication to excellence. No job is too big or too small—every space 
              deserves the finest finish.
            </p>

            {/* Checkatrade Verification */}
            <div className="bg-background/50 p-6 rounded-lg border border-gold/20">
              <div className="flex items-center gap-4 mb-3">
                <a 
                  href="https://www.checkatrade.com/trades/coopersinteriors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="View our Checkatrade profile"
                >
                  <img 
                    src="https://www.checkatrade.com/images/checkatrade-badge.png" 
                    alt="Checkatrade Verified" 
                    className="h-12"
                    loading="lazy"
                  />
                </a>
                <div>
                  <p className="font-poppins font-semibold text-foreground">
                    Checkatrade Verified
                  </p>
                  <p className="font-poppins text-sm text-muted-foreground">
                    Rated 4.8/5 from 25+ reviews
                  </p>
                </div>
              </div>
              <p className="font-poppins text-sm text-muted-foreground">
                We're proud to be a <a href="https://www.checkatrade.com/trades/coopersinteriors" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">Checkatrade verified</a> painter and decorator, trusted by homeowners across Richmond, Ealing and Hounslow.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="font-poppins text-4xl font-bold text-gold mb-2">25+</p>
                <p className="font-poppins text-sm text-muted-foreground uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-poppins text-4xl font-bold text-gold mb-2">500+</p>
                <p className="font-poppins text-sm text-muted-foreground uppercase tracking-wider">
                  Projects Done
                </p>
              </div>
              <div>
                <p className="font-poppins text-4xl font-bold text-gold mb-2">100%</p>
                <p className="font-poppins text-sm text-muted-foreground uppercase tracking-wider">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
