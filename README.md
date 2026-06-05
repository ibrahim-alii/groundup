# Learning Notes

A personal, growing knowledge base where I write from-scratch notes as I learn topics in AI, ML, and systems programming. Each topic is one self-contained page — concepts, code, diagrams, and how to evaluate what you build.

## Live topics

| Topic | Page | Status |
|---|---|---|
| RAG, A to Z | `rag.html` | Live |

## Planned topics

- **CUDA programming** — threads, blocks, grids, memory hierarchy, writing and optimizing GPU kernels from first principles
- **More AI/ML topics** — to be added as I learn them (transformers, fine-tuning, inference optimization, etc.)

## Project structure

```
├── index.html        landing hub
├── styles.css        shared styles (layout, typography, TOC, tooltips, diagrams)
├── app.js            shared behavior (active TOC, tap tooltips, mobile nav)
├── rag.html          RAG course
└── README.md
```

Pages pull Prism (syntax highlighting) and Google Fonts from CDN — an internet connection is needed on first load.

## Adding a new topic

1. Add an accent block in `styles.css` (`.topic-cuda` already exists as an example; tweak colors for new topics).
2. Copy `rag.html` → `<topic>.html`, set `<body class="topic-<name>">`, replace the content.
3. Keep the same TOC and section markup (`<nav class="toc">`, `<section id="...">`) — the sidebar highlighting and scroll behavior work automatically.
4. Add a `.card` in `index.html`; remove the `soon` class once the page is live.

## Deploy

Push to GitHub and enable Pages (Settings → Pages → Deploy from branch `main`, root `/`). All links are relative so the site works at any subpath.
