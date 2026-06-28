# Editor de Markdown

Projeto 9 da lista Front-End Júnior. Editor de Markdown com preview em tempo real e exportação.

## Funcionalidades

- **Edição** com barra de formatação (título, negrito, itálico, citação, código, link, listas)
- **Preview em tempo real** — HTML renderizado a cada tecla, sanitizado com DOMPurify
- **Exportação** para `.md` e `.html`
- Estatísticas do documento (palavras, caracteres, linhas, tempo de leitura)
- Persistência automática no LocalStorage
- Tema claro/escuro

## Stack

SvelteKit + Svelte 5 (Runes) · TypeScript · Tailwind CSS v4 · Lucide · Zod · `marked` · `dompurify`

## Arquitetura

Segue o `CLAUDE.md`: camadas `Page → Section → Compose → Module → Service → Gateway`.

- `packages/editor` — domínio do editor (markdown, stats, formatação, exportação, persistência)
- `packages/theme` — tema claro/escuro
- `packages/notifications` — toasts

Nenhum componente acessa Service ou Gateway diretamente; o Module é a única fachada.

## Scripts

```bash
npm run dev      # desenvolvimento
npm run check    # svelte-check
npm run lint     # prettier + eslint
npm run build    # build de produção (adapter-vercel)
```
