import { Check, Calendar, Users, Clock } from 'lucide-react'

export default function AustinEngagementModels() {
  const models = [
    {
      title: 'Fixed-Price Development',
      badge: 'Defined Scope',
      icon: Calendar,
      features: [
        'Agreed project cost based on a defined scope.',
        'Documented deliverables and payment milestones.',
        'Formal approval for changes outside the original agreement.',
      ],
      bestFor: 'Clearly scoped MVPs and applications.',
    },
    {
      title: 'Dedicated Development Team',
      badge: 'Ongoing Capacity',
      icon: Users,
      features: [
        'Reserved engineering capacity for ongoing development.',
        'Resource allocation based on agreed team requirements.',
        'Recurring engagement with a defined billing structure.',
      ],
      bestFor: 'Long-term development and product expansion.',
      featured: true,
    },
    {
      title: 'Time & Materials Development',
      badge: 'Flexible Scope',
      icon: Clock,
      features: [
        'Billing based on actual hours and agreed rates.',
        'Scope adjustments without fixing every requirement upfront.',
        'Regular reporting on effort and budget consumption.',
      ],
      bestFor: 'Evolving requirements and complex projects.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Mobile App Services That Fit{' '}
            <span className="text-[#00CE44]">Your Team and Roadmap</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Choose a development arrangement that matches your project's scope, budget, and level of uncertainty. Inceptives Digital offers three engagement models, each with a different approach to pricing, resource allocation, and changes during development.
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {models.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.title}
                className={`p-8 rounded-2xl bg-[#12141a] border text-left flex flex-col justify-between transition-colors ${
                  m.featured ? 'border-[#00CE44]/50' : 'border-white/10 hover:border-[#00CE44]/40'
                }`}
              >
                <div>
                  <div className="mb-6 flex items-center justify-start text-[#00CE44]">
                    {/* Clean Solid Full-fill Icon (Zero bg, zero border, zero padding) */}
                    <Icon className="w-9 h-9 shrink-0 text-[#00CE44]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    {m.title}
                  </h3>

                  <ul className="space-y-4 mb-8">
                    {m.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-white/80">
                        <Check className="w-5 h-5 text-[#00CE44] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs uppercase font-semibold tracking-wider text-white/50 mb-1">
                    Best For:
                  </p>
                  <p className="text-sm font-semibold text-white/95">
                    {m.bestFor}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
