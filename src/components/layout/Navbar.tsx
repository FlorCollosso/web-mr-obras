import { useState, useEffect, useCallback } from 'react'
import logo from '../../assets/images/logo-mr-obras.png'

const NAV_LINKS = [
  { label: 'Inicio',     href: '#inicio' },
  { label: 'Nosotros',   href: '#nosotros' },
  { label: 'Proyectos',  href: '#proyectos' },
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Tipologías', href: '#tipologias' },
  { label: 'Contacto',   href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false)
  const [menuOpen, setMenuOpen]             = useState(false)
  const [activeSection, setActiveSection]   = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.slice(1))
    const ratioMap: Record<string, number> = {}

    const pickActive = () => {
      let best = sectionIds[0]
      let bestRatio = -1
      for (const [id, ratio] of Object.entries(ratioMap)) {
        if (ratio > bestRatio) { bestRatio = ratio; best = id }
      }
      setActiveSection(best)
    }

    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          ratioMap[id] = entry.isIntersecting ? entry.intersectionRatio : 0
          pickActive()
        },
        { rootMargin: '-82px 0px -40% 0px', threshold: [0, 0.1, 0.3, 0.5, 0.75, 1] },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleNavClick = useCallback((id: string) => {
    setActiveSection(id)
    setMenuOpen(false)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`max-w-[1300px] mx-auto px-6 lg:px-8 h-[82px] flex items-center justify-between rounded-b-3xl ${scrolled ? 'bg-dark/60 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0" onClick={() => handleNavClick('inicio')}>
          <img src={logo} alt="MR Obras" className="w-auto h-10" />
        </a>

        <div className="flex-1" />

        <nav className="hidden lg:flex items-center gap-5 mr-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(id)}
                className={`relative flex h-[82px] items-center px-2 text-[12px] font-medium transition-colors duration-150 after:absolute after:bottom-6 after:left-1/2 after:h-[1.5px] after:-translate-x-1/2 after:rounded-full after:bg-primary-500 after:transition-all after:duration-300 ${isActive ? 'text-primary-500 after:w-full' : 'text-white hover:text-primary-500 after:w-0 hover:after:w-full'}`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-dark/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1)
            return (
              <a key={link.href} href={link.href} onClick={() => handleNavClick(id)} className={`text-base font-semibold py-1 transition-colors ${activeSection === id ? 'text-primary-400' : 'text-white/80 hover:text-primary-300'}`}>
                {link.label}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
