export default function DubaiTechPartners() {
  const partners = [
    {
      name: 'Amazon Web Services',
      content: (
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none lowercase select-none">
            aws
          </span>
          <svg className="w-16 sm:w-20 h-3 mt-1" viewBox="0 0 70 12" fill="none">
            <path d="M4 3c18 8 42 8 60 0 1.8-.7 3.5.9 2 2.2-20 12.5-47 12-64-1.2-1.2-.8-.2-2 2-1z" fill="#FF9900" />
            <path d="M63.5 2.8c-1.8-.4-5.2-.7-7.6-.8-.7 0-1-.5-.4-.9 3.2-2.3 8.6-1.7 10.4-1.1 1.7.5 1.8 6-.9 8.9-.5.4-.8.2-.7-.3.5-1.9.2-4.7-.8-5.8z" fill="#FF9900" />
          </svg>
        </div>
      ),
    },
    {
      name: 'Microsoft Azure',
      content: (
        <div className="flex items-center gap-2 sm:gap-2.5 select-none">
          <svg className="h-6 sm:h-7 md:h-8 w-auto shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7.4 2.5L1.5 18.2C1.1 19.3 1.9 20.5 3.1 20.5H11.8C12.4 20.5 13 20.2 13.3 19.6L15.6 15.5H8.7L12.5 5.5L7.4 2.5Z" fill="#0078D4" />
            <path d="M12.9 5.8L7.8 19.2C7.5 20 8.1 20.8 9 20.8H19.7C20.6 20.8 21.2 20.1 21.4 19.3L23.4 9.8C23.6 8.7 22.7 7.8 21.6 8.1L12.9 5.8Z" fill="#50E6FF" />
            <path d="M12.9 5.8L16.2 15.4H8.7L12.9 5.8Z" fill="#005BA1" />
          </svg>
          <span className="font-bold text-white text-xs sm:text-sm md:text-base tracking-tight whitespace-nowrap">Microsoft Azure</span>
        </div>
      ),
    },
    {
      name: 'Google Cloud',
      content: (
        <div className="flex items-center gap-2 select-none">
          <svg className="h-6 sm:h-7 md:h-8 w-auto shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
          </svg>
          <span className="font-bold text-white text-xs sm:text-sm md:text-base tracking-tight whitespace-nowrap">Google <span className="font-normal text-white/80">Cloud</span></span>
        </div>
      ),
    },
    {
      name: 'Oracle',
      content: (
        <span className="text-xl sm:text-2xl md:text-[26px] font-black text-white tracking-[0.22em] font-sans select-none text-center">
          ORACLE
        </span>
      ),
    },
    {
      name: 'OpenAI',
      content: (
        <div className="flex items-center gap-2 sm:gap-2.5 select-none">
          <svg className="h-6 sm:h-7 md:h-8 w-auto fill-white shrink-0" viewBox="0 0 24 24" aria-label="OpenAI">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5976 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6648zm-12.04 5.8335l-2.479-1.4289a.071.071 0 0 1-.038-.052V7.4944a4.485 4.485 0 0 1 7.3613-3.4533l-.142.0805-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369zm1.4886-2.5222l2.607-1.5046 2.607 1.5046v3.0093l-2.607 1.5046-2.607-1.5046z" />
          </svg>
          <span className="font-bold text-white text-xs sm:text-sm md:text-base tracking-tight">OpenAI</span>
        </div>
      ),
    },
    {
      name: 'Salesforce',
      content: (
        <div className="flex items-center gap-2 select-none">
          <svg className="h-6 sm:h-7 md:h-8 w-auto shrink-0" viewBox="0 0 100 70" fill="none" aria-label="Salesforce">
            <path d="M41.8 12.3c3.5-5.2 9.5-8.6 16.3-8.6 8.5 0 15.8 5.3 18.6 12.9 3.6 1.1 6.7 3.4 8.7 6.6 4.3 1.4 7.5 5.3 7.8 10.1 2.8 1.8 4.7 4.9 4.7 8.5 0 5.6-4.5 10.1-10.1 10.1H14.1C6.3 61.9 0 55.6 0 47.8c0-6.9 4.9-12.7 11.5-13.8 1.4-6.4 7.2-11.2 14.1-11.2 3.4 0 6.5 1.1 9 3 2.1-7.2 4.6-10.6 7.2-13.5z" fill="#00A1E0"/>
          </svg>
          <span className="font-bold text-white text-xs sm:text-sm md:text-base tracking-tight">salesforce</span>
        </div>
      ),
    },
    {
      name: 'Stripe',
      content: (
        <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight lowercase select-none">
          stripe
        </span>
      ),
    },
    {
      name: 'Apple',
      content: (
        <div className="flex items-center gap-2 select-none">
          <svg viewBox="0 0 170 170" className="h-6 sm:h-7 md:h-8 w-auto fill-white shrink-0">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.56-7.71-11.61-14-4.84-7.44-8.74-16.14-11.71-26.1-2.96-9.98-4.45-19.8-4.45-29.47 0-14.07 3.52-25.75 10.56-35.03 7.04-9.28 15.82-14.06 26.34-14.34 4.58 0 9.87 1.25 15.87 3.75 6 2.5 9.82 3.86 11.47 4.07 2.05-.33 6.07-1.78 12.06-4.35 5.99-2.57 11.2-3.75 15.63-3.54 11.89.65 21.6 4.96 29.13 12.92-10.42 6.32-15.51 15.02-15.28 26.11.23 8.68 3.55 15.86 9.97 21.53 6.42 5.66 14.18 8.87 23.28 9.63-2.17 6.44-4.78 13.04-7.83 19.8zm-28.72-106.1c0 6.64-2.42 12.79-7.25 18.45-5.69 6.42-12.63 10.33-20.81 11.72-.25-1.53-.37-2.95-.37-4.28 0-6.64 2.65-13.08 7.95-19.32 2.65-3.17 5.86-5.77 9.63-7.81 3.77-2.04 7.37-3.23 10.8-3.56.05 1.6.05 3.2.05 4.8z" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[8px] sm:text-[9px] font-semibold tracking-wider uppercase text-white/50 leading-none">Download on</span>
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight whitespace-nowrap">Apple Store</span>
          </div>
        </div>
      ),
    },
    {
      name: 'Google Play',
      content: (
        <div className="flex items-center gap-2 select-none">
          <svg className="h-6 sm:h-7 md:h-8 w-auto shrink-0" viewBox="0 0 24 24" aria-label="Google Play">
            <path fill="#00D2FF" d="M3.6 1.8C3.2 2.2 3 2.8 3 3.6v16.8c0 .8.2 1.4.6 1.8l.1.1 9.4-9.4v-.2L3.7 1.7l-.1.1z" />
            <path fill="#00F076" d="M16.2 15.9l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.7 2.1-.1-.1z" />
            <path fill="#FF3A44" d="M16.3 15.8L13.1 12.6 3.6 22.1c.4.4 1 .4 1.8 0l10.9-6.3" />
            <path fill="#FFC900" d="M16.3 9.4L5.4 3.1c-.8-.5-1.4-.4-1.8 0l9.5 9.5 3.2-3.2z" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[8px] sm:text-[9px] font-semibold tracking-wider uppercase text-white/50 leading-none">Get it on</span>
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight whitespace-nowrap">Google Play</span>
          </div>
        </div>
      ),
    },
    {
      name: 'Amazon Payment Services',
      content: (
        <div className="flex items-center gap-2 select-none">
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-none">
              amazon
            </span>
            <svg className="w-14 sm:w-16 h-2 mt-0.5" viewBox="0 0 60 10" fill="none">
              <path d="M2 3c15 6 35 6 52 0 1.5-.5 3 .8 1.8 1.8-16 10-39 9.5-55-1-1-.7-.1-1.6 1.2-.8z" fill="#FF9900" />
              <path d="M53.5 2.5c-1.5-.4-4.5-.6-6.5-.7-.6 0-.8-.4-.3-.7 2.8-2 7.4-1.5 8.9-1 1.5.5 1.6 5.2-.8 7.7-.4.4-.7.2-.6-.2.4-1.6.2-4-.7-5.1z" fill="#FF9900" />
            </svg>
          </div>
          <div className="flex flex-col text-left pl-2 border-l border-white/20">
            <span className="text-[7px] sm:text-[8px] font-bold text-white/90 tracking-wider leading-none">PAYMENT</span>
            <span className="text-[7px] sm:text-[8px] font-bold text-[#FF9900] tracking-wider leading-none mt-0.5">SERVICES</span>
          </div>
        </div>
      ),
    },
    {
      name: 'Telr',
      content: (
        <div className="flex items-center gap-2 select-none">
          <span className="text-2xl sm:text-3xl font-black text-[#00CE44] tracking-tight">telr</span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/60 border-l border-white/20 pl-2">PAYMENTS</span>
        </div>
      ),
    },
    {
      name: 'Firebase',
      content: (
        <div className="flex items-center gap-2 select-none">
          <svg className="h-6 sm:h-7 md:h-8 w-auto shrink-0" viewBox="0 0 130 44" fill="none" aria-label="Firebase">
            <path d="M3.8 24.2l12.4-23.2c.5-1 1.9-1 2.4 0l4.3 8.1-14.8 17-4.3-1.9zm17.9-13.6l4.6-8.7c.6-1.1 2.1-1.1 2.7 0l11.4 21.6-14.4 7.6-4.3-20.5z" fill="#FFA000"/>
            <path d="M22.5 17.5l-4.7-9.4c-.5-1-1.9-1-2.4 0L3.1 29.7l19.4 10.9 19.4-10.9-19.4-12.2z" fill="#FFC400"/>
          </svg>
          <span className="font-bold text-white text-xs sm:text-sm md:text-base tracking-tight whitespace-nowrap">Firebase</span>
        </div>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-black relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading matching other Dubai Sections */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
            Strategic Technology Partnerships for{' '}
            <span className="text-[#00CE44]">Dubai&apos;s Mobile Ecosystem</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Established cloud, payment, and enterprise platforms support the technical requirements behind custom mobile applications. The technology ecosystem includes infrastructure, AI services, and connected business systems that accommodate UAE payment integrations and regional operations.
          </p>
        </div>

        {/* 12 Partner Cards with Dark Background & Clean Borders */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-4 lg:gap-5 w-full">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(16.666%-17px)] h-24 sm:h-28 md:h-32 bg-[#12141a] border border-white/[0.08] hover:border-[#00CE44]/50 rounded-2xl sm:rounded-[22px] p-3 sm:p-4 flex items-center justify-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(0,206,68,0.12)] cursor-pointer shrink-0"
            >
              {partner.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
