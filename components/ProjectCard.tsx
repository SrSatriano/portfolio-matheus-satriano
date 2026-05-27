"use client";

import type { Project } from "@/data/projects";
import { CATEGORY_LABELS, githubUrl } from "@/data/projects";
import { motion } from "framer-motion";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="card-glass group flex flex-col overflow-hidden p-6 backdrop-blur-md"
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
      </div>
      <a
        href={githubUrl(project.slug)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-accent-glow"
      >
        Ver no GitHub
        <span aria-hidden className="transition group-hover:translate-x-1">
          ↗
        </span>
      </a>
    </motion.article>
  );
}
