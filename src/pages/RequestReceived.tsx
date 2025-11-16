import { Link } from "react-router-dom";
import { CheckCircle2, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import LuxuryFooter from "@/components/LuxuryFooter";

const RequestReceived = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full"></div>
              <CheckCircle2 className="w-24 h-24 text-gold relative z-10" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Request Received
          </h1>

          {/* Subheading */}
          <p className="font-poppins text-lg md:text-xl text-cream/80 mb-8 leading-relaxed">
            Thank you for contacting Coopers Interiors. We've received your request 
            and will get back to you within 24 hours.
          </p>

          {/* Additional Info */}
          <div className="bg-charcoal-light border border-gold/20 rounded-lg p-8 mb-12">
            <p className="font-poppins text-cream/70 mb-4">
              Our team of experts is reviewing your request. We're excited to discuss 
              how we can transform your space with our premium painting, decorating, 
              and plastering services.
            </p>
            <p className="font-poppins text-cream/70">
              Need immediate assistance? Call us at{" "}
              <a 
                href="tel:+447725349084" 
                className="text-gold hover:text-gold-light transition-colors"
              >
                +44 7725 349084
              </a>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gold hover:bg-gold-light text-charcoal font-poppins font-semibold text-base px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-2 border-gold text-gold hover:border-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] font-poppins font-semibold text-base px-8 py-6 bg-transparent transition-all duration-300 hover:scale-105"
            >
              <a href="tel:+447725349084">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </main>

      <LuxuryFooter />
    </div>
  );
};

export default RequestReceived;
