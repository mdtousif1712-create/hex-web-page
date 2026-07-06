"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  "/assets/images/lookbook/img_1.png",
  "/assets/images/lookbook/img_2.png",
  "/assets/images/lookbook/img_4.png", // AiYo Tote
  "/assets/images/lookbook/img_3.png", // Sweater
  "/assets/images/lookbook/img_5.png",
  "/assets/images/lookbook/img_6.png",
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-[#0A0A0E] text-white overflow-hidden">
      <div className="w-full px-4 md:px-8 flex flex-col gap-24 md:gap-40">
        
        {/* Block 1: TRENDS / FUNKERS */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 relative">
          <div className="flex flex-col md:flex-row gap-8 w-full mt-24 md:mt-0">
            <motion.div style={{ y: yParallaxSlow }} className="relative w-full md:w-[45%] aspect-[3/4] rounded-3xl overflow-hidden">
              <Image src={images[0]} alt="Trends 1" fill className="object-cover" />
            </motion.div>
            <motion.div style={{ y: yParallaxFast }} className="relative w-full md:w-[55%] aspect-square md:aspect-auto md:h-[80%] mt-auto rounded-3xl overflow-hidden">
              <Image src={images[1]} alt="Trends 2" fill className="object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Block 2: TOTES */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 relative">
          <div className="flex flex-col md:flex-row gap-8 w-full mt-24 md:mt-0">
            <motion.div style={{ y: yParallaxFast }} className="relative w-full md:w-[55%] aspect-[4/5] rounded-3xl overflow-hidden">
              <Image src={images[2]} alt="Totes 1" fill className="object-cover" />
            </motion.div>
            <motion.div style={{ y: yParallaxSlow }} className="relative w-full md:w-[45%] aspect-[3/4] rounded-3xl overflow-hidden md:mt-16">
              <Image src={images[3]} alt="Totes 2" fill className="object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Block 3: LUXES / BREIFS */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 relative">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <motion.div style={{ y: yParallaxSlow }} className="relative w-full md:w-[45%] aspect-[3/4] rounded-3xl overflow-hidden">
              <Image src={images[4]} alt="Luxes 1" fill className="object-cover" />
            </motion.div>
            <motion.div style={{ y: yParallaxFast }} className="relative w-full md:w-[55%] aspect-[4/5] rounded-3xl overflow-hidden md:mt-24">
              <Image src={images[5]} alt="Luxes 2" fill className="object-cover" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
