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
        className="hero-readable relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-24"
        {...containerProps}
      >
        <motion.p
          className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-accent"
          {...itemProps}
        >
          LHN Sovereign V90 · experiência cinematográfica
        </motion.p>

        <motion.h1
          className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-8xl text-shadow-cinema"
          {...itemProps}
        >
          {profile.name.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="text-gradient cinematic-glow">
            {profile.name.split(" ").slice(2).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-lg text-slate-100 sm:text-xl text-shadow-cinema"
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

        <motion.div className="mt-12 flex flex-wrap gap-4" {...itemProps}>
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
          className="mt-20 grid grid-cols-2 gap-8 border-t border-white/15 pt-12 sm:grid-cols-4"
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

        <motion.div className="mt-16 flex justify-center" {...itemProps}>
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
