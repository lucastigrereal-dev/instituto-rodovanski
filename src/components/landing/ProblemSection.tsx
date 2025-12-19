import { LucideIcon } from 'lucide-react'

interface Problem {
  text: string
  icon?: LucideIcon
}

interface ProblemSectionProps {
  title: string
  subtitle?: string
  problems: Problem[]
}

export default function ProblemSection({
  title,
  subtitle,
  problems,
}: ProblemSectionProps) {
  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(27, 42, 78, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9faace' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 transition-all group"
              style={{ 
                backgroundColor: 'rgba(36, 52, 105, 0.5)', 
                border: '1px solid rgba(249, 168, 212, 0.1)' 
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ backgroundColor: 'rgba(249, 168, 212, 0.1)' }}
                >
                  <span style={{ color: '#F9A8D4' }}>
                    ?
                  </span>
                </div>
                <p className="transition-colors group-hover:text-white" style={{ color: '#c5cce0' }}>
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
