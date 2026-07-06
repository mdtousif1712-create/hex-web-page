"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as any,
      delay: 0.2 + i * 0.1,
    },
  }),
};

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-end pb-24 md:pb-32 px-4 md:px-8 overflow-hidden bg-secondary">
      {/* Background Image with subtle parallax scaling on load */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] as any }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/images/asset_1.png"
          alt="Hexing Luxury Campaign"
          fill
          priority
          className="object-cover object-center grayscale-[0.2]"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="flex flex-col gap-4 w-full text-white">
          <motion.h1
            className="editorial-heading text-white flex flex-col"
          >
            <div className="overflow-hidden">
              <motion.span custom={0} variants={textVariants} initial="hidden" animate="visible" className="block">ENGINEERED</motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span custom={1} variants={textVariants} initial="hidden" animate="visible" className="block text-white/90">TO MOVE.</motion.span>
            </div>
          </motion.h1>

          <div className="overflow-hidden mt-4">
            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="editorial-subheading text-white/70 max-w-lg text-balance"
            >
              The pinnacle of modern carry. Crafted with precision for the global citizen who demands both utility and uncompromising elegance.
            </motion.p>
          </div>
        </div>

        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex shrink-0"
        >
          <MagneticButton className="bg-white text-black hover:bg-white/90 border border-white/20">
            Explore Collection
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
