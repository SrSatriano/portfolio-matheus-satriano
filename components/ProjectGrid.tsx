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
            português — abre o que interessar e vê lá o estado real do código.
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
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-all duration-300 ${
                  filter === f
                    ? "bg-accent text-ink font-semibold shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                    : "border border-white/10 text-slate-400 hover:border-accent/40 hover:text-white"
                }`}
              >
                {f === "all" ? "Todos" : CATEGORY_LABELS[f]}
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
