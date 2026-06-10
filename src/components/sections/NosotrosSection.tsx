import { useInView } from '../../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'
import { BENEFITS, PROCESS_STEPS } from '../../data'
import BackgroundImage from '../../assets/images/fondo-web-grilla-bottom.jpg'

const BENEFIT_GRADIENTS = [
  'linear-gradient(219deg, rgba(1,150,146,0.5) 0%, rgba(10,37,56,0.2) 72%)',
  'linear-gradient(141deg, rgba(1,150,146,0.5) 0%, rgba(10,37,56,0.2) 72%)',
  'linear-gradient(219deg, rgba(1,150,146,0.5) 0%, rgba(10,37,56,0.2) 72%)',
  'linear-gradient(140deg, rgba(1,150,146,0.5) 0%, rgba(10,37,56,0.2) 71%)',
]

export default function NosotrosSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="nosotros"
      className="relative py-24 lg:py-36 bg-dark overflow-hidden"
      ref={ref}
    >
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



        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {BENEFITS.map((b, i) => (
            <div
              key={b.id}
              className={`glass-card p-6 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
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
              <p className="text-sm text-primary-100/80 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Process block */}
        <div
          className={`glass-card p-10 lg:p-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
            }`}
          style={{
            background: 'linear-gradient(7deg, rgba(1,150,146,0.5) 23%, rgba(10,37,56,0.2) 90%)',
            transitionDelay: `${BENEFITS.length * 80 + 120}ms`,
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary-200 text-center mb-12">
            <span className="text-primary-500">Así trabajamos</span>{' '}
            en cada etapa del proyecto
          </h3>

          {/* Timeline — desktop */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between relative mb-8">
              {/* Connector line */}
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
                      <span className="text-[40px] font-extrabold text-primary-400/90 leading-none">{step.id}</span>
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
                  <p className="text-[15px] text-base text-white/90 leading-snug">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline — mobile */}
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
                    <span className="text-xl font-extrabold text-primary-400">{step.id}</span>
                  )}
                </div>
                <div>
                  <p className={`text-base font-bold ${step.isLast ? 'text-primary-400' : 'text-white'}`}>{step.title}</p>
                  <p className="text-sm text-white/60 mt-0.5">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
