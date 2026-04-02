"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BentoGrid } from "@/components/bento-grid";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO — matches reference design exactly
      ═══════════════════════════════════════════════ */}
      <section className="relative flex min-h-[calc(100vh-80px)] w-full items-center overflow-hidden bg-[#1a1d21]">
        <div className="section-shell max-w-5xl w-full">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">

            {/* Left — Text, CTA, Social */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col py-16 text-center md:text-left"
            >
              <h1 className="font-headline text-[clamp(3.5rem,8vw,6rem)] leading-[1.04] tracking-tight text-white">
                <span className="block">Elevate</span>
                <span className="block">Your Sole.</span>
              </h1>

              <div className="mt-10 flex justify-center md:justify-start">
                <Link
                  href="/collections"
                  className="inline-flex h-11 w-48 items-center justify-center rounded-md border border-white/20 bg-[#232629] text-[13px] font-light tracking-wider text-white shadow-inner transition-all duration-300 hover:border-white/30 hover:bg-[#2a2d32]"
                >
                  Shop Now
                </Link>
              </div>

              {/* Footer tag — bottom of left column */}
              <div className="mt-20 flex flex-col gap-4 items-center md:items-start">
                <p className="text-[11px] font-light tracking-wide text-white/40">
                  Chale Socks © 2026. Worldwide Shipping.
                </p>
                <div className="flex items-center gap-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/chalesocks"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-white/40 transition-colors hover:text-white"
                  >
                    <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* Twitter / X */}
                  <a
                    href="https://twitter.com/chalesocks"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-white/40 transition-colors hover:text-white"
                  >
                    <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right — The hero image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-[560px] items-center justify-center md:h-[680px]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
                {/* Kente socks on carved wooden Ashanti stool — the signature hero shot */}
                <Image
                  src="https://chalesocks.com/wp-content/uploads/2023/07/kwvsb2.jpg"
                  alt="Kente Waves socks draped on an Ashanti stool — Chalé Socks"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  onError={(e) => {
                    // Fallback to another known lifestyle shot
                    (e.target as HTMLImageElement).src =
                      "https://chalesocks.com/wp-content/uploads/2023/03/IMG_8044.jpg";
                  }}
                />
                {/* Subtle bottom vignette to blend into page */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d21]/30 via-transparent to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CURATED COLLECTIONS
      ═══════════════════════════════════════════════ */}
      <div className="mt-24 md:mt-32">
        <BentoGrid />
      </div>

      {/* ═══════════════════════════════════════════════
          BRAND PARTNERS STRIP
      ═══════════════════════════════════════════════ */}
      <section className="section-shell mt-20 max-w-5xl">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Brand Family</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { name: "OneChale", href: "https://onechale.com" },
              { name: "Chale Clothing", href: "#" },
              { name: "Gye Nyame Collection", href: "/collections?category=Gye+Nyame" },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target={partner.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="font-headline text-lg font-medium tracking-wide text-white/25 transition-colors duration-300 hover:text-white/70"
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          EVERY SOCK HAS A SOUL — Ethos CTA
      ═══════════════════════════════════════════════ */}
      <section className="section-shell mt-20 max-w-5xl mb-32">
        <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#0f1114]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#cfaa60]/5 via-transparent to-transparent" />
          <div className="relative z-10 px-8 py-20 text-center md:px-20">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-[#cfaa60]">
              Ethos & Archives
            </p>
            <h2 className="font-headline text-4xl font-medium tracking-tight text-white md:text-5xl">
              Every Sock Has a Soul
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-loose text-white/50">
              Explore pattern meanings, proverbs, and cultural origins. Chalé means buddy, or
              friend — an invitation to step into something greater.
            </p>
            <Link
              href="/stories"
              className="mt-10 inline-flex items-center justify-center rounded-full border border-white/15 px-10 py-4 text-[11px] font-medium uppercase tracking-widest text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              Discover The Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
