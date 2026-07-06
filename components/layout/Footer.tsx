import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-32 pb-8 px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-32">
        <div className="w-full md:w-1/3">
          <h3 className="text-sm font-semibold tracking-[0.3em] uppercase text-white/50 mb-8">
            Stay Connected
          </h3>
          <p className="text-white mb-8 max-w-sm text-balance">
            Subscribe to the HEXING dispatch for early access to limited releases and editorial content.
          </p>
          <div className="flex w-full border-b border-white/20 pb-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-none outline-none text-white w-full text-sm tracking-widest placeholder:text-white/30 uppercase" 
            />
            <button className="text-xs tracking-[0.2em] uppercase text-white hover:text-accent font-semibold transition-colors">
              Submit
            </button>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-16 md:justify-end">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">Explore</h4>
            <Link href="#collections" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Collections</Link>
            <Link href="#products" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Products</Link>
            <Link href="#craftsmanship" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Craftsmanship</Link>
            <Link href="#gallery" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Lookbook</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">Legal</h4>
            <Link href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Shipping & Returns</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">Social</h4>
            <Link href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Instagram</Link>
            <Link href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Twitter</Link>
            <Link href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">YouTube</Link>
          </div>
        </div>
      </div>

      {/* Massive Logo Footprint */}
      <div className="w-full flex justify-center items-center overflow-hidden pt-16 border-t border-white/10">
        <h1 className="text-[15vw] font-bold tracking-tighter uppercase leading-none text-white select-none">
          HEXING
        </h1>
      </div>

      <div className="w-full flex justify-between items-center mt-8 text-[10px] tracking-[0.2em] uppercase text-white/30">
        <span>© {new Date().getFullYear()} HEXING Inc.</span>
        <span>Tokyo, Japan</span>
      </div>
    </footer>
  );
}
