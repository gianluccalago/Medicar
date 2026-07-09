import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { LoadingMark } from '../components/LoadingMark'
import { AsteriskMark } from '../components/AsteriskMark'
import { phones, whatsapp } from '../data/site'
import { bases } from '../data/bases'
import { insertLead } from '../lib/supabase'
import { maskPhoneBR, isValidPhoneBR } from '../lib/phone'

const subjects = [
  'Falar com departamento comercial',
  'Falar com departamento financeiro/cobrança',
  'Reclamação',
  'SAC',
  'Sugestão',
  'Adquirir plano para minha empresa',
  'Adquirir plano para mim e minha família',
] as const

const regions = [
  'Belo Horizonte',
  'Brasília',
  'Campinas',
  'Goiânia',
  'Ribeirão Preto',
  'Rio de Janeiro',
  'São Paulo',
  'Santos',
  'Outros',
] as const

/** Pré-seleção de assunto vinda dos CTAs (?assunto=empresa|familia). */
function initialSubject(param: string | null): string {
  if (param === 'empresa') return 'Adquirir plano para minha empresa'
  if (param === 'familia') return 'Adquirir plano para mim e minha família'
  return ''
}

const inputClass =
  'w-full rounded-btn border border-line-strong bg-canvas px-3.5 py-2.5 text-body-sm text-ink placeholder:text-ink-muted focus:border-ink-muted'
const labelClass = 'mb-1.5 block text-caption font-medium text-ink'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const origem = searchParams.get('origem')

  const [assunto, setAssunto] = useState(() => initialSubject(searchParams.get('assunto')))
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [regiao, setRegiao] = useState('')
  const [regiaoOutra, setRegiaoOutra] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [consent, setConsent] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Honeypot antispam: bots preenchem o campo oculto — finge sucesso e descarta
    if (honeypot) {
      setStatus('success')
      return
    }
    if (!isValidPhoneBR(telefone)) {
      setStatus('error')
      setErrorMsg('Informe um telefone válido com DDD.')
      return
    }
    setStatus('loading')
    const { error } = await insertLead({
      assunto,
      nome,
      empresa: empresa || null,
      telefone,
      email,
      regiao: regiao || null,
      regiao_outra: regiaoOutra || null,
      mensagem,
      origem_pagina: origem,
      consentimento: consent,
    })
    if (error) {
      setStatus('error')
      setErrorMsg(error)
    } else {
      setStatus('success')
    }
  }

  return (
    <>
      <Seo
        title="Contato | Medicar — Soluções em Saúde"
        description="Fale com a Medicar: comercial, SAC, financeiro ou adesão de planos. Emergência 24h: 0800 941 5455."
        withOrgSchema
      />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
              Contato
            </p>
 <h1 className="mt-3 text-heading-sm text-ink md:text-heading">
              Fale conosco
            </h1>
            <p className="mt-4 text-body-lg text-ink-soft">
              Nossa equipe está pronta para atender você. Entre em contato para tirar dúvidas,
              solicitar informações ou conhecer melhor nossos serviços.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {status === 'success' ? (
            <div
              role="status"
              className="rounded-card border border-line bg-surface p-8 text-center"
            >
              <AsteriskMark size={28} className="mx-auto" />
              <h2 className="mt-4 text-subheading text-ink">Recebemos a sua mensagem</h2>
              <p className="mx-auto mt-3 max-w-md text-body-sm text-ink-soft">
                Nossa equipe retorna pelo telefone ou e-mail informado, normalmente em até 1 dia
                útil. Se o assunto for urgente, a Central 24h atende agora: {phones.emergency.display}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false} aria-label="Formulário de contato">
              <h2 className="text-subheading text-ink">Entre em contato</h2>
              <p className="mb-6 mt-2 text-body-sm text-ink-soft">
                Entre em contato com a Medicar para solicitar propostas, informações técnicas ou
                suporte. Retornaremos o mais breve possível.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="assunto" className={labelClass}>
                    Assunto <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="assunto"
                    required
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Selecione o assunto
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="nome" className={labelClass}>
                    Nome <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="nome"
                    required
                    autoComplete="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className={labelClass}>
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    autoComplete="organization"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className={labelClass}>
                    Telefone <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="telefone"
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    placeholder="(16) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(maskPhoneBR(e.target.value))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    E-mail <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="regiao" className={labelClass}>
                    Região
                  </label>
                  <select
                    id="regiao"
                    value={regiao}
                    onChange={(e) => setRegiao(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Selecione a região</option>
                    {regions.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {regiao === 'Outros' && (
                  <div>
                    <label htmlFor="regiao-outra" className={labelClass}>
                      Qual região?
                    </label>
                    <input
                      id="regiao-outra"
                      value={regiaoOutra}
                      onChange={(e) => setRegiaoOutra(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                )}

                <div className="sm:col-span-2">
                  <label htmlFor="mensagem" className={labelClass}>
                    Mensagem <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="mensagem"
                    required
                    rows={5}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className={inputClass}
                  />
                </div>

                {/* Honeypot antispam — invisível para pessoas, atraente para bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Não preencha este campo</label>
                  <input
                    id="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-body-sm text-ink-soft">
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-[#b01522]"
                    />
                    <span>
                      Autorizo o uso dos meus dados para retorno do contato, conforme a{' '}
                      <a
                        href="/politica-de-privacidade"
                        className="font-medium text-medicar-red-deep hover:underline"
                      >
                        Política de Privacidade
                      </a>
                      . <span aria-hidden="true">*</span>
                    </span>
                  </label>
                </div>
              </div>

              {status === 'error' && (
                <p role="alert" className="mt-4 rounded-btn bg-red-wash px-4 py-3 text-body-sm text-medicar-red-deep">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-btn bg-medicar-red px-6 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-medicar-red-deep disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    {/* label vazio: o texto visível "Enviando…" já anuncia o estado */}
                    <LoadingMark size={18} variant="onRed" label="" />
                    Enviando…
                  </>
                ) : (
                  'Enviar mensagem'
                )}
              </button>
              <p className="mt-3 text-caption text-ink-muted">
                Prometemos não utilizar suas informações de contato para enviar qualquer tipo de
                SPAM.
              </p>
            </form>
          )}

          <aside className="space-y-6">
            <div className="rounded-card border border-line bg-surface p-6">
 <h2 className="text-body-lg text-ink">Fale agora</h2>
              <ul className="mt-4 space-y-3 text-body-sm text-ink-soft">
                <li>
                  <a href={phones.emergency.tel} className="font-medium text-medicar-red-deep hover:underline">
                    {phones.emergency.label}: {phones.emergency.display}
                  </a>
                </li>
                <li>
                  <a href={phones.commercial.tel} className="hover:text-ink hover:underline">
                    {phones.commercial.label}: {phones.commercial.display}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsapp.general.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink hover:underline"
                  >
                    WhatsApp: {whatsapp.general.display}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsapp.clinic.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink hover:underline"
                  >
                    WhatsApp Clínica: {whatsapp.clinic.display}
                  </a>
                </li>
                <li>
                  <a href={phones.clinic.tel} className="hover:text-ink hover:underline">
                    Clínica (fixo): {phones.clinic.display}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-card border border-line p-6">
 <h2 className="text-body-lg text-ink">Nossas bases</h2>
              <dl className="mt-4 space-y-4">
                {bases.map((b) => (
                  <div key={`${b.city}-${b.address}`}>
                    <dt className="text-body-sm font-medium text-ink">{b.city}</dt>
                    <dd className="text-caption text-ink-muted">{b.address}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
