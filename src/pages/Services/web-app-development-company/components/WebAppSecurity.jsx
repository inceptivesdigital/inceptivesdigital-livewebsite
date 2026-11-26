function ShieldFilledIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
    </svg>
  )
}

function DatabaseFilledIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zm0 10c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4zm0 5c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4z" />
    </svg>
  )
}

function LockFilledIcon({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM9 8V6a3 3 0 0 1 6 0v2H9z" />
    </svg>
  )
}

const SECURITY_PILLARS = [
  {
    title: 'Client Security',
    Icon: ShieldFilledIcon,
    items: [
      'Dedicated point of contact, no shared teams',
      'NDA and SLA on every engagement',
      'IP ownership stays with the client, always',
    ],
  },
  {
    title: 'Data Security',
    Icon: DatabaseFilledIcon,
    items: [
      'Compliance mapped to your industry (HIPAA, GDPR, SOC 2)',
      'End-to-end encryption on data in transit and at rest',
      'Access controls scoped by role, not by default',
    ],
  },
  {
    title: 'Application Security',
    Icon: LockFilledIcon,
    items: [
      'Automated and manual testing before every release',
      'Threat modeling built into the architecture phase',
      'Rate limiting and attack detection at the API layer',
    ],
  },
]

export default function WebAppSecurity() {
  return (
    <section className="py-16 sm:py-24 bg-[#0d0e11] text-white border-y border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Security Isn&apos;t a Feature at Inceptives Digital.{' '}
            <span className="text-[#00CE44]">It&apos;s the Foundation</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed max-w-3xl mx-auto">
            Security decisions made after launch are usually the ones that cost the most to fix. Inceptives Digital treats security as part of the architecture from the first sprint, not a checklist run before deployment. Every custom web application we build carries that discipline through design, development, and everything that happens after launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECURITY_PILLARS.map(({ title, Icon, items }) => (
            <div
              key={title}
              className="rounded-[18px] bg-[#16181d] border border-white/10 p-7 sm:p-8 text-left flex flex-col justify-start"
            >
              <div className="mb-5 flex items-center justify-start bg-transparent border-0 p-0">
                <Icon className="w-9 h-9" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-5">
                {title}
              </h3>
              <ul className="space-y-3.5 text-white/85 text-sm sm:text-[15px] leading-relaxed">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>{item}</span>
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
