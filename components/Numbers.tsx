"use client";

import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/cinematic/Reveal";
import { LANG_COLORS, categoryById, formatDate, owner, stats, updated } from "@/data/catalog";
import { motion } from "framer-motion";

const kpis = [
  { value: stats.total, label: "repositórios públicos", color: "#22c55e", icon: "github" },
  { value: stats.categories, label: "frentes de trabalho", color: "#38bdf8", icon: "cube" },
  { value: stats.languageCount, label: "linguagens principais", color: "#a78bfa", icon: "chip" },
  { value: stats.withCi, label: "com CI automatizado", color: "#2dd4bf", icon: "check" },
  { value: stats.mit, label: "licenciados como MIT", color: "#f59e0b", icon: "book" },
  { value: stats.newCount, label: "lançamentos novos", color: "#f472b6", icon: "spark" },
];

function Donut() {
  const total = stats.total;
  let acc = 0;
  const segments = stats.byCategory.map((c) => {
    const start = (acc / total) * 360;
    acc += c.count;
    return `${c.color} ${start}deg ${(acc / total) * 360}deg`;
  });
  return (
    <div className="flex flex-col items-center gap-10 md:flex-row md:items-center">
      <div className="relative shrink-0">
        <div className="h-56 w-56 rounded-full" style={{ background: `conic-gradient(${segments.join(", ")})` }} />
        <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full border border-white/10 bg-ink text-center">
          <span className="font-display text-5xl font-bold tabular-nums text-white">{total}</span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">projetos</span>
        </div>
      </div>
      <ul className="grid w-full gap-2">
        {stats.byCategory.map((c) => (
          <li key={c.id}>
            <a
              href="#projetos"
              className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 transition hover:border-white/15"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md" style={{ color: c.color, backgroundColor: `${c.color}1f` }}>
                <Icon name={c.icon} className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1 text-sm leading-snug text-slate-200">{c.title}</span>
              <span className="font-mono text-sm font-semibold text-white">{c.count}</span>
              <span className="w-10 text-right font-mono text-xs text-slate-500">{Math.round((c.count / total) * 100)}%</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Languages() {
  const max = Math.max(...stats.languages.map((l) => l.count));
  return (
    <ul className="space-y-3.5">
      {stats.languages.map((l) => (
        <li key={l.name}>
          <div className="mb-1 flex justify-between font-mono text-xs">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: LANG_COLORS[l.name] ?? "#64748b" }} />
              {l.name}
            </span>
            <span className="text-slate-500">{l.count}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-ink-100">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: LANG_COLORS[l.name] ?? "#64748b" }}
              initial={{ width: 0 }}
              whileInView={{ width: `${(l.count / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

function Timeline() {
  return (
    <ol className="relative grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
      <div className="absolute left-0 right-0 top-[38px] hidden h-px border-t border-dashed border-white/15 lg:block" aria-hidden />
      {stats.timeline.map((t) => (
        <li key={t.month} className="relative flex flex-col items-start lg:items-center lg:text-center">
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
            +{t.items.length} repo{t.items.length > 1 ? "s" : ""}
          </span>
          <span className="relative z-10 my-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="font-display text-base font-semibold text-white">{t.label}</span>
          <div className="mt-2 flex max-w-[140px] flex-wrap gap-1 lg:justify-center">
            {t.items.map((p) => (
              <span
                key={p.name}
                title={p.title}
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: categoryById[p.cat].color }}
              />
            ))}
          </div>
          <span className="mt-2 text-xs leading-snug text-slate-400">{t.milestone}</span>
        </li>
      ))}
    </ol>
  );
}

export function Numbers() {
  return (
    <section id="numeros" className="scroll-mt-24 border-y border-white/5 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">GitHub · @{owner}</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
              Em <span className="text-gradient">números</span>
            </h2>
            <p className="max-w-md text-slate-400">
              Retrato dos repositórios públicos em {formatDate(updated)}. Os privados
              ficam de fora.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {kpis.map((k) => (
              <div key={k.label} className="card-glass relative overflow-hidden p-5">
                <div className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: k.color }} />
                <Icon name={k.icon} className="absolute right-4 top-4 h-4 w-4 opacity-70" />
                <p className="font-display text-4xl font-bold tabular-nums" style={{ color: k.color }}>
                  {k.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-slate-400">{k.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_1fr] [&>*]:min-w-0">
          <Reveal delay={0.1}>
            <div className="card-glass h-full p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-white">Projetos por frente</h3>
              <p className="mt-1 text-sm text-slate-400">Cada repositório aparece em uma frente principal.</p>
              <div className="mt-8">
                <Donut />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="card-glass h-full p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-white">Linguagem principal</h3>
              <p className="mt-1 text-sm text-slate-400">Segundo o GitHub, por repositório.</p>
              <div className="mt-8">
                <Languages />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="card-glass mt-8 p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-white">Linha do tempo</h3>
            <p className="mt-1 text-sm text-slate-400">Quando cada repositório nasceu. Um ponto por projeto, na cor da frente.</p>
            <div className="mt-10">
              <Timeline />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
