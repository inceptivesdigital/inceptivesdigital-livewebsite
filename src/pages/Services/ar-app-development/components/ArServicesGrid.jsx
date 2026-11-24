import { Link } from 'react-router-dom'

const SERVICES = [
  {
    title: 'AR Game App Development',
    icon: '/assets/ar-app/services-page-sec7-img1.webp',
    desc: (
      <>
        With our AR development and{' '}
        <Link
          to="/mobile-game-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile game development
        </Link>{' '}
        expertise, we develop immersive games that simulate real-world scenarios using 3D modeling, motion detection, and spatial mapping technologies. Our AR developers have delivered games that offer realistic physics, lively user interaction, and the best performance across devices and operating systems.
      </>
    ),
  },
  {
    title: 'Enterprise AR Solutions',
    icon: '/assets/ar-app/services-page-sec7-img2.webp',
    desc: 'We have developed AR-powered training modules, remote assistance tools, and other enterprise-grade solutions to improve productivity and reduce operational costs. Marker-based AR, markerless AR, and object recognition are among the technologies we implemented across the healthcare, manufacturing, logistics, and automotive industries to simplify workflows and improve efficiency.',
  },
  {
    title: 'AR Retail & E-Commerce Solutions',
    icon: '/assets/ar-app/services-page-sec7-img3.webp',
    desc: 'Take online shopping to the next level with our Augmented Reality app development services. We develop AR-integrated retail solutions that provide a real-time visualization of the products, virtual merchandise trials, and 3D models in their environment. Integrating these types of user experience fosters customer trust, conversion, and boosts engagement.',
  },
  {
    title: 'AR Marketing & Brand Experiences',
    icon: '/assets/ar-app/services-page-sec7-img4.webp',
    desc: 'Audiences are captivated by Augmented Reality in interactive campaigns and brand storytelling. We apply a mixture of image recognition, gesture tracking, and location-specific AR development technologies to create remarkable marketing events that increase brand visibility and increase consumer participation.',
  },
  {
    title: 'AR Navigation & Location-Based Apps',
    icon: '/assets/ar-app/services-page-sec7-img5.webp',
    desc: 'We create applications for augmented reality navigation and wayfinding that put directions, points of interest, and interactive guides over real-world surroundings. With GPS integration, SLAM (Simultaneous Localization and Mapping), and spatial anchors, our AR applications enable accurate, context-aware navigation in retail malls, airports, museums, and the outdoors.',
  },
  {
    title: 'Custom AR App Development',
    icon: '/assets/ar-app/services-page-sec7-img6.webp',
    desc: (
      <>
        We create bespoke AR apps that not only meet your business goals but also take your users&rsquo; needs into account. Through a combination of advanced AR SDKs, 3D engines, and{' '}
        <Link
          to="/custom-software-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          custom software development
        </Link>{' '}
        practices, our{' '}
        <Link
          to="/cross-platform-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          cross-platform app development
        </Link>{' '}
        team is able to develop top-notch cross-platform AR experiences that perfectly integrate the artistic side with the technical side of working.
      </>
    ),
  },
]

export default function ArServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0c0f] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            Shape the Future of Interaction with Our{' '}
            <span className="text-[#00CE44]">Augmented Reality App Development Services</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-3xl mx-auto">
            We are a leading AR app development company, trusted by businesses worldwide for our innovative Augmented Reality App Development Services. Let&rsquo;s create experiences that captivate users and transform industries.
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
