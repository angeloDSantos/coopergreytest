import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import BaroqueOrnaments from "@/components/BaroqueOrnaments";

const LuxuryContact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    const phonePattern = /^[0-9+\-().\s]*$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone must contain only numbers and symbols";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/movpgjgp", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: form
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({ name: "", email: "", phone: "", message: "" });
        // Redirect to thank you page
        setTimeout(() => {
          navigate("/request-received");
        }, 500);
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <BaroqueOrnaments variant="corner-flourish" position="top-left" opacity={0.18} />
      <BaroqueOrnaments variant="corner-flourish" position="bottom-right" opacity={0.2} />
      <BaroqueOrnaments variant="center-medallion" position="top" opacity={0.08} />
      <BaroqueOrnaments variant="border-decoration" position="top" opacity={0.15} />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-in fade-in duration-1000">
          <p className="font-poppins text-gold text-sm tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-poppins text-4xl md:text-6xl font-bold text-gold mb-6">
            Start Your Project
          </h2>
          <p className="font-playfair text-xl text-muted-foreground italic max-w-2xl mx-auto">
            Let's create something extraordinary together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-12 animate-in fade-in duration-1000">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Phone className="text-gold group-hover:text-charcoal transition-colors duration-300" size={24} />
                </div>
                <div>
                  <p className="font-poppins text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+447725349084"
                    className="font-poppins text-xl text-foreground hover:text-gold transition-colors"
                  >
                    +44 7725 349084
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Mail className="text-gold group-hover:text-charcoal transition-colors duration-300" size={24} />
                </div>
                <div>
                  <p className="font-poppins text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:coopersinteriors@outlook.com"
                    className="font-poppins text-xl text-foreground hover:text-gold transition-colors break-all"
                  >
                    coopersinteriors@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <MapPin className="text-gold group-hover:text-charcoal transition-colors duration-300" size={24} />
                </div>
                <div>
                  <p className="font-poppins text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    Location
                  </p>
                  <p className="font-poppins text-xl text-foreground">
                    London, United Kingdom
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-charcoal-light border-l-4 border-gold">
              <p className="font-playfair text-lg text-muted-foreground italic leading-relaxed">
                "No job is too big or small. Every space deserves the finest craftsmanship 
                and attention to detail."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-1000" style={{ animationDelay: "200ms" }}>
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                className="bg-charcoal-light border-border focus:border-gold font-poppins h-14 text-black"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 font-poppins">{errors.name}</p>
              )}
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className="bg-charcoal-light border-border focus:border-gold font-poppins h-14 text-black"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 font-poppins">{errors.email}</p>
              )}
            </div>

            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
                className="bg-charcoal-light border-border focus:border-gold font-poppins h-14 text-black"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 font-poppins">{errors.phone}</p>
              )}
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                className="bg-charcoal-light border-border focus:border-gold font-poppins min-h-[200px] text-black"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 font-poppins">{errors.message}</p>
              )}
            </div>

            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-light text-charcoal font-poppins font-semibold text-lg py-7 tracking-wide uppercase transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Request a Quote"}
              </Button>
              {submitStatus === "success" && (
                <p className="text-green-500 text-sm mt-2 font-poppins text-center">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-sm mt-2 font-poppins text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LuxuryContact;
