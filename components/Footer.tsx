import { formatDate, updated } from "@/data/catalog";
import { profile } from "@/data/projects";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-center text-xs text-slate-600 sm:text-right">
          Atualizado em {formatDate(updated)} · Next.js · docs em{" "}
          <span className="text-accent">pt-BR</span> ·{" "}
          <a
            href="https://github.com/SrSatriano/portfolio-matheus-satriano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 underline-offset-4 hover:text-accent hover:underline"
          >
            código deste site
          </a>
        </p>
      </div>
    </footer>
  );
}
