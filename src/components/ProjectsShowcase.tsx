import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import work1 from "@/assets/work-1-commercial-new.webp";
import work2 from "@/assets/work-2-ceiling.png";
import work3 from "@/assets/work-3-stairwell.png";
import work4 from "@/assets/work-3-living.jpeg";
import work5 from "@/assets/work-5-kitchen.png";
import videoResidential from "@/assets/video-residential.mp4";
import videoElegance from "@/assets/video-elegance.mp4";
import videoTimeless from "@/assets/video-timeless.mp4";
import videoSimplicity from "@/assets/video-simplicity.mp4";
import BaroqueOrnaments from "@/components/BaroqueOrnaments";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type MediaType = "images" | "videos";

const projects = [
  { image: work1, title: "Commercial Excellence", category: "Office Spaces" },
  { image: work2, title: "Architectural Detail", category: "Residential" },
  { image: work3, title: "Refined Stairwell", category: "Residential" },
  { image: work4, title: "Contemporary Living", category: "Residential" },
  { image: work5, title: "Ceiling Artistry", category: "Commercial" },
];

const videos = [
  { video: videoResidential, title: "Tranquil Living", category: "Residential" },
  { video: videoElegance, title: "Luxury Detailing", category: "Elegance" },
  { video: videoTimeless, title: "Filled With Character", category: "Timeless" },
  { video: videoSimplicity, title: "Space To Think", category: "Simplicity" },
];

const ProjectsShowcase = () => {
  const [mediaType, setMediaType] = useState<MediaType>("videos");
  const [current, setCurrent] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const fullscreenVideoRef = useRef<HTMLVideoElement | null>(null);

  const currentItems = mediaType === "images" ? projects : videos;

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

  // Reset carousel when switching media types
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
      setCurrent(0);
    }
    setPlayingVideos(new Set());
  }, [mediaType, emblaApi]);

  const toggleVideoPlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingVideos(prev => new Set(prev).add(index));
      } else {
        video.pause();
        setPlayingVideos(prev => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }
    }
  };

  const handleFullscreenOpen = (index: number) => {
    // Pause carousel video when opening fullscreen
    if (mediaType === "videos") {
      const video = videoRefs.current[index];
      if (video) video.pause();
      setPlayingVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }
    setFullscreenIndex(index);
  };

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
          
          {/* Media Type Toggle */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setMediaType("images")}
              className={`px-6 py-2 font-poppins text-sm tracking-wider uppercase transition-all duration-300 ${
                mediaType === "images"
                  ? "bg-gray-400 text-charcoal"
                  : "bg-gray-600/50 text-gray-300 hover:bg-gray-500/50"
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setMediaType("videos")}
              className={`px-6 py-2 font-poppins text-sm tracking-wider uppercase transition-all duration-300 ${
                mediaType === "videos"
                  ? "bg-gray-400 text-charcoal"
                  : "bg-gray-600/50 text-gray-300 hover:bg-gray-500/50"
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {currentItems.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div 
                    onClick={() => mediaType === "images" && handleFullscreenOpen(index)}
                    className={`relative aspect-[4/5] md:aspect-[16/10] group ${mediaType === "images" ? "cursor-pointer" : ""}`}
                  >
                    {mediaType === "images" ? (
                      <img
                        src={(item as typeof projects[0]).image}
                        alt={item.title}
                        className="w-full h-full object-cover md:object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <video
                          ref={el => videoRefs.current[index] = el}
                          src={(item as typeof videos[0]).video}
                          className="w-full h-full object-cover md:object-contain"
                          playsInline
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleVideoPlay(index);
                          }}
                        />
                        {/* Play Button Overlay */}
                        {!playingVideos.has(index) && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleVideoPlay(index);
                            }}
                            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300"
                          >
                            <div className="w-20 h-20 rounded-full bg-gray-400/90 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                              <Play size={36} className="text-charcoal ml-1" fill="currentColor" />
                            </div>
                          </button>
                        )}
                        {/* Fullscreen Button for Videos */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFullscreenOpen(index);
                          }}
                          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-600/80 hover:bg-gray-400 text-white hover:text-charcoal transition-all duration-300 rounded-sm z-10"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <polyline points="9 21 3 21 3 15"></polyline>
                            <line x1="21" y1="3" x2="14" y2="10"></line>
                            <line x1="3" y1="21" x2="10" y2="14"></line>
                          </svg>
                        </button>
                      </div>
                    )}
                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                      <p className="font-poppins text-gold text-xs md:text-sm tracking-widest uppercase mb-1 md:mb-2">
                        {item.category}
                      </p>
                      <h3 className="font-poppins text-2xl md:text-3xl lg:text-5xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fullscreen Dialog */}
          <DialogPrimitive.Root open={fullscreenIndex !== null} onOpenChange={(open) => !open && setFullscreenIndex(null)}>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-full h-full max-w-[100vw] max-h-[100vh] translate-x-[-50%] translate-y-[-50%] p-0 border-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                <button
                  onClick={() => setFullscreenIndex(null)}
                  className="absolute top-4 left-4 z-50 w-10 h-10 flex items-center justify-center bg-gray-600/80 hover:bg-gray-400 text-white hover:text-charcoal transition-all duration-300 rounded-sm outline-none focus:outline-none"
                  aria-label="Close fullscreen view"
                >
                  <X size={24} />
                </button>
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  {fullscreenIndex !== null && (
                    mediaType === "images" ? (
                      <img
                        src={(currentItems[fullscreenIndex] as typeof projects[0]).image}
                        alt={currentItems[fullscreenIndex].title}
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <video
                        ref={fullscreenVideoRef}
                        src={(currentItems[fullscreenIndex] as typeof videos[0]).video}
                        className="max-w-full max-h-full object-contain"
                        controls
                        playsInline
                      />
                    )
                  )}
                </div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gray-600/50 hover:bg-gray-400 backdrop-blur-sm text-white hover:text-charcoal transition-all duration-300 items-center justify-center group z-10"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gray-600/50 hover:bg-gray-400 backdrop-blur-sm text-white hover:text-charcoal transition-all duration-300 items-center justify-center group z-10"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {currentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 transition-all duration-300 ${
                  index === current ? "w-12 bg-gray-400" : "w-2 bg-muted"
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
