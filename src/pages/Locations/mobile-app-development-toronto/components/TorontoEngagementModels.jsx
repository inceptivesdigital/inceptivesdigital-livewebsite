import { Link } from 'react-router-dom'

// 100% Solid Full-Fill Vector Icons (#00CE44)
function FullCycleIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M4 6h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6v2h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2v-2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm14 7h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z" />
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

export default function TorontoEngagementModels() {
  const models = [
    {
      title: 'Full-Cycle Product Development',
      desc: 'As a complete mobile app development company in Toronto, we manage the entire journey, from discovery and design through development, testing, and launch. Founders and early-stage startups choose this model when they want one accountable team handling the build from start to finish.',
      icon: FullCycleIcon,
    },
    {
      title: 'Dedicated Development Teams',
      desc: 'Dedicated mobile app developers work alongside existing product teams through an agreed delivery structure. Toronto businesses can engage iOS, Android, Flutter, React Native, and backend specialists, with technical leadership, design, and QA support based on project requirements.',
      icon: DedicatedTeamsIcon,
    },
    {
      title: 'IT Staff Augmentation',
      desc: "An existing development team may need specialist support for a release, integration, or product modernization. Staff augmentation adds the required engineering capacity without replacing the team's established tools, workflows, or technical ownership.",
      icon: StaffAugIcon,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Flexible Engagement Models for{' '}
            <span className="text-[#00CE44]">Toronto App Development</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Every project needs a different level of support, so our engagement models for app development in Toronto adapt to how you actually work. Choose{' '}
            <Link
              to="/blog/in-house-development-vs-app-development-partner"
              className="text-[#00CE44] hover:underline font-medium"
            >
              in-house or an app development partner
            </Link>{' '}
            around what your build genuinely needs.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {models.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.title}
                className="p-7 sm:p-9 rounded-[22px] bg-[#14151a] border-0 transition-all duration-300 flex flex-col justify-start text-left shadow-none"
              >
                {/* Solid Full-Fill Icon */}
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
