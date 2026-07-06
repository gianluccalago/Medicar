import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/*
 * Captação de leads do formulário de contato.
 * Tabela `leads` com RLS: anon pode APENAS inserir (nenhuma policy de select).
 * Ver README para o SQL de criação.
 */

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null

export interface LeadInsert {
  assunto: string
  nome: string
  empresa: string | null
  telefone: string
  email: string
  regiao: string | null
  regiao_outra: string | null
  mensagem: string
  origem_pagina: string | null
  consentimento: boolean
}

export async function insertLead(lead: LeadInsert): Promise<{ error: string | null }> {
  if (!supabase) {
    return {
      error:
        'O envio on-line está temporariamente indisponível. Fale com a gente pelos telefones ou WhatsApp.',
    }
  }
  const { error } = await supabase.from('leads').insert(lead)
  return { error: error ? 'Não foi possível enviar sua mensagem. Tente novamente.' : null }
}
