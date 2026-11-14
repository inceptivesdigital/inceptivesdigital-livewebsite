export default function ReactNativeTrustedLogos() {
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

  return (
    <section className="py-20 lg:py-28 bg-[#1d1d1d] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading: H2, 40px, bold, centered */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight text-center">
            The Studio Behind{' '}
            <span className="text-[#00CE44]">Global React Native</span> Product Launches
          </h2>
        </div>

        {/* Exact Same Logos & CSS as Homepage "From Startups to Growing Enterprises" (ClientGridSection.jsx) */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-4 lg:gap-5 w-full">
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
      </div>
    </section>
  )
}
