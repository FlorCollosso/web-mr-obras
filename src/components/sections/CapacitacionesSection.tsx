import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'

import capacitacionMiramar from '../../assets/images/capacitacion-miramar-04.jpeg'

const trainingImageModules = import.meta.glob(
  '../../assets/images/capacitacion-*.{jpeg,jpg,png,webp}',
  {
    eager: true,
    import: 'default',
  }
) as Record<string, string>

const GALLERY_IMAGES = Object.entries(trainingImageModules)
  .filter(([path]) => !path.includes('capacitacion-miramar-04.jpeg'))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

const TRAINING_IMAGES = [capacitacionMiramar, ...GALLERY_IMAGES]

const COURSE_CONTENT = [
  'Introducción a la construcción en seco',
  'Reconocimiento de materiales y herramientas',
  'Perfilería, placas y fijaciones',
  'Criterios básicos de armado y montaje',
  'Demostraciones prácticas en obra',
]

export default function CapacitacionesSection() {
  const { ref, inView } = useInView()
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const [mainImage, ...galleryImages] = TRAINING_IMAGES
  const images = TRAINING_IMAGES

  const closeLightbox = () => setActiveImageIndex(null)

  const showPrevImage = () => {
    if (activeImageIndex === null) return

    setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length)
  }

  const showNextImage = () => {
    if (activeImageIndex === null) return

    setActiveImageIndex((activeImageIndex + 1) % images.length)
  }

  useEffect(() => {
    if (activeImageIndex === null) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowLeft') {
        showPrevImage()
      }

      if (event.key === 'ArrowRight') {
        showNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImageIndex])

  return (
    <section
      id="capacitaciones"
      className="relative py-24 lg:py-36 overflow-hidden"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, #e6f9f7 0%, #b1ece5 100%)',
      }}
    >
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-24 -right-24 w-[360px] h-[360px] rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Capacitaciones"
          theme="light"
          title={
            <>
              También enseñamos{' '}
              <span className="text-primary-500">
                construcción <br /> en seco
              </span>
            </>
          }
        />

        <div
          className={`grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-stretch transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Columna visual */}
          <div className="flex h-full min-h-0 flex-col gap-5">
            <button
              type="button"
              onClick={() => setActiveImageIndex(0)}
              className="relative w-full flex-1 min-h-[380px] rounded-[24px] overflow-hidden group shadow-xl border border-white/30 text-left"
              aria-label="Abrir imagen principal del curso"
            >
              {mainImage && (
                <img
                  src={mainImage}
                  alt="Curso de construcción en seco dictado por MR Obras"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-dark-alt/20 to-dark-alt/95" />

              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-100 border border-white/20">
                  Curso práctico
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-2xl md:text-3xl font-black text-white leading-tight max-w-[620px]">
                  Curso de construcción en seco para municipios e instituciones
                </p>

                <p className="text-sm md:text-base text-primary-300 mt-2 font-semibold">
                  Formación técnica con enfoque práctico
                </p>

                <p className="mt-4 max-w-[680px] text-white/70 leading-relaxed">
                  MR Obras dicta capacitaciones contratadas por municipalidades de la
                  provincia de Córdoba, acercando herramientas concretas de formación
                  laboral a distintas comunidades.
                </p>
              </div>
            </button>

            {galleryImages.length > 0 && (
              <div className="grid grid-cols-3 gap-4 shrink-0">
                {galleryImages.slice(0, 3).map((image, index) => {
                  const imageIndex = index + 1

                  return (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImageIndex(imageIndex)}
                      className="relative h-36 md:h-40 lg:h-44 rounded-[18px] overflow-hidden border border-white/40 shadow-lg group"
                      aria-label={`Abrir imagen del curso ${imageIndex + 1}`}
                    >
                      <img
                        src={image}
                        alt={`Imagen del curso de construcción en seco ${imageIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-alt/50" />
                      <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors" />
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Columna de contenido */}
          <div className="flex flex-col gap-5">
            {/* Bloque 1 */}
            <div className="relative rounded-[24px] overflow-hidden border border-white/30 shadow-xl bg-gradient-to-br from-primary-600 to-dark-alt p-6 md:p-7">
              <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full bg-white/15 blur-3xl pointer-events-none" />

              <div className="relative">
                <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-100 border border-white/15">
                  Formación laboral
                </span>

                <h3 className="mt-5 text-2xl md:text-3xl font-black text-white leading-tight">
                  Una propuesta pensada para aprender haciendo
                </h3>

                <p className="mt-4 text-white/70 leading-relaxed">
                  El curso está orientado a personas que buscan incorporar conocimientos
                  básicos sobre construcción en seco, materiales, herramientas y
                  criterios iniciales de armado.
                </p>
              </div>
            </div>

            {/* Bloque 2 */}
            <div className="relative rounded-[24px] overflow-hidden border border-white/30 shadow-xl bg-white/45 backdrop-blur-md p-6 md:p-7">
              <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-primary-500/10 pointer-events-none" />

              <div className="relative">
                <h3 className="text-2xl font-black text-primary-800 leading-tight">
                  ¿Qué se trabaja en el curso?
                </h3>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {COURSE_CONTENT.map((item) => (
                    <span
                      key={item}
                      className="inline-flex rounded-full bg-primary-500/15 border border-primary-600/20 px-4 py-2 text-sm font-semibold text-primary-900/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bloque 3 */}
            <div className="relative rounded-[24px] overflow-hidden border border-white/30 shadow-xl bg-white/45 backdrop-blur-md p-6 md:p-7">
              <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-primary-500/10 pointer-events-none" />

              <div className="relative">
                <h3 className="text-2xl font-black text-primary-800 leading-tight">
                  Para municipios, comunas e instituciones
                </h3>

                <p className="mt-4 text-primary-900/70 leading-relaxed">
                  La capacitación puede adaptarse según la localidad, el espacio
                  disponible, la duración del encuentro y el perfil de los participantes.
                </p>

                <p className="mt-3 text-primary-900/70 leading-relaxed">
                  Es una forma de acercar un oficio con demanda actual, promoviendo
                  formación práctica y oportunidades laborales en la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {activeImageIndex !== null && images[activeImageIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center px-4 py-6"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
            aria-label="Cerrar imagen"
          >
            ✕
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showPrevImage()
                }}
                className="absolute left-4 md:left-8 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
                aria-label="Imagen anterior"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showNextImage()
                }}
                className="absolute right-4 md:right-8 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative max-w-[1100px] max-h-[85vh] w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[activeImageIndex]}
              alt={`Imagen ampliada del curso ${activeImageIndex + 1}`}
              className="mx-auto max-h-[85vh] max-w-full rounded-[24px] object-contain shadow-2xl border border-white/10"
            />

            {images.length > 1 && (
              <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/80 backdrop-blur-md border border-white/10">
                {activeImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}