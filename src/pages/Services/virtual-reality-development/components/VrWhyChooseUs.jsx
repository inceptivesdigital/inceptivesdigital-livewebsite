import { Link } from 'react-router-dom'

const REASONS = [
  {
    title: 'Proven VR Development Expertise',
    icon: '/assets/vr-app/seo-page-sec7-img1.webp',
    desc: 'Our team responsible for VR development comprises specialists who are well-versed in all the major VR frameworks and the most advanced 3D engines like Unity, Unreal Engine, Oculus SDK, and OpenXR. The possession of this technical skill enables us to create high-quality virtual reality applications that are compatible with all headsets and platforms without compromising on security, stability, and immersive user experience.',
  },
  {
    title: 'Cross-Industry Experience',
    icon: '/assets/vr-app/seo-page-sec7-img2.webp',
    desc: 'We have provided VR solutions for multiple industries, such as healthcare, education, real estate, automotive, gaming, and enterprise training. Our profound knowledge of industry needs and user habits is reflected in each project and guarantees that the VR experiences we develop are not only captivating but also powerful in achieving the goals set by the businesses.',
  },
  {
    title: 'Focus on Real-World Impact',
    icon: '/assets/vr-app/seo-page-sec7-img3.webp',
    desc: "We never compromise on creating VR applications with a specific reason behind their existence and not for mere gimmicks. Immersive VR technologies, which incorporate sophisticated spatial computing, life-like physics simulation, and user-friendly design, lead to significant differences, smoothing businesses' communication and providing measurable results through the latter engagement.",
  },
  {
    title: 'Integration with Emerging Technologies',
    icon: '/assets/vr-app/seo-page-sec7-img4.webp',
    desc: (
      <>
        We blend VR with AI, IoT, and{' '}
        <Link
          to="/custom-software-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          custom software development services
        </Link>{' '}
        to provide applications that are already prepared for the future. The combination of these technologies enables advanced analytics, user personalization, and dynamic environments that enhance both participant engagement and effective operation.
      </>
    ),
  },
  {
    title: 'Rigorous Testing and Optimization',
    icon: '/assets/vr-app/seo-page-sec7-img5.webp',
    desc: 'Quality is the main feature of our VR development process, which can be seen in every single stage. The applications undergo an exhaustive testing and verification process, measuring latency, tracking accuracy, cross-platform performance, and consistency of user experience. This procedure assures that the virtual reality experiences are always top-notch and trustworthy.',
  },
  {
    title: 'Global Delivery, Local Understanding',
    icon: '/assets/vr-app/seo-page-sec7-img6.webp',
    desc: 'Having clients in the USA, Europe, and the Middle East, we merge worldwide best practices with local knowledge. Our VR development solutions are specifically designed to fit your market, audience, and future business objectives, thus guaranteeing the greatest effect and acceptance.',
  },
]

export default function VrWhyChooseUs() {
  return (
    <section
      className="relative py-16 sm:py-24 bg-[#08090c] text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/vr-app/seo-page-sec4-bg.webp")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
            Why Leading Brands Trust Our{' '}
            <span className="text-[#00CE44]">Virtual Reality Development Services?</span>
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
