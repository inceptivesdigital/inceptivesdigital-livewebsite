import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const FEATURED_GUIDES = [
  {
    id: 'complete-guide',
    slug: 'mobile-app-development-complete-guide',
    wpFallbackUrl: 'https://nextincep.wpenginepowered.com/blog/mobile-app-development-complete-guide/',
    category: 'App Development',
    title: 'Mobile App Development: Complete Guide',
    excerpt:
      'Explore our complete mobile app development guide covering process, cost, timeline, and trends to build scalable, high-performing mobile apps.',
    image: '/assets/blog/featured/guide-complete.webp',
  },
  {
    id: 'app-cost',
    slug: 'how-much-does-it-cost-to-develop-an-app',
    wpFallbackUrl: 'https://nextincep.wpenginepowered.com/blog/how-much-does-it-cost-to-develop-an-app/',
    category: 'App Development',
    title: 'Mobile App Development Cost (2027)',
    excerpt:
      'Explore app development costs in 2027: simple apps 5K-40K, moderate 40K-120K, advanced 120K-300K+. See cost factors, hidden fees,',
    image: '/assets/blog/featured/guide-cost.webp',
  },
  {
    id: 'app-timeline',
    slug: 'how-long-does-it-take-to-develop-an-app',
    wpFallbackUrl: 'https://nextincep.wpenginepowered.com/blog/how-long-does-it-take-to-develop-an-app/',
    category: 'App Development',
    title: 'How Long Does It Take to Build An App in 2027?',
    excerpt:
      'Discover mobile app development timelines in 2027, from 2-4 months for simple apps to 12+ months for complex',
    image: '/assets/blog/featured/guide-timeline.webp',
  },
]

export default function FeaturedGuides() {
  const [primary, ...secondary] = FEATURED_GUIDES

  return (
    <section className="w-full bg-[#E9FCEF] text-[#111111] pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12">
      <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#111111] text-center tracking-tight mb-10 sm:mb-12">
          Featured Guides
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Primary Vertical Featured Guide */}
          <article className="lg:col-span-5 flex flex-col group">
            <Link
              to={`/blog/${primary.slug}`}
              className="block w-full rounded-[14px] overflow-hidden bg-white shadow-sm border border-[#d8efe0] mb-5"
            >
              <img
                src={primary.image}
                alt={primary.title}
                loading="eager"
                className="w-full h-auto aspect-[1024/474] object-contain bg-white transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <div className="flex flex-col items-start text-left">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-[#00CE44] bg-[#E9FCEF] text-[#111111] text-[12px] font-medium mb-3">
                {primary.category}
              </span>

              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#111111] leading-[1.3] mb-2.5 group-hover:text-[#00CE44] transition-colors">
                <Link to={`/blog/${primary.slug}`}>{primary.title}</Link>
              </h3>

              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-[1.6] mb-3.5">
                {primary.excerpt}
              </p>

              <Link
                to={`/blog/${primary.slug}`}
                className="inline-flex items-center gap-1.5 text-[#00A838] hover:text-[#00892d] text-[13px] sm:text-[14px] font-semibold transition-colors"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Right Column: Two Stacked Horizontal Featured Guides */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-7">
            {secondary.map((guide) => (
              <article
                key={guide.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center group"
              >
                <Link
                  to={`/blog/${guide.slug}`}
                  className="sm:col-span-6 block w-full rounded-[14px] overflow-hidden bg-white shadow-sm border border-[#d8efe0]"
                >
                  <img
                    src={guide.image}
                    alt={guide.title}
                    loading="eager"
                    className="w-full h-auto aspect-[1024/474] object-contain bg-white transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </Link>

                <div className="sm:col-span-6 flex flex-col items-start text-left">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-[#00CE44] bg-[#E9FCEF] text-[#111111] text-[12px] font-medium mb-2.5">
                    {guide.category}
                  </span>

                  <h3 className="text-[18px] sm:text-[19px] font-bold text-[#111111] leading-[1.3] mb-2 group-hover:text-[#00CE44] transition-colors">
                    <Link to={`/blog/${guide.slug}`}>{guide.title}</Link>
                  </h3>

                  <p className="text-[13.5px] sm:text-[14px] text-[#4A4A4A] leading-[1.58] mb-3">
                    {guide.excerpt}
                  </p>

                  <Link
                    to={`/blog/${guide.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#00A838] hover:text-[#00892d] text-[13px] font-semibold transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
