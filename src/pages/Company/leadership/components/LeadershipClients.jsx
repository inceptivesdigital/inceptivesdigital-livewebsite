export default function LeadershipClients() {
  const featuredClients = [
    { name: 'Getz Pharma', logo: '/assets/leadership/client-getz.png' },
    { name: 'Hyundai Highway', logo: '/assets/leadership/client-hyundai.png' },
    { name: 'GOHAR Group of Companies', logo: '/assets/leadership/client-gohar.png' },
    { name: 'KCR Pencil Carbon Paper', logo: '/assets/leadership/client-kcr.png' },
  ]

  const marqueeClients = [
    { name: 'GetZ Pharma', file: 'Getz Pharma.webp' },
    { name: 'Hyundai Highway', file: 'Hundai Highway.webp' },
    { name: 'Diachi Lighting', file: 'Dai Ichi Lighting.webp' },
    { name: 'DPS Airem', file: 'DPS Airem.webp' },
    { name: 'Bookwave Publishing', file: 'Bookwave Publishing.webp' },
    { name: 'MTV', file: 'MTV.webp' },
    { name: 'Jetz Hub', file: 'Jetzhub.webp' },
    { name: 'Family Entertainment Group', file: 'Family Entertainment Group LLC.webp' },
    { name: 'Kaefer', file: 'Kaefer.webp' },
  ]

  return (
    <section className="py-20 sm:py-24 bg-[#0a0b0d] border-b border-white/[0.06] overflow-hidden relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-bold text-[#00CE44] uppercase tracking-widest mb-2">
            Client Partnerships
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Businesses We’re Proud to Have Served
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            From established enterprise leaders to category-defining high growth ventures, our leadership team has guided high-stakes digital transformations.
          </p>
        </div>

        {/* 4 Featured Client Cards from DOCX / Attachment 5 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {featuredClients.map((client) => (
            <div
              key={client.name}
              className="h-28 sm:h-36 bg-white rounded-xl p-6 flex items-center justify-center border border-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 sm:max-h-16 w-auto max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee with Global Brands */}
      <div className="relative w-full overflow-hidden flex items-center pt-2">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0a0b0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0a0b0d] to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-6 sm:gap-8 animate-marquee whitespace-nowrap">
          {[...marqueeClients, ...marqueeClients].map((c, i) => (
            <div
              key={i}
              className="w-[180px] sm:w-[210px] h-20 sm:h-24 bg-[#141518] border border-white/10 rounded-xl p-4 flex items-center justify-center shrink-0 select-none hover:border-[#00CE44]/40 transition-colors"
            >
              <img
                src={encodeURI(`/assets/Product Builds & Clients/${c.file}`)}
                alt={c.name}
                className="max-h-10 sm:max-h-12 w-auto max-w-[85%] object-contain brightness-95 hover:brightness-110 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
