import { Code2, Building2, Users2 } from 'lucide-react'

export default function AustinIndustryLeader() {
  const metrics = [
    {
      value: '300+',
      label: 'Apps Developed',
      icon: Code2,
    },
    {
      value: '36+',
      label: 'Industries Served',
      icon: Building2,
    },
    {
      value: '98%',
      label: 'Clients Retained',
      icon: Users2,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#07080a] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Heading, Subtext, Metrics & Badges */}
          <div className="lg:col-span-7 text-left flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-6">
                Industry-Leading Mobile App Development Company In{' '}
                <span className="text-[#00CE44]">Austin</span>
              </h2>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal mb-8">
                We are a certified app development company in Austin, also known as "Silicon Hills". Our app development services are not limited to startups; we also serve all SMEs in Downtown Austin, Mueller, the Domain, &amp; South Congress (SoCo). Our mobile developers Austin create future-ready and high-end mobile software solutions that help businesses achieve massive progress over time. We use sleek UI/UX design principles, popular tech stacks, &amp; robust API integrations to create commendable applications that keep users hooked. Due to our extensive experience, ISO 9001 &amp; ISO 27001 certifications, and (ISC)² (CSSLP) certifications, we have earned our reputation in the industry.
              </p>

              {/* 3 Metrics Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {metrics.map((m) => {
                  const Icon = m.icon
                  return (
                    <div
                      key={m.label}
                      className="rounded-[18px] bg-[#12141a] border border-white/5 p-5 flex flex-col justify-between text-left transition-all duration-300 hover:border-[#00CE44]/40"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl sm:text-3xl font-black text-[#00CE44]">
                          {m.value}
                        </span>
                        <div className="shrink-0 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#00CE44]" />
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white/80 leading-tight">
                        {m.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Badges / Certifications */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#14151a] border border-white/10 text-xs font-semibold uppercase tracking-wider text-white/90">
                ISO 9001 Certified
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#14151a] border border-white/10 text-xs font-semibold uppercase tracking-wider text-white/90">
                ISO 27001 Certified
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#14151a] border border-white/10 text-xs font-semibold uppercase tracking-wider text-white/90">
                (ISC)² CSSLP
              </span>
            </div>
          </div>

          {/* Right Column: AI Visual Spanning Equal Height */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="relative w-full h-full min-h-[380px] lg:min-h-full rounded-[24px] overflow-hidden border border-white/10 bg-[#12141a] group shadow-2xl">
              <img
                src="/assets/locations/austin/austin-industry-leader.jpg"
                alt="Austin Mobile App Development Engineering"
                className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
