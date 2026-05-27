"use client";

import { showreelScenes } from "@/data/media";
import { Reveal } from "@/components/cinematic/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

export function Showreel() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const selectScene = useCallback(
    (index: number) => {
      setActive(index);
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        if (i === index) v.play().catch(() => undefined);
        else v.pause();
      });
    },
    []
  );

  return (
    <section
      id="showreel"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/5 py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-50/50 to-ink" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
            Cena 00 — Showreel
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            Três mundos,{" "}
            <span className="text-gradient">um ecossistema</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Passe o mouse ou toque nos painéis para alternar as cenas. Vídeos em
            loop — substitua por demos reais do LHN e dos repositórios quando
            quiser.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {showreelScenes.map((scene, i) => (
            <Reveal key={scene.id} delay={i * 0.08}>
              <motion.button
                type="button"
                onClick={() => selectScene(i)}
                onMouseEnter={() => !reduced && selectScene(i)}
                className={`group relative aspect-[9/14] w-full overflow-hidden rounded-2xl border text-left transition-all duration-500 sm:aspect-[4/5] ${
                  active === i
                    ? "border-accent/60 glow-ring scale-[1.02] z-10"
                    : "border-white/10 opacity-80 hover:border-white/25"
                }`}
                whileHover={reduced ? undefined : { y: -6 }}
                layout
              >
                {!reduced ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                    src={scene.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    autoPlay={i === 0}
                  />
                ) : (
                  <div className="absolute inset-0 bg-ink-100" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">
                    {scene.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{scene.subtitle}</p>
                </div>
                <AnimatePresence>
                  {active === i && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      className="absolute left-0 top-0 h-1 w-full origin-left bg-accent"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
          Vídeos: Mixkit · royalty-free · troque em data/media.ts
        </p>
      </div>
    </section>
  );
}
