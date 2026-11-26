import { Link } from 'react-router-dom'

// 100% Solid Full-Fill Vector Icons (#00CE44) - No background, no borders
function FullCycleIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M4 6h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6v2h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2v-2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm14 7h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z" />
    </svg>
  )
}

function DedicatedTeamsIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  )
}

function StaffAugIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  )
}

export default function DubaiEngagementModels() {
  const models = [
    {
      title: 'Full-Cycle Product Development',
      desc: 'A single team handles the complete build, including discovery, design, engineering, testing, and deployment. Project scope, delivery milestones, and payment terms are established upfront, with clear accountability throughout development.',
      icon: FullCycleIcon,
    },
    {
      title: 'Dedicated Development Teams',
      desc: 'Consistent engineering capacity for products requiring regular releases, new functionality, or long-term technical support. Developers work against an agreed roadmap, with team composition and billing structured around ongoing project requirements.',
      icon: DedicatedTeamsIcon,
    },
    {
      title: 'IT Staff Augmentation',
      desc: "Additional engineering expertise for teams managing an existing application or active development project. Specialists join established workflows and support specific technical requirements without changing the team's delivery structure or increasing permanent headcount.",
      icon: StaffAugIcon,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading: Green Theme Color */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Engagement Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Flexible Engagement Models for{' '}
            <span className="text-[#00CE44]">Mobile Development</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Hiring mobile app developers in Dubai involves more than choosing a technical specialisation. Inceptives Digital offers fixed-scope delivery, dedicated engineering teams, and staff augmentation, with each arrangement defining project responsibilities, resource allocation, and commercial terms.
          </p>
        </div>

        {/* 3 Models Grid: No border, no shadows, no icon background, clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {models.map((m, i) => {
            const Icon = m.icon
            return (
              <div
                key={i}
                className="bg-[#12141a] rounded-[22px] p-7 sm:p-9 border-0 shadow-none flex flex-col justify-between text-left"
              >
                <div>
                  {/* Clean Bare SVG Icon: No background, no container border, no padding */}
                  <div className="mb-6 flex items-center justify-start">
                    <Icon className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center text-sm font-medium text-[#00CE44] hover:underline"
                  >
                    Choose {m.title.split(' ')[0]} Model &rarr;
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
