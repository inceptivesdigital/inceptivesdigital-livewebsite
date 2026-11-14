// =========================================================================
// SEO & LINK CONFIGURATION
// You can edit each link below. Change rel: 'nofollow' to rel: 'follow'
// at any time to make any link dofollow.
// =========================================================================
export const heroTrustBadges = [
  {
    name: 'Clutch',
    url: 'https://clutch.co/profile/inceptives-digital',
    rel: 'nofollow', // Options: 'nofollow' | 'follow'
    src: '/assets/clutch.png',
    alt: 'Clutch Review Badge',
  },
  {
    name: 'Bark',
    url: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
    rel: 'nofollow', // Options: 'nofollow' | 'follow'
    src: '/assets/bark.png',
    alt: 'Bark Review Badge',
  },
  {
    name: 'Trustpilot',
    url: 'https://www.trustpilot.com/review/inceptivesdigital.com',
    rel: 'nofollow', // Options: 'nofollow' | 'follow'
    src: '/assets/trustpilot.png',
    alt: 'Trustpilot Review Badge',
  },
]

// Helper function to resolve the rel attribute based on configuration
export const getRelAttribute = (relType) => {
  if (relType === 'follow' || relType === 'dofollow') {
    return 'noopener noreferrer'
  }
  return 'nofollow noopener noreferrer'
}

export default function Hero() {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 overflow-visible">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative overflow-visible">
        
        {/* =========================================================================
            MOBILE LAYOUT (< lg): Centered Text -> Buttons -> Video -> Trust Logos
            Matches media_1794551862896_6e85a884.jpg
            ========================================================================= */}
        <div className="block lg:hidden">
          {/* Centered Heading */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white text-center tracking-tight leading-[1.25] max-w-xl mx-auto">
            Engineering AI-Powered Digital Systems for Scalable Businesses
          </h1>

          {/* Centered Subtitle */}
          <p className="mt-3.5 sm:mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed text-center max-w-lg mx-auto font-normal">
            From strategy to launch, we create custom apps for iOS, Android, and beyond — using Flutter, React Native, and native tech stacks.
          </p>

          {/* Centered Dual Action Buttons */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
            <a
              href="#schedule"
              className="inline-flex items-center justify-center px-6 py-3 rounded-none bg-[#00CE44] hover:bg-[#00b53c] text-black font-semibold text-sm transition-colors active:scale-95 shadow-none"
            >
              Get A Call Now!
            </a>

            <a
              href="#schedule"
              className="inline-flex items-center justify-center px-6 py-3 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-semibold text-sm transition-colors active:scale-95 shadow-none"
            >
              Schedule A Call
            </a>
          </div>

          {/* Video Container (Below Buttons) */}
          <div className="mt-8 w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c0d10] border border-white/10 shadow-2xl relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/hero-banner-full.jpg"
              className="w-full h-[260px] sm:h-[360px] object-cover object-center"
            >
              <source src="/assets/comp-bannerhero.mp4" type="video/mp4" />
              <img
                src="/assets/hero-banner-full.jpg"
                alt="App Screens"
                className="w-full h-full object-cover object-center"
              />
            </video>
          </div>

          {/* Trust Badges (Below Video, Original Images with nofollow) */}
          <div className="mt-7 flex items-center justify-center gap-5 sm:gap-8 flex-wrap">
            {heroTrustBadges.map((badge) => (
              <a
                key={`mobile-${badge.name}`}
                href={badge.url}
                target="_blank"
                rel={getRelAttribute(badge.rel)}
                className="inline-block transition-opacity hover:opacity-80"
              >
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* =========================================================================
            DESKTOP LAYOUT (>= lg): Slanted Green Shape Over Video
            Matches media_1794551841117_085608b0.jpg
            ========================================================================= */}
        <div className="hidden lg:flex relative min-h-[600px] xl:min-h-[640px] items-center overflow-visible">
          
          {/* Background Video Container */}
          <div className="w-full h-[580px] xl:h-[620px] rounded-[36px] lg:rounded-[44px] overflow-hidden bg-[#0c0d10] border border-white/10 shadow-2xl relative z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/hero-banner-full.jpg"
              className="w-full h-full object-cover object-right"
            >
              <source src="/assets/comp-bannerhero.mp4" type="video/mp4" />
              <img
                src="/assets/hero-banner-full.jpg"
                alt="App Screens"
                className="w-full h-full object-cover object-right"
              />
            </video>

            {/* Dark gradient overlay on the video side */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Slanted Green Shape & Managed Content */}
          <div className="absolute -top-5 -bottom-5 -left-4 lg:-top-6 lg:-bottom-6 lg:-left-5 w-[58%] xl:w-[54%] 2xl:w-[50%] z-20 flex flex-col justify-between p-10 lg:p-12 xl:p-14 select-none">
            {/* The Slanted Green Background Shape */}
            <img
              src="/assets/green-banner-shape.png"
              alt="Green Banner Shape"
              className="absolute inset-0 w-full h-full object-fill pointer-events-none -z-10 drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
            />

            {/* Content Top Zone */}
            <div className="w-full max-w-[62%]">
              <h1 className="text-[32px] xl:text-[38px] 2xl:text-[42px] font-black tracking-tight text-black leading-[1.25] break-words">
                Engineering AI-Powered Digital Systems for Scalable Businesses
              </h1>

              <p className="mt-4 xl:mt-5 text-black/90 text-[14px] xl:text-[15px] leading-relaxed font-medium">
                Inceptives Digital helps businesses define, design, and build mobile apps, digital products, and AI-powered systems through product strategy, user-focused design, and senior engineering.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 xl:mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-none bg-black hover:bg-[#1a1a1a] text-white font-medium text-sm tracking-tight transition-all active:scale-95 shadow-none"
                >
                  Get A Call Now!
                </a>

                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-none border-2 border-black hover:bg-black/10 text-black font-medium text-sm tracking-tight transition-all active:scale-95 shadow-none"
                >
                  Schedule A Call
                </a>
              </div>
            </div>

            {/* Desktop Trust Badges (Inside Green Shape, with configurable nofollow) */}
            <div className="pt-6 border-black/15 flex items-center gap-6 lg:gap-8 max-w-[92%]">
              {heroTrustBadges.map((badge) => (
                <div key={`desktop-${badge.name}`} className="flex flex-col justify-center">
                  <a
                    href={badge.url}
                    target="_blank"
                    rel={getRelAttribute(badge.rel)}
                    className="inline-block transition-opacity hover:opacity-80"
                  >
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      className="h-10 lg:h-12 w-auto max-w-[140px] lg:max-w-[160px] object-contain brightness-0"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
