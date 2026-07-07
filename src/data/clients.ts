/**
 * Prova social — clientes.
 *
 * Os logos abaixo foram extraídos do material institucional oficial da Medicar
 * (apresentação "Alguns dos nossos clientes"), portanto são clientes reais e
 * exibidos com respaldo do próprio material da empresa. Renderizar SOMENTE
 * itens com `authorized: true`. A tira de logos aparece em escala de cinza
 * (ver <LogoStrip />), o que uniformiza marcas de cores muito distintas.
 */

// Vite: resolve todos os webp de logos de clientes para URLs (hash incluído).
const logoUrls = import.meta.glob('../assets/clients/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function logo(slug: string): string | undefined {
  return logoUrls[`../assets/clients/${slug}.webp`]
}

export interface Client {
  name: string
  authorized: boolean
  /** URL do logo (webp com transparência, altura nativa ~110px). */
  logo?: string
}

export const clients: readonly Client[] = [
  { name: 'Hospital Sírio-Libanês', authorized: true, logo: logo('hospital-sirio-libanes') },
  { name: 'Albert Einstein', authorized: true, logo: logo('albert-einstein') },
  { name: "Rede D'Or", authorized: true, logo: logo('rede-d-or') },
  { name: 'Dasa', authorized: true, logo: logo('dasa') },
  { name: 'Ford', authorized: true, logo: logo('ford') },
  { name: 'MP-SP', authorized: true, logo: logo('mp-sp') },
  { name: 'Hilton', authorized: true, logo: logo('hilton') },
  { name: '3M', authorized: true, logo: logo('3m') },
  { name: 'HP', authorized: true, logo: logo('hp') },
  { name: 'IBM', authorized: true, logo: logo('ibm') },
  { name: 'Dell', authorized: true, logo: logo('dell') },
  { name: 'AxisMed', authorized: true, logo: logo('axismed') },
  { name: 'The Blue Officemall', authorized: true, logo: logo('the-blue-officemall') },
  { name: 'Afonso França', authorized: true, logo: logo('afonso-franca') },
  { name: 'Bombardier', authorized: true, logo: logo('bombardier') },
  { name: 'Bosch', authorized: true, logo: logo('bosch') },
  { name: 'Tishman Speyer', authorized: true, logo: logo('tishman-speyer') },
  { name: 'Parque D. Pedro', authorized: true, logo: logo('parque-d-pedro') },
  { name: 'Bondinho Pão de Açúcar', authorized: true, logo: logo('bondinho-pao-de-acucar') },
  { name: 'Santa Saúde', authorized: true, logo: logo('santa-saude') },
  { name: 'Avenues', authorized: true, logo: logo('avenues') },
  { name: 'Google', authorized: true, logo: logo('google') },
  { name: 'Oracle', authorized: true, logo: logo('oracle') },
  { name: 'Mercado Livre', authorized: true, logo: logo('mercado-livre') },
  { name: 'Prevent Senior', authorized: true, logo: logo('prevent-senior') },
  { name: 'Amil', authorized: true, logo: logo('amil') },
  { name: 'Serasa Experian', authorized: true, logo: logo('serasa-experian') },
  { name: 'CBRE', authorized: true, logo: logo('cbre') },
  { name: 'Nestlé', authorized: true, logo: logo('nestle') },
  { name: 'CNN Brasil', authorized: true, logo: logo('cnn-brasil') },
  { name: 'Raízen', authorized: true, logo: logo('raizen') },
  { name: 'Reckitt', authorized: true, logo: logo('reckitt') },
  { name: 'COFCO', authorized: true, logo: logo('cofco') },
  { name: 'FAAP', authorized: true, logo: logo('faap') },
  { name: 'Savoy', authorized: true, logo: logo('savoy') },
  { name: 'Sermed', authorized: true, logo: logo('sermed') },
  { name: 'Carrefour', authorized: true, logo: logo('carrefour') },
  { name: 'Oba Hortifruti', authorized: true, logo: logo('oba-hortifruti') },
  { name: 'Rede Voa', authorized: true, logo: logo('rede-voa') },
  { name: 'Aliansce Sonae', authorized: true, logo: logo('aliansce-sonae') },
  { name: 'Unimed', authorized: true, logo: logo('unimed') },
  { name: 'Aero Médica', authorized: true, logo: logo('aero-medica') },
  { name: 'Unimed Santos', authorized: true, logo: logo('unimed-santos') },
]

export const authorizedClients = clients.filter((c) => c.authorized)

/** Fallback exibido enquanto nenhum logo está autorizado. */
export const clientsFallbackText =
  'Empresas líderes de tecnologia, saúde, indústria e varejo confiam na Medicar.'
