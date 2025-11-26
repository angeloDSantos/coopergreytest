import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BaroqueOrnaments from "@/components/BaroqueOrnaments";

const faqs = [
  {
    question: "How much does a painter and decorator cost in Richmond?",
    answer: "Our Richmond painter and decorator services are tailored to each project, with pricing based on the scope of work, property size, and materials required. We provide free, no-obligation quotes for all Richmond projects, whether it's a single room refresh or a complete home transformation. Call 01483 123 456 to discuss your Richmond project and receive a detailed quote."
  },
  {
    question: "Do you provide painting services in Ealing?",
    answer: "Yes, our Ealing painter and decorator team covers all areas of the borough including Ealing Broadway, Hanwell, Southall, Acton, and Greenford. We offer comprehensive painting and decorating services for residential and commercial properties throughout Ealing. From interior painting to exterior work, wallpapering, and decorative finishes, we bring premium craftsmanship to every Ealing project."
  },
  {
    question: "What areas of Hounslow do you cover?",
    answer: "Our Hounslow painter and decorator services cover the entire borough, including Chiswick, Brentford, Isleworth, Feltham, Hounslow town centre, and surrounding areas. We've completed hundreds of projects across Hounslow, from period properties to modern developments. Contact us to confirm we cover your specific area in Hounslow."
  },
  {
    question: "How long does a typical painting project take?",
    answer: "Project timelines vary depending on the scope. A single room typically takes 2-3 days, while a complete home interior can take 1-2 weeks. We always provide a detailed timeline as part of your free quote, and we work efficiently to minimise disruption to your daily life while ensuring the highest quality finish."
  },
  {
    question: "Do you offer interior design services in Richmond, Ealing and Hounslow?",
    answer: "Yes, we provide comprehensive interior design services across all three boroughs. Our interior design team works closely with you to create spaces that reflect your style and lifestyle. We handle everything from initial concept and colour consultation to complete project management, working with trusted suppliers to bring your vision to life."
  },
  {
    question: "Are you insured and qualified?",
    answer: "Absolutely. We are fully insured, qualified, and have over 25 years of experience in painting, decorating, and interior design. All our team members are trained professionals committed to delivering exceptional results. We're proud members of the local trade community and maintain the highest standards of workmanship and customer service."
  },
  {
    question: "Do you provide plastering services in Ealing?",
    answer: "Yes, our specialist plastering team serves Ealing and all surrounding areas. We handle everything from small patch repairs to complete room replastering, including decorative mouldings and architectural details. Our Ealing plastering services ensure flawless surfaces ready for painting or finishing to your exact specifications."
  },
  {
    question: "Can you work around my schedule?",
    answer: "We understand that home improvements need to fit around your life. We work flexibly and can schedule work to minimise disruption. Many of our clients continue living in their homes during projects, and we always ensure work areas are kept clean and safe. We'll discuss scheduling options during your free consultation."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-charcoal-light relative overflow-hidden">
      <BaroqueOrnaments variant="corner-flourish" position="top-right" opacity={0.18} />
      <BaroqueOrnaments variant="corner-flourish" position="bottom-left" opacity={0.16} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-in fade-in duration-1000">
          <p className="font-poppins text-gold text-sm tracking-widest uppercase mb-4">
            Questions
          </p>
          <h2 className="font-poppins text-4xl md:text-6xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-playfair text-xl text-muted-foreground italic max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg overflow-hidden animate-in fade-in duration-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 md:px-8 md:py-8 flex justify-between items-center text-left hover:bg-charcoal-light transition-colors"
              >
                <h3 className="font-poppins text-lg md:text-xl font-semibold text-foreground pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-in fade-in duration-1000" style={{ animationDelay: "800ms" }}>
          <p className="font-poppins text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-block font-poppins text-gold hover:text-gold-light transition-colors text-lg font-semibold"
          >
            Get in touch with our team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

