import { Seo } from '../components/Seo'
import { company } from '../data/site'

type LegalDoc = 'privacidade' | 'termos' | 'cookies'

/*
 * PLACEHOLDER LEGAL: os três documentos abaixo são estruturas provisórias.
 * TODO: copiar o texto oficial aprovado pelo jurídico da Medicar antes do
 * lançamento — substituir integralmente o conteúdo de `docs`.
 */
const docs: Record<LegalDoc, { title: string; description: string; sections: string[] }> = {
  privacidade: {
    title: 'Política de Privacidade',
    description:
      'Como a Medicar coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD.',
    sections: [
      'Quais dados coletamos e por quê',
      'Base legal do tratamento (LGPD)',
      'Compartilhamento e armazenamento de dados',
      'Seus direitos como titular',
      'Canal de contato do encarregado (DPO)',
    ],
  },
  termos: {
    title: 'Termos de Uso',
    description: 'Condições de uso do site e dos serviços digitais da Medicar.',
    sections: [
      'Aceite dos termos',
      'Uso permitido do site e das plataformas',
      'Propriedade intelectual',
      'Limitações de responsabilidade',
      'Alterações destes termos',
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    description: 'Quais cookies o site da Medicar utiliza e como gerenciar o seu consentimento.',
    sections: [
      'O que são cookies',
      'Cookies essenciais utilizados',
      'Cookies de análise (somente com consentimento)',
      'Como alterar sua escolha',
    ],
  },
}

export default function Legal({ doc }: { doc: LegalDoc }) {
  const content = docs[doc]
  return (
    <>
      <Seo title={`${content.title} | Medicar`} description={content.description} />
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <h1 className="text-heading-sm font-semi text-ink">{content.title}</h1>
        <p className="mt-4 text-body-lg text-ink-soft">{content.description}</p>

        <div className="mt-8 rounded-card border border-line bg-red-wash/60 p-5">
          <p className="text-body-sm font-medium text-medicar-red-deep">
            Documento em elaboração
          </p>
          <p className="mt-1 text-body-sm text-ink-soft">
            Este é um texto provisório. A versão oficial, aprovada pelo jurídico da Medicar, será
            publicada aqui. {/* PLACEHOLDER: copiar texto oficial */}
          </p>
        </div>

        <ol className="mt-10 space-y-6">
          {content.sections.map((s, i) => (
            <li key={s} className="border-b border-line pb-6">
              <h2 className="text-body-lg font-medium text-ink">
                {i + 1}. {s}
              </h2>
              <p className="mt-2 text-body-sm text-ink-muted">
                Conteúdo oficial em elaboração.
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-caption text-ink-muted">
          {company.legalName} · CNPJ {company.cnpj} · {company.headquarters}
        </p>
      </article>
    </>
  )
}
