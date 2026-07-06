import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Collections } from "@/components/sections/Collections";
import { SignatureProducts } from "@/components/sections/SignatureProducts";
import { Craftsmanship } from "@/components/sections/Craftsmanship";
import { Gallery } from "@/components/sections/Gallery";
import { WhyHexing } from "@/components/sections/WhyHexing";
import { BrandStats } from "@/components/sections/BrandStats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "HEXING | Luxury Carry Objects",
  description: "The pinnacle of modern carry. Crafted with precision for the global citizen who demands both utility and uncompromising elegance.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />
      
      <Hero />
      <Manifesto />
      <Collections />
      <SignatureProducts />
      <Craftsmanship />
      <Gallery />
      <WhyHexing />
      <BrandStats />
      <Testimonials />
      <CTA />
      
      <Footer />
    </main>
  );
}
