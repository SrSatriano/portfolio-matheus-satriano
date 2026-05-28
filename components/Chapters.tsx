"use client";

import { CinematicField } from "@/components/cinematic/CinematicField";
import { Reveal } from "@/components/cinematic/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const chapters = [
  {
    id: "market",
    title: "Mercado em baixa latência",
    label: "Capítulo 01",
    summary:
      "Order books, pricing SIMD, terminais Rust e simulações para entender o caminho crítico antes de automatizar.",
    detail:
      "A prioridade é medir o hot path: estrutura de dados, serialização, risco e observabilidade precisam aparecer no README e no benchmark.",
    signal: "C++ / Rust / AVX-512",
  },
  {
    id: "local-ai",
    title: "IA perto dos dados",
    label: "Capítulo 02",
    summary:
      "RAG offline, inferência local e pipelines que tratam privacidade como decisão de arquitetura.",
    detail:
      "O objetivo não é chamar API por hábito. O modelo entra quando agrega decisão, auditoria ou automação sem exportar contexto sensível.",
    signal: "Ollama / FastAPI / ONNX",
  },
  {
    id: "product",
    title: "Produto operável",
    label: "Capítulo 03",
    summary:
      "Dashboards, APIs e documentação que deixam claro como rodar, testar e evoluir cada módulo.",
    detail:
      "O portfólio não é vitrine vazia: cada card aponta para código, escopo, estado de maturidade e trade-offs reais.",
    signal: "Next.js / APIs / README",
  },
  {
    id: "infra",
    title: "Infra soberana",
    label: "Capítulo 04",
    summary:
      "Automação, GitOps, eBPF, logs e provisionamento para manter sistemas visíveis depois do primeiro deploy.",
    detail:
      "A stack precisa explicar o que quebra, como observar, como recuperar e onde o sistema guarda seu estado.",
    signal: "Docker / eBPF / Ansible",
  },
];

function ChapterTrace({ active }: { active: number }) {
  return (
    <svg viewBox="0 0 780 240" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="chapterLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.15" />
          <stop offset="0.55" stopColor="#22d3ee" stopOpacity="0.85" />
          <stop offset="1" stopColor="#34d399" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <path
        d="M28 174 C126 112 194 152 272 98 C354 42 434 116 500 74 C590 16 650 80 748 42"
        fill="none"
        stroke="url(#chapterLine)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M28 204 C132 190 188 214 280 172 C382 126 466 162 558 118 C650 78 698 90 748 70"
        fill="none"
        stroke="rgba(255,255,255,.16)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="8 12"
      />
      {chapters.map((chapter, index) => {
        const x = 80 + index * 190;
        const y = [162, 105, 78, 55][index];
        const selected = active === index;
        return (
          <g key={chapter.id}>
            <line x1={x} x2={x} y1="38" y2="205" stroke="rgba(255,255,255,.08)" />
            <circle
              cx={x}
              cy={y}
              r={selected ? 13 : 8}
              fill={selected ? "#22d3ee" : "#08111d"}
              stroke={selected ? "#67e8f9" : "rgba(255,255,255,.35)"}
              strokeWidth="2"
            />
            <text x={x - 22} y="224" fill={selected ? "#e2faff" : "#64748b"} fontSize="12" fontFamily="monospace">
              {String(index + 1).padStart(2, "0")}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function Chapters() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const chapter = useMemo(() => chapters[active], [active]);

  return (
    <section id="capitulos" className="section-rule relative scroll-mt-28 overflow-hidden py-28">
      <CinematicField variant="quiet" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
                Capítulos do sistema
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold text-white sm:text-5xl">
                Um portfólio com ritmo de dossiê, não de trailer genérico.
              </h2>
            </div>
            <p className="text-slate-300">
              Cada frente abre uma cena técnica: o que foi construído, por que
              existe e como o repositório prova a maturidade do trabalho.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="dossier-panel mt-12 grid overflow-hidden rounded-lg lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="relative min-h-[330px] border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
              <ChapterTrace active={active} />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500 lg:left-8 lg:right-8">
                <span>timeline técnico</span>
                <span>{chapter.signal}</span>
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={chapter.id}
                  initial={reduced ? undefined : { opacity: 0, y: 12 }}
                  animate={reduced ? undefined : { opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    {chapter.label}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                    {chapter.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-slate-300">
                    {chapter.summary}
                  </p>
                  <p className="mt-4 border-l border-mint/40 pl-4 text-sm leading-relaxed text-slate-400">
                    {chapter.detail}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {chapters.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={`rounded-lg border px-4 py-4 text-left transition ${
                active === index
                  ? "border-accent/60 bg-accent/10 text-white"
                  : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-accent/35 hover:text-white"
              }`}
              aria-pressed={active === index}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                {item.label}
              </span>
              <span className="mt-2 block font-display text-lg font-semibold">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
