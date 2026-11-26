import { Link } from 'react-router-dom'
export default function BackendChallenges() {
  const challenges = [
    'Slow API response times as traffic grows, usually caused by missing indexes, not the API itself',
    'Legacy systems with no clean interface for new services to connect through',
    "Database schemas that can't absorb growth, forcing a rebuild instead of an upgrade",
    'Authentication added late, leaving gaps an audit or breach eventually finds',
    'Monolithic systems that scale as a whole, even when only one feature is under load',
    "Documentation that doesn't survive the original team, leaving decisions to be reverse-engineered",
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & Challenges List */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-5">
              Overcoming the{' '}
              <span className="text-[#00CE44]">Backend Challenges</span> That Limit Product Scale
            </h2>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-6">
              The majority of scaling issues stem from a single architecture decision that was made early on and never revisited. These are also among the{' '}
              <Link
                to="/blog/common-reasons-digital-products-fail"
                className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
                common reasons digital products fail
              </Link>{' '}
              once traffic and system complexity increase.
            </p>

            <ul className="pl-6 sm:pl-[30px] border-l-2 border-[#00CE44]/70 space-y-3 text-white/90 text-sm sm:text-[15.5px] leading-relaxed mb-7">
              {challenges.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              At Inceptives Digital, these challenges are addressed through{' '}
              <Link
                to="/product-strategy-consulting"
                className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
                product strategy consulting
              </Link>{' '}
              and architecture planning, where thoughtful engineering decisions prevent expensive rework later in the product lifecycle.
            </p>
          </div>

          {/* Right Column: Backend Architecture Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <img
              src="/assets/backend-api/backend-api-sec.png"
              alt="Overcoming Backend Challenges That Limit Product Scale"
              className="w-full max-w-[440px] lg:max-w-[500px] h-auto object-contain block select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
