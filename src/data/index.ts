import casaArroyitoCocina from '../assets/images/donpablo-mixta-cocina.jpeg'
import casaArroyitoFrente from '../assets/images/donpablo-mixta-frente.jpeg'
import cabañaValle from '../assets/images/casa-valle-steelframing.jpeg'
import casaCompacta from '../assets/images/casa-compacta.png'
import casaFamiliar from '../assets/images/casa-familiar.png'

// ─── Hero Slides ───────────────────────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: 'Construcción eficiente y moderna',
    title: 'Podés reducir tiempos y costos sin perder calidad',
  },
  {
    id: 2,
    eyebrow: 'Calidad, experiencia y profesionalismo',
    title: 'Especialistas en construcción en seco en Córdoba',
  },
  {
    id: 3,
    eyebrow: 'Adaptabilidad y diseño a tu medida',
    title: '¿Buscás una casa que se ajuste a tus necesidades reales?',
  },
]

// ─── Benefits ──────────────────────────────────────────────────────────────────
export const BENEFITS = [
  {
    id: 1,
    title: 'Eficiencia y rapidez',
    description: 'Optimizamos tiempos y recursos sin descuidar calidad y terminaciones.',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Proyectos a medida',
    description: 'Diseñamos y construimos según las necesidades reales de cada cliente.',
    icon: '📐',
  },
  {
    id: 3,
    title: 'Experiencia comprobable',
    description: 'Más de 10 años y más de 40 obras en Córdoba, sistemas modernos y tradicionales.',
    icon: '🏗️',
  },
  {
    id: 4,
    title: 'Claridad y compromiso',
    description: 'Acompañamos cada etapa con transparencia y cumplimiento de lo acordado.',
    icon: '🤝',
  },
]

// ─── Process Steps ─────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  { id: 1, title: 'Asesoramiento', description: 'Escuchamos tu idea y evaluamos el terreno.' },
  { id: 2, title: 'Diseño', description: 'Planos y renders del proyecto a tu gusto.' },
  { id: 3, title: 'Presupuesto', description: 'Detallado, claro y sin sorpresas.' },
  { id: 4, title: 'Construcción', description: 'Con seguimiento y comunicación continua.' },
  { id: 5, title: 'Entrega', description: 'Recibís las llaves de tu nueva casa.', isLast: true },
]

// ─── Projects ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    slug: 'casa-familiar-arroyito',
    title: 'Casa Familiar - Arroyito',
    subtitle: 'Sistema mixto - 120 m²',
    image: casaArroyitoCocina,
    featured: true,
  },
  {
    id: 2,
    slug: 'cabana-valle-hermoso',
    title: 'Cabaña - Valle Hermoso',
    subtitle: 'Steel framing - 90 m²',
    image: cabañaValle,
  },
  {
    id: 3,
    slug: 'casa-garcia-cordoba',
    title: 'Casa García - Córdoba',
    subtitle: 'Construcción tradicional - 85 m²',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
  },
  {
    id: 4,
    slug: 'galeria-arroyito',
    title: 'Galería - Arroyito',
    subtitle: 'Steel framing - 30 m²',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    id: 5,
    slug: 'vestidor-la-francia',
    title: 'Vestidor - La Francia',
    subtitle: 'Steel framing - 30 m²',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
]

// ─── Projects Page ──────────────────────────────────────────────────────────────────
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    slug: 'casa-familiar-arroyito',
    title: 'Casa Familiar - Arroyito',
    category: 'Viviendas',
    system: 'Sistema mixto',
    area: '120 m²',
    location: 'Arroyito, Córdoba',
    year: '2025',
    cover: casaArroyitoFrente,
    gallery: [casaArroyitoFrente, casaArroyitoCocina],
    description:
      'Vivienda familiar desarrollada con sistema mixto, combinando construcción tradicional y soluciones en seco para optimizar tiempos, terminaciones y funcionalidad.',
    details: [
      'Diseño personalizado',
      'Cocina integrada',
      'Galería exterior',
      'Sistema mixto',
    ],
  },
  {
    id: 2,
    slug: 'cabana-valle-hermoso',
    title: 'Cabaña - Valle Hermoso',
    category: 'Steel framing',
    system: 'Steel framing',
    area: '90 m²',
    location: 'Valle Hermoso, Córdoba',
    year: '2025',
    cover: cabañaValle,
    gallery: [cabañaValle],
    description:
      'Proyecto ejecutado en steel framing, pensado para lograr una obra rápida, liviana y eficiente en un entorno natural.',
    details: [
      'Estructura liviana',
      'Aislación térmica',
      'Obra eficiente',
      'Diseño adaptado al terreno',
    ],
  },
]

