import { useState } from 'react'
import { Play, X, Star } from 'lucide-react'

export default function CompanyTestimonials() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState(0)

  const videoReviews = [
    {
      name: 'Shane Lair',
      role: 'Client Video Testimonial',
      headline: 'I absolutely recommend this company.',
      quote:
        'This team is absolutely Amazing! I can’t say enough good things about them. I had tried 3 other app makers before finding them. All of them fell short in the end. The Inceptive team was the literal answer of my prayers.',
      poster: '/assets/about-us/about-men.png',
      rating: 5,
    },
    {
      name: 'Edward Eller',
      role: 'Client Video Testimonial',
      headline: 'The team I never expected to have. Awesome!',
      quote:
        'When I came to these guys, it was just me in an idea. I’ve had ideas before that. I thought were good and sat on them only to watch others take the initiative and reap the rewards because I lacked confidence. When I had the idea for my app I figured, “Not this time.” Aaron and the ID crew did more than just build out my app. They became my team. The team I never expected to have. Awesome!',
      poster: '/assets/about-us/about1.png',
      rating: 5,
    },
  ]

  const writtenReview = {
    author: 'Collis Maddox',
    role: 'Client-Written Testimonial',
    badge: 'Rating: 100/100 Stars forget the 5 Star',
    paragraphs: [
      'Inceptives Digital is the real deal. When I first approached them with my visions, I needed a team that could handle complex architecture and high-level execution without losing the soul of the project. They didn’t just meet those expectations—they blew them out of the water.',
      'They’ve gone above and beyond to ensure every detail of my flagship rollouts and ecosystem was handled with precision. It’s rare to find a partner that balances technical expertise with a genuine commitment to a client’s long-term success. If you’re looking to turn a vision into a reality, these are the people you want in your corner. They don’t just build products; they build legacies.',
    ],
  }

  const currentVideo = videoReviews[activeVideo]

  return (
    <section className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Client Voices
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            How Do We Deliver Our Promise?{' '}
            <span className="text-[#00CE44]">See What Our Clients Have To Say</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base text-center leading-relaxed font-normal max-w-2xl mx-auto">
            Client-written testimonials on one side, client video testimonials on the other side.
          </p>
        </div>

        {/* Dual Column Testimonials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Client Written Testimonial (7 Cols) */}
          <div className="lg:col-span-7 rounded-[26px] bg-gradient-to-br from-[#151515] to-[#0f0f0f] border border-white/10 p-8 sm:p-12 flex flex-col justify-between text-left shadow-2xl relative">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-[#00CE44] text-xs font-mono font-bold tracking-widest uppercase">
                  Client-Written Testimonial
                </span>
                <div className="inline-block px-3 py-1 rounded bg-[#00CE44]/15 border border-[#00CE44]/30 text-[#00CE44] text-[11px] font-bold tracking-wider uppercase">
                  {writtenReview.badge}
                </div>
              </div>

              {/* Quote Mark */}
              <div className="text-5xl font-serif text-[#00CE44] leading-none mb-3">
                “
              </div>

              {/* Testimonial Paragraphs */}
              <div className="space-y-4 text-white/90 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal mb-8">
                {writtenReview.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Reviewer Details */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-white font-bold text-lg sm:text-xl tracking-tight">
                  {writtenReview.author}
                </h4>
                <p className="text-[#00CE44] text-xs sm:text-sm font-medium">
                  {writtenReview.role}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[#00CE44]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clients' Video Testimonials (5 Cols) */}
          <div className="lg:col-span-5 rounded-[26px] bg-[#121212] border border-white/10 p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden shadow-2xl group">
            {/* Video Switcher Tabs */}
            <div className="flex items-center gap-2 mb-4">
              {videoReviews.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeVideo === i
                      ? 'bg-[#00CE44] text-black shadow-md'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>

            {/* Video Poster Area */}
            <div className="relative w-full h-[260px] sm:h-[300px] rounded-[20px] overflow-hidden bg-black mb-6">
              <img
                src={currentVideo.poster}
                alt={currentVideo.name}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Watch Reel Pill Button */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute inset-0 m-auto w-fit h-fit px-6 py-3 rounded-full bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-2xl hover:bg-[#00CE44] transition-all hover:scale-105 active:scale-95"
              >
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Reel</span>
              </button>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-2.5 py-1 rounded bg-[#00CE44] text-black text-[11px] font-bold uppercase tracking-wider mb-1">
                  Video Review
                </span>
                <p className="text-white font-bold text-base sm:text-lg">
                  {currentVideo.name}
                </p>
              </div>
            </div>

            {/* Video Testimonial Quote */}
            <div>
              <div className="flex items-center gap-1 text-[#00CE44] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <h4 className="text-white font-bold text-base mb-2">
                {currentVideo.headline}
              </h4>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed italic mb-4">
                “{currentVideo.quote}”
              </p>

              {/* Switch Video Review Button */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-white/40 text-xs font-mono">
                  {currentVideo.role}
                </span>
                <button
                  onClick={() => setActiveVideo((activeVideo + 1) % videoReviews.length)}
                  className="text-[#00CE44] hover:underline text-xs font-semibold"
                >
                  Next Video ({activeVideo === 0 ? videoReviews[1].name : videoReviews[0].name}) →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#141414] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-white hover:text-black flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-8 text-left">
              <h3 className="text-xl font-bold text-white mb-2">{currentVideo.name}</h3>
              <p className="text-[#00CE44] text-sm mb-4">{currentVideo.role}</p>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black flex items-center justify-center relative">
                <video
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/comp-bannerhero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
