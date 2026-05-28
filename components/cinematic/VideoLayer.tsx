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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [nearViewport, setNearViewport] = useState(priority);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (priority) return;

    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting || entry.intersectionRatio > 0;
        setNearViewport(visible);
        if (visible) setShouldLoad(true);
      },
      { rootMargin: "600px 0px", threshold: 0.01 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || reduced || failed) return;

    if (paused || !nearViewport) {
      el.pause();
      return;
    }

    el.play().catch(() => undefined);
  }, [paused, nearViewport, reduced, src, failed]);

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
        ref={wrapperRef}
        className={`absolute inset-0 ${className}`}
        style={posterStyle}
        aria-hidden
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${overlays[overlay]}`} />
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 scale-105" style={posterStyle} />

      {!failed && shouldLoad && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-50" : "opacity-0"
          } scale-105 animate-ken-burns`}
          src={src}
          poster={poster}
          autoPlay={priority}
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          onCanPlay={() => setReady(true)}
          onError={() => setFailed(true)}
        />
      )}

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
