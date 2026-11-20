import { Link } from 'react-router-dom'

export default function HealthcareWhyChooseUs() {
  const differentiators = [
    {
      title: 'Clinical Domain Knowledge',
      desc: 'Healthcare app developers and consultants with real experience building for hospitals, clinics, and health startups. Domain knowledge is applied before architecture decisions are made.',
      link: null,
    },
    {
      title: 'Compliance-First Architecture',
      desc: 'HIPAA, GDPR, PHIPA, and HITECH are built into the system before development begins. Every data flow, access control, and audit trail is designed around regulatory requirements from day one.',
      link: null,
    },
    {
      title: 'Interoperable by Design',
      desc: 'HL7 and FHIR standards are built into every application. EHR systems, lab platforms, pharmacy systems, and wearable devices communicate without custom workarounds or manual data bridges.',
      link: null,
    },
    {
      title: 'AI-Powered Clinical Intelligence',
      desc: 'Predictive analytics, AI-assisted triage, and automated administrative workflows are built into platforms where clinical teams need faster, more accurate decisions at scale.',
      link: null,
    },
    {
      title: 'IoMT Integration',
      desc: 'Patient-worn devices and remote monitoring systems are connected for continuous real-time data exchange. Health metrics delivered to clinical teams without manual handling at every step.',
      link: '/blog/iot-in-healthcare-applications-benefits-and-future-trends',
    },
    {
      title: 'Production-Grade Security',
      desc: 'End-to-end encryption, role-based access control, and audit logging are built into every healthcare application. Patient data is protected across every platform and every data exchange.',
      link: null,
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            What Sets Our{' '}
            <Link
              to="/blog/healthcare-mobile-app-development-guide"
              className="text-[#00CE44] hover:underline"
            >
              Healthcare App Development
            </Link>{' '}
            Apart
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Healthcare applications fail when studios treat compliance as a checklist and clinical workflows as an afterthought. We build differently.
          </p>
        </div>

        {/* 3x2 Dark Grey Rounded Cards matching Screenshot 8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="bg-[#2b2b2b] rounded-[14px] p-7 sm:p-8 flex flex-col justify-start border border-white/10 hover:border-[#00CE44]/60 transition-colors duration-200 text-left"
            >
              <h3 className="text-xl sm:text-[22px] font-bold text-[#00CE44] tracking-tight mb-3">
                {diff.link ? (
                  <Link to={diff.link} className="hover:underline">
                    {diff.title}
                  </Link>
                ) : (
                  diff.title
                )}
              </h3>
              <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed font-normal">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
