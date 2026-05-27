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
  hero: "from-ink/95 via-ink/80 to-ink/30",
  section: "from-ink/95 via-ink/85 to-ink/75",
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
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || failed) return;
    if (paused) {
      el.pause();
      return;
    }
    el.play().catch(() => undefined);
  }, [paused, reduced, src, failed]);

  const posterStyle = poster
    ? {
        backgroundImage: `url(${poster})`,
        backgroundSize: "cover" as const,
        backgroundPosition: "center" as const,
      }
    : undefined;

  if (reduced) {
    return (
      <div
        className={`absolute inset-0 ${className}`}
        style={posterStyle}
        aria-hidden
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${overlays[overlay]}`} />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Poster sempre visível (fallback se o vídeo falhar) */}
      <div className="absolute inset-0 scale-105" style={posterStyle} />

      {!failed && (
        <video
          ref={ref}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-50" : "opacity-0"
          } scale-105 animate-ken-burns`}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          onCanPlay={() => setReady(true)}
          onError={() => setFailed(true)}
        />
      )}

      {/* Hero: vinheta forte à esquerda para o texto */}
      {overlay === "hero" && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20"
          aria-hidden
        />
      )}

      <div className={`absolute inset-0 bg-gradient-to-b ${overlays[overlay]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_40%,transparent_0%,#060a12_75%)]" />
    </div>
  );
}
