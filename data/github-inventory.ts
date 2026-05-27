/**
 * Apenas repositórios com visibility PUBLIC no GitHub (@SrSatriano).
 * Atualize com: gh repo list SrSatriano --visibility public --json name
 */

export type RepoGroup = "flagship" | "portfolio" | "oss" | "archive" | "meta";

export type PublicRepo = {
  slug: string;
  language: string | null;
  description: string;
  group: RepoGroup;
  stars: number;
  inPortfolio: boolean;
};

export const githubUsername = "SrSatriano";

/** 37 repositórios públicos (mai/2026) */
export const publicRepos: PublicRepo[] = [
  { slug: "SrSatriano", language: null, description: "README deste perfil", group: "meta", stars: 0, inPortfolio: false },
  { slug: "portfolio-matheus-satriano", language: "TypeScript", description: "Meu site de portfólio", group: "portfolio", stars: 0, inPortfolio: false },
  { slug: "LHN-V90-IA", language: "Python", description: "Terminal quant Bybit — projeto principal", group: "flagship", stars: 0, inPortfolio: true },
  { slug: "ultra-low-latency-order-book-engine", language: "C++", description: "Order book e matching", group: "oss", stars: 0, inPortfolio: true },
  { slug: "smc-liquidity-scanner", language: "Python", description: "SMC e liquidez", group: "oss", stars: 0, inPortfolio: true },
  { slug: "unified-trading-super-terminal", language: "Rust", description: "TUI de trading", group: "oss", stars: 0, inPortfolio: true },
  { slug: "local-rag-second-mind-vault", language: "Python", description: "RAG offline Ollama", group: "oss", stars: 0, inPortfolio: true },
  { slug: "distributed-ai-inference-cluster", language: "Python", description: "Gateway LLM", group: "oss", stars: 0, inPortfolio: true },
  { slug: "voice-cloning-tts-api-gateway", language: "Python", description: "TTS self-hosted", group: "oss", stars: 0, inPortfolio: true },
  { slug: "autonomous-short-form-video-pipeline", language: "Python", description: "Pipeline de Shorts", group: "oss", stars: 0, inPortfolio: true },
  { slug: "viral-trend-sentiment-predictor", language: "Python", description: "Tendências e ML", group: "oss", stars: 0, inPortfolio: true },
  { slug: "multi-channel-analytics-dashboard", language: "TypeScript", description: "Dashboard analytics", group: "oss", stars: 0, inPortfolio: true },
  { slug: "tokenomics-staking-protocol", language: "Solidity", description: "Staking ERC-20", group: "oss", stars: 0, inPortfolio: true },
  { slug: "mempool-arbitrage-mev-bot", language: "Rust", description: "MEV educacional", group: "oss", stars: 0, inPortfolio: true },
  { slug: "fiscal-data-ocr-engine", language: "Python", description: "OCR fiscal BR", group: "oss", stars: 0, inPortfolio: true },
  { slug: "enterprise-b2b-saas-boilerplate", language: "TypeScript", description: "SaaS B2B", group: "oss", stars: 0, inPortfolio: true },
  { slug: "family-treasury-dao-tracker", language: "JavaScript", description: "Tesouraria familiar", group: "oss", stars: 0, inPortfolio: true },
  { slug: "zero-to-hero-workstation-provisioner", language: "Shell", description: "Provisioner Ansible", group: "oss", stars: 0, inPortfolio: true },
  { slug: "avx512-options-pricing-engine", language: "C++", description: "Pricing SIMD", group: "oss", stars: 0, inPortfolio: true },
  { slug: "ebpf-latency-tracer-financial", language: "Python", description: "Tracer eBPF", group: "oss", stars: 0, inPortfolio: true },
  { slug: "hypervisor-ai-isolation", language: "Rust", description: "Hypervisor IA", group: "oss", stars: 0, inPortfolio: true },
  { slug: "chaos-engineering-trading-toolkit", language: "Go", description: "Chaos em bots", group: "oss", stars: 0, inPortfolio: true },
  { slug: "dark-pool-market-impact-simulator", language: "Python", description: "Simulador dark pool", group: "oss", stars: 0, inPortfolio: true },
  { slug: "tax-loss-harvesting-engine", language: "JavaScript", description: "Tax-loss BR", group: "oss", stars: 0, inPortfolio: true },
  { slug: "identity-vault-zk-proofs", language: "Solidity", description: "ZK identity", group: "oss", stars: 0, inPortfolio: true },
  { slug: "p2p-orderbook-gossip", language: "Rust", description: "Order book P2P", group: "oss", stars: 0, inPortfolio: true },
  { slug: "honeypot-rugpull-analyzer", language: "Python", description: "Análise de token", group: "oss", stars: 0, inPortfolio: true },
  { slug: "realtime-deepfake-streaming-bridge", language: "C++", description: "Streaming CUDA", group: "oss", stars: 0, inPortfolio: true },
  { slug: "cognitive-bias-hallucination-trap", language: "Python", description: "QA em LLMs", group: "oss", stars: 0, inPortfolio: true },
  { slug: "algorithmic-lofi-audio-generator", language: "Python", description: "Áudio lo-fi", group: "oss", stars: 0, inPortfolio: true },
  { slug: "cross-border-ledger-fabric", language: "Go", description: "Hyperledger Fabric", group: "oss", stars: 0, inPortfolio: true },
  { slug: "gitops-infra-state-reconciler", language: "Go", description: "GitOps reconciler", group: "oss", stars: 0, inPortfolio: true },
  { slug: "high-compression-log-router", language: "Rust", description: "Log router Zstd", group: "oss", stars: 0, inPortfolio: true },
  { slug: "IA-Financeira", language: "Python", description: "Primeiros testes IA + finanças", group: "archive", stars: 1, inPortfolio: false },
  { slug: "PersonalAI", language: "Python", description: "Assistente pessoal — início", group: "archive", stars: 1, inPortfolio: false },
  { slug: "calculadora-de-notas", language: "Java", description: "Calculadora acadêmica", group: "archive", stars: 1, inPortfolio: false },
  { slug: "Python_Senac_RIo_On", language: "Python", description: "Exercícios Senac Rio", group: "archive", stars: 0, inPortfolio: false },
];

