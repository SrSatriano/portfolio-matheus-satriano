"use client";

import { CinematicField } from "@/components/cinematic/CinematicField";
import { Reveal } from "@/components/cinematic/Reveal";
import {
  activityLinks,
  featuredReadmeProjects,
  githubActivityCards,
  githubRoutes,
  readmeBadges,
  readmeProfileCards,
  repoLink,
  repositoryDossierGroups,
} from "@/data/readme-dossier";
import { motion } from "framer-motion";

export function ReadmeDossier() {
  return (
    <section id="readme-dossier" className="section-rule relative scroll-mt-24 overflow-hidden py-28">
      <CinematicField variant="quiet" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                README principal / organizado
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
                O mapa completo do GitHub dentro do portfólio.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-300">
              A mesma informação do README principal aparece aqui como uma
              navegação visual: projetos principais, stack, mapa dos
              repositórios, rotas de leitura e canais de contato.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10 grid gap-3 sm:grid-cols-5">
            {readmeBadges.map((badge) => (
              <div key={badge.label} className="border-y border-white/10 py-4 sm:border-x sm:px-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                  {badge.label}
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-white">
                  {badge.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                sobre mim
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                A síntese do README, sem perder o contexto técnico.
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {readmeProfileCards.map((card) => (
                <div key={card.label} className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                    {card.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-16">
            <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  projetos principais
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                  Oito repositórios para começar.
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-slate-400">
                Texto preservado do README com pequenos ajustes de ritmo para
                funcionar melhor na tela.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-ink-50/55 backdrop-blur-xl">
              <div className="grid border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500 md:grid-cols-[0.95fr_1.4fr_0.9fr]">
                <span>projeto</span>
                <span className="hidden md:block">por que existe</span>
                <span className="hidden md:block">stack dominante</span>
              </div>
              {featuredReadmeProjects.map((project, index) => (
                <motion.a
                  key={project.slug}
                  href={repoLink(project.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-3 border-b border-white/10 px-4 py-4 transition last:border-b-0 hover:bg-white/[0.035] md:grid-cols-[0.95fr_1.4fr_0.9fr] md:items-center"
                  whileHover={{ x: 3 }}
                >
                  <div>
                    <p className="font-mono text-[10px] text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 break-words font-display text-base font-semibold text-white">
                      {project.slug}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {project.reason}
                  </p>
                  <p className="font-mono text-xs leading-relaxed text-accent">
                    {project.stack}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-16">
            <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  mapa dos repositórios
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                  O inventário, por domínio.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Trading, IA local, produto, Web3, infraestrutura e arquivo de
                  estudos ficam separados para facilitar leitura técnica.
                </p>
              </div>

              <div className="space-y-3">
                {repositoryDossierGroups.map((group, index) => (
                  <details
                    key={group.title}
                    className="group rounded-lg border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl"
                    open={index < 2}
                  >
                    <summary className="cursor-pointer list-none font-display text-lg font-semibold text-white">
                      <span className="mr-3 font-mono text-[10px] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {group.title}
                    </summary>
                    <div className="mt-4 divide-y divide-white/10">
                      {group.repos.map(([slug, focus]) => (
                        <a
                          key={slug}
                          href={repoLink(slug)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid gap-2 py-3 text-sm transition hover:text-accent sm:grid-cols-[0.8fr_1fr]"
                        >
                          <span className="break-words font-mono text-xs text-accent">
                            {slug}
                          </span>
                          <span className="leading-relaxed text-slate-400">
                            {focus}
                          </span>
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                como navegar
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                Rotas rápidas pelo GitHub.
              </h3>
              <div className="mt-7 space-y-3">
                {githubRoutes.map((route) => (
                  <div key={route.want} className="rounded-lg border border-white/10 bg-ink-50/60 p-4">
                    <p className="font-display text-base font-semibold text-white">
                      {route.want}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {route.repos.map((slug) => (
                        <a
                          key={slug}
                          href={repoLink(slug)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md border border-accent/20 bg-accent/10 px-2 py-1 font-mono text-[10px] text-accent transition hover:bg-accent/20"
                        >
                          {slug}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                atividade e contato
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                Canais oficiais do README.
              </h3>
              <div className="mt-7 overflow-hidden rounded-lg border border-white/10 bg-ink-50/60">
                {activityLinks.map(([label, text, href]) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="grid gap-1 border-b border-white/10 px-4 py-4 last:border-b-0 hover:bg-white/[0.035] sm:grid-cols-[130px_1fr]"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                      {label}
                    </span>
                    <span className="break-words text-sm text-slate-300">
                      {text}
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {githubActivityCards.map((card) => (
                  <a
                    key={card.label}
                    href="https://github.com/SrSatriano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overflow-hidden rounded-lg border border-white/10 bg-ink/70"
                  >
                    <img
                      src={card.src}
                      alt={card.label}
                      loading="lazy"
                      className="h-full min-h-[120px] w-full object-contain opacity-90"
                    />
                  </a>
                ))}
              </div>
              <p className="mt-5 border-l border-mint/40 pl-4 text-sm leading-relaxed text-slate-400">
                Aberto a desafios técnicos, projetos open source, back-end,
                sistemas quant, IA local e boas conversas sobre latência.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
