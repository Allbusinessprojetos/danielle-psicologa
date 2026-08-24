# Danielle Psicóloga — Landing Pages

Projeto para produzir landing pages bonitas, profissionais e rápidas para
Danielle Saquetto Baruffi (Psicóloga, CRP 06/83220). Este arquivo é vivo:
sempre que chegarmos a um resultado bom (estrutura, biblioteca, padrão visual
que funcionou), atualizamos este documento para reaproveitar da próxima vez.

## Stack padrão

- **Next.js (App Router)** + TypeScript.
- **Tailwind CSS** para estilização.
- **shadcn/ui** como base de componentes (botões, cards, accordion, etc.) —
  copiar/adaptar componentes ao invés de instalar libs de UI fechadas.
- **lucide-react** para ícones de linha (combina com o estilo do design de
  referência: ícones outline, delicados).
- **Lenis** para rolagem suave — sozinho já dá sensação de site premium/caro.
  Usar em toda landing.
- **GSAP + ScrollTrigger** para animações ligadas ao scroll (reveals, elementos
  que entram suavemente conforme a pessoa rola). É o que separa o trabalho de
  um "site de template".
- **Framer Motion (Motion)** para microinterações simples de UI (hover,
  aparecer/sumir, transições de estado). Usar com moderação — nada de exagero,
  o público é adultos buscando acolhimento, não uma landing de startup tech.
- **next/font** para tipografia (evitar CDNs externas quando possível) — olhar
  também **Fontshare** (fontshare.com) como fonte de fontes gratuitas de boa
  qualidade se precisar de algo além do Google Fonts.
- **next/image** para todas as imagens (otimização automática).
- **clsx** para classes condicionais.
- Deploy alvo: **Vercel**.

