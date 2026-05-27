"use client";

import type { Project } from "@/data/projects";
import { CATEGORY_LABELS, TIER_LABELS, githubUrl } from "@/data/projects";
import { motion } from "framer-motion";

const TIER_TONE: Record<Project["tier"], string> = {
  1: "border-mint/30 bg-mint/10 text-mint",
  2: "border-accent/30 bg-accent/10 text-accent",
  3: "border-cinema-gold/30 bg-cinema-gold/10 text-cinema-gold",
  4: "border-cinema-red/30 bg-cinema-red/10 text-cinema-red",
};

export function ProjectCard({ project }: { project: Project }) {
  const extraStackCount = Math.max(project.stack.length - 3, 0);

  return (
    <motion.article
      className="card-glass group relative flex min-h-[300px] flex-col overflow-hidden p-6 backdrop-blur-md"
      whileHover={{
        y: -6,
        boxShadow:
          "0 0 0 1px rgba(34, 211, 238, 0.25), 0 0 48px -12px rgba(34, 211, 238, 0.35)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="flex flex-wrap items-start justify-between gap-2">
        <span className="font-mono text-xs text-slate-500">#{project.id}</span>
        <div className="flex flex-wrap gap-1.5">
          <span
            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${TIER_TONE[project.tier]}`}
            title={TIER_LABELS[project.tier]}
          >
            T{project.tier}
          </span>
          {project.demoReady && (
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
              Demo
            </span>
          )}
          {project.featured && (
            <span className="rounded-full bg-mint/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mint">
              Destaque
            </span>
          )}
        </div>
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold text-white transition group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {project.tagline}
      </p>
      <div className="mt-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-accent">
          {CATEGORY_LABELS[project.category]}
        </span>
        {project.stack.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-400"
          >
            {t}
          </span>
        ))}
        {extraStackCount > 0 && (
          <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-500">
            +{extraStackCount}
          </span>
        )}
      </div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
        {TIER_LABELS[project.tier]}
      </p>
      <a
        href={githubUrl(project.slug)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-xs text-accent transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent-glow"
        aria-label={`Abrir ${project.title} no GitHub`}
      >
        <span>Ver no GitHub</span>
        <span aria-hidden className="transition group-hover:translate-x-1">
          ↗
        </span>
      </a>
    </motion.article>
  );
}
