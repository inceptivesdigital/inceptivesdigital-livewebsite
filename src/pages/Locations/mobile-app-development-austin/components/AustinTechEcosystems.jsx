const AzureLogo = () => (
  <svg className="h-9 sm:h-11 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.4 2.5L1.5 18.2C1.1 19.3 1.9 20.5 3.1 20.5H11.8C12.4 20.5 13 20.2 13.3 19.6L15.6 15.5H8.7L12.5 5.5L7.4 2.5Z" fill="#0078D4" />
    <path d="M12.9 5.8L7.8 19.2C7.5 20 8.1 20.8 9 20.8H19.7C20.6 20.8 21.2 20.1 21.4 19.3L23.4 9.8C23.6 8.7 22.7 7.8 21.6 8.1L12.9 5.8Z" fill="#50E6FF" />
    <path d="M12.9 5.8L16.2 15.4H8.7L12.9 5.8Z" fill="#005BA1" />
  </svg>
)

export default function AustinTechEcosystems() {
  const ecosystems = [
    {
      name: 'Amazon Web Services',
      src: '/assets/ios-app/awsas-icon.png',
      alt: 'AWS Cloud Infrastructure Partner',
    },
    {
      name: 'Google Cloud',
      src: '/assets/ios-app/googlecloud-img.png',
      alt: 'Google Cloud Platform Partner',
    },
    {
      name: 'Microsoft Azure',
      svg: <AzureLogo />,
      alt: 'Microsoft Azure Cloud Services',
    },
    {
      name: 'Apple',
      svg: (
        <svg viewBox="0 0 170 170" className="h-9 sm:h-11 w-auto fill-white">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.56-7.71-11.61-14-4.84-7.44-8.74-16.14-11.71-26.1-2.96-9.98-4.45-19.8-4.45-29.47 0-14.07 3.52-25.75 10.56-35.03 7.04-9.28 15.82-14.06 26.34-14.34 4.58 0 9.87 1.25 15.87 3.75 6 2.5 9.82 3.86 11.47 4.07 2.05-.33 6.07-1.78 12.06-4.35 5.99-2.57 11.2-3.75 15.63-3.54 11.89.65 21.6 4.96 29.13 12.92-10.42 6.32-15.51 15.02-15.28 26.11.23 8.68 3.55 15.86 9.97 21.53 6.42 5.66 14.18 8.87 23.28 9.63-2.17 6.44-4.78 13.04-7.83 19.8zm-28.72-106.1c0 6.64-2.42 12.79-7.25 18.45-5.69 6.42-12.63 10.33-20.81 11.72-.25-1.53-.37-2.95-.37-4.28 0-6.64 2.65-13.08 7.95-19.32 2.65-3.17 5.86-5.77 9.63-7.81 3.77-2.04 7.37-3.23 10.8-3.56.05 1.6.05 3.2.05 4.8z" />
        </svg>
      ),
      alt: 'Apple iOS Ecosystem Partner',
    },
    {
      name: 'Google Firebase',
      src: '/assets/marquee/google.png',
      alt: 'Google Firebase Ecosystem Partner',
    },
    {
      name: 'Stripe',
      src: '/assets/ios-app/strip-png.png',
      alt: 'Stripe Payments Partner',
    },
    {
      name: 'Salesforce',
      src: '/assets/ios-app/salesforceimg.png',
      alt: 'Salesforce Cloud Partner',
    },
    {
      name: 'MongoDB',
      src: '/assets/mobile-app/mongoDB.jpg',
      alt: 'MongoDB Database Partner',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Technology Partners Supporting Our Mobile App Development{' '}
            <span className="text-[#00CE44]">Services in Austin</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital works with established technology platforms to develop mobile applications for startups and enterprises in Austin. Our technology ecosystem supports cloud infrastructure, secure integrations, payment processing, and app deployment. These capabilities help businesses choose reliable solutions for their product requirements while maintaining flexibility as their applications grow.
          </p>
        </div>

        {/* 8-Card Dark Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {ecosystems.map((eco) => (
            <div
              key={eco.name}
              className="h-28 sm:h-32 rounded-2xl bg-[#14151a] border border-white/10 flex items-center justify-center p-6 transition-all duration-300 hover:scale-[1.02] hover:border-[#00CE44]/40 cursor-pointer"
            >
              {eco.svg ? (
                eco.svg
              ) : (
                <img
                  src={eco.src}
                  alt={eco.alt}
                  className="max-h-12 sm:max-h-14 w-auto object-contain select-none"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
