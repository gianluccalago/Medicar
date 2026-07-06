import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import videoSrc from '../assets/hero-loop.mp4'
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
 */
export function HeroVideo() {
  const playVideo = useShouldPlayVideo()
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {playVideo ? (
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
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
