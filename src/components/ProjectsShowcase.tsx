import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import img1 from "@/Latest content 2/3 colour.jpg";
import img2 from "@/Latest content 2/Bathroom.jpg";
import img3 from "@/Latest content 2/Black stairs.jpg";
import img4 from "@/Latest content 2/Front room.jpg";
import img5 from "@/Latest content 2/Pointy design.jpg";
import img6 from "@/Latest content 2/Wardrobe.jpg";
import img7 from "@/Latest content 2/bathroom 2.jpg";
import img8 from "@/Latest content 2/blue chair.jpg";
import img9 from "@/Latest content 2/white room 2.jpg";
import img10 from "@/Latest content 2/white room.jpg";
import work1 from "@/assets/work-1-commercial-new.webp";
import work2 from "@/assets/work-2-ceiling.png";
import work3 from "@/assets/work-3-stairwell.png";
import work4 from "@/assets/work-3-living.jpeg";
import work5 from "@/assets/work-5-kitchen.png";
import workOld1 from "@/assets/work-1.jpeg";
import workOld2 from "@/assets/work-2.jpeg";
import workOld3 from "@/assets/work-3.jpeg";
import workOld4 from "@/assets/work-4.jpeg";
import BaroqueOrnaments from "@/components/BaroqueOrnaments";

const projects = [
  { image: img6, title: "Luxury Storage", category: "Cabinetry" },
  { image: img7, title: "Luxury Bathroom", category: "Bathroom" },
  { image: img2, title: "Elegant Bathroom", category: "Residential" },
  { image: img3, title: "Architectural Stairs", category: "Interior Design" },
  { image: img4, title: "Classic Front Room", category: "Painting & Decorating" },
  { image: img5, title: "Refined Detailing", category: "Interior Design" },
  { image: img8, title: "Statement Piece", category: "Interior Design" },
  { image: img9, title: "Minimalist Space", category: "Residential" },
  { image: img10, title: "Luminous Interior", category: "Interior Design" },
  { image: img1, title: "Modern Transitions", category: "Interior Design" },
  { image: work1, title: "Commercial Excellence", category: "Office Spaces" },
  { image: work2, title: "Architectural Detail", category: "Residential" },
  { image: work3, title: "Refined Stairwell", category: "Residential" },
  { image: work4, title: "Contemporary Living", category: "Residential" },
  { image: work5, title: "Ceiling Artistry", category: "Commercial" },
  { image: workOld1, title: "Modern Office Space", category: "Commercial" },
  { image: workOld2, title: "Ornate Ceiling Design", category: "Decorative Finishes" },
  { image: workOld3, title: "Classic Staircase", category: "Residential" },
  { image: workOld4, title: "Warm Living Space", category: "Painting & Decorating" },
];

const ProjectsShowcase = () => {
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
            Our Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[9/16] md:aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Richmond interior design by Coopers Interiors`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay with info */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                <p className="font-poppins text-gold text-xs tracking-widest uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-poppins text-xl md:text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Subtle border accent */}
              <div className="absolute inset-0 border border-gold/0 transition-colors duration-500 group-hover:border-gold/20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
