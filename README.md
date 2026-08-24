# Danielle Psicóloga

Landing page para Danielle Saquetto Baruffi (Psicóloga, CRP 06/83220),
construída em Next.js (App Router) + TypeScript, com Tailwind CSS, Lenis
(rolagem suave) e GSAP + ScrollTrigger (animações de scroll).

Todo o conteúdo variável do site (nome, contato, endereço, horários, textos)
fica centralizado em `lib/config.ts` — nunca hardcoded nos componentes.

Ver `CLAUDE.md` na raiz do repositório para as convenções completas do
projeto (stack, padrões visuais, checklist de deploy).

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Comandos úteis

```bash
npm test        # roda os testes (Vitest)
npm run build   # build de produção
npm run lint    # lint (ESLint)
```

## Deploy

Alvo de deploy: [Vercel](https://vercel.com).
