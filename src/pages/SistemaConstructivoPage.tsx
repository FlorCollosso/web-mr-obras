import SectionHeader from '../components/ui/SectionHeader'
import SteelFramingLayers from '../components/ui/SteelFramingLayers'

const SYSTEM_POINTS = [
  {
    value: '01',
    title: 'Estructura liviana',
    text: 'Perfiles de acero galvanizado que forman el esqueleto resistente de la construcción.',
  },
  {
    value: '02',
    title: 'Aislación eficiente',
    text: 'Capas pensadas para mejorar el confort térmico y acústico de la vivienda.',
  },
  {
    value: '03',
    title: 'Obra en seco',
    text: 'Menos humedad, menos desperdicio y mayor orden durante la ejecución.',
  },
  {
    value: '04',
    title: 'Terminación completa',
    text: 'El sistema permite llegar a una vivienda lista para habitar, según el alcance del proyecto.',
  },
]

export default function SistemaConstructivoPage() {
  return (
    <main className="relative min-h-screen bg-dark overflow-hidden pt-[82px]">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-[45%] -left-40 w-[520px] h-[520px] rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />

      {/* Hero */}
      <section id="capas" className="relative max-w-[1300px] mx-auto px-6 lg:px-8 py-10 sm:py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-start lg:items-center">
          <div className="w-full flex flex-col h-full justify-between gap-6 sm:gap-8 lg:gap-10">
            <SectionHeader
              badge="Sistema constructivo"
              badgePosition="top"
              as="h1"
              theme="dark"
              title={
                <>
                  Steel Framing:{' '}
                  <span className="text-primary-500">
                    construir mejor, en menos tiempo
                  </span>
                </>
              }
              description={
                <>
                  Un sistema de construcción en seco que combina estructura de acero
                  galvanizado, aislaciones, placas y terminaciones para lograr obras
                  modernas, eficientes y planificadas.
                <br />
                  <span className="text-primary-400 mt-2 block">
                    Tocá los puntos de la imagen para conocer las capas que componen el sistema y cómo se combinan para lograr una vivienda lista para habitar.
                  </span>
                </>
              }
            />

            {/* Puntos principales: ocupan el lugar que antes tenía el botón, apilados a todo el ancho, sin afectar el tamaño del título, la descripción ni la tarjeta de capas */}
            <div className="w-full flex flex-col gap-3">
              {SYSTEM_POINTS.map((item) => (
                <div
                  key={item.value}
                  className="flex w-full items-start gap-4 border-l-[3px] border-primary-500 bg-white/5 backdrop-blur-sm rounded-r-xl px-4 py-3"
                >
                  <p className="text-sm md:text-base text-white/85 leading-snug">
                    <span className="text-primary-400 font-semibold">
                      {item.title}
                    </span>{' '}
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Capas en hero: ancho y alto fijos por breakpoint (no % ni w-full) para que la columna "auto" del grid pueda medir correctamente el contenido y no colapse */}
          <div className="relative mx-auto w-full h-[650px] sm:w-full sm:h-[700px] md:w-full md:h-[750px] lg:w-[460px] lg:h-full xl:w-[450px] xl:h-full rounded-[24px] sm:rounded-[32px] border border-white/10 bg-dark/80 shadow-2xl">
            <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-grid-pattern opacity-25" />
              <div className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full bg-primary-500/20 blur-3xl" />
            </div>

            <div className="absolute inset-0">
              <SteelFramingLayers />
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative max-w-[1300px] mx-auto px-6 lg:px-8 pb-28">
        <div className="rounded-[32px] border border-primary-500/30 bg-primary-600/20 p-8 md:p-12 text-center shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              ¿Querés construir con Steel Framing?
            </h2>

            <p className="mt-4 max-w-[620px] mx-auto text-white/70 leading-relaxed">
              Te asesoramos para evaluar tu proyecto y definir la mejor forma de hacerlo realidad, escibinos sin compromiso.
            </p>

            <a
              href="/#contacto"
              className="btn-primary inline-flex justify-center mt-8"
            >
              Solicitar asesoramiento
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}