**Fontes de componentes/inspiração de UI** (usar como referência ou para
copiar/adaptar trechos, nunca instalar como dependência fechada):
- shadcn/ui — base de componentes acessíveis.
- [Watermelon UI](https://ui.watermelon.sh/) e [Skiper UI](https://skiper-ui.com/)
  — componentes já estilizados/animados, bom pra acelerar seções específicas.
- [React Bits](https://reactbits.dev/get-started/index) — animações e efeitos
  React prontos (bom repertório para pequenos "uaus").
- [GSAP](https://gsap.com/) e [Lenis](https://lenis.dev/) — documentação
  oficial das libs de animação/scroll acima.

Evitar dependências pesadas ou pouco mantidas. Preferir sempre a opção mais
simples que resolve o problema.

## Referência visual

Ver `referencia lp/` — screenshot de referência do estilo aprovado
("Dani Psicologia Clínica"). Principais elementos a preservar:

- **Paleta**: tons de rosa/terracota (`#c9527a`-ish para destaques, rosa claro
  `#f7e6ea`-ish para fundos de seção), branco, texto em cinza-chumbo escuro.
  Nunca usar cores frias/corporativas (azul, roxo tech) — o tom é acolhedor,
  humano, feminino.
- **Tipografia**: título com serifada elegante (ex: um serif estilo Playfair
  Display / Cormorant) combinada com um sans-serif limpo pro corpo de texto
  (ex: Inter, Poppins). Contraste serif/sans é parte da identidade.
- **Motivos florais** sutis como elementos decorativos de fundo (baixa
  opacidade, não competem com o conteúdo).
- **Ícones outline finos** em círculos com borda, não ícones preenchidos/bold.
- Cards com cantos arredondados generosos, sombras suaves, bastante
  respiro (padding/whitespace).
- CTA principal sempre em pill/rounded-full, cor de destaque (rosa).
- Foto da profissional é protagonista no hero — tratamento acolhedor, sorriso,
  ambiente claro.

## Estrutura de seções (padrão para landing de psicóloga)

1. Header fixo: logo + nome + navegação + CTA "Agendar consulta".
2. Hero: título forte (dor → transformação), subtítulo, 2 CTAs (agendar +
   info sobre atendimento), foto da profissional, selo com nome/CRP.
3. Bloco de credenciais rápidas (anos de experiência, abordagem, formação) —
   grid de 4 itens com ícone.
4. Especialidades/áreas de atuação — grid de cards.
5. "Para quem é" — públicos atendidos (adolescentes, adultos, casais,
   famílias).
6. Depoimentos (carrossel ou grid simples, com estrelas).
7. CTA final + informações de contato/localização.
8. Footer com navegação, contato, redes sociais, CRP.

## Copywriting

- Tom acolhedor, ético, baseado em evidência — nunca sensacionalista.
- Sempre incluir CRP visível (obrigatório para psicólogos, credibilidade).
- Evitar jargão clínico pesado; falar a língua de quem está buscando ajuda.
- CTAs claros: "Agendar consulta", nunca "Saiba mais" genérico como CTA
  principal.

## Requisitos técnicos não-negociáveis

- Responsivo mobile-first (grande parte do tráfego de saúde mental é mobile).
  Celular é uma experiência própria, não "PC encolhido": onde no desktop
  temos um scroll-reveal elaborado, no mobile pode valer mais um slider ou
  layout mais simples e direto.
- Acessibilidade: contraste AA, alt text em imagens, navegação por teclado,
  e **respeitar `prefers-reduced-motion`** — desligar/reduzir animações do
  GSAP/Framer Motion para quem pede menos movimento (evita enjoo e ajuda
  no SEO/boas práticas).
- Performance: Lighthouse ≥ 90 em Performance/Acessibilidade/SEO. Se usar
  sequência de imagens estilo "scroll cinematográfico", fazer via canvas
  (sequência de imagens), não via vídeo — vídeo trava/engasga no scroll.
- SEO básico: metadata (title/description/OG), sitemap, dados estruturados
  de `LocalBusiness`/`MedicalBusiness` quando fizer sentido.
- LGPD: formulário de contato deve ter texto de consentimento; sem trackers
  desnecessários.

## Skills de processo

Usamos o plugin [obra/superpowers](https://github.com/obra/superpowers)
(instalado via `/plugin marketplace add obra/superpowers` +
`/plugin install superpowers`). Skills principais pro fluxo deste projeto:

- **brainstorming** — desenhar a ideia e ter aprovação antes de codar
  qualquer seção/landing nova.
- **systematic-debugging** — achar causa raiz antes de tentar consertar.
- **test-driven-development** — teste antes do código, só pra lógica com
  comportamento (validação de formulário, funções de config), não pra
  JSX/CSS visual.
- **requesting-code-review** — pedir revisão focada antes de deploy.
- **writing-plans** — transformar um design aprovado em plano de tasks.

## Padrões de arquitetura

- **Config central**: todos os dados variáveis do site (nome, CRP, telefone,
  endereço, horários, links de redes sociais, textos-chave) ficam num único
  arquivo de configuração (ex.: `lib/config.ts` ou `content/site.ts`). Nunca
  espalhar esses dados hardcoded pelos componentes — muda num lugar só e
  reflete no site inteiro.

## Checklist de segurança antes de todo deploy

1. **Headers de segurança ligados** (proteção contra clickjacking, injeção
   de conteúdo, etc. — configurar em `next.config.js`).
2. **Nenhum segredo/chave no código nem no chat.** Se algo vazar, rotacionar
   na hora (gerar nova chave e invalidar a antiga).
3. **Revisar o que vai pro Git** antes do commit: nada de imagem/vídeo
   pesado fora do controle, `.env`, ou config pessoal. Usar `.gitignore`
   adequado e conferir arquivo por arquivo (`git status`/`git diff`).

## Aprendizados (atualizar conforme formos testando)

_Registrar no formato "o que aconteceu → o que eu aprendi/mudo a partir de
agora". É a parte mais valiosa deste documento — evita repetir o mesmo erro
em rodadas futuras._

_(vazio por enquanto)_
