import { Link } from 'react-router-dom'

const REASONS = [
  {
    title: 'Proven AR Development Expertise',
    icon: '/assets/ar-app/seo-page-sec7-img1.webp',
    desc: 'Our AR development team has experienced individuals fluent in leading AR development frameworks and 3D engines such as ARCore, ARKit, Vuforia, Unity, and Unreal Engine. These technical experts make it possible to deliver augmented reality applications that are highly secure and perform optimally across devices and platforms.',
  },
  {
    title: 'Cross-Industry Experience',
    icon: '/assets/ar-app/seo-page-sec7-img2.webp',
    desc: (
      <>
        Inceptives Digital has delivered AR solutions that have been applied in various industries, including{' '}
        <Link
          to="/mobile-game-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile game development
        </Link>
        , fitness, education, healthcare, and fintech, thereby transforming engagement and enhancing customer interaction. Each project demonstrates a thorough understanding of the needs of the industry as well as the behavior of the users.
      </>
    ),
  },
  {
    title: 'Focus on Real-World Impact',
    icon: '/assets/ar-app/seo-page-sec7-img3.webp',
    desc: 'The AR applications we have developed are all about intention, not tricks. Combining state-of-the-art spatial computing and user-friendly design, we make it possible for brands to increase interaction, work more efficiently, and have a significant impact on their bottom line through really useful augmented experiences that are measurable and tangible.',
  },
  {
    title: 'Integration with Emerging Technologies',
    icon: '/assets/ar-app/seo-page-sec7-img4.webp',
    desc: (
      <>
        We combine augmented reality with AI, IoT, and{' '}
        <Link
          to="/custom-software-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          custom software development
        </Link>{' '}
        frameworks to develop applications that are ready for the future. The combination of these technologies will provide smart data management, personalized user experiences, and sophisticated interaction layers.
      </>
    ),
  },
  {
    title: 'Rigorous Testing and Optimization',
    icon: '/assets/ar-app/seo-page-sec7-img5.webp',
    desc: 'Quality is a factor at every stage of our AR development process. Each application is subjected to rigorous testing that measures tracking accuracy, latency, UX consistency, cross-platform performance, and so on, thus guaranteeing a high-quality user experience every time.',
  },
  {
    title: 'Global Delivery, Local Understanding',
    icon: '/assets/ar-app/seo-page-sec7-img6.webp',
    desc: "Having customers in the USA, Europe, and the Middle East, we integrate the world's best practices with local knowledge. Each solution is customized by our Augmented Reality app development team to be in harmony with your market, target customers, and overall business goals for the long run.",
  },
]

export default function ArWhyChooseUs() {
  return (
    <section
      className="relative py-16 sm:py-24 bg-[#08090c] text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/ar-app/seo-page-sec4-bg.webp")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
            Why Our AR App Development Company Is{' '}
            <span className="text-[#00CE44]">Trusted by Global Brands?</span>
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
