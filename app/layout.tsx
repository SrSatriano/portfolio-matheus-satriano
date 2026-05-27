import type { Metadata } from "next";
import {
  Cinzel,
  JetBrains_Mono,
  Sora,
  Source_Sans_3,
} from "next/font/google";
import { FilmGrain } from "@/components/cinematic/FilmGrain";
import { ScrollProgress } from "@/components/cinematic/ScrollProgress";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matheus Rodrigues Satriano — Portfólio",
  description:
    "Desenvolvedor back-end · HFT, quant, IA local e Web3. LHN Sovereign V90 e 30 projetos open source.",
  openGraph: {
    title: "Matheus Rodrigues Satriano — Portfólio",
    description: "Portfólio de Matheus Rodrigues Satriano — HFT, IA local e Web3",
    type: "website",
    url: "https://srsatriano.github.io/portfolio-matheus-satriano/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${sora.variable} ${source.variable} ${jetbrains.variable}`}
    >
      <body className="relative font-body min-h-screen">
        <ScrollProgress />
        <FilmGrain />
        <div className="relative z-[1]">{children}</div>
      </body>
    </html>
  );
}
