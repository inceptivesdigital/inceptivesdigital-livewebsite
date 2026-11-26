export default function CompanyClientLogos() {
  const clients = [
    { name: 'GetZ Pharma', src: '/assets/Product Builds & Clients/Getz Pharma.webp' },
    { name: 'Hyundai Highway', src: '/assets/Product Builds & Clients/Hundai Highway.webp' },
    { name: 'Jetzhub', src: '/assets/Product Builds & Clients/Jetzhub.webp' },
    { name: 'MTV', src: '/assets/Product Builds & Clients/MTV.webp' },
    { name: 'GDA Capital', src: '/assets/Product Builds & Clients/GDA Capital.webp' },
    { name: 'Kaefer', src: '/assets/Product Builds & Clients/Kaefer.webp' },
    { name: 'brsk', src: '/assets/Product Builds & Clients/Brsk.webp' },
    { name: 'Diachi Lighting', src: '/assets/Product Builds & Clients/Dai Ichi Lighting.webp' },
    { name: 'Bookwave Publishing', src: '/assets/Product Builds & Clients/Bookwave Publishing.webp' },
    { name: 'Metro1', src: '/assets/Product Builds & Clients/Metro Digital.webp' },
    { name: 'Gohar Groups of Companies', src: '/assets/Product Builds & Clients/Gohar Group Of Campanies.webp' },
    { name: 'Bin Rasheed Group', src: '/assets/Product Builds & Clients/Binrasheed Group.webp' },
    { name: 'Aura', src: '/assets/Product Builds & Clients/Aura.webp' },
  ]

  return (
    <section className="py-14 sm:py-20 bg-[#0d0d0d] border-t border-b border-white/10 relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] mb-10 text-center">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/50 mb-2">
          Trusted By Industry Pioneers
        </h3>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Our Clients &amp; <span className="text-[#00CE44]">Partnerships</span>
        </h2>
      </div>

      {/* Row 1: Client Logos Slide Show Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Soft edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-6 sm:gap-8 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="w-[180px] sm:w-[210px] h-20 sm:h-24 bg-white rounded-xl sm:rounded-2xl p-4 flex items-center justify-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(255,255,255,0.1)] shrink-0 select-none cursor-pointer"
            >
              <img
                src={encodeURI(client.src)}
                alt={client.name}
                className="max-h-10 sm:max-h-12 w-auto max-w-[85%] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
