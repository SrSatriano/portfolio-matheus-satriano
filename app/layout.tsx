import type { Metadata } from "next";
import { JetBrains_Mono, Sora, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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
    "Desenvolvedor back-end · HFT, quant, IA local e Web3. 30 projetos open source com documentação em português.",
  openGraph: {
    title: "Matheus Rodrigues Satriano — Portfólio",
    description: "HFT · Quant · IA local · Web3 · 30 repositórios",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${source.variable} ${jetbrains.variable}`}
    >
      <body className="font-body min-h-screen">{children}</body>
    </html>
  );
}
