"use client";

import { Icon } from "@/components/Icon";
import { MagneticLink } from "@/components/cinematic/MagneticLink";
import { Reveal } from "@/components/cinematic/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { repoUrl } from "@/data/catalog";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SITE = "https://srsatriano.github.io/CortaLive-Basico/";
const BASICO = repoUrl("CortaLive-Basico");
const PRO = repoUrl("CortaLive-Pro");

const steps = [
  { icon: "film", title: "Vídeo ou live", text: "MP4, MKV ou a pasta de blocos .ts de uma live gravada." },
  { icon: "wave", title: "Picos de áudio", text: "Grito, risada, explosão: os momentos fortes aparecem no volume." },
  { icon: "captions", title: "Whisper no PC", text: "Transcrição local. O áudio não sai da sua máquina." },
  { icon: "spark", title: "IA dá a nota", text: "Escolhe os melhores trechos (0 a 10) e escreve título e hashtags." },
  { icon: "phone", title: "Corte 9:16", text: "1080×1920 com webcam em cima, jogo embaixo e legenda queimada." },
];

const outputs = [
  { file: "corte.mp4", desc: "vertical, pronto para postar" },
  { file: "capa.jpg", desc: "frame do momento com o título" },
  { file: "_POST.txt", desc: "legenda, hashtags e crédito ao criador" },
];

const compare: Array<[string, string, string]> = [
  ["Corta vídeo ou live gravada", "✓", "✓"],
  ["IA escolhe os momentos e escreve o post", "✓", "✓"],
  ["Legenda palavra a palavra + capa", "✓", "✓"],
  ["Resolução", "1080×1920", "até 4K"],
  ["Lê o chat ao vivo para achar momentos", "—", "✓"],
  ["Grava lives sozinho (Twitch, YouTube, Kick)", "—", "✓"],
  ["Publica e agenda no TikTok, Shorts e Reels", "—", "✓"],
  ["Painel com agenda e métricas", "—", "✓"],
];

const WORDS = ["QUE", "JOGADA", "INSANA"];

