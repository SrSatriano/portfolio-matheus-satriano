const GH = "https://github.com/SrSatriano";

export const readmeBadges = [
  { label: "Perfil público", value: "GitHub" },
  { label: "37 repos", value: "públicos" },
  { label: "30 módulos", value: "OSS" },
  { label: "docs", value: "pt-BR" },
  { label: "foco", value: "local-first" },
];

export const readmeProfileCards = [
  {
    label: "Sobre mim",
    text: "Graduando em Ciência da Computação com foco em arquiteturas de alta performance, back-end, mercado financeiro, Web3 e IA local.",
  },
  {
    label: "Filosofia",
    text: "Soberania de dados e eficiência computacional: quando não precisa ir para a nuvem, a solução nasce para rodar local.",
  },
  {
    label: "O que construo",
    text: "Motores de order book, terminais quant, dashboards institucionais, pipelines de IA generativa offline e infraestrutura operacional.",
  },
  {
    label: "Foco atual",
    text: "LHN Sovereign V90, pesquisa em SIMD/AVX-512 para pricing e sistemas que juntam risco, execução e inferência local.",
  },
  {
    label: "Interesses",
    text: "Algorithmic Trading, LLMs open source, RAG, engenharia reversa, eBPF, Web3 e ferramentas técnicas que dão para auditar.",
  },
];

export const focusDirections = [
  {
    direction: "Baixa latência",
    code: "C++, Rust, SIMD, estruturas de dados, benchmarks e simulações de mercado.",
  },
  {
    direction: "IA local",
    code: "RAG offline, Ollama, pipelines self-hosted, avaliação de respostas e automação de mídia.",
  },
  {
    direction: "Mercado financeiro",
    code: "Order book, pricing, risco, liquidez, tax-loss harvesting e dashboards operacionais.",
  },
  {
    direction: "Infra soberana",
    code: "Docker, Ansible, eBPF, GitOps, logs comprimidos e serviços fora da dependência de nuvem.",
  },
  {
    direction: "Produto real",
    code: "README forte, arquitetura documentada, testes, rotas claras e fluxo reproduzível.",
  },
];

export const engineeringLayers = [
  {
    layer: "Core",
    preference: "código mensurável, explícito e testável",
  },
  {
    layer: "API",
    preference: "contratos simples, FastAPI, OpenAPI e validação com Pydantic",
  },
  {
    layer: "Interface",
    preference: "Next.js, TUI em Rust ou dashboards objetivos para tomada de decisão",
  },
  {
    layer: "Dados",
    preference: "SQLite/PostgreSQL quando basta, Redis quando latência pede e arquivos locais quando são a solução mais honesta",
  },
  {
    layer: "IA",
    preference: "modelos open source, RAG offline, avaliação e isolamento do fluxo sensível",
  },
  {
    layer: "Operação",
    preference: "logs úteis, health checks, scripts reproduzíveis e documentação em português brasileiro",
  },
];

export const lhnReadmeLayers = [
  {
    label: "Painel",
    text: "interface web para leitura de estado, parâmetros e operação.",
  },
  {
    label: "API",
    text: "orquestração, configuração, risco, execução e integração externa.",
  },
  {
    label: "Core",
    text: "tomada de decisão, replay, backfill, radar, labeler e ciclo de treino.",
  },
  {
    label: "IA local",
    text: "inferência e análise próximas dos dados.",
  },
  {
    label: "Workspace",
    text: "persistência, auditoria, logs e artefatos operacionais.",
  },
];

