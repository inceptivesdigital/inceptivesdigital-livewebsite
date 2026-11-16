const clients = [
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

export default function ContactClients() {
  return (
    <section className="py-14 sm:py-20 bg-[#0d0d0d] border-y border-white/10 overflow-hidden">
      <h2 className="text-2xl sm:text-4xl font-bold text-white text-center tracking-tight mb-10 px-4">
        Trusted By Brands Across the Globe
      </h2>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-6 sm:gap-8 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <div
              key={i}
              className="w-[180px] sm:w-[210px] h-20 sm:h-24 bg-white rounded-xl p-4 flex items-center justify-center shrink-0 select-none"
            >
              <img
                src={encodeURI(`/assets/Product Builds & Clients/${c.file}`)}
                alt={c.name}
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
