export default function FintechFeaturesGrid() {
  const features = [
    {
      title: 'Secure User Authentication',
      icon: '/assets/fintech/face-lock-1.png',
      desc: 'Biometrics, multi-factor authentication, and encrypted login systems are built into every fintech application. User data is protected without compromising the speed and simplicity of the authentication experience.',
    },
    {
      title: 'Real-Time Payments',
      icon: '/assets/fintech/real-time-transfer-1.png',
      desc: 'Transaction processing with full visibility at every stage. Peer-to-peer transfers, merchant payments, and cross-border transactions are executed in seconds without latency or reliability compromise.',
    },
    {
      title: 'Data Encryption and Compliance',
      icon: '/assets/fintech/encryption-1.png',
      desc: 'End-to-end encryption, tokenisation, and PCI DSS, GDPR, and KYC compliance are built into the data architecture from day one. Every transaction and user record is protected by design.',
    },
    {
      title: 'Smart Analytics Dashboards',
      icon: '/assets/fintech/data-analytics-1.png',
      desc: 'Real-time visualisation of spending, savings, and investment performance for users. Business-level dashboards for operational performance, user behaviour, and revenue metrics.',
    },
    {
      title: 'Multi-Currency Support',
      icon: '/assets/fintech/currency-exchange-1.png',
      desc: 'Currency conversion, exchange rate tracking, and international payment processing built for fintech applications operating across multiple markets and currencies.',
    },
    {
      title: 'Push Notifications and Alerts',
      icon: '/assets/fintech/notification-1.png',
      desc: 'Instant transaction alerts, fraud detection notifications, and personalised financial updates delivered in real time. Users stay informed and engaged without opening the application.',
    },
    {
      title: 'API Integrations',
      icon: '/assets/fintech/integration-1.png',
      desc: 'Payment gateways, credit scoring engines, KYC verification systems, and financial data providers are integrated through secure, reliable APIs. Every third-party connection is built for performance and compliance.',
    },
    {
      title: 'AI-Powered Personalisation',
      icon: '/assets/fintech/integration-1.png',
      desc: 'Machine learning models that deliver personalised investment recommendations, spending insights, and behaviour-based financial guidance. Intelligence that improves with every user interaction.',
    },
    {
      title: 'Offline Functionality',
      icon: '/assets/fintech/monitor-1.png',
      desc: 'Core application features accessible in low-connectivity environments. Critical financial functions available without a reliable internet connection.',
    },
    {
      title: 'Chat Support and Virtual Assistance',
      icon: '/assets/fintech/chat-bubble-1.png',
      desc: 'Integrated chat support and AI-driven virtual assistants that help users manage tasks, answer financial queries, and resolve issues without human agent dependency.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            <span className="text-[#00CE44]">Fintech App Development</span> Features Designed Around the Three Non-Negotiables of Digital Finance
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Every feature is designed around trust, speed, and compliance, the three non-negotiables of modern digital finance.
          </p>
        </div>

        {/* 5x2 Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#202020] rounded-[20px] p-6 flex flex-col justify-start border border-[#2B2B2B] hover:border-[#00CE44]/60 transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-white/95 p-2 flex items-center justify-center mb-5">
                <img
                  src={feat.icon}
                  alt={feat.title}
                  className="max-h-8 max-w-8 object-contain select-none"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg font-bold text-[#00CE44] tracking-tight leading-snug mb-2.5">
                {feat.title}
              </h3>

              <p className="text-white/85 text-sm leading-relaxed font-normal">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
