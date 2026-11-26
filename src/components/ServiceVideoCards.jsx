import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ServiceVideoCards() {
  const cards = [
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      link: '/services',
      icon: '/assets/mobile-appicon.svg',
      desc: 'User expectations define successful mobile experiences. Our mobile app development focuses on intuitive interactions, reliable performance, and scalable architecture across iOS, Android, and cross-platform platforms.'
    },
    {
      id: 'digital-product',
      title: 'Digital Product Development',
      link: '/services',
      icon: '/assets/mobile-appicon2.svg',
      desc: 'Great products require more than code. From early validation to complex digital platforms, our product development approach connects strategy, UX, technology, and business objectives into one focused product journey.'
    },
    {
      id: 'ai-powered',
      title: 'AI-Powered Systems',
      link: '/services',
      icon: '/assets/mobile-appicon3.svg',
      iconAlt: 'AI Development',
      desc: 'AI creates value when it improves how people work, decide, and interact with products. Our AI development approach combines intelligent capabilities, data strategy, and product thinking to create practical AI-powered solutions.'
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0d] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        
        {/* Header Row: Title & Subtitle on Left, CTA Button on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
              We build what your <span className="text-[#00CE44] italic">business</span> runs on
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              Inceptives Digital starts with strategy, design for real users while engineering it for sustainable growth — we stay until the product is right.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-sm sm:text-base tracking-tight transition-all duration-150 active:scale-95 shadow-none cursor-pointer border-0"
            >
              Start My Product Roadmap
            </a>
          </div>
        </div>

        {/* 3-Cards Grid with Zero Border/Shadow and Smooth Content Glide on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <VideoCard key={card.id} card={card} />
          ))}
        </div>

      </div>
    </section>
  )
}

function VideoCard({ card }) {
  const videoRef = useRef(null)
  const [videoActivated, setVideoActivated] = useState(false)

  const handleMouseEnter = () => {
    if (!videoActivated) {
      setVideoActivated(true)
    }
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (
    <Link
      to={card.link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="home-container-sty group relative rounded-[20px] overflow-hidden bg-[#202125] border-0 shadow-none min-h-[440px] sm:min-h-[450px] lg:h-[460px] 2xl:h-[490px] p-6 sm:p-7 lg:p-8 flex flex-col justify-start transition-all duration-500 cursor-pointer"
    >
      {/* Background Holographic Green Laser Video — loaded on first hover so 21+ MB isn't downloaded on initial load */}
      {videoActivated && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        >
          <source src="/assets/home-video-con.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark Subtle Vignette on Hover to ensure text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#202125]/85 via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[1]" />

      {/* Top Icon: Fixed at top left, exactly 20px above the content block on hover */}
      <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-start shrink-0 mb-5">
        <img
          src={card.icon}
          alt={card.iconAlt || card.title}
          loading="lazy"
          decoding="async"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
      </div>

      {/* Content Block (.homecard-bottom):
          - Resting state: Pushed down towards the bottom (translateY 120px - 195px)
          - Hover state: Glides up to translateY(0px), landing EXACTLY 20px below the icon
          - Mobile / Tablet (<= 991px): Sits at translateY(0px) consistently
      */}
      <div className="homecard-bottom relative z-10 flex flex-col transform translate-y-0 max-lg:translate-y-0 lg:translate-y-[120px] xl:translate-y-[140px] 2xl:translate-y-[180px] group-hover:!translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform">
        <h3 className="text-xl sm:text-2xl font-bold text-[#00CE44] leading-tight">
          {card.title}
        </h3>

        <p className="mt-3 text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
          {card.desc}
        </p>
      </div>
    </Link>
  )
}
