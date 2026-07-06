"use client";

import { motion } from "framer-motion";
import { Shield, Feather, Disc, Anchor } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Uncompromising Quality",
    desc: "Rigorous testing protocols ensure every piece withstands the demands of daily wear.",
  },
  {
    icon: <Feather className="w-6 h-6" />,
    title: "Minimalist Function",
    desc: "Stripped of the unnecessary. Every pocket and strap serves a specific, vital purpose.",
  },
  {
    icon: <Disc className="w-6 h-6" />,
    title: "Relentless Innovation",
    desc: "We constantly explore new materials and manufacturing techniques to push the boundaries of carry.",
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    title: "Lifetime Durability",
    desc: "Built not for seasons, but for decades. Our warranty is a promise of enduring value.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
};

export function WhyHexing() {
  return (
    <section className="py-16 md:py-32 bg-secondary text-secondary-foreground border-y border-white/5">
      <div className="w-full px-4 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">
            Why HEXING
          </h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-white text-balance max-w-3xl mx-auto">
            Design principles rooted in utility and elevated by aesthetics.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="glass p-8 flex flex-col items-center text-center group hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 text-pretty">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
