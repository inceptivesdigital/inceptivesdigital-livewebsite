import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, X } from 'lucide-react'

export default function LeadershipHero() {
  const [videoOpen, setVideoOpen] = useState(false)

  const scrollToTeam = () => {
    const el = document.getElementById('the-founders')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-black pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#00CE44]/[0.12] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[350px] bg-[#00CE44]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle tech dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading + Copy + Action CTAs */}
          <div className="lg:col-span-7 text-left">
            {/* Pill Tag */}

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.12] mb-6">
              Meet the Visionaries Behind <span className="text-[#00CE44]">Decisions</span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              An idea becomes a product through hundreds of decisions. Meet the leaders and teams at Inceptives Digital who help clients make those decisions, from the first conversation through design, development, and launch.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToTeam}
                className="px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00ba3e] text-black font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 cursor-pointer border-0 shadow-[0_0_25px_rgba(0,206,68,0.35)] hover:shadow-[0_0_35px_rgba(0,206,68,0.5)] active:scale-95 inline-flex items-center gap-2.5"
              >
                <span>Meet the Team</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <Link
                to="/portfolio"
                className="px-8 py-3.5 rounded-none bg-transparent hover:bg-white/[0.08] text-white font-medium text-sm sm:text-base tracking-tight transition-all duration-200 cursor-pointer border border-white/20 hover:border-white/40 active:scale-95 inline-flex items-center gap-2"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Video Thumbnail Card with Play Overlay */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#141517] shadow-2xl shadow-black/80">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/leadership/hero-thumb2.png"
                  alt="Inceptives Digital Team Collaboration"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Play Button Trigger */}
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#00CE44] hover:bg-[#00ba3e] text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,206,68,0.6)] cursor-pointer transition-all duration-200 group-hover:scale-110 border-0"
                  aria-label="Play Video"
                >
                  <Play className="w-6 h-6 fill-black translate-x-0.5" />
                </button>
              </div>

              {/* Bottom Caption Bar */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-[#18191c] border-t border-white/[0.06]">
                <div className="text-left">
                  <div className="text-white text-sm font-bold tracking-tight">Decisions In Motion</div>
                  <div className="text-xs text-white/60">Cross-functional product leadership in sync</div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#00CE44]/15 text-[#00CE44] border border-[#00CE44]/30 rounded-none uppercase tracking-wider">
                  Watch Clip
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#111] rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#161616]">
              <span className="text-sm font-bold text-white">Inceptives Digital • Leadership Collaboration</span>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video bg-black">
              <video
                src="/assets/comp-bannerhero.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
