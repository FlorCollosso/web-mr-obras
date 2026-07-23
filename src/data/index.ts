import casaArroyitoCocina02 from '../assets/images/donpablo-mixta-cocina-02.jpeg'
import casaArroyitoCocina01 from '../assets/images/donpablo-mixta-cocina-01.jpeg'
import casaArroyitobano01 from '../assets/images/donpablo-mixta-bano-01.jpeg'
import casaArroyitocomedor01 from '../assets/images/donpablo-mixta-comedor-01.jpeg'
import casaArroyitopatio01 from '../assets/images/donpablo-mixta-patio-01.jpeg'
import casaArroyitopatio02 from '../assets/images/donpablo-mixta-patio-02.jpeg'
import casaArroyitoFrente from '../assets/images/donpablo-mixta-frente.jpeg'
import casaValle01 from '../assets/images/casa-valle-01.jpeg'
import casaValle02 from '../assets/images/casa-valle-02.jpg'
import casaValle04 from '../assets/images/casa-valle-04.jpeg'
import casaValle05 from '../assets/images/casa-valle-05.jpg'
import casaCompacta from '../assets/images/casa-compacta.png'
import casaFamiliar from '../assets/images/casa-familiar.png'
import vestidorLaFrancia01 from '../assets/images/vestidor-la-francia-01.png'
import vestidorLaFrancia02 from '../assets/images/vestidor-la-francia-02.jpeg'
import vestidorLaFrancia03 from '../assets/images/vestidor-la-francia-03.jpeg'
import vestidorLaFrancia04 from '../assets/images/vestidor-la-francia-04.jpeg'
import vestidorLaFrancia05 from '../assets/images/vestidor-la-francia-05.jpeg'
import reformaArmarioLaFrancia01 from '../assets/images/reforma-armario-la-francia-01.jpeg'
import reformaArmarioLaFrancia02 from '../assets/images/reforma-armario-la-francia-02.jpg'
import reformaArmarioLaFrancia03 from '../assets/images/reforma-armario-la-francia-03.jpg'
import reformaArmarioLaFrancia04 from '../assets/images/reforma-armario-la-francia-04.jpg'
import reformaRecibidorElTio01 from '../assets/images/reforma-recibidor-el-tio-01.jpeg'
import reformaRecibidorElTio02 from '../assets/images/reforma-recibidor-el-tio-02.jpeg'
import reformaRecibidorElTio03 from '../assets/images/reforma-recibidor-el-tio-03.jpeg'
import reformaRecibidorElTio04 from '../assets/images/reforma-recibidor-el-tio-04.jpeg'
import reformaRecibidorElTio05 from '../assets/images/reforma-recibidor-el-tio-05.jpeg'
import divisionOficinaElTio01 from '../assets/images/division-oficina-el-tio-01.jpg'
import divisionOficinaElTio02 from '../assets/images/division-oficina-el-tio-02.jpg'
import divisionOficinaElTio03 from '../assets/images/division-oficina-el-tio-03.jpg'
import divisionOficinaElTio04 from '../assets/images/division-oficina-el-tio-04.jpg'

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
    subtitle: 'Construcción tradicional - 180 m²',
    image: casaArroyitoCocina02,
    featured: true,
  },
  {
    id: 2,
    slug: 'cabana-valle-hermoso',
    title: 'Cabaña - Valle Hermoso',
    subtitle: 'Steel Framing - 60 m²',
    image: casaValle01,
  },
  {
    id: 3,
    slug: 'casa-familiar-el-tio',
    title: 'Casa Familiar - El Tío',
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
    image: vestidorLaFrancia01,
  },
]

