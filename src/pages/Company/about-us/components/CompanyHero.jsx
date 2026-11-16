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
        <div className="flex items-center gap-1.5">
          <svg className="h-6 sm:h-7 w-auto shrink-0" viewBox="0 0 75 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* AWS Letters in White */}
            <path d="M13.2 17.5C12.1 17.5 11.2 17.1 10.6 16.4C10.0 15.7 9.7 14.8 9.7 13.6C9.7 12.4 10.0 11.5 10.7 10.8C11.3 10.1 12.2 9.7 13.3 9.7C14.0 9.7 14.7 9.9 15.3 10.2C15.8 10.5 16.2 11.0 16.4 11.6V9.9H18.7V17.3H16.6V15.7C16.3 16.2 15.9 16.7 15.3 17.0C14.7 17.3 14.0 17.5 13.2 17.5ZM13.8 15.6C14.4 15.6 15.0 15.4 15.4 14.9C15.9 14.4 16.1 13.8 16.1 13.1C16.1 12.3 15.9 11.8 15.4 11.3C15.0 10.8 14.4 10.6 13.8 10.6C13.1 10.6 12.6 10.8 12.1 11.3C11.7 11.7 11.4 12.3 11.4 13.1C11.4 13.8 11.7 14.4 12.1 14.9C12.6 15.4 13.1 15.6 13.8 15.6Z" fill="#FFFFFF"/>
            <path d="M25.7 17.3L22.9 9.9H25.3L26.9 14.9L28.6 9.9H30.8L32.5 14.9L34.1 9.9H36.4L33.6 17.3H31.5L29.7 12.3L27.9 17.3H25.7Z" fill="#FFFFFF"/>
            <path d="M43.2 17.5C42.0 17.5 41.0 17.2 40.3 16.6C39.6 16.0 39.2 15.3 39.2 14.4H41.4C41.4 14.9 41.7 15.3 42.1 15.6C42.5 15.8 42.9 16.0 43.4 16.0C43.9 16.0 44.3 15.9 44.6 15.7C44.9 15.5 45.1 15.2 45.1 14.9C45.1 14.5 44.9 14.3 44.6 14.1C44.3 13.9 43.8 13.8 43.1 13.6L42.0 13.4C40.9 13.1 40.2 12.8 39.7 12.3C39.2 11.8 38.9 11.1 38.9 10.3C38.9 9.3 39.3 8.6 40.0 8.0C40.7 7.5 41.6 7.2 42.8 7.2C43.8 7.2 44.7 7.5 45.4 8.0C46.1 8.5 46.5 9.2 46.5 10.0H44.4C44.4 9.6 44.1 9.3 43.8 9.1C43.4 8.8 43.0 8.7 42.5 8.7C42.0 8.7 41.7 8.8 41.4 9.0C41.1 9.2 41.0 9.5 41.0 9.8C41.0 10.1 41.2 10.4 41.5 10.5C41.8 10.7 42.3 10.9 42.9 11.0L44.1 11.3C45.3 11.5 46.2 11.9 46.7 12.4C47.2 13.0 47.5 13.7 47.5 14.5C47.5 15.5 47.1 16.2 46.3 16.8C45.5 17.3 44.5 17.5 43.2 17.5Z" fill="#FFFFFF"/>
            {/* Iconic AWS Orange Smile Arrow */}
            <path d="M47.8 20.8C42.6 23.3 34.6 24.3 26.8 24.1C18.6 23.9 11.2 21.6 6.5 18.2C6.1 17.9 6.4 17.5 6.8 17.7C11.6 20.6 18.7 22.5 26.8 22.7C33.8 22.8 41.5 21.7 46.6 19.3C47.2 19.0 48.2 19.9 47.8 20.8Z" fill="#FF9900"/>
            <path d="M49.2 19.2C48.7 18.5 46.1 17.6 44.7 17.8C44.4 17.8 44.4 17.5 44.7 17.4C46.8 16.5 50.1 16.8 50.4 17.3C50.8 17.8 49.9 21.0 47.9 22.7C47.7 22.9 47.4 22.7 47.6 22.4C48.2 21.4 49.6 19.8 49.2 19.2Z" fill="#FF9900"/>
          </svg>
        </div>
      ),
    },
    {
      name: 'Stripe',
      logo: (
        <div className="flex items-center">
          <svg className="h-6 sm:h-7 w-auto shrink-0" viewBox="0 0 60 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.64 14.28c0-4.52-2.18-8.08-6.36-8.08-4.22 0-6.76 3.56-6.76 8.04 0 5.3 2.98 8.04 7.32 8.04 2.12 0 3.72-.48 4.92-1.16v-3.76c-1.2.64-2.58.98-4.14.98-1.68 0-3.14-.62-3.36-2.5h8.34c.02-.44.04-1.12.04-1.56zm-8.36-1.54c0-1.74.96-2.48 2.22-2.48 1.22 0 2.16.74 2.16 2.48h-4.38zM39.46 6.2c-1.72 0-2.82.8-3.4 1.38V6.44h-4.4v21.14l4.64-1 .02-5.18c.58.5 1.62 1.16 3.14 1.16 3.42 0 6.54-2.6 6.54-8.24 0-5.12-3.14-8.12-6.54-8.12zm-1.04 12.28c-1.14 0-1.84-.44-2.32-.98l-.04-6.38c.5-.58 1.24-1 2.36-1 1.8 0 3.08 1.7 3.08 4.18 0 2.54-1.28 4.18-3.08 4.18zM24.84 4.76L29.48 3.8v-3.8l-4.64.96v3.8zm0 1.68h4.64v15.84h-4.64V6.44zM18.88 7.74c-.94-.48-2.26-.8-3.48-.8-2.3 0-3.78 1.2-3.78 3.22 0 3.14 4.3 2.64 4.3 4 0 .54-.48.78-1.32.78-1.44 0-3.08-.6-4.22-1.3l-1.38 3.54c1.18.66 2.92 1.1 4.74 1.1 2.5 0 4.88-1.22 4.88-3.42 0-3.38-4.34-2.8-4.34-4.12 0-.48.42-.72 1.16-.72 1.24 0 2.6.46 3.58.98l1.36-3.26z" fill="#635BFF"/>
          </svg>
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
