export default function WebAppTechPartners() {
  const partners = [
    { name: 'AWS', logo: '/assets/mobile-app/aws.jpg' },
    { name: 'Google Cloud', logo: '/assets/mobile-app/goole-cloud-platform.jpg' },
    { name: 'Microsoft Azure', logo: '/assets/react-native/microsoft-azure.jpg' },
    { name: 'Stripe', logo: '/assets/healthcare/tech/stripe.jpg' },
    { name: 'MongoDB', logo: '/assets/mobile-app/mongoDB.jpg' },
    { name: 'Auth0', isAuth0Svg: true },
  ]

  return (
    <section className="py-20 lg:py-28 bg-black text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
            Backed by the{' '}
            <span className="text-[#00CE44]">Technology Partners</span> That Keep Our Web Products Running at Scale
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-3xl mx-auto">
            We don&apos;t pick infrastructure by trend. AWS, Google Cloud, Stripe, these are choices made because they hold up once a product has real users and real traffic, not because they look good in a pitch deck. Every integration and every hosting decision on an Inceptives build runs through partners that have already proven themselves at scale, which is one less thing to worry about after launch.
          </p>
        </div>

        {/* Exact Homepage ClientGridSection Card Styling */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-4 lg:gap-5 w-full">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(16.666%-17px)] h-24 sm:h-28 md:h-32 bg-white rounded-2xl sm:rounded-[22px] p-4 sm:p-5 flex items-center justify-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(255,255,255,0.12)] cursor-pointer shrink-0"
            >
              {partner.isAuth0Svg ? (
                <div className="flex items-center gap-2.5 text-[#111827] select-none">
                  <svg className="w-9 h-9 sm:w-10 sm:h-10 text-[#EB5424] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z" />
                  </svg>
                  <span className="font-bold text-xl sm:text-2xl tracking-tight text-black">Auth0</span>
                </div>
              ) : (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 sm:max-h-14 md:max-h-20 w-auto max-w-[82%] object-contain select-none"
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
