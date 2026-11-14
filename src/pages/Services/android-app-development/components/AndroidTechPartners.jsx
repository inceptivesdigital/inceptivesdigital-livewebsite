export default function AndroidTechPartners() {
  const partners = [
    {
      name: 'Android',
      src: '/assets/mobile-app/tech/android-sdk.svg',
      darkCard: false,
    },
    {
      name: 'Kotlin',
      src: '/assets/mobile-app/tech/kotlin.svg',
      darkCard: false,
    },
    {
      name: 'Jetpack Compose',
      src: '/assets/mobile-app/tech/jetpack-compose.svg',
      darkCard: false,
    },
    {
      name: 'Firebase',
      src: '/assets/ios-app/firebasedlogo2.png',
      darkCard: true,
    },
    {
      name: 'AWS',
      src: '/assets/ios-app/awsas-icon.png',
      darkCard: true,
    },
    {
      name: 'Stripe',
      src: '/assets/ios-app/strip-png.png',
      darkCard: true,
    },
    {
      name: 'Google Cloud',
      src: '/assets/ios-app/googlecloud-img.png',
      darkCard: true,
    },
    {
      name: 'OpenAI',
      src: '/assets/ios-app/aws_partnership_logo_7ad34e2ac8asd.png',
      darkCard: true,
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2.5">
            Built on Proven Android Technologies
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Tech Partners Supporting</span>{' '}
            Our Android Expertise
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Building Android applications within the technology ecosystems modern products depend on. Cloud infrastructure, APIs, databases, analytics, and third-party integrations are selected around the product’s architecture, performance requirements, and long-term roadmap.
          </p>
        </div>

        {/* 8 Partner Logos Grid (4x2 on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="p-6 rounded-[16px] bg-[#222222] border border-white/10 hover:border-[#00CE44] flex flex-col items-center justify-center text-center h-32 sm:h-36 transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="h-12 sm:h-14 flex items-center justify-center mb-3">
                <img
                  src={p.src}
                  alt={p.name}
                  className="max-h-11 sm:max-h-12 max-w-[135px] w-auto h-auto object-contain select-none"
                  loading="lazy"
                />
              </div>
              <span className="text-white text-xs sm:text-sm font-bold leading-tight">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
