import { useEffect, useRef } from 'react'

export default function CompanyHero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }, [])

  const stats = [
    { value: '70+', label: 'Apps Shipped' },
    { value: '7', label: 'Locations' },
    { value: '150+', label: 'Developers' },
    { value: '7+', label: 'Years in Industry' },
  ]

  const partners = [
    {
      name: 'Microsoft',
      logo: (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="10" height="10" fill="#F25022" />
            <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
            <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
            <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
          </svg>
          <span className="text-white font-semibold text-sm sm:text-base tracking-tight font-sans">
            Microsoft
          </span>
        </div>
      ),
    },
    {
      name: 'Azure',
      logo: (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.4 2.5L1.5 18.2C1.1 19.3 1.9 20.5 3.1 20.5H11.8C12.4 20.5 13 20.2 13.3 19.6L15.6 15.5H8.7L12.5 5.5L7.4 2.5Z" fill="#0078D4"/>
            <path d="M12.9 5.8L7.8 19.2C7.5 20 8.1 20.8 9 20.8H19.7C20.6 20.8 21.2 20.1 21.4 19.3L23.4 9.8C23.6 8.7 22.7 7.8 21.6 8.1L12.9 5.8Z" fill="#50E6FF"/>
            <path d="M12.9 5.8L16.2 15.4H8.7L12.9 5.8Z" fill="#005BA1"/>
          </svg>
          <span className="text-white font-semibold text-sm sm:text-base tracking-tight font-sans">
            Azure
          </span>
        </div>
      ),
    },
    {
      name: 'AWS',
      logo: (
        <img
          src="/assets/ios-app/awsas-icon.png"
          alt="AWS"
          className="h-5 sm:h-6 w-auto object-contain select-none"
          loading="eager"
        />
      ),
    },
    {
      name: 'Stripe',
      logo: (
        <img
          src="/assets/ios-app/strip-png.png"
          alt="Stripe"
          className="h-5 sm:h-6 w-auto object-contain select-none"
          loading="eager"
        />
      ),
    },
  ]

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-32 sm:pt-40 pb-20 bg-black overflow-hidden">
      {/* Background Video with Ambient Muted Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/about-us/image13.png"
          className="w-full h-full object-cover opacity-30 scale-105"
        >
          <source src="/assets/comp-bannerhero.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-black" />
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-4xl text-left">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black text-white tracking-tight leading-[1.08] mb-6">
            Building Digital Products with a{' '}
            <span className="text-[#00CE44]">Futuristic Approach</span>
          </h1>

          {/* Subtext from DOCX */}
          <p className="text-white/85 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-10">
            Inceptives Digital is a digital product studio that combines strategy, design, engineering, and AI to solve real business problems today, while building with an eye on where technology is heading. A product should not just launch well. It should keep working as tools, platforms, and expectations change around it.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base tracking-tight transition-all border-0 shadow-none"
            >
              Talk to Our Team
            </a>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
            {stats.map((st, i) => (
              <div key={i} className="text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00CE44] tracking-tight leading-none mb-1.5">
                  {st.value}
                </div>
                <div className="text-white/80 text-xs sm:text-sm font-medium tracking-tight">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          {/* Partnered With Section with Original Brand Logos */}
          <div className="mt-10 pt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <span className="text-white/50 text-xs sm:text-sm font-bold uppercase tracking-wider shrink-0">
              Partnered With:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {partners.map((p, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00CE44]/40 transition-all duration-300 flex items-center justify-center group cursor-pointer shadow-sm hover:scale-105"
                  title={`Official Partner: ${p.name}`}
                >
                  {p.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
