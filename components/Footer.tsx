import { profile } from "@/data/projects";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-center text-xs text-slate-600 sm:text-right">
          Construído com Next.js · Documentação honesta ·{" "}
          <span className="text-accent">pt-BR</span>
        </p>
      </div>
    </footer>
  );
}
