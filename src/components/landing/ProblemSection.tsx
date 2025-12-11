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
    <section className="py-24 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-navy-800/50 rounded-2xl p-6 border border-red-500/10 hover:border-gold-500/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors">
                  <span className="text-red-400 group-hover:text-gold-500 transition-colors">
                    ?
                  </span>
                </div>
                <p className="text-navy-200 group-hover:text-white transition-colors">
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
