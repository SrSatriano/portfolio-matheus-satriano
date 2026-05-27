"use client";

import { VideoLayer } from "@/components/cinematic/VideoLayer";
import { Reveal } from "@/components/cinematic/Reveal";
import { MagneticLink } from "@/components/cinematic/MagneticLink";
import { cinematicVideos } from "@/data/media";
import { profile } from "@/data/projects";

export function Contact() {
  const links = [
    {
      label: "Portfólio web",
      href: profile.portfolioUrl,
      desc: "Este site",
    },
    { label: "GitHub", href: profile.github, desc: "LHN V90 + 30 módulos" },
    { label: "LinkedIn", href: profile.linkedin, desc: "Perfil profissional" },
    { label: "Google Developers", href: profile.gdev, desc: "g.dev/satriano" },
    { label: "E-mail", href: `mailto:${profile.email}`, desc: profile.email },
  ];

  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden py-28"
    >
      <VideoLayer src={cinematicVideos.contact.src} overlay="section" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="card-glass glow-ring overflow-hidden backdrop-blur-2xl p-8 sm:p-14 lg:flex lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
                Cena final — Contato
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
                Vamos conversar?
              </h2>
              <p className="mt-6 text-slate-300 leading-relaxed">
                Colaborações, oportunidades e discussões sobre HFT, IA local,
                Web3 ou produtos para o mercado brasileiro.
              </p>
              <MagneticLink
                href={profile.buymeacoffee}
                external
                className="mt-8 inline-block text-sm text-accent underline decoration-accent/40 underline-offset-4"
              >
                Apoiar o portfólio open source ☕
              </MagneticLink>
            </div>

            <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:min-w-[300px] lg:grid-cols-1">
              {links.map((l) => (
                <li key={l.label}>
                  <MagneticLink
                    href={l.href}
                    external={!l.href.startsWith("mailto")}
                    className="block rounded-xl border border-white/10 bg-ink/60 p-4 backdrop-blur-md"
                  >
                    <span className="font-display font-semibold text-white">
                      {l.label}
                    </span>
                    <span className="mt-1 block font-mono text-xs text-slate-500">
                      {l.desc}
                    </span>
                  </MagneticLink>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
