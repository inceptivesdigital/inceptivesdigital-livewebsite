import React from 'react'
import { SolidIcon } from './StartupSolidIcons'

const stats = [
  { icon: 'rocket', value: '70+', label: 'Startups Launched' },
  { icon: 'award', value: '8+', label: 'Years Experience' },
  { icon: 'check', value: '100%', label: 'Client Success Rate' },
  { icon: 'shield', value: 'SOC 2 & GDPR', label: 'Compliant' },
]

export default function StartupStatsBar() {
  return (
    <section className="w-full bg-[#1a1a1a] border-y border-white/10 py-10 md:py-12">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center"
            >
              <SolidIcon
                name={item.icon}
                className="w-11 h-11 text-[#00CE44] mb-3"
              />
              <div className="text-[19px] font-bold text-[#00CE44] leading-[1.32] mb-2">
                {item.value}
              </div>
              <div className="text-white text-[14px] sm:text-[15px] font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
