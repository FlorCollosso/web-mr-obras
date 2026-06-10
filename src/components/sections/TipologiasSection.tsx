import { useState, useRef, useEffect, useCallback } from 'react'
import { useInView } from '../../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'
import { TYPOLOGIES } from '../../data'
import casaFamiliarliving from '../../assets/images/360/casa-familiar-living.jpg'
import casaFamiliarDorm1 from '../../assets/images/360/casa-familiar-dormitorio-principal.jpg'
import casaFamiliarDorm2 from '../../assets/images/360/casa-familiar-dormitorio-individual.jpg'
import casaFamiliarBaño from '../../assets/images/360/casa-familiar-baño.jpg'
import PanoramaViewer from '../ui/PanoramaViewer' 

// ─── Panoramic Viewer ──────────────────────────────────────────────────────────
const ROOM_IMAGES: Record<string, Record<string, string>> = {
  '36': {
    living:     'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=2400&q=70',
    dormitorio: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=2400&q=70',
    cocina:     'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2400&q=70',
    baño:       'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=2400&q=70',
  },
  '42': {
    living: casaFamiliarliving,
    dorm1:     casaFamiliarDorm1,
    dorm2:     casaFamiliarDorm2,
    baño:       casaFamiliarBaño,
  },
}

const ROOM_LABELS: Record<string, string[]> = {
  '36': ['living', 'dormitorio', 'cocina', 'baño'],
  '42': ['living', 'dorm1', 'dorm2', 'baño'],
}

const ROOM_DISPLAY: Record<string, string> = {
  living: 'Living', dormitorio: 'Dormitorio', cocina: 'Cocina',
  baño: 'Baño', dorm1: 'Dorm. 1', dorm2: 'Dorm. 2', galeria: 'Galería',
}

