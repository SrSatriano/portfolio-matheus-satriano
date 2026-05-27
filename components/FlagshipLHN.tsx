import { flagshipLHN, githubUrl } from "@/data/projects";

export function FlagshipLHN() {
  return (
    <section
      id="lhn-v90"
      className="scroll-mt-24 border-y border-accent/20 bg-gradient-to-b from-accent/5 to-transparent px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-mint">
            Sistema principal · HFT
          </span>
          <span className="font-mono text-xs text-slate-500">
            {flagshipLHN.license}
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Destaque
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">
              {flagshipLHN.title}
            </h2>
            <p className="mt-2 text-lg text-accent">{flagshipLHN.subtitle}</p>
            <p className="mt-6 text-slate-400 leading-relaxed">
              {flagshipLHN.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={flagshipLHN.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-ring rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-ink transition hover:bg-accent-glow"
              >
                Abrir no GitHub
              </a>
              <a
                href={`${flagshipLHN.url}#pré-requisitos-e-instalação`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm text-slate-300 transition hover:border-accent/50"
              >
                Guia de instalação
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="card-glass p-4">
                <dt className="text-slate-500">Frontend</dt>
                <dd className="mt-1 text-accent">
                  :{flagshipLHN.ports.frontend}
                </dd>
              </div>
              <div className="card-glass p-4">
                <dt className="text-slate-500">Backend API</dt>
                <dd className="mt-1 text-accent">
                  :{flagshipLHN.ports.backend}
                </dd>
              </div>
            </dl>
          </div>

          <div className="card-glass glow-ring p-6 sm:p-8">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
              Arquitetura resumida
            </h3>
            <pre className="mt-4 overflow-x-auto rounded-lg bg-ink p-4 font-mono text-[11px] leading-relaxed text-slate-400">
{`Next.js (${flagshipLHN.ports.frontend})
    │ REST + WebSocket /stream
    ▼
FastAPI · LHNSovereignV90Backend
    ├─ Bybit V5 (REST + WS)
    ├─ Keras / TensorFlow
    ├─ RiskManager · Guardian
    └─ SQLite / workspace`}
            </pre>

            <h3 className="mt-8 font-mono text-xs text-accent">
              Capacidades
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {flagshipLHN.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-mint shrink-0">▸</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {flagshipLHN.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-slate-600">
          Repositório:{" "}
          <a
            href={githubUrl(flagshipLHN.slug)}
            className="text-accent hover:underline"
          >
            github.com/SrSatriano/{flagshipLHN.slug}
          </a>
          {" · "}Complementa os motores HFT do portfólio (order book C++, pricing AVX-512, terminal Rust).
        </p>
      </div>
    </section>
  );
}
