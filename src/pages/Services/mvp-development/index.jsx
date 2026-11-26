import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import CaseStudies from '../../../components/CaseStudies'
import Testimonials from '../../../components/Testimonials'
import IndustriesSection from '../../../components/IndustriesSection'
import FAQSection from '../../../components/FAQSection'
import TechStackTabs from '../mobile-app-development/components/TechStackTabs'

const FAIL_CAUSES = [
  { title: 'Feature overload', icon: '/assets/mvp-development/overload-icon.png' },
  { title: 'Solving an unconfirmed problem', icon: '/assets/mvp-development/problem-icon.png' },
  { title: 'Assumptions treated as facts', icon: '/assets/mvp-development/assumption.png' },
  { title: 'Weak product strategy', icon: '/assets/mvp-development/week.png' },
  { title: 'Technical shortcuts', icon: '/assets/mvp-development/shortcut-script.png' },
]

const COMPARISON_ROWS = [
  {
    feature: 'Purpose',
    poc: 'Confirms technical feasibility',
    proto: 'Validates user experience and flow',
    mvp: 'Tests real market demand',
  },
  {
    feature: 'Audience',
    poc: 'Internal team and technical stakeholders',
    proto: 'Internal team, investors, early testers',
    mvp: 'Real end users',
  },
  {
    feature: 'Output',
    poc: 'Proof the concept can be built',
    proto: 'Clickable simulation of the product',
    mvp: 'Functional product with core features live',
  },
  {
    feature: 'Question It Answers',
    poc: 'Can this be built?',
    proto: 'Does this feel right to use?',
    mvp: 'Will people use and pay for this?',
  },
  {
    feature: 'Investment Level',
    poc: 'Low',
    proto: 'Low to moderate',
    mvp: 'Moderate, scoped to core value',
  },
  {
    feature: 'Best Suited For',
    poc: 'Unproven or complex technical challenges',
    proto: 'Design validation and pitch material',
    mvp: 'Startups ready to test in a live market',
  },
]

const STRATEGY_SCENARIOS = [
  { text: 'A new startup idea with unproven market demand.', icon: '/assets/mvp-development/mvp1.png' },
  { text: 'A SaaS product entering a competitive space.', icon: '/assets/mvp-development/mvp2.png' },
  { text: 'An AI-driven product dependent on real user interaction to validate.', icon: '/assets/mvp-development/mvp3.png' },
  { text: 'A marketplace requiring both supply and demand validated before scaling.', icon: '/assets/mvp-development/mvp4.png' },
  { text: 'A product pivot testing a new direction without full resource commitment.', icon: '/assets/mvp-development/mvp5.png' },
  { text: 'Investor confidence built on traction data to support a funding conversation.', icon: '/assets/mvp-development/mvp6.png' },
  { text: 'A new business model where willingness to pay remains untested.', icon: '/assets/mvp-development/mvp7.png' },
]

const MVP_SERVICES = [
  {
    title: 'Product Discovery',
    desc: 'Structured sessions cover user research, competitor analysis, and business goal alignment, producing a validated product brief that governs every decision made throughout the engagement.',
  },
  {
    title: 'MVP Feature Prioritization',
    desc: 'Features are defined by what the MVP needs to prove, not by what seems valuable internally. Built around tested assumptions, so nothing enters the framework without a justified reason to be there.',
  },
  {
    title: 'UI/UX Design & Prototyping',
    desc: 'User flow is designed and prototyped before engineering begins, confirming interaction patterns and interface decisions with real feedback so development starts on a confirmed foundation.',
  },
  {
    title: 'MVP Development & Engineering',
    desc: "Built on a defined, API-first architecture, modular code, and CI/CD-driven sprints ensure every technical decision serves the product's long-term trajectory as much as its immediate requirements.",
  },
  {
    title: 'Quality Assurance & Launch',
    desc: 'Every release goes through structured functional, performance, and regression testing before deployment. Nothing ships to a deadline. It ships when it is ready to perform under real usage conditions.',
  },
  {
    title: 'Post-MVP Growth & Iteration',
    desc: 'Post-launch behaviour data is analyzed and used to drive the next release, keeping every roadmap decision traceable to real user signals rather than internal preference or assumption.',
  },
]

