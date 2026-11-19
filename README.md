# Portfólio — Matheus Rodrigues Satriano

Site em **Next.js** que reúne o [LHN Sovereign V90](https://github.com/SrSatriano/LHN-V90-IA), o [CortaLive](https://github.com/SrSatriano/CortaLive-Basico) e todos os repositórios públicos que mantenho no GitHub.

**No ar:** [srsatriano.github.io/portfolio-matheus-satriano](https://srsatriano.github.io/portfolio-matheus-satriano/)

## O que tem na página

| Seção | O que mostra |
|---|---|
| Abertura | quem sou, números atualizados e atalho para o lançamento mais recente |
| CortaLive | fluxo de corte, celular com o corte animado, Básico × Pro e downloads |
| LHN V90 | arquitetura e camadas do terminal quant |
| Projetos | todos os repositórios públicos, com busca, filtro por frente e atalhos (novos, destaques, CI, site/download) |
| Em números | projetos por frente, linguagens e linha do tempo |
| Sobre, Stack, Contato | como eu construo, ferramentas e canais |

## De onde vêm os dados

`data/catalog.json` é a mesma base que gera o README do meu perfil
([SrSatriano/SrSatriano](https://github.com/SrSatriano/SrSatriano) → `data/projects.json`).
Para incluir ou mudar um projeto, edite lá, copie o arquivo para cá e faça push:
cards, filtros, contagens, gráficos e linha do tempo são derivados dele (`data/catalog.ts`).

| Arquivo | O quê |
|---|---|
| `data/catalog.json` | projetos públicos, frentes, cores e textos |
| `data/projects.ts` | dados do LHN e meus links |
| `components/` | seções da página |

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

## Deploy

Push na `main` dispara o workflow de GitHub Pages (`.github/workflows/deploy-pages.yml`).

MIT © Matheus Rodrigues Satriano
