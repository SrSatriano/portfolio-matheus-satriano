"use client";

import { Icon } from "@/components/Icon";
import {
  LANG_COLORS,
  categoryById,
  ciUrl,
  repoUrl,
  type Project,
} from "@/data/catalog";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

function Badge({ children, tone }: { children: ReactNode; tone: string }) {
  return (
    <span className={`rounded-full border px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider ${tone}`}>
      {children}
    </span>
  );
}

export function ProjectCard({ project: p }: { project: Project }) {
  const cat = categoryById[p.cat];
  const style = { "--c": cat.color } as CSSProperties;
  const url = repoUrl(p.name);
  const ci = ciUrl(p);
  const links = [
    { href: url, label: "Código", icon: "github" },
    { href: `${url}#readme`, label: "README", icon: "book" },
    ...(p.download ? [{ href: p.download, label: "Baixar", icon: "download" }] : []),
    ...(p.demo ? [{ href: p.demo, label: "Site", icon: "globe" }] : []),
  ];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      style={style}
      className="project-card card-glass group relative flex h-full flex-col overflow-hidden p-5"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--c)] opacity-70" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--c)] opacity-[0.07] blur-2xl transition group-hover:opacity-[0.16]" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="cat-chip flex h-8 w-8 items-center justify-center rounded-lg text-[var(--c)]">
            <Icon name={cat.icon} className="h-4 w-4" />
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--c)]">
            {cat.short}
          </span>
        </div>
        <div className="flex flex-wrap justify-end gap-1.5">
          {p.new && <Badge tone="border-red-400/50 bg-red-500/10 text-red-300">Novo</Badge>}
          {p.featured && !p.new && <Badge tone="border-amber-400/40 bg-amber-400/10 text-amber-300">★ Destaque</Badge>}
          {p.ci && <Badge tone="border-emerald-400/40 bg-emerald-400/10 text-emerald-300">CI</Badge>}
        </div>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-white">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          {p.title}
        </a>
      </h3>
      <p className="mt-1 truncate font-mono text-[11px] text-slate-500">SrSatriano/{p.name}</p>

      <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.summary}</p>

      <ul className="mt-4 space-y-1.5">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-[13px] leading-snug text-slate-400">
            <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--c)]" strokeWidth={2.4} />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: LANG_COLORS[p.lang] ?? "#64748b" }} />
            {p.lang}
          </span>
          {p.stack
            .filter((s) => s !== p.lang)
            .slice(0, 4)
            .map((s) => (
              <span key={s} className="rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                {s}
              </span>
            ))}
        </div>

        <div className="relative z-10 mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-400 transition hover:text-[var(--c)]"
            >
              <Icon name={l.icon} className="h-3.5 w-3.5" />
              {l.label}
            </a>
          ))}
          {ci && (
            <a href={ci} target="_blank" rel="noopener noreferrer" className="ml-auto" aria-label={`Status do CI de ${p.title}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${ci}/badge.svg`} alt="CI" className="h-4" loading="lazy" />
            </a>
          )}
          {!ci && p.license && (
            <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-slate-600">{p.license}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