// ─── Projects Page ──────────────────────────────────────────────────────────────────
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    slug: 'casa-familiar-arroyito',
    title: 'Casa Familiar - Arroyito',
    category: 'Viviendas',
    system: 'Construcción tradicional',
    area: '180 m²',
    location: 'Arroyito, Cba.',
    year: '2025',
    cover: casaArroyitoFrente,
    gallery: [casaArroyitoFrente, casaArroyitoCocina01, casaArroyitoCocina02, casaArroyitobano01, casaArroyitocomedor01, casaArroyitopatio01, casaArroyitopatio02],
    description:
      'Vivienda familiar construida de manera tradicional, combinando soluciones en seco para optimizar tiempos, terminaciones y funcionalidad.',
    details: [
      'Diseño personalizado',
      'Concepto abierto y funcional',
      'Terminaciones en piedra y cemento alisado',
      'Detalles en Steel Framing',
    ],
  },
  {
    id: 2,
    slug: 'cabana-valle-hermoso',
    title: 'Cabaña - Valle Hermoso',
    category: 'Steel framing',
    system: 'Steel framing',
    area: '60 m²',
    location: 'Valle Hermoso, Cba.',
    year: '2026',
    cover: casaValle01,
    gallery: [casaValle01, casaValle02, casaValle04, casaValle05],
    description:
      'Proyecto ejecutado en steel framing, pensado para lograr una obra rápida, liviana y eficiente en un entorno natural. Vivienda autosustentable, abastecida de energía solar y eólica, con termo solar incluído.',
    details: [
      'Vivenda autosustentable',
      'Aislación térmica y acústica',
      'Detalles en piedra natural',
      'Diseño adaptado al terreno',
    ],
  },
  {
    id: 3,
    slug: 'vestidor-la-francia',
    title: 'Vestidor - La Francia',
    category: 'Steel framing',
    system: 'Steel framing',
    area: '3 m²',
    location: 'La Francia, Cba.',
    year: '2026',
    cover: vestidorLaFrancia01,
    gallery: [vestidorLaFrancia02, vestidorLaFrancia03, vestidorLaFrancia04, vestidorLaFrancia05],
    description:
      'Vestidor ejecutado en steel framing, pensado para lograr una obra rápida, liviana y eficiente. Diseño adaptado a las necesidades del cliente, con terminaciones de alta calidad y funcionalidad.',
    details: [
      'Diseño moderno y funcional',
      'Terminaciones de alta calidad',
      'Obra rápida y eficiente',
      'Adaptado a las necesidades del cliente',
    ],
  },
  {
    id: 4,
    slug: 'reforma-armario-la-francia',
    title: 'Armario - La Francia',
    category: 'Reformas',
    system: 'Steel framing',
    area: '4,40 x 2,60 x 0,50 m',
    location: 'La Francia, Cba.',
    year: '2024',
    cover: reformaArmarioLaFrancia01,
    gallery: [reformaArmarioLaFrancia01, reformaArmarioLaFrancia02, reformaArmarioLaFrancia03, reformaArmarioLaFrancia04],
    description:
      'Reforma de armario ejecutada en steel framing, pensada para lograr una obra rápida, liviana y eficiente. Diseño adaptado a las necesidades del cliente, con terminaciones de alta calidad y funcionalidad.',
    details: [
      'Diseño moderno y funcional',
      'Terminaciones de alta calidad',
      'Obra rápida y eficiente',
      'Adaptado a las necesidades del cliente',
    ],
  },
  {
    id: 5,
    slug: 'reforma-recibidor-el-tio',
    title: 'Recibidor - El Tío',
    category: 'Reformas',
    system: 'Steel framing',
    area: '2,60 x 2,00 x 1,20 m',
    location: 'El Tío, Cba.',
    year: '2024',
    cover: reformaRecibidorElTio05,
    gallery: [reformaRecibidorElTio01, reformaRecibidorElTio02, reformaRecibidorElTio03, reformaRecibidorElTio04],
    description:
      'Reforma de recibidor ejecutada en steel framing, pensada para lograr una obra rápida, liviana y eficiente. Diseño adaptado a las necesidades del cliente, con terminaciones de alta calidad y funcionalidad.',
    details: [
      'Diseño moderno y funcional',
      'Terminaciones de alta calidad',
      'Obra rápida y eficiente',
      'Adaptado a las necesidades del cliente',
    ],
  },
  {
    id: 6,
    slug: 'division-oficina-el-tio',
    title: 'División de Oficina - El Tío',
    category: 'Reformas',
    system: 'Steel framing',
    area: '3,00 x 2,00 x 2,80 m',
    location: 'El Tío, Cba.',
    year: '2024',
    cover: divisionOficinaElTio01,
    gallery: [divisionOficinaElTio01, divisionOficinaElTio02, divisionOficinaElTio03, divisionOficinaElTio04],
    description:
      'División de oficina ejecutada en steel framing, pensada para lograr una obra rápida, liviana y eficiente. Diseño adaptado a las necesidades del cliente, con terminaciones de alta calidad y funcionalidad.',
    details: [
      'Diseño moderno y funcional',
      'Terminaciones de alta calidad',
      'Obra rápida y eficiente',
      'Adaptado a las necesidades del cliente',
    ],
  }
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
    name: 'Tipología A — Compacta',
    area: 36,
    badge: 'Entrada ideal',
    description:
      'Vivienda de inicio ideal para parejas o personas solas. Planta eficiente que maximiza el espacio habitable sin desperdiciar un metro.',
    features: ['1 dormitorio', 'Living comedor', 'Cocina integrada', '1 baño completo', 'Galería opcional', 'Ampliable a futuro'],
    image: casaCompacta,
  },
  {
    id: '42',
    name: 'Tipología B — Familiar',
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
