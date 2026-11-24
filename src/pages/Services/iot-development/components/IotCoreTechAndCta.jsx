import { Link } from 'react-router-dom'
import { Radio, Cloud, BarChart3, BrainCircuit, ShieldCheck, Container } from 'lucide-react'

const CORE_TECH = [
  {
    title: 'IoT Communication Protocols',
    icon: Radio,
    desc: 'We deliver fast and reliable device-to-cloud communication by using protocols like MQTT, CoAP, and HTTP/HTTPS. These protocols ensure stable data transfer and secure communication, keeping your whole IoT ecosystem synchronized in real-time across devices and cloud platforms.',
  },
  {
    title: 'Edge & Cloud Platforms',
    icon: Cloud,
    desc: 'Our IoT solutions apply edge computing structures for local data processing with scalable cloud platforms like AWS IoT, Azure IoT, and Google Cloud IoT services. We use technologies that bring highly efficient management of devices with high performance, real-time analysis, and large data streams. Our infrastructure is both scalable and reliable, which empowers your IoT ecosystem.',
  },
  {
    title: 'Data Analytics & Visualization Tools',
    icon: BarChart3,
    desc: 'From data collection to visualization, our IoT analytics solutions cover the entire analytics pipeline by leveraging the combination of tools like InfluxDB, Grafana, Node-RED, and Kibana with dynamic dashboards and convert raw IoT data into actionable insights to facilitate smarter, data-driven decision-making.',
  },
  {
    title: 'AI & Machine Learning Integration',
    icon: BrainCircuit,
    desc: (
      <>
        We transform the IoT network into a smart, self-evolving system. Our{' '}
        <Link
          to="/ai-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          AI
        </Link>{' '}
        and{' '}
        <Link
          to="/machine-learning-development-services"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          ML models
        </Link>{' '}
        enable predictive analysis, anomaly detection, and automatic decision-making to improve operations, reduce resource use, and allow devices to adapt smartly.
      </>
    ),
  },
  {
    title: 'Security & Blockchain Tools',
    icon: ShieldCheck,
    desc: (
      <>
        Our IoT solutions are integrated at every stage, including the encryption of firmware and networks, and cloud compliance. We also utilize{' '}
        <Link
          to="/blockchain-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          blockchain technology
        </Link>{' '}
        for data integrity, secure supply chain tracking, and smart contract execution.
      </>
    ),
  },
  {
    title: 'Development & Deployment Tools',
    icon: Container,
    desc: (
      <>
        We streamline IoT development and deployment using tools like Docker, Kubernetes, and CI/CD pipelines. We leverage these frameworks to boost{' '}
        <Link
          to="/interactive-prototyping"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          rapid prototyping
        </Link>
        , automated testing, and smooth updates to make IoT solutions scalable, maintainable, and reliable, while keeping your IoT systems secure, updated, and future-proof.
      </>
    ),
  },
]

export default function IotCoreTechAndCta() {
  return (
    <>
      {/* Core Technologies Driving Our IoT App Development Services */}
      <section
        className="relative py-16 sm:py-24 bg-[#0b0c0f] text-white overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/iot-app/ios-page-sec-10-bg.webp")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              Core Technologies Driving Our{' '}
              <span className="text-[#00CE44]">IoT App Development Services</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed max-w-3xl mx-auto">
              By leveraging technologies like MQTT, CoAP, and HTTP/HTTPS, we offer IoT app development services for the smooth, secure, and low-latency connection of devices to the cloud that drives business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
            {CORE_TECH.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group p-7 sm:p-8 rounded-[20px] bg-[#16181e]/95 border border-white/10 hover:border-[#00CE44]/60 transition-colors flex flex-col justify-start text-left h-full"
                >
                  <div className="w-12 h-12 p-0 bg-transparent border-0 flex items-center justify-start mb-5 shrink-0">
                    <Icon className="w-full h-full text-[#00CE44]" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fuel your IoT vision Full-Width CTA Section */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-y border-[#00CE44]/20"
        style={{
          background:
            'radial-gradient(circle at 82% 50%, rgba(0, 206, 68, 0.18) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-radial-gradient(circle at 80% 100%, transparent 0, transparent 18px, rgba(0, 206, 68, 0.18) 19px, transparent 20px)',
          }}
        />

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
                Fuel your IoT vision with a{' '}
                <span className="text-[#00CE44]">trusted partner</span>
              </h2>
              <p className="text-white/90 text-[15px] sm:text-[17px] leading-relaxed mb-7 max-w-xl">
                Kickstart your project with a secure, scalable, and fully optimized IoT architecture.
              </p>
              <a
                href="#contact"
                className="getintouch inline-flex items-center justify-center px-10 py-3.5 rounded-[4px] bg-[#00CE44] hover:bg-[#00b83d] text-black font-bold text-sm sm:text-base transition-colors border-0 shadow-none"
              >
                Get a Free Quote
              </a>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src="/assets/iot-app/ios-page-sec-11-img.webp"
                alt="Fuel your IoT vision with a trusted partner"
                className="w-full max-w-[540px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
