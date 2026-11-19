"use client";

import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/cinematic/Reveal";
import { categories, projects, stats, type CategoryId, type Project } from "@/data/catalog";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";

type Toggle = "new" | "featured" | "ci" | "site";

const TOGGLES: Array<{ key: Toggle; label: string; test: (p: Project) => boolean }> = [
  { key: "new", label: "Novos", test: (p) => !!p.new },
  { key: "featured", label: "Destaques", test: (p) => !!p.featured },
  { key: "ci", label: "Com CI", test: (p) => !!p.ci },
  { key: "site", label: "Com site ou download", test: (p) => !!(p.demo || p.download) },
];

const catOrder = new Map(categories.map((c, i) => [c.id, i]));

function normalize(s: string) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function rank(p: Project) {
  return (p.new ? 0 : p.featured ? 1 : p.ci ? 2 : 3) * 10 + (catOrder.get(p.cat) ?? 0);
}

const sorted = [...projects].sort((a, b) => rank(a) - rank(b));

export function ProjectExplorer() {
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [toggles, setToggles] = useState<Set<Toggle>>(new Set());
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return sorted.filter((p) => {
      if (cat !== "all" && p.cat !== cat) return false;
      for (const t of TOGGLES) if (toggles.has(t.key) && !t.test(p)) return false;
      if (!q) return true;
      const hay = normalize([p.title, p.name, p.summary, p.lang, ...p.stack, ...p.highlights].join(" "));
      return q.split(/\s+/).every((w) => hay.includes(w));
    });
  }, [cat, toggles, query]);

  const counts = useMemo(() => {
    const m = new Map<string, number>([["all", projects.length]]);
    for (const c of categories) m.set(c.id, projects.filter((p) => p.cat === c.id).length);
    return m;
  }, []);

  const flip = (t: Toggle) =>
    setToggles((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });

  const clear = () => {
    setCat("all");
    setToggles(new Set());
    setQuery("");
  };
  const dirty = cat !== "all" || toggles.size > 0 || query !== "";
  const activeCat = categories.find((c) => c.id === cat);

  return (
    <section id="projetos" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Projetos</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
              Todos os <span className="text-gradient">{stats.total} projetos</span> públicos
            </h2>
            <p className="max-w-md text-slate-400">
              Cada card abre o repositório. Todos têm README em português; os com
              selo <span className="text-emerald-300">CI</span> rodam testes a cada push.
            </p>
          </div>
        </Reveal>

        <div className="sticky top-[68px] z-30 -mx-6 mt-10 border-y border-white/10 bg-ink/95 px-6 py-4 backdrop-blur-xl">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <label className="relative flex-1">
                <span className="sr-only">Buscar projetos</span>
                <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por nome, linguagem ou tecnologia (ex.: Rust, Whisper, B3)"
                  className="w-full rounded-full border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <div className="-mx-1 flex gap-2 overflow-x-auto px-1 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
                {TOGGLES.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => flip(t.key)}
                    aria-pressed={toggles.has(t.key)}
                    className={`shrink-0 rounded-full border px-3.5 py-2 font-mono text-[11px] transition ${
                      toggles.has(t.key)
                        ? "border-accent bg-accent/15 text-accent"
                        : "border-white/10 text-slate-400 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
              <button
                type="button"
                onClick={() => setCat("all")}
                aria-pressed={cat === "all"}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs transition ${
                  cat === "all" ? "bg-white font-semibold text-ink" : "border border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                Todas <span className="opacity-60">{counts.get("all")}</span>
              </button>
              {categories.map((c) => {
                const on = cat === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCat(on ? "all" : c.id)}
                    aria-pressed={on}
                    style={{ borderColor: on ? c.color : undefined, backgroundColor: on ? `${c.color}22` : undefined, color: on ? c.color : undefined }}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-xs text-slate-400 transition hover:text-white"
                  >
                    <Icon name={c.icon} className="h-3.5 w-3.5" />
                    {c.short}
                    <span className="opacity-60">{counts.get(c.id)}</span>
                  </button>
                );
              })}
            </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-400">
            {activeCat ? <span className="text-white">{activeCat.intro}</span> : null}
          </p>
          <p className="font-mono text-xs text-slate-500" aria-live="polite">
            {filtered.length} de {projects.length}
            {dirty && (
              <button type="button" onClick={clear} className="ml-3 inline-flex items-center gap-1 text-accent hover:underline">
                <Icon name="close" className="h-3 w-3" /> limpar filtros
              </button>
            )}
          </p>
        </div>

        <motion.div layout className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-6 rounded-xl border border-dashed border-white/15 p-10 text-center">
            <p className="text-slate-300">Nenhum projeto com esses filtros.</p>
            <button type="button" onClick={clear} className="mt-3 font-mono text-xs text-accent hover:underline">
              limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
