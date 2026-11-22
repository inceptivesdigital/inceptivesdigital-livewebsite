import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'

const WP_API_BASE = 'https://nextincep.wpenginepowered.com/wp-json/wp/v2'
const PRESS_RELEASE_CAT_ID = 53

function decodeHtml(html = '') {
  if (!html) return ''
  const txt = typeof document !== 'undefined' ? document.createElement('textarea') : null
  if (txt) {
    txt.innerHTML = html
    return txt.value
  }
  return html
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
}

function stripAndTrimWords(html = '', maxWords = 22) {
  const plain = decodeHtml(html.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim()
  const words = plain.split(' ').filter(Boolean)
  if (words.length <= maxWords) return plain
  return words.slice(0, maxWords).join(' ') + '...'
}

function formatDate(dateStr = '') {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return ''
  }
}

function formatPressPost(p) {
  const media = p._embedded?.['wp:featuredmedia']?.[0]
  const image =
    media?.source_url ||
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    ''

  return {
    id: p.id,
    slug: p.slug,
    title: decodeHtml(p.title?.rendered || ''),
    excerpt: stripAndTrimWords(p.excerpt?.rendered || '', 22),
    date: formatDate(p.date),
    rawDate: p.date,
    image,
    imageAlt: decodeHtml(media?.alt_text || p.title?.rendered || ''),
    isPinned: Boolean(p.sticky || p.meta?._id_blog_pinned === '1'),
  }
}

export default function PressList() {
  const [releases, setReleases] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const abortRef = useRef(null)

  const fetchReleases = useCallback(async ({ silent = false } = {}) => {
    if (abortRef.current) abortRef.current.abort()
    const controller = new AbortController()
    abortRef.current = controller

    if (!silent) {
      setLoading(true)
      setError(null)
    }

    try {
      const params = new URLSearchParams({
        _embed: '1',
        categories: String(PRESS_RELEASE_CAT_ID),
        per_page: '30',
        status: 'publish',
        orderby: 'date',
        order: 'desc',
        _cb: String(Date.now()),
      })

      const res = await fetch(`${WP_API_BASE}/posts?${params.toString()}`, {
        cache: 'no-store',
        signal: controller.signal,
      })
      if (!res.ok) throw new Error(`WordPress API returned ${res.status}`)

      const data = await res.json()
      const formatted = (Array.isArray(data) ? data : []).map(formatPressPost)
      formatted.sort((a, b) => {
        if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1
        return new Date(b.rawDate) - new Date(a.rawDate)
      })

      setReleases(formatted)
      setError(null)
    } catch (err) {
      if (err.name === 'AbortError') return
      if (!silent) setError('Unable to load press releases right now. Please try again.')
    } finally {
      if (!controller.signal.aborted && !silent) setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchReleases({ silent: false })
    return () => {
      if (abortRef.current) abortRef.current.abort()
    }
  }, [fetchReleases])

  // Instant reflection on tab focus / visibility return + 15s background sync
  useEffect(() => {
    const refreshSilently = () => {
      if (document.visibilityState === 'visible') fetchReleases({ silent: true })
    }
    window.addEventListener('focus', refreshSilently)
    document.addEventListener('visibilitychange', refreshSilently)
    const interval = setInterval(refreshSilently, 15000)
    return () => {
      window.removeEventListener('focus', refreshSilently)
      document.removeEventListener('visibilitychange', refreshSilently)
      clearInterval(interval)
    }
  }, [fetchReleases])

  return (
    <section className="w-full bg-white text-[#0F172A] py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-Aligned Eyebrow + Heading (exact match to screenshot) */}
        <div className="mb-10 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[2px] bg-[#059648] inline-block" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.18em] text-[#52606D]">
              LATEST UPDATES
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#0F172A] tracking-tight leading-[1.18]">
            Latest Press Releases
          </h2>
        </div>

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12 bg-[#F8FAFC] rounded-[16px] border border-[#E5E7EB] max-w-xl mx-auto px-6">
            <p className="text-[#52606D] text-sm sm:text-base mb-4">{error}</p>
            <button
              type="button"
              onClick={() => fetchReleases({ silent: false })}
              className="px-5 py-2.5 bg-[#00CE44] text-black text-sm font-medium rounded-lg cursor-pointer hover:bg-[#00b83d]"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden animate-pulse"
              >
                <div className="w-full h-[200px] bg-[#E8F0EB]" />
                <div className="p-6 space-y-3">
                  <div className="h-5 w-24 bg-[#ECFDF3] rounded-full" />
                  <div className="h-5 w-full bg-[#E8F0EB] rounded" />
                  <div className="h-5 w-4/5 bg-[#E8F0EB] rounded" />
                  <div className="h-3.5 w-full bg-[#F1F5F9] rounded" />
                  <div className="h-3.5 w-2/3 bg-[#F1F5F9] rounded" />
                  <div className="h-4 w-28 bg-[#E8F0EB] rounded pt-3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && releases.length === 0 && (
          <div className="text-center py-14 bg-[#F8FAFC] rounded-[16px] border border-[#E5E7EB]">
            <p className="text-[#64748B] text-base">No press releases published yet.</p>
          </div>
        )}

        {/* 3-Column Press Release Cards Grid */}
        {!loading && !error && releases.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {releases.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
              >
                {/* Top Full-Bleed Image */}
                {item.image ? (
                  <Link
                    to={`/press-release/${item.slug}`}
                    className="block w-full overflow-hidden bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      loading="lazy"
                      className="block w-full h-[200px] sm:h-[210px] object-cover object-center transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </Link>
                ) : (
                  <Link
                    to={`/press-release/${item.slug}`}
                    className="flex items-center justify-center w-full h-[200px] sm:h-[210px] bg-[#0F1721] text-[#00CE44] font-bold text-lg px-6 text-center"
                  >
                    Inceptives Digital
                  </Link>
                )}

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 text-left">
                  {/* Press Release Pill Badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ECFDF3] border border-[#86EFAC] text-[#059669] text-[12px] font-medium mb-4 w-fit">
                    Press Release
                  </span>

                  {/* Bold Title */}
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-[#0F172A] leading-[1.35] mb-3">
                    <Link
                      to={`/press-release/${item.slug}`}
                      className="text-[#0F172A] hover:text-[#059648] transition-colors no-underline"
                    >
                      {item.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#64748B] leading-[1.6] mb-5 flex-1">
                    {item.excerpt}
                  </p>

                  {/* Date Row */}
                  {item.date && (
                    <div className="flex items-center gap-2 text-[13px] text-[#64748B] pb-5 border-b border-[#F1F5F9]">
                      <Calendar className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                      <span>{item.date}</span>
                    </div>
                  )}

                  {/* Read Release Footer */}
                  <Link
                    to={`/press-release/${item.slug}`}
                    className="pt-4 flex items-center justify-between text-[#059669] hover:text-[#00CE44] text-[13.5px] font-semibold transition-colors group"
                  >
                    <span>Read Release</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
