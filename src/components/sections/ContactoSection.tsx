import { useState, type FormEvent } from 'react'
import { CONTACT_SERVICES, SOCIAL_LINKS } from '../../data'
import SectionHeader from '../ui/SectionHeader'
import { useInView } from '../../hooks/useInView'

// ─── SVG Icons ─────────────────────────────────────────────────────────────────
function IgIcon()   { return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> }
function FbIcon()   { return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> }
function WaIcon()   { return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> }

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  instagram: <IgIcon />,
  facebook:  <FbIcon />,
  whatsapp:  <WaIcon />,
}

const TRUST_ITEMS = [
  { icon: '⚡', label: 'Respuesta en 24 hs' },
  { icon: '💬', label: 'Asesoramiento sin cargo' },
  { icon: '🔒', label: 'Sin compromiso' },
  { icon: '🏗️', label: '+50 viviendas construidas' },
]

const CONTACT_DETAILS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '(351) XXX-XXXX',
    href: 'https://api.whatsapp.com/send?phone=5493510000000',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'hola@mrobras.com.ar',
    href: 'mailto:hola@mrobras.com.ar',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Zona de trabajo',
    value: 'Córdoba y Gran Córdoba',
    href: undefined,
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Horario',
    value: 'Lun – Vie  ·  8 a 18 hs',
    href: undefined,
  },
]

