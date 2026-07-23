import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'
import { SERVICES } from '../../data'
import BackgroundImage from '../../assets/images/fondo-web-grilla-top.jpg'

export default function ServiciosSection() {
  const { ref, inView } = useInView()
  // activeIdx starts at 0 (first card expanded by default)
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section id="servicios" className="relative py-24 lg:py-36 overflow-hidden" ref={ref}>

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Dark tint so text is always legible */}
      <div className="absolute inset-0 bg-dark/60 pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Servicios"
          theme="dark"
          title={
            <>
              Todo lo que necesitás para{' '}
              <span className="text-primary-500">construir <br /> tu casa</span>
            </>
          }
        />

        {/* ── Accordion-expand cards (desktop) ─────────────────── */}
        <div
          className={`hidden md:flex gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ height: '420px' }}
        >
          {SERVICES.map((s, i) => {
            const isActive = activeIdx === i
            return (
              <div
                key={s.id}
                onMouseEnter={() => setActiveIdx(i)}
                className="relative glass-card overflow-hidden cursor-pointer transition-all duration-500"
                style={{
                  flex: isActive ? '2.8 1 0%' : '1 1 0%',
                  background: 'linear-gradient(180deg, rgba(1,150,146,0.15) 0%, rgba(10,37,56,0.7) 100%)',
                }}
              >
                {/* Background image always covers */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: isActive ? 'scale(1.04)' : 'scale(1)' }}
                />
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-dark/10" />

                {/* Badges */}
                {s.popular && (
                  <span className="absolute top-3 left-3 bg-primary-600 text-primary-100 text-xs font-bold px-3 py-1 rounded-full z-10">
                    Más popular
                  </span>
                )}
                <span className="absolute top-3 right-3 backdrop-blur-sm bg-white/15 border border-white/20 text-primary-100 text-xs font-bold px-3 py-1 rounded-full z-10">
                  {s.badge}
                </span>

                {/* Content — always at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{s.title}</h3>

                  {/* Description & CTA fade in when active */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isActive ? '120px' : '0px', opacity: isActive ? 1 : 0 }}
                  >
                    <p className="text-sm text-primary-200/80 leading-relaxed mb-4">{s.description}</p>
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-1.5 text-primary-400 font-semibold text-sm hover:text-primary-300 transition-colors"
                    >
                      Consultar
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Mobile stacked cards ──────────────────────────────── */}
        <div className="flex md:hidden flex-col gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className={`glass-card overflow-hidden transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: 'linear-gradient(180deg, rgba(1,150,146,0.15) 0%, rgba(10,37,56,0.6) 100%)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/60" />
                {s.popular && (
                  <span className="absolute top-3 left-3 bg-primary-600 text-primary-100 text-xs font-bold px-3 py-1 rounded-full">
                    Más popular
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-primary-200/80 leading-relaxed mb-4">{s.description}</p>
                <a href="#contacto" className="inline-flex items-center gap-1.5 text-primary-400 font-semibold text-sm">
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
