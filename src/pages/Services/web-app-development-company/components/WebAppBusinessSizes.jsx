import { useState } from 'react'
import { ArrowDown } from 'lucide-react'

function EnterpriseIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M3 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v10h-5v-4h-2v4H3zm4-14v2h2V7H7zm4 0v2h2V7h-2zm-4 4v2h2v-2H7zm4 0v2h2v-2h-2zm-4 4v2h2v-2H7zm8-4v2h2v-2h-2z" />
    </svg>
  )
}

function SmbIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M4 3h16l1.5 5.5A3.5 3.5 0 0 1 18 12a3.48 3.48 0 0 1-3-1.7A3.48 3.48 0 0 1 12 12a3.48 3.48 0 0 1-3-1.7A3.48 3.48 0 0 1 6 12a3.5 3.5 0 0 1-3.5-3.5L4 3zm1 11h14v7H5v-7zm5 2v5h4v-5h-4z" />
    </svg>
  )
}

function StartupIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M13.13 22.19l-1.63-3.83c1.57-.58 3.04-1.36 4.4-2.27l-2.77 6.1zM5.64 12.5l-3.83-1.63 6.1-2.77c-.91 1.36-1.69 2.83-2.27 4.4zM21.61 2.39S16.66.269 11 5.93c-2.19 2.19-3.5 4.6-4.35 6.71-.28.75-.09 1.57.46 2.13l2.13 2.12c.55.56 1.37.74 2.12.46 2.11-.85 4.52-2.16 6.71-4.35 5.67-5.67 3.54-10.61 3.54-10.61zm-7.07 7.07a2 2 0 1 1 2.83-2.83 2 2 0 0 1-2.83 2.83zM5.21 15.96l2.83 2.83c-1.56 1.56-4.24 1.41-4.24 1.41s-.15-2.68 1.41-4.24z" />
    </svg>
  )
}

const BUSINESS_SIZES = [
  {
    id: 'enterprise',
    title: 'Enterprise Web Application Development',
    Icon: EnterpriseIcon,
    desc: 'Managing multiple departments and legacy systems requires more than another standalone application. Our enterprise web app developers build connected platforms with role-based access, complex API integrations, and scalable backend architecture to support business-critical operations.',
  },
  {
    id: 'smb',
    title: 'Small and Medium-Sized Businesses',
    Icon: SmbIcon,
    desc: "Disconnected software shouldn't dictate how your business operates. Get a custom web application that brings essential workflows into one platform, connects existing business tools, and gives your team more control over daily operations.",
  },
  {
    id: 'startup',
    title: 'MVP Web App Development for Startups',
    Icon: StartupIcon,
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

        {/* 3 Interactive Cards */}
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
                <div className="mb-5 flex items-center justify-center bg-transparent border-0 p-0">
                  <Icon className="w-10 h-10" />
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
