import { useState, type FormEvent } from 'react'
import SectionHeader from '../ui/SectionHeader'
import { useInView } from '../../hooks/useInView'

// ─── SVG Icons ─────────────────────────────────────────────────────────────────
function PinIcon()  { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> }
function ClockIcon(){ return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> }
function ArrowIcon(){ return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg> }
function CheckIcon(){ return <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#019692" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg> }

const OBRA_TYPES = ['Vivienda', 'Ampliación', 'Reforma', 'Consulta general']

// ─── Main component ────────────────────────────────────────────────────────────
export default function ContactoSection() {
  const { ref, inView } = useInView(0.05)
  const [obra, setObra] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Field with a label overlaid on the input's top border line
  const Field = ({
    id, type = 'text', label, required = false, placeholder,
  }: { id: string; type?: string; label: string; required?: boolean; placeholder?: string }) => (
    <div className="relative">
      <label
        htmlFor={id}
        className="px-1 text-[11px] font-bold uppercase tracking-widest text-primary-600 "
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/60 border-2 border-primary-600/20 rounded-xl
                   px-4 py-2.5 text-[14px] text-primary-800 font-medium
                   placeholder:text-primary-600/50 placeholder:font-normal
                   outline-none focus:border-primary-400 focus:bg-white/80
                   transition-all duration-200 mt-2"
      />
    </div>
  )

  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #e6f9f7 0%, #b1ece5 100%)' }}
      ref={ref}
    >
      {/* ── Decorative background (same as CapacitacionesSection) ── */}
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
          <circle cx="600" cy="0" r="400" stroke="#019692" strokeWidth="80" />
        </svg>
        {/* Accent arc bottom-left (larger) */}
        <svg className="absolute bottom-0 left-0 w-[700px] opacity-[0.07]" viewBox="0 0 700 700" fill="none">
          <circle cx="0" cy="700" r="470" stroke="#019692" strokeWidth="90" />
        </svg>
      </div>

      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-24 -right-24 w-[360px] h-[360px] rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
        <SectionHeader
          badge="Contacto"
          theme="light"
          title={
            <>
              Contanos tu idea,{' '}
              <span className="text-primary-500">nosotros te ayudamos a construirla</span>
            </>
          }
          description={<> Contanos qué estás pensando construir y te asesoramos sin compromiso ni trámites largos.
          Completá el formulario o escribinos por WhatsApp y te respondemos en menos de 24 hs. </>}
        />

        {/* ── Main layout ── */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch transition-all duration-700 delay-100
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >

          {/* ── LEFT (5/12) ── datos mínimos + mapa ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Datos mínimos + mapa discreto */}
            <div className="flex-1 min-h-0 flex flex-col gap-4">
              <div className="flex items-center justify-start flex-wrap gap-x-6 gap-y-2 text-sm text-primary-700/80 px-3">
                <span className="flex items-center gap-2">
                  <PinIcon />Córdoba, Argentina
                </span>
                <span className="flex items-center gap-2">
                  <ClockIcon /> Lun a Vie · 8 a 18 hs
                </span>
                
              </div>

              {/* Map thumbnail — non-interactive, opens Google Maps on click */}
              <a
                href="https://maps.google.com/?q=Córdoba,Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-1 min-h-[110px] rounded-[18px] overflow-hidden border border-white/40 shadow-lg bg-primary-100 group"
              >
                <iframe
                  title="Ubicación MR Obras"
                  src="https://www.google.com/maps?q=-31.41668,-64.18347&z=10&output=embed"
                  width="100%"
                  style={{
                    border: 0,
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 'calc(100% + 32px)',
                    filter: 'grayscale(0.3) saturate(1.2)',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none"
                  tabIndex={-1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-alt/80 via-dark-alt/10 to-transparent" />
                <span className="absolute bottom-2.5 left-5 text-[11px] font-bold uppercase tracking-widest text-white/90">
                  Zona de trabajo
                </span>
                <span className="absolute bottom-2.5 right-3 text-[11px] font-semibold text-primary-200 flex items-center gap-1
                                  opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver mapa <ArrowIcon />
                </span>
              </a>
            </div>

          </div>

          {/* ── RIGHT (7/12) ── formulario, protagonista ── */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[24px] border border-white/30 shadow-xl
                            bg-white/45 backdrop-blur-md p-7 px-9">
              <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-primary-500/10 pointer-events-none" />

              <div className="relative">
              {submitted ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center gap-5 py-14 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary-500/15 border-2 border-primary-500
                                  flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-800 mb-2">¡Consulta enviada!</p>
                    <p className="text-base text-primary-900/70 max-w-sm leading-relaxed">
                      Te vamos a escribir en menos de 24 hs para charlar sobre tu proyecto.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setObra(null) }}
                    className="mt-2 text-sm font-semibold text-primary-500
                               hover:text-primary-700 underline underline-offset-4
                               transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-primary-800 leading-tight mb-1">
                      Tu consulta, en menos de un minuto
                    </h3>
                    <p className="text-sm text-primary-600/60">
                      Dejanos tus datos y contanos qué tenés en mente.
                    </p>
                    <span className="border-b border-primary-300/40 block mt-4" /> 
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field id="nombre"   label="Nombre" required placeholder="Tu nombre completo"/>
                    <Field id="telefono" label="Teléfono / WhatsApp" type="tel" required placeholder="Tu número de teléfono"/>
                  </div>

                  {/* Tipo de obra */}
                  <div>
                    <p className="px-1 text-[11px] font-bold uppercase tracking-widest text-primary-600 mb-2">
                      Tipo de obra
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {OBRA_TYPES.map(o => {
                        const active = obra === o
                        return (
                          <button
                            key={o}
                            type="button"
                            onClick={() => setObra(o)}
                            className={`px-3 py-2.5 rounded-xl text-sm font-semibold text-center
                                        border-2 transition-all duration-150 leading-tight
                                        ${active
                                          ? 'bg-primary-600 border-primary-600 text-white shadow-[0_0_12px_rgba(1,150,146,0.3)]'
                                          : 'bg-white/50 border-primary-600/20 text-primary-600 hover:border-primary-400 hover:bg-white/70'
                                        }`}
                          >
                            {o}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Mensaje breve */}
                  <div>
                    <label htmlFor="mensaje" className="block px-1 text-[11px] font-bold uppercase tracking-widest text-primary-600 mb-2">
                      Mensaje <span className="text-primary-700/70 font-normal normal-case tracking-normal">(opcional)</span>
                    </label>
                    <textarea
                      id="mensaje"
                      placeholder="Contanos brevemente tu idea: ubicación, tamaño aproximado, plazos…"
                      rows={2}
                      className="w-full bg-white/60 border-2 border-primary-600/20 rounded-xl
                                 px-4 py-2.5 text-[14px] text-primary-800 font-medium
                                 placeholder:text-primary-600/50 placeholder:font-normal
                                 outline-none focus:border-primary-400 focus:bg-white/80
                                 transition-all duration-200 resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary bg-primary-600 hover:bg-primary-700 w-full text-base py-4"
                  >
                    Enviar mi consulta
                    <ArrowIcon />
                  </button>
                </form>
              )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
