"use client";

import { CinematicField } from "@/components/cinematic/CinematicField";
import { MagneticLink } from "@/components/cinematic/MagneticLink";
import { Reveal } from "@/components/cinematic/Reveal";
import { flagshipLHN, githubUrl } from "@/data/projects";
import { motion } from "framer-motion";

const architecture = [
  {
    label: "Operator UI",
    value: `Next.js :${flagshipLHN.ports.frontend}`,
    detail: "painel, orderflow, heatmap, sinais e workspace",
  },
  {
    label: "Orquestrador",
    value: `FastAPI :${flagshipLHN.ports.backend}`,
    detail: "rotas, jobs assíncronos, estado e telemetria",
  },
  {
    label: "Market Edge",
    value: "Bybit V5",
    detail: "REST, WebSocket, fallback e normalização",
  },
  {
    label: "Core",
    value: "IA + RiskManager",
    detail: "forja Keras, replay, guardian e exposição",
  },
];

const controlLayers = [
  "O sistema nasce local: banco SQLite, workspace versionável e sidecars opcionais.",
  "Risco não é rodapé: drawdown, exposição, guardian shadow e logs entram no fluxo principal.",
  "A interface não tenta esconder complexidade: ela organiza sinais, status, módulos e decisões.",
];

function ArchitectureGraph() {
  const nodes = [
    ["Next.js", "operator surface", 48, 54],
    ["FastAPI", "orchestration", 246, 54],
    ["Core", "signals + risk", 386, 140],
    ["Bybit V5", "market edge", 474, 54],
    ["Workspace", "state + logs", 198, 228],
    ["IA Local", "replay / models", 420, 248],
  ] as const;

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-accent/15 bg-ink/80 p-5">
      <div className="absolute inset-0 dossier-grid opacity-45" />
      <svg viewBox="0 0 620 360" className="relative h-full min-h-[320px] w-full" aria-hidden>
        <defs>
          <linearGradient id="lhnRail" x1="0" x2="1">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.2" />
            <stop offset="0.55" stopColor="#22d3ee" stopOpacity="0.95" />
            <stop offset="1" stopColor="#34d399" stopOpacity="0.65" />
          </linearGradient>
        </defs>
        <path
          d="M88 92 H298 C346 92 346 178 394 178 H532"
          fill="none"
          stroke="url(#lhnRail)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M88 266 H260 C330 266 330 178 394 178"
          fill="none"
          stroke="rgba(255,255,255,.16)"
          strokeWidth="2"
          strokeDasharray="8 10"
          strokeLinecap="round"
        />
        <path
          d="M310 92 V266"
          fill="none"
          stroke="rgba(34,211,238,.2)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {nodes.map(([title, subtitle, x, y]) => (
          <g key={title}>
            <rect
              x={x}
              y={y}
              width="118"
              height="74"
              rx="10"
              fill="rgba(6,10,18,.88)"
              stroke="rgba(255,255,255,.14)"
            />
            <text
              x={x + 14}
              y={y + 31}
              fill="#f8fafc"
              fontSize="15"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
            >
              {title}
            </text>
            <text x={x + 14} y={y + 52} fill="#94a3b8" fontSize="11" fontFamily="monospace">
              {subtitle}
            </text>
          </g>
        ))}
      </svg>
      <div className="relative mt-3 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
        <span>fluxo operacional</span>
        <span className="text-mint">local-first</span>
      </div>
    </div>
  );
}

export function FlagshipLHN() {
  return (
    <section id="lhn-v90" className="section-rule relative scroll-mt-24 overflow-hidden">
      <CinematicField variant="section" />

      <div className="relative z-10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-mint">
                Sistema principal / source-available
              </span>
              <span className="font-mono text-xs text-slate-400">
                {flagshipLHN.license}
              </span>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1fr)] lg:items-center">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                Dossiê 01 / Sistema principal
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl">
                {flagshipLHN.title}
              </h2>
              <p className="mt-3 text-xl text-accent">{flagshipLHN.subtitle}</p>
              <p className="mt-6 text-slate-300 leading-relaxed">
                {flagshipLHN.tagline}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                O LHN é tratado como produto de pesquisa: cada módulo precisa
                explicar onde roda, como falha, como é observado e qual parte do
                fluxo ele protege. A estética do site segue essa lógica, mais
                parecida com sala de operação do que com vitrine genérica.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {flagshipLHN.stack.map((tool) => (
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
                  Abrir repositório
                </MagneticLink>
                <MagneticLink
                  href={`${flagshipLHN.url}#pré-requisitos-e-instalação`}
                  external
                  className="rounded-full border border-white/25 bg-ink/40 px-6 py-3 text-sm text-white backdrop-blur-md"
                >
                  Instalação
                </MagneticLink>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <motion.div
                className="dossier-panel overflow-hidden rounded-lg"
                whileHover={{ y: -4 }}
              >
                <div className="border-b border-white/10 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
                        arquitetura operacional
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                        Terminal, API, core, risco e estado no mesmo mapa.
                      </h3>
                    </div>
                    <span className="hidden rounded-full border border-mint/25 bg-mint/10 px-3 py-1 font-mono text-[10px] text-mint sm:inline-flex">
                      local-first
                    </span>
                  </div>
                </div>

                <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_0.8fr]">
                  <div className="p-5">
                    <ArchitectureGraph />

                    <ul className="mt-6 space-y-3 text-sm text-slate-400">
                      {flagshipLHN.features.slice(0, 5).map((feature) => (
                        <li key={feature} className="grid grid-cols-[18px_1fr] gap-2">
                          <span className="text-mint">/</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 xl:border-l xl:border-t-0">
                    <dl>
                      {architecture.map((row) => (
                        <div key={row.label} className="border-b border-white/10 p-5">
                          <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                            {row.label}
                          </dt>
                          <dd className="mt-2 font-display text-2xl font-semibold text-white">
                            {row.value}
                          </dd>
                          <p className="mt-1 text-xs leading-relaxed text-slate-500">
                            {row.detail}
                          </p>
                        </div>
                      ))}
                    </dl>

                    <div className="p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                        notas de projeto
                      </p>
                      <div className="mt-4 space-y-3">
                        {controlLayers.map((note, index) => (
                          <div key={note} className="rounded-lg border border-white/10 bg-white/[0.025] p-3">
                            <span className="font-mono text-[10px] text-slate-500">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                              {note}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="mt-12 text-center text-xs text-slate-500">
              <a href={githubUrl(flagshipLHN.slug)} className="text-accent hover:underline">
                github.com/SrSatriano/{flagshipLHN.slug}
              </a>
              {" · "}PolyForm Noncommercial, com módulos 01-30 em MIT quando aplicável.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
