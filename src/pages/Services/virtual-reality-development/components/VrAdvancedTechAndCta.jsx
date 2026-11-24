import { BrainCircuit, Cloud, Box, Cpu, ScanEye, Hand } from 'lucide-react'

const EMERGING_TECH = [
  {
    title: 'AI-Enhanced VR Experiences',
    icon: BrainCircuit,
    desc: "The incorporation of artificial intelligence makes it possible for our VR applications to react smartly to the user's activities, mimic real human behaviors, and create lively interactions between the users and the virtual world, thus making the virtual world seem alive and adjusted to the users.",
  },
  {
    title: 'Cloud-Powered VR Infrastructure',
    icon: Cloud,
    desc: 'The integration of cloud platforms, such as AWS and Google Cloud, in our VR setups provides real-time communication, flawless data synchronization, and the ability to increase performance without any limit on devices and locations.',
  },
  {
    title: '3D Modeling & Realistic Rendering',
    icon: Box,
    desc: 'With the assistance of tools like Unity, Unreal Engine, Blender, and Maya, our team creates astonishingly realistic 3D assets, environmental designs to the tiniest detail, and interactive simulations that captivate users in virtual worlds that are very close to reality.',
  },
  {
    title: 'IoT-Connected VR Applications',
    icon: Cpu,
    desc: 'In the case of sectors such as healthcare, manufacturing, and logistics, we combine IoT data streams into VR settings so that they can be seen, operations can be simulated, and real-time information can be provided for interactive 3D decision-making.',
  },
  {
    title: 'Spatial Computing & Motion Tracking',
    icon: ScanEye,
    desc: 'OpenXR, VR SDKs, and sophisticated motion capture systems are among the technologies that allow for accurate and real-time virtual reality experiences through environment mapping, object interaction, and user movement tracking with great fidelity and responsiveness.',
  },
  {
    title: 'Haptics & Physics Simulations',
    icon: Hand,
    desc: 'To bring virtual interactions even closer to reality, our VR applications take advantage of the latest haptic feedback and physics engines. The implementation of realistic object behavior, force feedback, and collision detection adds to the immersion, and it is effective in all areas, such as gaming, training, and enterprise VR solutions.',
  },
]

export default function VrAdvancedTechAndCta() {
  return (
    <>
      {/* Harnessing Emerging Technologies */}
      <section
        className="relative py-16 sm:py-24 bg-[#0b0c0f] text-white overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/vr-app/ios-page-sec-10-bg.webp")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              Harnessing Emerging Technologies in Our{' '}
              <span className="text-[#00CE44]">Virtual Reality Development Services</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed max-w-3xl mx-auto">
              At our VR development company, we build immersive virtual worlds using advanced tools and modern tech. Our virtual reality development services utilize AI, cloud computing, 3D modeling, spatial computing, and physics simulation to create immersive, high-performance, and visually impressive VR experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
            {EMERGING_TECH.map((item) => {
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

      {/* Deliver 2X More Impact Full-Width CTA Section */}
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
                Deliver 2X More Impact With{' '}
                <span className="text-[#00CE44]">Experiences Users Feel, Not Just See</span>
              </h2>
              <p className="text-white/90 text-[15px] sm:text-[17px] leading-relaxed mb-7 max-w-xl">
                Our Virtual Reality Development Services use haptics, motion tracking, and spatial computing to turn digital concepts into sensory, unforgettable realities.
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
                src="/assets/vr-app/ios-page-sec-11-img.webp"
                alt="Deliver 2X More Impact With Virtual Reality Development Services"
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
