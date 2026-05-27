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

export function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 overflow-hidden py-28">
      <VideoLayer
        src={cinematicVideos.about.src}
        overlay="section"
        className="opacity-40"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Cena 02 — Sobre
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            Engenharia com{" "}
            <span className="text-gradient">contexto de mercado</span>
          </h2>
          <p className="mt-6 max-w-2xl text-slate-300 leading-relaxed">
            Graduando em Ciência da Computação. Construo back-end, sistemas para
            mercados e IA com documentação em português — código que você clona,
            testa e opera com transparência sobre o que já está implementado.
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
      </div>
    </section>
  );
}
