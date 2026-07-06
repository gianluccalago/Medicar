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
  /**
   * TODO(asset): imagem do logo (cinza neutro, ~40px de altura). Enquanto não
   * houver o arquivo, o marquee exibe o nome do cliente em texto cinza.
   */
  logo?: string
}

export const clients: readonly Client[] = [
  { name: 'Hospital Sírio-Libanês', authorized: true },
  { name: 'Albert Einstein', authorized: true },
  { name: "Rede D'Or", authorized: true },
  { name: 'Dasa', authorized: true },
  { name: 'Ford', authorized: true },
  { name: 'MP-SP', authorized: true },
  { name: 'Hilton', authorized: true },
  { name: '3M', authorized: true },
  { name: 'HP', authorized: true },
  { name: 'IBM', authorized: true },
  { name: 'Dell', authorized: true },
  { name: 'AxisMed', authorized: true },
  { name: 'Bombardier', authorized: true },
  { name: 'Bosch', authorized: true },
  { name: 'Tishman Speyer', authorized: true },
  { name: 'Parque D. Pedro', authorized: true },
  { name: 'Bondinho Pão de Açúcar', authorized: true },
  { name: 'Santa Saúde', authorized: true },
  { name: 'Avenues', authorized: true },
  { name: 'Google', authorized: true },
  { name: 'Oracle', authorized: true },
  { name: 'Mercado Livre', authorized: true },
  { name: 'Prevent Senior', authorized: true },
  { name: 'Amil', authorized: true },
  { name: 'Serasa Experian', authorized: true },
  { name: 'CBRE', authorized: true },
  { name: 'Nestlé', authorized: true },
  { name: 'CNN Brasil', authorized: true },
  { name: 'Raízen', authorized: true },
  { name: 'Reckitt', authorized: true },
  { name: 'COFCO', authorized: true },
  { name: 'FAAP', authorized: true },
  { name: 'Savoy', authorized: true },
  { name: 'Sermed', authorized: true },
  { name: 'Carrefour', authorized: true },
  { name: 'Oba Hortifruti', authorized: true },
  { name: 'Rede Voa', authorized: true },
  { name: 'Aliansce Sonae', authorized: true },
  { name: 'Unimed', authorized: true },
  { name: 'Aero Médica', authorized: true },
  { name: 'Unimed Santos', authorized: true },
]

export const authorizedClients = clients.filter((c) => c.authorized)

/** Fallback exibido enquanto nenhum logo está autorizado. */
export const clientsFallbackText =
  'Empresas líderes de tecnologia, saúde, indústria e varejo confiam na Medicar.'
