import { Link } from 'react-router-dom'
import { Shield, MapPin, TrendingUp, Eye } from 'lucide-react'

export default function AustinWhyChooseUs() {
  const pillars = [
    {
      title: 'Texas-Based Engineering Depth',
      desc: 'Headquartered in Texas and operating across the Austin market. Domain knowledge applied to your industry before a line of code is written, not learned during your project.',
      icon: MapPin,
    },
    {
      title: 'Compliance-Driven Architecture',
      desc: 'TDPSA, HIPAA, SOC 2, and PCI-DSS are foundational requirements, not checklists. Built into the architecture before development begins and verified before submission.',
      icon: Shield,
    },
    {
      title: 'Architected to Scale Without a Rebuild',
      desc: (
        <>
          A minimum{' '}
          <Link
            to="/mvp-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            viable product (MVP)
          </Link>{' '}
          that cannot grow is expensive technical debt. Every product is architected for the traffic spikes, user expansion, and data demands that come with scaling in the Texas market.
        </>
      ),
      icon: TrendingUp,
    },
    {
      title: 'Visibility Instead of Surprises',
      desc: 'Agile two-week sprints with a working, testable build delivered at every milestone. You see what is being built every step of the way, not just at the end.',
      icon: Eye,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            What Sets Us Apart in Austin's{' '}
            <span className="text-[#00CE44]">Mobile App Development Landscape</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            From early-stage mobile products to enterprise applications serving the Texas market, Inceptives Digital brings practical engineering experience to projects with different technical demands. These are the decisions that make the difference.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="rounded-[20px] bg-[#12141a] border border-white/5 p-7 sm:p-9 text-left transition-all duration-300 hover:border-[#00CE44]/40"
              >
                {/* Clean Solid Full-fill Icon (Zero bg, zero border, zero padding) */}
                <div className="mb-6 flex items-center justify-start">
                  <Icon className="w-9 h-9 shrink-0 text-[#00CE44]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
