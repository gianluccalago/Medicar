interface MediaFrameProps {
  /** Imagem de poster / placeholder (obrigatória) */
  poster: string
  /** Vídeo .mp4 opcional. Quando ausente, exibe só o poster (TODO: asset real). */
  videoSrc?: string
  /** true = foto retangular preenchendo o frame (object-cover); false = recorte sobre gradiente */
  cover?: boolean
  alt: string
  className?: string
}

/**
 * Área de mídia da seção "Como funciona", preparada para VÍDEO.
 * Quando há `videoSrc`, reproduz em autoplay muted loop playsInline SEM
 * controles nem botão de play (adendo — crítico). Enquanto o vídeo real não
 * chega, mostra o poster (placeholder). NÃO renderiza nenhum controle.
 */
export function MediaFrame({ poster, videoSrc, cover = false, alt, className = '' }: MediaFrameProps) {
  return (
    <div className={`overflow-hidden rounded-card border border-line bg-surface ${className}`}>
      {videoSrc ? (
        <video
          className="aspect-video h-full w-full object-cover"
          src={videoSrc}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
        />
      ) : cover ? (
        // Foto retangular (cena) preenchendo todo o frame.
        <img
          src={poster}
          alt={alt}
          loading="lazy"
          className="aspect-video h-full w-full object-cover"
        />
      ) : (
        // TODO: substituir pelo vídeo "Como funciona" do serviço quando disponível.
        // Poster de foto recortada (transparente) exibido em object-contain sobre gradiente.
        <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-red-wash to-surface p-6">
          <img src={poster} alt={alt} loading="lazy" className="max-h-full w-auto object-contain" />
        </div>
      )}
    </div>
  )
}
