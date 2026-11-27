import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { submitFormToSeo } from '../utils/submitFormToSeo'
import TurnstileWidget from './TurnstileWidget'

const TESTIMONIALS = [
  {
    quote:
      'Inceptives Digital has been professional, responsive, and genuinely committed to understanding our vision for Evoltion Enterprise. The team communicated clearly, explained technical details patiently, and made payments hassle-free. Special thanks to Aaron Francis for his clarity and support throughout. Highly recommend them as a transparent, easy-to-work-with technology partner',
    name: 'Tyrrell Gibson CEO, Evoltion Enterprise',
  },
  {
    quote:
      'When I came to these guys, it was just me in an idea. I’ve had ideas before that. I thought were good and sat on them only to watch others take the initiative and reap the rewards because I lacked confidence. When I had the idea for my app I figured, “Not this time.',
    name: 'Edward Eller, GoRyde',
  },
  {
    quote:
      "I absolutely recommend this company. This team is absolutely Amazing! I can't say enough good things about them. I had tried 3 other app makers before finding them. All of them fell short in the end. The Inceptive team was the literal answer of my prayers.",
    name: 'DC & Owner, State of the Art Chiropractic',
  },
]

const AWARDS = [
  { src: '/assets/awards-images/award-designrush.webp', alt: 'DesignRush Top Mobile App Development Companies' },
  { src: '/assets/awards-images/award-top-developers.png', alt: 'Top Mobile App Developers 2025' },
  { src: '/assets/awards-images/award-clutch-austin.png', alt: 'Clutch Top Company in Austin 2025' },
  { src: '/assets/awards-images/award-rightfirms.png', alt: 'RightFirms Top Service Provider' },
  { src: '/assets/awards-images/award-clutch-gaming.png', alt: 'Clutch Top Software Developers in Gaming' },
]

const MEDIA_LOGOS = [
  { src: '/assets/marquee/ap.png', alt: 'Associated Press' },
  { src: '/assets/marquee/trustpilot.png', alt: 'Trustpilot' },
  { src: '/assets/marquee/google.png', alt: 'Google' },
  { src: '/assets/marquee/nyt.png', alt: 'The New York Times' },
  { src: '/assets/marquee/globeandmail.png', alt: 'The Globe and Mail' },
  { src: '/assets/marquee/usatoday.png', alt: 'USA Today' },
]

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  transactionalConsent: false,
  marketingConsent: false,
  captcha: '',
}

const newCaptcha = () => ({ a: 1 + Math.floor(Math.random() * 9), b: 1 + Math.floor(Math.random() * 9) })

// Is this a green/CTA element that should open the contact popup?
function isContactTrigger(el) {
  if (!el) return false
  if (el.closest('#id-contact-popup, #schedulePopup')) return false
  if (el.closest('[data-no-contact-popup]')) return false
  if (el.closest('form')) return false
  if (
    el.getAttribute('role') === 'tab' ||
    el.closest('[role="tablist"]') ||
    el.hasAttribute('aria-selected') ||
    el.hasAttribute('aria-pressed')
  ) {
    return false
  }

  const label = (el.textContent || '').replace(/\s+/g, ' ').trim()
  // "Schedule A ..." and "Book a Free Strategy Consultation" buttons belong to the Calendly popup
  if (el.classList.contains('openpop-shedule')) return false
  if (
    /\bschedule\s+a\b/i.test(label) ||
    /\bbook\s+a\s+(?:free\s+)?strategy\s+consultation\b/i.test(label)
  ) {
    return false
  }
  if (el.type === 'submit') return false

  if (el.classList.contains('getintouch')) return true
  if (/\bget\s+a\s+call\s+now\b/i.test(label)) return true

  const href = el.tagName === 'A' ? el.getAttribute('href') || '' : null
  if (href !== null) {
    if (href === '#contact') return true
    if (/^\s*get in touch\s*!?$/i.test(label)) return true
  }

  // Green banner / CTA buttons that do not navigate anywhere real
  const cls = el.getAttribute('class') || ''
  if (cls.includes('bg-[#00CE44]') && !cls.includes('hover:bg-[#00CE44]') && !cls.includes('rounded-full')) {
    if (label.length < 4) return false
    if (el.getAttribute('aria-label') && !label) return false
    if (href === null) return true // <button> CTA
    if (href === '' || href === '#') return true
  }
  return false
}

