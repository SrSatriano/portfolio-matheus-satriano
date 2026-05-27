/** Vídeos royalty-free (Mixkit) — trocar por gravações próprias em `public/videos/` quando quiser */

export type ShowreelScene = {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  poster?: string;
};

export const cinematicVideos = {
  hero: {
    src: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-stock-market-data-on-a-computer-screen-4471-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80&auto=format&fit=crop",
  },
  lhn: {
    src: "https://assets.mixkit.co/videos/preview/mixkit-financial-data-on-a-monitor-4472-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1642790551117-bc83fb7a8d7e?w=1920&q=80&auto=format&fit=crop",
  },
  about: {
    src: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-in-close-up-1728-large.mp4",
  },
  contact: {
    src: "https://assets.mixkit.co/videos/preview/mixkit-night-traffic-in-a-city-with-light-trails-4269-large.mp4",
  },
} as const;

export const showreelScenes: ShowreelScene[] = [
  {
    id: "hft",
    title: "Mercados & latência",
    subtitle: "Order books, pricing SIMD e terminais de risco",
    src: "https://assets.mixkit.co/videos/preview/mixkit-stock-market-data-on-a-computer-screen-4470-large.mp4",
  },
  {
    id: "ai",
    title: "IA local & mídia",
    subtitle: "RAG offline, inferência e pipelines de conteúdo",
    src: "https://assets.mixkit.co/videos/preview/mixkit-programming-code-on-a-screen-close-up-1727-large.mp4",
  },
  {
    id: "infra",
    title: "Sistemas & escala",
    subtitle: "Logs, eBPF, GitOps e infraestrutura",
    src: "https://assets.mixkit.co/videos/preview/mixkit-server-room-with-blinking-lights-4289-large.mp4",
  },
];
