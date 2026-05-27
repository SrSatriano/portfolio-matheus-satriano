"use client";

import { Reveal } from "@/components/cinematic/Reveal";
import { motion } from "framer-motion";

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
    <section
      id="stack"
      className="scroll-mt-24 border-y border-white/5 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Arsenal — Stack
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            Ferramentas do dia a dia
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.06}>
              <div>
                <h3 className="font-mono text-sm text-accent">{g.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <motion.li
                      key={item}
                      className="rounded-lg border border-white/10 bg-ink-50/80 px-3 py-1.5 text-sm text-slate-300"
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(34, 211, 238, 0.4)",
                        color: "#fff",
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
