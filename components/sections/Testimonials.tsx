"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "An absolute masterclass in minimalist design. It doesn't just carry my equipment; it elevates my entire daily uniform.",
    author: "Jonathan Ive",
    role: "Design Director",
  },
  {
    quote: "I've owned luxury bags that cost five times as much, yet none of them command the same presence or offer the same durability as HEXING.",
    author: "Sarah Chen",
    role: "Creative Executive",
  },
  {
    quote: "Finally, a brand that understands that utility and high-fashion are not mutually exclusive. The craftsmanship is flawless.",
    author: "Marcus Vance",
    role: "Global Nomad",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-32 bg-secondary text-secondary-foreground border-b border-white/5">
      <div className="w-full px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">
            Words From Our Patrons
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="glass p-12 flex flex-col justify-between"
            >
              <div className="text-4xl text-accent/20 mb-6">"</div>
              <p className="text-xl md:text-2xl font-light text-white text-pretty leading-relaxed mb-12 flex-1">
                {t.quote}
              </p>
              <div>
                <p className="text-sm font-bold tracking-widest uppercase text-white mb-1">
                  {t.author}
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-white/50">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
