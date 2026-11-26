import { Link } from 'react-router-dom'
export default function BackendWhyChooseUs() {
  const pillars = [
    {
      title: 'Architecture-First Engineering',
      desc: (
        <>
          A system either scales or gets rebuilt based on one decision: how the boundaries were drawn before any code existed. Inceptives Digital resolves that through a{' '}
          <Link
            to="/discovery-sprint"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            discovery sprint
          </Link>
          , while it still costs nothing to change.
        </>
      ),
    },
    {
      title: 'API-First Product Design',
      desc: 'APIs go through the same review process as a shipped product: versioned contracts, documentation, stability checks before release. Skip that process and every team building on the API inherits its mistakes.',
    },
    {
      title: 'Cloud-Native Infrastructure',
      desc: 'Backend systems are built on AWS, Google Cloud, or Azure from the first design decision, with auto-scaling and distributed architecture already running underneath the system before load ever increases.',
    },
    {
      title: 'Performance Without Bottlenecks',
      desc: "Query performance, caching, and indexing are tuned against the product's actual access patterns before launch. A system that slows down in production is a system that wasn't tested against the right conditions before it got there.",
    },
    {
      title: 'Security Embedded into Every Layer',
      desc: 'Authentication, encryption, and access control are part of the architecture from the first data flow mapped. OAuth2, JWT, and field-level encryption are in place before the system is ever exposed to a user.',
    },
    {
      title: 'Long-Term Maintainability',
      desc: 'Every system is handed off with documentation that captures the reasoning behind each architecture decision, not just the decision itself. The engineers who inherit it work from context, not guesswork.',
    },
  ]

  return (
    <>
      {/* Mid CTA Banner (Container 5d32a89 with ctabg.png bg-cover) */}
      <section
        className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/assets/backend-api/ctabg.png')",
        }}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              Ready to Strengthen Your{' '}
              <span className="text-[#00CE44]">Product&apos;s Foundation</span> with Us?
            </h2>

            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
              Get a technical assessment of your current backend and a clear plan for what it needs next.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
            >
              Talk to Our Engineers
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us 6 Cards Section */}
      <section className="py-16 sm:py-24 bg-[#191919]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2]">
              Why Product Teams Trust{' '}
              <span className="text-[#00CE44]">Inceptives Digital</span> with Their Backend Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-7 rounded-[20px] bg-[#323232] text-left border-0 shadow-none flex flex-col justify-start"
              >
                <img
                  src="/assets/mobile-app/icon01.png"
                  alt={p.title}
                  className="w-9 h-9 object-contain mb-4 select-none"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-[14px] leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
