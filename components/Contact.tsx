import { profile } from "@/data/projects";

export function Contact() {
  const links = [
    { label: "Portfólio (GitHub Pages)", href: profile.portfolioUrl, desc: "Este site" },
    { label: "GitHub", href: profile.github, desc: "LHN V90 + 30 módulos OSS" },
    { label: "LinkedIn", href: profile.linkedin, desc: "Perfil profissional" },
    { label: "Google Developers", href: profile.gdev, desc: "g.dev/satriano" },
    { label: "E-mail", href: `mailto:${profile.email}`, desc: profile.email },
  ];

  return (
    <section id="contato" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="card-glass glow-ring overflow-hidden p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              04 — Contato
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Vamos conversar?
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Aberto a colaborações, oportunidades e discussões técnicas sobre
              HFT, IA local, Web3 ou produtos para o mercado brasileiro.
            </p>
            <a
              href={profile.buymeacoffee}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-slate-500 underline decoration-accent/50 underline-offset-4 hover:text-accent"
            >
              Apoiar o portfólio open source ☕
            </a>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:grid-cols-1 lg:min-w-[280px]">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 bg-ink/50 p-4 transition hover:border-accent/40"
                >
                  <span className="font-display font-semibold text-white">
                    {l.label}
                  </span>
                  <span className="mt-1 block font-mono text-xs text-slate-500">
                    {l.desc}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
