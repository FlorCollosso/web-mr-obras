interface SectionHeaderProps {
  badge: string
  title: React.ReactNode
  theme?: 'dark' | 'light'
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  theme = 'dark',
  className = '',
}: SectionHeaderProps) {
  const isDark = theme === 'dark'

  return (
    <div className={`flex items-start justify-between mb-10 ${className}`}>
      <div className="flex-1">
        <h2
          className={`text-4xl md:text-4xl lg:text-5xl font-black leading-none leading-[1.2] ${
            isDark ? 'text-primary-200' : 'text-primary-800'
          }`}
        >
          {title}
        </h2>

        <div
          className={`w-16 h-[5px] rounded-full bg-primary-500 mt-6`}
        />
      </div>

      <span
        className={`shrink-0 ml-6 backdrop-blur-lg text-[18px] font-semibold text-lg rounded-full px-5 py-1.5 mt-2 shadow-badge ${
          isDark
            ? 'bg-white/30 text-primary-300'
            : 'bg-primary-500 text-white shadow-primary-500/30'
        }`}
      >
        {badge}
      </span>
    </div>
  )
}