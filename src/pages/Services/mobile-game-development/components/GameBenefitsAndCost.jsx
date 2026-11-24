import { Link } from 'react-router-dom'

const BENEFITS = [
  {
    title: 'Proven Expertise',
    desc: 'Our mobile game developers have years of experience in game design and development, providing high-quality results and cutting-edge solutions for your project.',
  },
  {
    title: 'High-Quality Games',
    desc: 'We employ best practices, ensuring that your gameplay is seamless, graphics are captivating, and the user experience is ultimately excellent.',
  },
  {
    title: 'High-End Technologies',
    desc: 'Our mobile game development company utilizes modern tools and technology to streamline development processes and enhance the capabilities of a game.',
  },
  {
    title: 'Unwavering Support',
    desc: 'We boast a diligent support team that caters to your maintenance and updates needs even after launch, fixing bugs and performance updates while also guaranteeing that the game continues to function on every platform.',
  },
]

const COST_TIERS = [
  {
    title: 'Indie Games',
    team: '1–10 developers',
    timeline: '3 – 12 months',
    cost: '$10,000 – $1 Million',
  },
  {
    title: 'Mobile Games',
    team: '2–10 developers',
    timeline: '2 – 6 months',
    cost: '$5,000 – $50,000',
  },
  {
    title: 'PC/Console Games',
    team: '6 – 24 developers',
    timeline: '6 – 24 months',
    cost: '$50,000 – $5 Million',
  },
  {
    title: 'AAA Games',
    team: '100 – 500+ developers',
    timeline: '2 – 5+ years',
    cost: '$100M – $500+M',
  },
]

