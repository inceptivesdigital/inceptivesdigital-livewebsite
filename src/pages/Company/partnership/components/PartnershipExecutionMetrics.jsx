export default function PartnershipExecutionMetrics() {
  const metrics = [
    {
      value: '8+ Years',
      subtitle: 'Product Engineering Experience',
      desc: 'Sustained delivery across startups, scale-ups, and enterprise product teams.',
      icon: '/assets/partnership/vector.svg',
    },
    {
      value: '70+ Products',
      subtitle: 'Digital Products Delivered',
      desc: 'Mobile, web, and backend systems built across multiple industries and use cases.',
      icon: '/assets/partnership/vector2.png',
    },
    {
      value: '20+ Industries',
      subtitle: 'Domain Coverage',
      desc: 'Experience spanning fintech, healthcare, SaaS, logistics, and enterprise platforms.',
      icon: '/assets/partnership/vector3.svg',
    },
    {
      value: 'Partner-Led Delivery',
      subtitle: 'Co-Build and White-Label Execution',
      desc: 'Engineering delivery integrated into agency, consultancy, and technology partner workflows.',
      icon: '/assets/partnership/vector4.svg',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading - Centered Green */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#00CE44] tracking-tight leading-none">
            Execution Over Promises
          </h2>
        </div>

        {/* 4 Horizontal Cards in 1 Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="group p-5 sm:p-6 rounded-[20px] bg-[#141414] border border-white/10 hover:border-[#00CE44] flex items-start gap-4 text-left transition-all duration-300 cursor-pointer"
            >
              {/* Equal Sized Icon Container: strictly 48x48px with 44x44px icon */}
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center p-0 border-0 bg-transparent">
                <img
                  src={m.icon}
                  alt={m.value}
                  className="w-11 h-11 max-w-[44px] max-h-[44px] object-contain select-none p-0 border-0 bg-transparent block"
                  loading="lazy"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00CE44] tracking-tight leading-snug mb-1 transition-colors duration-300">
                  {m.value}
                </h3>
                <p className="text-white/75 text-xs sm:text-[13px] leading-relaxed font-normal">
                  <span className="font-semibold text-white/90">{m.subtitle}</span>{' '}
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
