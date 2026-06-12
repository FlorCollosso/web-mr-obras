import { useEffect, useRef } from 'react'
import { Viewer } from '@photo-sphere-viewer/core'
import '@photo-sphere-viewer/core/index.css'

type PanoramaViewerProps = {
  panorama: string
}

export default function PanoramaViewer({ panorama }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const viewerRef = useRef<Viewer | null>(null)

  useEffect(() => {
    if (!containerRef.current || !panorama) return

    const timeout = window.setTimeout(() => {
      if (!containerRef.current) return

      viewerRef.current = new Viewer({
        container: containerRef.current,
        panorama,
        defaultZoomLvl: 30,
        mousewheel: true,
        navbar: ['zoom', 'move', 'fullscreen'],
        loadingTxt: 'Cargando tour 360...',
      })
    }, 100)

    return () => {
      window.clearTimeout(timeout)
      viewerRef.current?.destroy()
      viewerRef.current = null
    }
  }, [panorama])

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[420px] md:min-h-[560px] overflow-hidden bg-black"
    />
  )
}