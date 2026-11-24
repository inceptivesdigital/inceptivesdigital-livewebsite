import { CheckCircle2 } from 'lucide-react'

const tiers = [
  {
    badge: 'Foundation',
    title: 'Learning App MVP',
    cost: '$10K–$40K',
    timeline: '8–14 weeks',
    description:
      'For EdTech startups validating a focused learning product before investing in a larger platform.',
    includes: [
      'Learner registration',
      'Course content access',
      'Basic quizzes',
      'Progress tracking',
      'Simple admin panel',
    ],
  },
  {
    badge: 'Advanced',
    title: 'Custom Learning Platform',
    cost: '$40K–$120K',
    timeline: '14–24 weeks',
    description:
      'For growing education businesses launching multi-role learning platforms with interactive teaching capabilities.',
    includes: [
      'Virtual classrooms',
      'Instructor dashboards',
      'Assignments and grading',
      'Subscription payments',
      'LMS integration',
    ],
  },
  {
    badge: 'Enterprise',
    title: 'Enterprise EdTech Platform',
    cost: '$120K–$250K+',
    timeline: '20–32+ weeks',
    description:
      'For universities and enterprise learning providers requiring advanced functionality across large user populations.',
    includes: [
      'Adaptive learning systems',
      'Advanced learning analytics',
      'Institutional system integrations',
      'Multi-organization management',
      'Scalable cloud architecture',
    ],
  },
]

export default function EducationCostSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#181818] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Education App Development Pricing for{' '}
            <span className="text-[#00CE44]">Every Stage of Growth</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Education app development costs depend on the learning model, platform requirements, and technical complexity. Inceptives Digital offers scope-based estimates to help EdTech businesses plan their investment with clear development expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.badge}
              className="bg-[#242529] border border-white/10 hover:border-[#00CE44]/50 rounded-[18px] p-7 sm:p-9 flex flex-col justify-between text-left transition-colors duration-200"
            >
              <div>
                <span className="text-[#00CE44] text-xs font-semibold uppercase tracking-widest block mb-2">
                  {tier.badge}
                </span>
                <h3 className="text-white text-[22px] sm:text-[24px] font-bold leading-snug mb-3">
                  {tier.title}
                </h3>
                <div className="flex flex-wrap items-baseline gap-3 mb-4 pb-4 border-b border-white/15">
                  <span className="text-[#00CE44] text-[26px] sm:text-[30px] font-extrabold">
                    {tier.cost}
                  </span>
                  <span className="text-white/75 text-[14px] sm:text-[15px] font-medium">
                    · {tier.timeline}
                  </span>
                </div>
                <p className="text-white/85 text-[15px] leading-relaxed mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2.5 text-white/90 text-[14.5px] sm:text-[15px]">
                  {tier.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00CE44] shrink-0 mt-1" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] px-6 py-3.5 rounded-none transition-colors duration-200"
                >
                  Request Custom Estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
