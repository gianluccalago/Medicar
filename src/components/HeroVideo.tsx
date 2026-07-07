import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import videoMp4 from '../assets/hero-loop.mp4'
import videoWebm from '../assets/hero-loop.webm'
import posterSrc from '../assets/hero-poster.jpg'

interface NetworkInformation {
  saveData?: boolean
  effectiveType?: string
}

function useShouldPlayVideo(): boolean {
  const reduced = useReducedMotion()
  const [slow, setSlow] = useState(false)
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection
    if (conn?.saveData || conn?.effectiveType === '2g' || conn?.effectiveType === 'slow-2g') {
      setSlow(true)
    }
  }, [])
  return !reduced && !slow
}

/**
 * Vídeo do hero em loop com poster e overlay de gradiente para legibilidade.
 * prefers-reduced-motion ou conexão lenta/economia de dados → imagem estática.
 *
 * iOS/Android: o React não escreve o ATRIBUTO `muted` no DOM (só a
 * propriedade), e o autoplay móvel exige vídeo mudo desde o parse — por isso
 * forçamos muted/defaultMuted via ref e chamamos play() programaticamente.
 * No Modo de Baixo Consumo do iOS o autoplay é sempre bloqueado; o primeiro
 * toque em qualquer lugar da página retoma o loop.
 */
export function HeroVideo() {
  const playVideo = useShouldPlayVideo()
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!playVideo) return
    const el = ref.current
    if (!el) return

    el.muted = true
    el.defaultMuted = true
    el.setAttribute('muted', '')

    const tryPlay = () => {
      if (el.paused) el.play().catch(() => {})
    }
    tryPlay()
    const onLoaded = () => tryPlay()
    el.addEventListener('loadeddata', onLoaded)

    // Recuperação (Low Power Mode / bloqueio de autoplay): 1º gesto retoma.
    const onFirstGesture = () => tryPlay()
    window.addEventListener('touchstart', onFirstGesture, { once: true, passive: true })
    window.addEventListener('click', onFirstGesture, { once: true })

    return () => {
      el.removeEventListener('loadeddata', onLoaded)
      window.removeEventListener('touchstart', onFirstGesture)
      window.removeEventListener('click', onFirstGesture)
    }
  }, [playVideo])

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {playVideo ? (
        <video
          ref={ref}
          className="h-full w-full object-cover"
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
        >
          {/* MP4/H.264 primeiro (Safari/iOS); WebM/VP9 p/ navegadores sem H.264 */}
          <source src={videoMp4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
        </video>
      ) : (
        <img
          className="h-full w-full object-cover"
          src={posterSrc}
          alt=""
          fetchPriority="high"
        />
      )}
      {/* Overlay para contraste do texto sobre o vídeo */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/45 to-ink/15" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/50 to-transparent" />
    </div>
  )
}
