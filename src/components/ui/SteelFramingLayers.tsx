import { useEffect, useState } from 'react'

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
            'Placa interior que aporta protección y una superficie lista para pintar o revestir.',
        image: layer01,
        marker: { top: '18%', left: '27%' },
        hotspot: { top: '4%', left: '20%', width: '34%', height: '76%' },
    },
    {
        id: 'perfiles',
        number: '2',
        title: 'Estructura de acero galvanizado',
        description:
            'Perfiles livianos y resistentes que forman la estructura principal del muro.',
        image: layer02,
        marker: { top: '24%', left: '40%' },
        hotspot: { top: '14%', left: '28%', width: '30%', height: '52%' },
    },
    {
        id: 'aislante',
        number: '3',
        title: 'Aislación térmica y acústica',
        description:
            'Material aislante para mejorar el confort interior y reducir el consumo energético.',
        image: layer03,
        marker: { top: '46%', left: '32%' },
        hotspot: { top: '24%', left: '31%', width: '30%', height: '45%' },
    },
    {
        id: 'placa-rigidizadora',
        number: '4',
        title: 'Placa rigidizadora',
        description:
            'Placa estructural que refuerza el muro y aporta mayor firmeza al sistema.',
        image: layer04,
        marker: { top: '48%', left: '52%' },
        hotspot: { top: '36%', left: '38%', width: '34%', height: '32%' },
    },
    {
        id: 'barrera',
        number: '5',
        title: 'Barrera hidrófuga',
        description:
            'Membrana protectora contra humedad, viento e infiltraciones exteriores.',
        image: layer05,
        marker: { top: '63%', left: '40%' },
        hotspot: { top: '46%', left: '41%', width: '32%', height: '30%' },
    },
    {
        id: 'aislacion-exterior-malla',
        number: '6',
        title: 'Aislación exterior y malla',
        description:
            'Capa exterior que mejora el rendimiento térmico y prepara la superficie.',
        image: layer06,
        marker: { top: '68%', left: '56%' },
        hotspot: { top: '57%', left: '45%', width: '32%', height: '28%' },
    },
    {
        id: 'proteccion-exterior',
        number: '7',
        title: 'Protección exterior',
        description:
            'Placa que mejora la resistencia y durabilidad del cerramiento.',
        image: layer07,
        marker: { top: '85%', left: '40%' },
        hotspot: { top: '68%', left: '49%', width: '30%', height: '26%' },
    },
    {
        id: 'revestimiento',
        number: '8',
        title: 'Revestimiento exterior',
        description:
            'Terminación final del muro: plástica, texturada o cerámica según el proyecto.',
        image: layer08,
        marker: { top: '85%', left: '62%' },
        hotspot: { top: '77%', left: '52%', width: '28%', height: '22%' },
    },
]

export default function SteelFramingLayers() {
    const [activeLayer, setActiveLayer] = useState<Layer>(LAYERS[0])
    const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null)

    const toggleLayer = (layer: Layer) => {
        setActiveLayer(layer)
        setSelectedLayer((current) => (current?.id === layer.id ? null : layer))
    }

    const closeTooltip = () => setSelectedLayer(null)

    useEffect(() => {
        if (!selectedLayer) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeTooltip()
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedLayer])

    return (
        <div className="h-full w-full overflow-visible">
            <div className="relative flex h-full w-full flex-col">
                <div className="absolute inset-0 pointer-events-none" />

                {/* Área del muro: ocupa todo el espacio disponible menos lo que use el texto de ayuda de abajo */}
                <div className="relative flex flex-1 items-center justify-center px-8 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16">
                    {/* Muro: se ajusta al espacio disponible (ancho y alto) sin deformarse ni desbordar */}
                    <div
                        className="relative shrink-0 overflow-visible max-w-full"
                        style={{
                            aspectRatio: '500 / 750',
                            height: '100%',
                            width: 'auto',
                            maxWidth: '100%',
                            maxHeight: '100%',
                        }}
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
                                onClick={() => toggleLayer(layer)}
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
                        {LAYERS.map((layer) => {
                            const isActive = activeLayer.id === layer.id

                            return (
                                <button
                                    key={`marker-${layer.id}`}
                                    type="button"
                                    onMouseEnter={() => setActiveLayer(layer)}
                                    onFocus={() => setActiveLayer(layer)}
                                    onClick={() => toggleLayer(layer)}
                                    aria-expanded={selectedLayer?.id === layer.id}
                                    className={`
                      absolute z-40 flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 -translate-x-1/2 -translate-y-1/2
                      items-center justify-center rounded-full text-[11px] sm:text-xs md:text-sm font-black
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

                        {/* Tooltip de la capa seleccionada */}
                        {selectedLayer && (
                            <div
                                role="tooltip"
                                className="absolute z-[40] w-[min(66vw,210px)] sm:w-[230px] md:w-[250px]"
                                style={{
                                    top: selectedLayer.marker.top,
                                    left: selectedLayer.marker.left,
                                    transform: 'translate(-50%, calc(-100% - 28px))',
                                }}
                            >
                                <div className="relative rounded-xl border border-primary-400/40 border-l-0 bg-dark-alt/80 backdrop-blur-md pr-3.5 shadow-[0_10px_28px_rgba(0,0,0,0.5)]">
                                    <div className="rounded-xl border-l-8 border-primary-400 pl-4 py-3">
                                        <p className="text-[13px] sm:text-[14px] md:text-[15px] font-black leading-snug text-primary-300">
                                            {selectedLayer.title}
                                        </p>
                                        <p className="mt-1.5 text-[11px] sm:text-[12px] md:text-[13px] leading-snug text-white/70">
                                            {selectedLayer.description}
                                        </p>
                                    </div>

                                    {/* Cola apuntando al número */}
                                    <div className="absolute left-1/2 -bottom-[10px] h-[10px] w-5 -translate-x-1/2 overflow-hidden">
                                        <div className="h-full w-full bg-dark-alt/80 border-x border-b border-primary-400/40 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Capa invisible para cerrar el tooltip al tocar afuera (por debajo de números y hotspots) */}
                {selectedLayer && (
                    <div
                        className="fixed inset-0 z-30"
                        onClick={closeTooltip}
                        aria-hidden="true"
                    />
                )}
            </div>
        </div>
    )
}