function PhoneMock() {
  const reduced = usePrefersReducedMotion();
  const [word, setWord] = useState(1);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setWord((w) => (w + 1) % WORDS.length), 650);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div className="relative mx-auto w-[260px]">
      <div className="absolute -inset-10 rounded-full bg-pink-500/20 blur-3xl" aria-hidden />
      <div className="relative rounded-[2.4rem] border-2 border-pink-400/50 bg-black p-2.5 shadow-[0_30px_80px_-20px_rgba(236,72,153,0.45)]">
        <div className="absolute left-1/2 top-2.5 z-20 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-black" />
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.9rem]">
          {/* webcam */}
          <div className="absolute inset-x-0 top-0 h-[42%] bg-gradient-to-br from-slate-600 to-slate-900">
            <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full" aria-hidden>
              <circle cx="100" cy="58" r="24" fill="#cbd5e1" />
              <ellipse cx="100" cy="128" rx="48" ry="36" fill="#cbd5e1" />
              <circle cx="92" cy="54" r="2.8" fill="#0f172a" />
              <circle cx="108" cy="54" r="2.8" fill="#0f172a" />
              <ellipse cx="100" cy="68" rx="6" ry="5" fill="#0f172a">
                {!reduced && <animate attributeName="ry" values="4;8;4" dur="1.2s" repeatCount="indefinite" />}
              </ellipse>
            </svg>
            <span className="absolute left-3 top-8 rounded bg-red-500 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">
              ● AO VIVO
            </span>
          </div>
          {/* jogo */}
          <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-blue-900 to-violet-700">
            <svg viewBox="0 0 200 170" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
              <polygon points="0,120 45,70 85,105 130,55 200,115 200,170 0,170" fill="#312e81" />
              <polygon points="0,150 60,115 120,145 165,122 200,138 200,170 0,170" fill="#1e1b4b" />
              <circle cx="140" cy="88" r="14" fill="#fbbf24" opacity="0.85">
                {!reduced && (
                  <>
                    <animate attributeName="r" values="8;22;8" dur="1.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.95;0.15;0.95" dur="1.6s" repeatCount="indefinite" />
                  </>
                )}
              </circle>
            </svg>
          </div>
          {/* título de gancho */}
          <div className="absolute inset-x-3 top-[11%] z-10 rounded-md bg-black/60 px-2 py-1.5 text-center text-[13px] font-black tracking-wide text-white">
            ELE NÃO ACREDITOU
          </div>
          {/* legenda palavra a palavra */}
          <div className="absolute inset-x-0 top-[47%] z-10 flex justify-center gap-2 px-2">
            {WORDS.map((w, i) => (
              <span
                key={w}
                className={`text-[17px] font-black transition-colors duration-150 [paint-order:stroke] [-webkit-text-stroke:3px_black] ${
                  i === word ? "text-yellow-300" : "text-white"
                }`}
              >
                {w}
              </span>
            ))}
          </div>
          {/* reações */}
          {!reduced && (
            <motion.span
              className="absolute bottom-16 right-4 z-10 text-xl text-red-500"
              animate={{ y: [0, -70], opacity: [1, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              aria-hidden
            >
              ♥
            </motion.span>
          )}
          {/* barra de progresso */}
          <div className="absolute inset-x-4 bottom-4 z-10 h-1 overflow-hidden rounded-full bg-white/25">
            <motion.div
              className="h-full rounded-full bg-pink-400"
              initial={{ width: reduced ? "60%" : "0%" }}
              animate={reduced ? undefined : { width: ["0%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
      <div className="absolute -left-20 top-16 hidden flex-col gap-3 sm:flex">
        {[
          ["9:16", "border-pink-400/60 text-pink-300"],
          ["legenda", "border-amber-400/60 text-amber-300"],
          ["capa + post", "border-accent/60 text-accent"],
        ].map(([label, tone]) => (
          <span
            key={label}
            className={`rounded-full border bg-ink/80 px-3 py-1 text-center font-mono text-[10px] font-semibold backdrop-blur ${tone}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CortaLive() {
  return (
    <section id="cortalive" className="relative scroll-mt-24 overflow-hidden border-y border-pink-500/20 px-6 py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_40%,rgba(236,72,153,0.16),transparent),radial-gradient(ellipse_50%_40%_at_10%_90%,rgba(251,191,36,0.08),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em]">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-400/50 bg-red-500/10 px-3 py-1 font-bold text-red-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
                Novo · nov 2026
              </span>
              <span className="text-pink-300">Para criadores de conteúdo</span>
            </div>
            <h2 className="mt-5 flex items-center gap-4 font-display text-5xl font-bold sm:text-7xl">
              <Icon name="scissors" className="h-11 w-11 text-pink-400 sm:h-14 sm:w-14" strokeWidth={2} />
              <span className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text text-transparent">
                CortaLive
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-white">
              Vídeos e lives viram cortes verticais com legenda e IA, prontos para
              TikTok, YouTube Shorts e Instagram Reels.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
              Você entrega o vídeo; ele encontra os momentos fortes, transcreve no
              seu PC, deixa a IA escolher e dar nota aos melhores trechos e monta o
              corte com título de gancho e crédito ao criador. Roda no Windows,
              sem placa de vídeo, com a sua chave de IA (Gemini, Claude, OpenAI ou
              Vertex).
            </p>

            <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="group relative rounded-xl border border-pink-400/20 last:col-span-2 sm:last:col-span-1 bg-ink-50/70 p-4 backdrop-blur transition hover:border-pink-400/50"
                >
                  <span className="font-mono text-[10px] text-pink-400/80">0{i + 1}</span>
                  <span className="mt-2 flex h-9 w-9 items-center justify-center rounded-lg bg-pink-500/15 text-pink-300">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-white">{s.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{s.text}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticLink
                href={`${BASICO}/releases/latest`}
                external
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_30px_-6px_rgba(52,211,153,0.6)]"
              >
                <Icon name="download" className="h-4 w-4" strokeWidth={2.2} />
                Baixar o Básico · grátis
              </MagneticLink>
              <MagneticLink
                href={SITE}
                external
                className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-400/10 px-6 py-3 text-sm font-semibold text-amber-200"
              >
                <Icon name="globe" className="h-4 w-4" />
                Conhecer o Pro
              </MagneticLink>
              <MagneticLink
                href={BASICO}
                external
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/60 px-6 py-3 text-sm text-slate-200"
              >
                <Icon name="github" className="h-4 w-4" />
                Código (MIT)
              </MagneticLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <PhoneMock />
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-50/70 backdrop-blur">
              <div className="grid grid-cols-[1fr_88px_88px] border-b border-white/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:grid-cols-[1fr_120px_120px]">
                <span>Recurso</span>
                <a href={BASICO} target="_blank" rel="noopener noreferrer" className="text-center text-emerald-300 hover:underline">
                  Básico
                </a>
                <a href={SITE} target="_blank" rel="noopener noreferrer" className="text-center text-amber-300 hover:underline">
                  Pro
                </a>
              </div>
              {compare.map(([label, basic, pro]) => (
                <div
                  key={label}
                  className="grid grid-cols-[1fr_88px_88px] items-center border-b border-white/5 px-5 py-3 text-sm last:border-0 sm:grid-cols-[1fr_120px_120px]"
                >
                  <span className="text-slate-300">{label}</span>
                  <span className={`text-center font-mono text-xs ${basic === "—" ? "text-slate-600" : "text-emerald-300"}`}>{basic}</span>
                  <span className="text-center font-mono text-xs text-amber-300">{pro}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-xl border border-white/10 bg-ink-50/70 p-6 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-pink-300">Para cada corte</p>
              <ul className="mt-5 space-y-3">
                {outputs.map((o) => (
                  <li key={o.file} className="flex items-start gap-3">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.4} />
                    <span>
                      <code className="font-mono text-sm text-white">{o.file}</code>
                      <span className="block text-xs text-slate-400">{o.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-slate-400">
                Parou no meio? Rode de novo: ele continua de onde parou e não repete
                cortes já feitos.
              </div>
              <a
                href={`${PRO}/releases/latest`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-amber-300 hover:text-amber-200"
              >
                Instaladores do Pro <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
