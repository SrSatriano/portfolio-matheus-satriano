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

const filters: Array<{ key: GridFilter; label: string }> = [
  { key: "all", label: "Todos" },
  { key: "demo", label: "Com demo" },
  { key: "hft", label: CATEGORY_LABELS.hft },
  { key: "ai", label: CATEGORY_LABELS.ai },
  { key: "web3", label: CATEGORY_LABELS.web3 },
  { key: "product", label: CATEGORY_LABELS.product },
  { key: "infra", label: CATEGORY_LABELS.infra },
];

export function ProjectGrid() {
  const [filter, setFilter] = useState<GridFilter>("all");
  const featured = projects.filter((p) => p.featured);
  const demoCount = projects.filter((p) => p.demoReady).length;

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

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-all duration-300 ${
                  filter === f.key
                    ? "bg-accent text-ink font-semibold shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                    : "border border-white/10 text-slate-400 hover:border-accent/40 hover:text-white"
                }`}
              >
                {f.label}
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
          {filtered.length} de {projects.length} módulos nesta vista
        </p>
      </div>
    </section>
  );
}
