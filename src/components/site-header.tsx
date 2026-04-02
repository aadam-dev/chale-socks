"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ShoppingBag, Search } from "lucide-react";
import { useCurrency } from "@/components/currency-provider";
import type { CurrencyCode } from "@/lib/currency";
import { cn } from "@/lib/utils";

const currencies: Array<{ code: CurrencyCode; label: string; flag: string }> = [
  { code: "USD", label: "US Dollar", flag: "🇺🇸" },
  { code: "GHS", label: "Ghana Cedi", flag: "🇬🇭" },
  { code: "EUR", label: "Euro", flag: "🇪🇺" },
  { code: "GBP", label: "British Pound", flag: "🇬🇧" },
];

const stylesLinks = [
  { label: "Adinkra", href: "/collections?category=Adinkra", desc: "Symbol-inspired patterns" },
  { label: "Afrocentric", href: "/collections?category=Afrocentric", desc: "Pan-African designs" },
  { label: "Kente", href: "/collections?category=Kente", desc: "Traditional Kente weaves" },
  { label: "Chalé Athletics", href: "/collections?category=Athletics", desc: "Performance streetwear" },
];

const giftsLinks = [
  { label: "Christmas Packages", href: "/collections?category=Christmas", desc: "Festive gift sets" },
  { label: "Socks Gift Packages", href: "/collections?category=Gift+Packs", desc: "Curated sock bundles" },
  { label: "Greeting Cards", href: "/collections?category=Cards", desc: "Cultural greeting cards" },
  { label: "Accessories", href: "/collections?category=Accessories", desc: "Complementary pieces" },
];

type DropdownKey = "styles" | "gifts" | "currency" | null;

export function SiteHeader() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const activeCurrency = currencies.find((c) => c.code === currency) ?? currencies[0];

  const toggle = (key: DropdownKey) =>
    setOpen((prev) => (prev === key ? null : key));

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 flex justify-center transition-all duration-500",
        scrolled ? "pt-2" : "pt-5"
      )}
    >
      <div className="section-shell w-full max-w-5xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-xl border border-white/10 px-6 py-3.5 backdrop-blur-xl transition-all duration-500",
            scrolled
              ? "bg-[#0f1114]/90 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
              : "bg-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-headline text-xl font-medium tracking-wider text-white shrink-0"
          >
            CHALÉ SOCKS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">

            {/* Styles Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle("styles")}
                aria-expanded={open === "styles"}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-4 py-2 text-[11px] font-medium uppercase tracking-widest transition-colors",
                  open === "styles" ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                Styles
                <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", open === "styles" && "rotate-180")} />
              </button>
              {open === "styles" && (
                <div className="absolute left-0 top-full mt-3 w-60 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1114]/95 shadow-2xl backdrop-blur-xl">
                  <div className="p-2">
                    {stylesLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(null)}
                        className="flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
                      >
                        <span className="text-[13px] font-medium text-white">{item.label}</span>
                        <span className="text-[11px] text-white/40">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Gifts Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle("gifts")}
                aria-expanded={open === "gifts"}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-4 py-2 text-[11px] font-medium uppercase tracking-widest transition-colors",
                  open === "gifts" ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                Gifts
                <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", open === "gifts" && "rotate-180")} />
              </button>
              {open === "gifts" && (
                <div className="absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1114]/95 shadow-2xl backdrop-blur-xl">
                  <div className="p-2">
                    {giftsLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(null)}
                        className="flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
                      >
                        <span className="text-[13px] font-medium text-white">{item.label}</span>
                        <span className="text-[11px] text-white/40">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/collections?category=Gye+Nyame"
              className="rounded-lg px-4 py-2 text-[11px] font-medium uppercase tracking-widest text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              Gye Nyame
            </Link>

            <Link
              href="/stories"
              className="rounded-lg px-4 py-2 text-[11px] font-medium uppercase tracking-widest text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              Blog
            </Link>
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center gap-3">
            <button aria-label="Search" className="hidden text-white/60 transition-colors hover:text-white md:flex">
              <Search className="h-4 w-4" />
            </button>

            {/* Currency Switcher */}
            <div className="relative hidden md:block">
              <button
                onClick={() => toggle("currency")}
                aria-expanded={open === "currency"}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-[11px] font-medium tracking-widest text-white/70 transition-all hover:border-white/20 hover:text-white"
              >
                <span>{activeCurrency.flag}</span>
                <span>{activeCurrency.code}</span>
                <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", open === "currency" && "rotate-180")} />
              </button>
              {open === "currency" && (
                <ul
                  role="listbox"
                  className="absolute right-0 top-full mt-3 w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1114]/95 py-2 shadow-2xl backdrop-blur-xl"
                >
                  {currencies.map((c) => (
                    <li key={c.code} role="option" aria-selected={c.code === currency}>
                      <button
                        onClick={() => { setCurrency(c.code); setOpen(null); }}
                        className={cn(
                          "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/5",
                          c.code === currency ? "text-white" : "text-white/60"
                        )}
                      >
                        <span className="text-base">{c.flag}</span>
                        <span className="text-[12px] uppercase tracking-wide">{c.code}</span>
                        <span className="ml-auto text-[10px] text-white/30">{c.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cart */}
            <button
              aria-label="Cart"
              className="relative flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] font-medium uppercase tracking-widest text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              <span className="hidden md:inline">Cart</span>
              <div className="relative">
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-chale-red text-[8px] font-bold text-white">
                  0
                </span>
              </div>
            </button>

            {/* Mobile Hamburger */}
            <button
              className="flex rounded-lg p-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="section-shell fixed left-1/2 top-[76px] z-50 w-full max-w-5xl -translate-x-1/2 px-4 md:hidden">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1114]/98 shadow-2xl backdrop-blur-2xl">
            <nav className="flex flex-col p-5" aria-label="Mobile navigation">
              <div className="mb-2">
                <p className="mb-1 px-3 text-[10px] uppercase tracking-widest text-white/30">Styles</p>
                {stylesLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-3 py-3 text-[14px] text-white/80 transition-colors hover:bg-white/5 hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="my-3 h-px bg-white/5" />
              <div className="mb-2">
                <p className="mb-1 px-3 text-[10px] uppercase tracking-widest text-white/30">Gifts</p>
                {giftsLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-3 py-3 text-[14px] text-white/80 transition-colors hover:bg-white/5 hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="my-3 h-px bg-white/5" />
              <Link href="/collections?category=Gye+Nyame" onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3 py-3 text-[14px] text-white/80 transition-colors hover:bg-white/5 hover:text-white">
                Gye Nyame Collection
              </Link>
              <Link href="/stories" onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3 py-3 text-[14px] text-white/80 transition-colors hover:bg-white/5 hover:text-white">
                Blog
              </Link>
              <div className="my-3 h-px bg-white/5" />
              {/* Currency Switcher Mobile */}
              <div className="flex flex-wrap gap-2 px-3 py-2">
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => { setCurrency(c.code); setMobileOpen(false); }}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-all",
                      c.code === currency
                        ? "border-white/30 bg-white/10 text-white"
                        : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
                    )}
                  >
                    {c.flag} {c.code}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
