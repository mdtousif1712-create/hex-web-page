"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "01",
    name: "The Executive Brief",
    story: "Forged from aerospace-grade aluminum and wrapped in full-grain Italian leather, the Executive Brief is a statement of intent. It protects your most valuable assets while projecting undeniable authority.",
    features: ["TSA-Approved Lock", "Shock-absorbent laptop sleeve", "Water-resistant exterior"],
    image: "/assets/images/asset_5.png",
  },
  {
    id: "02",
    name: "Nomad Duffle",
    story: "Designed for the spontaneous weekend escape. Its unstructured yet durable form allows for maximum capacity without compromising its sleek silhouette. Features custom gunmetal hardware.",
    features: ["Expandable capacity", "Hidden shoe compartment", "Ballistic nylon base"],
    image: "/assets/images/asset_6.png",
  },
];

const ProductRow = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={cn("flex flex-col gap-12 md:gap-24 items-center", isEven ? "md:flex-row" : "md:flex-row-reverse")}>
      {/* Image with Parallax */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative overflow-hidden bg-muted">
        <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8">
        <span className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Model {product.id}
        </span>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-8">
          {product.name}
        </h3>
        <p className="text-lg text-foreground/80 mb-12 text-pretty leading-relaxed">
          {product.story}
        </p>
        
        <div className="mb-12">
          <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-muted-foreground border-b border-border pb-2 inline-block">
            Key Features
          </h4>
          <ul className="flex flex-col gap-3">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-foreground/90">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <MagneticButton>Discover {product.name}</MagneticButton>
        </div>
      </div>
    </div>
  );
};

export function SignatureProducts() {
  return (
    <section id="products" className="py-16 md:py-32 overflow-hidden bg-background">
      <div className="w-full px-4 md:px-8">
        <div className="mb-16 md:mb-32 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
            Signature <br /> Series
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The foundation of the HEXING catalog. Uncompromising materials meeting unparalleled design.
          </p>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {products.map((product, i) => (
            <ProductRow key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
