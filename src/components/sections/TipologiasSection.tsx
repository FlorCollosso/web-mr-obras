import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'
import { TYPOLOGIES } from '../../data'
import PanoramaViewer from '../ui/PanoramaViewer'

import living360 from '../../assets/images/360/casa-familiar-living.jpg'
import habitacionPrincipal360 from '../../assets/images/360/casa-familiar-dormitorio-principal.jpg'
import habitacionSecundaria360 from '../../assets/images/360/casa-familiar-dormitorio-individual.jpg'
import bano360 from '../../assets/images/360/casa-familiar-baño.jpg'

const PANORAMA_VIEWS = [
  {
    id: 'living',
    label: 'Living',
    image: living360,
  },
  {
    id: 'habitacion-principal',
    label: 'Habitación 1',
    image: habitacionPrincipal360,
  },
  {
    id: 'habitacion-secundaria',
    label: 'Habitación 2',
    image: habitacionSecundaria360,
  },
  {
    id: 'bano',
    label: 'Baño',
    image: bano360,
  },
]

function PanoViewer({ typologyId }: { typologyId: number }) {
  const [activeView, setActiveView] = useState(PANORAMA_VIEWS[0])

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-dark">
      <div className="bg-dark-alt/80 px-5 py-3 flex flex-wrap gap-3 items-center justify-between border-b border-white/8">
        <p className="text-xs font-bold text-white/60 tracking-wide uppercase">
          Tour 360° — Tipología {typologyId}
        </p>

        <span className="text-xs font-bold px-2 py-0.5 rounded-full border text-primary-400 border-primary-400/40 bg-primary-400/10">
          Arrastrá para recorrer
        </span>
      </div>

      <div className="h-[420px] md:h-[560px]">
        <PanoramaViewer
          key={activeView.id}
          panorama={activeView.image}
        />
      </div>

      <div className="bg-dark-alt/80 px-5 py-4 flex items-center justify-center gap-2 border-t border-white/8">
        {PANORAMA_VIEWS.map((view) => (
          <button
            key={view.id}
            type="button"
            onClick={() => setActiveView(view)}
            className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${activeView.id === view.id
                ? 'bg-primary-500 text-dark shadow-lg shadow-primary-500/20'
                : 'bg-white/8 text-white/70 hover:bg-white/14 hover:text-white'
              }`}
          >
            {view.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function TypologyCard({ typo }: { typo: typeof TYPOLOGIES[0] }) {
  const [showTour, setShowTour] = useState(false)

  return (
    <div
      className="glass-card overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(1,150,146,0.12) 0%, rgba(10,37,56,0.7) 100%)',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative h-60 lg:h-auto min-h-[220px] overflow-hidden">
          <img
            src={typo.image}
            alt={typo.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/70 lg:bg-gradient-to-r lg:from-transparent lg:to-dark/80" />

          <span className="absolute top-4 left-4 bg-primary-600 text-primary-100 text-xs font-bold px-3 py-1 rounded-full">
            {typo.badge}
          </span>

          <div className="absolute bottom-4 left-4 lg:right-4 lg:left-auto bg-dark/80 backdrop-blur-sm text-primary-300 text-2xl font-black px-4 py-1.5 rounded-xl">
            {typo.area} m²
          </div>
        </div>

        <div className="p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {typo.name}
            </h3>

            <p className="text-sm text-primary-200/80 leading-relaxed mb-5">
              {typo.description}
            </p>

            <ul className="grid grid-cols-2 gap-2 mb-6">
              {typo.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-primary-200"
                >
                  <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="btn-primary flex-1 min-w-fit justify-center text-base"
            >
              Consultar tipología
            </a>

            <button
              type="button"
              onClick={() => setShowTour((v) => !v)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border font-bold text-sm transition-all duration-200 ${showTour
                  ? 'bg-primary-600/60 border-primary-500 text-primary-100'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                {showTour ? (
                  <>
                    <path d="M18 6 6 18M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    <path d="M21 3v4h-4" />
                  </>
                )}
              </svg>

              {showTour ? 'Cerrar tour' : 'Tour 360°'}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${showTour ? 'max-h-[720px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="p-5 pt-5">
          <PanoViewer typologyId={typo.id} />
        </div>
      </div>
    </div>
  )
}

export default function TipologiasSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="tipologias"
      className="relative py-24 lg:py-36 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-dark-alt pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Tipologías"
          title={
            <>
              Casas diseñadas para{' '}
              <span className="text-primary-500">cada etapa&nbsp;de&nbsp;vida</span>
            </>
          }
          description={
            <>
              Dos tipologías de acceso pensadas para optimizar cada metro cuadrado.
              Ambas disponibles en steel framing o construcción tradicional.
            </>
          }
        />

        <div
          className={`flex flex-col gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {TYPOLOGIES.map((t) => (
            <TypologyCard key={t.id} typo={t} />
          ))}
        </div>
      </div>
    </section>
  )
}