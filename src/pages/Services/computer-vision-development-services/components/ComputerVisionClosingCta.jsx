export default function ComputerVisionClosingCta() {
  return (
    <section className="relative w-full bg-[#111214] text-white overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,206,68,0.18),transparent_65%)] pointer-events-none" />
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-5">
            See What Your Data Can Really Do with Computer Vision
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            Deploy computer vision models that automate inspection, detection, and analysis at scale, ensuring operational accuracy and efficiency.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium transition-colors"
          >
            Schedule Your ML Strategy Session →
          </a>
          <p className="text-white/70 text-sm mt-4">30 minutes. From Pixels to Insights</p>
        </div>
      </div>
    </section>
  )
}
