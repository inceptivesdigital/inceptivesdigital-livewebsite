const MicrosoftLogo = () => (
  <svg className="w-11 h-11" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="0" y="0" width="10" height="10" fill="#F25022" />
    <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
    <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
    <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
  </svg>
)

const AzureLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.4 2.5L1.5 18.2C1.1 19.3 1.9 20.5 3.1 20.5H11.8C12.4 20.5 13 20.2 13.3 19.6L15.6 15.5H8.7L12.5 5.5L7.4 2.5Z" fill="#0078D4" />
    <path d="M12.9 5.8L7.8 19.2C7.5 20 8.1 20.8 9 20.8H19.7C20.6 20.8 21.2 20.1 21.4 19.3L23.4 9.8C23.6 8.7 22.7 7.8 21.6 8.1L12.9 5.8Z" fill="#50E6FF" />
    <path d="M12.9 5.8L16.2 15.4H8.7L12.9 5.8Z" fill="#005BA1" />
  </svg>
)

const partners = [
  { name: 'Microsoft', logo: <MicrosoftLogo /> },
  { name: 'Azure', logo: <AzureLogo /> },
  { name: 'AWS', src: '/assets/ios-app/awsas-icon.png' },
  { name: 'Stripe', src: '/assets/ios-app/strip-png.png' },
  { name: 'Google Cloud', src: '/assets/ios-app/googlecloud-img.png' },
  { name: 'Firebase', src: '/assets/ios-app/firebasedlogo2.png' },
  { name: 'OpenAI', src: '/assets/ios-app/aws_partnership_logo_7ad34e2ac8asd.png' },
  { name: 'GitHub', src: '/assets/ios-app/github.png' },
]

export default function CompanyTechPartners() {
  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2]">
            <span className="text-[#00CE44]">Partnered with the Technology Leaders</span>{' '}
            to Build the Right Digital Product
          </h2>
        </div>

        {/* 8 Partner Logos Grid (4x2 on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="p-6 rounded-[16px] bg-[#222222] border border-white/10 hover:border-[#00CE44] flex flex-col items-center justify-center text-center h-32 sm:h-36 transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="h-12 sm:h-14 flex items-center justify-center mb-3">
                {p.logo ? (
                  p.logo
                ) : (
                  <img
                    src={p.src}
                    alt={p.name}
                    className="max-h-11 sm:max-h-12 max-w-[135px] w-auto h-auto object-contain select-none"
                    loading="lazy"
                  />
                )}
              </div>
              <span className="text-white text-xs sm:text-sm font-bold leading-tight">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
