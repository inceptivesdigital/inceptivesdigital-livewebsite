import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCachedList, setCachedList, seedCachedPosts } from '../../../../utils/wpCache'

const WP_API_BASE = 'https://nextincep.wpenginepowered.com/wp-json/wp/v2'
const FEATURED_SLUGS = [
  'what-is-mobile-app-development-a-beginners-guide',
  'mobile-app-development-cost',
  'app-development-timeline',
]
const CACHE_KEY = 'featured_three_guides_v1'

function decodeEntities(str = '') {
  if (!str) return ''
  return str
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/&#8216;|&lsquo;/g, '‘')
    .replace(/&#8220;|&ldquo;/g, '“')
    .replace(/&#8221;|&rdquo;/g, '”')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8212;|&mdash;/g, '—')
    .replace(/&#038;|&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\[\s*&hellip;\s*\]|\[\s*…\s*\]|&hellip;/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// Mirrors wp_trim_words($excerpt, $limit, '') — trims words without adding trailing ellipsis
function trimWords(text = '', limit = 18) {
  const words = text.trim().split(/\s+/).filter(Boolean)
  if (words.length <= limit) return words.join(' ')
  return words.slice(0, limit).join(' ')
}

function formatFeaturedPost(raw, isHero) {
  const media = raw?._embedded?.['wp:featuredmedia']?.[0]
  const sizes = media?.media_details?.sizes
  const image = isHero
    ? sizes?.large?.source_url || sizes?.medium_large?.source_url || media?.source_url || ''
    : sizes?.medium_large?.source_url || sizes?.large?.source_url || media?.source_url || ''

  const terms = raw?._embedded?.['wp:term']?.[0]
  const category =
    Array.isArray(terms) && terms.length > 0 && terms[0]?.name
      ? decodeEntities(terms[0].name)
      : 'App Development'

  const rawExcerpt = decodeEntities(raw?.excerpt?.rendered || '') || decodeEntities(raw?.content?.rendered || '')
  const excerpt = trimWords(rawExcerpt, isHero ? 30 : 18)

  return {
    id: raw.id,
    slug: raw.slug,
    title: decodeEntities(raw?.title?.rendered || ''),
    excerpt,
    category,
    image,
    imageAlt: media?.alt_text || decodeEntities(raw?.title?.rendered || ''),
  }
}

const FEATURED_CSS = `
a.id-featured-three__media {
  font-family: 'SFPRODISPLAYBOLD', sans-serif !important;
}
.id-featured-three__right img {
  object-fit: contain !important;
}
.id-featured-three {
  --id-blue: #2458ed;
  --id-green: #00b945;
  --id-ink: #071c38;
  --id-muted: #55647b;
  width: 100%;
  color: var(--id-ink);
}
.id-featured-three * {
  box-sizing: border-box;
}
.id-featured-three__heading {
  text-align: center;
  margin-bottom: 25px;
}
.id-featured-three__heading h2 {
  font-size: clamp(27px, 3vw, 40px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 0 0 8px;
  color: var(--id-ink);
}
.id-featured-three__heading p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--id-muted);
  margin: 0;
}
.id-featured-three .id-featured-three__layout {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr) !important;
  grid-template-rows: auto !important;
  gap: 18px !important;
  align-items: start !important;
}
.id-featured-three__left,
.id-featured-three__right {
  min-width: 0;
}
.id-featured-three__right {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: stretch;
}
.id-featured-three .id-featured-three__card {
  display: flex !important;
  min-width: 0;
  height: auto !important;
  min-height: 0 !important;
  border-radius: 16px;
  overflow: hidden;
}
.id-featured-three .id-featured-three__card--hero {
  flex-direction: column !important;
}
.id-featured-three .id-featured-three__card--side {
  flex-direction: row !important;
  align-items: stretch;
  grid-column: auto !important;
  grid-row: auto !important;
}
.id-featured-three__media {
  display: block;
  overflow: hidden;
  background: #eef4f5;
  min-width: 0;
}
.id-featured-three .id-featured-three__card--hero .id-featured-three__media {
  height: auto !important;
  min-height: 0 !important;
  flex: none !important;
  aspect-ratio: 16 / 7;
}
.id-featured-three .id-featured-three__card--side .id-featured-three__media {
  width: 38% !important;
  height: auto !important;
  min-height: 0 !important;
  flex: 0 0 44% !important;
  align-self: stretch;
}
.id-featured-three__image {
  display: block !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transition: transform 0.25s;
}
.id-featured-three__card:hover .id-featured-three__image {
  transform: scale(1.025);
}
.id-featured-three__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 125px;
  height: 100%;
  padding: 15px;
  color: #536782;
  text-align: center;
}
.id-featured-three .id-featured-three__content {
  min-width: 0;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  flex: 1 1 auto !important;
  align-self: stretch !important;
  text-align: left;
}
.id-featured-three .id-featured-three__card--hero .id-featured-three__content {
  padding: 23px 25px !important;
}
.id-featured-three .id-featured-three__card--side .id-featured-three__content {
  padding: 16px 18px !important;
}
.id-featured-three__category {
  display: block;
  color: black;
  text-transform: capitalize;
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 9px;
  background: #00ce441f;
  padding: 8px 18px;
  border-radius: 50px;
  border: 1px solid #00ce44;
}
.id-featured-three .id-featured-three__title {
  color: var(--id-ink) !important;
  letter-spacing: -0.025em;
  margin: 0 0 10px !important;
  padding: 0 !important;
  font-weight: 800 !important;
  line-height: 1.32 !important;
}
.id-featured-three__card--hero .id-featured-three__title {
  font-size: clamp(23px, 2.35vw, 26px) !important;
}
.id-featured-three__card--side .id-featured-three__title {
  font-size: clamp(15px, 1.27vw, 20px) !important;
}
.id-featured-three__title a {
  color: inherit !important;
  text-decoration: none !important;
}
.id-featured-three__title a:hover {
  color: #00ce44 !important;
}
.id-featured-three .id-featured-three__excerpt {
  display: block !important;
  color: var(--id-muted);
  font-size: 13px;
  line-height: 1.55;
  margin: 0 0 12px !important;
  overflow: visible !important;
  text-overflow: clip !important;
  -webkit-line-clamp: unset !important;
  line-clamp: unset !important;
}
.id-featured-three__card--hero .id-featured-three__excerpt {
  font-size: 14px;
}
.id-featured-three__readmore {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 700;
  color: var(--id-green) !important;
  text-decoration: none !important;
  margin-top: 5px;
  white-space: nowrap;
}
.id-featured-three__readmore svg {
  transition: transform 0.2s;
  flex-shrink: 0;
}
.id-featured-three__readmore:hover svg {
  transform: translateX(4px);
}
@media (max-width: 1600px) {
  .id-featured-three__card--hero .id-featured-three__title {
    font-size: clamp(15px, 2.35vw, 0px) !important;
  }
}
@media (max-width: 1024px) {
  .id-featured-three .id-featured-three__layout {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 16px !important;
  }
  .id-featured-three__right {
    gap: 16px;
  }
  .id-featured-three .id-featured-three__card--side .id-featured-three__media {
    width: 34% !important;
    flex-basis: 34% !important;
  }
  .id-featured-three .id-featured-three__card--hero .id-featured-three__media {
    aspect-ratio: 16 / 6;
  }
}
@media (max-width: 767px) {
  .id-featured-three__heading {
    margin-bottom: 20px;
  }
  .id-featured-three .id-featured-three__layout {
    gap: 15px !important;
  }
  .id-featured-three__right {
    gap: 15px;
  }
  .id-featured-three .id-featured-three__card--hero,
  .id-featured-three .id-featured-three__card--side {
    flex-direction: column !important;
  }
  .id-featured-three .id-featured-three__card--hero .id-featured-three__media,
  .id-featured-three .id-featured-three__card--side .id-featured-three__media {
    width: 100% !important;
    flex: none !important;
    height: auto !important;
    aspect-ratio: 16 / 7.5;
  }
  .id-featured-three__image {
    height: unset !important;
  }
  .id-featured-three .id-featured-three__card--hero .id-featured-three__content,
  .id-featured-three .id-featured-three__card--side .id-featured-three__content {
    padding: 18px !important;
  }
  .id-featured-three__card--hero .id-featured-three__title {
    font-size: 23px !important;
  }
  .id-featured-three__card--side .id-featured-three__title {
    font-size: 19px !important;
  }
}
@media (prefers-reduced-motion: reduce) {
  .id-featured-three__card,
  .id-featured-three__image,
  .id-featured-three__readmore svg {
    transition: none !important;
  }
}
`

function FeaturedCard({ post, hero = false }) {
  if (!post) return null
  const href = `/blog/${post.slug}`

  return (
    <article
      className={`id-featured-three__card ${
        hero ? 'id-featured-three__card--hero' : 'id-featured-three__card--side'
      }`}
    >
      <Link className="id-featured-three__media" to={href} aria-label={post.title}>
        {post.image ? (
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="id-featured-three__image"
            loading="lazy"
            decoding="async"
            sizes={
              hero
                ? '(max-width: 1024px) 100vw, 60vw'
                : '(max-width: 767px) 100vw, (max-width: 1024px) 38vw, 16vw'
            }
          />
        ) : (
          <span className="id-featured-three__placeholder">Inceptives Digital</span>
        )}
      </Link>

      <div className="id-featured-three__content">
        <span className="id-featured-three__category">{post.category}</span>
        <h3 className="id-featured-three__title">
          <Link to={href}>{post.title}</Link>
        </h3>
        {post.excerpt && <p className="id-featured-three__excerpt">{post.excerpt}</p>}
        <Link
          className="id-featured-three__readmore"
          to={href}
          aria-label={`Read more: ${post.title}`}
        >
          Read More
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default function FeaturedGuides() {
  const initialCached = getCachedList(CACHE_KEY)
  const [posts, setPosts] = useState(() => initialCached || [])
  const [loading, setLoading] = useState(() => !initialCached)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function loadFeatured() {
      try {
        const params = new URLSearchParams({
          slug: FEATURED_SLUGS.join(','),
          per_page: String(FEATURED_SLUGS.length),
          status: 'publish',
          _embed: '1',
        })
        const res = await fetch(`${WP_API_BASE}/posts?${params.toString()}`, {
          method: 'GET',
          signal: controller.signal,
        })
        if (!res.ok) throw new Error(`WP API ${res.status}`)
        const rawPosts = await res.json()
        if (!active || !Array.isArray(rawPosts)) return

        // Seed individual post cache so clicking Read More opens /blog/:slug instantly
        seedCachedPosts(rawPosts)

        // Preserve exact slug order from PHP snippet
        const bySlug = new Map(rawPosts.map((p) => [p.slug, p]))
        const ordered = FEATURED_SLUGS.map((s) => bySlug.get(s))
          .filter(Boolean)
          .map((raw, idx) => formatFeaturedPost(raw, idx === 0))

        if (ordered.length > 0) {
          setCachedList(CACHE_KEY, ordered)
          setPosts(ordered)
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          // Keep any cached posts if fetch fails
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadFeatured()
    return () => {
      active = false
      controller.abort()
    }
  }, [])

  if (!loading && posts.length === 0) return null

  return (
    <section
      className="w-full bg-[#E9FCEF] text-[#111111] pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12"
      aria-label="Featured mobile app guides"
    >
      <style>{FEATURED_CSS}</style>
      <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="id-featured-three">
          <div className="id-featured-three__heading">
            <h2>Featured Guides</h2>
          </div>

          {loading ? (
            <div className="id-featured-three__layout">
              <div className="id-featured-three__left">
                <div className="rounded-[16px] bg-white/70 border border-[#d8efe0] h-[380px] animate-pulse" />
              </div>
              <div className="id-featured-three__right">
                <div className="rounded-[16px] bg-white/70 border border-[#d8efe0] h-[180px] animate-pulse" />
                <div className="rounded-[16px] bg-white/70 border border-[#d8efe0] h-[180px] animate-pulse" />
              </div>
            </div>
          ) : (
            <div className="id-featured-three__layout">
              <div className="id-featured-three__left">
                <FeaturedCard post={posts[0]} hero />
              </div>
              <div className="id-featured-three__right">
                {posts[1] && <FeaturedCard post={posts[1]} />}
                {posts[2] && <FeaturedCard post={posts[2]} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
