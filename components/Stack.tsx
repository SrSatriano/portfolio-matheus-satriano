const groups = [
  {
    label: "Linguagens",
    items: ["Python", "Rust", "C++", "TypeScript", "Go", "Solidity", "R"],
  },
  {
    label: "Back-end & APIs",
    items: ["FastAPI", "Node.js", "Express", "gRPC", "ZeroMQ"],
  },
  {
    label: "Front-end",
    items: ["Next.js", "React", "Tailwind CSS", "Recharts"],
  },
  {
    label: "Dados & ML",
    items: ["PostgreSQL", "Redis", "PyTorch", "ONNX", "Ollama"],
  },
  {
    label: "Infra & Ops",
    items: ["Docker", "Kubernetes", "Ansible", "Prometheus", "Grafana"],
  },
  {
    label: "Web3",
    items: ["Hardhat", "OpenZeppelin", "Circom", "libp2p", "Fabric"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-y border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          03 — Stack
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Ferramentas que uso no dia a dia
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="font-mono text-sm text-accent">{g.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/10 bg-ink-50 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
