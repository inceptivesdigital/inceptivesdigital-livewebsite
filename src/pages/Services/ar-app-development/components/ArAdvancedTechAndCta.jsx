import { BrainCircuit, Cloud, Box, Cpu, ScanEye, Layers } from 'lucide-react'

const ADVANCED_ECOSYSTEM = [
  {
    title: 'AI-Driven AR Experiences',
    icon: BrainCircuit,
    desc: 'To provide a dynamic user experience, AI makes it possible to enable AR applications with key techniques such as object recognition, behavioural predictions, and real-time responses.',
  },
  {
    title: 'Cloud-Backed AR Infrastructure',
    icon: Cloud,
    desc: 'We utilize cloud computing capabilities of platforms such as Google Cloud and AWS for our AR solutions to ensure uninterrupted synchronization, live updates, and performance across devices.',
  },
  {
    title: '3D Modeling & Rendering Solutions',
    icon: Box,
    desc: 'With the support of high-tech software like Blender, Unity, and Unreal Engine, we produce true-to-life 3D assets and animations that make products, environments, and ideas extraordinarily vivid.',
  },
  {
    title: 'IoT-Enabled AR Applications',
    icon: Cpu,
    desc: 'We merge AR with IoT to link the virtual and physical worlds. This is very much suited to sectors such as manufacturing, healthcare, and logistics, where the visualization of data in real-time allows for better decision-making.',
  },
  {
    title: 'Spatial Computing & Tracking',
    icon: ScanEye,
    desc: 'Utilizing technologies like SLAM, ARKit, and ARCore, we create AR applications that have a precise understanding of their environment, can accurately track movements, and place virtual objects securely with precision.',
  },
  {
    title: 'Cross-Platform AR Optimization',
    icon: Layers,
    desc: 'Our Augmented Reality applications run equally efficiently and perform well regardless of the chosen platform, be it iOS, Android, or wearable, which guarantees the provision of seamless rendering, high frames per second, and lively interactions in the real world.',
  },
]

export default function ArAdvancedTechAndCta() {
  return (
    <>
      {/* Advanced Tech Ecosystem */}
      <section
        className="relative py-16 sm:py-24 bg-[#0b0c0f] text-white overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/ar-app/ios-page-sec-10-bg.webp")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              The Advanced Tech Ecosystem Driving Our{' '}
              <span className="text-[#00CE44]">AR App Development Services</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed max-w-3xl mx-auto">
              At Inceptives Digital, we use a combination of powerful technologies that connect the real and virtual realms to develop immersive AR applications. Our AR app development services are powered by AI, IoT, Cloud, 3D modeling, and spatial computing in order to provide users with the best augmented experiences that are interactive, high-performing, and visually appealing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
            {ADVANCED_ECOSYSTEM.map((item) => {
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

      {/* Engagement 3X Full-Width CTA Section */}
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
                Increase Customer Engagement by{' '}
                <span className="text-[#00CE44]">3X With Augmented Reality Apps</span>
              </h2>
              <p className="text-white/90 text-[15px] sm:text-[17px] leading-relaxed mb-7 max-w-xl">
                Transform how your users interact with your brand through immersive AR experiences built for retention and ROI.
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
                src="/assets/ar-app/ios-page-sec-11-img.webp"
                alt="Increase Customer Engagement with Augmented Reality Apps"
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
