import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'

export default function BlogsHero({ searchValue = '', onSearchSubmit }) {
  const [inputValue, setInputValue] = useState(searchValue)

  useEffect(() => {
    setInputValue(searchValue)
  }, [searchValue])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearchSubmit) onSearchSubmit(inputValue.trim())
  }

  const handleClear = () => {
    setInputValue('')
    if (onSearchSubmit) onSearchSubmit('')
  }

  return (
    <section className="compact-hero-45dvh w-full bg-white text-[#111111] pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12">
      <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-medium leading-[1.15] tracking-tight text-[#111111]">
          Insights That
          <span className="block text-[#00CE44] font-bold mt-1">
            Shape the Future
          </span>
        </h1>

        {/* Live WordPress Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 max-w-xl mx-auto relative flex items-center"
          role="search"
        >
          <Search className="w-4 h-4 text-[#666666] absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search blogs, guides, cost breakdowns..."
            aria-label="Search blogs"
            className="w-full pl-11 pr-24 py-3 rounded-full bg-[#F6F8F7] border border-[#DCE6DF] text-[#111111] placeholder-[#777777] text-sm focus:outline-none focus:border-[#00CE44] transition-colors"
          />
          {inputValue && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search"
              className="absolute right-[84px] p-1 text-[#777777] hover:text-[#111111] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-1.5 px-4 py-1.5 rounded-full bg-[#00CE44] hover:bg-[#00b83d] text-black text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
