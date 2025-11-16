import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import work1 from "@/assets/work-1-commercial-new.webp";
import work2 from "@/assets/work-2-ceiling.png";
import work3 from "@/assets/work-3-stairwell.png";
import work4 from "@/assets/work-3-living.jpeg";
import work5 from "@/assets/work-5-kitchen.png";
import BaroqueOrnaments from "@/components/BaroqueOrnaments";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const projects = [
  { image: work1, title: "Commercial Excellence", category: "Office Spaces" },
  { image: work2, title: "Architectural Detail", category: "Residential" },
  { image: work3, title: "Refined Stairwell", category: "Residential" },
  { image: work4, title: "Contemporary Living", category: "Residential" },
  { image: work5, title: "Ceiling Artistry", category: "Commercial" },
];

const ProjectsShowcase = () => {
  const [current, setCurrent] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);

  const next = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const prev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-20 bg-[#141413] relative overflow-hidden">
      <BaroqueOrnaments variant="corner-flourish" position="top-left" opacity={0.2} />
      <BaroqueOrnaments variant="corner-flourish" position="bottom-right" opacity={0.18} />
      <BaroqueOrnaments variant="side-accent" position="right" opacity={0.12} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <p className="font-poppins text-gold text-sm tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-poppins text-4xl md:text-6xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Image with Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div 
                    onClick={() => setFullscreenImage(index)}
                    className="relative aspect-[4/5] md:aspect-[16/10] cursor-pointer group"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover md:object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white bg-gradient-to-t from-black/80 to-transparent">
                      <p className="font-poppins text-gold text-xs md:text-sm tracking-widest uppercase mb-1 md:mb-2">
                        {project.category}
                      </p>
                      <h3 className="font-poppins text-2xl md:text-3xl lg:text-5xl font-bold">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fullscreen Dialog */}
          <Dialog open={fullscreenImage !== null} onOpenChange={(open) => !open && setFullscreenImage(null)}>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-full h-full max-w-[100vw] max-h-[100vh] translate-x-[-50%] translate-y-[-50%] p-0 border-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                <button
                  onClick={() => setFullscreenImage(null)}
                  className="absolute top-4 left-4 z-50 w-10 h-10 flex items-center justify-center bg-gold/20 hover:bg-gold backdrop-blur-sm text-white hover:text-charcoal transition-all duration-300 rounded-sm"
                  aria-label="Close fullscreen view"
                >
                  <X size={24} />
                </button>
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  {fullscreenImage !== null && (
                    <img
                      src={projects[fullscreenImage].image}
                      alt={projects[fullscreenImage].title}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </Dialog>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gold/20 hover:bg-gold backdrop-blur-sm text-white hover:text-charcoal transition-all duration-300 items-center justify-center group z-10"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gold/20 hover:bg-gold backdrop-blur-sm text-white hover:text-charcoal transition-all duration-300 items-center justify-center group z-10"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 transition-all duration-300 ${
                  index === current ? "w-12 bg-gold" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
