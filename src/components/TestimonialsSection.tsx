import BaroqueOrnaments from "@/components/BaroqueOrnaments";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Richmond",
    text: "Coopers Interiors transformed our Richmond home. The best painter and decorator we've worked with in the area. Their attention to detail and professionalism was outstanding throughout the entire project.",
    rating: 5
  },
  {
    name: "James Thompson",
    location: "Ealing",
    text: "We needed a complete interior redesign for our Ealing property, and Coopers Interiors delivered beyond our expectations. The team understood our vision and brought it to life beautifully. Highly recommend their Ealing services.",
    rating: 5
  },
  {
    name: "Emma Williams",
    location: "Chiswick, Hounslow",
    text: "Living in Chiswick, we wanted a painter and decorator who understood period properties. Coopers Interiors did an exceptional job restoring the original features while modernising the space. The quality of work is second to none.",
    rating: 5
  },
  {
    name: "David Chen",
    location: "Twickenham, Richmond",
    text: "From initial consultation to final touches, the Richmond team at Coopers Interiors was professional, punctual, and produced flawless results. Our Twickenham home looks stunning. Worth every penny.",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    location: "Hanwell, Ealing",
    text: "As a busy professional in Hanwell, I needed a decorator I could trust. Coopers Interiors managed the entire project, keeping me informed every step of the way. The finish is perfect, and I couldn't be happier with the service.",
    rating: 5
  },
  {
    name: "Michael Brown",
    location: "Brentford, Hounslow",
    text: "The plastering and painting work Coopers Interiors completed in our Brentford home was exceptional. They transformed dated rooms into modern, elegant spaces. Professional, clean, and reliable—everything you want from a decorator.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      <BaroqueOrnaments variant="center-medallion" position="top" opacity={0.1} />
      <BaroqueOrnaments variant="corner-flourish" position="top-left" opacity={0.15} />
      <BaroqueOrnaments variant="corner-flourish" position="bottom-right" opacity={0.15} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-in fade-in duration-1000">
          <p className="font-poppins text-gold text-sm tracking-widest uppercase mb-4">
            Client Reviews
          </p>
          <h2 className="font-poppins text-4xl md:text-6xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="font-playfair text-xl text-muted-foreground italic max-w-2xl mx-auto">
            Trusted by homeowners across Richmond, Ealing and Hounslow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-charcoal-light p-8 rounded-lg border border-border hover:border-gold/50 transition-colors animate-in fade-in duration-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="font-poppins text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-poppins font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-poppins text-sm text-gold">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-in fade-in duration-1000" style={{ animationDelay: "600ms" }}>
          <p className="font-poppins text-muted-foreground mb-4">
            Join our satisfied customers across West London
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#contact"
              className="inline-block font-poppins text-gold hover:text-gold-light transition-colors text-lg font-semibold"
            >
              Start your project today →
            </a>
            <span className="text-muted-foreground">or</span>
            <a
              href="https://www.checkatrade.com/trades/coopersinteriors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-poppins text-gold hover:text-gold-light transition-colors text-sm"
            >
              Read more reviews on Checkatrade →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

