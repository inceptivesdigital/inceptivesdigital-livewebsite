export default function ClientMarquee({
  heading = 'Trusted By High-Growth Startups & Global Enterprises',
} = {}) {
  // Exact 6 core partner logos in the live website order
  const logos = [
    {
      name: 'Associated Press',
      src: '/assets/marquee/ap.png',
      className: 'max-h-[38px] sm:max-h-[44px] lg:max-h-[50px]'
    },
    {
      name: 'Trustpilot',
      src: '/assets/marquee/trustpilot.png',
      className: 'max-h-[38px] sm:max-h-[44px] lg:max-h-[50px]'
    },
    {
      name: 'Google',
      src: '/assets/marquee/google.png',
      className: 'max-h-[40px] sm:max-h-[46px] lg:max-h-[52px]'
    },
    {
      name: 'The New York Times',
      src: '/assets/marquee/nyt.png',
      className: 'max-h-[34px] sm:max-h-[38px] lg:max-h-[44px]'
    },
    {
      name: 'The Globe and Mail',
      src: '/assets/marquee/globeandmail.png',
      className: 'max-h-[32px] sm:max-h-[36px] lg:max-h-[42px]'
    },
    {
      name: 'USA Today',
      src: '/assets/marquee/usatoday.png',
      className: 'max-h-[40px] sm:max-h-[46px] lg:max-h-[52px]'
    }
  ]

  // Create repeated arrays for a smooth seamless infinite loop on any screen width
  const logoSet = [...logos, ...logos]

  return (
    <section className="py-14 sm:py-18 lg:py-20 border-y border-white/[0.08] bg-[#151515] relative overflow-hidden">
      {/* Title */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] mb-10 sm:mb-14 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
          {heading}
        </h2>
      </div>

      {/* Marquee Ticker Track with Left/Right Soft Fade Gradients matching #151515 */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-r from-[#151515] via-[#151515]/90 to-transparent z-10 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-l from-[#151515] via-[#151515]/90 to-transparent z-10 pointer-events-none" />

        {/* The Continuous Moving Track */}
        <div className="marquee-track flex items-center">
          {/* First Group of 12 (6 x 2) */}
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 shrink-0 pr-6 sm:pr-8 lg:pr-10">
            {logoSet.map((logo, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="w-[180px] sm:w-[220px] md:w-[250px] lg:w-[270px] xl:w-[280px] 2xl:w-[290px] h-[75px] sm:h-[85px] lg:h-[96px] shrink-0 flex items-center justify-center p-3 sm:p-4"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`w-auto max-w-[88%] object-contain select-none pointer-events-none ${logo.className}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Exact Duplicate Second Group for Seamless Infinite Reset */}
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 shrink-0 pr-6 sm:pr-8 lg:pr-10" aria-hidden="true">
            {logoSet.map((logo, idx) => (
              <div
                key={`logo-2-${idx}`}
                className="w-[180px] sm:w-[220px] md:w-[250px] lg:w-[270px] xl:w-[280px] 2xl:w-[290px] h-[75px] sm:h-[85px] lg:h-[96px] shrink-0 flex items-center justify-center p-3 sm:p-4"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`w-auto max-w-[88%] object-contain select-none pointer-events-none ${logo.className}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
