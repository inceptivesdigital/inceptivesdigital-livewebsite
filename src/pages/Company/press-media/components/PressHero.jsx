const MEDIA_LOGOS = [
  { src: '/assets/press-release/ap.png', alt: 'Associated Press' },
  { src: '/assets/press-release/trustpilot.png', alt: 'Trustpilot' },
  { src: '/assets/press-release/google.png', alt: 'Google' },
  { src: '/assets/press-release/nyt.png', alt: 'The New York Times' },
  { src: '/assets/press-release/globe.png', alt: 'The Globe and Mail' },
  { src: '/assets/press-release/media6.png', alt: 'Featured Media' },
]

export default function PressHero() {
  return (
    <>
      {/* Top White Hero with Subtle Mint-Green Glow */}
      <section
        className="w-full pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 text-center"
        style={{
          background:
            'radial-gradient(ellipse at 85% 25%, rgba(0, 206, 68, 0.14) 0%, rgba(255, 255, 255, 0) 52%), #ffffff',
        }}
      >
        <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="block text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.22em] text-[#334155] mb-4">
            PRESS RELEASES
          </span>

          <h1 className="text-[38px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.1] tracking-tight text-[#0F172A] mb-5">
            In the <span className="text-[#059648]">News</span>
          </h1>

          <p className="text-[14.5px] sm:text-[16px] text-[#52606D] leading-[1.7] max-w-2xl mx-auto font-normal">
            Official updates covering company milestones, product launches, strategic partnerships, industry recognition, and business developments from Inceptives Digital.
          </p>
        </div>
      </section>

      {/* Dark Navy-Black Featured Media Logo Strip */}
      <div className="w-full bg-[#0F1721] py-7 sm:py-9 overflow-hidden border-y border-white/5">
        <div className="marquee-track flex items-center gap-14 sm:gap-20 lg:gap-24">
          {[...MEDIA_LOGOS, ...MEDIA_LOGOS].map((logo, idx) => (
            <div
              key={`${logo.alt}-${idx}`}
              className="shrink-0 flex items-center justify-center px-2"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                className="h-7 sm:h-8 lg:h-9 w-auto object-contain opacity-95 select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
