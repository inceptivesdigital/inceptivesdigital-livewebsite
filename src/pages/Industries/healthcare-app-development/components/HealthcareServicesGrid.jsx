import { Link } from 'react-router-dom'

export default function HealthcareServicesGrid() {
  const services = [
    {
      title: 'AI Chatbots and Virtual Assistant Apps',
      icon: '/assets/healthcare/Al-Chatbots-And-Virtual-Assistant-Apps.svg',
      desc: 'AI-powered conversational systems that automate appointment scheduling, answer patient queries, send medication reminders, and provide round-the-clock support. Built to reduce administrative workload without reducing care quality.',
      link: null,
    },
    {
      title: 'mHealth App Development',
      icon: '/assets/healthcare/mHealth-App-Development.svg',
      desc: 'Mobile healthcare applications for chronic care management, remote consultations, health tracking, and on-demand virtual doctor access. Built with HIPAA-compliant video streaming and secure patient data handling.',
      link: null,
    },
    {
      title: 'Electronic Health Record Software',
      icon: '/assets/healthcare/Electronic-Health-Record-Software.svg',
      desc: 'Secure EHR systems that organise patient records, enable controlled data sharing, and give healthcare providers a clear, navigable view of patient history. Built for clinical accuracy and regulatory compliance.',
      link: null,
    },
    {
      title: 'Telemedicine App Development',
      icon: '/assets/healthcare/Telemedicine-App-Development.svg',
      desc: 'Virtual consultation platforms with secure video calls, AI-assisted triage, appointment scheduling, and integrated patient management. Built for healthcare providers who need to deliver remote care without compromising clinical standards.',
      link: '/blog/telemedicine-app-development',
    },
    {
      title: 'Laboratory Information Management Systems',
      icon: '/assets/healthcare/Laboratory-Information-Management-Systems.svg',
      desc: 'Custom LIMS solutions built around the specific size and workflow requirements of the laboratory. Comprehensive administration, sample tracking, and results management built for operational precision.',
      link: null,
    },
    {
      title: 'Pharmacy Management App Development',
      icon: '/assets/healthcare/Pharmacy-Management-App.svg',
      desc: 'Pharmacy management systems for inventory control, prescription handling, and sales tracking. Built for pharmacies of every size. Existing systems upgraded without disrupting current operations.',
      link: null,
    },
    {
      title: 'HIPAA-Compliant App Development',
      icon: '/assets/healthcare/serivces6.svg',
      desc: 'Every application we build meets the required regulatory compliance standards from the architecture stage. Not added as an afterthought. Built-in from day one.',
      link: null,
    },
    {
      title: 'Wearable Health Tech Integration',
      icon: '/assets/healthcare/Wearable-Health-Tech-Integration.svg',
      desc: 'Applications that integrate with wearable devices to track vitals, monitor health patterns, and deliver real-time data to healthcare providers. Built for continuous patient monitoring without manual data entry.',
      link: null,
    },
    {
      title: 'Custom Healthcare Software Development',
      icon: '/assets/healthcare/serivces6.svg',
      desc: 'Bespoke healthcare software built around the specific requirements of patients, providers, and healthcare organisations. No off-the-shelf templates. No generic solutions dressed up as custom builds.',
      link: '/custom-software-development',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Healthcare App Development Services</span>{' '}
            Built Around Clinical Workflows
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Custom healthcare applications designed for the specific operational context of hospitals, clinics, and health startups.
          </p>
        </div>

        {/* 9 Services Grid (3x3) matching WordPress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#202020] rounded-[20px] p-7 sm:p-8 flex flex-col justify-start border border-[#2B2B2B] hover:border-[#00CE44]/60 transition-all duration-300 text-left group"
            >
              {/* WordPress Top Icon */}
              <div className="w-12 h-12 flex items-center justify-start mb-5">
                <img
                  src={srv.icon}
                  alt={srv.title}
                  className="max-h-12 max-w-12 object-contain select-none"
                  loading="lazy"
                />
              </div>

              {/* Green H3 Title (Clickable if linked) */}
              <h3 className="text-xl sm:text-[22px] font-bold text-[#00CE44] tracking-tight leading-snug mb-3">
                {srv.link ? (
                  <Link to={srv.link} className="hover:underline">
                    {srv.title}
                  </Link>
                ) : (
                  srv.title
                )}
              </h3>

              {/* Description */}
              <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed font-normal">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
