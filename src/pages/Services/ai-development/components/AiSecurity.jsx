import { Check } from 'lucide-react'

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
      icon: '/assets/ai-development/Layer-1-5.png',
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
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            How Our AI Development Company <span className="text-[#00CE44]">Protects Your Data and Systems</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Security and compliance are architectural decisions made on day one, not added after deployment.
          </p>
        </div>

        {/* 4 Cards Grid with Clean Full Fill Icons (Zero borders, zero background, zero padding on icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {securityFeatures.map((sec, idx) => (
            <div
              key={idx}
              className="bg-[#121212] hover:bg-[#161616] border border-white/[0.08] hover:border-[#00CE44]/30 rounded-3xl p-8 sm:p-10 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Clean Full Fill Icon or Badges */}
                <div className="flex items-center gap-4 mb-6">
                  {sec.icon && (
                    <div className="w-12 h-12 flex items-center justify-start shrink-0">
                      <img
                        src={sec.icon}
                        alt={sec.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  {sec.badges && (
                    <div className="flex items-center gap-3 flex-wrap">
                      {sec.badges.map((badge, bIdx) => (
                        <div key={bIdx} className="h-10 flex items-center">
                          <img src={badge} alt="Compliance Badge" className="h-8 w-auto object-contain" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-6 group-hover:text-[#00CE44] transition-colors tracking-tight">
                  {sec.title}
                </h3>

                <ul className="space-y-3">
                  {sec.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                      <Check className="w-4 h-4 text-[#00CE44] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
