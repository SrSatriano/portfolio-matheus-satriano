"use client";

import { VideoLayer } from "@/components/cinematic/VideoLayer";
import { Reveal } from "@/components/cinematic/Reveal";
import { MagneticLink } from "@/components/cinematic/MagneticLink";
import { cinematicVideos } from "@/data/media";
import { flagshipLHN, githubUrl } from "@/data/projects";
import { motion } from "framer-motion";

export function FlagshipLHN() {
  return (
    <section
      id="lhn-v90"
      className="relative scroll-mt-24 overflow-hidden border-y border-accent/20"
    >
      <VideoLayer
        src={cinematicVideos.lhn.src}
        poster={cinematicVideos.lhn.poster}
        overlay="section"
      />

      <div className="relative z-10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-mint">
                Sistema principal · HFT
              </span>
              <span className="font-mono text-xs text-slate-400">
                {flagshipLHN.license}
              </span>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                Cena 01 — Destaque
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl">
                {flagshipLHN.title}
              </h2>
              <p className="mt-3 text-xl text-accent">{flagshipLHN.subtitle}</p>
              <p className="mt-6 text-slate-300 leading-relaxed">
                {flagshipLHN.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {flagshipLHN.stack.slice(0, 6).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-white/10 bg-ink/55 px-2.5 py-1.5 font-mono text-[10px] text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <MagneticLink
                  href={flagshipLHN.url}
                  external
                  className="glow-ring rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-ink"
                >
                  Abrir no GitHub
                </MagneticLink>
                <MagneticLink
                  href={`${flagshipLHN.url}#pré-requisitos-e-instalação`}
                  external
                  className="rounded-full border border-white/25 bg-ink/40 px-6 py-3 text-sm text-white backdrop-blur-md"
                >
                  Guia de instalação
                </MagneticLink>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="card-glass p-4 backdrop-blur-xl">
                  <dt className="text-slate-500">Frontend</dt>
                  <dd className="mt-1 text-2xl text-accent">
                    :{flagshipLHN.ports.frontend}
                  </dd>
                </div>
                <div className="card-glass p-4 backdrop-blur-xl">
                  <dt className="text-slate-500">Backend API</dt>
                  <dd className="mt-1 text-2xl text-accent">
                    :{flagshipLHN.ports.backend}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 border-l border-mint/40 pl-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mint">
                  operador no controle
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  A arquitetura privilegia execução local, leitura de risco e
                  auditoria do fluxo antes de qualquer automação agressiva.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <motion.div
                className="card-glass glow-ring overflow-hidden backdrop-blur-xl"
                whileHover={{ scale: 1.01 }}
              >
                <div className="relative aspect-video overflow-hidden border-b border-white/10">
                  <video
                    className="h-full w-full object-cover opacity-80"
                    src={cinematicVideos.lhn.src}
                    poster={cinematicVideos.lhn.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(event) => {
                      event.currentTarget.play().catch(() => undefined);
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.pause();
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/30 opacity-0 transition hover:opacity-100">
                    <span className="font-mono text-xs uppercase tracking-widest text-white">
                      Preview · dados de mercado
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Arquitetura
                  </h3>
                  <pre className="mt-4 overflow-x-auto rounded-lg bg-ink/80 p-4 font-mono text-[11px] leading-relaxed text-slate-400">
{`Next.js (${flagshipLHN.ports.frontend})
    │ REST + WebSocket
    ▼
FastAPI · LHNSovereignV90Backend
    ├─ Bybit V5
    ├─ Keras / TensorFlow
    └─ RiskManager · Guardian`}
                  </pre>

                  <ul className="mt-6 space-y-2 text-sm text-slate-400">
                    {flagshipLHN.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-mint">▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="mt-12 text-center text-xs text-slate-500">
              <a
                href={githubUrl(flagshipLHN.slug)}
                className="text-accent hover:underline"
              >
                github.com/SrSatriano/{flagshipLHN.slug}
              </a>
              {" · "}PolyForm Noncommercial — não confundir com licença MIT dos
              módulos 01–30.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
