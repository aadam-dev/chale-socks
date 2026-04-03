"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/** Curated packaging photography — committed under `public/assets/`. */
const GIFT_IMAGE = "/assets/gift-packaging.jpg";

export function GiftSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell mt-16 md:mt-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-64px" }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
        }
        className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#1c1f24] shadow-[0_32px_90px_rgba(0,0,0,0.4)] md:grid md:min-h-[min(420px,52vh)] md:grid-cols-[1fr_1.12fr]"
      >
        {/* Copy — same voice as hero: display type, glass-adjacent CTA */}
        <div className="flex flex-col justify-center px-8 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-chale-gold">
            Gifting
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,4vw,2.75rem)] font-normal leading-[1.08] tracking-tight text-white">
            Gifts That Speak Volumes.
          </h2>
          <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-white/45">
            Curated sets in signature boxes — made to impress before they ever try the socks on.
          </p>
          <Link
            href="/collections?category=Gift+Packs"
            className="mt-9 inline-flex h-11 w-fit items-center justify-center rounded-md border border-white/20 bg-white/5 px-8 text-[12px] font-light tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-chale-gold/40 hover:text-white"
          >
            Shop Gift Packs
          </Link>
        </div>

        {/* Gallery panel — warm neutral “wall” (Coconut-adjacent) so box colours stay loud */}
        <div className="relative min-h-[280px] border-t border-white/[0.06] bg-[#f4f3f0] md:min-h-full md:border-l md:border-t-0">
          <div className="absolute inset-0 p-6 md:p-8 lg:p-10">
            <div className="relative h-full min-h-[220px] w-full md:min-h-[300px]">
              <Image
                src={GIFT_IMAGE}
                alt="Chale Socks gift boxes — assorted packaging"
                fill
                sizes="(max-width: 768px) 100vw, 56vw"
                className="object-contain object-center"
                priority={false}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
