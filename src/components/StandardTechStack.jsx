import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function StandardTechStack({
  eyebrow = null,
  heading,
  subtitle,
  categories = [],
}) {
  const [activeCategory, setActiveCategory] = useState(0)

  if (!categories.length) return null

  const activeCat = categories[activeCategory] || categories[0]

  return (
    <section className="py-16 sm:py-24 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          {eyebrow && (
            <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Two Solid Green Panels */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Green Panel: Category List */}
          <div className="lg:col-span-4 rounded-[16px] bg-[#00CE44] p-4 flex flex-col justify-start gap-1 border-0 shadow-none">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === idx
              const label = cat.name || cat.label
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveCategory(idx)}
                  className={`w-full text-left px-4 py-3 rounded-none transition-colors flex items-center justify-between text-xs sm:text-sm cursor-pointer border-0 shadow-none ${
                    isActive
                      ? 'bg-black text-white font-semibold'
                      : 'bg-transparent text-black font-medium hover:bg-black/10 border-b border-black/10'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && <ArrowRight className="w-4 h-4 text-white shrink-0" />}
                </button>
              )
            })}
          </div>

          {/* Right Green Panel: White Tech Logo Boxes */}
          <div className="lg:col-span-8 rounded-[16px] bg-[#00CE44] p-6 sm:p-10 flex flex-wrap items-start content-start gap-6 sm:gap-8 border-0 shadow-none">
            {(activeCat.items || []).map((tech) => (
              <div key={tech.name} className="flex flex-col items-center w-24 sm:w-28 text-center">
                <div className="w-24 sm:w-28 h-20 sm:h-24 rounded-xl bg-white flex items-center justify-center p-2.5 mb-2.5 border-0 shadow-none">
                  <img
                    src={tech.img || tech.icon}
                    alt={tech.alt || tech.name}
                    className="w-16 h-14 sm:w-20 sm:h-16 object-contain select-none"
                    loading="lazy"
                  />
                </div>
                <span className="text-black text-xs sm:text-[14px] font-normal leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
