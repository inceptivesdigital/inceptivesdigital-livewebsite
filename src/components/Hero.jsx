import { useState, useEffect } from 'react'

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
    width: 120,
    height: 44,
  },
  {
    name: 'Bark',
    url: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
    rel: 'nofollow', // Options: 'nofollow' | 'follow'
    src: '/assets/bark.png',
    alt: 'Bark Review Badge',
    width: 120,
    height: 44,
  },
  {
    name: 'Trustpilot',
    url: 'https://www.trustpilot.com/review/inceptivesdigital.com',
    rel: 'nofollow', // Options: 'nofollow' | 'follow'
    src: '/assets/trustpilot.png',
    alt: 'Trustpilot Review Badge',
    width: 120,
    height: 44,
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
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  )
  const [loadVideo, setLoadVideo] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => setIsDesktop(mq.matches)
    sync()
    mq.addEventListener?.('change', sync)
    return () => mq.removeEventListener?.('change', sync)
  }, [])

  // Load the 6.1 MB hero MP4 on first user interaction (scroll/touch/pointer/key)
  // so Mobile & Desktop LCP paints instantly from the 100 KB poster with 0 MB video bloat.
  useEffect(() => {
    let cancelled = false
    const start = () => {
      if (!cancelled) setLoadVideo(true)
    }
    const events = ['pointerdown', 'scroll', 'touchstart', 'keydown', 'wheel']
    events.forEach((evt) =>
      window.addEventListener(evt, start, { once: true, passive: true })
    )
    return () => {
      cancelled = true
      events.forEach((evt) => window.removeEventListener(evt, start))
    }
  }, [])

  return (
    <section className="pt-20 sm:pt-24 lg:pt-32 pb-10 lg:pb-12 overflow-visible">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative overflow-visible">
        {!isDesktop ? (
          /* =========================================================================
              MOBILE LAYOUT (< lg): Centered Text -> Buttons -> Video -> Trust Logos
              ========================================================================= */
          <div className="block lg:hidden">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white text-center tracking-tight leading-[1.25] max-w-xl mx-auto">
              Engineering AI-Powered Digital Products for Scalable Businesses
            </h1>

            <p className="mt-3.5 sm:mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed text-center max-w-lg mx-auto font-normal">
              Inceptives Digital helps businesses define, design, and build mobile apps, digital products, and AI-powered systems through product strategy, user-focused design, and senior engineering.
            </p>

            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex flex-wrap justify-center items-center gap-3">
                <a
                  href="#contact"
                  className="getintouch inline-flex items-center justify-center min-w-[165px] h-[46px] px-6 py-3 rounded-none border border-[#00CE44] bg-[#00CE44] hover:bg-[#00b53c] text-black font-semibold text-sm transition-colors active:scale-95 shadow-none"
                >
                  Start My Product Roadmap
                </a>

                <a
                  href="#contact"
                  className="openpop-shedule inline-flex items-center justify-center min-w-[165px] h-[46px] px-6 py-3 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-semibold text-sm transition-colors active:scale-95 shadow-none"
                >
                  Schedule A Call
                </a>
              </div>
            </div>

            <div className="mt-7 w-full h-[240px] sm:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c0d10] border border-white/10 shadow-2xl relative">
              <img
                src="/assets/hero-banner-mobile.jpg"
                alt="Inceptives Digital App Showcase"
                width={768}
                height={382}
                fetchPriority="high"
                decoding="sync"
                className="w-[188%] max-w-none h-full object-cover object-right -ml-[88%]"
              />
              {loadVideo && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/assets/hero-banner-mobile.jpg"
                  className="absolute inset-0 w-full h-full object-cover object-right"
                >
                  <source src="/assets/comp-bannerhero.mp4" type="video/mp4" />
                </video>
              )}
            </div>

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
                    width={badge.width}
                    height={badge.height}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        ) : (
          /* =========================================================================
              DESKTOP LAYOUT (>= lg): Slanted Green Shape Over Video
              ========================================================================= */
          <div className="hidden lg:flex relative min-h-[540px] xl:min-h-[600px] 2xl:min-h-[640px] items-center overflow-visible">
            {/* Background Poster + Deferred Video Container */}
            <div className="w-full h-[520px] xl:h-[580px] 2xl:h-[620px] rounded-[36px] lg:rounded-[44px] overflow-hidden bg-[#0c0d10] border border-white/10 shadow-2xl relative z-0">
              <img
                src="/assets/hero-banner-full.jpg"
                alt="Inceptives Digital App Showcase"
                width={1600}
                height={900}
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-cover object-right"
              />
              {loadVideo && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/assets/hero-banner-full.jpg"
                  className="absolute inset-0 w-full h-full object-cover object-right"
                >
                  <source src="/assets/comp-bannerhero.mp4" type="video/mp4" />
                </video>
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Slanted Green Shape & Managed Content */}
            <div className="absolute -top-5 -bottom-5 left-0 lg:-top-6 lg:-bottom-6 w-[60%] xl:w-[58%] 2xl:w-[45%] z-20 flex flex-col justify-between p-8 lg:p-10 xl:p-11 select-none">
              <img
                src="/assets/green-banner-shape.png"
                alt=""
                aria-hidden="true"
                width={900}
                height={660}
                fetchPriority="high"
                decoding="sync"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none -z-10 drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
              />

              {/* Content Top Zone — constrained to 62% width so heading never crosses the top slanted edge */}
              <div className="w-full">
                <div className="w-full max-w-[62%] xl:max-w-[61%] 2xl:max-w-[64%]">
                  <h1 className="text-[24px] lg:text-[28px] xl:text-[31px] 2xl:text-[38px] font-black tracking-tight text-black leading-[1.18] break-words">
                    Engineering AI-Powered Digital Products for Scalable Businesses
                  </h1>

                  <p className="mt-3.5 xl:mt-4 text-black/90 text-[13px] xl:text-[14px] 2xl:text-[15.5px] leading-relaxed font-medium">
                    Inceptives Digital helps businesses define, design, and build mobile apps, digital products, and AI-powered systems through product strategy, user-focused design, and senior engineering.
                  </p>
                </div>

                <div className="mt-5 xl:mt-6 flex flex-col items-start gap-2 max-w-[78%]">
                  <div className="flex flex-wrap items-center gap-2.5 xl:gap-3">
                    <a
                      href="#contact"
                      className="getintouch inline-flex items-center justify-center px-5 xl:px-6 py-3 rounded-none border-2 border-black bg-black hover:bg-[#1a1a1a] text-white font-medium text-[13px] xl:text-sm tracking-tight transition-all active:scale-95 shadow-none whitespace-nowrap"
                    >
                      Start My Product Roadmap
                    </a>

                    <a
                      href="#contact"
                      className="openpop-shedule inline-flex items-center justify-center px-5 xl:px-6 py-3 rounded-none border-2 border-black bg-transparent hover:bg-black/10 text-black font-medium text-[13px] xl:text-sm tracking-tight transition-all active:scale-95 shadow-none whitespace-nowrap"
                    >
                      Schedule A Call
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop Trust Badges */}
              <div className="pt-4 border-black/15 flex items-center gap-5 lg:gap-7 max-w-[90%]">
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
                        width={badge.width}
                        height={badge.height}
                        className="h-9 lg:h-10 xl:h-11 w-auto max-w-[120px] xl:max-w-[145px] object-contain brightness-0"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
