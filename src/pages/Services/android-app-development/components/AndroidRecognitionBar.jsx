export default function AndroidRecognitionBar() {
  const clients = [
    {
      name: 'Printer Pix',
      src: '/assets/Product Builds & Clients/Printer Pix.webp',
    },
    {
      name: 'Brsk',
      src: '/assets/Product Builds & Clients/Brsk.webp',
    },
    {
      name: 'DPS Airem',
      src: '/assets/Product Builds & Clients/DPS Airem.webp',
    },
    {
      name: 'Fanverse',
      src: '/assets/Product Builds & Clients/Fanverse.webp',
    },
    {
      name: 'MTV',
      src: '/assets/Product Builds & Clients/MTV.webp',
    },
    {
      name: 'Kaefer',
      src: '/assets/Product Builds & Clients/Kaefer.webp',
    },
    {
      name: 'GDA Capital',
      src: '/assets/Product Builds & Clients/GDA Capital.webp',
    },
    {
      name: 'Family Entertainment Group LLC',
      src: '/assets/Product Builds & Clients/Family Entertainment Group LLC.webp',
    },
    {
      name: 'Jetzhub',
      src: '/assets/Product Builds & Clients/Jetzhub.webp',
    },
  ]

  const stats = [
    {
      value: '70+',
      label: 'apps delivered',
      icon: '/assets/mobile-app/apps-launch.svg',
    },
    {
      value: '3M+',
      label: 'downloads',
      icon: '/assets/mobile-app/app-downloads.svg',
    },
    {
      value: '150+',
      label: 'Engineering Professionals',
      icon: '/assets/mobile-app/active-developer.svg',
    },
    {
      value: '4.7',
      label: 'Clutch rating',
      icon: '/assets/mobile-app/rating.svg',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#1d1d1d] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight text-center mb-4">
            <span className="text-[#00CE44]">Globally Recognized</span> as an Android App Development Partner
          </h2>
          <p className="text-white/90 text-[16px] font-medium text-center">
            70+ apps delivered &middot; 3M+ downloads &middot; 150+ Engineering Professionals &middot; 4.7 Clutch rating
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-4 lg:gap-5 w-full mb-14 sm:mb-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(16.666%-17px)] h-24 sm:h-28 md:h-32 bg-white rounded-2xl sm:rounded-[22px] p-4 sm:p-5 flex items-center justify-center transition-all duration-300 hover:scale-[1.03] cursor-pointer shrink-0 border-0 shadow-none"
            >
              <img
                src={encodeURI(client.src)}
                alt={client.name}
                className="max-h-12 sm:max-h-14 md:max-h-20 w-auto max-w-[82%] object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* 4 Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center pt-6 border-t border-white/10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3.5 flex items-center justify-center">
                <img
                  src={s.icon}
                  alt={s.label}
                  className="w-full h-full object-contain select-none"
                />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#00CE44] tracking-tight leading-none mb-1.5">
                {s.value}
              </div>
              <div className="text-white text-xs sm:text-sm font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