export default function ContactPopupModal() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const pathRef = useRef(pathname)
  pathRef.current = pathname

  const [isOpen, setIsOpen] = useState(false)
  const [slide, setSlide] = useState(0)
  const [form, setForm] = useState(EMPTY_FORM)
  const [sending, setSending] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileReset, setTurnstileReset] = useState(0)
  const [turnstileError, setTurnstileError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const lastFocusedRef = useRef(null)

  const open = useCallback(() => {
    lastFocusedRef.current = document.activeElement
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    if (lastFocusedRef.current && typeof lastFocusedRef.current.focus === 'function') {
      lastFocusedRef.current.focus({ preventScroll: true })
    }
  }, [])

  // Body lock + focus close button
  useEffect(() => {
    if (!isOpen) return
    document.body.classList.add('id-cp-lock')
    closeRef.current?.focus({ preventScroll: true })
    return () => document.body.classList.remove('id-cp-lock')
  }, [isOpen])

  // Autoplay testimonials
  useEffect(() => {
    if (!isOpen || TESTIMONIALS.length < 2) return
    const t = window.setInterval(() => setSlide((s) => (s + 1) % TESTIMONIALS.length), 8000)
    return () => window.clearInterval(t)
  }, [isOpen])

  // Global CTA delegation
  useEffect(() => {
    const onClick = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (/\/contact-us\/?$/i.test(pathRef.current)) return
      const el = target.closest('a, button')
      if (!isContactTrigger(el)) return
      event.preventDefault()
      event.stopPropagation()
      open()
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [open])

  // Esc + focus trap
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const list = Array.from(
        panelRef.current.querySelectorAll(
          'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled])'
        )
      ).filter((el) => el.getClientRects().length)
      if (!list.length) return
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    const resolvedTurnstileToken =
      turnstileToken ||
      e.currentTarget?.querySelector?.('[name="cf-turnstile-response"]')?.value ||
      ''
    setSending(true)
    setTurnstileError('')
    const res = await submitFormToSeo({
      formId: 'lead-form-inceptives-digital-popup',
      formName: 'Lead Form Inceptives Digital',
      subject: `Contact Popup Inquiry - ${form.firstName} ${form.lastName}`.trim(),
      replyTo: form.email,
      turnstileToken: resolvedTurnstileToken,
      fields: {
        'First Name': form.firstName,
        'Last Name': form.lastName,
        Email: form.email,
        Phone: form.phone,
        Subject: form.subject || 'Popup Inquiry',
        Message: form.message,
        'Transactional SMS Consent': form.transactionalConsent ? 'Yes' : 'No',
        'Marketing SMS Consent': form.marketingConsent ? 'Yes' : 'No',
      },
    })
    setSending(false)
    if (!res?.ok) {
      setTurnstileError(res?.error || 'Security verification failed. Please try again.')
      setTurnstileToken('')
      setTurnstileReset((n) => n + 1)
      return
    }
    setSubmitted(true)
    setIsOpen(false)
    setForm(EMPTY_FORM)
    setTurnstileToken('')
    setTurnstileReset((n) => n + 1)
    navigate('/thank-you')
  }

  const handleClose = () => {
    close()
    setSubmitted(false)
    setForm(EMPTY_FORM)
    setTurnstileToken('')
    setTurnstileReset((n) => n + 1)
    setTurnstileError('')
  }

  if (!isOpen) return null

  return (
    <>
      <style>{CSS}</style>
      <div
        className={`id-cp${isOpen ? ' is-open' : ''}`}
        id="id-contact-popup"
        aria-hidden={!isOpen}
      >
        <div className="id-cp__overlay" onClick={handleClose} />
        <section
          ref={panelRef}
          className="id-cp__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="id-cp-title"
          tabIndex={-1}
        >
          <button
            ref={closeRef}
            className="id-cp__close"
            type="button"
            aria-label="Close contact popup"
            onClick={handleClose}
          >
            <span>&times;</span>
          </button>

          <div className="id-cp__layout">
            {/* LEFT */}
            <div className="id-cp__left">
              <header className="id-cp__intro">
                <h2 id="id-cp-title">Get Expert Direction for Your Next Digital Product</h2>
                <p>
                  Inceptives Digital has helped businesses across regions bring their visions to life. See what
                  their experience says about working with us. We don’t do magic. We build with expertise.
                </p>
              </header>

              <div className="id-cp__testimonial" aria-label="Client testimonials" aria-live="polite">
                <span className="id-cp__quote-icon" aria-hidden="true">“</span>
                <div className="id-cp__slides">
                  <div
                    className="id-cp__slide-track"
                    style={{ transform: `translate3d(-${slide * 100}%,0,0)` }}
                  >
                    {TESTIMONIALS.map((t, i) => (
                      <article
                        key={t.name}
                        className="id-cp__slide"
                        aria-hidden={i !== slide}
                      >
                        <blockquote>{t.quote}</blockquote>
                        <div className="id-cp__person">
                          <div>
                            <strong>{t.name}</strong>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="id-cp__dots" role="tablist" aria-label="Testimonial navigation">
                  {TESTIMONIALS.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      className={`id-cp__dot${i === slide ? ' is-active' : ''}`}
                      role="tab"
                      aria-label={`Go to testimonial ${i + 1}`}
                      aria-selected={i === slide}
                      onClick={() => setSlide(i)}
                    />
                  ))}
                </div>
              </div>

              <div className="id-cp__awards" aria-label="Recognition and awards">
                <div className="id-cp__awards-label">AWARDS &amp; RECOGNITION</div>
                <div className="id-cp__awards-grid">
                  {AWARDS.map((a) => (
                    <div className="id-cp__award" key={a.src}>
                      <img src={a.src} alt={a.alt} loading="lazy" decoding="async" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="id-cp__brands">
                <div className="id-cp__brands-title">FEATURED ON MEDIA &amp; REVIEW PLATFORMS</div>
                <div className="id-cp__media" role="region" aria-label="Media and review platforms">
                  <div className="id-cp__media-track">
                    {[0, 1].map((rep) => (
                      <div className="id-cp__media-group" key={rep} aria-hidden={rep ? 'true' : undefined}>
                        {MEDIA_LOGOS.map((l) => (
                          <div className="id-cp__media-item" key={l.src}>
                            <img src={l.src} alt={rep ? '' : l.alt} loading="lazy" decoding="async" />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="id-cp__right">
              <div className="id-cp__form-wrap">
                <p className="id-cp__lead">
                  Let us help you build the next innovative digital product with precision and expertise. Share
                  your idea and get a customized roadmap to your app within 24 hours.
                </p>

                {submitted ? (
                  <div className="id-cp__thanks">
                    <h3>Thank You!</h3>
                    <p>We have received your inquiry. Our engineering team will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form
                    id="lead-form-inceptives-digital-popup"
                    name="Lead Form Inceptives Digital"
                    data-form-name="Lead Form Inceptives Digital"
                    aria-label="Lead Form Inceptives Digital"
                    className="id-cp__form"
                    onSubmit={handleSubmit}
                  >
                    <div className="id-cp__row">
                      <label className="id-cp__field">
                        <span>First Name</span>
                        <input type="text" name="first_name" autoComplete="given-name" required placeholder="First Name" value={form.firstName} onChange={set('firstName')} />
                      </label>
                      <label className="id-cp__field">
                        <span>Last Name</span>
                        <input type="text" name="last_name" autoComplete="family-name" required placeholder="Last Name" value={form.lastName} onChange={set('lastName')} />
                      </label>
                    </div>
                    <label className="id-cp__field">
                      <span>Email</span>
                      <input type="email" name="email" autoComplete="email" required placeholder="Email" value={form.email} onChange={set('email')} />
                    </label>
                    <div className="id-cp__row">
                      <label className="id-cp__field">
                        <span>Phone</span>
                        <input type="tel" name="phone" autoComplete="tel" required placeholder="+1 (000) 000-0000" value={form.phone} onChange={set('phone')} />
                      </label>
                      <label className="id-cp__field">
                        <span>Subject</span>
                        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={set('subject')} />
                      </label>
                    </div>
                    <label className="id-cp__field">
                      <span>Message</span>
                      <textarea name="message" required placeholder="Message" value={form.message} onChange={set('message')} />
                    </label>

                    <label className="id-cp__check">
                      <input type="checkbox" name="transactional_sms_consent" value="Yes" checked={form.transactionalConsent} onChange={set('transactionalConsent')} />
                      <span>
                        I consent to receive transactional messages from Inceptives Digital at the phone number
                        provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP for help
                        or STOP to opt out.
                      </span>
                    </label>
                    <label className="id-cp__check">
                      <input type="checkbox" name="marketing_sms_consent" value="Yes" checked={form.marketingConsent} onChange={set('marketingConsent')} />
                      <span>
                        I consent to receive marketing and promotional messages from Inceptives Digital at the phone
                        number provided. Message frequency may vary. Message &amp; data rates may apply. Reply HELP
                        for help or STOP to opt out.
                      </span>
                    </label>

                    <TurnstileWidget
                      theme="dark"
                      resetKey={turnstileReset}
                      onVerify={(token) => {
                        setTurnstileToken(token)
                        setTurnstileError('')
                      }}
                      onExpire={() => setTurnstileToken('')}
                      onError={() => setTurnstileError('Security check failed to load. Please refresh.')}
                    />
                    <div className="id-cp__submit-row">
                      <button type="submit" disabled={sending} className="id-cp__submit">
                        {sending ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                    {turnstileError && <p className="id-cp__error" role="alert">{turnstileError}</p>}
                  </form>
                )}

                <div className="id-cp__policy-footer" aria-label="Privacy and legal policies">
                  <Link to="/privacy-policy" onClick={handleClose}>Privacy Policy</Link>
                  <span>|</span>
                  <Link to="/terms-and-condition" onClick={handleClose}>Terms of Services</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

const CSS = `
#id-contact-popup,#id-contact-popup *{box-sizing:border-box}
#id-contact-popup{--id-green:#00cd62;position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;justify-content:center;padding:clamp(8px,1.4vw,20px);color:#fff}
#id-contact-popup.is-open{display:flex}
#id-contact-popup .id-cp__overlay{position:absolute;inset:0;background:rgba(0,8,6,.8);backdrop-filter:blur(7px)}
#id-contact-popup .id-cp__panel{position:relative;z-index:1;width:min(1540px,100%);max-height:calc(100vh - 20px);max-height:calc(100dvh - 20px);overflow:auto;overscroll-behavior:contain;border:1px solid #5b7470;border-radius:clamp(16px,2vw,29px);box-shadow:0 25px 90px rgba(0,0,0,.56);background:#06110e;scrollbar-width:thin;scrollbar-color:#879d93 transparent;outline:0}
#id-contact-popup .id-cp__layout{display:grid;grid-template-columns:minmax(0,1.14fr) minmax(0,1fr);align-items:stretch;min-height:0}
#id-contact-popup .id-cp__left{position:relative;isolation:isolate;display:flex;flex-direction:column;min-width:0;padding:45px clamp(21px,2.6vw,40px) 0;gap:clamp(12px,1.3vw,20px);background:radial-gradient(ellipse at -12% 86%,rgba(0,207,103,.3),transparent 44%),radial-gradient(ellipse at 105% 2%,rgba(0,160,90,.2),transparent 36%),linear-gradient(145deg,#07100e 0%,#06120f 60%,#021510 100%);overflow:hidden}
#id-contact-popup .id-cp__left:after{content:"";position:absolute;inset:0;pointer-events:none;opacity:.08;background-image:linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px);background-size:46px 46px;mask-image:linear-gradient(to bottom,black,transparent 65%);z-index:-1}
#id-contact-popup .id-cp__intro h2{margin:0 0 8px!important;color:#fff!important;font-size:24px!important;line-height:1.15!important;font-weight:800!important;text-align:left!important}
#id-contact-popup .id-cp__intro p{margin:0;color:#e2ebe6;font-size:clamp(12px,1.02vw,14px);line-height:1.55;font-weight:500;text-align:left}
#id-contact-popup .id-cp__testimonial{position:relative;min-width:0;padding:66px 34px 54px;border:1px solid rgba(0,205,98,.38);border-radius:24px;background:linear-gradient(180deg,rgba(5,22,18,.78),rgba(2,13,10,.94));box-shadow:inset 0 0 0 1px rgba(255,255,255,.03)}
#id-contact-popup .id-cp__quote-icon{display:block;color:var(--id-green);font:700 69px/.65 Georgia,serif;height:42px;position:absolute;left:clamp(20px,2vw,30px);top:18px;pointer-events:none}
#id-contact-popup .id-cp__slides{width:100%;min-width:0;overflow:hidden}
#id-contact-popup .id-cp__slide-track{display:flex;align-items:stretch;width:100%;transition:transform .48s cubic-bezier(.22,1,.36,1)}
#id-contact-popup .id-cp__slide{flex:0 0 100%;width:100%;min-width:0;display:flex;flex-direction:column;justify-content:flex-start}
#id-contact-popup .id-cp__slide blockquote{border:0;padding:0;margin:8px 0 19px;color:#f0f6f2;font-size:clamp(12px,1.02vw,15px);line-height:1.55;font-weight:450;overflow-wrap:anywhere;text-align:center}
#id-contact-popup .id-cp__person{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:auto}
#id-contact-popup .id-cp__person strong{display:block;font-size:clamp(11px,.92vw,14px);font-weight:800;line-height:1.4;color:#fff;letter-spacing:1px}
#id-contact-popup .id-cp__dots{position:absolute;left:50%;bottom:16px;display:flex;align-items:center;justify-content:center;gap:10px;transform:translateX(-50%);z-index:3}
#id-contact-popup .id-cp__dot{width:11px;height:11px;padding:0!important;border:0;border-radius:50%;background:#c7cdd4;opacity:.75;cursor:pointer;transition:transform .2s ease,opacity .2s ease,background .2s ease}
#id-contact-popup .id-cp__dot:hover{opacity:1;transform:scale(1.08)}
#id-contact-popup .id-cp__dot.is-active{background:#3edb76;opacity:1;transform:scale(1.08)}
#id-contact-popup .id-cp__awards{margin-top:25px;min-width:0}
#id-contact-popup .id-cp__awards-label,#id-contact-popup .id-cp__brands-title{display:flex;align-items:center;justify-content:center;text-align:center;color:#e1e9e4;font-size:clamp(9px,.77vw,11px);font-weight:800;line-height:1.3;letter-spacing:1px}
#id-contact-popup .id-cp__awards-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:clamp(5px,1vw,14px);margin-top:12px;align-items:center}
#id-contact-popup .id-cp__award{display:flex;align-items:center;justify-content:center;min-width:0;height:clamp(54px,6vw,86px)}
#id-contact-popup .id-cp__award img{display:block;object-fit:contain;width:100%;height:100%;max-width:110px}
#id-contact-popup .id-cp__brands{margin-top:auto;min-width:0;padding:clamp(8px,1vw,14px) 0 12px;overflow:hidden}
#id-contact-popup .id-cp__media{display:flex;align-items:center;width:100%;height:clamp(49px,5.5vw,71px);overflow:hidden}
#id-contact-popup .id-cp__media-track{display:flex;width:max-content;flex:0 0 auto;animation:id-cp-media-slide 23s linear infinite}
#id-contact-popup .id-cp__media-group{display:flex;align-items:center;flex:0 0 auto}
#id-contact-popup .id-cp__media-item{display:flex;align-items:center;justify-content:center;width:135px;flex:0 0 135px;height:60px;padding:7px 12px}
#id-contact-popup .id-cp__media-item img{display:block;width:100%;height:48px;object-fit:contain;filter:grayscale(1) brightness(0) invert(1);opacity:.95}
@keyframes id-cp-media-slide{to{transform:translate3d(-50%,0,0)}}
#id-contact-popup .id-cp__right{position:relative;min-width:0;display:flex;flex-direction:column;background:radial-gradient(ellipse at 104% 0%,rgba(0,211,94,.18),transparent 30%),radial-gradient(ellipse at 100% 100%,rgba(0,211,94,.13),transparent 24%),#fcfdff;color:#101820;border-radius:clamp(16px,2vw,28px) 0 0 clamp(16px,2vw,28px);overflow:hidden}
#id-contact-popup .id-cp__form-wrap{position:relative;flex:1 1 auto;min-width:0;display:flex;flex-direction:column;padding:clamp(36px,3vw,52px) 40px 14px 30px}
#id-contact-popup .id-cp__lead{margin:0 0 14px!important;color:#000!important;font-size:clamp(11px,.88vw,13px)!important;line-height:1.5!important;text-align:left!important}
#id-contact-popup .id-cp__close{position:absolute;top:10px;right:14px;z-index:20;display:flex;align-items:center;justify-content:center;width:36px;height:36px;padding:0!important;border:0;border-radius:24%;color:#0b1715!important;font-size:34px;line-height:1;cursor:pointer;background:transparent!important}
#id-contact-popup .id-cp__close span{margin-top:-4px}
#id-contact-popup .id-cp__close:hover{background:#00CE44!important;color:#fff!important}
#id-contact-popup .id-cp__form{display:flex;flex-direction:column;gap:10px;min-width:0}
#id-contact-popup .id-cp__row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
#id-contact-popup .id-cp__field{display:flex;flex-direction:column;min-width:0}
#id-contact-popup .id-cp__field>span{display:block;color:#343e49;font-size:12px;line-height:1.35;margin:0 0 5px;font-weight:600}
#id-contact-popup .id-cp__field input,#id-contact-popup .id-cp__field textarea{width:100%;min-width:0;border:1px solid #d0d6dd;border-radius:8px;background:rgba(255,255,255,.84);color:#14202b;font-size:13px;box-shadow:none;outline:0;font-family:inherit}
#id-contact-popup .id-cp__field input{height:40px;padding:8px 11px}
#id-contact-popup .id-cp__field textarea{height:70px;min-height:70px;padding:10px 11px;resize:vertical}
#id-contact-popup .id-cp__field input::placeholder,#id-contact-popup .id-cp__field textarea::placeholder{color:#78818b;opacity:1}
#id-contact-popup .id-cp__field input:focus,#id-contact-popup .id-cp__field textarea:focus{border-color:var(--id-green);outline:2px solid rgba(0,205,98,.15)}
#id-contact-popup .id-cp__check{display:flex;align-items:flex-start;gap:7px;cursor:pointer;color:#202a34;font-size:11px;line-height:1.35;font-weight:400}
#id-contact-popup .id-cp__check input{accent-color:#00c965;width:14px;height:14px;margin:2px 0 0;flex:none}
#id-contact-popup .id-cp__submit-row{display:flex;align-items:center;gap:10px;margin-top:2px}
#id-contact-popup .id-cp__captcha{display:flex;align-items:center;gap:7px;flex:0 0 125px;color:#101820;font-size:13px;white-space:nowrap}
#id-contact-popup .id-cp__captcha input{width:50px;height:44px;min-width:0;text-align:center;padding:6px;border:1px solid #d0d6dd;border-radius:8px;background:#fff;color:#14202b;font-size:13px;outline:0}
#id-contact-popup .id-cp__submit{flex:1 1 0;min-width:0;height:44px;border:0;border-radius:26px;background:#00ce44;color:#062011;font-size:14px;font-weight:800;cursor:pointer;padding:0}
#id-contact-popup .id-cp__submit:hover{background:#00b83d}
#id-contact-popup .id-cp__error{margin:0;color:red;font-size:12px}
#id-contact-popup .id-cp__thanks{padding:30px 10px;text-align:center}
#id-contact-popup .id-cp__thanks h3{margin:0 0 8px;color:#00a838;font-size:24px;font-weight:800}
#id-contact-popup .id-cp__thanks p{margin:0;color:#202a34;font-size:14px}
#id-contact-popup .id-cp__policy-footer{margin-top:auto;padding-top:14px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:13px;color:#202a34}
#id-contact-popup .id-cp__policy-footer a{color:#202a34;text-decoration:none}
#id-contact-popup .id-cp__policy-footer a:hover{color:#00a838}
#id-contact-popup :focus-visible{outline:2px solid #04c85e;outline-offset:3px}
body.id-cp-lock{overflow:hidden!important}
@media(min-width:981px) and (max-width:1440px){
  #id-contact-popup .id-cp__panel{width:min(1200px,100%)}
  #id-contact-popup .id-cp__layout{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
  #id-contact-popup .id-cp__left{padding:30px 20px 0;gap:14px}
  #id-contact-popup .id-cp__testimonial{padding:57px 24px 50px}
  #id-contact-popup .id-cp__slide blockquote{font-size:12px;line-height:1.4}
  #id-contact-popup .id-cp__form-wrap{padding:26px 22px 12px}
  #id-contact-popup .id-cp__awards{margin-top:14px}
  #id-contact-popup .id-cp__award{height:62px}
  #id-contact-popup .id-cp__media{height:55px}
  #id-contact-popup .id-cp__field input{height:36px;padding:6px 10px}
  #id-contact-popup .id-cp__field textarea{height:58px;min-height:58px}
  #id-contact-popup .id-cp__close{width:26px;height:26px;font-size:30px}
}
@media(max-width:980px){
  #id-contact-popup .id-cp__layout{grid-template-columns:minmax(0,1fr)}
  #id-contact-popup .id-cp__left{padding:25px}
  #id-contact-popup .id-cp__right{border-radius:0 0 20px 20px}
  #id-contact-popup .id-cp__form-wrap{padding:36px 25px 27px}
}
@media(max-width:767px){
  #id-contact-popup .id-cp__layout{display:flex;flex-direction:column}
  #id-contact-popup .id-cp__right{order:0;border-radius:16px 16px 0 0}
  #id-contact-popup .id-cp__left{order:1;gap:12px;padding:18px 15px}
  #id-contact-popup .id-cp__testimonial,#id-contact-popup .id-cp__intro{display:none}
  #id-contact-popup .id-cp__awards{margin-top:0}
  #id-contact-popup .id-cp__form-wrap{padding:32px 15px 22px}
}
@media(max-width:600px){
  #id-contact-popup{padding:7px}
  #id-contact-popup .id-cp__panel{max-height:calc(100dvh - 14px);border-radius:17px}
  #id-contact-popup .id-cp__awards-grid{gap:5px}
  #id-contact-popup .id-cp__award{height:53px}
  #id-contact-popup .id-cp__media-item{width:110px;flex-basis:110px;height:43px;padding:5px 9px}
  #id-contact-popup .id-cp__media-item img{height:34px}
}
@media(max-width:430px){
  #id-contact-popup .id-cp__row{grid-template-columns:1fr}
}
@media(prefers-reduced-motion:reduce){
  #id-contact-popup .id-cp__media-track{animation:none}
  #id-contact-popup .id-cp__slide-track{transition:none}
}
`
