"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useCurrency } from "@/components/currency-provider";
import type { Product } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const [showStory, setShowStory] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { price } = useCurrency();
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-[2rem] bg-[#121212]/50 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-white/5"
    >
      <Link href={`/product/${product.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chale-gold rounded-[2rem]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 opacity-60 mix-blend-multiply" />
          <Image
            src={hovered ? product.lifestyleImage : product.studioImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="relative z-20 p-6 pt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-chale-gold">
            {product.category}
            </p>
            <button
                type="button"
                aria-expanded={showStory}
                aria-label="Story behind this pattern"
                className="text-primary/50 hover:text-chale-gold transition-colors p-1"
                onClick={(e) => {
                e.preventDefault();
                setShowStory((v) => !v);
                }}
            >
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
            </button>
        </div>

        <Link href={`/product/${product.slug}`} className="min-w-0 group/title flex flex-col gap-1">
            <h3 className="font-headline truncate text-xl font-medium tracking-tight text-primary transition-colors group-hover/title:text-chale-gold">
                {product.name}
            </h3>
            <p className="text-[15px] font-light text-primary/70 tabular-nums">{price(product.priceUsd)}</p>
        </Link>
      </div>

      <div
        className={cn(
          "absolute inset-x-3 bottom-3 z-30 rounded-2xl glass-panel bg-black/80 px-4 py-4 text-xs leading-relaxed text-primary/90 shadow-2xl transition-all duration-500 transform",
          showStory ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
        )}
        role="status"
      >
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-chale-gold">
               <Sparkles className="h-3 w-3" />
               <span className="text-[10px] uppercase tracking-widest font-bold">The Story</span>
            </div>
            <p className="font-light">{product.storyBadge}</p>
        </div>
      </div>
    </motion.article>
  );
}
