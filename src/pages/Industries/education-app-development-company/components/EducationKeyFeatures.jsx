import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function EducationKeyFeatures() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      name: 'Basic Features',
      items: [
        'User registration & role-based access',
        'Course creation & management',
        'Interactive quizzes & assignments',
        'Progress tracking & basic analytics',
        'Push notifications & reminders',
        'Offline access',
      ],
    },
    {
      name: 'Advanced Features',
      items: [
        'AI-powered adaptive learning paths',
        'Gamification (badges, leaderboards, rewards)',
        'Virtual classrooms with live video & collaboration tools',
        'AR/VR simulations',
        'Blockchain-based certification',
        'Social learning (peer-to-peer interaction, discussion forums)',
        'Smart assessment engines',
        'LMS, HR, and content library integrations',
      ],
    },
  ]

  const current = tabs[activeTab]

  return (
    <section
      className="py-20 lg:py-28 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/healthcare/health-banner.webp')`,
      }}
    >
      <div className="absolute inset-0 bg-black/45 pointer-events-none" aria-hidden="true" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            Key Features Built Into Our{' '}
            <span className="text-[#00CE44]">Educational App Development Solutions</span>
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal max-w-3xl mx-auto">
            Our educational app development solutions come packed with essential and advanced features designed around real learner needs, institutional requirements, and long-term platform growth.
          </p>
        </div>

        {/* Single-Line 2-Tab Bar */}
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={tab.name}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-3.5 rounded-none text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer border-0 ${
                  isActive
                    ? 'bg-[#00CE44] text-black font-semibold'
                    : 'bg-[#1b1d1c]/90 text-white hover:bg-[#2a2d2b]'
                }`}
              >
                {tab.name}
              </button>
            )
          })}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {current.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-black/75 hover:bg-black/90 rounded-[16px] p-6 border border-[#00CE44]/60 hover:border-[#00CE44] hover:shadow-[0_0_15px_rgba(0,206,68,0.3)] transition-all duration-200 flex items-start gap-3.5 text-left"
            >
              <CheckCircle2 className="w-5 h-5 text-[#00CE44] shrink-0 mt-0.5" />
              <span className="text-white font-medium text-sm sm:text-[15px] leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
