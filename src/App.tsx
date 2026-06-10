import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import HeroSection from './components/sections/HeroSection'
import NosotrosSection from './components/sections/NosotrosSection'
import ProyectosSection from './components/sections/ProyectosSection'
import ServiciosSection from './components/sections/ServiciosSection'
import TipologiasSection from './components/sections/TipologiasSection'
import SteelFramingSection from './components/sections/SteelFramingSection'
import ContactoSection from './components/sections/ContactoSection'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <NosotrosSection />
        <ProyectosSection />
        <ServiciosSection />
        <TipologiasSection />
        <SteelFramingSection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
