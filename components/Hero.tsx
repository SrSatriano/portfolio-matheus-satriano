"use client";

import { VideoLayer } from "@/components/cinematic/VideoLayer";
import { MagneticLink } from "@/components/cinematic/MagneticLink";
import { cinematicVideos } from "@/data/media";
import { profile, projects } from "@/data/projects";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const consoleRows = [
  { label: "core", value: "LHN Sovereign V90" },
  { label: "runtime", value: "local-first" },
  { label: "risk", value: "drawdown guard" },
  { label: "docs", value: "pt-BR" },
];

const executionQueue = [
  "Order book C++ e matching mensurável",
  "Pricing AVX-512 com benchmark scalar vs SIMD",
  "RAG offline para dados sensíveis",
  "Painéis Next.js/FastAPI que eu mesmo opero",
];

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const Container = reduced ? "div" : motion.div;
  const containerProps = reduced
    ? {}
    : { variants: stagger, initial: "hidden", animate: "visible" };
  const itemProps = reduced ? {} : { variants: item };

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <VideoLayer
        src={cinematicVideos.hero.src}
        poster={cinematicVideos.hero.poster}
        overlay="hero"
        priority
      />

      <div className="letterbox-top" aria-hidden />
      <div className="letterbox-bottom" aria-hidden />

      {/* Área de leitura: scrim dedicado atrás do texto */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-full max-w-4xl bg-gradient-to-r from-ink/95 via-ink/75 to-transparent sm:w-[85%]"
        aria-hidden
      />

      <Container
        className="hero-readable relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20 lg:pb-16"
        {...containerProps}
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div>
            <motion.p
              className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-accent"
              {...itemProps}
            >
              LHN Sovereign V90 · trading & back-end
            </motion.p>

            <motion.h1
              className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-8xl text-shadow-cinema"
              {...itemProps}
            >
              {profile.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="text-gradient cinematic-glow">
                {profile.name.split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg text-slate-100 sm:text-xl text-shadow-cinema"
              {...itemProps}
            >
              <span className="font-medium text-white">{profile.role}</span>
              <span className="text-slate-300"> — </span>
              {profile.headline}
            </motion.p>

            <motion.p
              className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 text-shadow-cinema"
              {...itemProps}
            >
              {profile.bio}
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap gap-4" {...itemProps}>
              <MagneticLink
                href="#lhn-v90"
                className="glow-ring rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-ink"
              >
                LHN Sovereign V90
              </MagneticLink>
              <MagneticLink
                href="#showreel"
                className="rounded-full border border-white/30 bg-ink/60 px-7 py-3.5 text-sm text-white backdrop-blur-md"
              >
                Ver showreel
              </MagneticLink>
              <MagneticLink
                href="#projetos"
                className="rounded-full border border-white/25 bg-ink/50 px-7 py-3.5 text-sm text-slate-100 backdrop-blur-md"
              >
                +{projects.length} projetos
              </MagneticLink>
              <MagneticLink
                href={profile.linkedin}
                external
                className="rounded-full border border-white/25 bg-ink/50 px-7 py-3.5 text-sm text-slate-100 backdrop-blur-md"
              >
                LinkedIn
              </MagneticLink>
            </motion.div>

            <motion.dl
              className="mt-12 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4"
              {...itemProps}
            >
              {[
                { label: "Sistema HFT", value: "V90" },
                { label: "Repos OSS", value: "30" },
                { label: "Docs", value: "pt-BR" },
                { label: "Exchange", value: "Bybit" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300">
                    {s.label}
                  </dt>
                  <dd className="font-display mt-2 text-4xl font-bold text-white tabular-nums text-shadow-cinema">
                    {s.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.aside
            className="card-glass hidden overflow-hidden border-accent/20 bg-ink/65 backdrop-blur-2xl lg:block"
            {...itemProps}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
                  Operator console
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  leitura rápida do ecossistema
                </p>
              </div>
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-cinema-red" />
                <span className="h-2.5 w-2.5 rounded-full bg-cinema-gold" />
                <span className="h-2.5 w-2.5 rounded-full bg-mint" />
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {consoleRows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      {row.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-accent/15 bg-ink/75 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                    build queue
                  </p>
                  <span className="rounded-full bg-mint/10 px-2 py-1 font-mono text-[10px] text-mint">
                    Tier 1
                  </span>
                </div>
                <ol className="mt-3 space-y-2">
                  {executionQueue.map((entry, index) => (
                    <li key={entry} className="flex gap-3 text-sm text-slate-300">
                      <span className="font-mono text-[11px] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{entry}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                <span>mode: sovereign</span>
                <span className="text-accent">online</span>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div className="mt-10 flex justify-center" {...itemProps}>
          <a
            href="#showreel"
            className="flex flex-col items-center gap-2 text-slate-300 transition hover:text-accent"
            aria-label="Rolar para o showreel"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <span className="scroll-cue flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1">
              <span className="block h-2 w-1 rounded-full bg-accent animate-scroll-cue" />
            </span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
