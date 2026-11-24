export default function PartnershipTrustedLogos() {
  const brands = [
    { name: 'DPS Airem', src: '/assets/ios-app/mobile-brand2.png' },
    { name: 'Family Entertainment Group', src: '/assets/ios-app/mobile-brand3.png' },
    { name: 'Pulse Check Timer', src: '/assets/ios-app/mobile-brand4.png' },
    { name: 'State of the Art Chiropractic', src: '/assets/ios-app/seo-page-sec2-icon5.png' },
    { name: 'Kaefer', src: '/assets/ios-app/kaefer-img.png' },
    { name: 'Bookwave Publishing', src: '/assets/ios-app/bookwave-img.png' },
  ]

  return (
    <section className="py-12 sm:py-16 bg-[#000000] border-t border-b border-white/10 overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <h3 className="text-center text-sm sm:text-base lg:text-[17px] font-semibold text-white/70 uppercase tracking-widest mb-10">
          Recognized Across Growth-Focused Partner Networks
        </h3>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 sm:gap-6 lg:gap-10">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-black/40"
              title={brand.name}
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
