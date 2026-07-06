# Checklist do adendo (prints + planilha)

Mapeamento dos itens do adendo para o que foi implementado. Itens marcados com
⏳ dependem de assets/textos externos da Medicar.

## 1. Tipografia
- **Par serif + sans** — ✅ `--font-display: Lora` (títulos, peso regular) + `--font-sans: DM Sans` (corpo). Tokens em `src/index.css`.
  - ⚠️ Observação: os prints da agência usam, na verdade, uma **sans arredondada pesada** nos títulos, não uma serifada. O adendo determina explicitamente uma serifada (e vence em conflito), então adotamos **Lora**. TODO no token para trocar pela fonte original quando o arquivo for enviado.
- Item 0 — nenhum semibold/bold em texto corrente — ✅ títulos em regular; ênfase por tamanho/cor.
- Itens 23/41/55/70 — tracking normal/levemente negativo, nunca expandido — ✅ base `letter-spacing: -0.01em`.

## 2. Identidade dos prints
- Item 1 — barra utilitária em **vinho** (`--color-medicar-wine`), texto em **caixa normal** — ✅ header.
- Item 2 — vídeos sem controles/play (autoplay muted loop playsInline) — ✅ `HeroVideo` e `MediaFrame`.
- Item 3 — H1 sólido, **sem outline**, overlay de gradiente — ✅ hero da Home.
- Faixas institucionais vermelhas com motivo do asterisco — ✅ `CtaBand`, "Movidos pela vida", "Um hospital sobre rodas".
- Itens 26/29/44/47/58/61/73/76 — radius único: caixas **16px**, botões **8px** — ✅ tokens.
- Itens 28/46/60/75 — botões menores (14px sans 500, padding compacto) — ✅ `Buttons`.
- Footer em **vinho**: logo sem box (11), texto curto (12), ícones sociais simples (13), sem ícones nos menus (14), sem divisórias (15), fonte menor/line-height reduzido (16), links legais (17) — ✅ `Footer`.

## 3. Ajustes globais
- Item 0 — sem semibold em corrente — ✅.
- Item 2 — sem vídeo com play — ✅.
- Itens 27/45/59/74 — entrada fade+slide 300–400ms, once, sem bounce — ✅ `Reveal` (360ms).
- Item 49 — sem hover/zoom em fotos, **exceto** grid "Nossas Soluções" (item 4) — ✅.

## 4. Home
- Item 4 — grid de soluções revela imagem no hover (fallback estático no mobile) — ✅.
- Item 5 — rótulos dos "Grandes Números" em caixa normal — ✅ (`StatsBand`).
- Item 6 — "Empresas que confiam": marquee com pausa on-hover, respeitando `authorized` — ✅ `LogoStrip` (sem logos autorizados → texto agregado).
- Item 7 — depoimentos placeholder com flag `approved` — ✅. ⏳ textos reais.
- Itens 8/9/10 — blog na Home: 4 posts recentes, thumbs sem corte, cards compactos — ✅.

## 5. Navegação e estrutura
- Item 18 — "Quem somos" com link direto (sem intermediária) — ✅.
- Item 19 — sem faixa preta em páginas internas; heros claros/foto — ✅.
- Itens 38/39/52/53/67/68/85/86 — "Outras soluções" centralizado, página atual em vermelho sem link — ✅ `OtherSolutions`.

## 6. Template de serviço
- Item 24/42/56/71 — hero com foto + título 2 linhas (serviço + "Medicar" vermelho) — ✅. ⏳ foto de fundo específica por serviço (usando recorte oficial + placeholder).
- Benefícios em body-sm compactos — ✅.
- Itens 31/50/63/78, 32/51/64/79 — "Como funciona" com área de **vídeo** + texto mais estreito — ✅ `MediaFrame`. ⏳ vídeos reais.
- Vantagens em grid arredondado — ✅.
- Item 34 — CTA "Quero contratar" — ✅.
- Itens 35/36/37 — Área Protegida "Um hospital sobre rodas", texto sobre foto, sem linhas — ✅.
- Itens 65/66 — Locação: carrossel de modelos (Tradicional/4x4/Furgão) auto-scroll — ✅.
- Itens 82/83/84 — Telemedicina White Label + mockup flutuante — ✅ (`[COPY PENDENTE DE APROVAÇÃO]`).

## 7. Páginas novas
- `/solucoes/empresa/nr-1` — ✅ (copy conservadora, sem certificações/prazos; `PENDENTE APROVAÇÃO`).
- `/solucoes/lar-protegido` — ✅ (`PENDENTE APROVAÇÃO`, sem preço).
- Item 87 — NR-1, Pet e Lar Protegido no template padrão — ✅.

## 8. Conflitos resolvidos
- Serif+sans substitui Inter-only — ✅.
- Radius 16px substitui 12px — ✅.
- Um único botão chromatic por viewport — ✅ mantido.
- Vinho como barra utilitária + footer — ✅.
- Conteúdo canônico (telefones, endereços, números, serviços, preços, form/Supabase, flags) — ✅ preservado.

## Pendências que dependem da Medicar (⏳)
- Fonte original dos títulos (se não for a serifada Lora escolhida).
- Fotos de fundo específicas por serviço e vídeos das seções "Como funciona".
- Textos reais de depoimentos (trocar e marcar `approved: true`).
- Autorização de uso de marca dos clientes (`authorized: true`) para exibir logos.
- Aprovação das copies de NR-1, Lar Protegido e Telemedicina White Label.
- Ícones/handles oficiais de redes sociais (usando ícones simples padrão).
