interface SectionHeaderProps {
  badge: string
  title: React.ReactNode
  description?: React.ReactNode
  theme?: 'dark' | 'light'
  className?: string
  descriptionClassName?: string
  as?: 'h1' | 'h2'
  badgePosition?: 'right' | 'top'
}

export default function SectionHeader({
  badge,
  title,
  description,
  theme = 'dark',
  className = '',
  descriptionClassName = '',
  as = 'h2',
  badgePosition = 'right',
}: SectionHeaderProps) {
  const isDark = theme === 'dark'
  const HeadingTag = as
  const isBadgeTop = badgePosition === 'top'

  return (
    <div
      className={`
        mb-10
        ${
          isBadgeTop
            ? 'flex flex-col items-start'
            : 'flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6'
        }
        ${className}
      `}
    >
      {isBadgeTop && (
        <span
          className={`section-badge mb-5 ${
            isDark
              ? 'bg-white/20 text-primary-300'
              : 'bg-primary-500 text-white shadow-primary-500/30'
          }`}
        >
          {badge}
        </span>
      )}

      <div className="flex-1">
        <HeadingTag
          className={`text-4xl md:text-4xl lg:text-5xl font-black leading-none ${
            isDark ? 'text-primary-200' : 'text-primary-800'
          }`}
        >
          {title}
        </HeadingTag>

        <div className="w-16 h-[5px] rounded-full bg-primary-500 mt-6" />

        {description && (
          <p
            className={`mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed ${
              !isDark ? 'text-primary-900/70' : ''
            } ${descriptionClassName}`}
          >
            {description}
          </p>
        )}
      </div>

      {!isBadgeTop && (
        <span
          className={`section-badge shrink-0 sm:ml-8 lg:ml-16 ${
            isDark
              ? 'bg-white/20 text-primary-300'
              : 'bg-primary-500 text-white shadow-primary-500/30'
          }`}
        >
          {badge}
        </span>
      )}
    </div>
  )
}