import { Link } from 'react-router-dom'

const SERVICES = [
  {
    title: 'IoT Development Consultation',
    icon: '/assets/iot-app/services-page-sec7-img1.webp',
    desc: 'Our IoT development consulting services help you validate your architecture, suitable hardware, cloud stack, and a scalable roadmap. From device strategy to data pipelines and integration planning, we ensure that IoT solutions are technically aligned with your business needs. Let’s build a clear future-ready IoT strategy that moves your project forward.',
  },
  {
    title: 'IoT Prototyping & Design',
    icon: '/assets/iot-app/services-page-sec7-img2.webp',
    desc: 'Our team develops Internet of Things (IoT) system prototypes by embedding sensor signals, microcontrollers, and printed circuit boards (PCBs) with firmware for hardware testing and firmware functionalities. Every prototype ensures scalability and production readiness.',
  },
  {
    title: 'Embedded & Firmware Development',
    icon: '/assets/iot-app/services-page-sec7-img3.webp',
    desc: 'We build firmware and embedded systems for IoT devices with optimized microcontroller programming, sensor data processing, connectivity, and edge logic. Our experts deliver secure, reliable, and updatable firmware with real-time performance and seamless cloud integration. Let us elevate your IoT devices with fast, secure, and high-performance firmware.',
  },
  {
    title: 'IoT Dashboard Development',
    icon: '/assets/iot-app/services-page-sec7-img4.webp',
    desc: "Our IoT dashboards provide real-time data and device control, where our ML models perform predictive maintenance and anomaly detection. We composed dashboards' architecture with React, cloud, supporting backend for real-time IoT data flow from AWS, Azure, and Google Cloud IoT solutions (e.g., Pub/Sub, IoT pipelines). All connected devices through our dashboards are provided with complete visibility and actionable insights.",
  },
  {
    title: 'Mobile Applications for IoT-Connected Devices',
    icon: '/assets/iot-app/services-page-sec7-img5.webp',
    desc: (
      <>
        Our team creates{' '}
        <Link
          to="/mobile-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile applications
        </Link>{' '}
        to link the Internet of Things (IoT) devices with real-time monitoring, controlling, and data visualization. We create these applications on both{' '}
        <Link
          to="/ios-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          iOS
        </Link>{' '}
        and{' '}
        <Link
          to="/android-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          Android
        </Link>{' '}
        platforms and merge IoT with cloud infrastructures, device APIs, and analytics for a reliable and high-performing user experience.
      </>
    ),
  },
  {
    title: 'IoT QA & Testing',
    icon: '/assets/iot-app/services-page-sec7-img6.webp',
    desc: 'The Internet of Things (IoT) guarantees end-to-end secure solutions with the highest quality, validating firmware, hardware, cloud, and mobile applications using both automated and manual tests, and the data accuracy, device compatibility, and systems deployment. The safer your system, the stronger your IoT performance.',
  },
]

export default function IotServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0c0f] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Innovative{' '}
            <span className="text-[#00CE44]">IoT Development Services</span>{' '}
            for Connected Solutions
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-3xl mx-auto">
            Accelerate your growth with our leading IoT development services for connected devices. Let’s build your IoT vision and make a tangible impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="p-7 sm:p-8 rounded-[20px] bg-[#16181d] border border-white/10 hover:border-[#00CE44]/60 transition-all duration-300 flex flex-col justify-start text-left h-full"
            >
              <div className="w-12 h-12 p-0 bg-transparent border-0 mb-6 flex items-center justify-start shrink-0">
                <img
                  src={svc.icon}
                  alt={svc.title}
                  className="w-full h-full object-contain select-none p-0 border-0 bg-transparent"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-[#00CE44] mb-3 leading-snug">
                {svc.title}
              </h3>
              <p className="text-white/85 text-[14.5px] sm:text-[15px] leading-relaxed font-normal">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
