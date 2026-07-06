"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="manifesto" 
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center py-32 px-4 md:px-8 overflow-hidden bg-background"
    >
      <motion.div 
        style={{ y: y1, opacity }}
        className="max-w-5xl mx-auto flex flex-col items-center text-center gap-12"
      >
        <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground">
          The Philosophy
        </p>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-foreground text-balance">
          We believe that true luxury is <span className="font-bold italic">quiet</span>. It doesn&apos;t shout for attention. It reveals itself through meticulous craftsmanship, obsessive attention to detail, and a timeless form factor designed to outlast passing trends.
        </h2>
        
        <div className="w-px h-24 bg-border mt-8" />
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty font-light">
          Founded in Tokyo, HEXING bridges the gap between high-fashion aesthetics and uncompromising daily utility. Every stitch, zipper, and fold is an intentional decision to elevate how you carry your world.
        </p>
      </motion.div>
    </section>
  );
}
