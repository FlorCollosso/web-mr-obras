import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = location.hash.replace('#', '')

    const timeout = window.setTimeout(() => {
      const element = document.getElementById(id)

      if (element) {
        const yOffset = -90
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        })
      }
    }, 150)

    return () => window.clearTimeout(timeout)
  }, [location.pathname, location.hash])

  return null
}