"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function FilmGrain() {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-overlay"
      aria-hidden
    >
      <div className="film-grain h-full w-full" />
    </div>
  );
}
