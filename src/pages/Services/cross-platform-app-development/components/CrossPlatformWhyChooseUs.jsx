export default function CrossPlatformWhyChooseUs() {
  const pillars = [
    {
      title: 'End-to-End In-House Delivery',
      desc: 'Strategy, multi-platform design, framework engineering, QA, and store deployment are handled entirely in-house by one team, maintaining a consistent engineering standard across every stage of every cross-platform engagement.',
    },
    {
      title: 'Framework Selection Driven by Product',
      desc: (
        <>
          Flutter and React Native are deployed strictly where the product demands it. UI complexity, performance thresholds, native API requirements, and long-term maintainability determine which framework anchors the engagement. Understanding{' '}
          <a
            href="https://inceptivesdigital.com/blog/why-choose-flutter"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            why choose Flutter
          </a>{' '}
          versus React Native depends on those product-level priorities.
        </>
      ),
    },
    {
      title: 'Full Transparency at Every Sprint',
      desc: 'Two-week sprints close with a working build shared across both target platforms. Every architectural decision and milestone is fully documented and visible throughout the lifecycle, eliminating post-sprint surprises.',
    },
    {
      title: 'Native-Grade Performance',
      desc: (
        <>
          Engineering cross-platform products to perform at native-grade execution is a baseline architectural requirement. Rendering pipelines, asynchronous data processing, and native platform channels are optimized from day one through disciplined{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-performance-optimization"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            mobile app performance optimization
          </a>
          .
        </>
      ),
    },
    {
      title: 'Security and Compliance First',
      desc: 'Apple App Store, Google Play, OWASP Mobile, HIPAA, PCI-DSS, and GDPR requirements are integrated directly at the structural stage, ensuring data protection is never retrofitted at submission.',
    },
    {
      title: 'Proven Record Built on Consistency',
      desc: 'A 4.7 Clutch rating earned across startups, SMBs, and high-growth businesses operating in competitive global markets. Every cross-platform product delivered here is built to hold its performance standard on both platforms through every OS release cycle post-launch.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] text-center">
            The Advantage of Working with a{' '}
            <span className="text-[#00CE44]">Precision Cross-Platform Studio</span>
          </h2>
        </div>

        {/* 6 Cards Grid matching WhyChooseUs.jsx */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src="/assets/mobile-app/icon01.png"
                alt={p.title}
                className="w-9 h-9 object-contain mb-4 select-none p-0 border-0 bg-transparent"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
