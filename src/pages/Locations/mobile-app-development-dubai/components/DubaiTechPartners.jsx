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

        {/* 8 Partner Cards in 4-col grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="h-24 sm:h-28 md:h-32 bg-[#12141a] border border-white/[0.08] hover:border-[#00CE44]/50 rounded-2xl sm:rounded-[22px] p-4 flex items-center justify-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(0,206,68,0.12)]"
            >
              {partner.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
