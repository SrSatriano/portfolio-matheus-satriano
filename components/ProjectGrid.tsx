"use client";

import {
  CATEGORY_LABELS,
  type Category,
  projects,
} from "@/data/projects";
import { Reveal } from "@/components/cinematic/Reveal";
import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

type GridFilter = "all" | Category | "demo";

const filters: Array<{ key: GridFilter; label: string; description: string }> = [
  {
    key: "all",
    label: "Todos",
    description: "Visão completa dos módulos publicados.",
  },
  {
    key: "demo",
    label: "Com demo",
    description: "Projetos com núcleo executável e testes automatizados.",
  },
  {
    key: "hft",
    label: CATEGORY_LABELS.hft,
    description: "Mercado, matching, pricing, risco e simulação.",
  },
  {
    key: "ai",
    label: CATEGORY_LABELS.ai,
    description: "RAG offline, inferência, mídia e avaliação de LLMs.",
  },
  {
    key: "web3",
    label: CATEGORY_LABELS.web3,
    description: "Contratos, ZK, libp2p, MEV educacional e ledgers.",
  },
  {
    key: "product",
    label: CATEGORY_LABELS.product,
    description: "Dashboards, SaaS, OCR fiscal e produto para uso real.",
  },
  {
    key: "infra",
    label: CATEGORY_LABELS.infra,
    description: "Linux, eBPF, GitOps, logs, automação e isolamento.",
  },
];

export function ProjectGrid() {
  const [filter, setFilter] = useState<GridFilter>("all");
  const featured = projects.filter((p) => p.featured);
  const demoCount = projects.filter((p) => p.demoReady).length;
  const activeFilter = filters.find((f) => f.key === filter) ?? filters[0];

  const filterCounts = useMemo(() => {
    const counts = new Map<GridFilter, number>();
    counts.set("all", projects.length);
    counts.set("demo", projects.filter((p) => p.demoReady).length);
    for (const category of Object.keys(CATEGORY_LABELS) as Category[]) {
      counts.set(category, projects.filter((p) => p.category === category).length);
    }
    return counts;
  }, []);

  const filtered = useMemo(() => {
    let list = projects;
    if (filter === "demo") {
      list = projects.filter((p) => p.demoReady);
    } else if (filter !== "all") {
      list = projects.filter((p) => p.category === filter);
    }
    if (filter === "all") return list.filter((p) => !p.featured);
    return list;
  }, [filter]);

  return (
    <section id="projetos" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Cena 03 — Projetos
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            Portfólio <span className="text-gradient">open source</span>
          </h2>
          <p className="mt-6 max-w-2xl text-slate-400">
            Repositórios que eu mantenho no GitHub. Cada um tem README em
            português — abre o que interessar e vê lá o estado real do código.{" "}
            <span className="text-slate-300">
              {demoCount} módulos com núcleo e testes automatizados prontos para
              clonar.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Destaques curados", value: featured.length },
              { label: "Demo/testes", value: demoCount },
              { label: "Categorias", value: Object.keys(CATEGORY_LABELS).length },
            ].map((metric) => (
              <div
                key={metric.label}
                className="border-y border-white/10 py-5 sm:border-x sm:px-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                  {metric.label}
                </p>
                <p className="mt-2 font-display text-4xl font-bold text-white">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-14">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Em destaque
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                Filtro ativo
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                {activeFilter.label}
              </h3>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                {activeFilter.description}
              </p>
            </div>
            <p className="font-mono text-xs text-slate-500">
              {filtered.length} de {projects.length} módulos nesta vista
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs transition-all duration-300 ${
                  filter === f.key
                    ? "bg-accent text-ink font-semibold shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                    : "border border-white/10 text-slate-400 hover:border-accent/40 hover:text-white"
                }`}
                aria-pressed={filter === f.key}
              >
                <span>{f.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    filter === f.key ? "bg-ink/15" : "bg-white/5 text-slate-500"
                  }`}
                >
                  {filterCounts.get(f.key) ?? 0}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          layout
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>

        <p className="mt-12 text-center font-mono text-xs text-slate-600">
          Dica: comece por T1 quando quiser validar código executável rápido.
        </p>
      </div>
    </section>
  );
}
