import { Link } from 'react-router-dom'

const SERVICES = [
  {
    title: 'VR Game Development',
    icon: '/assets/vr-app/services-page-sec7-img1.webp',
    desc: (
      <>
        Inceptives Digital includes a special{' '}
        <Link
          to="/mobile-game-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile game development
        </Link>{' '}
        team that is highly skilled in creating realistic, thrilling, and interactive games. The game engines employed are Unity, Godot, and Unreal, along with the use of approaches like motion tracking, haptic feedback, and spatial audio, to design the most engaging VR gaming experiences. The games we create are made to perform well on the most widely used VR headsets and consoles, including those of Meta Quest, HTC Vive, and PlayStation VR.
      </>
    ),
  },
  {
    title: 'Enterprise VR Solutions',
    icon: '/assets/vr-app/services-page-sec7-img2.webp',
    desc: 'Our highly sophisticated VR solutions have changed the virtual reality experience for companies in terms of training, collaboration, and innovation. We make the VR platforms needed for employee training, product displaying, and data-based simulations. Using real-time rendering, spatial computing, and 3D modeling, we are able to develop applications that not only fit well within the operational framework but also, eventually, turn out to be less risky than doing things in the real world.',
  },
  {
    title: 'VR Training & Simulation Development',
    icon: '/assets/vr-app/services-page-sec7-img3.webp',
    desc: 'We develop accurate and engaging simulations that mirror real-life situations for practical learning. Our VR solutions are quite varied and cover anything from intricate manufacturing processes to healthcare practice cases. They combine physics-based modeling, motion capture, and analytics tracking to offer both realistic and quantifiable training outcomes.',
  },
  {
    title: 'VR Visualization & Design Solutions',
    icon: '/assets/vr-app/services-page-sec7-img4.webp',
    desc: 'Let your imagination and products come alive in completely immersive surroundings. Our VR visualization services allow customers to walk through the architectural design, product sample, or engineering model with instantaneous modifications and interactive co-working options. With the application of CAD data and photorealistic rendering, we support groups in speeding up the process of making the right design choices.',
  },
  {
    title: 'VR Collaboration & Remote Experience Platforms',
    icon: '/assets/vr-app/services-page-sec7-img5.webp',
    desc: 'The custom multi-user VR platforms that our team created empower various teams to connect, converse, and participate in shared virtual environments. Voice integration, spatial mapping, and real-time synchronization facilitate these environments to simulate the presence and interaction of in-person collaboration, thus bridging the gap between physical and digital workplaces.',
  },
  {
    title: 'Custom VR Application Development',
    icon: '/assets/vr-app/services-page-sec7-img6.webp',
    desc: (
      <>
        Our{' '}
        <Link
          to="/mobile-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app development company
        </Link>{' '}
        provides custom VR applications that are specifically designed according to the needs of your industry and the performance standards you have set. Utilizing the latest SDKs, GPU optimization, and{' '}
        <Link
          to="/cross-platform-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          cross-platform development
        </Link>
        , our professionals make sure that compatibility is achieved among all the major VR hardware ecosystems. Every solution is designed with stability, scalability, and a continuous immersive experience in mind.
      </>
    ),
  },
]

export default function VrServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0c0f] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Design Fully Immersive Experiences with{' '}
            <span className="text-[#00CE44]">Virtual Reality Development</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-3xl mx-auto">
            We offer a range of Virtual Reality development services designed to deliver scalable, highly efficient VR solutions through the perfect fusion of cutting-edge technology, accuracy, and a smooth user experience.
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
