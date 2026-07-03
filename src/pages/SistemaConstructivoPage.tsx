
import SectionHeader from '../components/ui/SectionHeader'
import SteelFramingLayers from '../components/ui/SteelFramingLayers'

const BENEFITS = [
  {
    title: 'Rapidez de obra',
    text: 'Permite reducir considerablemente los tiempos de construcción en comparación con métodos tradicionales.',
  },
  {
    title: 'Eficiencia térmica',
    text: 'Sus capas de aislación ayudan a conservar mejor la temperatura interior durante todo el año.',
  },
  {
    title: 'Menor peso estructural',
    text: 'Es un sistema liviano, ideal para obras nuevas, ampliaciones y proyectos sobre estructuras existentes.',
  },
  {
    title: 'Obra más limpia',
    text: 'Reduce desperdicios, humedad en obra y tiempos de espera entre etapas constructivas.',
  },
]

const PROCESS = [
  {
    number: '01',
    title: 'Diseño del proyecto',
    text: 'Se define la distribución, medidas, necesidades del cliente y características técnicas de la vivienda.',
  },
  {
    number: '02',
    title: 'Cálculo y planificación',
    text: 'Se planifica la estructura, materiales, aislaciones, instalaciones y etapas de ejecución.',
  },
  {
    number: '03',
    title: 'Montaje de estructura',
    text: 'Se colocan los perfiles de acero galvanizado que forman el esqueleto resistente de la construcción.',
  },
  {
    number: '04',
    title: 'Capas, aislación y terminaciones',
    text: 'Se incorporan placas, barreras, aislaciones e instalaciones hasta llegar a la terminación final.',
  },
]

const FAQS = [
  {
    question: '¿El Steel Framing es resistente?',
    answer:
      'Sí. La estructura se realiza con perfiles de acero galvanizado y se calcula según el proyecto. Es un sistema seguro, duradero y ampliamente utilizado en viviendas modernas.',
  },
  {
    question: '¿Sirve para casas familiares?',
    answer:
      'Sí. Es una excelente opción para viviendas familiares, ampliaciones, quinchos, locales y distintos tipos de proyectos personalizados.',
  },
  {
    question: '¿Se puede hacer llave en mano?',
    answer:
      'Sí. El sistema permite ejecutar una vivienda completa, incluyendo estructura, instalaciones, aislaciones, revestimientos y terminaciones finales.',
  },
  {
    question: '¿Es más rápido que la construcción tradicional?',
    answer:
      'En general, sí. Al ser un sistema en seco, muchas etapas se realizan con mayor velocidad y con menor dependencia de tiempos de secado.',
  },
]

