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

export const stackDossierGroups = [
  {
    label: "Linguagens e core",
    items: ["Python", "Rust", "C++20", "TypeScript", "Go", "Kotlin", "Java", "JavaScript", "Solidity", "Bash", "MQL5", "SIMD", "AVX-512", "CUDA"],
  },
  {
    label: "Web, APIs, apps e produto",
    items: ["FastAPI", "Next.js", "React", "Vite", "Tailwind CSS", "Node.js", "Jetpack Compose", "PySide6", "Electron", "SQLite (FTS5/WAL)", "PostgreSQL", "Redis", "Pydantic", "WebSocket", "Recharts"],
  },
  {
    label: "IA, mídia e automação",
    items: ["Ollama", "vLLM", "Whisper", "FFmpeg", "LangChain", "TensorFlow", "Keras", "PyTorch", "scikit-learn", "RAG offline", "OCR fiscal BR", "Gemini / Claude / OpenAI"],
  },
  {
    label: "Infra, DevOps e sistemas",
    items: ["Docker", "Docker Compose", "Ansible", "Linux", "GitHub Actions", "Nginx", "GitOps", "eBPF", "QEMU/KVM", "Prometheus", "Grafana", "Zstd", "libp2p", "Hyperledger Fabric"],
  },
  {
    label: "Mercado e Web3",
    items: ["Bybit V5", "MetaTrader 5", "B3 / IR mensal", "Order Book", "Risk Engine", "Solidity", "Hardhat", "Circom (ZK)", "MEV educacional"],
  },
];
