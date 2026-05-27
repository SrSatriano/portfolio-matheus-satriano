import { profile, projects } from "@/data/projects";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center px-6 pt-28 pb-20">
      <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-accent/20 blur-[100px] animate-float" />
      <div className="pointer-events-none absolute left-10 bottom-20 h-48 w-48 rounded-full bg-mint/10 blur-[80px]" />

      <div className="mx-auto w-full max-w-6xl">
        <p
          className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-accent opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          LHN Sovereign V90 · Portfólio open source
        </p>

        <h1
          className="font-display text-4xl font-bold leading-[1.1] text-white opacity-0 animate-fade-up sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.name.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="text-gradient">
            {profile.name.split(" ").slice(2).join(" ")}
          </span>
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg text-slate-400 opacity-0 animate-fade-up sm:text-xl"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="text-white">{profile.role}</span> — {profile.headline}
        </p>

        <p
          className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          {profile.bio}
        </p>

        <div
          className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="#lhn-v90"
            className="glow-ring rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-ink transition hover:bg-accent-glow"
          >
            LHN Sovereign V90
          </a>
          <a
            href="#projetos"
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-slate-300 transition hover:border-accent/50 hover:text-white"
          >
            +{projects.length} projetos
          </a>
          <a
            href={profile.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-mint/30 px-6 py-3 text-sm text-mint transition hover:bg-mint/10"
          >
            Site publicado
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-slate-300 transition hover:border-accent/50 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-slate-300 transition hover:border-accent/50 hover:text-white"
          >
            E-mail
          </a>
        </div>

        <dl
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          {[
            { label: "Sistema HFT", value: "V90" },
            { label: "Repos OSS", value: "30" },
            { label: "Docs", value: "pt-BR" },
            { label: "Exchange", value: "Bybit" },
          ].map((s) => (
            <div key={s.label}>
              <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">
                {s.label}
              </dt>
              <dd className="font-display mt-1 text-3xl font-bold text-white">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
