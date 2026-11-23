import { useEffect, useState } from 'react'
import { ArrowRight, Calendar, BadgeCheck } from 'lucide-react'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import IndustriesSection from '../components/IndustriesSection'
import FAQSection from '../components/FAQSection'
import TechStackTabs from './Services/mobile-app-development/components/TechStackTabs'

const EXPERTISE_CARDS = [
  {
    title: 'Software Consulting',
    icon: '/assets/custom-software-development/software1.svg',
    desc: 'We provide strategic consulting to set specific goals and document a customized project plan to ensure that all steps of development align with your business objectives and strategies. Our service is aimed at reducing risks and increasing ROI.',
  },
  {
    title: 'Full-Stack Development',
    icon: '/assets/custom-software-development/software2.svg',
    desc: 'We successfully deliver robust, agile, and high-performing software solutions across the entire web application lifecycle. Our end-to-end full-stack development ensures successful software delivery.',
  },
  {
    title: 'Product Design',
    icon: '/assets/custom-software-development/software3.svg',
    desc: 'We specialize in creating creative, visually attractive, and intuitive user interfaces. Each design representation that we create is checked in terms of the user to ensure the user-first designs are able to satisfy and exceed expectations.',
  },
  {
    title: 'MVP Development',
    icon: '/assets/custom-software-development/software4.svg',
    desc: 'Launch faster and smarter with our MVP development services. We help you validate ideas, attract early adopters, and scale efficiently by building lean, functional products that evolve with your vision.',
  },
  {
    title: 'API Development',
    icon: '/assets/custom-software-development/software5.svg',
    desc: 'We design and implement secure, reliable APIs that seamlessly connect your software with third-party platforms. This ensures interoperability, efficiency, and a connected business ecosystem.',
  },
  {
    title: 'Custom CRM Development',
    icon: '/assets/custom-software-development/software6.svg',
    desc: 'Our custom CRM development team builds customized CRM solutions that make support, sales, and marketing processes smooth, resulting in optimized customer relations, helping your business generate leads, improve engagement, and boost sales.',
  },
]

const DOMAINS = [
  { title: 'Enterprise Software Development', icon: '/assets/custom-software-development/domain-enterprise.webp' },
  { title: 'Business Process Automation', icon: '/assets/custom-software-development/domain-bpa.webp' },
  { title: 'Software Product Development', icon: '/assets/custom-software-development/domain-product.webp' },
  { title: 'SaaS Application Development', icon: '/assets/custom-software-development/domain-saas.png' },
  { title: 'Web Application Development', icon: '/assets/custom-software-development/domain-web.webp' },
  { title: 'Custom CRM Development', icon: '/assets/custom-software-development/domain-crm.webp' },
  { title: 'ERP Software Development', icon: '/assets/custom-software-development/domain-erp.webp' },
  { title: 'API Development & System Integration', icon: '/assets/custom-software-development/domain-api.webp' },
  { title: 'Legacy Software Modernization', icon: '/assets/custom-software-development/domain-legacy.svg' },
  { title: 'Cloud Software Development', icon: '/assets/custom-software-development/domain-cloud.webp' },
  { title: 'Data & Analytics Solutions', icon: '/assets/custom-software-development/domain-data.svg' },
  { title: 'IoT Software Development', icon: '/assets/custom-software-development/domain-iot.webp' },
]

const PROCESS_STAGES = [
  {
    num: '01',
    tab: 'Discover',
    title: 'Discover & Define',
    desc: 'We begin by understanding your business processes, operational challenges, users, and technical landscape. Through workshops, stakeholder interviews, and solution architecture planning, we define a roadmap before development begins.',
  },
  {
    num: '02',
    tab: 'Architect',
    title: 'Architect',
    desc: 'We design the software architecture, data models, integrations, APIs, and infrastructure required to support performance, security, and future scalability from day one.',
  },
  {
    num: '03',
    tab: 'Design',
    title: 'Design',
    desc: 'User flows, wireframes, and interface designs are created around real business workflows, ensuring the software is intuitive, efficient, and ready for engineering.',
  },
  {
    num: '04',
    tab: 'Engineer',
    title: 'Engineer',
    desc: 'Our developers build secure, scalable software using modern frameworks, modular architecture, CI/CD pipelines, and clean engineering practices that support long-term maintainability.',
  },
  {
    num: '05',
    tab: 'Validate',
    title: 'Validate',
    desc: 'Every release undergoes functional testing, performance testing, security validation, API verification, and cross-platform quality assurance before deployment.',
  },
  {
    num: '06',
    tab: 'Deploy',
    title: 'Deploy',
    desc: 'We manage deployment, cloud infrastructure, production rollout, monitoring, and system configuration to ensure a reliable and seamless launch.',
  },
  {
    num: '07',
    tab: 'Optimize',
    title: 'Optimize',
    desc: 'Software continues to evolve after launch. We analyze user behavior, monitor performance, refine workflows, and introduce new capabilities as your business grows.',
  },
]

