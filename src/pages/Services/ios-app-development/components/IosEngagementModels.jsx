export default function IosEngagementModels() {
  const models = [
    {
      title: 'Fixed-Scope iOS Development',
      price: '$15,000 – $60,000+ per project',
      bestFor: 'Best for defined products and MVPs',
      intro:
        'Get a complete custom iOS application developed against an agreed scope, with project costs and delivery milestones established upfront.',
      bullets: [
        'Native iPhone and iPad development under an approved project scope',
        'UI/UX, development, QA, and deployment managed end to end',
        'Defined project timeline and commercial estimate',
        'Compliance audits and App Store submission support included',
      ],
      cta: 'Get a Project Estimate',
    },
    {
      title: 'Agile iOS Development',
      price: '$12,000 – $30,000+ per month',
      bestFor: 'Best for evolving product requirements',
      intro:
        'Build your app through Agile iOS development services, with two-week sprints that allow feature adjustments as the iPhone application takes shape.',
      bullets: [
        'Development delivered through structured Agile sprints',
        'Working builds shared throughout the engagement with TestFlight',
        'Features can be reprioritized between sprint cycles',
        'Transparent progress, reviews, and delivery reporting',
      ],
      cta: 'Start an Agile Build',
    },
    {
      title: 'Dedicated iOS Product Team',
      price: '$20,000 – $45,000+ per month',
      bestFor: 'Best for long-term product development',
      intro:
        'Hire dedicated iOS developers with Swift and SwiftUI expertise for ongoing product releases under a consistent engineering team.',
      bullets: [
        'Swift engineers assigned to your iOS product',
        'UI/UX and QA resources based on project requirements',
        'Direct access to Git repositories and development progress',
        'Ongoing engineering support across scheduled releases',
      ],
      cta: 'Build My iOS Team',
    },
    {
      title: 'iOS Team Extension',
      price: '$5,000 – $15,000+ per month',
      bestFor: 'Best for strengthening an existing engineering team',
      intro:
        'Bring experienced iPhone app developers into your existing workflow for native feature development or specialized Apple integrations.',
      bullets: [
        'SwiftUI specialists working alongside your internal developers',
        'UIKit maintenance for existing iPhone applications',
        'Apple SDK integrations within your current codebase',
        'Collaboration through your existing Git and CI/CD workflows',
      ],
      cta: 'Extend My Team',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Hire iOS App Developers with an{' '}
            <span className="text-[#00CE44]">Engagement Model That Fits Your Project</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Need a complete iPhone app development company or additional Swift engineers for an existing product? We offer flexible iOS development engagements based on your project scope and internal team capacity. Compare the options below before requesting a quote.
          </p>
        </div>

        {/* 4 Engagement Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {models.map((m) => (
            <div
              key={m.title}
              className="p-8 sm:p-9 rounded-[20px] bg-[#242424] text-left flex flex-col justify-between border-0 shadow-none"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#00CE44] pb-4 mb-4 border-b border-white/20">
                  {m.title}
                </h3>

                <div className="pb-4 mb-4 border-b border-white/20">
                  <div className="text-lg sm:text-xl font-bold text-white mb-1">
                    {m.price}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#00CE44]">
                    {m.bestFor}
                  </div>
                </div>

                <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed mb-5">
                  {m.intro}
                </p>

                <ul className="space-y-2.5 text-white/90 text-xs sm:text-sm leading-relaxed mb-7">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-xs sm:text-sm transition-colors border-0"
                >
                  {m.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
