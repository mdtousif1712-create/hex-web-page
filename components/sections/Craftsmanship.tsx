"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const stages = [
  {
    title: "Material Selection",
    desc: "Sourcing the world's finest full-grain leathers and aerospace-grade alloys.",
    image: "/assets/images/asset_7.png",
  },
  {
    title: "Precision Assembly",
    desc: "Stitched by master artisans with decades of experience, ensuring zero tolerance for error.",
    image: "/assets/images/asset_8.png",
  },
  {
    title: "The Final Polish",
    desc: "Every edge is hand-burnished, every zipper tested, every detail obsessed over.",
    image: "/assets/images/asset_9.png",
  }
];

export function Craftsmanship() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="craftsmanship" ref={containerRef} className="relative bg-secondary text-secondary-foreground flex flex-col md:flex-row">
      {/* Sticky Left - Title & Story */}
      <div className="md:sticky md:top-0 h-auto md:h-screen w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8 py-24 md:py-0 z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 text-white">
          The Obsession <br /> with Craft
        </h2>
        <p className="text-lg text-white/70 max-w-md text-pretty mb-12">
          We do not mass produce. Every HEXING piece is the result of a grueling 40-step manufacturing process. We combine age-old leatherworking techniques with modern precision engineering to create objects that endure.
        </p>
      </div>

      {/* Scrolling Right - Images & Stages */}
      <div className="w-full md:w-1/2 pb-32 md:pb-0">
        {stages.map((stage, i) => {
          return (
            <div key={i} className="h-screen flex flex-col justify-center px-4 md:px-8 py-12">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm mb-8">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="text-white">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50 block mb-2">Stage {i + 1}</span>
                <h3 className="text-3xl font-bold uppercase mb-4">{stage.title}</h3>
                <p className="text-white/70 max-w-sm">{stage.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
