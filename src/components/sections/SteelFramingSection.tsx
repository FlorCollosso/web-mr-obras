import { useInView } from '../../hooks/useInView'
import videoSteelFraming from '../../assets/videos/video-steel-framing.mp4'
import BackgroundImage from '../../assets/images/fondo-web-grilla-bottom.jpg'

const ADVANTAGES = [
  { highlight: '40% menos tiempo', text: 'de obra que en la construcción tradicional' },
  { highlight: 'Mayor eficiencia térmica', text: 'y acústica en todas las estaciones' },
  { highlight: 'Compatible', text: 'con una gran cantidad de diseños arquitectónicos' },
]

export default function SteelFramingSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="steel-framing"
      className="relative py-24 lg:py-36 overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div className={`transition-all 6duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-black text-white leading-[1.2] mb-5">
              Steel Framing: el sistema que
              <span className="text-primary-400"> construye el futuro.</span>
            </h2>

            <p className="text-1md md:text-2md lg:text-4md text-white/70 leading-relaxed mb-8">
              Sabemos que construir es una decisión importante, por eso te acompañamos en cada
              etapa del proceso. Combinamos experiencia, tecnología y un enfoque personalizado para
              que tu proyecto se haga realidad de forma segura, eficiente y a tu medida.
            </p>

            {/* Advantage items */}
            <div className="w-full inline-flex flex-col items-start gap-3 mb-10">
              {ADVANTAGES.map((adv, i) => (
                <div
                  key={i}
                  className="flex w-full items-start gap-4 border-l-[3px] border-primary-500 bg-white/5 backdrop-blur-sm rounded-r-xl px-4 py-3"
                >
                  <p className="text-md text-white/85 leading-snug">
                    <span className="text-primary-400 font-semibold">{adv.highlight}</span>{' '}
                    {adv.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center w-full  bg-primary-600/80 hover:bg-primary-600 text-primary-100 font-bold text-base rounded-full px-8 py-3.5 transition-all duration-200 hover:scale-[1.02] shadow-cta backdrop-blur-sm"
            >
              Descubrí cómo funciona
            </a>
          </div>

          {/* ── Right: video card ───────────────────────────── */}
          <div className={`h-full transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="h-full relative h-[320px] sm:h-[380px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/15 shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
              <video
                src={videoSteelFraming}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              {/* "Nuestro diferencial" badge — top right */}
              <span className="absolute top-4 right-4 backdrop-blur-md bg-dark/60 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full">
                Nuestro diferencial
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