export const featuredReadmeProjects = [
  {
    slug: "ultra-low-latency-order-book-engine",
    reason: "motor de order book e matching para estudar microestrutura, filas, execução e performance",
    stack: "C++, CMake, testes, benchmark",
  },
  {
    slug: "avx512-options-pricing-engine",
    reason: "pricing de opções com comparação entre caminho escalar e vetorização SIMD",
    stack: "C++, AVX-512, Monte Carlo, Black-Scholes",
  },
  {
    slug: "local-rag-second-mind-vault",
    reason: "cofre de conhecimento privado com perguntas e respostas 100% offline",
    stack: "Python, FastAPI, Ollama, embeddings",
  },
  {
    slug: "multi-channel-analytics-dashboard",
    reason: "painel para métricas, retenção, conversão e leitura executiva de canais",
    stack: "Next.js, TypeScript, Recharts",
  },
  {
    slug: "unified-trading-super-terminal",
    reason: "terminal TUI para monitoramento de risco, posições e sinais",
    stack: "Rust, Ratatui",
  },
  {
    slug: "high-compression-log-router",
    reason: "ingestão e roteamento de logs com compressão eficiente",
    stack: "Rust, Zstd, LZ4",
  },
  {
    slug: "fiscal-data-ocr-engine",
    reason: "OCR e extração estruturada para documentos fiscais brasileiros",
    stack: "Python, OCR, validação",
  },
  {
    slug: "tax-loss-harvesting-engine",
    reason: "simulação e regras fiscais para compensação de perdas",
    stack: "Node.js, TypeScript, regras BR",
  },
];

