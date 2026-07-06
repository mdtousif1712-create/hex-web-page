"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const stats = [
  { label: "Countries", value: 34, suffix: "+" },
  { label: "Products", value: 120, suffix: "" },
  { label: "Customers", value: 50, suffix: "k+" },
  { label: "Projects", value: 8, suffix: "" },
];

const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue}</span>;
};

export function BrandStats() {
  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="w-full px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
