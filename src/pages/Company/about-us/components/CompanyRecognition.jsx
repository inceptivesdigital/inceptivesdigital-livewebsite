// Same award badges as the homepage "Awards And Recognitions" section
const awards = [
  { id: 'designrush', src: '/assets/awards-images/award-designrush.webp', alt: 'DesignRush Top Mobile App Development Companies award badge' },
  { id: 'top-developers', src: '/assets/awards-images/award-top-developers.png', alt: 'Top Mobile App Developers 2025 Award' },
  { id: 'clutch-austin', src: '/assets/awards-images/award-clutch-austin.png', alt: 'Top Application Management and Support Company in Austin 2025 Clutch award badge' },
  { id: 'rightfirms', src: '/assets/awards-images/award-rightfirms.png', alt: 'Top Service Provider Award Badge by RightFirms' },
  { id: 'clutch-gaming-texas', src: '/assets/awards-images/award-clutch-gaming.png', alt: 'Clutch Top Software Developers in Gaming, Texas award badge' },
]

export default function CompanyRecognition() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Industry Accolades
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            Recognition That Reflects <span className="text-[#00CE44]">Our Standards</span>
          </h2>
        </div>

        {/* Award badge images (grayscale by default, full color on hover) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 xl:gap-20">
          {awards.map((award) => (
            <div
              key={award.id}
              className="h-24 sm:h-28 lg:h-32 w-auto max-w-[130px] sm:max-w-[150px] lg:max-w-[170px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={award.src}
                alt={award.alt}
                className="max-h-full max-w-full w-auto h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