function PanoViewer({ typologyId }: { typologyId: string }) {
  const rooms = ROOM_LABELS[typologyId]
  const [activeRoom, setActiveRoom] = useState(rooms[0])
  const [imgSrc, setImgSrc] = useState(ROOM_IMAGES[typologyId][rooms[0]])
  const [isAuto, setIsAuto] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const velRef = useRef(0)
  const isDragging = useRef(false)
  const lastX = useRef(0)
  const rafRef = useRef<number>(0)
  const autoTimeout = useRef<ReturnType<typeof setTimeout>>()

  const renderFrame = useCallback(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return
    const imgEl = inner.querySelector('img') as HTMLImageElement | null
    const imgW = imgEl?.naturalWidth || 2400
    const panW = container.offsetWidth
    const max = Math.max(imgW - panW, 1)
    const looped = ((posRef.current % max) + max) % max
    inner.style.transform = `translateX(${-looped}px)`
  }, [])

  useEffect(() => {
    const tick = () => {
      if (!isDragging.current) {
        if (isAuto) velRef.current = -0.45
        posRef.current += velRef.current
        velRef.current *= 0.92
      }
      renderFrame()
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isAuto, renderFrame])

  const onDown = (x: number) => {
    isDragging.current = true
    setIsAuto(false)
    lastX.current = x
    clearTimeout(autoTimeout.current)
    containerRef.current?.classList.add('cursor-grabbing')
  }
  const onMove = (x: number) => {
    if (!isDragging.current) return
    const dx = lastX.current - x
    posRef.current += dx * 1.2
    velRef.current = dx * 1.2
    lastX.current = x
  }
  const onUp = () => {
    isDragging.current = false
    containerRef.current?.classList.remove('cursor-grabbing')
    autoTimeout.current = setTimeout(() => setIsAuto(true), 3000)
  }

  const changeRoom = (room: string) => {
    setActiveRoom(room)
    setImgSrc(ROOM_IMAGES[typologyId][room])
    posRef.current = 0
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-dark">
      {/* Header bar */}
      <div className="bg-dark-alt/80 px-5 py-3 flex items-center justify-between border-b border-white/8">
        <div className="flex gap-1.5">
          {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((c) => (
            <div key={c} className={`w-3 h-3 rounded-full ${c}`} />
          ))}
        </div>
        <p className="text-xs font-bold text-white/60 tracking-wide uppercase">
          Tour 360° — Tipología {typologyId === '36' ? 'A' : 'B'} · {typologyId} m²
        </p>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${isAuto ? 'text-primary-400 border-primary-400/40 bg-primary-400/10' : 'text-white/40 border-white/20'}`}>
          {isAuto ? '● AUTO' : '● MANUAL'}
        </span>
      </div>

      {/* Panorama */}
      <div
        ref={containerRef}
        className="relative h-64 md:h-80 overflow-hidden cursor-grab select-none"
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={(e) => { e.preventDefault(); onDown(e.touches[0].clientX) }}
        onTouchMove={(e) => { e.preventDefault(); onMove(e.touches[0].clientX) }}
        onTouchEnd={onUp}
      >
        <div ref={innerRef} className="absolute top-0 left-0 h-full flex will-change-transform">
          <img src={imgSrc} alt="Interior" className="h-full w-auto max-w-none object-cover" draggable={false} />
          <img src={imgSrc} alt="" className="h-full w-auto max-w-none object-cover" draggable={false} aria-hidden />
        </div>
        {/* Edge fade */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(10,37,56,0.4) 0%, transparent 12%, transparent 88%, rgba(10,37,56,0.4) 100%)' }}
        />
        {/* Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-dark/70 backdrop-blur-sm rounded-full px-4 py-1.5">
          <span className="text-xs text-white/50">👆 Arrastrá para rotar</span>
        </div>
      </div>

      {/* Room pills */}
      <div className="bg-dark-alt/60 px-4 py-3 flex flex-wrap gap-2 border-t border-white/8">
        {rooms.map((room) => (
          <button
            key={room}
            onClick={() => changeRoom(room)}
            className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-150 ${
              activeRoom === room
                ? 'bg-primary-600 text-primary-100'
                : 'bg-white/8 text-white/50 hover:bg-white/14'
            }`}
          >
            {ROOM_DISPLAY[room]}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Typology Card ─────────────────────────────────────────────────────────────
function TypologyCard({ typo }: { typo: typeof TYPOLOGIES[0] }) {
  const [showTour, setShowTour] = useState(false)

  return (
    <div
      className="glass-card overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(1,150,146,0.12) 0%, rgba(10,37,56,0.7) 100%)' }}
    >
      {/* Top: image + info split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-60 lg:h-auto min-h-[220px] overflow-hidden">
          <img
            src={typo.image}
            alt={typo.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/70 lg:bg-gradient-to-r lg:from-transparent lg:to-dark/80" />
          <span className="absolute top-4 left-4 bg-primary-600 text-primary-100 text-xs font-bold px-3 py-1 rounded-full">
            {typo.badge}
          </span>
          <div className="absolute bottom-4 left-4 lg:right-4 lg:left-auto bg-dark/80 backdrop-blur-sm text-primary-300 text-2xl font-black px-4 py-1.5 rounded-xl">
            {typo.area} m²
          </div>
        </div>

        {/* Info */}
        <div className="p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">{typo.name}</h3>
            <p className="text-sm text-primary-200/80 leading-relaxed mb-5">{typo.description}</p>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {typo.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-primary-200">
                  <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contacto" className="btn-primary flex-1 min-w-fit justify-center text-base">
              Consultar tipología
            </a>
            <button
              onClick={() => setShowTour((v) => !v)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border font-bold text-sm transition-all duration-200 ${
                showTour
                  ? 'bg-primary-600/60 border-primary-500 text-primary-100'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {showTour
                  ? <><path d="M18 6 6 18M6 6l12 12"/></>
                  : <><path d="M21 12a9 9 0 1 1-6.219-8.56"/><path d="M21 3v4h-4"/></>
                }
              </svg>
              {showTour ? 'Cerrar tour' : 'Tour 360°'}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable tour */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showTour ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 pt-0">
          <PanoViewer typologyId={typo.id} />
        </div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function TipologiasSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="tipologias"
      className="relative py-24 lg:py-36 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-dark-alt pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Tipologías"
          title={
            <>
              Casas diseñadas para{' '}
              <span className="text-primary-500">cada etapa de vida</span>
            </>
          }
        />
        <p className="text-lg text-white/70 max-w-2xl mb-12 leading-relaxed">
          Dos tipologías de acceso pensadas para optimizar cada metro cuadrado. Ambas disponibles en
          steel framing o construcción tradicional.
        </p>

        <div
          className={`flex flex-col gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {TYPOLOGIES.map((t) => (
            <TypologyCard key={t.id} typo={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
