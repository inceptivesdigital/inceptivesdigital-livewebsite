import { Link } from 'react-router-dom'

export default function PostLaunchWhyChooseUs() {
  const reasons = [
    {
      title: 'Analytics-First Decision Making',
      desc: (
        <>
          Iteration recommendations connect to specific signals in the product's usage data, not gut instinct. Intuition shapes the hypothesis, but analytics determine which ones move forward and which get set aside.
        </>
      ),
    },
    {
      title: 'Cross-Platform Technical Depth',
      desc: (
        <>
          Post-launch issues surface differently on iOS, Android, and the web. The team reads platform-specific behavioral and performance signals fluently, then builds{' '}
          <Link
            to="/custom-software-development"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            custom software development
          </Link>{' '}
          solutions that hold consistently across every environment the product runs in.
        </>
      ),
    },
    {
      title: 'Dedicated Post-Launch Specialists',
      desc: (
        <>
          Each engagement runs with specialists who focus exclusively on post-launch performance rather than cycling between project phases. That sustained depth of attention is what keeps iteration results consistent rather than incidental.
        </>
      ),
    },
    {
      title: 'Category-Specific Performance Benchmarks',
      desc: (
        <>
          A 40% day-seven retention rate means something different for a productivity tool than for a casual game. Performance targets get set against category-specific benchmarks rather than broad averages that obscure what good actually looks like.
        </>
      ),
    },
    {
      title: 'Compounding Improvement Over Time',
      desc: (
        <>
          Short-term fixes produce short-term results. The{' '}
          <Link
            to="/product-rescue-scaling"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            product rescue scaling
          </Link>{' '}
          framework structures each cycle to build directly on the findings of the last, so performance improvements accumulate steadily rather than reset after each phase.
        </>
      ),
    },
    {
      title: 'Transparent Reporting at Every Cycle',
      desc: (
        <>
          Retention rates, conversion movement, error frequency, and feature adoption metrics land in a clear report at the close of each cycle. Every number connects to a defined benchmark, so context is never missing.
        </>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000] relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Why Product Teams Choose{' '}
            <span className="text-[#00CE44]">Inceptives Digital</span> After Launch
          </h2>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-8 sm:p-9 rounded-[20px] bg-[#121212] hover:bg-[#181818] transition-all duration-200 border-0 shadow-none text-left flex flex-col justify-between group"
            >
              <div>
                <div className="mb-6">
                  <img
                    src="/assets/mobile-app/icon01.png"
                    alt="Icon"
                    className="w-[50px] h-[50px] object-contain select-none p-0 bg-transparent border-0"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <div className="text-white/80 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
