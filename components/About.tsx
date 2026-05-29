"use client";

import { CinematicField } from "@/components/cinematic/CinematicField";
import { Reveal } from "@/components/cinematic/Reveal";
import { engineeringLayers, focusDirections } from "@/data/readme-dossier";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Mercado, latência e risco",
    eyebrow: "01 / execução",
    text:
      "Order book, pricing AVX-512, terminais Rust e simulações de liquidez. O ponto não é só fazer rápido, é saber qual trecho do caminho crítico merece ficar rápido.",
    items: ["hot path medido", "orderflow e risco", "benchmarks reproduzíveis"],
  },
  {
    title: "IA local e auditável",
    eyebrow: "02 / inferência",
    text:
      "RAG offline, sidecars de LLM, replay e pipelines que preservam contexto sensível. Se o dado não precisa sair da máquina, a arquitetura é desenhada para ele ficar perto.",
    items: ["Ollama / ONNX", "FastAPI e filas", "privacidade por arquitetura"],
  },
  {
    title: "Produto que dá para operar",
    eyebrow: "03 / superfície",
    text:
      "Dashboards, APIs, READMEs e instrumentação para o projeto sobreviver depois do primeiro commit bonito. O sistema precisa mostrar estado, erro, limite e próximo passo.",
    items: ["Next.js", "observabilidade", "documentação em pt-BR"],
  },
];

const principles = [
  ["Soberania", "Menos dependência externa quando a estação local já resolve o problema."],
  ["Precisão", "Métrica, teste e benchmark antes de qualquer promessa de performance."],
  ["Operação", "Logs, portas, fluxos e estados explícitos para ninguém pilotar no escuro."],
  ["Clareza", "README como mapa de decisão, não como enfeite no rodapé do repositório."],
];

export function About() {
  return (
    <section id="sobre" className="section-rule relative scroll-mt-24 overflow-hidden py-28">
      <CinematicField variant="quiet" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                Dossiê 02 / Sobre
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
                Engenharia com cara de sala de operação, não de template.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-300">
              Faço Ciência da Computação e construo sistemas onde back-end,
              produto e infraestrutura se encontram: terminal quantitativo,
              pipelines de IA local, dashboards institucionais e módulos abertos
              para estudar mercado, Web3 e automação de ambiente.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <motion.article
                className="dossier-panel h-full rounded-lg p-6"
                whileHover={{
                  y: -4,
                  borderColor: "rgba(34, 211, 238, 0.35)",
                }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {pillar.text}
                </p>
                <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                  {pillar.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <span className="h-px w-5 bg-mint" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-16 grid gap-8 border-y border-white/10 py-10 lg:grid-cols-[360px_1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                princípios de engenharia
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                O que segura a estética por baixo.
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {principles.map(([label, text]) => (
                <div key={label}>
                  <h4 className="font-display text-lg font-semibold text-white">
                    {label}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                do README para a prática
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                O que aparece com frequência nos projetos.
              </h3>
              <div className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-ink-50/50">
                {focusDirections.map((item) => (
                  <div key={item.direction} className="border-b border-white/10 p-4 last:border-b-0">
                    <p className="font-display text-base font-semibold text-white">
                      {item.direction}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.code}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                tese de engenharia
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                Como eu monto sistemas que depois dão para operar.
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {engineeringLayers.map((layer) => (
                  <div key={layer.layer} className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                      {layer.layer}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {layer.preference}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
