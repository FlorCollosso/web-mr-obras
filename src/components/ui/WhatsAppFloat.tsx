export default function WhatsAppFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5493510000000&text=Hola%20MR%20Obras%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#1da851] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 border-2 border-white/20"
      aria-label="Contactar por WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2C7.4 2 2 7.4 2 14c0 2.1.6 4.1 1.5 5.9L2 26l6.4-1.5C10 25.4 12 26 14 26c6.6 0 12-5.4 12-12S20.6 2 14 2Z" fill="white" fillOpacity=".25"/>
        <path d="M19.5 17c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.49-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17 0-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" fill="white"/>
      </svg>
    </a>
  )
}
