# Fontes — Galano Grotesque Alt

A fonte oficial do site é a **Galano Grotesque Alt** (comercial, de René Bieder).
Por ser licenciada, os arquivos **não** estão versionados aqui. Coloque os
`.woff2` licenciados nesta pasta, exatamente com estes nomes:

```
public/fonts/
  GalanoGrotesqueAlt-Light.woff2      (Light   → weight 300)
  GalanoGrotesqueAlt-Medium.woff2     (Medium  → weight 500)
  GalanoGrotesqueAlt-Bold.woff2       (Bold    → weight 700)
  GalanoGrotesqueAlt-ExtraBold.woff2  (ExtraBold → weight 800)
  GalanoGrotesqueAlt-Black.woff2      (Black/Heavy → weight 900)
```

Os `@font-face` já estão declarados em `src/index.css` apontando para
`/fonts/GalanoGrotesqueAlt-*.woff2`. Assim que os arquivos existirem, a Galano
passa a ser usada automaticamente (com `font-display: swap`).

## Mapeamento de pesos aplicado
- **Títulos** (h1/h2, heros, seções): ExtraBold/Black → 800.
- **Títulos de card** (h3/h4): Bold → 700.
- **Textos menores** (corpo, descrições, labels): Medium → 500 (e Light 300 onde couber).

## Fallback
Enquanto os arquivos não são adicionados, o site usa **Montserrat** (grotesca
geométrica livre, a mais próxima da Galano), já instalada via `@fontsource`.
Se você tiver apenas `.otf`/`.ttf`, converta para `.woff2` (ex.: `fonttools`,
`woff2_compress` ou um conversor online) para melhor performance.
