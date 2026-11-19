const GH = "https://github.com/SrSatriano";

export function githubUrl(slug: string) {
  return `${GH}/${slug}`;
}

/** Sistema principal — LHN Sovereign V90 */
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
  bio: "Graduando em Ciência da Computação. Construo o LHN Sovereign V90 para operar e estudar cripto na Bybit, o CortaLive para criadores de conteúdo e mantenho dezenas de repos abertos, cada um com README em português.",
  email: "matheussatriano@hotmail.com",
  linkedin: "https://www.linkedin.com/in/matheus-rodrigues-satriano",
  github: "https://github.com/SrSatriano",
  gdev: "https://g.dev/satriano",
  buymeacoffee: "https://www.buymeacoffee.com/matheussatriano",
  portfolioUrl: "https://srsatriano.github.io/portfolio-matheus-satriano/",
};

