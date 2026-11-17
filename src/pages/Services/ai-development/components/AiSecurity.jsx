export default function AiSecurity() {
  const securityFeatures = [
    {
      title: 'Data Encryption and Secure API Communication',
      icon: '/assets/ai-development/Group-2.png',
      bullets: [
        'End-to-end encryption for data in transit and at rest',
        'Encrypted storage for datasets, models, and embeddings',
        'Secure API communication using industry-standard protocols',
        'Key management aligned with AWS, Google Cloud, and Azure security standards',
      ],
    },
    {
      title: 'SOC 2 and ISO 27001 Readiness',
      badges: [
        '/assets/ai-development/Layer-1-5.png',
        '/assets/ai-development/Layer-2-6.png',
      ],
      bullets: [
        'Security controls aligned with SOC 2 Type I and Type II frameworks',
        'ISO 27001-aligned development and delivery practices',
        'Role-based access control and audit logging on all systems',
        'Secure SDLC practices across every engagement',
        'Infrastructure monitoring and compliance reporting',
      ],
    },
    {
      title: 'GDPR, CCPA, and HIPAA Compliance',
      badges: [
        '/assets/ai-development/gdpr-compliant.3xzjfx-ievd31-1.png',
        '/assets/ai-development/CCPA_logo-1.png',
        '/assets/ai-development/360_F_1944285687_obuABlhdRF6OojpUsv8qKwKmviekMh3p-1.png',
      ],
      bullets: [
        'Privacy-by-design architecture for all AI systems',
        'Data handling processes aligned with GDPR, CCPA, and HIPAA',
        'Personal and sensitive data minimisation by default',
        'Right-to-access and right-to-delete mechanisms built in where required',
        'Consent-based data processing for consumer-facing AI products',
      ],
    },
    {
      title: 'Private and On-Premise Deployment',
      icon: '/assets/ai-development/network-storage-1.png',
      bullets: [
        'Dedicated model instances for sensitive enterprise workloads',
        'No shared inference layer for regulated or confidential data',
        'Full on-premise deployment for high-security environments',
        'Air-gapped infrastructure available for regulated industries',
        'Private cloud and VPC-based deployment options',
      ],
    },
  ]

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight mb-4 leading-tight">
            How Our AI Development Company <span className="text-[#00CE44]">Protects Your Data and Systems</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-[17px] max-w-3xl mx-auto leading-relaxed">
            Security is not a feature we add before delivery. It is an architectural decision we make before development begins.
          </p>
        </div>

        {/* 4 Cards in 1 Row on Desktop (1 row 4 columns matching media_1794895103410_a630b6bf.jpg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full">
          {securityFeatures.map((sec, idx) => (
            <div
              key={idx}
              className="bg-[#121214] border border-white/[0.08] hover:border-[#00CE44]/30 rounded-2xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-start text-left"
            >
              {/* Header Icon / Badges */}
              <div className="h-12 flex items-center mb-5">
                {sec.icon && (
                  <img
                    src={sec.icon}
                    alt={sec.title}
                    className="h-10 sm:h-11 w-auto object-contain select-none"
                    loading="lazy"
                  />
                )}
                {sec.badges && (
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {sec.badges.map((badge, bIdx) => (
                      <img
                        key={bIdx}
                        src={badge}
                        alt="Security Compliance Badge"
                        className="h-9 sm:h-10 w-auto object-contain select-none"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Title in Green matching screenshot */}
              <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-[#00CE44] mb-4 tracking-tight leading-snug">
                {sec.title}
              </h3>

              {/* Bullets with green dots */}
              <ul className="space-y-2.5 mt-auto">
                {sec.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0 mt-1.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
