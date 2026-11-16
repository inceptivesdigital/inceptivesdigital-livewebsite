import { useState } from 'react'
import { Play, X } from 'lucide-react'

// Swap each `src` for the client's real testimonial file (e.g. /assets/contact-us/videos/shane-lair.mp4).
const FALLBACK_VIDEO = '/assets/comp-bannerhero.mp4'

const videos = [
  { name: 'Shane Lair', role: 'Client Video Testimonial', src: FALLBACK_VIDEO },
  { name: 'Edward Eller', role: 'Client Video Testimonial', src: FALLBACK_VIDEO },
  { name: 'Collis Maddox', role: 'Owner/Designer, MaddTech', src: FALLBACK_VIDEO },
  { name: 'Gary Dixon', role: 'Founder, StakBread', src: FALLBACK_VIDEO },
]

export default function ContactVideoTestimonials() {
  const [active, setActive] = useState(null)

  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1300px]">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Real Reviews from The Founders We’ve Worked With
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {videos.map((v, i) => (
            <div key={v.name} className="text-center">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative w-full aspect-[9/14] rounded-[18px] overflow-hidden border border-white/10 bg-gradient-to-b from-[#1d1d1d] to-[#0b2a14] cursor-pointer p-0"
                aria-label={`Play ${v.name} testimonial`}
              >
                <video src={v.src} muted playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                <span className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl group-hover:bg-[#00CE44] group-hover:scale-105 transition-all">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </span>
              </button>
              <p className="text-white font-bold text-sm sm:text-base mt-4">{v.name}</p>
              <p className="text-white/60 text-xs sm:text-sm">{v.role}</p>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-3xl bg-[#141414] rounded-2xl overflow-hidden border border-white/20" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-white hover:text-black flex items-center justify-center cursor-pointer border-0"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full bg-black">
              <video key={videos[active].name} src={videos[active].src} autoPlay controls className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
