"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Collections", href: "#collections" },
  { name: "About", href: "#manifesto" },
  { name: "Craftsmanship", href: "#craftsmanship" },
  { name: "Lookbook", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const linkVariants = {
  initial: { y: 0 },
  hover: { y: "-100%" },
};

export function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-700",
        scrolled ? "py-4 px-8 md:px-12" : "py-8 px-8 md:px-16"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700 -z-10",
          scrolled ? "opacity-100 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "opacity-0"
        )}
      />

      <Link href="/" className="text-2xl font-bold tracking-tighter uppercase z-10 flex items-center mix-blend-difference">
        HEXING
      </Link>

      <nav className="hidden md:flex items-center gap-10 z-10">
        {navLinks.map((link, i) => (
          <motion.div
            key={i}
            initial="initial"
            whileHover="hover"
            className="relative overflow-hidden flex flex-col items-center justify-start cursor-pointer"
          >
            <Link href={link.href} className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground">
              <motion.span
                variants={linkVariants}
                transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
                className="inline-block"
              >
                {link.name}
              </motion.span>
              <motion.span
                variants={linkVariants}
                transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
                className="absolute left-0 top-full inline-block"
              >
                {link.name}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden z-10 text-xs font-semibold tracking-widest uppercase mix-blend-difference">
        Menu
      </button>
    </motion.header>
  );
}