export default function GameBenefitsAndCost() {
  return (
    <>
      {/* Benefits Section */}
      <section
        className="relative py-20 sm:py-28 bg-[#0b0918] text-white overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/mobile-game/mobile-game-sec14-bg.webp")',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Light top scrim so heading is crisp while keeping the starry sci-fi scene 100% vibrant */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Top Row: Left All-White Heading + Right Paragraph */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12 mb-12 sm:mb-16">
            <h2 className="lg:w-[48%] text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] text-left">
              Benefits of Partnering with Our Skilled Mobile Game Development Studio
            </h2>
            <p className="lg:w-[46%] text-white/95 text-sm sm:text-base lg:text-[16px] leading-[1.65] font-normal text-left">
              Collaborating with a skilled mobile game{' '}
              <Link
                to="/mobile-app-development"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
              >
                app development company
              </Link>{' '}
              can help turn your game idea into a fun, quality app that delivers great user experiences. Whether it&rsquo;s for a mobile game, VR, or another interactive experience, benefits abound to work with experts who will help elevate your product.
            </p>
          </div>

          {/* 4 Equal-Height Dark Charcoal Cards with Green Titles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch auto-rows-fr">
            {BENEFITS.map((item) => (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-[14px] bg-[#1f1f1f]/95 border border-white/10 hover:border-[#00CE44]/60 transition-colors flex flex-col justify-start text-left h-full"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/95 text-sm sm:text-[15px] leading-[1.65] font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Much Does Game Development Cost */}
      <section className="py-16 sm:py-24 bg-[#000000] text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              How Much Does <span className="text-[#00CE44]">Game Development Cost?</span>
            </h2>
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-3xl mx-auto">
              Our mobile game development services can cost between $50,000 and $200,000, depending on various factors, including game complexity, timeline, and team location. For an exact quote, you may need to contact our experts, who are available to assist you in this matter.
            </p>
          </div>

          {/* 4 Equal Flat Dark Gray Lined Cards matching Mobile App Development CostTimelineSection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch auto-rows-fr mb-12">
            {COST_TIERS.map((tier) => (
              <div
                key={tier.title}
                className="p-8 sm:p-9 rounded-[20px] bg-[#242424] text-left flex flex-col justify-start border-0 shadow-none h-full"
              >
                {/* 1. Card Heading */}
                <h3 className="text-xl sm:text-2xl font-bold text-white pb-5 mb-5 border-b border-white/25">
                  {tier.title}
                </h3>

                {/* 2. Team Size */}
                <div className="pb-5 mb-5 border-b border-white/25">
                  <div className="text-xs sm:text-sm font-semibold text-[#00CE44] mb-1.5">
                    Team Size
                  </div>
                  <div className="text-base sm:text-lg font-medium text-white">
                    {tier.team}
                  </div>
                </div>

                {/* 3. Development Duration */}
                <div className="pb-5 mb-5 border-b border-white/25">
                  <div className="text-xs sm:text-sm font-semibold text-[#00CE44] mb-1.5">
                    Development Duration
                  </div>
                  <div className="text-base sm:text-lg font-medium text-white">
                    {tier.timeline}
                  </div>
                </div>

                {/* 4. Investment Range */}
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#00CE44] mb-1.5">
                    Investment Range
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {tier.cost}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/mobile-game/mobile-game-chart-im.webp"
              alt="Game Development Cost Breakdown Chart"
              className="w-full max-w-[960px] h-auto object-contain rounded-[18px] select-none"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Quote CTA Banner (Full-Width Vibrant Space Scene, Left-Aligned Copy) */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#071574] text-white overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/mobile-game/mobile-game-sec17-bg.webp")',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Subtle left-only gradient on smaller screens so text stays legible while keeping the astronaut art 100% vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d4a]/65 via-[#040d4a]/25 to-transparent lg:from-[#040d4a]/35 lg:via-transparent pointer-events-none" />

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="w-full lg:w-[54%] text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.16] mb-4 max-w-xl">
              Ready to Build Your Next Big Game With Our Game Development Company?
            </h2>
            <p className="text-white/95 text-sm sm:text-base lg:text-[16.5px] leading-relaxed mb-7 max-w-xl">
              Partner with Inceptives Digital to create an exceptional game that captivates players and achieves your goals. Let&rsquo;s build something amazing together!
            </p>
            <a
              href="#contact"
              className="getintouch inline-flex items-center justify-center px-10 py-3.5 rounded-[4px] bg-[#00CE44] hover:bg-[#00b83d] text-black font-bold text-sm sm:text-base transition-colors border-0 shadow-none"
            >
              Get A Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Centered Top Copy over Full Fantasy Characters Artwork) */}
      <section
        className="relative w-full bg-[#060303] text-white pt-16 sm:pt-20 lg:pt-24 pb-[240px] sm:pb-[340px] lg:pb-[440px] xl:pb-[500px] overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/mobile-game/mobile-game-sec18-bg.webp")',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Subtle top-only gradient so white copy stays crisp while the 5 characters & glowing orbs remain 100% clear */}
        <div className="absolute inset-x-0 top-0 h-[340px] bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1140px] text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-6">
            Why Choose Us As Your Game App Development Company?
          </h2>
          <div className="space-y-4 text-white/95 text-sm sm:text-base lg:text-[16px] leading-[1.68] font-normal max-w-[1040px] mx-auto">
            <p>
              Working with our game app development company means you are working with a highly qualified team that cares deeply about bringing your ideas. We combine creative thought with technical know-how to create unique, exciting and high-potential game experiences.
            </p>
            <p>
              Our process is user-centred and designed to provide them with the best experience possible with intuitive gameplay, great graphics, and more. We communicate with you throughout our process, and also run usability tests at certain points to check player experience. We hear your ideas and turn them into exciting games you&rsquo;ll tell everyone about. You might want a concept, a prototype, an entire graphics toolbox, or somewhere in between, and we will help produce your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Team Up With The Best Mobile Game Development Studio */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#18191b] text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-2xl">
                Team Up With The Best Mobile Game Development Studio
              </h2>
              <div className="space-y-4 text-white/90 text-sm sm:text-base lg:text-[16px] leading-[1.68] font-normal max-w-2xl">
                <p>
                  Our talented mobile game developers utilize advanced tools to develop immersive, high-quality games. We bring your ideas to life in a way that creates an engaging experience for players worldwide.
                </p>
                <p>
                  Our game developers have plenty of experience and an existing portfolio of games that work smoothly across all platforms.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/assets/mobile-game/mobile-game-sec19-img.webp"
                alt="Inceptives Digital 4.7 Excellent Rating"
                width={487}
                height={544}
                className="w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[430px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
