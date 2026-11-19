import type { Metadata, Viewport } from "next";
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

const SITE = "https://srsatriano.github.io/portfolio-matheus-satriano/";
const DESCRIPTION =
  "Desenvolvedor back-end: LHN Sovereign V90 (terminal quant local), CortaLive (cortes verticais com IA) e mais de 40 projetos open source em C++, Rust, Python, TypeScript, Go e Kotlin.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Matheus Rodrigues Satriano · Portfólio",
  description: DESCRIPTION,
  keywords: [
    "Matheus Rodrigues Satriano",
    "SrSatriano",
    "back-end",
    "trading quantitativo",
    "IA local",
    "CortaLive",
    "LHN Sovereign V90",
    "portfólio",
  ],
  authors: [{ name: "Matheus Rodrigues Satriano", url: "https://github.com/SrSatriano" }],
  alternates: { canonical: SITE },
  openGraph: {
    title: "Matheus Rodrigues Satriano · Portfólio",
    description: DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    url: SITE,
    images: [{ url: "images/quant-workstation-hero.png", alt: "Estação de trabalho quant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Rodrigues Satriano · Portfólio",
    description: DESCRIPTION,
    images: ["images/quant-workstation-hero.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#060a12",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matheus Rodrigues Satriano",
  jobTitle: "Desenvolvedor Back-End",
  url: SITE,
  sameAs: [
    "https://github.com/SrSatriano",
    "https://www.linkedin.com/in/matheus-rodrigues-satriano",
    "https://g.dev/satriano",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ScrollProgress />
        <FilmGrain />
        <div className="relative z-[1]">{children}</div>
      </body>
    </html>
  );
}