const FRAMEWORK_STAGES = [
  {
    stage: 'STAGE 01',
    title: 'Discovery & Validation',
    desc: 'Structured market and user research, business goal alignment, and success metric definition establish the validated foundation every subsequent decision in the engagement is built on.',
  },
  {
    stage: 'STAGE 02',
    title: 'Product Strategy & UX Design',
    desc: 'Research findings shape a prioritized roadmap, feature scope, wireframes, and UI design, culminating in an interactive prototype tested with real feedback before engineering is committed to.',
  },
  {
    stage: 'STAGE 03',
    title: 'MVP Engineering',
    desc: 'With strategy and design confirmed, frontend and backend development, API-first integrations, and a modular, scalable architecture are executed against a defined technical standard ready for real-world conditions.',
  },
  {
    stage: 'STAGE 04',
    title: 'Quality Assurance & Launch',
    desc: 'Every release goes through structured functional, performance, and regression testing before deployment. Nothing ships to a deadline. It ships when it is ready to perform under real usage conditions.',
  },
  {
    stage: 'STAGE 05',
    title: 'Measure & Learn',
    desc: 'Post-launch behavioural analytics, user feedback, and performance data are reviewed to determine what the product has confirmed, what it has not, and what that means for the next stage.',
  },
  {
    stage: 'STAGE 06',
    title: 'Scale with Confidence',
    desc: 'Insights from the measure stage drive roadmap updates, architecture improvements, and new feature development, ensuring every decision at scale carries the same evidence-based rigour as the build itself.',
  },
]

const FOUNDER_REASONS = [
  {
    title: 'Discovery-First Product Thinking',
    desc: 'Business and market decisions are evaluated before engineering begins, ensuring every technical choice throughout the engagement serves a confirmed and justified product purpose.',
  },
  {
    title: 'Senior-Led Product Teams',
    desc: 'Every engagement is led by senior strategists, designers, and engineers with the experience to make the right calls under real product and market constraints.',
  },
  {
    title: 'Scalable Architecture from Day One',
    desc: 'Technical decisions are made against long-term product requirements from the start, so the architecture built for the first release supports the business that follows it.',
  },
  {
    title: 'Business-Driven Product Decisions',
    desc: 'Features are tied to a measurable business outcome before entering scope, ensuring nothing reaches the build without a validated reason to exist.',
  },
  {
    title: 'Transparent Agile Delivery',
    desc: 'Structured sprint planning, clear communication, and full progress visibility keep every stakeholder aligned throughout the engagement with no ambiguity about where the product stands.',
  },
  {
    title: 'Long-Term Product Partnership',
    desc: 'The engagement continues beyond launch through structured iteration cycles, supporting product growth with the same level of strategic and technical rigour applied from day one.',
  },
]

const TIMELINE_PHASES = [
  {
    title: 'Discovery & Planning',
    icon: '/assets/mvp-development/discovery-print.png',
    desc: 'Every strategic decision is validated before development begins, creating a roadmap driven by evidence instead of assumptions.',
  },
  {
    title: 'Design & Prototyping',
    icon: '/assets/mvp-development/UI-UX.png',
    desc: 'Ideas are translated into interactive experiences that stakeholders can review, refine, and validate before development begins.',
  },
  {
    title: 'Development',
    icon: '/assets/mvp-development/web-development-1.svg',
    desc: 'Engineering focuses on the functionality that creates immediate value while laying the groundwork for future product evolution.',
  },
  {
    title: 'Testing & Launch',
    icon: '/assets/mvp-development/apps-launch.svg',
    desc: 'Before release, every critical workflow is verified to ensure the MVP performs reliably and is ready for real user adoption.',
  },
]

const COST_TIERS = [
  {
    title: 'Basic MVP',
    price: '$15,000 to $50,000',
    features: [
      'Single platform, core user flows only',
      'Single database architecture, relational or NoSQL',
      'OAuth2 or JWT authentication',
      'Up to one third-party integration',
    ],
  },
  {
    title: 'Mid-Complexity MVP',
    price: '$50,000 to $150,000',
    features: [
      'Web and mobile, up to 40 API endpoints',
      'Multi-database architecture with caching layer',
      'Up to five third-party integrations',
      'Scalable backend with independently deployable services',
    ],
  },
  {
    title: 'Complex MVP',
    price: '$150,000 to $300,000+',
    features: [
      'AI capabilities, compliance infrastructure, or marketplace logic',
      'Multi-platform delivery across web, iOS, and Android',
      'Regulatory requirements: GDPR, HIPAA, or PCI-DSS built in',
      'Senior-led architecture designed for production-grade scale',
    ],
  },
]

