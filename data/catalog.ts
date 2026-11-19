/**
 * Catálogo dos repositórios públicos de @SrSatriano.
 *
 * `catalog.json` é a mesma base usada para gerar o README do perfil
 * (github.com/SrSatriano/SrSatriano → data/projects.json). Para atualizar,
 * copie o arquivo de lá para cá; tudo nesta página é derivado dele.
 */
import raw from "./catalog.json";

export type CategoryId =
  | "quant"
  | "ai"
  | "media"
  | "product"
  | "web3"
  | "infra"
  | "origins";

export type IconName =
  | "chart"
  | "chip"
  | "play"
  | "briefcase"
  | "cube"
  | "server"
  | "sprout";

export type Category = {
  id: CategoryId;
  title: string;
  short: string;
  color: string;
  color_light: string;
  emoji: string;
  icon: IconName;
  intro: string;
};

export type Project = {
  name: string;
  cat: CategoryId;
  lang: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  created: string;
  featured?: boolean;
  new?: boolean;
  ci?: string;
  license?: string;
  demo?: string;
  download?: string;
  no_lang?: boolean;
};

type Catalog = {
  owner: string;
  updated: string;
  categories: Category[];
  projects: Project[];
};

const catalog = raw as Catalog;

export const owner = catalog.owner;
export const updated = catalog.updated;
export const categories = catalog.categories;
export const projects = catalog.projects;

export const categoryById = Object.fromEntries(
  categories.map((c) => [c.id, c])
) as Record<CategoryId, Category>;

export function repoUrl(name: string) {
  return `https://github.com/${owner}/${name}`;
}

export function ciUrl(p: Project) {
  return p.ci ? `${repoUrl(p.name)}/actions/workflows/${p.ci}` : undefined;
}

export const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  "C++": "#f34b7d",
  Rust: "#dea584",
  Go: "#00ADD8",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Solidity: "#AA6746",
  Kotlin: "#A97BFF",
  Java: "#b07219",
  Shell: "#89e051",
  HTML: "#e34c26",
};

const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

export function formatMonth(isoMonth: string) {
  const [y, m] = isoMonth.split("-");
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${Number(d)} ${MONTHS[Number(m) - 1]} ${y}`;
}

const MILESTONES: Record<string, string> = {
  "2023-06": "Primeiros projetos de IA e finanças",
  "2025-02": "Curso de Python (Senac Rio)",
  "2026-04": "LHN Sovereign V90 público",
  "2026-05": "Módulos open source + portfólio",
  "2026-10": "Site do Satriano Studio",
  "2026-11": "CortaLive, ferramentas de produto e apps",
};

function computeStats() {
  const langMap = new Map<string, number>();
  for (const p of projects) {
    if (p.no_lang) continue;
    langMap.set(p.lang, (langMap.get(p.lang) ?? 0) + 1);
  }
  const languages = Array.from(langMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));

  const byCategory = categories.map((c) => ({
    ...c,
    count: projects.filter((p) => p.cat === c.id).length,
  }));

  const monthMap = new Map<string, Project[]>();
  for (const p of projects) {
    const k = p.created.slice(0, 7);
    monthMap.set(k, [...(monthMap.get(k) ?? []), p]);
  }
  const timeline = Array.from(monthMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({
      month,
      label: formatMonth(month),
      milestone: MILESTONES[month] ?? "",
      items,
    }));

  return {
    total: projects.length,
    categories: categories.length,
    languages,
    languageCount: languages.length,
    withCi: projects.filter((p) => p.ci).length,
    mit: projects.filter((p) => p.license === "MIT").length,
    withSite: projects.filter((p) => p.demo).length,
    newCount: projects.filter((p) => p.new).length,
    byCategory,
    timeline,
  };
}

export const stats = computeStats();
