export type Category = "hft" | "ai" | "web3" | "product" | "infra";

export type Tier = 1 | 2 | 3 | 4;

export type Project = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  stack: string[];
  tier: Tier;
  demoReady: boolean;
  featured?: boolean;
};

export const CATEGORY_LABELS: Record<Category, string> = {
  hft: "HFT & Quant",
  ai: "IA & Dados",
  web3: "Web3",
  product: "Produto & SaaS",
  infra: "Sistemas & Infra",
};

export const TIER_LABELS: Record<Tier, string> = {
  1: "Tier 1 — demo prioritário",
  2: "Tier 2 — integração",
  3: "Tier 3 — Web3 / sistemas",
  4: "Tier 4 — GPU / Linux",
};

const GH = "https://github.com/SrSatriano";

export const projects: Project[] = [
  { id: "01", slug: "ultra-low-latency-order-book-engine", title: "Order Book Engine", tagline: "Motor de matching C++ em microssegundos com gRPC e ZeroMQ.", category: "hft", stack: ["C++20", "gRPC", "ZeroMQ"], tier: 1, demoReady: true, featured: true },
  { id: "02", slug: "smc-liquidity-scanner", title: "SMC Liquidity Scanner", tagline: "Liquidez institucional, FVG e BOS/CHOCH com ML em tempo real.", category: "hft", stack: ["Python", "PyTorch", "ONNX"], tier: 2, demoReady: true },
  { id: "03", slug: "unified-trading-super-terminal", title: "Trading Super-Terminal", tagline: "TUI estilo terminal profissional para risco e carteira.", category: "hft", stack: ["Rust", "Ratatui", "Tokio"], tier: 1, demoReady: true, featured: true },
  { id: "04", slug: "local-rag-second-mind-vault", title: "Second Mind Vault", tagline: "RAG 100% offline com Ollama — privacidade total.", category: "ai", stack: ["Python", "FastAPI", "Ollama"], tier: 1, demoReady: true, featured: true },
  { id: "05", slug: "distributed-ai-inference-cluster", title: "AI Inference Cluster", tagline: "Gateway de inferência LLM com balanceamento e observabilidade.", category: "ai", stack: ["Kubernetes", "FastAPI", "Prometheus"], tier: 2, demoReady: false },
  { id: "06", slug: "voice-cloning-tts-api-gateway", title: "TTS API Gateway", tagline: "Síntese e clonagem de voz self-hosted com filas Celery.", category: "ai", stack: ["FastAPI", "Celery", "Redis"], tier: 2, demoReady: false },
  { id: "07", slug: "autonomous-short-form-video-pipeline", title: "Video Pipeline", tagline: "Tema → roteiro → TTS → MP4 vertical para Shorts.", category: "ai", stack: ["Python", "FFmpeg", "Whisper"], tier: 2, demoReady: false },
  { id: "08", slug: "viral-trend-sentiment-predictor", title: "Trend Predictor", tagline: "Scraper Go + ML temporal para nichos virais.", category: "ai", stack: ["Go", "Python", "PostgreSQL"], tier: 2, demoReady: false },
  { id: "09", slug: "multi-channel-analytics-dashboard", title: "Analytics Dashboard", tagline: "RPM, retenção e conversão em Next.js.", category: "product", stack: ["Next.js", "Tailwind", "Recharts"], tier: 1, demoReady: true, featured: true },
  { id: "10", slug: "tokenomics-staking-protocol", title: "Staking Protocol", tagline: "Token ERC-20 e pool na Polygon com Hardhat.", category: "web3", stack: ["Solidity", "Hardhat", "React"], tier: 3, demoReady: false },
  { id: "11", slug: "mempool-arbitrage-mev-bot", title: "MEV Bot (Educacional)", tagline: "Scanner de oportunidades MEV em testnet.", category: "hft", stack: ["Rust", "Tokio"], tier: 4, demoReady: false },
  { id: "12", slug: "fiscal-data-ocr-engine", title: "Fiscal OCR Engine", tagline: "OCR e categorização de NF-e/NFS-e para o Brasil.", category: "product", stack: ["Python", "FastAPI", "EasyOCR"], tier: 1, demoReady: true, featured: true },
  { id: "13", slug: "enterprise-b2b-saas-boilerplate", title: "B2B SaaS Boilerplate", tagline: "Auth, RBAC, multi-tenancy e Stripe.", category: "product", stack: ["Next.js", "Supabase", "Stripe"], tier: 2, demoReady: false },
  { id: "14", slug: "family-treasury-dao-tracker", title: "Family Treasury", tagline: "Cofres virtuais e projeção de juros compostos.", category: "product", stack: ["React", "Express", "SQLite"], tier: 2, demoReady: false },
  { id: "15", slug: "zero-to-hero-workstation-provisioner", title: "Workstation Provisioner", tagline: "Ansible para estação dev completa em Linux/WSL2.", category: "infra", stack: ["Ansible", "Bash"], tier: 3, demoReady: false },
  { id: "16", slug: "avx512-options-pricing-engine", title: "AVX-512 Pricing", tagline: "Black-Scholes e Monte Carlo vetorizados sem GPU.", category: "hft", stack: ["C++", "AVX-512"], tier: 1, demoReady: true, featured: true },
  { id: "17", slug: "ebpf-latency-tracer-financial", title: "eBPF Latency Tracer", tagline: "RTT em microssegundos no kernel para feeds.", category: "infra", stack: ["eBPF", "Python", "Grafana"], tier: 4, demoReady: false },
  { id: "18", slug: "hypervisor-ai-isolation", title: "AI Hypervisor", tagline: "Isolamento tipo-1 para LLMs e agentes.", category: "infra", stack: ["Rust", "KVM", "QEMU"], tier: 4, demoReady: false },
  { id: "19", slug: "chaos-engineering-trading-toolkit", title: "Chaos Trading Toolkit", tagline: "Chaos Monkey para bots em homologação.", category: "hft", stack: ["Go", "Docker"], tier: 3, demoReady: false },
  { id: "20", slug: "dark-pool-market-impact-simulator", title: "Dark Pool Simulator", tagline: "Slippage institucional e liquidez oculta.", category: "hft", stack: ["Python", "SciPy", "Ray"], tier: 2, demoReady: false },
  { id: "21", slug: "tax-loss-harvesting-engine", title: "Tax-Loss Harvesting", tagline: "Harvest fiscal BR com regras de wash sale.", category: "hft", stack: ["Node.js", "Express"], tier: 1, demoReady: true, featured: true },
  { id: "22", slug: "identity-vault-zk-proofs", title: "ZK Identity Vault", tagline: "Provas zero-knowledge sem expor dados on-chain.", category: "web3", stack: ["Circom", "SnarkJS", "Solidity"], tier: 3, demoReady: false },
  { id: "23", slug: "p2p-orderbook-gossip", title: "P2P Order Book", tagline: "Livro de ofertas descentralizado com GossipSub.", category: "web3", stack: ["Rust", "libp2p"], tier: 3, demoReady: false },
  { id: "24", slug: "honeypot-rugpull-analyzer", title: "Honeypot Analyzer", tagline: "Auditoria estática de tokens ERC-20 pré-trade.", category: "web3", stack: ["Python", "Slither", "Web3"], tier: 3, demoReady: false },
  { id: "25", slug: "realtime-deepfake-streaming-bridge", title: "Deepfake Bridge", tagline: "Webcam → face swap GPU → câmera virtual.", category: "ai", stack: ["C++", "CUDA", "OpenCV"], tier: 4, demoReady: false },
  { id: "26", slug: "cognitive-bias-hallucination-trap", title: "Hallucination Trap", tagline: "QA adversarial para LLMs antes de produção.", category: "ai", stack: ["Python", "LangChain", "vLLM"], tier: 4, demoReady: false },
  { id: "27", slug: "algorithmic-lofi-audio-generator", title: "Lo-Fi Generator", tagline: "Trilha sincronizada a cortes de vídeo.", category: "ai", stack: ["Python", "PyTorch", "MusicGen"], tier: 4, demoReady: false },
  { id: "28", slug: "cross-border-ledger-fabric", title: "Fabric Ledger", tagline: "Blockchain permissionada para faturas internacionais.", category: "web3", stack: ["Hyperledger Fabric", "Go"], tier: 4, demoReady: false },
  { id: "29", slug: "gitops-infra-state-reconciler", title: "GitOps Reconciler", tagline: "Reverte drift SSH vs Git automaticamente.", category: "infra", stack: ["Go", "Ansible"], tier: 3, demoReady: false },
  { id: "30", slug: "high-compression-log-router", title: "Log Router", tagline: "Ingestão massiva de logs com Zstd/LZ4.", category: "infra", stack: ["Rust", "zstd", "Tokio"], tier: 1, demoReady: true, featured: true },
];

