import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PORTFOLIO_PROJECTS } from '../data'

const categories = ['Todos', 'Viviendas', 'Steel framing', 'Reformas']

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects =
    activeCategory === 'Todos'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-dark-alt">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-3xl" />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <span className="section-badge">Portfolio</span>

          <h1 className="mt-8 max-w-4xl text-5xl md:text-6xl font-black leading-[1.05] text-white">
            Proyectos construidos con{' '}
            <span className="text-primary-500">criterio, detalle y calidad</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            Conocé algunas obras realizadas por MR Obras: viviendas, ampliaciones
            y proyectos en construcción tradicional, steel framing y sistemas mixtos.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                activeCategory === category
                  ? 'bg-primary-500 text-dark shadow-lg shadow-primary-500/20'
                  : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.slug}`}
              className="group glass-card overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90" />

                <span className="absolute top-4 left-4 rounded-full bg-primary-600 text-primary-100 text-xs font-bold px-3 py-1">
                  {project.category}
                </span>

                <div className="absolute bottom-5 left-5 right-5">
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-primary-300">
                    {project.system} · {project.area}
                  </p>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between">
                <p className="text-sm text-white/60">{project.location}</p>
                <span className="text-primary-400 font-bold text-sm">
                  Ver proyecto →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}