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
        'Privacy by Design & Data Controls',
      ],
    },
    {
      title: 'Fintech & Payment Compliance',
      image: '/assets/locations/dubai/dubai-compliance-fintech.jpg',
      items: [
        'Central Bank of the UAE (CBUAE) Regulations',
        'Retail Payment Services and Card Schemes',
        'Payment Token Services Regulation',
        'PCI DSS Payment Security Standards',
        'AML & KYC Requirements',
      ],
    },
    {
      title: 'Healthcare & Patient Data',
      image: '/assets/locations/dubai/dubai-compliance-healthcare.jpg',
      items: [
        'UAE Federal Health ICT Law No. 2 of 2019',
        'Dubai Health Authority (DHA) Requirements',
        'NABIDH Health Information Exchange',
        'Healthcare Data Residency Requirements',
        'Patient Privacy & Encryption Controls',
      ],
    },
    {
      title: 'Application & Cybersecurity',
      image: '/assets/locations/dubai/dubai-compliance-cybersecurity.jpg',
      items: [
        'Dubai Electronic Security Center (DESC)',
        'Dubai Information Security Regulation (ISR)',
        'OWASP MASVS Verification Standard',
        'ISO/IEC 27001 Information Security',
        'Mobile App Security Testing & Secure APIs',
      ],
    },
    {
      title: 'Government & Digital Accessibility',
      image: '/assets/locations/dubai/dubai-compliance-gov.jpg',
      items: [
        'UAE National Digital Accessibility Policy',
        'Web Content Accessibility Guidelines (WCAG)',
        'UAE PASS Digital Identity Integration',
        'Electronic Transactions & Trust Services Law',
        'Apple App Store & Google Play Standards',
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading matching User Screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-3">
            UAE Mobile App{' '}
            <span className="text-[#00CE44]">Compliance and Security</span>
          </h2>
          <h3 className="text-white/90 text-sm sm:text-base font-semibold mb-3">
            We Protect Your Business Through Secure and Compliant Development
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal max-w-3xl mx-auto">
            Compliance is a core part of how we build apps. From planning and architecture to deployment, our team follows industry-specific regulations and{' '}
            <Link
              to="/blog/mobile-app-security-best-practices"
              className="text-[#00CE44] hover:underline font-medium"
            >
              app security best practices
            </Link>{' '}
            to help businesses launch applications that are secure, compliant, and built for long-term growth across the UAE.
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
