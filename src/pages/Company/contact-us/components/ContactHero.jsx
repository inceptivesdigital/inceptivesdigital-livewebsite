import { MessageCircle } from 'lucide-react'
import ContactForm from './ContactForm'

const openLiveChat = () => {
  // Opens the live chat widget if one is loaded on the page (Tawk / LiveChat / Intercom / Crisp).
  if (window.Tawk_API?.maximize) return window.Tawk_API.maximize()
  if (window.LiveChatWidget?.call) return window.LiveChatWidget.call('maximize')
  if (window.Intercom) return window.Intercom('show')
  if (window.$crisp) return window.$crisp.push(['do', 'chat:open'])
}

export default function ContactHero() {
  const rows = [
    { icon: '/assets/contact-us/mail-icon.png', label: 'info@inceptivesdigital.com', href: 'mailto:info@inceptivesdigital.com' },
    { icon: '/assets/contact-us/call-icon.png', label: '(469) 807-8028', href: 'tel:+14698078028' },
  ]

  const ratings = [
    { src: '/assets/clutch.png', alt: 'Clutch 5.0 stars' },
    { src: '/assets/bark.png', alt: 'Bark 5.0 rating' },
    { src: '/assets/trustpilot.png', alt: 'Trustpilot 4.7 rating' },
  ]

  return (
    <section className="relative bg-black pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,206,68,0.14),transparent_55%)] pointer-events-none" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy + contact methods + ratings */}
          <div className="lg:col-span-6 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-white tracking-tight leading-[1.12] mb-6">
              Got an App Idea? Share With Us.{' '}
              <span className="text-[#00CE44]">Let’s Create Together.</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Finding someone who understands your idea and brings it to life? Let us help you. Contact us, and we will get back to you within 24 hours. We are happy to sign an NDA, so you can share your project with confidence.
            </p>

            <p className="text-white font-semibold text-sm sm:text-base mb-4">
              You can fill out our form or contact us through:
            </p>

            <div className="space-y-3.5 mb-10">
              {rows.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="flex items-center gap-3 text-white hover:text-[#00CE44] transition-colors w-fit group"
                >
                  <img
                    src={r.icon}
                    alt=""
                    className="w-6 h-6 object-contain shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <span className="text-sm sm:text-base font-medium">{r.label}</span>
                </a>
              ))}
              <button
                type="button"
                onClick={openLiveChat}
                className="flex items-center gap-3 text-white hover:text-[#00CE44] transition-colors bg-transparent border-0 p-0 cursor-pointer text-left group"
              >
                <span className="w-6 h-6 rounded-full bg-[#00CE44] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-3.5 h-3.5 text-black fill-current" viewBox="0 0 24 24">
                    <path d="M12 3c-4.97 0-9 3.58-9 8 0 1.68.61 3.23 1.66 4.49L3.5 20.5l5.22-1.39C10.02 19.64 10.99 20 12 20c4.97 0 9-3.58 9-8s-4.03-8-9-8z" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base font-medium">Live chat</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              {ratings.map((r) => (
                <img key={r.alt} src={r.src} alt={r.alt} className="h-12 sm:h-14 w-auto object-contain select-none" loading="lazy" />
              ))}
            </div>
          </div>

          {/* Right: same form as the Contact Us form */}
          <div className="lg:col-span-6">
            <div className="rounded-[20px] bg-[#111111] border border-white/10 p-6 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
