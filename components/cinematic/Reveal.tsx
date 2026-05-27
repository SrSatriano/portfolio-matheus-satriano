"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const Component = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...(typeof variants.visible === "object" &&
            variants.visible !== null &&
            "transition" in variants.visible
              ? variants.visible.transition
              : {}),
            delay,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}
