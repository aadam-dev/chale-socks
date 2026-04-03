"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        /* initial y + opacity caused visible "ghost" layers on some GPUs during
           hydration/first paint; opacity-only keeps SSR/client paint aligned. */
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduceMotion ? undefined : { opacity: 0 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.36, ease: [0.16, 1, 0.3, 1] }
        }
        className="relative z-10 flex-1 pb-20"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
