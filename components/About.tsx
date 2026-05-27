export function About() {
  const pillars = [
    {
      title: "Mercados & HFT",
      items: [
        "LHN Sovereign V90 — terminal Bybit + IA",
        "Order book e matching em C++",
        "Precificação AVX-512 e terminais Rust",
      ],
    },
    {
      title: "IA local & confiável",
      items: [
        "RAG offline com Ollama",
        "Clusters de inferência",
        "Pipelines de mídia e QA de LLMs",
      ],
    },
    {
      title: "Web3 & Brasil",
      items: [
        "Solidity e provas ZK",
        "OCR fiscal e tax harvest",
        "SaaS B2B e analytics",
      ],
    },
  ];

  return (
    <section id="sobre" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            01 — Sobre
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Engenharia com contexto de mercado
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Graduando em Ciência da Computação, com interesse em computação
            quântica e algoritmos combinatórios. Meu objetivo é construir
            tecnologia para mercados financeiros e produtos de IA que respeitam
            privacidade e compliance — com código que você consegue clonar,
            testar e operar seguindo a documentação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="card-glass p-6 transition hover:border-accent/30"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">
                {p.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {p.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-mint">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
