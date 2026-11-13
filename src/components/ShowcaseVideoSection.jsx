export default function ShowcaseVideoSection() {
  return (
    <section className="w-full bg-black relative overflow-hidden py-0 my-0">
      {/* 100% Edge-to-edge Full Container */}
      <div className="w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          className="w-full h-auto max-h-[920px] object-cover object-center block pointer-events-none select-none"
          style={{
            imageRendering: '-webkit-optimize-contrast'
          }}
        >
          <source src="/assets/homesection-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
