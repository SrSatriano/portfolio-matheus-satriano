# Portfólio — Matheus Rodrigues Satriano

Site pessoal em **Next.js 14** + **Tailwind CSS**: [LHN Sovereign V90](https://github.com/SrSatriano/LHN-V90-IA) e os **30 módulos** open source [@SrSatriano](https://github.com/SrSatriano).

**Online:** [srsatriano.github.io/portfolio-matheus-satriano](https://srsatriano.github.io/portfolio-matheus-satriano/)

---

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) — em desenvolvimento não há `basePath`.

## Build estático (igual ao GitHub Pages)

```bash
# Windows PowerShell
$env:NODE_ENV = "production"
npm run build
```

A saída fica em `out/`. Em produção o `basePath` é `/portfolio-matheus-satriano`.

## Deploy — GitHub Pages

O workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) faz build e publica automaticamente no `main`.

1. Repositório: `SrSatriano/portfolio-matheus-satriano`
2. **Settings → Pages → Build and deployment:** **GitHub Actions**
3. Push em `main` ou dispare manualmente: **Actions → Deploy GitHub Pages → Run workflow**

URL pública: `https://srsatriano.github.io/portfolio-matheus-satriano/`

## Deploy alternativo (Vercel)

Importe o repositório em [vercel.com/new](https://vercel.com/new). Para subpath na Vercel, ajuste `basePath` em `next.config.mjs` ou use domínio próprio na raiz.

## Personalizar

| Arquivo | Conteúdo |
|---------|----------|
| `data/projects.ts` | Projetos, LHN, links e perfil |
| `tailwind.config.ts` | Cores e tema |
| `app/globals.css` | Estilos globais |

## Licença

MIT © Matheus Rodrigues Satriano