const INNOVATION_PILLARS = [
  {
    title: 'Cloud-Native Software',
    desc: 'Build scalable applications on AWS, Microsoft Azure, and Google Cloud using microservices, containers, and serverless architecture that improve reliability, performance, and long-term scalability.',
  },
  {
    title: 'Enterprise Software Solutions',
    desc: 'Modernize business operations with custom ERP systems, CRM platforms, internal portals, workflow automation, and business applications designed around your unique processes.',
  },
  {
    title: 'AI-Powered Software',
    desc: 'Integrate AI assistants, predictive analytics, intelligent automation, and large language models (LLMs) to streamline operations, improve decision-making, and deliver smarter user experiences.',
  },
]

const METHODOLOGIES = [
  {
    title: 'Agile',
    desc: 'Deliver software in short, iterative sprints that accelerate feedback, adapt to changing requirements, and keep your product aligned with business goals.',
  },
  {
    title: 'Scrum',
    desc: 'Manage development through structured sprint planning, daily collaboration, and continuous reviews that improve transparency and delivery predictability.',
  },
  {
    title: 'Waterfall',
    desc: 'Follow a structured, phase-by-phase approach for projects with fixed requirements, detailed documentation, and clearly defined delivery milestones.',
  },
  {
    title: 'DevOps',
    desc: 'Accelerate software delivery through CI/CD pipelines, infrastructure automation, continuous monitoring, and reliable deployment practices.',
  },
]

const EMERGING_TECH = [
  {
    title: 'AI & Machine Learning',
    desc: 'Develop intelligent software that leverages predictive analytics, intelligent automation, anomaly detection, and machine learning models to improve business decisions and operational efficiency.',
  },
  {
    title: 'Generative AI',
    desc: 'Integrate OpenAI, Gemini, and large language models (LLMs) to power AI assistants, knowledge management, content generation, workflow automation, and conversational experiences.',
  },
  {
    title: 'Internet of Things (IoT)',
    desc: 'Connect devices, sensors, and equipment through IoT platforms that enable real-time monitoring, asset tracking, predictive maintenance, and operational visibility.',
  },
  {
    title: 'Blockchain',
    desc: 'Build secure software using smart contracts, decentralized identity, and distributed ledger technology to improve transparency, traceability, and transaction integrity.',
  },
  {
    title: 'Data Engineering & Analytics',
    desc: 'Transform raw business data into actionable insights with modern data pipelines, real-time dashboards, business intelligence, and predictive reporting.',
  },
  {
    title: 'Cloud-Native Applications',
    desc: 'Develop scalable software on AWS, Google Cloud, and Microsoft Azure using microservices, containers, serverless computing, and cloud-native infrastructure built for continuous growth.',
  },
]

const ENGAGEMENT_MODELS = [
  {
    title: 'Software Development Outsourcing',
    desc: 'Entrust your entire software development lifecycle to our team, from product strategy and engineering to deployment and long-term support.',
  },
  {
    title: 'Dedicated Software Development Team',
    desc: 'Extend your business with a dedicated team of designers, developers, QA engineers, and project managers focused exclusively on your product.',
  },
  {
    title: 'Staff Augmentation',
    desc: 'Quickly scale your in-house team with experienced software engineers who integrate seamlessly into your existing workflows and development process.',
  },
]

const PRODUCT_THINKING = [
  {
    title: 'Product-First Thinking',
    desc: 'Every decision begins with your users, business goals, and operational challenges before technology enters the conversation.',
  },
  {
    title: 'Built to Scale',
    desc: 'We design architectures that support future growth without unnecessary rebuilds or technical debt.',
  },
  {
    title: 'Engineering Excellence',
    desc: 'Clean architecture, secure coding practices, automated testing, and modern engineering standards drive every solution.',
  },
  {
    title: 'Transparent Collaboration',
    desc: 'Stay involved through clear communication, sprint reviews, and complete visibility throughout development.',
  },
  {
    title: 'Quality Without Compromise',
    desc: 'Performance, security, usability, and reliability are validated before every production release.',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'We continue optimizing, maintaining, and evolving your software long after the initial launch.',
  },
]

