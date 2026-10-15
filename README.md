# CifraWealth — site público

Site institucional/apresentação em React, TypeScript e Vite, com páginas para início, recursos, sobre e central de dúvidas. A direção visual usa os tokens e a tipografia Inter do frontend CifraWealth autenticado.

## Requisitos

- Node.js compatível com a versão de Vite declarada em `package.json` (Node 22 ou superior recomendado para este projeto).
- npm.

## Executar

```bash
npm ci
npm run dev
```

## Validar

```bash
npm run build
npm run lint
```

## Páginas

- `/` — visão geral da proposta da CifraWealth.
- `/produtos` — recursos da plataforma, com filtros por categoria.
- `/duvidas` — perguntas frequentes, busca e filtros por tema.
- `/wealthy` — sobre a CifraWealth e seus princípios.

## Identidade visual

Os tokens estão em `src/styles/App.css` e espelham a paleta do frontend autenticado: canvas `#0b1020`, surface `#121827`, elevated `#161f32`, hover `#1e293b`, foreground `#f1f5f9`, muted `#94a3b8` e accent `#2dd4bf`. A tipografia primária é Inter.

## Antes de publicar

Configure a URL real de acesso à aplicação autenticada e publique a Política de Privacidade, os Termos de Uso e canais de suporte. Confira o conteúdo de `REVISAO.md` e `UI_UX_GUIDE.md` para os pontos de validação de produto, conteúdo e acessibilidade. Não usar ambientes de desenvolvimento com dados financeiros reais.


## Botões de login e cadastro

O cabeçalho e os CTAs da página inicial direcionam para o frontend autenticado (`/login` e `/register`). Copie `.env.example` para `.env` e ajuste `VITE_APP_URL` para a URL onde o `CifraWealth_FrontEnd` está rodando. Por padrão, usa `http://localhost:5173`.
