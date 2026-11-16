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
    { value: '7', label: 'Global Locations' },
    { value: '150+', label: 'Developers' },
    { value: '7+', label: 'Years in Industry' },
  ]

  const partners = [
    {
      name: 'Microsoft',
      badge: (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="10" height="10" fill="#F25022" />
            <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
            <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
            <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
          </svg>
          <span className="text-white font-bold text-sm sm:text-base tracking-tight font-sans">
            Microsoft
          </span>
        </div>
      ),
    },
    {
      name: 'Azure',
      badge: (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.4 2.5L1.5 18.2C1.1 19.3 1.9 20.5 3.1 20.5H11.8C12.4 20.5 13 20.2 13.3 19.6L15.6 15.5H8.7L12.5 5.5L7.4 2.5Z" fill="#0078D4"/>
            <path d="M12.9 5.8L7.8 19.2C7.5 20 8.1 20.8 9 20.8H19.7C20.6 20.8 21.2 20.1 21.4 19.3L23.4 9.8C23.6 8.7 22.7 7.8 21.6 8.1L12.9 5.8Z" fill="#50E6FF"/>
            <path d="M12.9 5.8L16.2 15.4H8.7L12.9 5.8Z" fill="#005BA1"/>
          </svg>
          <span className="text-white font-bold text-sm sm:text-base tracking-tight font-sans">
            Azure
          </span>
        </div>
      ),
    },
    {
      name: 'AWS',
      badge: (
        <div className="flex items-center gap-2">
          <svg className="h-5 sm:h-6 w-auto shrink-0" viewBox="0 0 65 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* White 'aws' letters */}
            <path d="M11.2 15.5C10.2 15.5 9.4 15.1 8.9 14.5C8.4 13.9 8.1 13.1 8.1 12.1C8.1 11.0 8.4 10.2 8.9 9.6C9.5 9.0 10.3 8.6 11.3 8.6C11.9 8.6 12.5 8.8 13.0 9.0C13.4 9.3 13.8 9.7 14.0 10.2V8.8H16.0V15.3H14.1V13.9C13.9 14.4 13.5 14.8 13.0 15.1C12.5 15.3 11.9 15.5 11.2 15.5ZM11.7 13.8C12.2 13.8 12.7 13.6 13.1 13.2C13.5 12.8 13.7 12.2 13.7 11.6C13.7 10.9 13.5 10.4 13.1 10.0C12.7 9.6 12.2 9.4 11.7 9.4C11.1 9.4 10.7 9.6 10.3 10.0C9.9 10.4 9.7 10.9 9.7 11.6C9.7 12.2 9.9 12.8 10.3 13.2C10.7 13.6 11.1 13.8 11.7 13.8Z" fill="#FFFFFF"/>
            <path d="M22.0 15.3L19.5 8.8H21.6L23.0 13.2L24.5 8.8H26.5L28.0 13.2L29.4 8.8H31.5L29.0 15.3H27.1L25.5 10.9L23.9 15.3H22.0Z" fill="#FFFFFF"/>
            <path d="M37.5 15.5C36.4 15.5 35.5 15.2 34.9 14.7C34.3 14.2 34.0 13.5 34.0 12.7H35.9C35.9 13.1 36.2 13.5 36.5 13.7C36.9 13.9 37.3 14.1 37.7 14.1C38.1 14.1 38.5 14.0 38.8 13.8C39.0 13.7 39.2 13.4 39.2 13.1C39.2 12.8 39.0 12.6 38.7 12.4C38.5 12.3 38.0 12.2 37.4 12.0L36.4 11.8C35.4 11.6 34.8 11.3 34.4 10.9C33.9 10.4 33.7 9.8 33.7 9.1C33.7 8.2 34.0 7.6 34.7 7.1C35.3 6.6 36.1 6.4 37.1 6.4C38.0 6.4 38.8 6.6 39.4 7.1C40.0 7.5 40.4 8.1 40.4 8.8H38.5C38.5 8.5 38.3 8.2 38.0 8.0C37.7 7.8 37.3 7.7 36.9 7.7C36.5 7.7 36.2 7.8 35.9 8.0C35.7 8.1 35.6 8.4 35.6 8.7C35.6 8.9 35.7 9.2 36.0 9.3C36.3 9.5 36.7 9.6 37.2 9.7L38.3 10.0C39.3 10.2 40.1 10.5 40.5 11.0C41.0 11.5 41.2 12.1 41.2 12.8C41.2 13.7 40.8 14.3 40.1 14.8C39.4 15.3 38.6 15.5 37.5 15.5Z" fill="#FFFFFF"/>
            {/* Iconic AWS Orange Smile Arrow */}
            <path d="M41.8 18.5C37.2 20.7 30.2 21.6 23.3 21.4C16.1 21.2 9.6 19.2 5.5 16.2C5.1 15.9 5.4 15.6 5.8 15.7C10.0 18.3 16.2 20.0 23.3 20.2C29.4 20.3 36.2 19.3 40.7 17.2C41.2 16.9 42.1 17.7 41.8 18.5Z" fill="#FF9900"/>
            <path d="M43.0 17.1C42.6 16.5 40.3 15.7 39.1 15.9C38.8 15.9 38.8 15.6 39.1 15.5C41.0 14.7 43.8 15.0 44.1 15.4C44.4 15.9 43.6 18.7 41.9 20.2C41.7 20.4 41.4 20.2 41.6 19.9C42.1 19.0 43.4 17.6 43.0 17.1Z" fill="#FF9900"/>
          </svg>
          <span className="text-white font-bold text-sm sm:text-base tracking-tight font-sans">
            AWS
          </span>
        </div>
      ),
    },
    {
      name: 'Stripe',
      badge: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="5" fill="#635BFF"/>
            <path d="M14.976 10.65c-1.629-.605-2.517-1.07-2.517-1.807 0-.623.512-.979 1.426-.979 1.67 0 3.386.644 4.568 1.223l.668-4.12C18.189 4.356 16.273 4 13.75 4 9.634 4 6.758 6.26 6.758 9.747c0 4.395 5.669 4.315 5.669 6.658 0 .734-.633 1.091-1.695 1.091-1.671 0-3.833-.784-5.139-1.623l-.711 4.254c1.497.854 3.908 1.478 6.552 1.478 4.423 0 7.405-2.186 7.405-5.889 0-4.57-5.669-4.439-5.669-6.658-.001-.004-.001-.009-.001-.009z" fill="#FFFFFF"/>
          </svg>
          <span className="text-white font-bold text-sm sm:text-base tracking-tight font-sans">
            Stripe
          </span>
        </div>
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
          {/* Breadcrumb Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-none bg-white/5 border border-white/10 text-[#00CE44] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00CE44] animate-pulse" />
            About Inceptives Digital
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black text-white tracking-tight leading-[1.08] mb-6">
            Building Digital Products with a{' '}
            <span className="text-[#00CE44]">Futuristic Approach</span>
          </h1>

          {/* Subtext from DOCX */}
          <p className="text-white/85 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-10">
            Inceptives Digital is a digital product studio that combines strategy, design, engineering, and AI to solve real business problems today, while building with an eye on where technology is heading. A product should not just launch well. It should keep working as tools, platforms, and expectations change around it.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base tracking-tight transition-all border-0 shadow-none"
            >
              Talk to Our Team
            </a>
            <a
              href="#our-journey"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base tracking-tight transition-all border border-white/10"
            >
              Explore Our Journey
            </a>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/15">
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

          {/* Partnered With Section: Official Authentic Brand Logos */}
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
                  {p.badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