export const stackDossierGroups = [
  {
    label: "Linguagens e core",
    items: ["Python", "Rust", "C++", "TypeScript", "Go", "Java", "JavaScript", "Solidity", "Bash", "MQL5", "SIMD", "AVX-512", "CUDA"],
  },
  {
    label: "Web, APIs e produto",
    items: ["FastAPI", "Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "OpenAPI", "Pydantic", "WebSocket", "Recharts", "Framer Motion"],
  },
  {
    label: "IA, dados e automação",
    items: ["Ollama", "LangChain", "TensorFlow", "Keras", "RAG offline", "OCR fiscal BR", "PyTorch", "ONNX", "embeddings"],
  },
  {
    label: "Infra, DevOps e sistemas",
    items: ["Docker", "Docker Compose", "Ansible", "Linux", "Git", "GitHub", "Nginx", "Kubernetes", "GitOps", "eBPF", "Zstd", "libp2p", "Hyperledger Fabric"],
  },
  {
    label: "Mercado e Web3",
    items: ["Bybit V5", "MetaTrader 5", "Order Book", "Risk Engine", "Solidity", "Hardhat", "Foundry", "MEV educacional"],
  },
];

export const repositoryDossierGroups = [
  {
    title: "Trading, quant e mercado",
    repos: [
      ["LHN-V90-IA", "terminal quant principal com IA local, risco e integração Bybit"],
      ["ultra-low-latency-order-book-engine", "matching engine em C++ para order book e simulação de execução"],
      ["smc-liquidity-scanner", "scanner de liquidez, FVG, BOS/CHOCH e conceitos SMC"],
      ["unified-trading-super-terminal", "TUI em Rust para acompanhar risco, sinais e posições"],
      ["avx512-options-pricing-engine", "precificação de opções otimizada com SIMD"],
      ["mempool-arbitrage-mev-bot", "bot educacional de MEV e arbitragem em ambiente controlado"],
      ["chaos-engineering-trading-toolkit", "chaos engineering aplicado a bots e ambientes de trading"],
      ["dark-pool-market-impact-simulator", "simulação de impacto de mercado e liquidez oculta"],
      ["tax-loss-harvesting-engine", "regras fiscais e compensação de perdas para contexto brasileiro"],
    ],
  },
  {
    title: "IA local, mídia e avaliação",
    repos: [
      ["local-rag-second-mind-vault", "RAG offline para conhecimento pessoal e privado"],
      ["distributed-ai-inference-cluster", "gateway para distribuir inferência entre workers"],
      ["voice-cloning-tts-api-gateway", "API de TTS e clonagem de voz self-hosted"],
      ["autonomous-short-form-video-pipeline", "pipeline de vídeos curtos com roteiro, áudio e render"],
      ["viral-trend-sentiment-predictor", "predição de tendências e sentimento em séries temporais"],
      ["realtime-deepfake-streaming-bridge", "ponte CUDA para processamento de vídeo em tempo real"],
      ["cognitive-bias-hallucination-trap", "testes adversariais e QA para respostas de LLMs"],
      ["algorithmic-lofi-audio-generator", "geração procedural de trilhas lo-fi para vídeos"],
    ],
  },
  {
    title: "Produto, SaaS, fiscal BR e analytics",
    repos: [
      ["multi-channel-analytics-dashboard", "dashboard full-stack para métricas e inteligência de canais"],
      ["fiscal-data-ocr-engine", "OCR, extração e validação de documentos fiscais"],
      ["enterprise-b2b-saas-boilerplate", "base SaaS B2B com autenticação, RBAC e multi-tenancy"],
      ["family-treasury-dao-tracker", "tesouraria, metas e projeções financeiras"],
    ],
  },
  {
    title: "Web3, identidade e segurança on-chain",
    repos: [
      ["tokenomics-staking-protocol", "token ERC-20, staking e testes de contrato"],
      ["identity-vault-zk-proofs", "identidade com provas de conhecimento zero"],
      ["p2p-orderbook-gossip", "order book descentralizado com protocolo gossip"],
      ["honeypot-rugpull-analyzer", "análise estática de contratos e risco de honeypot"],
      ["cross-border-ledger-fabric", "ledger permissionado com Hyperledger Fabric"],
    ],
  },
  {
    title: "Infraestrutura, sistemas e operação",
    repos: [
      ["zero-to-hero-workstation-provisioner", "provisionamento de workstation com Ansible"],
      ["ebpf-latency-tracer-financial", "tracer eBPF para latência de rede em contexto financeiro"],
      ["hypervisor-ai-isolation", "isolamento de workloads de IA em camada de virtualização"],
      ["gitops-infra-state-reconciler", "reconciliação de estado entre Git e infraestrutura"],
      ["high-compression-log-router", "roteamento de logs com alta compressão e throughput"],
    ],
  },
  {
    title: "Arquivo, estudo e primeiros projetos",
    repos: [
      ["IA-Financeira", "primeiras explorações de IA aplicada a finanças"],
      ["PersonalAI", "assistente pessoal e estudos de automação"],
      ["calculadora-de-notas", "ferramenta acadêmica utilitária"],
      ["Python_Senac_RIo_On", "exercícios e códigos de curso"],
      ["portfolio-matheus-satriano", "site público com filtros, vitrine e navegação visual"],
    ],
  },
];

export const githubRoutes = [
  {
    want: "Sistemas de mercado e performance",
    repos: ["ultra-low-latency-order-book-engine", "avx512-options-pricing-engine", "LHN-V90-IA"],
  },
  {
    want: "IA local e privacidade",
    repos: ["local-rag-second-mind-vault", "distributed-ai-inference-cluster"],
  },
  {
    want: "Produto full-stack",
    repos: ["multi-channel-analytics-dashboard", "enterprise-b2b-saas-boilerplate"],
  },
  {
    want: "Brasil e fiscal",
    repos: ["fiscal-data-ocr-engine", "tax-loss-harvesting-engine"],
  },
  {
    want: "Infra e operação",
    repos: ["high-compression-log-router", "gitops-infra-state-reconciler", "ebpf-latency-tracer-financial"],
  },
];

export const activityLinks = [
  ["Portfólio", "srsatriano.github.io/portfolio-matheus-satriano", "https://srsatriano.github.io/portfolio-matheus-satriano/"],
  ["GitHub", "github.com/SrSatriano", `${GH}`],
  ["LinkedIn", "linkedin.com/in/matheus-rodrigues-satriano", "https://www.linkedin.com/in/matheus-rodrigues-satriano"],
  ["g.dev", "g.dev/satriano", "https://g.dev/satriano"],
  ["E-mail", "matheussatriano@hotmail.com", "mailto:matheussatriano@hotmail.com"],
  ["Apoio", "buymeacoffee.com/matheussatriano", "https://www.buymeacoffee.com/matheussatriano"],
];

export const githubActivityCards = [
  {
    label: "Detalhes do perfil GitHub",
    src: "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=SrSatriano&theme=github_dark",
  },
  {
    label: "Linguagens por repositório",
    src: "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=SrSatriano&theme=github_dark",
  },
  {
    label: "Sequência de contribuições",
    src: "https://streak-stats.demolab.com/?user=SrSatriano&theme=tokyonight&hide_border=true&background=0f172a&ring=22c55e&fire=38bdf8&currStreakLabel=38bdf8",
  },
];

export function repoLink(slug: string) {
  return `${GH}/${slug}`;
}
