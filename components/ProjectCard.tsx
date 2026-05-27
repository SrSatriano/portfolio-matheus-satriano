import type { Project } from "@/data/projects";
import { CATEGORY_LABELS, githubUrl } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-glass group flex flex-col p-6 transition hover:glow-ring">
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs text-slate-500">#{project.id}</span>
        {project.featured && (
          <span className="rounded-full bg-mint/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mint">
            Destaque
          </span>
        )}
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold text-white group-hover:text-accent transition">
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
        <span aria-hidden>↗</span>
      </a>
    </article>
  );
}
