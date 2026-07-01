import { useState, useEffect, useCallback } from 'react'
import { HERO_SLIDES } from '../../data'
import videoHero from '../../assets/videos/video-casa-familiar.mp4'

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setCurrent(idx)
    setTimeout(() => setAnimating(false), 600)
  }, [animating])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % HERO_SLIDES.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [current, goTo])

  const slide = HERO_SLIDES[current]

  return (
    <section id="inicio" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background images (preloaded) */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <video
            src={videoHero}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(106deg, rgba(100,100,100,0.75) 0%, rgba(0,38,37,0.85) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 w-full">
          <div className={`max-w-[860px] transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <p className="text-2xl md:text-3xl font-semibold text-primary-100 mb-5">
              {slide.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[48px] font-extrabold text-white leading-[1.1] mb-10 whitespace-pre-line">
              {slide.title}
            </h1>

          </div>
          <a href="#contacto" className="btn-primary text-md md:text-md px-6 py-2">
            Solicitar presupuesto
          </a>
          {/* Carousel indicators */}
          <div className="flex gap-3 mt-16">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === current
                    ? 'bg-primary-500 w-9 h-3'
                    : 'bg-primary-600 w-3 h-3 hover:bg-primary-500'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
