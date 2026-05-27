"use client";

import { showreelScenes } from "@/data/media";
import { Reveal } from "@/components/cinematic/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

function ShowreelCard({
  scene,
  index,
  active,
  reduced,
  onSelect,
  videoRef,
}: {
  scene: (typeof showreelScenes)[number];
  index: number;
  active: boolean;
  reduced: boolean;
  onSelect: (i: number) => void;
  videoRef: (el: HTMLVideoElement | null) => void;
}) {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(index)}
      onMouseEnter={() => onSelect(index)}
      onFocus={() => onSelect(index)}
      className={`group relative aspect-[9/14] w-full overflow-hidden rounded-2xl border text-left transition-all duration-500 sm:aspect-[4/5] ${
        active
          ? "border-accent/60 glow-ring z-10 scale-[1.02]"
          : "border-white/15 opacity-90 hover:border-white/30"
      }`}
      whileHover={reduced ? undefined : { y: -6 }}
    >
      {/* Imagem de fundo — sempre visível */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${scene.poster})` }}
        aria-hidden
      />

      {!reduced && !videoFailed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            videoReady && active ? "opacity-90" : videoReady ? "opacity-55" : "opacity-0"
          }`}
          src={scene.src}
          poster={scene.poster}
          muted
          loop
          playsInline
          preload={active ? "auto" : "metadata"}
          onLoadedData={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        />
      )}

      {/* Legibilidade do texto no card */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/40 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent drop-shadow-md">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold text-white text-shadow-cinema">
          {scene.title}
        </h3>
        <p className="mt-2 text-sm text-slate-200 text-shadow-cinema">
          {scene.subtitle}
        </p>
      </div>

      <AnimatePresence>
        {active && (
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            className="absolute left-0 top-0 z-20 h-1 w-full origin-left bg-accent"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export function Showreel() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const selectScene = useCallback((index: number) => {
    setActive(index);
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) v.play().catch(() => undefined);
      else v.pause();
    });
  }, []);

  useEffect(() => {
    const first = videoRefs.current[0];
    if (first && !reduced) first.play().catch(() => undefined);
  }, [reduced]);

  return (
    <section
      id="showreel"
      className="relative scroll-mt-28 overflow-hidden border-y border-white/5 py-28"
    >
      <div className="absolute inset-0 bg-ink" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
            Cena 00 — Showreel
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            Três frentes do{" "}
            <span className="text-gradient">mesmo trabalho</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Mercado, IA e infra — passa o mouse nos painéis para ver cada uma em
            destaque.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {showreelScenes.map((scene, i) => (
            <Reveal key={scene.id} delay={i * 0.08}>
              <ShowreelCard
                scene={scene}
                index={i}
                active={active === i}
                reduced={reduced}
                onSelect={selectScene}
                videoRef={(el) => {
                  videoRefs.current[i] = el;
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
