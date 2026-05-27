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
  flagship: "LHN (principal)",
  oss: "Módulos OSS (30)",
  archive: "Arquivo & estudos",
  portfolio: "Site",
};

const GROUP_COLORS: Record<string, string> = {
  flagship: "#22c55e",
  oss: "#0ea5e9",
  archive: "#64748b",
  portfolio: "#22d3ee",
};

function DonutChart({
  groups,
  total,
}: {
  groups: { group: string; count: number }[];
  total: number;
}) {
  let acc = 0;
  const stops = groups.map((g) => {
    const start = (acc / total) * 360;
    acc += g.count;
    const end = (acc / total) * 360;
    const color = GROUP_COLORS[g.group] ?? "#64748b";
    return `${color} ${start}deg ${end}deg`;
  });

  return (
    <div
      className="relative h-44 w-44 shrink-0 rounded-full"
      style={{ background: `conic-gradient(${stops.join(", ")})` }}
    >
      <div className="absolute inset-4 flex flex-col items-center justify-center rounded-full bg-ink text-center">
        <span className="font-display text-3xl font-bold text-white">{total}</span>
        <span className="font-mono text-[10px] text-slate-500">repos</span>
      </div>
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
                <p className="mt-2 font-display text-4xl font-bold text-white tabular-nums">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.12}>
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

          <Reveal delay={0.16}>
            <div className="card-glass h-full p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="font-display text-lg font-semibold text-white">
                Por tipo de repositório
              </h3>
              <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
                <DonutChart groups={stats.groups} total={stats.totalPublic} />
                <ul className="space-y-2 text-sm">
                  {stats.groups.map((g) => (
                    <li key={g.group} className="flex items-center gap-2">
                      <span className="font-mono text-slate-400">
                        {GROUP_LABELS[g.group] ?? g.group}
                      </span>
                      <span className="ml-auto font-semibold text-white">
                        {g.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold text-white">
              Públicos fora dos 30 módulos
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Site do portfólio e projetos de estudo — também abertos no GitHub.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extraRepos.map((repo) => (
                <a
                  key={repo.slug}
                  href={repoUrl(repo.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass group block p-5 transition hover:border-accent/40 backdrop-blur-md"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-xs text-accent">
                      {repo.language ?? "—"}
                    </span>
                    {repo.stars > 0 && (
                      <span className="font-mono text-[10px] text-amber-400">
                        ★ {repo.stars}
                      </span>
                    )}
                  </div>
                  <h4 className="mt-2 font-display font-semibold text-white group-hover:text-accent">
                    {repo.slug}
                  </h4>
                  <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                    {repo.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-ink-50/50 p-4">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Atividade recente no GitHub
            </p>
            <img
              src={`https://ghchart.rshah.org/${githubUsername}`}
              alt="Gráfico de contribuições GitHub"
              className="mx-auto w-full max-w-4xl rounded-lg opacity-90"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
