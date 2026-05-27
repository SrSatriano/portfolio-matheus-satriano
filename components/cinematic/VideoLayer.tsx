"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useEffect, useRef, useState } from "react";

type VideoLayerProps = {
  src: string;
  poster?: string;
  className?: string;
  overlay?: "hero" | "section" | "card";
  priority?: boolean;
  paused?: boolean;
};

const overlays = {
  hero: "from-ink via-ink/75 to-ink/40",
  section: "from-ink/95 via-ink/80 to-ink/70",
  card: "from-ink/90 via-ink/85 to-ink/80",
};

export function VideoLayer({
  src,
  poster,
  className = "",
  overlay = "hero",
  priority = false,
  paused = false,
}: VideoLayerProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (paused) {
      el.pause();
      return;
    }
    const play = () => el.play().catch(() => undefined);
    play();
  }, [paused, reduced, src]);

  if (reduced) {
    return (
      <div
        className={`absolute inset-0 bg-gradient-to-b ${overlays[overlay]} ${className}`}
        style={
          poster
            ? {
                backgroundImage: `url(${poster})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
        aria-hidden
      />
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <video
        ref={ref}
        className={`h-full w-full object-cover transition-opacity duration-1000 ${
          ready ? "opacity-60" : "opacity-0"
        } scale-105 animate-ken-burns`}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        onCanPlay={() => setReady(true)}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b ${overlays[overlay]}`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#060a12_85%)]" />
    </div>
  );
}
