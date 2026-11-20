export default function FintechServicesGrid() {
  const services = [
    {
      title: 'Digital Banking App Development',
      icon: '/assets/healthcare/Al-Chatbots-And-Virtual-Assistant-Apps.svg',
      desc: 'Custom digital banking platforms with secure transactions, user-friendly dashboards, and real-time data insights. Built for financial institutions that need reliable, compliant, and scalable digital banking infrastructure.',
    },
    {
      title: 'Mobile Payment App Development',
      icon: '/assets/healthcare/mHealth-App-Development.svg',
      desc: 'Payment applications for peer-to-peer transfers, digital wallets, and QR-based payments. PCI DSS compliant, multi-currency capable, and built to handle high transaction volumes without performance degradation.',
    },
    {
      title: 'Lending and Credit Platforms',
      icon: '/assets/healthcare/Electronic-Health-Record-Software.svg',
      desc: 'AI-powered credit scoring and automated loan approval systems that reduce manual processing and deliver faster, data-validated lending experiences. Built for banks and fintech startups modernising their lending operations.',
    },
    {
      title: 'Investment and Wealth Management Apps',
      icon: '/assets/healthcare/Telemedicine-App-Development.svg',
      desc: 'Investment platforms with personalised dashboards, real-time market data, and automated portfolio insights. Built for users who need clarity and control over their financial decisions.',
    },
    {
      title: 'Insurtech App Development',
      icon: '/assets/healthcare/Laboratory-Information-Management-Systems.svg',
      desc: 'Insurance applications that simplify policy management, claims processing, and renewals. Built for speed, transparency, and a smoother customer journey from application to settlement.',
    },
    {
      title: 'Blockchain-Based Fintech Solutions',
      icon: '/assets/healthcare/Pharmacy-Management-App.svg',
      desc: 'Blockchain infrastructure for DeFi, international money transfers, and smart contract integration. Built for financial use cases where transparency, speed, and immutable transaction records are non-negotiable.',
    },
    {
      title: 'RegTech App Development',
      icon: '/assets/healthcare/serivces6.svg',
      desc: 'Compliance and regulatory reporting solutions that monitor transactions, detect anomalies, and ensure ongoing regulatory alignment. Built for financial institutions managing complex and evolving compliance requirements.',
    },
    {
      title: 'Wealth Management App Development',
      icon: '/assets/healthcare/Wearable-Health-Tech-Integration.svg',
      desc: 'Mobile wealth management applications with portfolio monitoring, market analysis, and AI-powered investment suggestions. Built for users who need intelligent, accessible financial guidance.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Fintech App Development Services</span>{' '}
            Every Financial Product Category
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Custom fintech applications for startups, banks, and financial enterprises across every segment of digital finance.
          </p>
        </div>

        {/* 4x2 Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#202020] rounded-[20px] p-7 flex flex-col justify-start border border-[#2B2B2B] hover:border-[#00CE44]/60 transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 flex items-center justify-start mb-5">
                <img
                  src={srv.icon}
                  alt={srv.title}
                  className="max-h-12 max-w-12 object-contain select-none"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-bold text-[#00CE44] tracking-tight leading-snug mb-3">
                {srv.title}
              </h3>

              <p className="text-white/85 text-sm leading-relaxed font-normal">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
