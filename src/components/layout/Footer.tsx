export default function Footer() {
  return (
    <footer className="bg-[#060f11] border-t border-white/5 py-8">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg width="17" height="16" viewBox="0 0 20 18" fill="none">
                  <path d="M2 17L10 3L18 17" stroke="white" strokeWidth="2" fill="none"/>
                  <rect x="6" y="11" width="8" height="6" rx=".4" fill="white" fillOpacity=".4"/>
                  <rect x="7.5" y="13" width="5" height="4" rx=".3" fill="white"/>
                </svg>
              </div>
              <span className="text-[17px] font-black text-white tracking-tight">
                MR<span className="text-primary-400"> Obras</span>
              </span>
            </div>
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Empresa constructora especializada en steel framing y construcción tradicional. Córdoba, Argentina.
            </p>
          </div>
          {/* Links */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Servicios</p>
            <div className="flex flex-col gap-2.5 text-sm text-white/45">
              {['Casas llave en mano', 'Diseño y proyectos', 'Construcción', 'Steel Framing'].map((s) => (
                <a key={s} href="#servicios" className="hover:text-primary-300 transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contacto</p>
            <div className="flex flex-col gap-2.5 text-sm text-white/45">
              <p>📍 Córdoba, Argentina</p>
              <p>📞 (351) XXX-XXXX</p>
              <p>✉️ hola@mrobras.com.ar</p>
              <p className="text-xs text-white/25 mt-1">Lun–Vie · 8 a 18 hs</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/7 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/20">
          <p>© 2025 MR Obras. Todos los derechos reservados.</p>
          <p>Diseñado en Córdoba 🇦🇷</p>
        </div>
      </div>
    </footer>
  )
}
