import { useState } from 'react'

import layer01 from '../../assets/images/steel-framing/layer-01-muro-interior.png'
import layer02 from '../../assets/images/steel-framing/layer-02-perfiles.png'
import layer03 from '../../assets/images/steel-framing/layer-03-aislante.png'
import layer04 from '../../assets/images/steel-framing/layer-04-placa-rigidizadora.png'
import layer05 from '../../assets/images/steel-framing/layer-05-barrera.png'
import layer06 from '../../assets/images/steel-framing/layer-06-aislacion-exterior-malla.png'
import layer07 from '../../assets/images/steel-framing/layer-07-proteccion-exterior.png'
import layer08 from '../../assets/images/steel-framing/layer-08-revestimiento.png'

type Layer = {
    id: string
    number: string
    title: string
    description: string
    image: string
    marker: {
        top: string
        left: string
    }
    hotspot: {
        top: string
        left: string
        width: string
        height: string
    }
}

const LAYERS: Layer[] = [
    {
        id: 'muro-interior',
        number: '1',
        title: 'Muro interior',
        description:
            'Placa interior que aporta terminación, protección y una superficie lista para pintar o revestir.',
        image: layer01,
        marker: { top: '14%', left: '46%' },
        hotspot: { top: '4%', left: '20%', width: '34%', height: '76%' },
    },
    {
        id: 'perfiles',
        number: '2',
        title: 'Estructura de acero galvanizado',
        description:
            'Perfiles livianos y resistentes que forman la estructura principal del muro.',
        image: layer02,
        marker: { top: '24%', left: '42%' },
        hotspot: { top: '14%', left: '28%', width: '30%', height: '52%' },
    },
    {
        id: 'aislante',
        number: '3',
        title: 'Aislación térmica y acústica',
        description:
            'Material aislante para mejorar el confort interior y reducir el consumo energético.',
        image: layer03,
        marker: { top: '32%', left: '50%' },
        hotspot: { top: '24%', left: '31%', width: '30%', height: '45%' },
    },
    {
        id: 'placa-rigidizadora',
        number: '4',
        title: 'Placa rigidizadora',
        description:
            'Placa estructural que refuerza el muro y aporta mayor firmeza al sistema.',
        image: layer04,
        marker: { top: '45%', left: '52%' },
        hotspot: { top: '36%', left: '38%', width: '34%', height: '32%' },
    },
    {
        id: 'barrera',
        number: '5',
        title: 'Barrera hidrófuga',
        description:
            'Membrana protectora contra humedad, viento e infiltraciones exteriores.',
        image: layer05,
        marker: { top: '54%', left: '53%' },
        hotspot: { top: '46%', left: '41%', width: '32%', height: '30%' },
    },
    {
        id: 'aislacion-exterior-malla',
        number: '6',
        title: 'Aislación exterior y malla',
        description:
            'Capa exterior que mejora el rendimiento térmico y prepara la superficie.',
        image: layer06,
        marker: { top: '65%', left: '56%' },
        hotspot: { top: '57%', left: '45%', width: '32%', height: '28%' },
    },
    {
        id: 'proteccion-exterior',
        number: '7',
        title: 'Protección exterior',
        description:
            'Placa de protección que mejora la resistencia y durabilidad del cerramiento.',
        image: layer07,
        marker: { top: '75%', left: '54%' },
        hotspot: { top: '68%', left: '49%', width: '30%', height: '26%' },
    },
    {
        id: 'revestimiento',
        number: '8',
        title: 'Revestimiento exterior',
        description:
            'Terminación final del muro: plástica, texturada o cerámica según el proyecto.',
        image: layer08,
        marker: { top: '82%', left: '62%' },
        hotspot: { top: '77%', left: '52%', width: '28%', height: '22%' },
    },
]

