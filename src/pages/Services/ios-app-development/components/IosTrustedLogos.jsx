export default function IosTrustedLogos() {
  const clients = [
    {
      name: 'DPS AIrem',
      src: '/assets/ios-app/mobile-brand2.png',
    },
    {
      name: 'Family Entertainment Group',
      src: '/assets/ios-app/mobile-brand3.png',
    },
    {
      name: 'Pulse Check Timer',
      src: '/assets/ios-app/mobile-brand4.png',
    },
    {
      name: 'State of the Art Chiropractic',
      src: '/assets/ios-app/seo-page-sec2-icon5.png',
    },
    {
      name: 'Kaefer',
      src: '/assets/ios-app/kaefer-img.png',
    },
    {
      name: 'Bookwave Publishing',
      src: '/assets/ios-app/bookwave-img.png',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#1d1d1d] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading: H2, 40px, bold */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight text-center">
            <span className="text-[#00CE44]">iOS Application Development Company</span> Trusted by Global Innovators
          </h2>
        </div>

        {/* 6 App Squircle Logos — single line on >=768px, wraps only on small screens */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 w-full mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-24 sm:w-28 md:w-28 lg:w-32 xl:w-36 h-auto transition-all duration-300 hover:-translate-y-2.5 hover:scale-110 cursor-pointer shrink min-w-0"
            >
              <img
                src={client.src}
                alt={client.name}
                className="w-full h-auto object-contain select-none drop-shadow-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