export function repoUrl(slug: string) {
  return `https://github.com/${githubUsername}/${slug}`;
}

export function computeStats() {
  const listed = publicRepos.filter((r) => r.group !== "meta");
  const portfolioCount = publicRepos.filter((r) => r.inPortfolio).length;
  const siteAndProfile = publicRepos.filter(
    (r) => r.group === "portfolio" || r.group === "meta"
  ).length;

  const langMap = new Map<string, number>();
  for (const r of listed) {
    const lang = r.language ?? "Outros";
    langMap.set(lang, (langMap.get(lang) ?? 0) + 1);
  }
  const languages = Array.from(langMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({
      name,
      count,
      pct: Math.round((count / listed.length) * 100),
    }));

  const groupMap = new Map<string, number>();
  for (const r of listed) {
    groupMap.set(r.group, (groupMap.get(r.group) ?? 0) + 1);
  }
  if (siteAndProfile > 0) {
    groupMap.set("portfolio", siteAndProfile);
  }

  const tier1Slugs = new Set([
    "ultra-low-latency-order-book-engine",
    "avx512-options-pricing-engine",
    "local-rag-second-mind-vault",
    "unified-trading-super-terminal",
    "multi-channel-analytics-dashboard",
    "fiscal-data-ocr-engine",
    "tax-loss-harvesting-engine",
    "high-compression-log-router",
  ]);

  return {
    totalPublic: publicRepos.length,
    portfolioCount,
    flagship: "LHN-V90-IA",
    withTests: tier1Slugs.size,
    totalStars: publicRepos.reduce((s, r) => s + r.stars, 0),
    languages,
    groups: Array.from(groupMap.entries()).map(([group, count]) => ({
      group,
      count,
    })),
    /** Fora dos 30 + LHN: arquivo, site */
    extraPublicRepos: publicRepos.filter(
      (r) => !r.inPortfolio && r.group !== "meta"
    ),
  };
}

export const githubStats = computeStats();
