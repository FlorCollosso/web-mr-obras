import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PORTFOLIO_PROJECTS } from '../data'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const thumbsRef = useRef<HTMLDivElement | null>(null)

  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug)

  // La galería no debería repetir la imagen de portada, pero por las dudas
  // (si algún proyecto la tiene cargada dos veces en los datos) la filtramos acá.
  const galleryImages = project
    ? project.gallery.filter((image) => image !== project.cover)
    : []

  useEffect(() => {
    if (activeImageIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImageIndex(null)
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImageIndex])

  useEffect(() => {
    const el = thumbsRef.current
    if (!el) return

    const updateScrollState = () => {
      setCanScrollPrev(el.scrollLeft > 4)
      setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
    }

    updateScrollState()
    el.addEventListener('scroll', updateScrollState)
    window.addEventListener('resize', updateScrollState)

    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [galleryImages.length])

  const scrollThumbs = (direction: 1 | -1) => {
    const el = thumbsRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' })
  }

  if (!project) {
    return (
      <main className="min-h-screen pt-32 bg-dark-alt text-white px-6">
        <div className="max-w-[1300px] mx-auto">
          <p>Proyecto no encontrado.</p>
          <Link to="/portfolio" className="btn-primary mt-6">
            Volver al portfolio
          </Link>
        </div>
      </main>
    )
  }

  const images = [project.cover, ...galleryImages]
  const activeImage =
    activeImageIndex !== null ? images[activeImageIndex] : null

  const openLightbox = (index: number) => {
    setActiveImageIndex(index)
  }

  const closeLightbox = () => {
    setActiveImageIndex(null)
  }

  function nextImage() {
    setActiveImageIndex((current) => {
      if (current === null) return current
      return current === images.length - 1 ? 0 : current + 1
    })
  }

  function prevImage() {
    setActiveImageIndex((current) => {
      if (current === null) return current
      return current === 0 ? images.length - 1 : current - 1
    })
  }

  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-dark-alt">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-3xl" />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/45">
          <Link to="/" className="hover:text-primary-300 transition-colors">
            Inicio
          </Link>
          <span className="text-white/25">/</span>
          <Link to="/portfolio" className="hover:text-primary-300 transition-colors">
            Portfolio
          </Link>
          <span className="text-white/25">/</span>
          <span className="max-w-[160px] truncate font-semibold text-white/80 sm:max-w-none">
            {project.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:items-stretch">
          <div className="flex flex-col lg:h-full max-h-[800px]">
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="group w-full min-h-0 rounded-[28px] overflow-hidden border border-white/15 shadow-2xl text-left h-[360px] md:h-[440px] lg:h-auto lg:flex-1"
            >
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>

            {galleryImages.length > 0 && (
              <div className="relative mt-4 shrink-0">
                {canScrollPrev && (
                  <>
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-dark-alt to-transparent" />
                    <button
                      type="button"
                      onClick={() => scrollThumbs(-1)}
                      className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-dark/80 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                      aria-label="Ver miniaturas anteriores"
                    >
                      ‹
                    </button>
                  </>
                )}

                <div
                  ref={thumbsRef}
                  className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
                  style={{ scrollbarWidth: 'none' }}
                >
                  {galleryImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => openLightbox(index + 1)}
                      className="group h-36 w-[calc((100%-2rem)/3)] shrink-0 snap-start rounded-2xl overflow-hidden border border-white/10"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - imagen ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>

                {canScrollNext && (
                  <>
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-dark-alt to-transparent" />
                    <button
                      type="button"
                      onClick={() => scrollThumbs(1)}
                      className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-dark/80 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                      aria-label="Ver más miniaturas"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <aside className="glass-card bg-white/5 p-6 md:p-8 sticky top-28">
            <span className="section-badge">{project.category}</span>

            <h1 className="mt-7 text-4xl md:text-5xl font-black text-white leading-[1.05]">
              {project.title}
            </h1>

            <p className="mt-5 text-[14px] text-white/70 leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Info label="Sistema" value={project.system} />
              <Info label="Superficie" value={project.area} />
              <Info label="Ubicación" value={project.location} />
              <Info label="Año" value={project.year} />
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-bold text-white mb-4">
                Características del proyecto
              </h2>

              <ul className="space-y-3 text-[15px]">
                {project.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-3 text-primary-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <a href="/#contacto" className="btn-primary w-full mt-8 text-base">
              Consultar un proyecto similar
            </a>
          </aside>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center px-4 py-6"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Cerrar imagen"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <img
            src={activeImage}
            alt={project.title}
            className="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 text-white/80 text-sm font-bold px-4 py-2">
            {activeImageIndex! + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/8 border border-white/10 p-3">
      <p className="text-[12px] uppercase tracking-widest text-white/40 font-bold">
        {label}
      </p>
      <p className="text-[15px] mt-1 text-white font-bold">{value}</p>
    </div>
  )
}