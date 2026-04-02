import Link from "next/link";
import { legalLinks } from "@/lib/data";

const shopLinks = [
  { label: "Adinkra", href: "/collections?category=Adinkra" },
  { label: "Afrocentric", href: "/collections?category=Afrocentric" },
  { label: "Kente", href: "/collections?category=Kente" },
  { label: "Gift Packs", href: "/collections?category=Gift+Packs" },
];

export function SiteFooter() {
  return (
    <footer className="mt-32 w-full bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        {/* Glow effect at the top of the footer */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-chale-gold/30 to-transparent" />
       
      <div className="section-shell relative z-10 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            
          {/* Brand Column */}
          <div className="flex flex-col gap-6 md:pr-8">
            <Link
                href="/"
                className="font-headline text-2xl tracking-wide text-primary"
            >
                CHALÉ SOCKS
            </Link>
            <p className="text-sm font-light leading-relaxed text-primary/60">
              Premium socks designed in Ghana. Inspired by the World. Culture in every thread.
            </p>
            <p className="inline-flex items-center gap-2 mt-4 text-[11px] font-medium tracking-widest text-[#cfaa60] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#cfaa60]" />
              Product of Ghana
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-chale-gold mb-6">
              Shop Collections
            </h2>
            <ul className="space-y-4 text-[13px] font-light">
              {shopLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-primary/70 transition-colors hover:text-white flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-chale-gold transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-chale-gold mb-6">
              Support
            </h2>
            <ul className="space-y-4 text-[13px] font-light">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-primary/70 transition-colors hover:text-white flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-chale-gold transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-chale-gold mb-6">
              Join The Culture
            </h2>
            <p className="text-sm font-light leading-relaxed text-primary/60 mb-6">
              Exclusive drops, untold stories, and limited runs delivered directly to you.
            </p>
            <form className="flex flex-col gap-3" action="#" method="post">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="relative group">
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    className="w-full rounded-none border-b border-white/20 bg-transparent px-0 py-3 text-sm font-light text-primary outline-none placeholder:text-primary/40 transition-colors focus:border-chale-gold"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-chale-gold transition-all duration-500 group-focus-within:w-full" />
              </div>
              <button
                type="submit"
                className="mt-4 flex w-fit items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-primary transition-all hover:bg-white hover:text-black"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[10px] tracking-widest text-primary/40 uppercase">
                 © 2026 Chale Socks.
            </p>
            <div className="flex items-center gap-4 cursor-pointer">
                <span className="font-mono text-[10px] tracking-widest text-primary/40 uppercase hover:text-primary transition-colors">Instagram</span>
                <span className="font-mono text-[10px] tracking-widest text-primary/40 uppercase hover:text-primary transition-colors">Twitter</span>
            </div>
            <p className="font-mono text-[10px] tracking-widest text-primary/40 uppercase">
                Powered by ProBuild
            </p>
        </div>
      </div>
    </footer>
  );
}
