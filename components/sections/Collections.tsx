"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const collections = [
  {
    id: 1,
    title: "The Core Collection",
    subtitle: "Everyday utility, refined.",
    image: "/assets/images/asset_2.png",
  },
  {
    id: 2,
    title: "Monolith Series",
    subtitle: "Structured for the journey.",
    image: "/assets/images/asset_3.png",
  },
  {
    id: 3,
    title: "Atelier Objects",
    subtitle: "Limited craftsmanship.",
    image: "/assets/images/asset_4.png",
  },
];

export function Collections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collections" className="py-32 px-4 md:px-8 max-w-[100vw] overflow-hidden bg-secondary text-secondary-foreground">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase"
          >
            Featured <br /> Collections
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <p className="max-w-sm text-secondary-foreground/70 text-balance mb-4">
              Explore our defining silhouettes, each crafted to serve a distinct purpose while maintaining a unified design language.
            </p>
            <button className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors">
              View All <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[70vh] min-h-[500px]">
          {collections.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative group cursor-pointer overflow-hidden rounded-sm"
            >
              {/* Background Image with slight scale up on hover */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/70 mb-2 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.subtitle}
                </p>
                <h3 className="text-3xl font-bold tracking-tight uppercase">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
