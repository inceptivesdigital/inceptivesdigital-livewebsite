export default function FitnessClientLogos() {
  const clients = [
    {
      name: 'DPS Airem',
      src: '/assets/mobile-app/mobile-brand2.png',
    },
    {
      name: 'Family Entertainment Group',
      src: '/assets/mobile-app/mobile-brand3.png',
    },
    {
      name: 'Pulse Check Timer',
      src: '/assets/mobile-app/mobile-brand4.png',
    },
    {
      name: 'State of the Art Chiropractic',
      src: '/assets/mobile-app/seo-page-sec2-icon5.png',
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-[#202020] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Fitness Businesses That Have Relied on{' '}
            <span className="text-[#00CE44]">Our App Development Company</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-full h-24 sm:h-28 bg-white rounded-[18px] p-4 flex items-center justify-center transition-transform duration-300 hover:scale-[1.03] border-0 shadow-none"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-14 sm:max-h-16 w-auto max-w-[85%] object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
