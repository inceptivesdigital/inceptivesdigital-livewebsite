import { useEffect, useState } from 'react'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import IndustriesSection from '../../../components/IndustriesSection'
import FAQSection from '../../../components/FAQSection'
import TechStackTabs from '../mobile-app-development/components/TechStackTabs'

const STATS = [
  {
    value: '150+',
    label: 'Products Planned & Built',
    icon: '/assets/discovery-sprint/apps-launch.svg',
  },
  {
    value: '8+',
    label: 'Years of Development',
    icon: '/assets/discovery-sprint/web-development-1.svg',
  },
  {
    value: '10M+',
    label: 'Product Downloads',
    icon: '/assets/discovery-sprint/app-downloads.svg',
  },
  {
    value: '4.7',
    label: 'Clutch Rating',
    icon: '/assets/discovery-sprint/rating.svg',
  },
]

const AUDIENCE_CARDS = [
  {
    title: 'Startup Founders Validating an Idea',
    desc: 'Before pitching investors or committing personal savings, founders use Discovery Sprint to test whether the idea holds up against real user feedback and market data early, not just conviction alone.',
  },
  {
    title: 'Businesses Replacing Legacy Software',
    desc: 'Old systems rarely match how a company works today. Discovery Sprint maps current workflows against business needs, so the replacement is built around real operations, not outdated assumptions.',
  },
  {
    title: 'Companies Launching New Digital Products',
    desc: 'Entering an unfamiliar market without user research or competitive analysis is expensive guesswork. Discovery Sprint validates demand, tests positioning, and defines the feature set before launch decisions get locked in.',
  },
  {
    title: 'Organizations Modernizing Internal Systems',
    desc: 'Internal tools built years ago assume a team size or process that no longer exists. Discovery Sprint re-maps workflows and constraints so the system fits the organization running it today.',
  },
  {
    title: 'Teams Stuck on Unclear Requirements',
    desc: 'When a team keeps relitigating the same requirement, the issue usually sits upstream in scope definition. Discovery Sprint aligns stakeholders, users, and engineers on requirements before a digital product is even developed.',
  },
  {
    title: 'Businesses Adding AI Capabilities',
    desc: 'AI features raise questions most roadmaps skip: what data exists, how reliable the model needs to be, and whether users trust automated decisions. Discovery Sprint answers these before development starts.',
  },
]

const BUSINESS_IMPACT = [
  {
    num: '01',
    title: 'Reduce Risk and Costly Rework',
    desc: 'A discovery sprint tests assumptions and scrutinizes architecture on paper before code exists, catching flawed features and technical risk early. Mistakes caught during discovery cost a conversation, not a rebuild.',
  },
  {
    num: '02',
    title: 'Launch Faster with a Focused MVP',
    desc: 'Every proposed feature gets scored against user value and effort before it earns a place in scope, keeping the MVP lean. Discovery Sprint resolves ambiguity, so engineering spends time building.',
  },
  {
    num: '03',
    title: 'Strengthen Team and Investor Confidence',
    desc: 'A validated plan backed by research, prototypes, and a budget reads better to investors than conviction alone. It also gives the team a shared definition of done, which builds real confidence.',
  },
  {
    num: '04',
    title: 'Validate Fit and Build for Scale',
    desc: 'Real user input gathered before development, not assumed after launch, confirms whether the product solves a problem worth paying for. Discovery Sprint also plans architecture for growth, avoiding a rebuild.',
  },
]

