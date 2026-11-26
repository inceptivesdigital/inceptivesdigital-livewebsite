import { Link } from 'react-router-dom'

export default function DubaiComplianceSecurity() {
  const cards = [
    {
      title: 'UAE & Dubai Data Protection',
      image: '/assets/locations/dubai/dubai-compliance-privacy.jpg',
      items: [
        'UAE Personal Data Protection Law (PDPL)',
        'DIFC Data Protection Law No. 5 of 2020',
        'Dubai Data Law No. 26 of 2015',
        'Cross-Border Data Transfer Requirements',
        'Privacy by Design & Data Protection Controls',
      ],
    },
    {
      title: 'Fintech & Payment Compliance',
      image: '/assets/locations/dubai/dubai-compliance-fintech.jpg',
      items: [
        'Central Bank of the UAE (CBUAE) Regulations',
        'Retail Payment Services and Card Schemes Regulation',
        'Payment Token Services Regulation',
        'PCI DSS Payment Security Standards',
        'Anti-Money Laundering (AML) & KYC Requirements',
      ],
    },
    {
      title: 'Healthcare & Patient Data',
      image: '/assets/locations/dubai/dubai-compliance-healthcare.jpg',
      items: [
        'UAE Federal Health ICT Law No. 2 of 2019',
        'Dubai Health Authority (DHA) Requirements',
        'NABIDH Health Information Exchange Standards',
        'UAE Healthcare Data Residency Requirements',
        'Healthcare Data Security & Patient Privacy Controls',
      ],
    },
    {
      title: 'Application & Cybersecurity',
      image: '/assets/locations/dubai/dubai-compliance-cybersecurity.jpg',
      items: [
        'Dubai Electronic Security Center (DESC) Requirements',
        'Dubai Information Security Regulation (ISR)',
        'OWASP Mobile Application Security Verification Standard (MASVS)',
        'ISO/IEC 27001 Information Security Standard',
        'Mobile Application Security Testing & Secure APIs',
      ],
    },
    {
      title: 'Government & Digital Accessibility',
      image: '/assets/locations/dubai/dubai-compliance-gov.jpg',
      items: [
        'UAE National Digital Accessibility Policy',
        'Web Content Accessibility Guidelines (WCAG 2.2 AA)',
        'UAE PASS Digital Identity Integration Requirements',
        'UAE Electronic Transactions & Trust Services Law',
        'Apple App Store & Google Play Compliance Requirements',
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading matching User Screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            UAE Mobile App Compliance, Security{' '}
            <span className="text-[#00CE44]">&amp; Regulatory Standards</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-3xl mx-auto">
            Mobile app development in Dubai requires attention to applicable UAE privacy laws, industry regulations, and cybersecurity standards. Inceptives Digital considers these requirements during development, following{' '}
            <Link
              to="/blog/mobile-app-security-best-practices"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              app security best practices
            </Link>
            , to support secure mobile applications for businesses across the UAE.
          </p>
        </div>

        {/* 5 Cards Row matching User Screenshot: AI image on top, centered text, zero shadow, zero hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#0e121d] rounded-2xl p-4 sm:p-5 flex flex-col justify-start text-center border border-white/5 shadow-none"
            >
              {/* AI Image on Top */}
              <div className="w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-4 shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover select-none"
                  loading="lazy"
                />
              </div>

              {/* Card Title: Centered */}
              <h4 className="text-sm sm:text-[15px] font-bold text-white mb-3 text-center leading-snug">
                {card.title}
              </h4>

              {/* Items List: Centered */}
              <ul className="text-slate-300 text-xs sm:text-[12.5px] space-y-1.5 text-center leading-relaxed font-normal">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
