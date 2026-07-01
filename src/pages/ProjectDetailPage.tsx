import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PORTFOLIO_PROJECTS } from '../data'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug)

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

  const images = [project.cover, ...project.gallery]
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
        <Link
          to="/portfolio"
          className="inline-flex items-center text-primary-400 font-bold mb-8 hover:text-primary-300"
        >
          ← Volver al portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="group w-full rounded-[28px] overflow-hidden border border-white/15 shadow-2xl text-left"
            >
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-[360px] md:h-[520px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {project.gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => openLightbox(index + 1)}
                  className="group rounded-2xl overflow-hidden border border-white/10 h-36"
                >
                  <img
                    src={image}
                    alt={`${project.title} - imagen ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>

          <aside className="glass-card bg-white/5 p-6 md:p-8 sticky top-28">
            <span className="section-badge">{project.category}</span>

            <h1 className="mt-7 text-4xl md:text-5xl font-black text-white leading-[1.05]">
              {project.title}
            </h1>

            <p className="mt-5 text-white/70 leading-relaxed">
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

              <ul className="space-y-3">
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
    <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
      <p className="text-xs uppercase tracking-widest text-white/40 font-bold">
        {label}
      </p>
      <p className="mt-1 text-white font-bold">{value}</p>
    </div>
  )
}