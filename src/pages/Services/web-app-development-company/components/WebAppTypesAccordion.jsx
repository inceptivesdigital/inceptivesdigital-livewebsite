import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const APP_TYPES = [
  {
    num: '(01)',
    title: 'Enterprise Web Applications',
    desc: 'Enterprise systems often depend on existing software that cannot simply be replaced. We build enterprise web applications that connect ERP and CRM platforms, giving departments secure access to shared data without disrupting daily operations.',
    types: [
      'ERP Systems',
      'Enterprise CRM',
      'Document Management Systems',
      'Employee Management Platforms',
      'Workflow Automation Software',
      'Financial Management Applications',
    ],
  },
  {
    num: '(02)',
    title: 'Web Portals',
    desc: 'Give customers, employees, and partners secure access to the information they need. Our custom web portals connect user accounts with business systems through dedicated dashboards and role-based permissions.',
    types: [
      'Customer Self-Service Portals',
      'Employee Portals',
      'Vendor Management Portals',
      'Partner Portals',
      'Patient Portals',
    ],
  },
  {
    num: '(03)',
    title: 'Customer-Facing Web Applications',
    desc: 'Customers can book services and manage accounts directly through a dedicated web application. We connect responsive interfaces with backend systems to handle these interactions without unnecessary steps or manual assistance.',
    types: [
      'Online Booking Applications',
      'Customer Account Platforms',
      'Membership Applications',
      'Online Service Platforms',
    ],
  },
  {
    num: '(04)',
    title: 'Business Operations and Management Applications',
    desc: 'Disconnected tools make workforce management and daily reporting harder than necessary. Custom business web applications bring these activities into one platform, giving managers direct access to operational information.',
    types: [
      'Workforce Management Systems',
      'Inventory Management Software',
      'Operations Dashboards',
      'Business Process Management Platforms',
      'Resource Scheduling Applications',
      'Internal Reporting Systems',
    ],
  },
  {
    num: '(05)',
    title: 'eCommerce and Marketplace Applications',
    desc: 'Marketplaces need reliable systems for buyers and sellers to complete transactions. Our eCommerce web app development connects payment processing with order management, giving businesses control over their marketplace operations.',
    types: [
      'B2B eCommerce Platforms',
      'Multi-Vendor Marketplaces',
      'Direct-to-Consumer Applications',
      'Subscription Commerce Platforms',
      'Marketplace Management Systems',
    ],
  },
  {
    num: '(06)',
    title: 'SaaS Applications',
    desc: 'A SaaS product needs to serve multiple customers without mixing their accounts or data. We engineer SaaS web applications with multi-tenant architecture and subscription billing, allowing businesses to manage customer accounts within one platform.',
    types: [
      'Multi-Tenant SaaS Platforms',
      'Subscription Management Software',
      'Cloud-Based Business Applications',
      'SaaS Administration Dashboards',
    ],
  },
  {
    num: '(07)',
    title: 'AI-Powered Web Applications',
    desc: 'AI-powered web applications can handle document analysis and information-heavy workflows that require more than standard automation. We integrate AI models with business data to deliver relevant assistance within the application.',
    types: [
      'AI Document Processing Platforms',
      'AI Business Assistants',
      'Intelligent Workflow Automation Systems',
      'AI Analytics Dashboards',
      'AI Knowledge Management Applications',
    ],
  },
]

export default function WebAppTypesAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-[#000000] text-white border-b border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
              Types of Custom Web Applications We Build for{' '}
              <span className="text-[#00CE44]">Different Business Demands</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-[1.75] font-normal">
              From enterprise systems to SaaS platforms, every web application serves a different purpose. Inceptives Digital develops custom web applications around the way businesses operate, with the architecture and functionality each product needs.
            </p>
          </div>

          {/* Right Expandable Numbered List */}
          <div className="lg:col-span-7 border-t border-white/15">
            {APP_TYPES.map((item, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={item.num} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-5 sm:gap-7">
                      <span
                        className={`text-sm sm:text-base font-mono font-semibold transition-colors ${
                          isOpen ? 'text-[#00CE44]' : 'text-white/60 group-hover:text-[#00CE44]'
                        }`}
                      >
                        {item.num}
                      </span>
                      <h3
                        className={`text-lg sm:text-xl font-bold transition-colors ${
                          isOpen ? 'text-[#00CE44]' : 'text-white group-hover:text-[#00CE44]'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-white/70 group-hover:text-[#00CE44] shrink-0 transition-colors">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-7 pl-0 sm:pl-14 pr-2">
                      <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed mb-5">
                        {item.desc}
                      </p>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#00CE44] mb-3">
                        Application Types
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {item.types.map((typeName) => (
                          <span
                            key={typeName}
                            className="px-3.5 py-1.5 rounded-lg bg-[#18191d] border border-white/10 text-white/90 text-xs sm:text-[13px] font-medium"
                          >
                            {typeName}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
