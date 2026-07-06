# Medicar — Site Institucional

Site institucional e comercial da Medicar (medicar.com.br), empresa brasileira de
emergências médicas fundada em 1993.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS v4 (tokens via `@theme` em `src/index.css`)
- React Router (SPA multi-página com code-splitting por rota)
- Supabase (apenas captação de leads do formulário de contato)
- Framer Motion (animações sutis, com respeito a `prefers-reduced-motion`)
- Sem CMS: todo o conteúdo em `/src/data/*.ts` tipado

## Comandos

```bash
npm install
npm run dev       # desenvolvimento
npm run build     # build de produção (tsc + vite)
npm run lint      # oxlint
npm run preview   # preview do build
```

## Supabase (formulário de contato)

1. Crie um projeto no Supabase e rode o SQL abaixo.
2. Copie `.env.example` para `.env` e preencha `VITE_SUPABASE_URL` e
   `VITE_SUPABASE_ANON_KEY`.

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  assunto text not null,
  nome text not null,
  empresa text,
  telefone text not null,
  email text not null,
  regiao text,
  regiao_outra text,
  mensagem text not null,
  origem_pagina text,
  consentimento boolean not null default false
);
alter table leads enable row level security;
create policy "anon insert only" on leads for insert to anon with check (true);
-- nenhuma policy de select para anon
```

Sem as variáveis de ambiente o site funciona normalmente; apenas o envio do
formulário exibe uma mensagem orientando o contato por telefone/WhatsApp.

## Conteúdo e pendências editoriais

- **Depoimentos** (`src/data/testimonials.ts`): placeholders ilustrativos com selo
  visível. Ao receber os depoimentos reais autorizados, atualizar o texto e marcar
  `approved: true` — o selo some automaticamente.
- **Clientes** (`src/data/clients.ts`): nenhum logo é exibido até `authorized: true`
  (autorização de uso de marca). Enquanto isso a seção mostra o texto agregado.
- **Blog** (`src/data/posts.ts`): 8 títulos reais com corpo "em migração".
- **Páginas legais** (`src/pages/Legal.tsx`): estruturas provisórias — copiar o
  texto oficial do jurídico.
- **Vermelho da marca**: token único `--color-medicar-red` em `src/index.css`,
  extraído do vídeo do hero; validar contra o manual de marca oficial.
- **URL de agendamento da Clínica** (`src/data/site.ts`): placeholder Feegow.

## SPA em produção

Configure o servidor para servir `index.html` em todas as rotas (fallback de SPA).
