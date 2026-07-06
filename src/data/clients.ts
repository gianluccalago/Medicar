/**
 * Prova social — clientes.
 * A exibição de qualquer logo/nome depende de AUTORIZAÇÃO DE USO DE MARCA do
 * cliente. Renderizar SOMENTE itens com `authorized: true`.
 * Enquanto nenhum estiver autorizado, a seção mostra a contagem agregada
 * (fallback em <LogoStrip />) sem citar nomes.
 *
 * Lista completa conhecida (manter comentada até autorização formal de cada um):
 * Hospital Sírio-Libanês, Albert Einstein, Rede D'Or, Dasa, Ford, MP-SP,
 * Hilton, 3M, HP, IBM, Dell, AxisMed, Bombardier, Bosch, Tishman Speyer,
 * Parque D. Pedro, Bondinho Pão de Açúcar, Santa Saúde, Avenues, Google,
 * Oracle, Mercado Livre, Prevent Senior, Amil, Serasa Experian, CBRE, Nestlé,
 * CNN Brasil, Raízen, Reckitt, COFCO, FAAP, Savoy, Sermed, Carrefour,
 * Oba Hortifruti, Rede Voa, Aliansce Sonae, Unimed, Aero Médica, Unimed Santos.
 */

export interface Client {
  name: string
  authorized: boolean
}

export const clients: readonly Client[] = [
  { name: 'Hospital Sírio-Libanês', authorized: false },
  { name: 'Albert Einstein', authorized: false },
  { name: "Rede D'Or", authorized: false },
  { name: 'Dasa', authorized: false },
  { name: 'Ford', authorized: false },
  { name: 'MP-SP', authorized: false },
  { name: 'Hilton', authorized: false },
  { name: '3M', authorized: false },
  { name: 'HP', authorized: false },
  { name: 'IBM', authorized: false },
  { name: 'Dell', authorized: false },
  { name: 'AxisMed', authorized: false },
  { name: 'Bombardier', authorized: false },
  { name: 'Bosch', authorized: false },
  { name: 'Tishman Speyer', authorized: false },
  { name: 'Parque D. Pedro', authorized: false },
  { name: 'Bondinho Pão de Açúcar', authorized: false },
  { name: 'Santa Saúde', authorized: false },
  { name: 'Avenues', authorized: false },
  { name: 'Google', authorized: false },
  { name: 'Oracle', authorized: false },
  { name: 'Mercado Livre', authorized: false },
  { name: 'Prevent Senior', authorized: false },
  { name: 'Amil', authorized: false },
  { name: 'Serasa Experian', authorized: false },
  { name: 'CBRE', authorized: false },
  { name: 'Nestlé', authorized: false },
  { name: 'CNN Brasil', authorized: false },
  { name: 'Raízen', authorized: false },
  { name: 'Reckitt', authorized: false },
  { name: 'COFCO', authorized: false },
  { name: 'FAAP', authorized: false },
  { name: 'Savoy', authorized: false },
  { name: 'Sermed', authorized: false },
  { name: 'Carrefour', authorized: false },
  { name: 'Oba Hortifruti', authorized: false },
  { name: 'Rede Voa', authorized: false },
  { name: 'Aliansce Sonae', authorized: false },
  { name: 'Unimed', authorized: false },
  { name: 'Aero Médica', authorized: false },
  { name: 'Unimed Santos', authorized: false },
]

export const authorizedClients = clients.filter((c) => c.authorized)

/** Fallback exibido enquanto nenhum logo está autorizado. */
export const clientsFallbackText =
  'Empresas líderes de tecnologia, saúde, indústria e varejo confiam na Medicar.'
