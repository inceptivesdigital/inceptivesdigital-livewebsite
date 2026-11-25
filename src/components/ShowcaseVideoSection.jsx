import { useEffect, useRef, useState } from 'react'

export default function ShowcaseVideoSection() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { rootMargin: '250px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-black relative overflow-hidden py-0 my-0 min-h-[280px] sm:min-h-[480px]">
      {/* 100% Edge-to-edge Full Container — loaded only when scrolled near viewport */}
      <div className="w-full">
        {inView && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            controls={false}
            className="w-full h-auto max-h-[920px] object-cover object-center block pointer-events-none select-none"
            style={{
              imageRendering: '-webkit-optimize-contrast',
            }}
          >
            <source src="/assets/homesection-video.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  )
}