const FAQS = [
  {
    q: 'What is MVP development, and why does it matter for startups?',
    a: 'MVP development is the process of building a functional, minimum-scope version of a product to test real market demand before committing to a full build. It replaces assumption with evidence, so founders make funding, hiring, and roadmap decisions based on actual user behaviour, not internal opinion.',
  },
  {
    q: 'How much does MVP development cost?',
    a: 'Cost depends on product complexity, platforms, integrations, and team composition, so there is no honest fixed price without a discovery phase. Any MVP development company quoting a firm number before understanding your product should be treated with caution.',
  },
  {
    q: 'How long does MVP development take, from idea to launch?',
    a: 'The timeline is shaped primarily by platform count, integration complexity, and compliance needs, not by how big the idea feels. A regulated FinTech MVP will typically take longer than a simple SaaS tool, even with a similar feature set.',
  },
  {
    q: 'What is the difference between an MVP, a prototype, and a proof of concept?',
    a: 'A proof of concept confirms something can be built, a prototype shows what it will look and feel like, and an MVP is a functional product tested with real users to validate demand. They answer three different questions: can we build it? Does it feel right? And will people use it? Most commercial products aimed at real users and investors need an MVP, not just a prototype.',
  },
  {
    q: 'What features should be included in a Minimum Viable Product?',
    a: "Only the features needed to test your riskiest assumption, usually the core workflow that delivers your product's primary value. Feature overload is one of the most common reasons MVPs fail, since founders often build what they imagine users want instead of what has been validated.",
  },
  {
    q: 'Do I need technical expertise to work with an MVP development company?',
    a: "No. A properly structured MVP development company manages strategy, design, and engineering end-to-end. What you need is clarity on the business problem you're solving, since that shapes every technical decision that follows.",
  },
  {
    q: 'How do you validate an MVP before or after launch?',
    a: 'Pre-launch, through user research and assumption testing during discovery. Post-launch, through real usage data, behavioural analytics, and direct user feedback. Skipping the pre-launch stage turns an MVP into a small product release instead of a validation system.',
  },
  {
    q: 'What happens after the MVP is launched?',
    a: 'Launch is where assumptions start getting replaced by real evidence, not where the engagement ends. This includes analysing user behaviour, prioritising the roadmap, strengthening architecture, and expanding functionality based on actual usage.',
  },
  {
    q: "Can an MVP fail even if it's built correctly?",
    a: 'Yes. Most MVP failures come from solving the wrong problem, skipping user validation, or building unrequested features, all of which happen before development starts. Strong engineering cannot fix a flawed strategy.',
  },
  {
    q: 'Which industries benefit most from MVP software development?',
    a: 'Most commonly FinTech, Healthcare, SaaS, Logistics, Education, and Retail, though the approach applies anywhere user behaviour is uncertain, and capital risk needs to be minimised. Regulated industries require compliance built in from day one, not added later.',
  },
  {
    q: 'Is MVP development only for startups, or can established businesses use it too?',
    a: 'Established businesses use MVPs just as often, typically to test a new product line, a pivot, or a new business model without committing full resources upfront. The logic is the same regardless of company size: confirm before you scale.',
  },
  {
    q: 'How do you choose the right MVP development company?',
    a: 'Look for a team that leads with discovery rather than an instant quote, involves senior strategists and engineers from the start, and designs for scalable architecture, not just fast delivery. A company that says “we don’t know the cost yet” before understanding your product is usually the more trustworthy one.',
  },
]

