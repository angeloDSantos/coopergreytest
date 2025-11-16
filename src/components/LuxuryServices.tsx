import { Brush, Layers3, Sparkles } from "lucide-react";
import BaroqueOrnaments from "@/components/BaroqueOrnaments";

const services = [
  {
    icon: Brush,
    title: "Painting & Decorating",
    description: "Precision craftsmanship with premium materials for interiors that inspire.",
  },
  {
    icon: Layers3,
    title: "Plastering",
    description: "Flawless surfaces and architectural details executed to perfection.",
  },
  {
    icon: Sparkles,
    title: "Interior Finishing",
    description: "Bespoke solutions for feature walls, mouldings, and decorative elements.",
  },
];

const LuxuryServices = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <BaroqueOrnaments variant="center-medallion" position="top" opacity={0.1} />
      <BaroqueOrnaments variant="corner-flourish" position="top-right" opacity={0.15} />
      <BaroqueOrnaments variant="corner-flourish" position="bottom-left" opacity={0.15} />
      <BaroqueOrnaments variant="border-decoration" position="bottom" opacity={0.2} />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-gold/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-in fade-in duration-1000">
          <p className="font-poppins text-gold text-sm tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-poppins text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="font-playfair text-xl text-muted-foreground italic max-w-2xl mx-auto">
            Every project is an opportunity to deliver excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center space-y-6 animate-in fade-in duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:from-gold group-hover:to-gold-dark transition-all duration-500">
                <service.icon
                  className="text-gold group-hover:text-charcoal transition-colors duration-500"
                  size={36}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-poppins text-2xl font-semibold text-foreground">
                {service.title}
              </h3>

              <p className="font-poppins text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="w-16 h-px bg-gold/50 mx-auto group-hover:w-24 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryServices;
