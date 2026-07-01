import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-mr-obras.png'

const NAV_LINKS = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Tipologías', href: '/#tipologias' },
  { label: 'Contacto', href: '/#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.split('#')[1])
    const ratioMap: Record<string, number> = {}

    const pickActive = () => {
      let best = activeSection
      let bestRatio = 0

      for (const id of sectionIds) {
        const ratio = ratioMap[id] ?? 0

        if (ratio > bestRatio) {
          best = id
          bestRatio = ratio
        }
      }

      if (bestRatio > 0) {
        setActiveSection(best)
      }
    }

    const observers = sectionIds
      .map((id) => {
        const el = document.getElementById(id)
        if (!el) return null

        const observer = new IntersectionObserver(
          ([entry]) => {
            ratioMap[id] = entry.isIntersecting
              ? entry.intersectionRatio
              : 0

            pickActive()
          },
          {
            rootMargin: '-82px 0px -40% 0px',
            threshold: [0, 0.1, 0.3, 0.5, 0.75, 1],
          }
        )

        observer.observe(el)
        return observer
      })
      .filter(Boolean) as IntersectionObserver[]

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`max-w-[1300px] mx-auto px-6 lg:px-8 h-[82px] flex items-center justify-between rounded-b-3xl ${
          scrolled
            ? 'bg-dark/60 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <Link
          to="/#inicio"
          className="flex items-center gap-2.5 shrink-0"
          onClick={closeMenu}
        >
          <img src={logo} alt="MR Obras" className="w-auto h-10" />
        </Link>

        <div className="flex-1" />

        <nav className="hidden lg:flex items-center gap-5 mr-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.split('#')[1]
            const isActive = activeSection === id

            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className={`relative flex h-[82px] items-center px-2 text-[12px] font-medium transition-colors duration-150 after:absolute after:bottom-6 after:left-1/2 after:h-[1.5px] after:-translate-x-1/2 after:rounded-full after:bg-primary-500 after:transition-all after:duration-300 ${
                  isActive
                    ? 'text-primary-500 after:w-full'
                    : 'text-white hover:text-primary-500 after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-dark/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => {
            const id = link.href.split('#')[1]

            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className={`text-base font-semibold py-1 transition-colors ${
                  activeSection === id
                    ? 'text-primary-400'
                    : 'text-white/80 hover:text-primary-300'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}