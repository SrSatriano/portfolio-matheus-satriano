"use client";

import { CinematicField } from "@/components/cinematic/CinematicField";
import { MagneticLink } from "@/components/cinematic/MagneticLink";
import { Reveal } from "@/components/cinematic/Reveal";
import { profile } from "@/data/projects";

const links = [
  {
    label: "Portfólio web",
    href: profile.portfolioUrl,
    desc: "site publicado no GitHub Pages",
  },
  { label: "GitHub", href: profile.github, desc: "LHN V90, módulos OSS e estudos" },
  { label: "LinkedIn", href: profile.linkedin, desc: "perfil profissional" },
  { label: "Google Developers", href: profile.gdev, desc: "g.dev/satriano" },
  { label: "E-mail", href: `mailto:${profile.email}`, desc: profile.email },
];

const topics = ["Back-end", "Quant/dev", "IA local", "Infra", "Open source"];

export function Contact() {
  return (
    <section id="contato" className="relative scroll-mt-24 overflow-hidden py-28">
      <CinematicField variant="quiet" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                Cena final / Contato
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold text-white sm:text-6xl">
                Uma boa conversa técnica ainda é o melhor debugger.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Aberto para colaborações, oportunidades e discussões sérias
                sobre HFT, IA local, Web3, infraestrutura e produtos para o
                mercado brasileiro.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <MagneticLink
                href={profile.buymeacoffee}
                external
                className="mt-9 inline-flex rounded-full border border-accent/35 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent/20"
              >
                Apoiar o portfólio open source
              </MagneticLink>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                canais abertos
              </p>
              {links.map((link, index) => (
                <MagneticLink
                  key={link.label}
                  href={link.href}
                  external={!link.href.startsWith("mailto")}
                  className="group block rounded-lg border border-white/10 bg-ink-50/65 p-5 backdrop-blur-xl transition hover:border-accent/45 hover:bg-white/[0.04]"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span>
                      <span className="font-display text-lg font-semibold text-white group-hover:text-accent">
                        {link.label}
                      </span>
                      <span className="mt-1 block font-mono text-xs text-slate-500">
                        {link.desc}
                      </span>
                    </span>
                    <span className="font-mono text-[10px] text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                </MagneticLink>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
