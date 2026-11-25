import { useState } from 'react'
import { Building2, Store, Rocket, ArrowDown } from 'lucide-react'

const BUSINESS_SIZES = [
  {
    id: 'enterprise',
    title: 'Enterprise Web Application Development',
    Icon: Building2,
    desc: 'Managing multiple departments and legacy systems requires more than another standalone application. Our enterprise web app developers build connected platforms with role-based access, complex API integrations, and scalable backend architecture to support business-critical operations.',
  },
  {
    id: 'smb',
    title: 'Small and Medium-Sized Businesses',
    Icon: Store,
    desc: "Disconnected software shouldn't dictate how your business operates. Get a custom web application that brings essential workflows into one platform, connects existing business tools, and gives your team more control over daily operations.",
  },
  {
    id: 'startup',
    title: 'MVP Web App Development for Startups',
    Icon: Rocket,
    desc: 'Have a product to validate before committing to a full-scale build? Our MVP web app development focuses on the functionality needed for your first release, using React, Next.js, and Node.js to establish a foundation for future development.',
  },
]

export default function WebAppBusinessSizes() {
  const [activeId, setActiveId] = useState('enterprise')
  const current = BUSINESS_SIZES.find((item) => item.id === activeId) || BUSINESS_SIZES[0]

  return (
    <section className="py-16 sm:py-24 bg-[#0d0e11] text-white border-b border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Web App Development for{' '}
            <span className="text-[#00CE44]">Startups, SMBs, and Enterprises</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-3xl mx-auto">
            Whether you&apos;re launching a new product or replacing business-critical software, the development approach needs to fit your operation. Inceptives Digital builds custom web applications around your workflows, existing systems, and plans for growth.
          </p>
        </div>

        {/* 3 Interactive Cards matching Reference Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {BUSINESS_SIZES.map((item) => {
            const isActive = item.id === activeId
            const Icon = item.Icon
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`group rounded-[18px] p-8 sm:p-9 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-[#181f1a] border-[#00CE44]'
                    : 'bg-[#18191d] border-white/10 hover:border-[#00CE44]/50'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                    isActive
                      ? 'bg-[#00CE44] text-black'
                      : 'bg-[#00CE44]/10 text-[#00CE44] group-hover:bg-[#00CE44]/20'
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                  {item.title}
                </h3>
                <div
                  className={`transition-all duration-300 ${
                    isActive ? 'opacity-100 translate-y-0 text-[#00CE44]' : 'opacity-30 -translate-y-1 text-white/50'
                  }`}
                >
                  <ArrowDown className="w-5 h-5" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Highlighted Description Box Below */}
        <div className="rounded-[16px] bg-[#181f1a] border border-[#00CE44]/35 px-6 sm:px-10 py-7 sm:py-8 text-center max-w-5xl mx-auto">
          <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.75] font-normal">
            {current.desc}
          </p>
        </div>
      </div>
    </section>
  )
}
