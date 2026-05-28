/** Mídia do portfólio: vídeos locais com posters remotos como fallback leve. */

export type ShowreelScene = {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  poster: string;
};

const videoPath = (file: string) => `videos/${file}`;

export const cinematicVideos = {
  hero: {
    src: videoPath("terminal-quant-trading-infra.mp4"),
    poster:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80&auto=format&fit=crop",
  },
  hft: {
    src: videoPath("hft-quant-low-latency.mp4"),
    poster:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=85&auto=format&fit=crop",
  },
  lhn: {
    src: videoPath("lhn-sovereign-v90.mp4"),
    poster:
      "https://images.unsplash.com/photo-1642790551117-bc83fb7a8d7e?w=1920&q=80&auto=format&fit=crop",
  },
  about: {
    src: videoPath("local-ai-systems-private.mp4"),
    poster:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80&auto=format&fit=crop",
  },
  contact: {
    src: videoPath("project-map-explore-build.mp4"),
    poster:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80&auto=format&fit=crop",
  },
} as const;

export const showreelScenes: ShowreelScene[] = [
  {
    id: "terminal",
    title: "Terminal Quant",
    subtitle: "Infra de trading local, risco e execução em uma tela",
    src: cinematicVideos.hero.src,
    poster: cinematicVideos.hero.poster,
  },
  {
    id: "hft",
    title: "Baixa latência",
    subtitle: "Order books, pricing SIMD e caminhos quentes de mercado",
    src: cinematicVideos.hft.src,
    poster: cinematicVideos.hft.poster,
  },
  {
    id: "ai",
    title: "IA local",
    subtitle: "RAG offline, inferência privada e pipelines soberanos",
    src: cinematicVideos.about.src,
    poster: cinematicVideos.about.poster,
  },
  {
    id: "lhn",
    title: "LHN V90",
    subtitle: "Sistema quantitativo com IA local e leitura operacional",
    src: cinematicVideos.lhn.src,
    poster: cinematicVideos.lhn.poster,
  },
  {
    id: "map",
    title: "Mapa de projetos",
    subtitle: "Exploração visual dos módulos, tiers e repositórios",
    src: cinematicVideos.contact.src,
    poster: cinematicVideos.contact.poster,
  },
];
