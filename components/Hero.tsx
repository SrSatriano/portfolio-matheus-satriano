"use client";

import { CinematicField } from "@/components/cinematic/CinematicField";
import { MagneticLink } from "@/components/cinematic/MagneticLink";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { githubStats } from "@/data/github-inventory";
import { profile, projects } from "@/data/projects";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const readouts = [
  { label: "foco", value: "low latency" },
  { label: "modelo", value: "local-first" },
  { label: "surface", value: "back-end + produto" },
  { label: "arquivo", value: "30 módulos OSS" },
];

const dossier = [
  "Engenharia de sistemas para mercado, risco e inferência local.",
  "Arquiteturas que cabem em workstation antes de depender de nuvem.",
  "READMEs em português, demos rastreáveis e código organizado por tier.",
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
      <CinematicField variant="hero" />
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center opacity-50 mix-blend-screen saturate-[0.85]"
        style={{ backgroundImage: "url('images/quant-workstation-hero.png')" }}
        aria-hidden
      />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,#060a12_0%,rgba(6,10,18,.92)_34%,rgba(6,10,18,.58)_68%,rgba(6,10,18,.86)_100%)]" aria-hidden />
      <div className="letterbox-top" aria-hidden />
      <div className="letterbox-bottom" aria-hidden />

      <Container
        className="hero-readable relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-28 lg:pb-16"
        {...containerProps}
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center">
          <div>
            <motion.div
              className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.32em] text-accent"
              {...itemProps}
            >
              <span>MRS dossier</span>
              <span className="h-px w-10 bg-accent/40" />
              <span>HFT / IA local / Web3</span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-8xl text-shadow-cinema"
              {...itemProps}
            >
              {profile.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="text-gradient">
                {profile.name.split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-100 sm:text-xl text-shadow-cinema"
              {...itemProps}
            >
              Desenvolvedor back-end construindo infraestrutura quantitativa,
              IA local e ferramentas abertas com uma regra simples: se o dado
              não precisa sair da máquina, o sistema nasce perto dele.
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap gap-4" {...itemProps}>
              <MagneticLink
                href="#lhn-v90"
                className="glow-ring rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-ink"
              >
                Ler o dossiê LHN
              </MagneticLink>
              <MagneticLink
                href="#capitulos"
                className="rounded-full border border-white/25 bg-ink/60 px-7 py-3.5 text-sm text-white backdrop-blur-md"
              >
                Ver capítulos
              </MagneticLink>
              <MagneticLink
                href="#projetos"
                className="rounded-full border border-white/20 bg-ink/45 px-7 py-3.5 text-sm text-slate-100 backdrop-blur-md"
              >
                +{projects.length} repositórios
              </MagneticLink>
            </motion.div>

            <motion.dl
              className="mt-12 grid grid-cols-2 gap-5 border-t border-white/15 pt-8 sm:grid-cols-4"
              {...itemProps}
            >
              {[
                { label: "sistema", value: "V90" },
                { label: "públicos", value: String(githubStats.totalPublic) },
                { label: "módulos", value: String(projects.length) },
                { label: "docs", value: "pt-BR" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-4xl font-bold tabular-nums text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.aside
            className="dossier-panel hidden overflow-hidden rounded-lg lg:block"
            {...itemProps}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
                  Field console
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  sinais curtos do ecossistema
                </p>
              </div>
              <span className="rounded-full border border-mint/25 bg-mint/10 px-3 py-1 font-mono text-[10px] text-mint">
                online
              </span>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-2 gap-3">
                {readouts.map((row) => (
                  <div key={row.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      {row.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>

              <ol className="mt-5 space-y-3 rounded-lg border border-accent/15 bg-ink/70 p-4">
                {dossier.map((entry, index) => (
                  <li key={entry} className="grid grid-cols-[28px_1fr] gap-3 text-sm leading-relaxed text-slate-300">
                    <span className="font-mono text-[11px] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{entry}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-5 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                Latência, soberania e legibilidade acima de efeito visual.
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