export default function MvpDevelopment() {
  useEffect(() => {
    const title = 'MVP Development Services for Startups | Inceptives Digital'
    const desc =
      'MVP development services built around validation. Senior-led teams, scalable architecture, and a structured process from discovery to launch. Talk to us today.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/mvp-development')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-clip">
      {/* 1. HERO SECTION (100vh, Text Vertically Centered, Right-Bottom Flush Banner Image) */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row lg:items-center bg-[#0F0F0F] pt-28 sm:pt-32 lg:pt-24 pb-0 overflow-hidden">
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="w-full lg:w-[52%] xl:w-[48%] text-left space-y-5 py-8 lg:py-16">
            <span className="inline-block text-[#00CE44] text-[13.5px] sm:text-[15px] font-semibold leading-[1.35] tracking-[1px]">
              MVP Development Services
            </span>

            <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white leading-[1.14] tracking-tight">
              Where Product Ideas Become{' '}
              <span className="text-[#00CE44]">Validated Decisions</span>
            </h1>

            <p className="text-white/85 text-[15px] sm:text-[16.5px] leading-[1.68]">
              Speed without validation is just a faster route to the wrong product. At Inceptives Digital, our MVP development company helps startups and product teams reduce product risk through disciplined MVP development, aligning assumptions, user needs, and technical direction before engineering begins. Move forward with clarity that supports both product execution and investment decisions.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
              >
                <span>Validate My Product Idea</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/30 bg-transparent text-white font-semibold px-6 py-3.5 text-sm sm:text-[15px] hover:border-[#00CE44] hover:text-[#00CE44] transition-colors"
              >
                <span>Schedule A Call</span>
              </a>
            </div>

            {/* Trust Logos (Below CTAs, Larger Size) */}
            <div className="flex flex-wrap items-center gap-7 sm:gap-9 pt-4">
              <img
                src="/assets/mvp-development/clutch.png"
                alt="Clutch Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
              <img
                src="/assets/mvp-development/bark.png"
                alt="Bark Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
              <img
                src="/assets/mvp-development/trustpilot.png"
                alt="Trustpilot Reviews"
                className="h-9 sm:h-11 w-auto object-contain select-none"
              />
            </div>
          </div>
        </div>

        {/* Right-Side Vertically Centered Banner Image */}
        <img
          src="/assets/mvp-development/product-mvp-banner.webp"
          alt="MVP Development Product Showcase"
          loading="eager"
          className="relative z-0 mx-auto mt-6 mb-10 w-full max-w-[620px] h-auto block object-contain select-none pointer-events-none lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:my-0 lg:w-[48%] xl:w-[50%] lg:max-w-[820px]"
        />
      </section>

      {/* 2. WHY MOST MVPS FAIL BEFORE THEY LAUNCH (Left Icon List + Right Collage Image) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.16]">
                Why Most MVPs Fail Before They Launch
              </h2>
              <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
                Most MVPs do not fail because of bad engineering. They fail because the wrong product gets built with conviction and no validation. The causes are consistent:
              </p>

              <ul className="space-y-3.5 py-2">
                {FAIL_CAUSES.map((cause) => (
                  <li key={cause.title} className="flex items-center gap-4">
                    <img
                      src={cause.icon}
                      alt={cause.title}
                      loading="lazy"
                      className="w-8 h-8 object-contain shrink-0 select-none"
                    />
                    <span className="text-white text-[15px] sm:text-[16px] font-medium">
                      {cause.title}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
                These create debt the moment scale is required. However, the disciplined MVP development services, grounded in evidence and strategy from day one, are what change that outcome.
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src="/assets/mvp-development/client.webp"
                alt="Why Most MVPs Fail Before They Launch"
                loading="lazy"
                className="w-full max-w-[500px] h-auto object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALIDATE PRODUCT DEMAND (Black Band, 2-Column Text Only) */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
            <div className="lg:col-span-5">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-white leading-[1.2]">
                Validate Product Demand Before Committing to Full-Scale Development
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-[1.68]">
                An MVP is not a smaller version of your product. It is a validation system for confirming the right product before full investment is committed.
              </p>
              <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-[1.68]">
                Experienced teams build MVPs to reduce the cost of being wrong, testing market demand, user behaviour, and willingness to pay before committing to a full build. The output is not just a product. It establishes the foundation for everything that follows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROTOTYPE, POC, OR MVP COMPARISON TABLE */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              Prototype, PoC, or MVP:{' '}
              <span className="text-[#00CE44]">Which One Do You Actually Need?</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px]">
              The distinction between these three engagements is frequently misunderstood. Getting it right before committing to a scope is one of the most consequential early product decisions.
            </p>
          </div>

          <div className="rounded-[16px] overflow-x-auto border border-white/10 bg-[#18191d] text-left">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="bg-[#00CE44] text-black font-bold text-sm sm:text-base uppercase tracking-wide">
                  <th className="px-5 py-4 text-left w-[18%]">Feature</th>
                  <th className="px-5 py-4 text-left w-[27%]">Proof of Concept (PoC)</th>
                  <th className="px-5 py-4 text-left w-[27%]">Prototype</th>
                  <th className="px-5 py-4 text-left w-[28%]">MVP (Minimum Viable Product)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-4 font-semibold text-white text-[15px] align-top">
                      {row.feature}
                    </td>
                    <td className="px-5 py-4 text-white/80 text-[14.5px] leading-relaxed align-top">
                      {row.poc}
                    </td>
                    <td className="px-5 py-4 text-white/80 text-[14.5px] leading-relaxed align-top">
                      {row.proto}
                    </td>
                    <td className="px-5 py-4 text-white/90 font-medium text-[14.5px] leading-relaxed align-top">
                      {row.mvp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. WHEN IS AN MVP THE RIGHT PRODUCT STRATEGY? (4 + 3 Centered Pills + Full-Width Bottom Banner) */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#111111] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/mvp-development/product-strategy-bg.png")' }}
      >
        <div className="absolute inset-0 bg-black/80 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              When Is an MVP the{' '}
              <span className="text-[#00CE44]">Right Product Strategy?</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
              An MVP is the right move at specific, high-risk decision points where the cost of being wrong is still manageable. Scenarios where an MVP is the correct next step:
            </p>
          </div>

          <div className="space-y-4">
            {/* Row 1: 4 Horizontal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {STRATEGY_SCENARIOS.slice(0, 4).map((item) => (
                <div
                  key={item.text}
                  className="bg-[#1E1E1E]/95 rounded-[12px] px-5 py-4 border border-white/[0.06] flex items-center gap-4"
                >
                  <img
                    src={item.icon}
                    alt=""
                    loading="lazy"
                    className="w-11 h-11 object-contain shrink-0 select-none"
                  />
                  <p className="text-white/90 text-[13.5px] sm:text-[14px] leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2: 3 Centered Horizontal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
              {STRATEGY_SCENARIOS.slice(4, 7).map((item) => (
                <div
                  key={item.text}
                  className="bg-[#1E1E1E]/95 rounded-[12px] px-5 py-4 border border-white/[0.06] flex items-center gap-4"
                >
                  <img
                    src={item.icon}
                    alt=""
                    loading="lazy"
                    className="w-11 h-11 object-contain shrink-0 select-none"
                  />
                  <p className="text-white/90 text-[13.5px] sm:text-[14px] leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 3: Full-Width Dark Bottom Callout Card */}
            <div className="pt-4">
              <div className="bg-[#151515]/95 rounded-[14px] px-6 sm:px-8 py-5 border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center gap-5 text-left">
                <img
                  src="/assets/mvp-development/mvp-last.png"
                  alt=""
                  loading="lazy"
                  className="w-14 h-14 object-contain shrink-0 select-none"
                />
                <div className="space-y-1">
                  <h3 className="text-[18px] sm:text-[20px] font-bold leading-snug text-[#00CE44]">
                    These are precisely the situations Inceptives Digital is built for.
                  </h3>
                  <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed">
                    The earlier that conversation starts, the stronger the foundation of every decision after it rests on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MID-PAGE CTA BANNER 1 */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#0D0D0D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/mvp-development/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2] max-w-3xl mx-auto">
            Know Whether Your Idea Is{' '}
            <span className="text-[#00CE44]">Ready for an MVP</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            Not every idea needs the same starting point. A discovery session helps determine whether an MVP is the right approach, what should be included in version one, and what can wait until further testing.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
            >
              <span>Discuss Your MVP Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. END-TO-END MVP DEVELOPMENT SERVICES (6 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              End-to-End <span className="text-[#00CE44]">MVP Development Services</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
              Inceptives Digital delivers end-to-end MVP development services, structured to take a well-tested idea from strategy to a market-ready product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {MVP_SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="bg-[#252525] rounded-[12px] p-6 sm:p-7 border border-white/[0.06] flex flex-col gap-3"
              >
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00CE44] leading-snug">
                  {svc.title}
                </h3>
                <p className="text-white/85 text-[14.5px] leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. THE FRAMEWORK BEHIND EVERY SUCCESSFUL MVP DEVELOPMENT (5-Stage Timeline) */}
      <section className="w-full bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-5xl mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.16]">
              The Framework Behind Every Successful MVP Development
            </h2>
            <p className="text-white/85 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              Every MVP development engagement at Inceptives Digital follows a structured six-stage process, where each stage builds directly on the one before it and informs everything that follows.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-7">
            {FRAMEWORK_STAGES.map((st) => (
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

      {/* 9. MID-PAGE CTA BANNER 2 */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#151515] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/mvp-development/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2] max-w-3xl mx-auto">
            Every Successful MVP Starts With a{' '}
            <span className="text-[#00CE44]">Clear Plan</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            Let&apos;s discuss defining the roadmap that gives your product the strongest chance of product-market fit.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
            >
              <span>Plan My MVP Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. REASONS FOUNDERS RELY ON INCEPTIVES DIGITAL (6 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              The Reasons Founders Rely on{' '}
              <span className="text-[#00CE44]">Inceptives Digital</span> to Develop MVPs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {FOUNDER_REASONS.map((item) => (
              <div
                key={item.title}
                className="bg-[#252525] rounded-[12px] p-6 sm:p-7 border border-white/[0.06] flex flex-col gap-3"
              >
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00CE44] leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[14.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CASE STUDIES (Homepage Component) */}
      <CaseStudies heading="Case Studies That Prove Our Approach to MVP Development" />

      {/* 12. TESTIMONIALS (Homepage Component) */}
      <Testimonials />

      {/* 13. INDUSTRIES (Homepage Grid Design, Icon + White Title / Black Hover, No Extra Description) */}
      <IndustriesSection
        heading="Product Expertise Across 20+ Industries"
        subtitle="Inceptives Digital brings domain-specific product knowledge to every engagement, with MVP development experience spanning more than 20 industries across regulated and consumer markets."
        showDesc={false}
      />

      {/* 14. ESTIMATED TIMELINE FOR MVP DEVELOPMENT (Sticky Left + Stacking Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-28">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-4">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
                <span className="text-[#00CE44]">Estimated Timeline for MVP Development:</span>{' '}
                What to Expect at Each Stage
              </h2>
              <p className="text-white/80 text-[15px] sm:text-[16px] leading-[1.68] max-w-md">
                Most MVP software development engagements at Inceptives Digital move from discovery to market release across four structured phases. The timeline is determined by product scope, platform requirements, and compliance obligations.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 pb-8">
              {TIMELINE_PHASES.map((phase, idx) => (
                <div
                  key={phase.title}
                  style={{
                    top: `${112 + idx * 24}px`,
                    zIndex: idx + 1,
                  }}
                  className="lg:sticky bg-[#222222] rounded-[16px] p-7 sm:p-8 border border-white/[0.08] shadow-[0_14px_36px_rgba(0,0,0,0.45)] flex flex-col gap-3"
                >
                  <div className="w-11 h-11 p-0 bg-transparent border-0 flex items-center justify-center">
                    <img
                      src={phase.icon}
                      alt={phase.title}
                      loading="lazy"
                      className="w-full h-full object-contain block select-none"
                    />
                  </div>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#00CE44] leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-white/90 text-[15px] leading-[1.68]">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 15. TECHNOLOGY STACK */}
      <TechStackTabs />

      {/* 16. HOW MUCH DOES IT COST TO BUILD AN MVP? (3 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2]">
              How Much Does It Cost to{' '}
              <span className="text-[#00CE44]">Build an MVP?</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px]">
              MVP development investment at Inceptives Digital is scoped after discovery, once the product&apos;s actual requirements are understood. The following tiers reflect what each complexity level typically demands.
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

                <div className="py-5 border-b border-white/15">
                  <span className="text-white/75 text-xs sm:text-sm block mb-1.5">
                    Estimated Investment
                  </span>
                  <div className="text-[22px] sm:text-[24px] font-bold text-[#00CE44] leading-tight">
                    {tier.price}
                  </div>
                </div>

                <ul className="pt-5 space-y-3">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-white/85 text-[14.5px] leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00CE44] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. BOTTOM CTA BANNER */}
      <section
        className="relative w-full py-16 sm:py-20 bg-[#0D0D0D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/mvp-development/product-cta.png")' }}
      >
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center space-y-5">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.2] max-w-3xl mx-auto">
            Let&apos;s Define What Your{' '}
            <span className="text-[#00CE44]">MVP Needs to Prove</span>
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            If you&apos;re ready to move from concept to market with confidence, let&apos;s discuss what your MVP needs to prove first.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
            >
              <span>Talk to a Product Strategist</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 18. FAQS (Homepage Component with 12 MVP FAQs) */}
      <FAQSection faqs={FAQS} heading="Frequently Asked Questions" />
    </div>
  )
}
