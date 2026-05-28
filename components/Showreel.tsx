"use client";

import { Reveal } from "@/components/cinematic/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { showreelScenes } from "@/data/media";
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
      className={`group relative aspect-[9/13] w-full overflow-hidden rounded-2xl border text-left transition-all duration-500 sm:aspect-[4/5] ${
        active
          ? "border-accent/60 glow-ring z-10 scale-[1.02]"
          : "border-white/15 opacity-90 hover:border-white/30"
      }`}
      whileHover={reduced ? undefined : { y: -6 }}
      aria-pressed={active}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(34,211,238,0.22),transparent_34%),linear-gradient(135deg,rgba(20,184,166,0.14),rgba(6,10,18,0.92)_62%)]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${scene.poster})` }}
        aria-hidden
      />

      {!reduced && !videoFailed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            videoReady && active ? "opacity-95" : videoReady ? "opacity-50" : "opacity-0"
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

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/35 via-transparent to-transparent" />

      <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-ink/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-300 backdrop-blur-md">
        Cena {String(index + 1).padStart(2, "0")}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <h3 className="font-display text-lg font-semibold text-white text-shadow-cinema lg:text-xl">
          {scene.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-200 text-shadow-cinema">
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
    videoRefs.current.forEach((video, videoIndex) => {
      if (!video) return;
      if (videoIndex === index) video.play().catch(() => undefined);
      else video.pause();
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
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
                Cena 00 - Showreel
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
                Cinco cenas para entrar no{" "}
                <span className="text-gradient">ecossistema</span>
              </h2>
            </div>
            <p className="max-w-xl text-slate-300">
              Vídeos curtos, silenciosos e interativos: toque ou passe o mouse
              para destacar uma frente sem tirar o foco do conteúdo técnico.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {showreelScenes.map((scene, index) => (
            <Reveal key={scene.id} delay={index * 0.06}>
              <ShowreelCard
                scene={scene}
                index={index}
                active={active === index}
                reduced={reduced}
                onSelect={selectScene}
                videoRef={(el) => {
                  videoRefs.current[index] = el;
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
