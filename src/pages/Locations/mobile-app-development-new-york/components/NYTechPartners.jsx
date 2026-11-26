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

export default function NYTechPartners() {
  const ecosystems = [
    {
      name: 'Amazon Web Services (AWS)',
      src: '/assets/ios-app/awsas-icon.png',
      alt: 'AWS Cloud Infrastructure Partner',
    },
    {
      name: 'Microsoft Azure',
      svg: <AzureLogo />,
      alt: 'Microsoft Azure Cloud Services',
    },
    {
      name: 'Google Cloud',
      src: '/assets/ios-app/googlecloud-img.png',
      alt: 'Google Cloud Platform Partner',
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
      name: 'OpenAI',
      svg: <OpenAILogo />,
      alt: 'OpenAI Platform Partner',
    },
    {
      name: 'Oracle',
      svg: <OracleLogo />,
      alt: 'Oracle Enterprise Cloud Partner',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Our Technology Partners for{' '}
            <span className="text-[#00CE44]">New York App Development Projects</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            From Wall Street financial platforms to enterprise applications across Manhattan, businesses depend on established technologies to keep their systems connected. Inceptives Digital works with AWS, Microsoft Azure, Google Cloud, and other leading platforms to support cloud infrastructure, secure payment integrations, AI functionality, and enterprise mobility.
          </p>
        </div>

        {/* 8-Card Dark Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {ecosystems.map((eco) => (
            <div
              key={eco.name}
              className="min-h-[136px] sm:min-h-[148px] rounded-2xl bg-[#14151a] border border-white/10 hover:border-[#00CE44]/40 flex flex-col items-center justify-center gap-3 p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="h-12 flex items-center justify-center">
                {eco.svg ? (
                  eco.svg
                ) : (
                  <img
                    src={eco.src}
                    alt={eco.alt}
                    className="max-h-10 sm:max-h-12 w-auto object-contain select-none shadow-none"
                    loading="lazy"
                  />
                )}
              </div>
              <span className="text-xs sm:text-sm font-medium text-white/80 text-center leading-tight">
                {eco.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
