const AzureLogo = () => (
  <svg className="h-9 sm:h-11 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.4 2.5L1.5 18.2C1.1 19.3 1.9 20.5 3.1 20.5H11.8C12.4 20.5 13 20.2 13.3 19.6L15.6 15.5H8.7L12.5 5.5L7.4 2.5Z" fill="#0078D4" />
    <path d="M12.9 5.8L7.8 19.2C7.5 20 8.1 20.8 9 20.8H19.7C20.6 20.8 21.2 20.1 21.4 19.3L23.4 9.8C23.6 8.7 22.7 7.8 21.6 8.1L12.9 5.8Z" fill="#50E6FF" />
    <path d="M12.9 5.8L16.2 15.4H8.7L12.9 5.8Z" fill="#005BA1" />
  </svg>
)

const OpenAILogo = () => (
  <svg viewBox="0 0 24 24" className="h-9 sm:h-11 w-auto fill-white" aria-hidden="true">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5976 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6648zm-12.04 5.8335l-2.479-1.4289a.071.071 0 0 1-.038-.052V7.4944a4.485 4.485 0 0 1 7.3613-3.4533l-.142.0805-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369zm1.4886-2.5222l2.607-1.5046 2.607 1.5046v3.0093l-2.607 1.5046-2.607-1.5046z" />
  </svg>
)

const OracleLogo = () => (
  <span className="text-xl sm:text-2xl font-black text-[#F80000] tracking-wider font-mono">
    ORACLE
  </span>
)

const ShopifyLogo = () => (
  <svg viewBox="0 0 24 24" className="h-9 sm:h-11 w-auto fill-[#95BF47]" aria-hidden="true">
    <path d="M18.6 6.2c-.1-.5-.5-.8-1-.8h-1.4c-.4-1.8-1.8-3.1-3.5-3.1-.4 0-.9.1-1.3.3-.6-.9-1.6-1.4-2.7-1.4-2 0-3.6 1.7-3.9 4.2H3.4c-.5 0-.9.3-1 .8L1 19.3c-.1.9.6 1.7 1.5 1.7h19c.9 0 1.6-.8 1.5-1.7L18.6 6.2zM12.7 4c1 0 1.8.7 2.1 1.7h-4.1c.3-1 1.1-1.7 2-1.7zm-4-1.3c.6 0 1.1.3 1.4.8-.6.6-1 1.4-1.2 2.2H6.5c.3-1.7 1.2-3 2.2-3z" />
  </svg>
)

export default function LondonTechPartners() {
  const ecosystems = [
    { name: 'Microsoft Azure', svg: <AzureLogo /> },
    { name: 'Amazon Web Services', src: '/assets/ios-app/awsas-icon.png' },
    { name: 'Google Cloud', src: '/assets/ios-app/googlecloud-img.png' },
    { name: 'Stripe', src: '/assets/ios-app/strip-png.png' },
    { name: 'Salesforce', src: '/assets/ios-app/salesforceimg.png' },
    { name: 'Oracle', svg: <OracleLogo /> },
    { name: 'OpenAI', svg: <OpenAILogo /> },
    { name: 'Shopify', svg: <ShopifyLogo /> },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Strategic Technology Partnerships Supporting Mobile App{' '}
            <span className="text-[#00CE44]">Development in London</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital works with established technology providers to develop custom iOS, Android, and enterprise mobile applications for London businesses. These platforms support cloud infrastructure, AI integration, payment processing, and connected business systems, with a focus on secure development, integrations, and long-term product requirements.
          </p>
        </div>

        {/* 8-Card Dark Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {ecosystems.map((eco) => (
            <div
              key={eco.name}
              className="h-28 sm:h-32 rounded-2xl bg-[#14151a] border-0 flex flex-col items-center justify-center p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-none group"
            >
              <div className="h-11 flex items-center justify-center mb-2">
                {eco.svg ? (
                  eco.svg
                ) : (
                  <img
                    src={eco.src}
                    alt={eco.name}
                    className="max-h-10 sm:max-h-12 w-auto object-contain select-none shadow-none"
                    loading="lazy"
                  />
                )}
              </div>
              <span className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-[#00CE44] transition-colors">
                {eco.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