const FAQS = [
  {
    q: 'What are custom software development services?',
    a: 'Custom software development is the end-to-end process of designing, building, deploying, and maintaining software tailored specifically to your business workflows, users, and growth goals rather than relying on generic off-the-shelf tools.',
  },
  {
    q: 'How is custom software different from off-the-shelf software?',
    a: 'Off-the-shelf software forces your team to adapt to fixed features and recurring per-seat licensing. Custom software is architected around your exact operations, integrates seamlessly with your existing stack, and gives you full IP ownership.',
  },
  {
    q: 'How much does custom software development cost?',
    a: 'A focused MVP or proof-of-concept typically starts from $15,000–$25,000. Full production enterprise or multi-platform systems generally range from $50,000 to $200,000+, scoped accurately during Discovery.',
  },
  {
    q: 'How long does it take to build custom software?',
    a: 'An MVP or focused internal system typically takes 8–12 weeks, while complex enterprise platforms with integrations and compliance requirements take 3–6+ months depending on scope.',
  },
  {
    q: 'Can custom software integrate with our existing systems?',
    a: 'Yes. We design secure APIs and integration layers to connect seamlessly with your CRM, ERP, payment gateways, databases, analytics tools, and third-party cloud platforms.',
  },
  {
    q: 'What engagement models do you offer?',
    a: 'We offer full-cycle Software Development Outsourcing, Dedicated Software Development Teams, and Staff Augmentation depending on whether you want turnkey delivery or embedded engineering capacity.',
  },
  {
    q: 'Do we own the source code and intellectual property?',
    a: 'Yes. You retain 100% ownership of the source code, architecture documentation, design assets, and intellectual property upon delivery.',
  },
  {
    q: 'How do we get started on a custom software project?',
    a: 'Start with a free consultation and Discovery Sprint to align on business goals, technical architecture, timeline, and budget before engineering begins.',
  },
]