const SPRINT_STAGES = [
  {
    stage: 'STAGE 01',
    title: 'Business & Product Workshop',
    desc: 'Business objectives, constraints, and success metrics for the product are defined here in terms that stakeholders can point back to. Structured facilitation surfaces disagreements that stay hidden deep into development.',
  },
  {
    stage: 'STAGE 02',
    title: 'Market & Competitor Research',
    desc: 'Direct and indirect competitors in the market space are analyzed for positioning gaps and pricing models. This produces a rationale for why this platform belongs in the market.',
  },
  {
    stage: 'STAGE 03',
    title: 'User Research',
    desc: 'Structured interviews, surveys, and direct observation with real or representative users establish actual behavior patterns and pain points within the product. This replaces internal assumptions with evidence gathered from usage.',
  },
  {
    stage: 'STAGE 04',
    title: 'Feature Prioritization',
    desc: 'Every proposed feature for the product idea is scored against user value, business impact, and effort to build. What scores highest becomes the MVP scope, and the rest gets logged.',
  },
  {
    stage: 'STAGE 05',
    title: 'UX Strategy & User Flows',
    desc: 'The user journey gets mapped end-to-end before a single pixel is designed. Friction points and dead ends get caught and removed early on paper.',
  },
  {
    stage: 'STAGE 06',
    title: 'Wireframes & Rapid Prototypes',
    desc: 'Low-fidelity wireframes and clickable prototypes of the digital product translate mapped flows into something testable. This gives stakeholders and users a concrete artifact to react to before engineering hours are committed.',
  },
  {
    stage: 'STAGE 07',
    title: 'Technical Discovery',
    desc: 'Engineering formalizes the technical plan here, covering architecture, integrations, scalability, and risk. That means defining how the system is structured, what it depends on, how it scales, and what could derail the timeline.',
  },
  {
    stage: 'STAGE 08',
    title: 'Product Roadmap',
    desc: 'Prioritized features get sequenced by technical dependency, business value, and implementation complexity. That turns a backlog into an ordered build plan the development team can actually follow.',
  },
  {
    stage: 'STAGE 09',
    title: 'Budget & Timeline',
    desc: "Cost and schedule estimates are derived directly from the roadmap's actual scope and complexity, not from a sales conversation. Line items map to specific build phases.",
  },
]

const DELIVERABLES = [
  { item: 'Product Vision', value: 'Gets every stakeholder pointed at the same target' },
  { item: 'User Personas', value: 'Grounds product decisions in real behavior, not opinion' },
  { item: 'Competitor Analysis', value: 'Clarifies where the product actually fits in the market' },
  { item: 'Feature Prioritization', value: 'Shortens the path to a shippable MVP' },
  { item: 'Prototype', value: 'Lets real users react before real money gets spent on the build' },
  { item: 'Wireframes', value: 'Gives the whole team a shared, arguable reference point' },
  { item: 'Technical Architecture', value: 'Hands developers a plan instead of a blank page' },
  { item: 'Roadmap', value: 'Turns strategy into an execution sequence' },
  { item: 'Cost Estimate', value: 'Replaces a guess with a number that people can plan around' },
]

const FRAMEWORK_WEEKS = [
  {
    title: 'Research',
    tag: 'Phases 1–3',
    desc: 'Stakeholder workshops, competitive research, and structured user interviews establish the factual foundation on which the sprint builds. This replaces internal opinions about your digital product with evidence gathered directly from the market.',
  },
  {
    title: 'Validation',
    tag: 'Phases 4–6',
    desc: 'Here come our product validation services. Wireframes, clickable prototypes, and technical discovery work get tested against user and stakeholder feedback. This confirms whether the proposed solution solves the problem before design and engineering commit real hours.',
  },
  {
    title: 'Planning',
    tag: 'Phases 7–9',
    desc: "Roadmap, technical architecture, and budget get brought together into a single execution-ready plan. It sequences the digital product's features by dependency and value, so development can start with a build order.",
  },
  {
    title: 'Final Presentation',
    tag: '',
    desc: 'A complete walkthrough covers findings, decisions, and the recommended path forward for the digital product. The recommendations come with the reasoning laid out for any stakeholder to challenge or approve.',
  },
]

const WHY_CHOOSE = [
  {
    num: '01',
    title: 'No Development Pressure',
    desc: 'If discovery doesn’t support building the product as scoped, that gets said plainly. A sprint ending in “don’t build this yet” still succeeds, costing less than finding out after launch.',
  },
  {
    num: '02',
    title: 'Discovery-First Mindset',
    desc: 'The engagement starts with evidence gathered directly from users and the market, not assumptions dressed up as strategy. Workshops, competitor research, and technical discovery all feed into one validated direction.',
  },
  {
    num: '03',
    title: 'Technical & Business Alignment',
    desc: 'Strategy, research, design, and engineering work in the same room from day one. The roadmap that comes out reflects what the business needs and what the architecture can genuinely support.',
  },
  {
    num: '04',
    title: 'Research-Led Decisions',
    desc: 'Recommendations trace back to something a user said or a pattern in the research. The whole structured plan gets sequenced so a development team can pick it up immediately.',
  },
]

