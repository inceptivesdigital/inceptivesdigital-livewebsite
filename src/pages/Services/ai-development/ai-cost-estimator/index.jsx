import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const BASE_ESTIMATES = {
  chatbot: {
    starter: [8000, 20000, 4, 8, 'Focused conversational build'],
    business: [20000, 35000, 7, 12, 'Connected business chatbot'],
    advanced: [35000, 50000, 10, 16, 'Advanced conversational system'],
  },
  agent: {
    starter: [30000, 60000, 8, 14, 'Focused workflow agent'],
    business: [60000, 110000, 12, 20, 'Connected operational agent'],
    advanced: [110000, 180000, 18, 30, 'Advanced multi-system agent'],
  },
  app: {
    starter: [25000, 50000, 10, 16, 'Focused AI-powered product'],
    business: [50000, 100000, 16, 24, 'Production AI application'],
    advanced: [100000, 150000, 22, 36, 'Enterprise-style AI product'],
  },
}

const MODIFIERS = {
  integration: 0.15,
  data: 0.12,
  compliance: 0.18,
  platform: 0.2,
}

const ADD_ON_OPTIONS = [
  { key: 'integration', label: 'Multiple third-party integrations' },
  { key: 'data', label: 'Significant data preparation or RAG' },
  { key: 'compliance', label: 'Additional security or compliance controls' },
  { key: 'platform', label: 'Multi-platform product requirements' },
]

const DRIVERS = [
  {
    num: '01',
    title: 'Scope and workflows',
    desc: 'More user roles, workflows, permissions, edge cases, and exception paths increase engineering and QA effort.',
  },
  {
    num: '02',
    title: 'Data readiness',
    desc: 'Unstructured, inconsistent, inaccessible, or sensitive data can add preparation work before reliable AI is possible.',
  },
  {
    num: '03',
    title: 'Model strategy',
    desc: 'Hosted APIs, private deployments, retrieval systems, custom evaluation, and latency requirements carry different costs.',
  },
  {
    num: '04',
    title: 'Integrations',
    desc: 'Legacy platforms, restricted APIs, identity systems, payments, and operational tools increase implementation complexity.',
  },
  {
    num: '05',
    title: 'Security and controls',
    desc: 'Sensitive workflows may require stricter access controls, auditability, human approval, and failure handling.',
  },
  {
    num: '06',
    title: 'Expected usage',
    desc: 'Traffic, inference volume, storage, observability, and uptime expectations influence production architecture and run cost.',
  },
]

const TIMELINE_PHASES = [
  {
    phase: 'Phase 01',
    title: 'Discovery',
    desc: 'Define business outcome, users, scope, constraints, and success criteria.',
  },
  {
    phase: 'Phase 02',
    title: 'Architecture',
    desc: 'Design model, data, UX, integrations, permissions, and failure handling.',
  },
  {
    phase: 'Phase 03',
    title: 'Build',
    desc: 'Engineer application functionality, AI workflows, backend services, and integrations.',
  },
  {
    phase: 'Phase 04',
    title: 'Evaluate',
    desc: 'Test output quality, action reliability, security, latency, and edge cases.',
  },
  {
    phase: 'Phase 05',
    title: 'Launch',
    desc: 'Deploy, monitor, document, measure usage, and refine the product in production.',
  },
]

const FAQS = [
  {
    q: 'How much does custom AI development cost?',
    a: 'Custom AI development can start around $8,000 for a focused chatbot, while complex AI agents may exceed $180,000. Your project requirements and integration complexity determine the final development investment.',
  },
  {
    q: 'Can I build an AI chatbot for less than $10,000?',
    a: 'Yes, a basic AI chatbot can cost under $10,000 when it handles limited conversations without complex integrations. Custom knowledge bases and business software connections can push development costs higher.',
  },
  {
    q: 'How much does it cost to build an AI agent for business automation?',
    a: 'Custom AI agents can cost $30,000–$180,000+ to develop. Agents that handle sensitive business operations require additional engineering for system permissions and reliable task execution, which increases the overall project investment.',
  },
  {
    q: 'Can I develop an AI-powered app for under $50,000?',
    a: 'Yes, a focused AI app MVP can fit within a $50,000 budget. However, complex backend systems and multiple platform requirements can increase development costs beyond your initial estimate.',
  },
  {
    q: 'Is building an AI MVP cheaper than developing a complete AI application?',
    a: 'Yes, an AI MVP generally costs less because it focuses on essential functionality. Full applications require additional engineering for production traffic, administration, and advanced features that increase development expenses.',
  },
  {
    q: 'Is adding AI to my existing software cheaper than building a new application?',
    a: 'Yes, integrating AI into existing software often costs less when its architecture supports the new functionality. Outdated backend systems or extensive modifications can reduce those potential cost savings.',
  },
  {
    q: 'Does AI development have monthly costs after launch?',
    a: 'Yes, AI applications generate ongoing expenses through model usage, cloud hosting, and maintenance. Monthly costs depend on customer activity and infrastructure requirements, so include operating expenses in your development budget.',
  },
  {
    q: 'Do AI development companies include API and maintenance costs in their quotes?',
    a: 'Not always. Many AI development quotes exclude recurring API charges and long-term maintenance. Request a detailed cost breakdown to understand which services your initial development investment actually covers.',
  },
  {
    q: 'Can an AI development cost calculator estimate my project accurately?',
    a: 'Yes, an AI development cost calculator can estimate an initial budget range, but it cannot guarantee the final price. Technical requirements and integration complexity still require an engineering review.',
  },
  {
    q: 'Can an AI development company provide a fixed-price quote?',
    a: 'Yes, Inceptives Digital offers fixed-price quotes as an AI development company when project requirements are clear. For projects with evolving requirements, we recommend a flexible engagement model to accommodate changes.',
  },
]

const roundTo1k = (v) => Math.round(v / 1000) * 1000
const formatMoney = (v) => `$${Math.round(v / 1000).toLocaleString()}k`

