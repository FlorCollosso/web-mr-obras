import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToHash from './components/ui/ScrollToHash'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'

import HeroSection from './components/sections/HeroSection'
import NosotrosSection from './components/sections/NosotrosSection'
import ProyectosSection from './components/sections/ProyectosSection'
import ServiciosSection from './components/sections/ServiciosSection'
import TipologiasSection from './components/sections/TipologiasSection'
import ContactoSection from './components/sections/ContactoSection'

import PortfolioPage from './pages/PortfolioPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <NosotrosSection />
      <ProyectosSection />
      <ServiciosSection />
      <TipologiasSection />
      <ContactoSection />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}