const COST_TIERS = [
  {
    title: 'Focused Reviews',
    bestFor: 'Validate an idea with essential features',
    timeline: '2–3 Months',
    investment: '$25,000 – $50,000',
  },
  {
    title: 'Growth Product',
    bestFor: 'Businesses expanding functionality and user base',
    timeline: '3–6 Months',
    investment: '$60,000 – $150,000',
  },
  {
    title: 'Enterprise Product',
    bestFor: 'Complex platforms with integrations, compliance, and high scalability',
    timeline: '6+ Months',
    investment: '$180,000',
  },
]

const COMPARISON_ROWS = [
  {
    aspect: 'Purpose',
    sprint: 'Validate the idea and de-risk the build before committing budget',
    mvp: 'Build and ship a working product to real users',
  },
  {
    aspect: 'Core Question',
    sprint: '"Should we build this, and how?"',
    mvp: '"Does this work in the market?"',
  },
  {
    aspect: 'Key Deliverables',
    sprint: 'Problem definition, user research, technical feasibility, scoped roadmap, cost estimate',
    mvp: 'Working software, core feature set, deployed product, initial user feedback loop',
  },
  {
    aspect: 'Team Involved',
    sprint: 'Strategist, product lead, sometimes a technical architect',
    mvp: 'Full product team: designers, engineers, PM',
  },
  {
    aspect: 'Investment Level',
    sprint: 'Low, fixed-fee',
    mvp: 'Higher, scoped by feature set',
  },
  {
    aspect: 'Best For',
    sprint: 'Teams with an idea but unclear direction, unproven assumptions, or investor pressure to show a plan',
    mvp: 'Teams with a validated concept ready to get in front of users',
  },
  {
    aspect: 'Output Feeds Into',
    sprint: 'An MVP Development scope (or a "don\'t build it yet" recommendation)',
    mvp: 'Product-market fit testing, seed/next funding round, or scaling',
  },
]

