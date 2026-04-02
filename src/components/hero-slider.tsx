"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { heroSlides } from "@/lib/data";
import { cn } from "@/lib/utils";

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : 70]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  const slide = heroSlides[active];

  return (
    <section className="full-bleed mt-6">
      <div className="blueprint-border relative mx-auto h-[min(72vh,820px)] max-w-[1600px] overflow-hidden rounded-none sm:rounded-3xl">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
        <div className="absolute bottom-0 left-0 max-w-2xl p-6 sm:p-10 md:p-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/85">
            Culture in Motion
          </p>
          <h1 className="mt-3 max-w-xl font-headline text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            STEP INTO THE CULTURE.
          </h1>
        </div>
        <div
          className="absolute bottom-6 right-6 flex gap-2 sm:bottom-10 sm:right-10"
          role="tablist"
          aria-label="Hero slides"
        >
          {heroSlides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              )}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
