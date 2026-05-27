"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-accent-dim via-accent to-mint shadow-[0_0_12px_rgba(34,211,238,0.6)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