export default function SistemaConstructivoPage() {
  return (
    <main className="relative min-h-screen bg-dark overflow-hidden pt-[82px]">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-[35%] -left-40 w-[520px] h-[520px] rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />

      {/* Hero */}
      <section className="relative max-w-[1300px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-[920px]">
          <span className="section-badge">Sistema constructivo</span>

          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05]">
            Cómo funciona el{' '}
            <span className="text-primary-400">Steel Framing</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-[760px]">
            El Steel Framing es un sistema de construcción en seco basado en una
            estructura de perfiles de acero galvanizado. Permite construir
            viviendas modernas, eficientes y duraderas, con una ejecución más
            rápida y una obra más limpia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/#contacto"
              className="btn-primary inline-flex justify-center"
            >
              Consultar por mi proyecto
            </a>

            <a
              href="#capas"
              className="btn-secondary inline-flex justify-center"
            >
              Ver capas del sistema
            </a>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="relative max-w-[1300px] mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="glass-card p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl font-black text-primary-200 mb-4">
              ¿Qué es el Steel Framing?
            </h2>

            <p className="text-white/70 leading-relaxed">
              Es un sistema constructivo compuesto por una estructura liviana de
              acero galvanizado, placas, barreras de protección, aislaciones y
              revestimientos. A diferencia de la obra húmeda tradicional, gran
              parte del proceso se realiza en seco, lo que ayuda a reducir
              tiempos, desperdicios y problemas asociados a la humedad.
            </p>
          </div>

          <div className="glass-card p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl font-black text-primary-200 mb-4">
              ¿Por qué elegirlo?
            </h2>

            <p className="text-white/70 leading-relaxed">
              Porque permite construir espacios confortables, eficientes y
              adaptables. Es una alternativa ideal para quienes buscan una obra
              planificada, con mayor previsibilidad, buena aislación y
              terminaciones modernas.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="relative max-w-[1300px] mx-auto px-6 lg:px-8 pb-24">
        <SectionHeader
          badge="Ventajas"
          theme="dark"
          title={
            <>
              Beneficios de construir con{' '}
              <span className="text-primary-500">Steel Framing</span>
            </>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 bg-white/5 border border-white/10"
            >
              <h3 className="text-xl font-black text-primary-200 mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-white/65 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capas */}
      <section
        id="capas"
        className="relative max-w-[1300px] mx-auto px-6 lg:px-8 pb-24"
      >
        <SectionHeader
          badge="Capas"
          theme="dark"
          title={
            <>
              Las capas que componen el{' '}
              <span className="text-primary-500">muro</span>
            </>
          }
        />

        <p className="max-w-[850px] text-white/70 leading-relaxed mb-8">
          Cada muro está formado por distintas capas que trabajan en conjunto:
          estructura, placas, barreras, aislaciones y terminaciones. Esta
          combinación permite lograr resistencia, confort térmico y protección
          exterior.
        </p>

        <div className="relative min-h-[760px] md:h-[760px] xl:h-[820px] rounded-[28px] overflow-hidden border border-white/10 bg-dark/80 shadow-2xl">
          <SteelFramingLayers />
        </div>
      </section>

      {/* Proceso */}
      <section className="relative max-w-[1300px] mx-auto px-6 lg:px-8 pb-24">
        <SectionHeader
          badge="Proceso"
          theme="dark"
          title={
            <>
              Cómo se desarrolla una obra en{' '}
              <span className="text-primary-500">Steel Framing</span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map((step) => (
            <div
              key={step.number}
              className="glass-card p-6 border border-white/10 bg-white/5"
            >
              <span className="text-4xl font-black text-primary-500/70">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-black text-primary-200">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparación */}
      <section className="relative max-w-[1300px] mx-auto px-6 lg:px-8 pb-24">
        <div className="glass-card p-7 md:p-10 border border-primary-500/20 bg-primary-600/10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="section-badge">Comparación</span>

              <h2 className="mt-6 text-3xl md:text-4xl font-black text-white leading-tight">
                Steel Framing no significa menor calidad, sino otra forma de
                construir.
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                En la construcción tradicional se utilizan materiales húmedos,
                tiempos de secado y procesos más pesados. En Steel Framing, la
                estructura y los cerramientos se ejecutan con mayor precisión y
                planificación.
              </p>

              <p className="text-white/70 leading-relaxed">
                El resultado puede ser una vivienda igual de sólida, pero con
                mejor control de aislación, menor peso, menor desperdicio y
                tiempos de obra más reducidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative max-w-[1300px] mx-auto px-6 lg:px-8 pb-24">
        <SectionHeader
          badge="Dudas frecuentes"
          theme="dark"
          title={
            <>
              Preguntas frecuentes sobre{' '}
              <span className="text-primary-500">Steel Framing</span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="glass-card p-6 border border-white/10 bg-white/5"
            >
              <h3 className="text-lg font-black text-primary-200 mb-3">
                {faq.question}
              </h3>

              <p className="text-sm text-white/65 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="relative max-w-[1300px] mx-auto px-6 lg:px-8 pb-28">
        <div className="rounded-[32px] border border-primary-500/30 bg-primary-600/20 p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            ¿Querés construir con Steel Framing?
          </h2>

          <p className="mt-4 max-w-[680px] mx-auto text-white/70 leading-relaxed">
            Podemos ayudarte a evaluar tu proyecto, definir el sistema
            constructivo más conveniente y planificar cada etapa de la obra.
          </p>

          <a
            href="/#contacto"
            className="btn-primary inline-flex justify-center mt-8"
          >
            Solicitar asesoramiento
          </a>
        </div>
      </section>
    </main>
  )
}