const FAQS = [
  {
    q: 'What is a Discovery Sprint?',
    a: 'A Discovery Sprint is a structured product discovery process that validates a digital product idea before design and development begin. It combines business strategy, user research, competitor analysis, feature prioritization, UX planning, and technical discovery to create a product roadmap, technical requirements, and a clear development plan.',
  },
  {
    q: 'Why is a Discovery Sprint important?',
    a: 'A Discovery Sprint is important because it reduces product and development risk before engineering begins. By validating user needs, testing assumptions, identifying technical challenges, and prioritizing features early, it helps teams make informed decisions, avoid costly rework, and build products with greater confidence.',
  },
  {
    q: 'When should you do a Discovery Sprint?',
    a: 'A Discovery Sprint should be completed before building a new digital product, launching an MVP, redesigning an existing platform, or introducing major new features. It helps validate the product direction, define project requirements, and align business, design, and technical teams before development starts.',
  },
  {
    q: 'How long does a Discovery Sprint take?',
    a: "Most Discovery Sprints take between 2 and 4 weeks, depending on the product's complexity, research requirements, and stakeholder involvement. During this time, the team validates the product concept, defines technical requirements, and creates a roadmap that prepares the project for efficient development.",
  },
  {
    q: 'Who should participate in a Discovery Sprint?',
    a: 'A Discovery Sprint typically includes founders, product owners, business stakeholders, UX designers, technical leads, and decision-makers. User interviews or customer feedback are often included to validate assumptions and ensure the product addresses real user needs and business goals.',
  },
  {
    q: 'What happens during a Discovery Sprint?',
    a: 'A Discovery Sprint includes product discovery workshops, user research, competitor analysis, feature prioritization, user journey mapping, wireframing, technical discovery, and roadmap planning. Each activity helps validate the product idea, reduce uncertainty, and prepare the team with a clear strategy for design and development.',
  },
  {
    q: 'What deliverables do you receive from a Discovery Sprint?',
    a: 'A Discovery Sprint typically delivers a product vision, user personas, competitor analysis, prioritized feature list, user flows, wireframes, technical architecture, product roadmap, development timeline, and cost estimate. These deliverables give your team everything needed to move into design and development with confidence.',
  },
  {
    q: 'What are the benefits of a Discovery Sprint?',
    a: 'A Discovery Sprint helps businesses reduce development risk, validate product ideas, prioritize the right features, improve team alignment, and plan realistic budgets and timelines. It creates a shared understanding of the product, helping teams build faster while minimizing unnecessary changes during development.',
  },
  {
    q: 'How much does a Discovery Sprint cost?',
    a: 'The cost of a Discovery Sprint ranges between $2,500 and $25,000. It depends on the product scope, research depth, technical complexity, and project objectives. Although pricing varies, a Discovery Sprint is a relatively small investment that helps improve planning accuracy, reduce development risk, and prevent expensive revisions later.',
  },
  {
    q: 'Can a Discovery Sprint help improve an existing product?',
    a: 'Yes. A Discovery Sprint can improve an existing product by identifying usability issues, validating new features, modernizing legacy systems, optimizing user experiences, or creating a roadmap for future growth. It helps product teams make evidence-based decisions before investing in further development.',
  },
  {
    q: 'Is a Discovery Sprint worth it before MVP development?',
    a: 'Yes. A Discovery Sprint helps define the right MVP by validating the product idea, prioritizing essential features, and identifying technical requirements before development begins. This reduces uncertainty, avoids unnecessary functionality, and creates a stronger foundation for a successful MVP launch.',
  },
  {
    q: 'How is a Discovery Sprint different from MVP development?',
    a: 'A Discovery Sprint focuses on research, validation, and planning, while MVP development focuses on building the first functional version of a product. The Discovery Sprint determines what should be built and why, whereas MVP development turns those validated decisions into a working product.',
  },
  {
    q: 'Can another development company use the Discovery Sprint deliverables?',
    a: 'Yes. Discovery Sprint deliverables are created to be implementation-ready and can be used by any experienced development team. Documentation, wireframes, technical architecture, and the product roadmap provide a clear foundation for development, regardless of who builds the product.',
  },
  {
    q: 'What happens after a Discovery Sprint?',
    a: 'After a Discovery Sprint, your team receives a validated product strategy, technical documentation, design assets, and a development roadmap. These deliverables support a smooth transition into UI/UX design, MVP development, or full-scale product engineering with clear priorities and defined requirements.',
  },
  {
    q: 'How do you measure the success of a Discovery Sprint?',
    a: 'A Discovery Sprint is successful when it produces a validated product concept, a prioritized feature set, a realistic roadmap, technical requirements, budget estimates, and stakeholder alignment. Success is measured by how effectively the sprint reduces uncertainty and prepares the product for efficient development.',
  },
]

