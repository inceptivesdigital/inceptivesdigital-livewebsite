import { Link } from 'react-router-dom'

// 100% Solid Full-Fill Vector Icons (#00CE44)
function FixedScopeIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  )
}

function DedicatedTeamsIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  )
}

function StaffAugIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  )
}

function DiscoveryIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  )
}

function RescueIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
    </svg>
  )
}

export default function LondonEngagementModels() {
  const models = [
    {
      title: 'Fixed-Scope Development',
      desc: (
        <>
          A defined project with agreed deliverables, pricing, and payment milestones. Suitable for{' '}
          <Link to="/mvp-development" className="text-[#00CE44] hover:underline font-medium">
            MVP development
          </Link>{' '}
          and mobile applications with established requirements, where scope changes follow a documented approval process.
        </>
      ),
      icon: FixedScopeIcon,
    },
    {
      title: 'Dedicated Development Teams',
      desc: 'Reserved engineering capacity for ongoing product development. Team composition, responsibilities, and billing terms are agreed upfront, giving businesses continuity across releases, integrations, and future enhancements.',
      icon: DedicatedTeamsIcon,
    },
    {
      title: 'IT Staff Augmentation',
      desc: (
        <>
          Additional engineering expertise, a common option in the{' '}
          <Link
            to="/blog/in-house-development-vs-app-development-partner"
            className="text-[#00CE44] hover:underline font-medium"
          >
            in-house vs development partner
          </Link>{' '}
          decision, without expanding permanent headcount. Specialists join existing workflows, follow established development practices, and support delivery when internal teams face capacity or technical gaps.
        </>
      ),
      icon: StaffAugIcon,
    },
    {
      title: 'Technical Discovery Engagement',
      desc: 'A focused engagement to assess product requirements, technical dependencies, and delivery risks. The outcome establishes a recommended architecture, prioritised scope, and planning estimates before full development begins.',
      icon: DiscoveryIcon,
    },
    {
      title: 'App Rescue & Modernisation',
      desc: (
        <>
          <Link
            to="/product-rescue-scaling"
            className="text-[#00CE44] hover:underline font-medium"
          >
            Product rescue scaling
          </Link>{' '}
          suits unfinished builds or applications struggling with technical limitations. An initial assessment identifies code quality, unresolved dependencies, and critical issues before defining the scope of recovery or modernisation.
        </>
      ),
      icon: RescueIcon,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Flexible Mobile App Development{' '}
            <span className="text-[#00CE44]">Engagement Models in London</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Hiring mobile app developers in London does not always mean commissioning a new build. Inceptives Digital offers fixed-scope projects, dedicated development capacity, and specialist support for existing teams. Engagement terms establish deliverables, availability, reporting, and responsibilities before work starts.
          </p>
        </div>

        {/* 5 Cards Grid (3 Top + 2 Bottom Centered) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {models.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.title}
                className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] p-7 sm:p-9 rounded-[22px] bg-[#14151a] border-0 transition-all duration-300 flex flex-col justify-start text-left shadow-none"
              >
                <div className="mb-6 flex items-center justify-start">
                  <Icon className="w-10 h-10 shrink-0" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {m.title}
                </h3>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed font-normal">
                  {m.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
