export default function ReactNativeTechPartnerships() {
  const partners = [
    { name: 'AWS', src: '/assets/ios-app/awsas-icon.png' },
    { name: 'Microsoft Azure', src: '/assets/react-native/microsoft-azure.jpg' },
    { name: 'Google Cloud', src: '/assets/ios-app/googlecloud-img.png' },
    { name: 'Firebase', src: '/assets/ios-app/firebasedlogo2.png' },
    { name: 'Stripe', src: '/assets/ios-app/strip-png.png' },
    { name: 'OpenAI', src: '/assets/ios-app/aws_partnership_logo_7ad34e2ac8asd.png' },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Technology Partnerships Behind Our{' '}
            <span className="text-[#00CE44]">React Native Engineering</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Our technology partnerships strengthen React Native development across iOS and Android. Through established platforms and integration expertise, we engineer scalable mobile applications for evolving business requirements.
          </p>
        </div>

        {/* 6 Partner Logos Grid (6 Columns on Desktop) — dark cards matching live style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {partners.map((p) => (
            <div
              key={p.name}
              className="p-5 rounded-[15px] bg-[#161616] border border-white/5 hover:border-[#00CE44] flex flex-col items-center justify-center text-center h-28 sm:h-32 transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="h-10 sm:h-12 flex items-center justify-center mb-2">
                <img
                  src={p.src}
                  alt={p.name}
                  className="max-h-8 sm:max-h-9 max-w-[120px] w-auto h-auto object-contain select-none"
                  loading="lazy"
                />
              </div>
              <span className="text-white text-xs sm:text-[13px] font-medium leading-tight">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
