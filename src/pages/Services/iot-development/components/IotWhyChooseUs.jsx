const REASONS = [
  {
    title: 'Deep IoT Architecture Expertise',
    icon: '/assets/iot-app/seo-page-sec7-img1.webp',
    desc: 'We develop comprehensive Internet of Things (IoT) solutions based on edge computing, cloud integration, real-time data ingestion, and device management. The technology we use ensures outstanding communication among the sensors, gateways, and cloud platforms, and securely transfers the data. We also create strong infrastructures that ensure the scalability and reliability of connected smart systems.',
  },
  {
    title: 'End-to-End IoT Protection',
    icon: '/assets/iot-app/seo-page-sec7-img2.webp',
    desc: 'Our built-in security approach consists of secure firmware, encrypted data streams, and a regulated-compliant cloud. The multi-layered security we create measures threat detection, authentication protocols, and secure updates to ensure security from end-to-end for all IoT deployments.',
  },
  {
    title: 'Flexible IoT Platforms',
    icon: '/assets/iot-app/seo-page-sec7-img3.webp',
    desc: 'We create IoT platforms capable of scaling from pilot to production with modular, maintainable architectures. Our method guarantees future-proof designs that allow integration of additional devices, features, and adaptation to evolving business requirements by developing adaptable solutions that expand with your business.',
  },
  {
    title: 'Custom Industry Solutions',
    icon: '/assets/iot-app/seo-page-sec7-img4.webp',
    desc: 'With experience in creating custom predictive maintenance systems and smart wearables for real-time monitoring, our team devises custom solutions to address the concerns of each industry and provides ROI, operational improvement, and better decision-making.',
  },
  {
    title: 'Transparent QA & Management',
    icon: '/assets/iot-app/seo-page-sec7-img5.webp',
    desc: 'We constantly update you through transparent communication, regular sprint reviews, and strict code quality (including ISO-level processes). Our project management methods facilitate responsible actions, prompt issue detection, and business growth throughout the development lifecycle. We keep the projects with lucidity and dependability.',
  },
  {
    title: 'Ongoing IoT Optimization',
    icon: '/assets/iot-app/seo-page-sec7-img6.webp',
    desc: 'Our experts provide your IoT system with ongoing support, optimization, and updates after the launch to secure the system by providing new technologies, system efficiency, and adapting to market changes. We guarantee your IoT investment will have long-term value and always be ahead of the competition.',
  },
]

export default function IotWhyChooseUs() {
  return (
    <section
      className="relative py-16 sm:py-24 bg-[#08090c] text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/iot-app/seo-page-sec4-bg.webp")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
            Why Businesses Trust Inceptives Digital&rsquo;s{' '}
            <span className="text-[#00CE44]">IoT Development Services?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {REASONS.map((item) => (
            <div
              key={item.title}
              className="p-7 sm:p-8 rounded-[20px] bg-[#16181e]/95 border border-white/10 hover:border-[#00CE44]/60 transition-all duration-300 flex flex-col justify-start text-left h-full"
            >
              <div className="w-12 h-12 p-0 bg-transparent border-0 mb-5 flex items-center justify-start shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain select-none p-0 border-0 bg-transparent"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-[#00CE44] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/85 text-[14.5px] sm:text-[15px] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
