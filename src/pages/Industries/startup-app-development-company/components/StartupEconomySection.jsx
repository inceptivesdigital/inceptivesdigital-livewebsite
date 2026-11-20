import React from 'react'
import { SolidIcon } from './StartupSolidIcons'

const pillars = [
  {
    icon: 'zap',
    title: 'First-Mover Advantage Compounds',
    description:
      'The startup that ships first in an underserved category builds data, brand recognition, and user retention mechanics that make it progressively harder for competitors to catch up. Speed to market is not just a launch advantage. It is a structural one.',
  },
  {
    icon: 'trending',
    title: 'Investor Readiness Requires a Working Product',
    description:
      'Ideas attract interest. Working products attract investment. An MVP built on scalable architecture is not just a product validation tool. It is a fundraising asset that demonstrates technical credibility, market demand, and founder execution capability simultaneously.',
  },
  {
    icon: 'layers',
    title: 'Architecture Decisions Made Early Determine Costs Made Later',
    description:
      'A startup that builds on the right technical foundation scales without expensive rebuilds at every growth stage. One that cuts corners on architecture pays for it in re-platforming costs, lost engineering time, and missed market windows when the product cannot keep up with demand.',
  },
  {
    icon: 'globe',
    title: 'Digital Distribution Is the Most Efficient Go-to-Market Available',
    description:
      'A well-built application reaches users globally from day one without the distribution costs of physical products or traditional enterprise software. The marginal cost of serving an additional user on a well-architected digital product approaches zero as scale increases.',
  },
]

export default function StartupEconomySection() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Become Part of the Multi-Trillion-Dollar{' '}
            <span className="text-[#00CE44]">Startup App Economy</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            The founders who move from idea to deployed product fastest do not just win early customers. They build advantages that compound over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="bg-[#1b1c21] rounded-[18px] p-7 sm:p-9 text-left transition-colors duration-200 hover:bg-[#22242a]"
            >
              <SolidIcon
                name={item.icon}
                className="w-9 h-9 text-[#00CE44] mb-5"
              />
              <h3 className="text-[#00CE44] text-[20px] sm:text-[22px] font-bold leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-white/80 text-[15px] leading-[1.7] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
