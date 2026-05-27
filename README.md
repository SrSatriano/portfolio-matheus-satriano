# Meu portfólio — Matheus Rodrigues Satriano

Site que eu fiz em **Next.js** para reunir o [LHN Sovereign V90](https://github.com/SrSatriano/LHN-V90-IA) e os [trinta repos](https://github.com/SrSatriano) que publico no GitHub.

**No ar:** [srsatriano.github.io/portfolio-matheus-satriano](https://srsatriano.github.io/portfolio-matheus-satriano/)

## Rodar na minha máquina

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build (igual ao GitHub Pages)

```powershell
$env:NODE_ENV = "production"
npm run build
```

Saída em `out/`.

## Onde edito

| Arquivo | O quê |
|---------|--------|
| `data/projects.ts` | Projetos, LHN, meus links |
| `data/media.ts` | Vídeos e imagens de fundo |
| `components/` | Páginas e blocos do site |

## Deploy

Push na `main` dispara o workflow de GitHub Pages (`.github/workflows/deploy-pages.yml`).

MIT © Matheus Rodrigues Satriano
