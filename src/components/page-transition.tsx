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
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.42, ease: [0.16, 1, 0.3, 1] }
        }
        className="relative z-10 flex-1 pb-20"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
