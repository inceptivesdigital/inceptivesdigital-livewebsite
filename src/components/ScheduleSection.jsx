import { useState, useEffect } from 'react'

export default function ScheduleSection() {
  const [iframeHeight, setIframeHeight] = useState(700)
  const [isLoaded, setIsLoaded] = useState(false)

  // Listen to Calendly's height messages for perfect responsiveness without inner scrolling
  useEffect(() => {
    const handleCalendlyMessage = (e) => {
      if (
        e.origin &&
        e.origin.includes('calendly.com') &&
        e.data &&
        e.data.event === 'calendly.page_height'
      ) {
        const height = parseInt(e.data.payload?.height, 10)
        if (height && !isNaN(height)) {
          setIframeHeight(Math.max(680, height))
        }
      }
    }

    window.addEventListener('message', handleCalendlyMessage)
    return () => window.removeEventListener('message', handleCalendlyMessage)
  }, [])

  const calendlyUrl =
    'https://calendly.com/inceptivesdigital-info/30min?embed_type=Inline&embed_domain=1&month=2026-11'

  return (
    <section id="schedule" className="py-16 sm:py-20 lg:py-24 bg-[#0c0d10] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        
        {/* Heading: 40px bold, text-center, vibrant green #00CE44 */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#00CE44] text-center tracking-tight leading-tight mb-8 sm:mb-12">
          Schedule Your Strategy Session
        </h2>

        {/* Clean transparent container: Eliminates the double-card white gap */}
        <div className="w-full flex justify-center relative overflow-x-auto no-scrollbar">
          
          {/* Subtle loading placeholder until Calendly is fully rendered */}
          {!isLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-transparent transition-opacity duration-300 min-h-[680px]">
              <div className="w-10 h-10 border-2 border-[#00CE44] border-t-transparent rounded-full animate-spin mb-4" />
              <span className="text-sm font-medium text-slate-400">Loading strategy calendar...</span>
            </div>
          )}

          {/* Iframe with 1120px locks Calendly into 2-column side-by-side mode without redundant outer white border */}
          <iframe
            src={calendlyUrl}
            title="Calendly Scheduling Page"
            onLoad={() => setIsLoaded(true)}
            className={`w-full min-w-[1120px] max-w-[1120px] border-0 block mx-auto bg-transparent transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              height: `${iframeHeight}px`,
              minHeight: '700px',
              overflow: 'hidden'
            }}
            scrolling="no"
            loading="eager"
          />
        </div>

      </div>
    </section>
  )
}