// ─── Main component ────────────────────────────────────────────────────────────
export default function ContactoSection() {
  const { ref, inView } = useInView(0.05)
  const [services, setServices]   = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  

  const toggleService = (s: string) =>
    setServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Floating-label field helper
  const Field = ({
    id, type = 'text', label, required = false,
  }: { id: string; type?: string; label: string; required?: boolean }) => (
    <div className="relative">
      <input
        id={id}
        type={type}
        required={required}
        placeholder=" "
        
        
        className="peer w-full bg-white/60 border-2 border-primary-300/60 rounded-xl
                   px-4 pt-6 pb-2.5 text-[15px] text-primary-800 font-medium
                   placeholder-transparent outline-none
                   focus:border-primary-500 focus:bg-white/80
                   transition-all duration-200"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-[11px] font-bold uppercase tracking-widest
                   text-primary-500 pointer-events-none
                   peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2
                   peer-placeholder-shown:text-[14px] peer-placeholder-shown:font-medium
                   peer-placeholder-shown:tracking-normal peer-placeholder-shown:uppercase-none
                   peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[11px]
                   peer-focus:font-bold peer-focus:tracking-widest
                   transition-all duration-200 text-primary-400"
      >
        {label}
      </label>
    </div>
  )

  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: 'linear-gradient(160deg, #e6f9f7 0%, #c5f0ea 50%, #b1ece5 100%)' }}
      ref={ref}
    >
      {/* ── Decorative shapes (pure CSS, no images) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid dots pattern */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, #019692 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(1,150,146,0.15) 0%, transparent 65%)' }} />
        <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,196,190,0.12) 0%, transparent 65%)' }} />
        {/* Accent arc */}
        <svg className="absolute top-0 right-0 w-[600px] opacity-[0.07]" viewBox="0 0 600 600" fill="none">
          <circle cx="600" cy="0" r="400" stroke="#019692" strokeWidth="80"/>
        </svg>
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
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

        {/* ── Trust strip ── */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 transition-all duration-700 delay-100
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {TRUST_ITEMS.map(item => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm
                         border border-primary-300/40 rounded-2xl px-4 py-3"
            >
              <span className="text-xl shrink-0">{item.icon}</span>
              <span className="text-sm font-semibold text-primary-700 leading-tight">{item.label}</span>
            </div>
          ))}
        </div>

        {/* ── Main bento grid ── */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-5 transition-all duration-700 delay-150
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >

          {/* ── LEFT COLUMN (4/12) ── info + social + map ─────────────── */}
          <div className="lg:col-span-4 flex flex-col gap-5">

            {/* Contact details card */}
            <div className="bg-white/55 backdrop-blur-sm border border-primary-300/40 rounded-3xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-5">
                Cómo encontrarnos
              </p>
              <div className="flex flex-col gap-4">
                {CONTACT_DETAILS.map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary-500/15 flex items-center justify-center
                                    text-primary-600 shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-primary-400 mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href}
                           className="text-[15px] font-semibold text-primary-800
                                      hover:text-primary-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[15px] font-semibold text-primary-800">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social card */}
            <div className="bg-white/55 backdrop-blur-sm border border-primary-300/40 rounded-3xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-1">
                Redes sociales
              </p>
              <p className="text-sm text-primary-600 leading-relaxed mb-5">
                Seguinos para ver proyectos, novedades y consejos sobre construcción en seco.
              </p>
              <div className="flex flex-col gap-2">
                {SOCIAL_LINKS.map(link => (
                  <a
                    key={link.icon}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl
                               bg-primary-500/10 hover:bg-primary-500/20
                               text-primary-700 hover:text-primary-800
                               font-semibold text-sm transition-all duration-150 group"
                  >
                    <span className="text-primary-500 group-hover:scale-110 transition-transform">
                      {SOCIAL_ICONS[link.icon]}
                    </span>
                    {link.label}
                    <svg className="ml-auto w-3.5 h-3.5 text-primary-400 group-hover:translate-x-0.5 transition-transform"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Map card */}
            <div className="bg-white/55 backdrop-blur-sm border border-primary-300/40 rounded-3xl overflow-hidden flex-1 min-h-[200px]">
              <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
                  Zona de trabajo
                </p>
                <a
                  href="https://maps.google.com/?q=Córdoba,Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary-500 hover:text-primary-700
                             flex items-center gap-1 transition-colors"
                >
                  Ver mapa
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
              <iframe
                title="Ubicación MR Obras"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110000!2d-64.18347!3d-31.41668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985b6b3af0fd%3A0x2f1042b2f4d0ba53!2sC%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* ── RIGHT COLUMN (8/12) ── form card ──────────────────────── */}
          <div className="lg:col-span-8">
            <div className="h-full bg-white/65 backdrop-blur-md border border-primary-300/40
                            rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(1,150,146,0.12)]">

              {/* Form card header */}
              <div className="px-8 pt-8 pb-6 border-b border-primary-200/50">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-800 mb-1">
                      Contanos tu proyecto
                    </h3>
                    <p className="text-sm text-primary-600">
                      Completá el formulario y te respondemos a la brevedad.
                    </p>
                  </div>
                  {/* Step indicator */}
                  <div className="hidden sm:flex items-center gap-2 shrink-0 ml-4">
                    {[1, 2, 3].map(n => (
                      <div key={n} className={`flex items-center justify-center w-7 h-7 rounded-full
                                               text-xs font-bold transition-all
                                               ${submitted
                                                 ? 'bg-primary-500 text-white'
                                                 : n === 1
                                                   ? 'bg-primary-500 text-white'
                                                   : 'bg-primary-200/60 text-primary-500'}`}>
                        {submitted || n < 3 ? (
                          n === 3 && !submitted ? '3' :
                          submitted ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                          : n
                        ) : n}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {submitted ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center gap-5 px-8 py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary-500/15 border-2 border-primary-500
                                  flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
                         stroke="#019692" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-800 mb-2">¡Consulta enviada!</p>
                    <p className="text-base text-primary-600 max-w-sm leading-relaxed">
                      Gracias por contactarnos. Te vamos a responder en menos de 24 hs para
                      acompañarte en el primer paso de tu proyecto.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setServices([]) }}
                    className="mt-2 text-sm font-semibold text-primary-500
                               hover:text-primary-700 underline underline-offset-4
                               transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-8 py-7 flex flex-col gap-6">

                  {/* ── Step 1: Personal data ── */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest
                                  text-primary-400 mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary-500 text-white
                                       flex items-center justify-center text-[10px] font-black">1</span>
                      Tus datos de contacto
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Field id="nombre"   label="Nombre"          required />
                      <Field id="apellido" label="Apellido"        required />
                      <Field id="email"    label="Email"    type="email" required />
                      <Field id="telefono" label="Teléfono / WhatsApp" type="tel" required />
                    </div>
                  </div>

                  {/* ── Step 2: Service type ── */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest
                                  text-primary-400 mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary-500/40 text-primary-600
                                       flex items-center justify-center text-[10px] font-black">2</span>
                      ¿Qué servicio te interesa?
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {CONTACT_SERVICES.map(s => {
                        const active = services.includes(s)
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className={`px-3 py-2.5 rounded-xl text-sm font-semibold text-center
                                        border-2 transition-all duration-150 leading-tight
                                        ${active
                                          ? 'bg-primary-500 border-primary-500 text-white shadow-[0_0_12px_rgba(1,150,146,0.3)]'
                                          : 'bg-white/50 border-primary-300/50 text-primary-700 hover:border-primary-400 hover:bg-white/70'
                                        }`}
                          >
                            {s}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* ── Step 3: Message ── */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest
                                  text-primary-400 mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary-500/40 text-primary-600
                                       flex items-center justify-center text-[10px] font-black">3</span>
                      Contanos tu idea <span className="text-primary-300 font-normal normal-case tracking-normal">(opcional)</span>
                    </p>
                    <textarea
                      placeholder="Describí brevemente tu proyecto: terreno, superficie aproximada, ubicación, cantidad de ambientes… No hace falta que esté definido."
                      rows={3}
                      className="w-full bg-white/60 border-2 border-primary-300/60 rounded-xl
                                 px-4 py-3.5 text-[14px] text-primary-800 font-medium
                                 placeholder:text-primary-400/60 placeholder:font-normal
                                 outline-none focus:border-primary-500 focus:bg-white/80
                                 transition-all duration-200 resize-none leading-relaxed"
                    />
                    <p className="text-xs text-primary-400 mt-1.5 ml-1">
                      Cuanto más nos contés, mejor podemos orientarte.
                    </p>
                  </div>

                  {/* ── Submit ── */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button
                      type="submit"
                      className="flex-1 bg-primary-500/80 hover:bg-primary-500 backdrop-blur-sm
                                 text-white font-bold text-base rounded-2xl px-6 py-4
                                 shadow-[0_4px_20px_rgba(1,150,146,0.35)]
                                 hover:shadow-[0_6px_28px_rgba(1,150,146,0.5)]
                                 hover:scale-[1.01] active:scale-[0.99]
                                 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Enviar consulta
                    </button>
                    <a
                      href="https://api.whatsapp.com/send?phone=5493510000000&text=Hola%20MR%20Obras%2C%20quiero%20consultar%20sobre%20un%20proyecto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:w-auto flex items-center justify-center gap-2
                                 bg-[#1da851]/80 hover:bg-[#1da851] text-white
                                 font-bold text-base rounded-2xl px-6 py-4
                                 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <WaIcon />
                      WhatsApp directo
                    </a>
                  </div>

                  {/* Microcopy */}
                  <p className="text-xs text-primary-400 text-center -mt-2 flex items-center justify-center gap-1.5">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    Tus datos son privados y nunca son compartidos con terceros.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