export default function AiCostEstimator() {
  const [projectType, setProjectType] = useState('chatbot')
  const [complexity, setComplexity] = useState('starter')
  const [selectedAddOns, setSelectedAddOns] = useState([])
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const title = 'AI Development Cost Estimator & Pricing Calculator | Inceptives Digital'
    const desc =
      'Estimate your AI development cost for chatbots, AI agents, and custom AI applications. Interactive AI project cost calculator with realistic budget ranges and timelines.'
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
    canonical.setAttribute('href', 'https://inceptivesdigital.com/ai-development/ai-cost-estimator')
  }, [])

  const toggleAddOn = (key) => {
    setSelectedAddOns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  const base = BASE_ESTIMATES[projectType][complexity]
  const multiplier = 1 + selectedAddOns.reduce((sum, key) => sum + (MODIFIERS[key] || 0), 0)
  const lowerCost = roundTo1k(base[0] * multiplier)
  const upperCost = roundTo1k(base[1] * multiplier)
  const addedWeeks = selectedAddOns.length
  const minWeeks = base[2] + addedWeeks
  const maxWeeks = base[3] + addedWeeks * 2
  const buildProfile = base[4]

  return (
    <div id="ai-cost-estimator-page">
      <style>{ESTIMATOR_CSS}</style>

      {/* 1. HERO + INTERACTIVE AI PROJECT COST ESTIMATOR */}
      <section className="hero" id="estimator">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                Estimate Your <span>AI Development Cost</span>
              </h1>
              <p>
                Have an AI project in mind? Get a clearer starting budget for your chatbot, AI agent, or custom
                application. Our AI development cost calculator reflects the scope you select, so you can
                discuss a project quote with realistic expectations.
              </p>

              <div className="buttons-banner">
                <a href="#contact" className="btn-quote getintouch">
                  Send a Free Quote
                </a>
                <a href="#contact" className="btn-schedule openpop-shedule">
                  Schedule A Call
                </a>
              </div>
            </div>

            <div className="estimator-card" aria-label="AI project cost estimator">
              <div className="estimator-head">
                <div>
                  <h2>AI Project Cost Estimator</h2>
                  <p>Set your requirements to see a preliminary build estimate.</p>
                </div>
                <span className="tool-badge">FREE TOOL</span>
              </div>

              <div className="field">
                <div className="field-label">
                  <label htmlFor="project-type">01 — What are you building?</label>
                  <span>Choose one</span>
                </div>
                <select
                  id="project-type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                >
                  <option value="chatbot">AI Chatbot</option>
                  <option value="agent">AI Agent</option>
                  <option value="app">AI-Powered Application</option>
                </select>
              </div>

              <div className="field">
                <div className="field-label">
                  <span>02 — Project complexity</span>
                  <span>Planning stage</span>
                </div>
                <div className="choices" role="group" aria-label="Project complexity">
                  {[
                    { id: 'starter', label: 'Starter' },
                    { id: 'business', label: 'Business' },
                    { id: 'advanced', label: 'Advanced' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`choice${complexity === item.id ? ' active' : ''}`}
                      onClick={() => setComplexity(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <div className="field-label">
                  <span>03 — Additional requirements</span>
                  <span>Select all that apply</span>
                </div>
                <div className="checklist">
                  {ADD_ON_OPTIONS.map((opt) => (
                    <label key={opt.key} className="checkline">
                      <input
                        className="add-on"
                        type="checkbox"
                        checked={selectedAddOns.includes(opt.key)}
                        onChange={() => toggleAddOn(opt.key)}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="result" aria-live="polite">
                <div className="result-kicker">Preliminary development range</div>
                <div className="result-value" id="result-value">
                  {formatMoney(lowerCost)} – {formatMoney(upperCost)}
                </div>
                <div className="result-line">
                  <span id="result-timeline">
                    Indicative delivery: {minWeeks}–{maxWeeks} weeks
                  </span>
                  <span id="result-profile">{buildProfile}</span>
                </div>
                <p className="result-note">
                  This is an indicative build estimate, not a quote. Add-on requirements can raise the result
                  above the published planning bands. Monthly model usage and cloud expenses are separate.
                </p>
              </div>

              <a className="btn btn-dark getintouch" href="#contact">
                Get a Scoped Estimate ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AI DEVELOPMENT PRICING BY PROJECT TYPE */}
      <section className="section section-light" id="ranges">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>
                AI Development Pricing
                <br />
                by Project Type.
              </h2>
            </div>
            <p>
              Set your AI development budget against the product you intend to launch. These custom project
              ranges show the starting investment for each category, while advanced requirements may move a
              final quote higher.
            </p>
          </div>

          <div className="bands">
            <article
              className="band"
              onClick={() => {
                setProjectType('chatbot')
                document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <div className="band-top">
                <span className="band-tag">Conversational AI</span>
                <span className="band-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                  </svg>
                </span>
              </div>
              <h3>AI Chatbot</h3>
              <p>
                Planning a customer-facing chatbot? Custom AI chatbot development can connect your company
                knowledge to existing support systems, with escalation controls for requests that need a person.
              </p>
              <div className="band-price">$8K–$50K+</div>
              <small>Focused to integrated solutions</small>
              <ul>
                <li>Knowledge base and RAG workflows</li>
                <li>CRM or helpdesk integrations</li>
                <li>Human handoff and analytics</li>
              </ul>
            </article>

            <article
              className="band"
              onClick={() => {
                setProjectType('agent')
                document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <div className="band-top">
                <span className="band-tag">Workflow intelligence</span>
                <span className="band-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C13.52 16.03 11 21 11 21z" />
                  </svg>
                </span>
              </div>
              <h3>AI Agent</h3>
              <p>
                Business-critical workflows call for agents with reliable system access. AI agent development
                costs reflect the authority each agent needs and the checks behind every sensitive action.
              </p>
              <div className="band-price">$30K–$180K+</div>
              <small>Business workflow automation</small>
              <ul>
                <li>Workflow orchestration and tool calling</li>
                <li>CRM, ERP, and API access</li>
                <li>Guardrails, approvals, and audit logs</li>
              </ul>
            </article>

            <article
              className="band"
              onClick={() => {
                setProjectType('app')
                document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <div className="band-top">
                <span className="band-tag">Product engineering</span>
                <span className="band-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                  </svg>
                </span>
              </div>
              <h3>AI App</h3>
              <p>
                Your AI app development investment covers a complete digital product, including the engineering
                around its AI features. New platforms demand their own application architecture and production
                infrastructure.
              </p>
              <div className="band-price">$25K–$150K+</div>
              <small>Focused MVP to production application</small>
              <ul>
                <li>UI/UX, backend, and databases</li>
                <li>AI integration and evaluation</li>
                <li>Accounts, dashboards, analytics, deployment</li>
              </ul>
            </article>
          </div>

          <p className="small" style={{ marginTop: '22px', color: '#000' }}>
            <b>Pricing note:</b> These figures represent illustrative planning ranges, not price ceilings or
            market averages. Advanced builds and selected add-ons can produce higher estimates. Model/API usage,
            hosting, and continuing maintenance sit outside development costs unless your quote includes them.
          </p>
        </div>
      </section>

      {/* 3. METHODOLOGY */}
      <section
        className="section section-light"
        style={{ background: '#e9edea', borderTop: '1px solid #dbe2dd', borderBottom: '1px solid #dbe2dd' }}
        id="methodology"
      >
        <div className="wrap method">
          <div className="method-card">
            <h2>Understand the Costs Behind Your AI Project Estimate</h2>
            <p>
              Your AI development cost estimate covers more than the model you choose. It accounts for the
              engineering behind your solution and how additional project requirements influence your initial
              investment.
            </p>
            <div className="method-list">
              <div className="method-row">
                <h3 className="method-row-heading">Your Estimate Covers the Initial Build</h3>
                <p className="method-row-copy">
                  Application development, AI integration, backend systems, and production testing contribute to
                  your estimated project cost.
                </p>
              </div>
              <div className="method-row">
                <h3 className="method-row-heading">More Complex Requirements Mean Higher Costs</h3>
                <p className="method-row-copy">
                  Connecting multiple business systems or preparing large datasets takes additional engineering
                  time. Advanced security requirements can increase your development budget further.
                </p>
              </div>
              <div className="method-row">
                <h3 className="method-row-heading">Monthly Operating Costs Come Separately</h3>
                <p className="method-row-copy">
                  After launch, AI model usage and cloud hosting introduce recurring expenses. Your business may
                  also need ongoing maintenance and third-party software subscriptions.
                </p>
              </div>
            </div>
          </div>

          <div className="method-copy">
            <h2>How Our AI Cost Calculator Determines Your Budget</h2>
            <p>
              The calculator starts with your project type and development complexity. A customer support
              chatbot has different engineering requirements from an AI agent that performs tasks across your
              business systems.
            </p>
            <p style={{ marginTop: '14px' }}>
              Our AI project cost estimator then adjusts the initial range for your selected integrations, data
              preparation, security needs, and platform requirements. The result gives you a preliminary budget
              for your specific project scope.
            </p>
            <div className="method-steps" aria-label="Three steps in the estimate calculation">
              <div className="method-step">
                <span className="method-step-number">01</span>
                <div>
                  <strong>Start with the project type</strong>
                  <span>Chatbot, AI agent, or AI-powered application</span>
                </div>
              </div>
              <div className="method-step">
                <span className="method-step-number">02</span>
                <div>
                  <strong>Set the development complexity</strong>
                  <span>Starter, Business, or Advanced scope</span>
                </div>
              </div>
              <div className="method-step">
                <span className="method-step-number">03</span>
                <div>
                  <strong>Apply additional requirements</strong>
                  <span>Integrations, data work, security, or multiple platforms</span>
                </div>
              </div>
            </div>
            <div className="note">
              <b>Estimate Note: </b>
              These figures provide preliminary AI development pricing, not a fixed quote. Inceptives Digital
              reviews your technical requirements before confirming the development cost.
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT DRIVES CUSTOM AI DEVELOPMENT COSTS */}
      <section className="section section-dark" id="drivers">
        <div className="wrap">
          <div className="center section-intro">
            <h2>What Drives Custom AI Development Costs?</h2>
            <p>
              Custom AI development costs depend on the work your product demands. Review the six requirements
              that can change your engineering estimate before you approve a budget.
            </p>
          </div>
          <div className="drivers">
            {DRIVERS.map((d) => (
              <div className="driver" key={d.num}>
                <div className="driver-number">{d.num}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW LONG DOES AI DEVELOPMENT TAKE */}
      <section className="section section-light" id="timeline">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>
                How Long Does
                <br />
                AI Development Take?
              </h2>
            </div>
            <p>
              A focused chatbot can reach launch sooner than a complex enterprise system. Your AI development
              timeline depends on technical scope and the readiness of the systems your project needs.
            </p>
          </div>
          <div className="timeline">
            {TIMELINE_PHASES.map((m) => (
              <div className="milestone" key={m.phase}>
                <strong>{m.phase}</strong>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI MAINTENANCE COSTS AFTER LAUNCH */}
      <section
        className="section section-dark"
        style={{ borderTop: '1px solid #1f2e22', borderBottom: '1px solid #1f2e22' }}
      >
        <div className="wrap ownership">
          <div>
            <h2>
              AI Maintenance Costs
              <br />
              After Launch
            </h2>
            <p style={{ marginTop: '12px', marginBottom: '20px' }}>
              Your development quote covers the initial build. After launch, model usage and hosting add
              recurring expenses. Include AI maintenance costs in your total cost of ownership before approving
              the investment.
            </p>
            <div className="ownership-list">
              <div className="ownership-row">
                <b>Model and API usage</b>
                <p>
                  Inference requests, tokens, embeddings, reranking, voice, and other third-party AI services.
                </p>
              </div>
              <div className="ownership-row">
                <b>Cloud and data infrastructure</b>
                <p>
                  Application hosting, databases, storage, search, queues, observability, and network services.
                </p>
              </div>
              <div className="ownership-row">
                <b>Maintenance and evaluation</b>
                <p>
                  Security updates, workflow changes, model evaluation, issue resolution, and product iteration.
                </p>
              </div>
            </div>
          </div>

          <div className="cost-panel">
            <h3>Your Monthly AI Operating Costs</h3>
            <p>These bars are illustrative. They show categories to monitor, not fixed cost percentages.</p>
            <div className="cost-bar">
              <div className="cost-bar-head">
                <span>AI inference and external services</span>
                <span>Usage-based</span>
              </div>
              <div className="track">
                <span className="fill" style={{ width: '78%' }} />
              </div>
            </div>
            <div className="cost-bar">
              <div className="cost-bar-head">
                <span>Cloud and data infrastructure</span>
                <span>Workload-based</span>
              </div>
              <div className="track">
                <span className="fill" style={{ width: '50%' }} />
              </div>
            </div>
            <div className="cost-bar">
              <div className="cost-bar-head">
                <span>Quality, monitoring, and maintenance</span>
                <span>Scope-based</span>
              </div>
              <div className="track">
                <span className="fill" style={{ width: '63%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COST GUIDE + FAQS */}
      <section className="section section-light" id="faq">
        <div className="wrap">
          <div className="guide-card">
            <div>
              <h2>Explore the Full AI Development Cost Guide</h2>
              <p>
                Need a closer look at AI development pricing? The full guide covers project scope, cost drivers,
                and ongoing expenses before you request a detailed quote.
              </p>
            </div>
            <Link className="btn btn-outline" to="/blog/ai-development-cost">
              Read the Cost Guide ↗
            </Link>
          </div>

          <div className="center section-intro">
            <h2>Frequently Asked Questions About AI Development Costs</h2>
          </div>

          <div className="faqs">
            {FAQS.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={item.q} className={`faq${isOpen ? ' open' : ''}`}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  >
                    <span>{item.q}</span>
                    <span className="plus">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="answer">{item.a}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="cta">
        <div className="wrap cta-grid">
          <div>
            <div className="eyebrow" style={{ color: '#08722c' }}>
              Your scope / Our engineering review
            </div>
            <h2>Get a Detailed AI Development Quote</h2>
            <p>
              Have a budget range in mind? Share your project requirements with Inceptives Digital for an
              engineering review and a written quote based on the scope you actually need.
            </p>
          </div>
          <a className="btn btn-dark getintouch" href="#contact">
            Get a Scoped Estimate ↗
          </a>
        </div>
      </section>
    </div>
  )
}

const ESTIMATOR_CSS = `
  #ai-cost-estimator-page {
    --green: #00ce44;
    --green-dark: #00b83d;
    --green-soft: rgba(0, 206, 68, 0.12);
    --black: #0b100d;
    --dark-hero: #0d1410;
    --grey-bg: #f4f6f4;
    --grey-card: #ffffff;
    --grey-border: #e2e8e3;
    --grey-text: #162119;
    --grey-muted: #000;
    --dark-bg: #121a14;
    --dark-card: #383838;
    --dark-border: #243629;
    --dark-text: #e9f2eb;
    --dark-muted: #98aca0;
    --radius: 20px;
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--dark-text);
    background: var(--dark-bg);
    line-height: 1.6;
    overflow-x: hidden;
    text-align: left;
  }

  #ai-cost-estimator-page * {
    box-sizing: border-box;
  }

  #ai-cost-estimator-page a {
    color: inherit;
    text-decoration: none;
  }

  #ai-cost-estimator-page button,
  #ai-cost-estimator-page input,
  #ai-cost-estimator-page select {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: inherit;
  }

  #ai-cost-estimator-page button {
    cursor: pointer;
  }

  #ai-cost-estimator-page h1,
  #ai-cost-estimator-page h2,
  #ai-cost-estimator-page h3,
  #ai-cost-estimator-page h4,
  #ai-cost-estimator-page p {
    margin-top: 0;
  }

  #ai-cost-estimator-page h1,
  #ai-cost-estimator-page h2,
  #ai-cost-estimator-page h3,
  #ai-cost-estimator-page h4 {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.2 !important;
    letter-spacing: -0.03em;
    word-break: normal;
    overflow-wrap: break-word;
    hyphens: none;
  }

  #ai-cost-estimator-page h1 {
    font-size: clamp(30px, 4.2vw, 56px) !important;
    font-weight: 800 !important;
    letter-spacing: -0.04em;
  }

  #ai-cost-estimator-page h2 {
    font-size: clamp(24px, 3.2vw, 38px) !important;
    font-weight: 800 !important;
  }

  #ai-cost-estimator-page h3 {
    font-size: clamp(18px, 2vw, 22px) !important;
    font-weight: 700 !important;
  }

  #ai-cost-estimator-page .wrap {
    max-width: 1600px !important;
    margin: 0 auto;
    padding: 0 clamp(16px, 3.5vw, 48px);
    width: 100%;
  }

  #ai-cost-estimator-page .section {
    padding: clamp(55px, 6vw, 95px) 0;
    position: relative;
    clear: both;
  }

  #ai-cost-estimator-page .center {
    text-align: center;
  }

  #ai-cost-estimator-page .small {
    font-size: 16px !important;
  }

  #ai-cost-estimator-page .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 14px;
    color: var(--green);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  #ai-cost-estimator-page .eyebrow::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green);
    flex-shrink: 0;
  }

  #ai-cost-estimator-page .center .eyebrow {
    justify-content: center;
  }

  #ai-cost-estimator-page .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 22px !important;
    border-radius: 10px !important;
    border: 1px solid transparent;
    font-weight: 800 !important;
    font-size: 14.5px !important;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  #ai-cost-estimator-page .btn:hover {
    transform: translateY(-1px);
  }

  #ai-cost-estimator-page .btn-green {
    background: var(--green);
    color: #071d0f;
  }

  #ai-cost-estimator-page .btn-green:hover {
    background: #00b83d;
  }

  #ai-cost-estimator-page .btn-dark {
    background: var(--green);
    color: #071d0f;
  }

  #ai-cost-estimator-page .btn-dark:hover {
    background: #00e54b;
  }

  #ai-cost-estimator-page .btn-outline {
    border-color: #2a3d2e;
    background: transparent;
    color: #e1ebe3;
  }

  #ai-cost-estimator-page .btn-outline:hover {
    border-color: var(--green);
    color: var(--green);
  }

  /* Hero Section */
  #ai-cost-estimator-page .hero {
    background: var(--dark-hero);
    color: #fff;
    position: relative;
    overflow: hidden;
    padding: 150px 0 80px;
    border-bottom: 1px solid #1a271c;
  }

  #ai-cost-estimator-page .hero::before {
    content: "";
    position: absolute;
    right: -15%;
    top: -38%;
    width: 780px;
    height: 780px;
    border-radius: 50%;
    border: 1px solid rgba(0, 206, 68, 0.14);
    box-shadow: 0 0 0 95px rgba(0, 206, 68, 0.025), 0 0 0 190px rgba(0, 206, 68, 0.025);
    pointer-events: none;
  }

  #ai-cost-estimator-page .hero-grid {
    display: grid;
    grid-template-columns: 1fr 720px;
    gap: clamp(28px, 4vw, 64px);
    align-items: start;
    position: relative;
  }

  #ai-cost-estimator-page .hero-copy h1 {
    color: #ffffff !important;
    margin-bottom: 56px;
  }

  #ai-cost-estimator-page .hero-copy h1 span {
    color: var(--green);
  }

  #ai-cost-estimator-page .hero-copy p {
    max-width: 680px;
    color: #afc2b3 !important;
    font-size: clamp(15px, 1.25vw, 17px) !important;
    line-height: 1.75 !important;
  }

  /* Estimator Form Card (Strict White Theme) */
  #ai-cost-estimator-page .estimator-card {
    background: #ffffff !important;
    color: #151a17 !important;
    border-radius: 20px;
    padding: clamp(20px, 3vw, 32px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
    border: 1px solid #dce5de;
    width: 100%;
  }

  #ai-cost-estimator-page .estimator-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 18px;
  }

  #ai-cost-estimator-page .estimator-head h2 {
    color: #111712 !important;
    font-size: clamp(20px, 2vw, 24px) !important;
    margin-bottom: 4px;
    letter-spacing: -0.03em;
    white-space: normal;
  }

  #ai-cost-estimator-page .estimator-head p {
    color: #556358 !important;
    font-size: 13.5px !important;
    margin: 0;
  }

  #ai-cost-estimator-page .tool-badge {
    background: #e9faee;
    color: #087c32;
    font-size: 10.5px;
    font-weight: 800;
    border-radius: 30px;
    padding: 6px 11px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  #ai-cost-estimator-page .field {
    margin-top: 18px;
  }

  #ai-cost-estimator-page .field-label {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 13.5px;
    font-weight: 800;
    margin-bottom: 8px;
    color: #18221b;
  }

  #ai-cost-estimator-page .field-label span:last-child {
    color: #768379;
    font-weight: 600;
    font-size: 12.5px;
  }

  #ai-cost-estimator-page select {
    width: 100%;
    border: 1px solid #d0dcd2;
    background: #fbfcfb;
    padding: 13px 15px;
    border-radius: 10px;
    color: #1c2920;
    font-size: 14.5px;
    font-weight: 600;
    outline: none;
    transition: border-color 0.2s;
  }

  #ai-cost-estimator-page select:focus {
    border-color: var(--green);
    box-shadow: 0 0 0 3px rgba(0, 206, 68, 0.15);
  }

  #ai-cost-estimator-page .choices {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  #ai-cost-estimator-page .choice {
    border: 1px solid #d4ded6;
    background: #fff;
    border-radius: 9px;
    padding: 11px 6px !important;
    color: #49584d;
    font-size: 13.5px !important;
    font-weight: 700;
    text-align: center;
    transition: all 0.15s ease;
  }

  #ai-cost-estimator-page .choice.active {
    background: #e9faee;
    color: #087b32;
    border-color: var(--green);
    font-weight: 800;
  }

  #ai-cost-estimator-page .checklist {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 14px;
  }

  #ai-cost-estimator-page .checkline {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: #39483e;
    font-size: 12.5px;
    font-weight: 600;
    line-height: 1.35;
    cursor: pointer;
    word-break: normal;
    overflow-wrap: break-word;
    hyphens: none;
  }

  #ai-cost-estimator-page .checkline input {
    margin-top: 2px;
    accent-color: var(--green);
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    cursor: pointer;
  }

  #ai-cost-estimator-page .result {
    margin-top: 20px;
    background: #ecfaef;
    border: 1px solid #cfeeda;
    border-radius: 14px;
    padding: 20px;
  }

  #ai-cost-estimator-page .result-kicker {
    color: #166a36;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  #ai-cost-estimator-page .result-value {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 800;
    font-size: clamp(28px, 3.2vw, 36px);
    line-height: 1.15;
    letter-spacing: -0.04em;
    color: #0d2815 !important;
    margin: 5px 0 3px;
  }

  #ai-cost-estimator-page .result-line {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #225534;
    margin-top: 6px;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .result-note {
    margin: 10px 0 0;
    font-size: 14px !important;
    color: #556658 !important;
    line-height: 1.55 !important;
  }

  #ai-cost-estimator-page .estimator-card .btn {
    width: 100%;
    margin-top: 16px;
    padding: 14px 20px !important;
    font-size: 14.5px !important;
    background: #101711;
    color: #fff;
  }

  #ai-cost-estimator-page .estimator-card .btn:hover {
    background: #00ce44;
    color: #071d0f;
  }

  /* Section Light */
  #ai-cost-estimator-page .section-light {
    background: var(--grey-bg);
    color: var(--grey-text);
    border-bottom: 1px solid #e1e8e2;
  }

  #ai-cost-estimator-page .section-light h2,
  #ai-cost-estimator-page .section-light h3 {
    color: #111913 !important;
  }

  #ai-cost-estimator-page .section-light p {
    color: var(--grey-muted) !important;
    font-size: 16px !important;
    letter-spacing: 1px;
  }

  /* Section Dark */
  #ai-cost-estimator-page .section-dark {
    background: black;
    color: var(--dark-text);
    border-bottom: 1px solid #000;
  }

  #ai-cost-estimator-page .section-dark h2,
  #ai-cost-estimator-page .section-dark h3 {
    color: #ffffff !important;
  }

  #ai-cost-estimator-page .section-dark p {
    color: #fff !important;
    font-size: 16px !important;
    line-height: 1.55 !important;
  }

  #ai-cost-estimator-page .section-head {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 36px;
  }

  #ai-cost-estimator-page .section-head p {
    max-width: 540px;
    margin-bottom: 0;
    font-size: 15px !important;
    line-height: 1.65 !important;
  }

  #ai-cost-estimator-page .section-intro {
    margin: 40px auto 36px;
  }

  #ai-cost-estimator-page .section-intro p {
    font-size: 15.5px !important;
    line-height: 1.65 !important;
    letter-spacing: 1px;
  }

  /* Bands Cards */
  #ai-cost-estimator-page .bands {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(14px, 2vw, 24px);
  }

  #ai-cost-estimator-page .band {
    border: 1px solid #dce5df;
    border-radius: 16px;
    padding: clamp(20px, 2.5vw, 28px);
    background: #ffffff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
  }

  #ai-cost-estimator-page .band:hover {
    background: #eefbf1;
    border-color: #20bf51;
    box-shadow: 0 10px 28px rgba(32, 191, 81, 0.12);
    transform: translateY(-3px);
  }

  #ai-cost-estimator-page .band-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  #ai-cost-estimator-page .band-tag {
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.11em;
    text-transform: capitalize;
    color: #000;
  }

  #ai-cost-estimator-page .band-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: #edf4ee;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0c8c36;
    flex-shrink: 0;
    transition: background-color 0.2s ease;
  }

  #ai-cost-estimator-page .band-icon svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  #ai-cost-estimator-page .band:hover .band-icon {
    background: #dbf6e1;
  }

  #ai-cost-estimator-page .band h3 {
    font-weight: 800 !important;
    font-size: clamp(24px, 2.4vw, 30px) !important;
    letter-spacing: -0.04em;
    margin: 14px 0 8px;
    color: #0e1710 !important;
  }

  #ai-cost-estimator-page .band p {
    font-size: 16px !important;
    min-height: 50px;
    color: #55655a !important;
    line-height: 1.55 !important;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .band-price {
    font-weight: 800;
    font-size: clamp(24px, 2.4vw, 30px);
    letter-spacing: -0.04em;
    margin: 14px 0 2px;
    color: #0e1710;
  }

  #ai-cost-estimator-page .band small {
    color: #000;
    font-size: 16px;
  }

  #ai-cost-estimator-page .band ul {
    list-style: none;
    padding: 0;
    margin: 18px 0 0;
    border-top: 1px solid #e8efe9;
    padding-top: 14px;
  }

  #ai-cost-estimator-page .band li {
    font-size: 16px;
    color: #445248;
    margin: 7px 0;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .band li::before {
    content: "✓";
    color: #0aa33b;
    font-weight: 900;
    margin-right: 8px;
  }

  /* Methodology */
  #ai-cost-estimator-page .method {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: clamp(28px, 4vw, 50px);
    align-items: center;
  }

  #ai-cost-estimator-page .method-card {
    background: #0e1611;
    color: #fff;
    border-radius: 18px;
    padding: clamp(22px, 3vw, 34px);
    border: 1px solid #1c2b20;
  }

  #ai-cost-estimator-page .method-card h2 {
    font-size: clamp(22px, 2.4vw, 26px) !important;
    color: #fff !important;
    margin-bottom: 8px;
  }

  #ai-cost-estimator-page .method-card p {
    color: #fff !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .method-list {
    display: grid;
    gap: 10px;
    margin-top: 20px;
  }

  #ai-cost-estimator-page .method-row {
    border: 1px solid #202020;
    border-radius: 11px;
    padding: 14px 16px;
    color: #c0d2c4;
    background: #202020;
  }

  #ai-cost-estimator-page .method-row-heading {
    font-size: 20px !important;
    line-height: 1.35 !important;
    margin: 0 0 4px;
    color: #fff !important;
    font-weight: 700 !important;
    letter-spacing: 0px;
  }

  #ai-cost-estimator-page .method-row-copy {
    font-size: 13px !important;
    line-height: 1.55 !important;
    margin: 0;
    color: #c8d6cb !important;
  }

  #ai-cost-estimator-page .method-steps {
    display: grid;
    gap: 10px;
    margin: 20px 0 0;
  }

  #ai-cost-estimator-page .method-step {
    display: flex;
    gap: 14px;
    align-items: center;
    background: #fff;
    border: 1px solid #dce8de;
    border-radius: 11px;
    padding: 12px 16px;
  }

  #ai-cost-estimator-page .method-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
    border-radius: 9px;
    background: #e9faee;
    color: #087c32;
    font-size: 12.5px;
    font-weight: 800;
  }

  #ai-cost-estimator-page .method-step strong {
    display: block;
    font-size: 16px;
    line-height: 1.3;
    color: #151a17;
    font-weight: 700;
    letter-spacing: 0px;
  }

  #ai-cost-estimator-page .method-step span:last-child {
    display: block;
    font-size: 14px;
    color: #637068;
    line-height: 1.45;
    margin-top: 2px;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .method-copy .note {
    background: #202020;
    padding: 15px 18px;
    border-radius: 8px;
    font-size: 16px;
    color: #fff;
    margin-top: 20px;
    line-height: 1.55;
    letter-spacing: 1px;
  }

  /* Drivers */
  #ai-cost-estimator-page .drivers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(14px, 2vw, 22px);
  }

  #ai-cost-estimator-page .driver {
    border: 1px solid #202020;
    border-radius: 15px;
    padding: clamp(20px, 2.5vw, 26px);
    background: #202020;
  }

  #ai-cost-estimator-page .driver-number {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    margin-bottom: 14px;
    font-size: 12.5px;
    background: rgba(0, 206, 68, 0.12);
    color: var(--green);
  }

  #ai-cost-estimator-page .driver h3 {
    font-size: 20px !important;
    margin-bottom: 8px;
    font-weight: 700 !important;
    color: #fff !important;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .driver p {
    font-size: 16px !important;
    margin: 0;
    line-height: 1.6 !important;
    color: #fff !important;
    letter-spacing: 1px;
  }

  /* Timeline */
  #ai-cost-estimator-page .timeline {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: clamp(10px, 1.5vw, 16px);
  }

  #ai-cost-estimator-page .milestone {
    background: #ffffff;
    border: 1px solid #dce5df;
    border-radius: 14px;
    padding: clamp(18px, 2vw, 24px) 16px;
    position: relative;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.03);
  }

  #ai-cost-estimator-page .milestone strong {
    color: #000;
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: capitalize;
  }

  #ai-cost-estimator-page .milestone h3 {
    font-size: 25px !important;
    margin: 8px 0 6px;
    color: #111913 !important;
    font-weight: 800 !important;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .milestone p {
    font-size: 16px !important;
    margin: 0;
    color: #000 !important;
    line-height: 1.5 !important;
    letter-spacing: 1px;
  }

  /* Ownership */
  #ai-cost-estimator-page .ownership {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(28px, 4vw, 44px);
    align-items: center;
  }

  #ai-cost-estimator-page .cost-panel {
    background: #202020;
    border: 1px solid #202020;
    color: #fff;
    border-radius: 18px;
    padding: clamp(22px, 3vw, 34px);
  }

  #ai-cost-estimator-page .cost-panel h3 {
    font-size: clamp(20px, 2.2vw, 24px) !important;
    color: #fff !important;
    margin-bottom: 8px;
  }

  #ai-cost-estimator-page .cost-panel p {
    color: var(--dark-muted) !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .cost-bar {
    margin: 16px 0;
  }

  #ai-cost-estimator-page .cost-bar-head {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    color: #d6e4d9;
    font-size: 12px;
    margin-bottom: 6px;
  }

  #ai-cost-estimator-page .track {
    height: 8px;
    border-radius: 20px;
    background: #243629;
    overflow: hidden;
    position: relative;
  }

  #ai-cost-estimator-page .fill {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, #00ce44 0%, #3bfb78 50%, #00ce44 100%);
    background-size: 200% 100%;
    border-radius: 20px;
    box-shadow: 0 0 12px rgba(0, 206, 68, 0.45);
    animation: shimmerPulse 2.8s ease-in-out infinite;
  }

  @keyframes shimmerPulse {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; box-shadow: 0 0 16px rgba(0, 206, 68, 0.7); }
    100% { background-position: 0% 50%; }
  }

  #ai-cost-estimator-page .ownership-list {
    display: grid;
    gap: 11px;
  }

  #ai-cost-estimator-page .ownership-row {
    border: 1px solid #202020;
    border-radius: 12px;
    padding: 16px 18px;
    background: #202020;
  }

  #ai-cost-estimator-page .ownership-row b {
    font-size: 20px;
    color: #fff;
    display: block;
    margin-bottom: 3px;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .ownership-row p {
    font-size: 16px !important;
    margin: 0;
    color: #fff !important;
    line-height: 1.55 !important;
    letter-spacing: 1px;
  }

  /* Guide Card */
  #ai-cost-estimator-page .guide-card {
    background: #063214;
    border: 1px solid #063214;
    border-radius: 18px;
    padding: clamp(22px, 3vw, 34px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 28px;
    margin-bottom: 44px;
  }

  #ai-cost-estimator-page .guide-card h2 {
    margin-bottom: 8px;
    color: #fff !important;
    font-size: 28px !important;
  }

  #ai-cost-estimator-page .guide-card p {
    max-width: 720px;
    margin: 0;
    color: #fff !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .guide-card .btn-outline {
    border-color: #b5c9ba;
    background: #ffffff;
    color: #142217;
  }

  #ai-cost-estimator-page .guide-card .btn-outline:hover {
    border-color: #098433;
    color: #098433;
  }

  /* FAQs */
  #ai-cost-estimator-page .faqs {
    margin: 0 auto;
    max-width: 1200px;
  }

  #ai-cost-estimator-page .faq {
    border-bottom: 1px solid #dce5df;
    transition: background 0.2s ease;
  }

  #ai-cost-estimator-page .faq button {
    width: 100%;
    border: 0;
    background: transparent !important;
    padding: 20px 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    text-align: left;
    font-weight: 700;
    font-size: clamp(15px, 1.4vw, 16.5px) !important;
    line-height: 1.4;
    color: #142117;
    cursor: pointer;
  }

  #ai-cost-estimator-page .faq button:hover {
    color: #098433;
  }

  #ai-cost-estimator-page .faq .plus {
    color: #098433;
    font-size: 22px;
    line-height: 1;
    font-weight: 800;
    flex-shrink: 0;
  }

  #ai-cost-estimator-page .faq .answer {
    display: none;
    padding: 0 20px 18px 0;
    color: #000;
    font-size: 16px;
    line-height: 1.65;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .faq.open .answer {
    display: block;
  }

  /* CTA Section */
  #ai-cost-estimator-page .cta {
    background: #0b190f;
    border-top: 1px solid #1c3523;
    border-bottom: 1px solid #1c3523;
    color: #fff;
    padding: clamp(50px, 6vw, 75px) 0;
    position: relative;
    overflow: hidden;
  }

  #ai-cost-estimator-page .cta::before {
    content: "";
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    border: 1px solid rgba(0, 206, 68, 0.12);
    right: -80px;
    top: -160px;
    box-shadow: 0 0 0 70px rgba(0, 206, 68, 0.03);
    pointer-events: none;
  }

  #ai-cost-estimator-page .cta-grid {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  }

  #ai-cost-estimator-page .cta h2 {
    max-width: 720px;
    margin-bottom: 8px;
    color: #fff !important;
  }

  #ai-cost-estimator-page .cta p {
    color: #a2bca7 !important;
    max-width: 680px;
    font-size: 14.5px !important;
    line-height: 1.65 !important;
  }

  #ai-cost-estimator-page .cta .btn-dark {
    background: var(--green);
    color: #071d0f;
    flex-shrink: 0;
  }

  #ai-cost-estimator-page .cta .btn-dark:hover {
    background: #00e54b;
  }

  /* Hero Banner CTA Buttons */
  #ai-cost-estimator-page .buttons-banner {
    display: flex;
    gap: 16px;
    margin-top: 62px;
    flex-wrap: wrap;
    align-items: center;
  }

  #ai-cost-estimator-page .btn-quote {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 13px 26px !important;
    background: #00ce44;
    border: 1.5px solid #00ce44;
    color: #000;
    font-size: 15px !important;
    font-weight: 700 !important;
    border-radius: 3px !important;
    text-decoration: none !important;
    transition: all 0.2s ease;
    cursor: pointer;
    letter-spacing: 1px;
  }

  #ai-cost-estimator-page .btn-schedule {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 13px 26px !important;
    background: transparent;
    border: 1.5px solid #ffffff;
    color: #ffffff;
    font-size: 15px !important;
    font-weight: 700 !important;
    border-radius: 3px !important;
    text-decoration: none !important;
    transition: all 0.2s ease;
    cursor: pointer;
    letter-spacing: 1px;
  }

  @media (max-width: 1600px) {
    #ai-cost-estimator-page .hero-grid {
      grid-template-columns: 1fr 520px;
      gap: clamp(28px, 4vw, 64px);
    }
    #ai-cost-estimator-page .milestone h3 {
      font-size: 20px !important;
    }
    #ai-cost-estimator-page h2 {
      font-size: clamp(24px, 3.2vw, 36px) !important;
    }
    #ai-cost-estimator-page .ownership-row p {
      font-size: 14px !important;
    }
    #ai-cost-estimator-page .band h3 {
      color: #0e1710 !important;
      font-size: 20px !important;
      margin-bottom: 10px;
    }
    #ai-cost-estimator-page .band-price {
      font-size: 20px;
      margin-bottom: 12px;
    }
    #ai-cost-estimator-page .band li {
      font-size: 14px;
    }
    #ai-cost-estimator-page .method-copy h2 {
      font-size: 30px !important;
      line-height: 40px !important;
    }
    #ai-cost-estimator-page .section-light p {
      font-size: 14px !important;
    }
    #ai-cost-estimator-page .method-card h2 {
      font-size: 22px !important;
    }
    #ai-cost-estimator-page .method-row-heading {
      font-size: 18px !important;
    }
    #ai-cost-estimator-page .band p {
      font-size: 14px !important;
    }
    #ai-cost-estimator-page h1 {
      font-size: clamp(30px, 3.5vw, 56px) !important;
    }
  }

  @media (max-width: 1200px) {
    #ai-cost-estimator-page .timeline {
      grid-template-columns: repeat(3, 1fr);
    }
    #ai-cost-estimator-page .hero-grid {
      grid-template-columns: 1fr 500px;
      gap: 32px;
    }
  }

  @media (max-width: 980px) {
    #ai-cost-estimator-page .hero-grid {
      display: flex;
      flex-direction: column;
      gap: 36px;
    }
    #ai-cost-estimator-page .hero-copy {
      order: 1;
      width: 100%;
    }
    #ai-cost-estimator-page .estimator-card {
      order: 2;
      width: 100%;
      max-width: 100%;
    }
    #ai-cost-estimator-page .method,
    #ai-cost-estimator-page .ownership {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    #ai-cost-estimator-page .bands,
    #ai-cost-estimator-page .drivers,
    #ai-cost-estimator-page .timeline {
      grid-template-columns: repeat(2, 1fr);
    }
    #ai-cost-estimator-page .guide-card,
    #ai-cost-estimator-page .cta-grid {
      flex-direction: column;
      align-items: flex-start;
    }
    #ai-cost-estimator-page .section-head {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  @media (max-width: 767px) {
    #ai-cost-estimator-page .hero {
      padding: 130px 0 50px;
    }
    #ai-cost-estimator-page .hero-copy h1 {
      margin-bottom: 20px;
      font-size: clamp(26px, 7vw, 36px) !important;
      line-height: 1.25 !important;
    }
    #ai-cost-estimator-page .hero-copy p {
      font-size: 15px !important;
      line-height: 1.6 !important;
      margin-bottom: 28px;
    }
    #ai-cost-estimator-page .buttons-banner {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
      margin-top: 28px;
    }
    #ai-cost-estimator-page .btn-quote,
    #ai-cost-estimator-page .btn-schedule {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 650px) {
    #ai-cost-estimator-page .checklist,
    #ai-cost-estimator-page .bands,
    #ai-cost-estimator-page .drivers,
    #ai-cost-estimator-page .timeline {
      grid-template-columns: 1fr;
    }
    #ai-cost-estimator-page .estimator-card {
      padding: 18px 16px;
      border-radius: 16px;
    }
    #ai-cost-estimator-page .result-line {
      flex-direction: column;
      gap: 3px;
    }
    #ai-cost-estimator-page .choices {
      gap: 6px;
    }
    #ai-cost-estimator-page .choice {
      font-size: 12.5px !important;
      padding: 10px 4px !important;
    }
  }
`
