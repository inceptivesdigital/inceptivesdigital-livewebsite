import React from 'react'
import { Rocket, Users, Zap, ShieldCheck } from 'lucide-react'

const stats = [
  {
    icon: Rocket,
    value: '70+',
    label: 'Projects Completed',
  },
  {
    icon: Users,
    value: '150+',
    label: 'Active Developers',
  },
  {
    icon: Zap,
    value: '30–40%',
    label: 'Faster Releases',
  },
  {
    icon: ShieldCheck,
    value: '99.9%',
    label: 'Uptime Reliability',
  },
]

export default function EcommerceStatsBar() {
  return (
    <section className="w-full bg-[#1a1a1a] border-y border-white/10 py-10 md:py-12">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  className="w-10 h-10 text-[#00CE44] mb-3"
                  strokeWidth={1.8}
                />
                <div className="text-[#00CE44] text-[30px] sm:text-[36px] md:text-[40px] font-bold leading-none mb-2">
                  {item.value}
                </div>
                <div className="text-white text-[14px] sm:text-[15px] md:text-[16px] font-medium">
                  {item.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
