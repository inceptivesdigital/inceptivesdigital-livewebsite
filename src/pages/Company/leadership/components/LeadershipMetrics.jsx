import { Link } from 'react-router-dom'

function GreenCheckDot() {
  return (
    <span className="w-4 h-4 rounded-full bg-[#00CE44] text-black inline-flex items-center justify-center shrink-0 mt-1">
      <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M2.5 6.2L4.9 8.6L9.5 3.6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

const LEFT_DECISIONS = [
  'Product direction',
  'Business value',
  'Scope/Budget',
  'Technical architecture',
]

const RIGHT_DECISIONS = [
  'Delivery risk',
  'Quality standards',
  'Client Confidence',
]

const JUDGED_BY = [
  'Decision Quality — improves team choices before problems grow',
  'Team Strength — ability to work independently of leaders',
  'Delivery Health — clarity on expectations, risks, deadlines, responsibilities',
  'Client Confidence — transparency in ownership and decisions',
  'Knowledge Transfer — documented and shared insights',
  'People Development — stronger skills, judgment, and meaningful responsibility',
]

export default function LeadershipMetrics() {
  return (
    <>
      {/* Section 5: Senior Involvement Improves Decisions (Slanted Dark Card Left + Handshake Photo Right) */}
      <section className="py-16 sm:py-24 bg-[#141414] text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Dark Card */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-[24px] bg-[#1e1f22] border border-white/[0.06] p-7 sm:p-10 lg:pr-14 text-left flex flex-col justify-center lg:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#00CE44] tracking-tight leading-[1.2] mb-3">
                  Senior Involvement Improves Decisions
                </h2>
                <p className="text-white/85 text-[14.5px] sm:text-[15.5px] mb-5 font-normal">
                  Leadership steps in when decisions affect:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-7">
                  <ul className="space-y-3">
                    {LEFT_DECISIONS.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-white/95 text-[14.5px] sm:text-[15px]">
                        <GreenCheckDot />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {RIGHT_DECISIONS.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-white/95 text-[14.5px] sm:text-[15px]">
                        <GreenCheckDot />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed mb-4 max-w-lg">
                  Purpose: Ensure critical decisions get proper attention without removing control from the delivery team
                </p>
                <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed max-w-lg">
                  Clients always know: Who owns the engagement, product decisions, technical delivery, and who to contact for escalations
                </p>
              </div>
            </div>

            {/* Right Handshake Photo */}
            <div className="lg:col-span-6">
              <div className="h-full min-h-[320px] sm:min-h-[380px] rounded-[24px] overflow-hidden border border-white/10 bg-black">
                <img
                  src="/assets/leadership/live/senior-handshake.webp"
                  alt="Senior Leadership Collaboration"
                  className="w-full h-full object-cover object-center block select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Leadership is Judged by What Improves Around It (Full-Cover Dark Photo Banner) */}
      <section
        className="relative py-20 sm:py-28 bg-[#0b0c0e] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage: "url('/assets/leadership/live/judged-bg.png')",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,11,13,0.94) 0%, rgba(10,11,13,0.8) 50%, rgba(10,11,13,0.35) 100%)',
          }}
        />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-2xl text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#00CE44] tracking-tight leading-[1.2] mb-7">
              Leadership is Judged by What Improves Around It
            </h2>
            <ul className="space-y-4">
              {JUDGED_BY.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <GreenCheckDot />
                  <span className="text-white/95 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Why the Company Should Never Depend on Its Founder (Black Banner + 3D iD Cube on Right) */}
      <section
        className="relative py-20 sm:py-28 bg-black bg-cover bg-right bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage: "url('/assets/leadership/live/founder-letter-bg.webp')",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 48%, rgba(0,0,0,0.15) 100%)',
          }}
        />
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-2xl text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-[1.2] mb-7">
              Why the Company Should Never Depend on Its Founder
            </h2>
            <Link
              to="/founders-letter"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
            >
              Read the Founder’s Letter
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Bright Green Rounded CTA Bar — Strong Products Need Leaders Behind Them */}
      <section className="py-12 sm:py-16 bg-[#141414]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="rounded-[20px] bg-[#00CE44] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="text-left max-w-2xl">
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-black tracking-tight leading-[1.2] mb-2">
                Strong Products Need Leaders Behind Them
              </h2>
              <p className="text-black/85 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
                Every engagement starts with a focused discussion about the business problem, product, and critical decisions.
              </p>
            </div>
            <a
              href="#contact"
              className="getintouch inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#1b1b1b] hover:bg-black text-[#00CE44] font-medium text-sm sm:text-base transition-colors shrink-0 whitespace-nowrap self-start lg:self-center border-0"
            >
              Start My Product Roadmap
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
