"use client";

import { Reveal } from "@/components/cinematic/Reveal";
import {
  computeStats,
  githubUsername,
  publicRepos,
  repoUrl,
} from "@/data/github-inventory";
import { motion } from "framer-motion";

const GROUP_LABELS: Record<string, string> = {
  flagship: "LHN Sovereign V90",
  oss: "Módulos OSS",
  archive: "Arquivo & estudos",
  portfolio: "Site & perfil",
};

const GROUP_COLORS: Record<string, string> = {
  flagship: "#22c55e",
  oss: "#0ea5e9",
  archive: "#64748b",
  portfolio: "#22d3ee",
};

const GROUP_ORDER = ["oss", "archive", "portfolio", "flagship"] as const;

function RepoBreakdownChart({
  groups,
  total,
}: {
  groups: { group: string; count: number }[];
  total: number;
}) {
  const sorted = [...groups].sort((a, b) => b.count - a.count);
  let acc = 0;
  const segments = sorted.map((g) => {
    const pct = (g.count / total) * 100;
    const start = (acc / total) * 360;
    acc += g.count;
    const end = (acc / total) * 360;
    const color = GROUP_COLORS[g.group] ?? "#64748b";
    return { ...g, pct, start, end, color };
  });

  const gradient = segments
    .map((s) => `${s.color} ${s.start}deg ${s.end}deg`)
    .join(", ");

  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative shrink-0">
        <div
          className="h-52 w-52 rounded-full shadow-[0_0_60px_rgba(14,165,233,0.15)]"
          style={{ background: `conic-gradient(${gradient})` }}
        />
        <div className="absolute inset-5 flex flex-col items-center justify-center rounded-full border border-white/10 bg-ink/95 text-center backdrop-blur-sm">
          <span className="font-display text-4xl font-bold tabular-nums text-white">
            {total}
          </span>
          <span className="mt-1 font-mono text-[11px] uppercase tracking-widest text-slate-500">
            repos públicos
          </span>
        </div>
      </div>

      <ul className="w-full max-w-md space-y-3">
        {segments.map((s) => (
          <li
            key={s.group}
            className="rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="h-3 w-3 shrink-0 rounded-full ring-2 ring-white/10"
                  style={{ backgroundColor: s.color }}
                />
                <span className="truncate text-sm text-slate-200">
                  {GROUP_LABELS[s.group] ?? s.group}
                </span>
              </div>
              <div className="shrink-0 text-right font-mono text-sm">
                <span className="font-semibold text-white">{s.count}</span>
                <span className="ml-2 text-slate-500">
                  {Math.round(s.pct)}%
                </span>
              </div>
            </div>
            <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-ink-100">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: s.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const LANG_COLORS: Record<string, string> = {
  Python: "#3b82f6",
  Rust: "#f97316",
  "C++": "#6366f1",
  TypeScript: "#22d3ee",
  Go: "#34d399",
  JavaScript: "#eab308",
  Solidity: "#a78bfa",
  Shell: "#94a3b8",
  Java: "#ef4444",
  Outros: "#64748b",
};

export function GitHubDashboard() {
  const stats = computeStats();
  const maxLang = Math.max(...stats.languages.map((l) => l.count), 1);
  const extraRepos = stats.extraPublicRepos;

  const chartGroups = GROUP_ORDER.map((key) => {
    const found = stats.groups.find((g) => g.group === key);
    return { group: key, count: found?.count ?? 0 };
  }).filter((g) => g.count > 0);

  return (
    <section id="github" className="scroll-mt-28 border-y border-white/5 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            GitHub · @{githubUsername}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            O que está <span className="text-gradient">público</span>
          </h2>
          <p className="mt-6 max-w-2xl text-slate-300">
            Só entram aqui repositórios com visibilidade{" "}
            <strong className="text-white">pública</strong> no GitHub — LHN, os
            30 módulos, o site e quatro projetos mais antigos (Senac, primeiras
            IAs).
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Repos públicos", value: stats.totalPublic },
              { label: "No portfólio", value: stats.portfolioCount },
              { label: "Com núcleo + testes", value: stats.withTests },
              { label: "Stars (total)", value: stats.totalStars },
            ].map((card) => (
              <div
                key={card.label}
                className="card-glass p-6 text-center backdrop-blur-xl"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {card.label}
                </p>
                <p className="mt-2 font-display text-4xl font-bold tabular-nums text-white">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card-glass mt-12 p-6 sm:p-10 backdrop-blur-xl">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  Composição dos {stats.totalPublic} repositórios
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  LHN, módulos OSS, site e arquivo — mesma visão do perfil
                  GitHub.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <RepoBreakdownChart
                groups={chartGroups}
                total={stats.totalPublic}
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.16}>
            <div className="card-glass h-full p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="font-display text-lg font-semibold text-white">
                Linguagens nos repositórios
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Contagem por linguagem principal (GitHub)
              </p>
              <ul className="mt-8 space-y-4">
                {stats.languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="mb-1 flex justify-between font-mono text-xs">
                      <span className="text-slate-300">{lang.name}</span>
                      <span className="text-slate-500">
                        {lang.count} · {lang.pct}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-ink-100">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor:
                            LANG_COLORS[lang.name] ?? LANG_COLORS.Outros,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${(lang.count / maxLang) * 100}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="card-glass h-full p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="font-display text-lg font-semibold text-white">
                Públicos fora dos 30 módulos
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Site do portfólio e projetos de estudo — também abertos no
                GitHub.
              </p>
              <ul className="mt-6 space-y-3">
                {extraRepos.map((repo) => (
                  <li key={repo.slug}>
                    <a
                      href={repoUrl(repo.slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-accent/30"
                    >
                      <div className="min-w-0">
                        <p className="font-mono text-xs text-accent">
                          {repo.language ?? "—"}
                        </p>
                        <p className="mt-1 truncate font-display text-sm font-semibold text-white group-hover:text-accent">
                          {repo.slug}
                        </p>
                      </div>
                      {repo.stars > 0 && (
                        <span className="shrink-0 font-mono text-[10px] text-amber-400">
                          ★ {repo.stars}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