export function githubUrl(slug: string) {
  return `${GH}/${slug}`;
}

/** Sistema HFT principal — repositório público separado do lote 01–30 */
export const flagshipLHN = {
  slug: "LHN-V90-IA",
  title: "LHN Sovereign V90",
  subtitle: "Estação de trading quantitativo em cripto",
  tagline:
    "Terminal local para pesquisa, simulação e execução controlada em perpétuos Bybit — FastAPI, Next.js, IA (Keras/TensorFlow) e camadas de risco.",
  url: `${GH}/LHN-V90-IA`,
  license: "Source-available · PolyForm Noncommercial",
  stack: [
    "Python",
    "FastAPI",
    "Next.js",
    "Bybit V5",
    "WebSocket",
    "TensorFlow",
    "SQLite",
  ],
  features: [
    "Painel Next.js (porta 9090) com trading, orderflow, heatmap e sinais",
    "Backend FastAPI (9002) com motor assíncrono e orquestrador supervisionado",
    "Feeds Bybit V5 REST + WebSocket · túneis de dados e fallback REST",
    "IA: forja Keras, experience replay, governança de drawdown",
    "RiskManager, guardian shadow, arbitragem e integração Telegram",
    "Nexus LLM sidecar, oracle Binance (leitura) e escudo C++ opcional",
  ],
  ports: { frontend: 9090, backend: 9002 },
};

export const profile = {
  name: "Matheus Rodrigues Satriano",
  role: "Desenvolvedor Back-End",
  headline: "HFT · Quant · IA local · Web3",
  bio: "Graduando em Ciência da Computação. Construo o LHN Sovereign V90 para operar e estudar cripto na Bybit, e mantenho dezenas de repos abertos — cada um com README em português do jeito que eu uso no dia a dia.",
  email: "matheussatriano@hotmail.com",
  linkedin: "https://www.linkedin.com/in/matheus-rodrigues-satriano",
  github: "https://github.com/SrSatriano",
  gdev: "https://g.dev/satriano",
  buymeacoffee: "https://www.buymeacoffee.com/matheussatriano",
  portfolioUrl: "https://srsatriano.github.io/portfolio-matheus-satriano/",
};

export const demoReadyCount = projects.filter((p) => p.demoReady).length;
