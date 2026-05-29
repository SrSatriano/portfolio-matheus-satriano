"use client";

import { Reveal } from "@/components/cinematic/Reveal";
import { stackDossierGroups } from "@/data/readme-dossier";
import { motion } from "framer-motion";

const modes = [
  {
    title: "Core de performance",
    desc: "C++, Rust, SIMD e estruturas de dados quando o gargalo é latência.",
    tools: ["C++20", "Rust", "AVX-512", "Ratatui"],
  },
  {
    title: "Produto operável",
    desc: "APIs, dashboards e contratos claros para transformar motor em sistema.",
    tools: ["FastAPI", "Next.js", "OpenAPI", "PostgreSQL"],
  },
  {
    title: "IA e infra soberana",
    desc: "Modelos locais, automação e observabilidade sem depender de nuvem por padrão.",
    tools: ["Ollama", "Docker", "Ansible", "eBPF"],
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-y border-white/5 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Arsenal — Stack
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            Ferramentas do dia a dia
          </h2>
          <p className="mt-6 max-w-2xl text-slate-400">
            A stack muda conforme o problema: baixa latência no core, clareza no
            produto, controle na operação e IA perto dos dados.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {modes.map((mode, i) => (
            <Reveal key={mode.title} delay={i * 0.08}>
              <motion.article
                className="h-full border-l border-accent/30 bg-gradient-to-r from-accent/10 to-transparent p-5"
                whileHover={{ x: 4 }}
              >
                <h3 className="font-display text-xl font-semibold text-white">
                  {mode.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {mode.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {mode.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-white/10 bg-ink/70 px-2 py-1 font-mono text-[10px] text-accent"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {stackDossierGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.06}>
              <div>
                <h3 className="font-mono text-sm text-accent">{g.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <motion.li
                      key={item}
                      className="rounded-lg border border-white/10 bg-ink-50/80 px-3 py-1.5 text-sm text-slate-300"
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(34, 211, 238, 0.4)",
                        color: "#fff",
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
