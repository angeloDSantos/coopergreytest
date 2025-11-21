import coopersLogo from "@/assets/coopers-logo-final.png";

const LuxuryFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-light border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12 md:items-start">
          <div className="flex flex-col">
            <div className="flex items-start mb-4">
              <img src={coopersLogo} alt="Coopers Interiors" className="h-24 md:h-28 w-auto" />
            </div>
            <p className="font-poppins text-muted-foreground leading-relaxed">
              Crafting elegant interiors with precision and care. London's trusted partner 
              for painting, decorating, and plastering excellence.
            </p>
          </div>

          <div>
            <h4 className="font-poppins text-sm text-gold uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {["Home", "About", "Projects", "Services", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    document
                      .querySelector(`#${link.toLowerCase()}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block font-poppins text-muted-foreground hover:text-gold transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-poppins text-sm text-gold uppercase tracking-widest mb-6">
              Contact
            </h4>
            <div className="space-y-3 font-poppins text-muted-foreground">
              <a
                href="tel:+447725349084"
                className="block hover:text-gold transition-colors"
              >
                +44 7725 349084
              </a>
              <a
                href="mailto:coopersinteriors@outlook.com"
                className="block hover:text-gold transition-colors break-all"
              >
                coopersinteriors@outlook.com
              </a>
              <p>London, United Kingdom</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="font-poppins text-sm text-muted-foreground">
            © {currentYear} Coopers Interiors. All rights reserved. Crafted with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;
