export default function CompanyLeadership() {
  const leaders = [
    {
      name: 'Hannan Shahnoor',
      role: 'CEO & Co-Founder',
      bio: 'Leads global vision, product strategy, and client outcomes. Focuses on business-first digital architectures that deliver tangible commercial impact.',
      img: '/assets/about-us/about-men.png',
      linkedin: 'https://www.linkedin.com/company/inceptives-digital',
    },
    {
      name: 'Atif Zaidi',
      role: 'Chief Technology Officer (CTO)',
      bio: 'Architects enterprise distributed systems, cloud infrastructure, AI models, and zero-debt engineering standards across every client build.',
      img: '/assets/about-us/about1.png',
      linkedin: 'https://www.linkedin.com/company/inceptives-digital',
    },
    {
      name: 'Areeb Rehman',
      role: 'Chief Operating Officer (COO)',
      bio: 'Oversees engineering delivery, cross-functional sprints, client partnerships, and continuous post-launch performance operations globally.',
      img: '/assets/about-us/about-img1.png',
      linkedin: 'https://www.linkedin.com/company/inceptives-digital',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            Meet The Leadership Behind <span className="text-[#00CE44]">Inceptives Digital</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base text-center leading-relaxed font-normal max-w-2xl mx-auto">
            Let us introduce you to the minds behind bringing Inceptives Digital to life so it can help businesses transform and grow digitally.
          </p>
        </div>

        {/* 3 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="rounded-[24px] bg-[#121212] border border-white/10 hover:border-[#00CE44]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between text-left group shadow-xl"
            >
              {/* Photo Area */}
              <div className="relative w-full h-[320px] sm:h-[350px] overflow-hidden bg-black/60">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

                {/* LinkedIn Badge */}
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} LinkedIn`}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:bg-[#00CE44] hover:text-black transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>

              {/* Leader Info */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight group-hover:text-[#00CE44] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-[#00CE44] text-xs sm:text-sm font-semibold tracking-wide mb-4">
                    {leader.role}
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                    {leader.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/30 font-mono">
                  <span>EXECUTIVE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
