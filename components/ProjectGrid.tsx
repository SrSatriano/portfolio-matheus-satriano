"use client";

import {
  CATEGORY_LABELS,
  type Category,
  projects,
} from "@/data/projects";
import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";

const filters: Array<"all" | Category> = [
  "all",
  "hft",
  "ai",
  "web3",
  "product",
  "infra",
];

export function ProjectGrid() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const featured = projects.filter((p) => p.featured);

  const filtered = useMemo(() => {
    const list =
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter);
    if (filter === "all") return list.filter((p) => !p.featured);
    return list;
  }, [filter]);

  return (
    <section id="projetos" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              02 — Projetos
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Portfólio open source
            </h2>
            <p className="mt-4 text-slate-400">
              Cada repositório inclui README, arquitetura, deploy e operação em
              português brasileiro.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <p className="mb-4 font-mono text-xs text-slate-500">Em destaque</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 font-mono text-xs transition ${
                filter === f
                  ? "bg-accent text-ink font-semibold"
                  : "border border-white/10 text-slate-400 hover:border-accent/40 hover:text-white"
              }`}
            >
              {f === "all" ? "Todos" : CATEGORY_LABELS[f]}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-xs text-slate-500">
          {filtered.length} de {projects.length} projetos exibidos
        </p>
      </div>
    </section>
  );
}