export default function DiscoverySprint() {
  const [openImpact, setOpenImpact] = useState(null)

  useEffect(() => {
    const title = 'Discovery Sprint Services | Inceptives Digital'
    const desc =
      'Turn Your Product Idea Into a Development-Ready Roadmap in 2–4 Weeks. Validate your product concept, architecture, and budget before investing in development.'
    document.title = title
    window.scrollTo(0, 0)

    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', desc)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', desc)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', desc)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://inceptivesdigital.com/discovery-sprint')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-clip">
      {/* 1. HERO SECTION (100vh, Text Vertically Centered, Right-Bottom Flush Banner Image) */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row lg:items-center bg-[#0F0F0F] pt-28 sm:pt-32 lg:pt-24 pb-0 overflow-hidden">
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="w-full lg:w-[52%] xl:w-[48%] text-left space-y-5 py-8 lg:py-16">
            <span className="inline-block text-[#00CE44] text-[13.5px] sm:text-[15px] font-semibold leading-[1.35] tracking-[1px]">
              Discovery Sprint Services
            </span>

            <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white leading-[1.14] tracking-tight">
              Turn Your Product Idea Into a{' '}
              <span className="text-[#00CE44]">Development-Ready Roadmap</span> in 2–4 Weeks
            </h1>

            <p className="text-white/85 text-[15px] sm:text-[16.5px] leading-[1.68]">
              A Discovery Sprint validates your product idea before you invest in development. In just 2–4 weeks, you leave with a roadmap, prioritized features, and the technical foundation needed to build with confidence. At Inceptives Digital, it&apos;s the step every product goes through first, giving founders and product teams a plan worth building on before a single developer gets involved.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
              >
                <span>Start Your Discovery Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/30 bg-transparent text-white font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:border-[#00CE44] hover:text-[#00CE44] transition-colors"
              >
                <span>Talk to a Strategist</span>
              </a>
            </div>

            {/* Trust Logos (Below CTAs, Larger Size) */}
            <div className="flex flex-wrap items-center gap-7 sm:gap-9 pt-4">
              <img
                src="/assets/discovery-sprint/clutch.png"
                alt="Clutch Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
              <img
                src="/assets/discovery-sprint/bark.png"
                alt="Bark Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
              <img
                src="/assets/discovery-sprint/trustpilot.png"
                alt="Trustpilot Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
            </div>
          </div>
        </div>

        {/* Right-Bottom Edge-Touched Larger Banner Image */}
        <img
          src="/assets/discovery-sprint/product-sprint.webp"
          alt="Discovery Sprint Product Strategy Showcase"
          loading="eager"
          className="relative z-0 ml-auto mt-4 w-full max-w-[680px] h-auto block object-contain object-right-bottom select-none pointer-events-none lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[50%] xl:w-[52%] lg:max-w-[880px]"
        />
      </section>

      {/* 2. STATS COUNTER BAR */}
      <section className="w-full bg-[#1D1D1D] py-14 sm:py-16 border-y border-white/5">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center">
                <div className="w-11 h-11 mb-3 flex items-center justify-center">
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-full h-full object-contain select-none"
                  />
                </div>
                <div className="text-[19px] font-bold text-[#00CE44] leading-[1.32] mb-2">
                  {s.value}
                </div>
                <div className="text-white text-[14px] sm:text-[15px] font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY PRODUCTS FAIL BEFORE THEY'RE EVEN BUILT */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
                Why Products Fail <span className="text-[#00CE44]">Before They&apos;re Even Built</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p className="text-white text-[16px] sm:text-[18px] leading-[1.68]">
                CB Insights found that 42% of startups fail because they build something the market never needed. The Standish Group&apos;s long-running CHAOS research shows that about three in ten software projects succeed outright, with the rest running over budget or missing scope.
              </p>
              <p className="text-white/85 text-[15.5px] sm:text-[17px] leading-[1.68]">
                A joint study by McKinsey and Oxford found that large IT projects run 45% over budget and deliver 56% less actual value than promised. Those numbers trace back to decisions skipped before development, exactly the gap a Discovery Sprint closes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IS THIS PRODUCT DISCOVERY SPRINT FOR YOU? (6 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-2xl mb-10 sm:mb-12 space-y-4">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              Is This <span className="text-[#00CE44]">Product Discovery Sprint</span>
              <br className="hidden sm:block" /> for You?
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
              Discovery Sprint fits a range of teams, though a few situations show up again and again before companies reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {AUDIENCE_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-[#252525] rounded-[12px] p-6 sm:p-7 border border-white/[0.06] flex flex-col gap-3"
              >
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00CE44] leading-snug">
                  {card.title}
                </h3>
                <p className="text-white/85 text-[14.5px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE REAL BUSINESS IMPACT OF A DISCOVERY SPRINT (Green Accordion Bars over Team Photo) */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#151515] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/discovery-sprint/dropdown-pro-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              The Real Business Impact of a Discovery Sprint
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto items-start text-left">
            {BUSINESS_IMPACT.map((item, idx) => {
              const isOpen = openImpact === idx
              return (
                <div
                  key={item.title}
                  className="bg-[#00CE44] rounded-[10px] overflow-hidden transition-all"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setOpenImpact(isOpen ? null : idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setOpenImpact(isOpen ? null : idx)
                      }
                    }}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 cursor-pointer select-none"
                  >
                    <h3 className="text-[16px] sm:text-[18px] font-bold text-black leading-snug">
                      {item.title}
                    </h3>
                    <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                      )}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-black/90 text-[14.5px] sm:text-[15px] leading-relaxed border-t border-black/15">
                      {item.desc}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES (Homepage Component) */}
      <CaseStudies />

      {/* 7. TESTIMONIALS (Homepage Component) */}
      <Testimonials />

      {/* 8. INDUSTRIES (Homepage Grid Design, Icon + White Title / Black Hover, No Extra Description) */}
      <IndustriesSection
        heading="OUR WORK ACROSS INDUSTRIES"
        showDesc={false}
      />

      {/* 9. WHAT ACTUALLY HAPPENS (9-Stage Vertical Timeline) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-5xl mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.16]">
              What Actually Happens During a Product Discovery Service Engagement
            </h2>
            <p className="text-white/85 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              The Discovery Sprint moves through nine distinct phases, with each one building on the last toward a fully development-ready plan.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-7">
            {SPRINT_STAGES.map((st) => (
              <div
                key={st.stage}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-center"
              >
                <div className="md:col-span-4 lg:col-span-3 flex items-stretch gap-3.5">
                  <div className="flex flex-col items-center pt-0.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#00CE44] shrink-0" />
                    <span className="w-[1.5px] flex-1 min-h-[42px] bg-[#00CE44]/80" />
                  </div>
                  <div className="flex flex-col justify-center py-0.5 max-w-[230px]">
                    <span className="text-[#00CE44] text-[10.5px] font-semibold uppercase tracking-[0.12em] leading-none mb-1.5">
                      {st.stage}
                    </span>
                    <h3 className="text-[17px] sm:text-[18.5px] font-bold text-white leading-snug">
                      {st.title}
                    </h3>
                  </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9 pl-5 md:pl-0">
                  <p className="text-white/75 text-[14.5px] sm:text-[15.5px] leading-[1.65] max-w-4xl">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. DISCOVERY SPRINT DELIVERABLES TABLE */}
      <section className="w-full bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              Discovery Sprint Deliverables and{' '}
              <span className="text-[#00CE44]">Why Each One Matters</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16.5px]">
              Our Discovery Sprint services end with a defined set of deliverables, each tied to a specific business outcome.
            </p>
          </div>

          <div className="rounded-[16px] overflow-hidden border border-white/10 bg-[#18191d] text-left">
            <div className="grid grid-cols-1 sm:grid-cols-12 bg-[#00CE44] text-black font-bold text-sm sm:text-base uppercase tracking-wide px-6 py-4">
              <div className="sm:col-span-4">Deliverable</div>
              <div className="sm:col-span-8">Business Value</div>
            </div>
            <div className="divide-y divide-white/10">
              {DELIVERABLES.map((row) => (
                <div
                  key={row.item}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="sm:col-span-4 font-semibold text-white text-[15px] sm:text-[16px]">
                    {row.item}
                  </div>
                  <div className="sm:col-span-8 text-white/80 text-[14.5px] sm:text-[15.5px]">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. MID-PAGE CTA BANNER */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#0D0D0D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/discovery-sprint/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2] max-w-3xl mx-auto">
            Not Sure Where to Start?{' '}
            <span className="text-[#00CE44]">One Conversation Clarifies Everything</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            Not sure if your idea needs validation first? A short conversation can clarify exactly what a Discovery Sprint would actually uncover.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 12. TECHNOLOGY STACK */}
      <TechStackTabs />

      {/* 13. THE DISCOVERY SPRINT FRAMEWORK (Sticky Left + Stacking Vertical Scroll Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-28">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
            {/* Left Sticky Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-4">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
                <span className="text-[#00CE44]">The Discovery Sprint Framework:</span>{' '}
                Three Weeks, One Roadmap
              </h2>
              <p className="text-white/80 text-[15px] sm:text-[16px] leading-[1.68] max-w-md">
                Discovery Sprint at Inceptives Digital follows the same three-week structure, moving from research to validation to a development-ready plan.
              </p>
            </div>

            {/* Right Stacking Cards on Vertical Scroll */}
            <div className="lg:col-span-7 flex flex-col gap-6 pb-8">
              {FRAMEWORK_WEEKS.map((fw, idx) => (
                <div
                  key={fw.title}
                  style={{
                    top: `${112 + idx * 24}px`,
                    zIndex: idx + 1,
                  }}
                  className="lg:sticky bg-[#222222] rounded-[16px] p-7 sm:p-8 border border-white/[0.08] shadow-[0_14px_36px_rgba(0,0,0,0.45)] flex flex-col gap-2.5"
                >
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#00CE44] leading-snug">
                    {fw.title}
                  </h3>
                  {fw.tag && (
                    <span className="text-white/75 text-sm font-medium">
                      {fw.tag}
                    </span>
                  )}
                  <p className="text-white/90 text-[15px] leading-[1.68] pt-1">
                    {fw.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. WHY CHOOSE INCEPTIVES DIGITAL (4 Cards) */}
      <section className="w-full bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              Why Choose Inceptives Digital for Your{' '}
              <span className="text-[#00CE44]">Discovery Sprint</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16.5px]">
              Inceptives Digital treats discovery as a craft, and these four principles shape every sprint the studio runs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="bg-[#1A1A1A] rounded-[16px] p-6 sm:p-7 border border-white/[0.06] flex flex-col gap-3"
              >
                <span className="text-[#00CE44] text-sm font-bold tracking-widest">
                  {item.num}
                </span>
                <h3 className="text-[19px] sm:text-[21px] font-semibold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[14.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. COST BREAKDOWN (3 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              How Much Does a{' '}
              <span className="text-[#00CE44]">Product Strategy Engagement Cost?</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px]">
              Product strategy engagements cost between $2,500 and $25,000, based on scope. Here is how that breaks down.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {COST_TIERS.map((tier) => (
              <div
                key={tier.title}
                className="bg-[#272727] rounded-[20px] p-7 sm:p-8 border border-white/[0.06] shadow-[0_16px_40px_rgba(0,0,0,0.45)] flex flex-col"
              >
                <div className="pb-5 border-b border-white/15">
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-white leading-snug">
                    {tier.title}
                  </h3>
                </div>

                <div className="py-5 border-b border-white/15 min-h-[112px]">
                  <span className="text-white font-semibold text-sm block mb-1.5">
                    Best For
                  </span>
                  <p className="text-white/80 text-[14.5px] leading-relaxed">
                    {tier.bestFor}
                  </p>
                </div>

                <div className="py-5 border-b border-white/15">
                  <span className="text-white/75 text-xs sm:text-sm block mb-1.5">
                    Timeline
                  </span>
                  <p className="text-white font-bold text-[20px] sm:text-[22px] leading-tight">
                    {tier.timeline}
                  </p>
                </div>

                <div className="pt-5">
                  <span className="text-white/75 text-xs sm:text-sm block mb-1.5">
                    Estimated Investment
                  </span>
                  <div className="text-[20px] sm:text-[22px] font-bold text-white leading-tight">
                    {tier.investment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. DISCOVERY SPRINT VS MVP DEVELOPMENT TABLE */}
      <section className="w-full bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              Difference Between <span className="text-[#00CE44]">Discovery Sprint</span> and MVP Development
            </h2>
          </div>

          <div className="rounded-[16px] overflow-x-auto border border-white/10 bg-[#18191d] text-left">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="bg-[#00CE44] text-black font-bold text-sm sm:text-base uppercase tracking-wide">
                  <th className="px-6 py-4 text-left w-[22%]">Factor</th>
                  <th className="px-6 py-4 text-left w-[39%]">Discovery Sprint</th>
                  <th className="px-6 py-4 text-left w-[39%]">MVP Development</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.aspect} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-semibold text-white text-[15px] align-top">
                      {row.aspect}
                    </td>
                    <td className="px-6 py-4 text-white/80 text-[14.5px] leading-relaxed align-top">
                      {row.sprint}
                    </td>
                    <td className="px-6 py-4 text-white/80 text-[14.5px] leading-relaxed align-top">
                      {row.mvp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 17. BOTTOM CTA BANNER */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#0D0D0D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/discovery-sprint/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2] max-w-3xl mx-auto">
            Every Great Digital Product Starts With{' '}
            <span className="text-[#00CE44]">Better Decisions</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            The fastest way to waste time and money is to build without clarity. Validate the idea, align the team, and move into development with confidence.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
            >
              <span>Start Your Discovery Sprint</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 18. FAQS (Homepage Component with 15 Discovery Sprint FAQs) */}
      <FAQSection
        faqs={FAQS}
        heading="Frequently Asked Questions About the Discovery Sprint Process"
      />
    </div>
  )
}