export default function SteelFramingLayers() {
    const [activeLayer, setActiveLayer] = useState<Layer>(LAYERS[0])

    return (
        <div className="h-full w-full min-h-0 overflow-hidden">
            <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />

                <div className="relative h-full w-full p-6 sm:p-7 md:p-8 lg:p-9">
                    <div className="grid h-full w-full grid-cols-1 md:grid-cols-[auto_minmax(280px,340px)] gap-4 md:gap-6 lg:gap-8 items-center justify-center">

                        {/* Muro */}
                        <div className="relative flex h-full min-h-[260px] w-auto items-center justify-center overflow-visible">
                            <div
                                className="relative w-[clamp(260px,32vw,480px)] max-h-full"
                                style={{ aspectRatio: '700 / 900' }}
                            >
                                {/* Capas */}
                                {LAYERS.map((layer, index) => {
                                    const isActive = activeLayer.id === layer.id

                                    return (
                                        <img
                                            key={layer.id}
                                            src={layer.image}
                                            alt={layer.title}
                                            className={`
                                                absolute inset-0 h-full w-full object-contain select-none pointer-events-none
                                                transition-all duration-300 ease-out
                                                ${isActive
                                                    ? 'opacity-100 brightness-105 drop-shadow-[0_0_10px_rgba(0,196,190,0.8)]'
                                                    : 'opacity-100 brightness-100'
                                                }
                                            `}
                                            style={{ zIndex: index + 1 }}
                                        />
                                    )
                                })}

                                {/* Hotspots invisibles */}
                                {LAYERS.map((layer) => (
                                    <button
                                        key={`hotspot-${layer.id}`}
                                        type="button"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        onMouseEnter={() => setActiveLayer(layer)}
                                        onClick={() => setActiveLayer(layer)}
                                        className="
      absolute z-40 cursor-pointer appearance-none border-0 bg-transparent
      outline-none ring-0
      focus:outline-none focus:ring-0
      focus-visible:outline-none focus-visible:ring-0
    "
                                        style={{
                                            top: layer.hotspot.top,
                                            left: layer.hotspot.left,
                                            width: layer.hotspot.width,
                                            height: layer.hotspot.height,
                                        }}
                                    />
                                ))}

                                {/* Marcadores numerados sobre el muro */}
                                {/* Marcadores numerados sobre el muro */}
                                {LAYERS.map((layer) => {
                                    const isActive = activeLayer.id === layer.id

                                    return (
                                        <button
                                            key={`marker-${layer.id}`}
                                            type="button"
                                            onMouseEnter={() => setActiveLayer(layer)}
                                            onFocus={() => setActiveLayer(layer)}
                                            onClick={() => setActiveLayer(layer)}
                                            className={`
        absolute z-50 flex h-8 w-8 md:h-9 md:w-9 -translate-x-1/2 -translate-y-1/2
        items-center justify-center rounded-full text-xs md:text-sm font-black
        transition-all duration-200 outline-none
        ${isActive
                                                    ? 'bg-primary-300 text-dark scale-110 shadow-[0_0_14px_rgba(0,196,190,0.65)]'
                                                    : 'bg-dark/80 text-primary-200 border border-primary-400/50 hover:bg-primary-400 hover:text-dark'
                                                }
      `}
                                            style={{
                                                top: layer.marker.top,
                                                left: layer.marker.left,
                                            }}
                                            aria-label={`Ver capa ${layer.number}: ${layer.title}`}
                                        >
                                            {layer.number}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Lista derecha */}
                        <div className="relative z-50 flex h-full min-h-0 flex-col justify-center gap-1.5 md:gap-2">
                            {LAYERS.map((layer) => {
                                const isActive = activeLayer.id === layer.id

                                return (
                                    <button
                                        key={layer.id}
                                        type="button"
                                        onMouseEnter={() => setActiveLayer(layer)}
                                        onFocus={() => setActiveLayer(layer)}
                                        onClick={() => setActiveLayer(layer)}
                                        className={`group text-left rounded-xl border px-3 py-2 md:px-3.5 md:py-2.5 transition-all duration-200 ${isActive
                                            ? 'bg-primary-500/18 border-primary-400 shadow-[0_0_8px_rgba(0,196,190,0.16)]'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary-500/40'
                                            }`}
                                    >
                                        <div className="flex items-start gap-2.5">
                                            <span
                                                className={`flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full text-xs md:text-sm font-black transition-all duration-200 ${isActive
                                                    ? 'bg-primary-300 text-dark shadow-[0_0_16px_rgba(0,196,190,0.7)]'
                                                    : 'bg-primary-500/70 text-white group-hover:bg-primary-700 group-hover:text-dark'
                                                    }`}
                                            >
                                                {layer.number}
                                            </span>

                                            <div className="min-w-0">
                                                <p
                                                    className={`text-xs md:text-sm font-black leading-tight transition-colors ${isActive ? 'text-primary-200' : 'text-white'
                                                        }`}
                                                >
                                                    {layer.title}
                                                </p>

                                                {isActive && (
                                                    <p className="mt-1 text-[11px] md:text-xs leading-relaxed text-white/70">
                                                        {layer.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}