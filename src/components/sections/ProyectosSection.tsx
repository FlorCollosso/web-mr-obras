import { useInView } from '../../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'
import { PROJECTS } from '../../data'
import { Link } from 'react-router-dom'

function ProjectCard({
  project,
  className = '',
}: {
  project: typeof PROJECTS[0]
  className?: string
}) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className={`relative rounded-[20px] overflow-hidden group block ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-dark-alt/90" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-xl font-bold text-white leading-tight">
          {project.title}
        </p>
        <p className="text-sm text-primary-300 mt-1">
          {project.subtitle}
        </p>
      </div>
    </Link>
  )
}

export default function ProyectosSection() {
  const { ref, inView } = useInView()

  const [featured, ...rest] = PROJECTS

  return (
    <section
      id="proyectos"
      className="relative py-24 lg:py-36 overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #e6f9f7 0%, #b1ece5 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio"
          theme="light"
          title={
            <>
              Estos son algunos de nuestros{' '}
              <span className="text-primary-500">proyectos realizados</span>
            </>
          }
        />

        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Featured card spans 2 rows */}
          <ProjectCard
            project={featured}
            className="md:row-span-2 h-64 md:h-auto min-h-[420px]"
          />
          {/* Right 2×2 */}
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} className="h-48 md:h-auto min-h-[200px]" />
          ))}
        </div>

        {/* Footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/portfolio" className="btn-secondary shrink-0 text-xl">
            Ver todos los proyectos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
