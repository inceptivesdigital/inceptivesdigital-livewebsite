export default function SimilarProjectCTA() {
  return (
    <section className="py-14 bg-[#181818]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="cta-heading text-2xl sm:text-3xl font-bold text-white mb-2">
              Have a Similar Mobile App Project in Mind?
            </h2>
            <p className="text-white/85 text-sm sm:text-base font-normal">
              Thinking of a project like the ones we've delivered? Discuss your mobile app requirements with our engineers and find out what your development scope involves.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base whitespace-nowrap transition-colors border-0 shrink-0"
          >
            Discuss Your Mobile App Project
          </a>
        </div>
      </div>
    </section>
  )
}
