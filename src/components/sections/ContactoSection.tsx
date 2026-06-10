import { useState, type FormEvent } from 'react'
import { CONTACT_SERVICES, SOCIAL_LINKS } from '../../data'
import SectionHeader from '../ui/SectionHeader'

function SocialIcon({ type }: { type: string }) {
  if (type === 'instagram') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
  if (type === 'facebook') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function ContactoSection() {
  const [services, setServices] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggleService = (s: string) =>
    setServices((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #e6f9f7 0%, #b1ece5 100%)' }}
    >
      {/* Decorative blob */}
      <div
        className="absolute -left-48 -top-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,196,190,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -right-32 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(1,150,146,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Contacto"
          theme="light"
          title={
            <>
              El primer paso hacia tu casa propia{' '}
              <span className="text-primary-500">empieza con una consulta</span>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — form + social */}
          <div className="flex flex-col gap-7">
            {/* Social intro */}
            <div>
              <p className="text-lg text-primary-700 leading-relaxed mb-6">
                Conectate con nosotros en nuestras redes sociales para ver nuestros proyectos más
                recientes, novedades y consejos sobre construcción en seco. ¡Sumate a nuestra comunidad!
              </p>
              <div className="flex flex-col gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.icon}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg font-medium text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <SocialIcon type={link.icon} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            {submitted ? (
              <div className="bg-white/70 rounded-2xl p-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-100 border-2 border-primary-600 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#019692" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-primary-800">¡Consulta enviada!</p>
                <p className="text-base text-primary-700">
                  Te vamos a contactar a la brevedad para acompañarte en el primer paso de tu proyecto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <input className="form-input" type="text" placeholder="Nombre" required />
                  <input className="form-input" type="text" placeholder="Apellido" required />
                </div>
                <input className="form-input" type="email" placeholder="Correo electrónico" required />
                <input className="form-input" type="tel" placeholder="Teléfono / WhatsApp" required />

                {/* Service checkboxes */}
                <div>
                  <p className="text-lg font-semibold text-primary-700 mb-3">¿Qué servicios te interesan?</p>
                  <div className="grid grid-cols-2 gap-3">
                    {CONTACT_SERVICES.map((s) => (
                      <label key={s} className="flex items-center gap-2.5 cursor-pointer group">
                        <div
                          onClick={() => toggleService(s)}
                          className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-150 ${services.includes(s)
                              ? 'bg-primary-500 border-primary-500'
                              : 'bg-white/70 border-primary-400/40 group-hover:border-primary-400'
                            }`}
                        >
                          {services.includes(s) && (
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                              <polyline points="1.5 6 4.5 9 10.5 3" />
                            </svg>
                          )}
                        </div>
                        <span className="text-base text-primary-700 font-medium">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full backdrop-blur-md bg-primary-600/60 text-primary-100 font-bold text-xl rounded-full px-6 py-3.5 shadow-cta hover:bg-primary-600/80 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  Solicitar presupuesto
                </button>
              </form>
            )}
          </div>

          {/* Right — map */}
          <div className="rounded-2xl overflow-hidden border-2 border-primary-600/30 shadow-xl h-[500px] lg:h-auto">
            <iframe
              title="Ubicación MR Obras"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110000!2d-64.18347!3d-31.41668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985b6b3af0fd%3A0x2f1042b2f4d0ba53!2sC%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
