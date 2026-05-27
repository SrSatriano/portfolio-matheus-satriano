"use client";

import { profile } from "@/data/projects";
import { useEffect, useState } from "react";

const links = [
  { href: "#lhn-v90", label: "LHN V90" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/90 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-sm font-semibold tracking-tight text-white"
        >
          MRS<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-400 transition hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-xs text-accent transition hover:bg-accent/20"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
