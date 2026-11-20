export default function EducationCapabilities() {
  const capabilities = [
    {
      title: 'Adaptive Learning Engines',
      icon: '/assets/healthcare/Al-Chatbots-And-Virtual-Assistant-Apps.svg',
      desc: 'AI models that customise content delivery, monitor learning behaviour, and adjust difficulty levels in real time. Built for platforms where one-size-fits-all instruction is the problem, not the solution.',
    },
    {
      title: 'High-Performance Architecture',
      icon: '/assets/healthcare/mHealth-App-Development.svg',
      desc: 'Secure, scalable backend systems that handle high concurrent user volumes, deliver content without latency, and support multi-device access without performance degradation.',
    },
    {
      title: 'Immersive Technology Integration',
      icon: '/assets/healthcare/Electronic-Health-Record-Software.svg',
      desc: 'AR, VR, and interactive simulations are built into education platforms where complex concepts require experiential learning rather than passive content consumption.',
    },
    {
      title: 'LMS and Third-Party Compatibility',
      icon: '/assets/healthcare/Telemedicine-App-Development.svg',
      desc: 'Education platforms integrated with existing LMS tools, authentication systems, and cloud services. Built for institutions that need new capabilities without replacing existing infrastructure.',
    },
    {
      title: 'Actionable Learning Analytics',
      icon: '/assets/healthcare/Laboratory-Information-Management-Systems.svg',
      desc: 'Real-time dashboards that give educators and administrators visibility into engagement, progress, and performance trends. Data that informs instruction rather than just reporting it.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Education App Development Capabilities</span>{' '}
            That Go Beyond Content Delivery
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Every capability below exists because learner engagement without measurable outcomes is not a product worth building.
          </p>
        </div>

        {/* Centered 3 + 2 Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#202020] rounded-[20px] p-7 sm:p-8 flex flex-col justify-start border border-[#2B2B2B] hover:border-[#00CE44]/60 transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 flex items-center justify-start mb-5">
                <img
                  src={cap.icon}
                  alt={cap.title}
                  className="max-h-12 max-w-12 object-contain select-none"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl sm:text-[22px] font-bold text-[#00CE44] tracking-tight leading-snug mb-3">
                {cap.title}
              </h3>

              <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed font-normal">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
