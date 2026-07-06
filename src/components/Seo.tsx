import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { company, phones } from '../data/site'
import { bases } from '../data/bases'

interface SeoProps {
  title: string
  description: string
  /** Injeta o JSON-LD Organization + MedicalBusiness (Home/Contato) */
  withOrgSchema?: boolean
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${company.siteUrl}#organization`,
  name: company.name,
  legalName: company.legalName,
  url: company.siteUrl,
  logo: `${company.siteUrl}/favicon.svg`,
  foundingDate: String(company.founded),
  taxID: company.cnpj,
  slogan: 'Nossa missão é salvar vidas',
  telephone: phones.emergency.display,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: phones.emergency.display,
      contactType: 'emergency',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    {
      '@type': 'ContactPoint',
      telephone: phones.commercial.display,
      contactType: 'sales',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Caramuru, 644 – República',
    addressLocality: 'Ribeirão Preto',
    addressRegion: 'SP',
    postalCode: '14030-000',
    addressCountry: 'BR',
  },
  location: bases.map((b) => ({
    '@type': 'Place',
    name: `Medicar ${b.city}`,
    address: { '@type': 'PostalAddress', streetAddress: b.address, addressLocality: b.city, addressCountry: 'BR' },
  })),
}

export function Seo({ title, description, withOrgSchema = false }: SeoProps) {
  const { pathname } = useLocation()
  const canonical = `${company.siteUrl}${pathname === '/' ? '' : pathname}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Medicar — Soluções em Saúde" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${company.siteUrl}/og-image.jpg`} />
      <meta property="og:locale" content="pt_BR" />
      <meta name="twitter:card" content="summary_large_image" />
      {withOrgSchema && (
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      )}
    </Helmet>
  )
}
