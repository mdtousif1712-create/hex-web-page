"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTA() {
  return (
    <section id="contact" className="relative py-48 bg-background flex flex-col items-center justify-center text-center px-8 border-b border-border overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
        viewport={{ once: true }}
        className="max-w-4xl flex flex-col items-center"
      >
        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.8] mb-12">
          Carry <br /> Confidence.
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-16 max-w-2xl text-balance">
          Join an exclusive group of individuals who refuse to compromise on what they carry every day.
        </p>

        <MagneticButton className="bg-primary text-primary-foreground hover:bg-secondary py-6 px-12 text-lg">
          Become a Patron
        </MagneticButton>
      </motion.div>
    </section>
  );
}