export default function CustomSoftwareDevelopment() {
  const [activeStage, setActiveStage] = useState(0)

  useEffect(() => {
    const title = 'End-to-End Custom Software Development Services | Inceptives Digital'
    const desc =
      'Top-tier custom software development company with 8+ years of experience and 70+ custom solutions delivered across 20+ industries.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/custom-software-development')
  }, [])

  return (
    <div className="w-full bg-[#151515] text-white overflow-x-clip">
      {/* 1. HERO SECTION (100vh + bg-cover bg-bottom with software-banner.png) */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-start bg-[#000000] bg-cover bg-bottom bg-no-repeat pt-32 sm:pt-36 lg:pt-40 pb-48 sm:pb-64 overflow-hidden"
        style={{ backgroundImage: 'url("/assets/custom-software-development/software-banner.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-center flex flex-col items-center space-y-5">
          <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white leading-[1.14] tracking-tight max-w-4xl">
            End-to-End{' '}
            <span className="text-[#00CE44]">Custom Software Development</span> Services
          </h1>

          <p className="text-white/90 text-[15px] sm:text-[17px] leading-[1.68] max-w-3xl">
            We are a top-tier custom software development company with 8+ years of experience accumulated and delivered 70+ custom solutions across 20+ industries. From initiation to deployment, we follow a comprehensive process to develop custom solutions specific to your business and market requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
            >
              <span>Get a Call Now!</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/35 bg-black/40 text-white font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:border-[#00CE44] hover:text-[#00CE44] transition-colors"
            >
              <span>Schedule a Call</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. OUR EXPERTISE IN CUSTOM SOFTWARE DEVELOPMENT SERVICES (6 Cards) */}
      <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8 text-left">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              Our Expertise in{' '}
              <span className="text-[#00CE44]">Custom Software Development</span> Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {EXPERTISE_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-[#252525] rounded-[12px] p-6 sm:p-7 border border-white/[0.06] flex flex-col gap-4"
              >
                <div className="w-11 h-11 p-0 bg-transparent border-0 flex items-center justify-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-contain block select-none"
                  />
                </div>
                <h3 className="text-[19px] sm:text-[20px] font-bold text-[#00CE44] leading-snug">
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

      {/* 3. CUSTOM SOFTWARE DEVELOPMENT ACROSS MULTIPLE DOMAINS (Left Heading + CTAs, Right 3x4 Green-Bordered Cards) */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#0B0B0B] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/custom-software-development/smartbanner-feature.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/80 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: White Heading + Dual CTAs */}
            <div className="lg:col-span-5 text-left space-y-6">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-white leading-[1.16]">
                Custom Software Development Across Multiple Domains
              </h2>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-[4px] bg-[#00CE44] text-black font-semibold px-6 py-3 text-sm hover:bg-[#00b53c] transition-colors"
                >
                  <span>Start Your Project</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-white/25 bg-black/50 text-white font-semibold px-5 py-3 text-sm hover:border-[#00CE44] hover:text-[#00CE44] transition-colors"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Schedule a Strategy Call</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3x4 Grid of Green-Bordered Domain Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-left">
              {DOMAINS.map((dom) => (
                <div
                  key={dom.title}
                  className="bg-black/75 rounded-[8px] px-4 py-4 border border-[#00CE44]/65 hover:border-[#00CE44] hover:bg-[#00CE44]/10 transition-colors flex items-center gap-3.5"
                >
                  <img
                    src={dom.icon}
                    alt={dom.title}
                    loading="lazy"
                    className="w-8 h-8 object-contain shrink-0 select-none"
                  />
                  <h3 className="text-[13.5px] sm:text-[14px] font-bold text-white leading-snug">
                    {dom.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MID CTA BANNER (2-Column: Left Text + CTA, Right Team + Green Circle Badges) */}
      <section className="w-full bg-[#1B1B1B] py-14 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 text-left space-y-5">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-white leading-[1.18]">
                Start Your Custom Software Journey With Inceptives Digital Today
              </h2>
              <p className="text-white/85 text-[15px] sm:text-[16px] leading-[1.68]">
                We provide strategic consulting to set specific goals and document a customized project plan to ensure that all steps of development align with your business objectives and strategies. Our service is aimed at reducing risks and increasing ROI.
              </p>
              <div className="pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-[4px] bg-[#00CE44] text-black font-semibold px-7 py-3.5 text-sm sm:text-[15px] hover:bg-[#00b53c] transition-colors"
                >
                  <span>Get A Call Now!</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src="/assets/custom-software-development/software-image.svg"
                alt="Start Your Custom Software Journey With Inceptives Digital"
                loading="lazy"
                className="w-full max-w-[460px] h-auto block object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. 7-STAGE INTERACTIVE HORIZONTAL PROCESS TABS (Industries Process Pill Style) */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#00CE44] leading-[1.18]">
              Inceptives Digital&apos;s Process for Custom Software Development Solutions
            </h2>
            <p className="text-white/80 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              Every successful software product follows a process that reduces uncertainty, validates decisions, and builds for long-term scalability.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-5">
            {/* Horizontal 7 Rounded-Full Pill Stepper */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {PROCESS_STAGES.map((st, idx) => {
                const isActive = activeStage === idx
                return (
                  <div
                    key={st.tab}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveStage(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setActiveStage(idx)
                      }
                    }}
                    className={`flex items-center gap-2.5 rounded-full p-1.5 pr-4 cursor-pointer select-none transition-colors ${
                      isActive
                        ? 'bg-[#00CE44] text-white'
                        : 'bg-[#222222] text-white/85 hover:bg-[#2d2d2d]'
                    }`}
                  >
                    <span className="w-8 h-8 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                      {st.num}
                    </span>
                    <span className="text-[13.5px] sm:text-[14px] font-semibold truncate">
                      {st.tab}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Active Stage Detail Card */}
            <div className="bg-[#333333] rounded-[14px] px-7 sm:px-10 py-9 sm:py-12 min-h-[200px] flex flex-col justify-center text-left border border-white/[0.06]">
              <h3 className="text-[22px] sm:text-[26px] font-bold text-white mb-3">
                {PROCESS_STAGES[activeStage].title}
              </h3>
              <p className="text-white/90 text-[15px] sm:text-[16px] leading-[1.7] max-w-4xl">
                {PROCESS_STAGES[activeStage].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DRIVING INNOVATION (custom-banner2.png Background + 3 Centered Cards) */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#0B0B0B] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/custom-software-development/custom-banner2.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              Driving Innovation as a Custom Software Development Company in USA
            </h2>
            <p className="text-white/85 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              Technology evolves quickly. Our custom software development services help businesses build modern software that&apos;s ready for today&apos;s needs and tomorrow&apos;s opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto text-center">
            {INNOVATION_PILLARS.map((item) => (
              <div
                key={item.title}
                className="bg-[#1F1F1F]/95 rounded-[8px] p-7 sm:p-8 min-h-[210px] border border-white/[0.06] flex flex-col items-center gap-3"
              >
                <h3 className="text-[19px] sm:text-[21px] font-bold text-[#00CE44] leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[14px] sm:text-[14.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. METHODOLOGIES (Pure Black Background + 4 Equal-Height Cards) */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              Custom Software Development Methodologies That Keep Projects Moving
            </h2>
            <p className="text-white/85 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              Every project has different delivery requirements. We apply the right software development methodology to improve collaboration, reduce risk, and deliver software efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {METHODOLOGIES.map((m) => (
              <div
                key={m.title}
                className="bg-[#1F1F1F] rounded-[8px] p-6 sm:p-7 min-h-[220px] border border-white/[0.06] flex flex-col gap-3"
              >
                <h3 className="text-[19px] sm:text-[21px] font-bold text-[#00CE44]">
                  {m.title}
                </h3>
                <p className="text-white/85 text-[14px] sm:text-[14.5px] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY STACK */}
      <TechStackTabs />

      {/* 9. EMERGING TECH (Pure Black Background + Centered Heading + 6 Cards with Green BadgeCheck) */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              Custom Software Development Powered by Emerging Tech
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {EMERGING_TECH.map((item) => (
              <div
                key={item.title}
                className="bg-[#1F1F1F] rounded-[8px] p-6 sm:p-7 border border-white/[0.06] flex flex-col gap-3"
              >
                <BadgeCheck className="w-7 h-7 text-black fill-[#00CE44] shrink-0" strokeWidth={2.2} />
                <h3 className="text-[19px] sm:text-[20px] font-bold text-[#00CE44] leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[14px] sm:text-[14.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CASE STUDIES (Homepage Component) */}
      <CaseStudies />

      {/* 11. TESTIMONIALS (Homepage Component) */}
      <Testimonials />

      {/* 12. INDUSTRIES (Full Homepage Component with Descriptions) */}
      <IndustriesSection
        heading="Custom Software Development Across Every Industry"
        subtitle="Custom software development services tailored to the unique challenges, workflows, and goals of every industry."
        showDesc={true}
      />

      {/* 13. FLEXIBLE ENGAGEMENT MODELS (custom-banner2.png Background + 3 Centered Cards) */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#0B0B0B] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/custom-software-development/custom-banner2.png")' }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              Flexible Engagement Models for Custom Software Development
            </h2>
            <p className="text-white/85 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              Whether you need an end-to-end delivery partner, a dedicated team, or specialized talent, we offer engagement models that fit your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto text-center">
            {ENGAGEMENT_MODELS.map((m) => (
              <div
                key={m.title}
                className="bg-[#1F1F1F]/95 rounded-[8px] p-7 sm:p-8 min-h-[210px] border border-white/[0.06] flex flex-col items-center gap-3"
              >
                <h3 className="text-[19px] sm:text-[21px] font-bold text-[#00CE44] leading-snug">
                  {m.title}
                </h3>
                <p className="text-white/85 text-[14px] sm:text-[14.5px] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14 & 15. BUILT ON PRODUCT THINKING + SOLID GREEN ROUNDED CTA BANNER */}
      <section className="w-full bg-[#000000] py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1220px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.18]">
              Custom Software Development Built on Product Thinking
            </h2>
            <p className="text-white/85 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              We are a custom software development company with 70+ dynamic and unique projects delivered, that too with a 100% client satisfaction rate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {PRODUCT_THINKING.map((item) => (
              <div
                key={item.title}
                className="bg-[#1F1F1F] rounded-[8px] p-6 border border-white/[0.06] flex flex-col gap-2.5"
              >
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00CE44] leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[14px] sm:text-[14.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Solid Green Rounded CTA Box */}
          <div className="mt-14 bg-[#00CE44] rounded-[20px] px-7 sm:px-12 py-10 sm:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-left">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-bold text-black leading-[1.16]">
                Ready to Replace Complexity with Better Software?
              </h2>
              <p className="text-black/85 text-[14.5px] sm:text-[16px] leading-relaxed">
                Whether you&apos;re modernizing legacy systems, automating operations, or launching a new software product, we&apos;ll help you build with confidence.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#1A1A1A] hover:bg-black text-[#00CE44] font-semibold px-7 py-3.5 text-sm sm:text-[15px] transition-colors"
              >
                <span>Start Your Software Project</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 16. FAQS (Homepage Component) */}
      <FAQSection faqs={FAQS} heading="Frequently Asked Questions" />
    </div>
  )
}