// ─── Services ──────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    badge: 'Steel Framing',
    title: 'Casas llave en mano',
    description:
      'Nos encargamos de todo el proceso, desde el diseño hasta la entrega final. Construimos viviendas personalizadas para que disfrutes una experiencia simple, segura y sin preocupaciones.',
    image: casaArroyitoFrente,
    popular: true,
  },
  {
    id: 2,
    badge: 'Arquitectura',
    title: 'Proyectos personalizados',
    description:
      'Creamos proyectos adaptados a tu terreno, presupuesto y estilo de vida. Diseñamos espacios funcionales y modernos pensados para las necesidades de cada familia.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80',
  },
  {
    id: 3,
    badge: 'Obra & Reformas',
    title: 'Construcción y ampliaciones',
    description:
      'Realizamos obras nuevas, ampliaciones y remodelaciones con soluciones adaptadas a cada proyecto. Combinamos sistemas modernos con experiencia en construcción tradicional.',
    image: 'https://images.unsplash.com/photo-1592581912743-cfb5a3002795?q=80',
  },
]

// ─── Typologies ────────────────────────────────────────────────────────────────
export const TYPOLOGIES = [
  {
    id: '36',
    name: 'Tipología A — Compact',
    area: 36,
    badge: 'Entrada ideal',
    description:
      'Vivienda de inicio ideal para parejas o personas solas. Planta eficiente que maximiza el espacio habitable sin desperdiciar un metro.',
    features: ['1 dormitorio', 'Living comedor', 'Cocina integrada', '1 baño completo', 'Galería opcional', 'Ampliable a futuro'],
    image: casaCompacta,
  },
  {
    id: '42',
    name: 'Tipología B — Family',
    area: 42,
    badge: 'Más elegida',
    description:
      'Vivienda familiar con dos dormitorios y circulaciones amplias. Mayor confort para familias jóvenes en crecimiento sin resignar diseño.',
    features: ['2 dormitorios', 'Living comedor', 'Cocina con office', '1 baño + toilette', 'Galería incluida', 'Doble ventilación'],
    image: casaFamiliar,
  },
]

// ─── Steel Framing Layers ──────────────────────────────────────────────────────
export const SF_LAYERS = [
  { label: 'Revestimiento exterior', detail: 'Placas de cemento / Revoque', highlight: true },
  { label: 'Barrera hidrófuga', detail: 'Control de humedad', highlight: false },
  { label: 'Estructura steel framing', detail: 'Perfiles de acero galvanizado', highlight: true },
  { label: 'Aislación térmica', detail: 'Lana mineral o EPS', highlight: false },
  { label: 'Revestimiento interior', detail: 'Placa de yeso / Pintura', highlight: true },
]

// ─── Contact ───────────────────────────────────────────────────────────────────
export const CONTACT_SERVICES = [
  'Llave en mano',
  'Remodelación',
  'Ampliación',
  'Proyecto personalizado',
]

export const SOCIAL_LINKS = [
  { label: 'Seguinos en Instagram', href: 'https://www.instagram.com/mr.obras.ar/', icon: 'instagram' },
  { label: 'Seguinos en Facebook', href: 'https://www.facebook.com/mrobras.ar/', icon: 'facebook' },
  { label: 'Escribinos en WhatsApp', href: 'https://api.whatsapp.com/send?phone=5493510000000', icon: 'whatsapp' },
]
