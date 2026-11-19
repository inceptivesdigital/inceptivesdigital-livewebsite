import { ShieldCheck, RefreshCw, Layers } from 'lucide-react'

export default function AustinEngineeringExpertise() {
  const cards = [
    {
      title: 'Technical Accountability',
      desc: 'Clear engineering responsibilities and documented decisions throughout development.',
      icon: ShieldCheck,
    },
    {
      title: 'Product Continuity',
      desc: 'Development practices that support future enhancements without disrupting existing functionality.',
      icon: RefreshCw,
    },
    {
      title: 'Integration Readiness',
      desc: 'Existing APIs, data dependencies, and system limitations assessed before implementation.',
      icon: Layers,
    },
  ]

  const awards = [
    {
      src: '/assets/awards-images/award-clutch-austin.png',
      alt: 'Clutch Top App Development Company Plano 2026',
    },
    {
      src: '/assets/awards-images/award-top-developers.png',
      alt: 'SoftwareWorld Top Trending 2026',
    },
    {
      src: '/assets/awards-images/award-clutch-gaming.png',
      alt: 'Top iPhone App Development Company, USA 2026',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading, Subtext, Badges */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
              Custom Mobile App Development in{' '}
              <span className="text-[#00CE44]">Austin</span> With Clear Project Accountability
            </h2>

            <p className="text-white/80 text-base sm:text-[17px] leading-relaxed mb-8 font-normal">
              Custom mobile application development in Austin requires more than a functional interface. Inceptives Digital reviews software dependencies, integration requirements, and long-term maintenance needs before engineering begins. Whether a business is launching a new product or seeking mobile app modernization services, identifying technical limitations early helps prevent costly redevelopment, protect existing workflows, and prepare the application for future updates and expansion.
            </p>

            {/* Award Badges */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-3">
              {awards.map((a) => (
                <div key={a.alt} className="transition-transform duration-200 hover:scale-105">
                  <img
                    src={a.src}
                    alt={a.alt}
                    className="h-20 sm:h-24 w-auto object-contain select-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Strategic Pillar Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {cards.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.title}
                  className="rounded-[20px] bg-[#14151a] border border-white/5 p-6 sm:p-7 text-left transition-all duration-300 hover:border-[#00CE44]/40"
                >
                  <div className="flex items-start gap-4">
                    {/* Clean Solid Full-fill Icon (Zero bg, zero border, zero padding) */}
                    <div className="shrink-0 mt-1 flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {c.title}
                      </h3>
                      <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
