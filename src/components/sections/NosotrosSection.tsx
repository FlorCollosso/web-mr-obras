import { useInView } from '../../hooks/useInView'
import { useEffect, useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import { BENEFITS, PROCESS_STEPS } from '../../data'
import BackgroundImage from '../../assets/images/fondo-web-grilla-bottom.jpg'
import videoSteelFraming from '../../assets/videos/video-steel-framing.mp4'
import SteelFramingLayers from '../ui/SteelFramingLayers'

const BENEFIT_GRADIENTS = [
  'linear-gradient(219deg, rgba(1,150,146,0.5) 0%, rgba(10,37,56,0.2) 72%)',
  'linear-gradient(141deg, rgba(1,150,146,0.5) 0%, rgba(10,37,56,0.2) 72%)',
  'linear-gradient(219deg, rgba(1,150,146,0.5) 0%, rgba(10,37,56,0.2) 72%)',
  'linear-gradient(140deg, rgba(1,150,146,0.5) 0%, rgba(10,37,56,0.2) 71%)',
]

const ADVANTAGES = [
  { highlight: '40% menos tiempo', text: 'de obra que en la construcción tradicional' },
  { highlight: 'Mayor eficiencia térmica', text: 'y acústica en todas las estaciones' },
  { highlight: 'Compatible', text: 'con una gran cantidad de diseños arquitectónicos' },
]

export default function NosotrosSection() {
  const { ref, inView } = useInView()

  const [showLayersModal, setShowLayersModal] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showLayersModal ? 'hidden' : ''

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowLayersModal(false)
      }
    }

    if (showLayersModal) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showLayersModal])

  return (
    <section
      id="nosotros"
      className="relative py-24 lg:py-36 bg-dark overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="absolute inset-0 bg-dark/60 pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Nosotros"
          theme="dark"
          title={
            <>
              ¿Por qué elegirnos para ayudarte a{' '}
              <span className="text-primary-500">hacer realidad</span>{' '}
              tu proyecto?
            </>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6 w-full">
          {BENEFITS.map((b, i) => (
            <div
              key={b.id}
              className={`glass-card p-6 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{
                background: BENEFIT_GRADIENTS[i],
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-primary-100 leading-tight pr-2">
                  {b.title}
                </h3>
                <div className="w-12 h-12 flex items-center justify-center shrink-0 text-3xl">
                  {b.icon}
                </div>
              </div>

              <p className="text-sm text-primary-100/80 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`glass-card p-10 lg:p-14 transition-all duration-700 ${inView
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-[0.98]'
            }`}
          style={{
            background:
              'linear-gradient(7deg, rgba(1,150,146,0.5) 23%, rgba(10,37,56,0.2) 90%)',
            transitionDelay: `${BENEFITS.length * 80 + 120}ms`,
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary-200 text-center mb-12">
            <span className="text-primary-500">Así trabajamos</span>{' '}
            en cada etapa del proyecto
          </h3>

          <div className="hidden md:block">
            <div className="flex items-center justify-between relative mb-8">
              <div className="absolute top-[50px] left-[10%] right-[10%] h-0.5 bg-primary-400/30" />

              {PROCESS_STEPS.map((step) => (
                <div key={step.id} className="flex flex-col items-center relative z-10 w-[192px]">
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center mb-0 ${step.isLast ? 'bg-primary-400' : 'bg-primary-600'
                      }`}
                  >
                    {step.isLast ? (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#019692" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span className="text-[40px] font-extrabold text-primary-400/90 leading-none">
                        {step.id}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start justify-between">
              {PROCESS_STEPS.map((step) => (
                <div key={step.id} className="text-center w-[192px]">
                  <p className={`text-xl font-bold mb-2 ${step.isLast ? 'text-white' : 'text-primary-400'}`}>
                    {step.title}
                  </p>
                  <p className="text-[15px] text-base text-white/90 leading-snug">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden flex flex-col gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${step.isLast ? 'bg-primary-400' : 'bg-primary-500/60'
                    }`}
                >
                  {step.isLast ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a2538" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span className="text-xl font-extrabold text-primary-400">
                      {step.id}
                    </span>
                  )}
                </div>

                <div>
                  <p className={`text-base font-bold ${step.isLast ? 'text-primary-400' : 'text-white'}`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-white/60 mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steel Framing dentro de Nosotros */}
        <div className="mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <span className="section-badge">Sistema constructivo</span>

            <h2 className="mt-8 text-4xl md:text-4xl lg:text-5xl font-black text-white leading-[1.2] mb-5">
              Steel Framing: el sistema que
              <span className="text-primary-400"> construye el futuro.</span>
            </h2>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              Combinamos experiencia en construcción tradicional con sistemas modernos
              para desarrollar viviendas eficientes, duraderas y adaptadas a cada proyecto.
            </p>

            <div className="w-full inline-flex flex-col items-start gap-3 mb-10">
              {ADVANTAGES.map((adv, i) => (
                <div
                  key={i}
                  className="flex w-full items-start gap-4 border-l-[3px] border-primary-500 bg-white/5 backdrop-blur-sm rounded-r-xl px-4 py-3"
                >
                  <p className="text-md text-white/85 leading-snug">
                    <span className="text-primary-400 font-semibold">
                      {adv.highlight}
                    </span>{' '}
                    {adv.text}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setShowLayersModal(true)}
              className="inline-flex items-center justify-center w-full bg-primary-600/80 hover:bg-primary-600 text-primary-100 font-bold text-base rounded-full px-8 py-3.5 transition-all duration-200 hover:scale-[1.02] shadow-cta backdrop-blur-sm"
            >
              Descubrí cómo funciona
            </button>
          </div>

          <div
            className={`h-full transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden border border-white/15 shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
              <video
                src={videoSteelFraming}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              <span className="absolute top-4 right-4 backdrop-blur-md bg-dark/60 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full">
                Nuestro diferencial
              </span>
            </div>
          </div>
        </div>
      </div>

      {showLayersModal && (
        <div
          className="fixed inset-0 z-[100] bg-dark/80 backdrop-blur-md flex items-center justify-center px-4 py-6"
          onClick={() => setShowLayersModal(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Capas del sistema Steel Framing"
            className="relative w-[min(900px,calc(100vw-32px))] h-[92svh] border border-white/10 overflow-hidden rounded-[28px] bg-dark/80 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-dark-alt/95 backdrop-blur-md px-5 md:px-8 py-4">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-primary-400">
                  Sistema constructivo
                </p>
                <h3 className="text-xl md:text-2xl font-black text-white">
                  Capas del Steel Framing
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowLayersModal(false)}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Cerrar ventana"
              >
                ✕
              </button>
            </div>

            <div className="h-[calc(92svh-86px)] w-full overflow-hidden">
              <SteelFramingLayers />
            </div>
          </div>
        </div>
      )}

    </section>
  )
}