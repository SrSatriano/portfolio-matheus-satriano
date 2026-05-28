"use client";

import { VideoLayer } from "@/components/cinematic/VideoLayer";
import { Reveal } from "@/components/cinematic/Reveal";
import { cinematicVideos } from "@/data/media";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Mercados & HFT",
    items: [
      "LHN Sovereign V90 — terminal Bybit + IA",
      "Order book e matching em C++",
      "Precificação AVX-512 e terminais Rust",
    ],
  },
  {
    title: "IA local & confiável",
    items: [
      "RAG offline com Ollama",
      "Clusters de inferência",
      "Pipelines de mídia e QA de LLMs",
    ],
  },
  {
    title: "Web3 & Brasil",
    items: [
      "Solidity e provas ZK",
      "OCR fiscal e tax harvest",
      "SaaS B2B e analytics",
    ],
  },
];

const principles = [
  {
    label: "Local-first",
    text: "Se não precisa sair da máquina, eu projeto para rodar perto dos dados.",
  },
  {
    label: "Mensurável",
    text: "Benchmark, teste e observabilidade entram antes de chamar algo de pronto.",
  },
  {
    label: "Operável",
    text: "API, painel, logs e documentação precisam servir para usar o sistema depois.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 overflow-hidden py-28">
      <VideoLayer
        src={cinematicVideos.about.src}
        poster={cinematicVideos.about.poster}
        overlay="section"
        className="opacity-40"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Cena 02 — Sobre
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            O que eu{" "}
            <span className="text-gradient">costumo construir</span>
          </h2>
          <p className="mt-6 max-w-2xl text-slate-300 leading-relaxed">
            Faço Ciência da Computação e vivo de back-end: mercado, latência,
            IA rodando local. Documento em português porque é assim que eu
            reviso — e deixo no README o que já está pronto e o que ainda vou
            codar.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.article
                className="card-glass h-full p-6 backdrop-blur-xl"
                whileHover={{
                  y: -4,
                  borderColor: "rgba(34, 211, 238, 0.35)",
                }}
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <ul className="mt-5 space-y-2 text-sm text-slate-400">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-mint">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-14 border-y border-white/10 py-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
              Como eu penso sistema
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.label}>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {principle.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
