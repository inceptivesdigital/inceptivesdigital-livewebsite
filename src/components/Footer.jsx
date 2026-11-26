import { Link } from 'react-router-dom'

// =========================================================================
// SEO & LINK CONFIGURATION FOR FOOTER
// You can edit each link below. Change rel: 'nofollow' to rel: 'follow'
// at any time to make any link dofollow.
// =========================================================================
export const footerTrustBadges = [
  {
    name: 'Clutch',
    url: 'https://clutch.co/profile/inceptives-digital',
    rel: 'nofollow', // Options: 'nofollow' | 'follow'
    src: '/assets/clutch.png',
    alt: 'Clutch Review Badge',
  },
  {
    name: 'Bark',
    url: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
    rel: 'nofollow', // Options: 'nofollow' | 'follow'
    src: '/assets/bark.png',
    alt: 'Bark Review Badge',
  },
  {
    name: 'Trustpilot',
    url: 'https://www.trustpilot.com/review/nextincep.wpenginepowered.com',
    rel: 'nofollow', // Options: 'nofollow' | 'follow'
    src: '/assets/trustpilot.png',
    alt: 'Trustpilot Review Badge',
  },
]

// Helper function to resolve rel attribute
const getRel = (badgeRel) => {
  if (badgeRel === 'follow' || badgeRel === 'dofollow') {
    return 'noopener noreferrer'
  }
  return 'nofollow noopener noreferrer'
}

export default function Footer() {
  const row1Locations = [
    {
      name: 'New York, USA',
      flag: '/assets/flags/us.png',
      address: '1178 Broadway, 3rd Floor New York, NY 10001 United States',
      mapUrl: 'https://maps.app.goo.gl/yDzMFfkNex88G5Ch9',
    },
    {
      name: 'San Francisco, USA',
      flag: '/assets/flags/us.png',
      address: '490 Post St, Ste 600 San Francisco, CA 94102 United States',
      mapUrl: 'https://maps.app.goo.gl/zyBa2azZrPZohDqK6',
    },
    {
      name: 'Austin, USA',
      flag: '/assets/flags/us.png',
      address: '5900 Balcones Drive, Suite 100 Austin, Texas 78731 United States',
      mapUrl: 'https://maps.app.goo.gl/z2jiThRTxDGZStZh7',
    },
    {
      name: 'Allen, USA',
      flag: '/assets/flags/us.png',
      address: '450 Century Parkway, Suite 250-1005 Allen, TX 75013, USA',
      mapUrl: 'https://maps.app.goo.gl/WRYjYaw7NDaCuZ777',
    },
    {
      name: 'Toronto, Canada',
      flag: '/assets/flags/ca.png',
      address: '2482 Yonge Street Toronto, ON M4P 2H5 Canada',
      mapUrl: 'https://maps.app.goo.gl/kWXeYqPVqd3Sjk219',
    },
  ]

  const row2Locations = [
    {
      name: 'London, UK',
      flag: '/assets/flags/uk.webp',
      address: 'Office 1776, 60 Tottenham Court Road, Fitzrovia, London W1T 2EW',
      mapUrl: 'https://maps.app.goo.gl/hUiYnaCQQzBhwiYq8',
    },
    {
      name: 'Dubai, UAE',
      flag: '/assets/flags/ae.webp',
      address: 'Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates',
      mapUrl: 'https://maps.google.com/?q=Building+A1,+Dubai+Digital+Park,+Dubai+Silicon+Oasis,+Dubai,+United+Arab+Emirates',
    },
    {
      name: 'Singapore',
      flag: '/assets/flags/sg.png',
      address: 'No. 7 Temasek Boulevard #12-07, Suntec Tower One Singapore 038987',
      mapUrl: 'https://maps.app.goo.gl/g8emozVHzc7tXwCLA',
    },
    {
      name: 'Karachi, Pakistan',
      flag: '/assets/flags/pk.png',
      address: 'Office No. 1, Najeeb Center 172-B Tariq Road, PECHS Karachi 75400, Pakistan',
      mapUrl: 'https://maps.google.com/?q=Office+No.+1,+Najeeb+Center+172-B+Tariq+Road,+PECHS+Karachi+75400,+Pakistan',
    },
  ]

  const allLocations = [...row1Locations, ...row2Locations]

  return (
    <footer className="bg-[#0c0d0e] text-[#8e929b] text-sm relative border-t border-white/[0.06] overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] pt-16 sm:pt-20 pb-8">
        {/* Top 6 Columns Layout: Brand + 5 Menus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <img
                src="/assets/footer-logo.png"
                alt="Inceptives Digital"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-[#fff] text-[13px] leading-relaxed max-w-[300px]">
              We build apps, digital products, and AI-powered systems for businesses that cannot afford to get it wrong.
            </p>
            <div className="space-y-1.5 pt-1">
              <a
                href="mailto:info@inceptivesdigital.com"
                className="block text-white hover:text-[#00CE44] text-[13px] transition-colors"
              >
                info@inceptivesdigital.com
              </a>
              <a
                href="tel:(469) 517-3636"
                className="block text-white hover:text-[#00CE44] text-[13px] transition-colors"
              >
                (469) 517-3636
              </a>
            </div>

            {/* Social Icons (LinkedIn, Instagram, Facebook) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/inceptivesdigital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#00CE44] hover:bg-[#00b53c] text-black flex items-center justify-center transition-colors shadow-none border-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/inceptivesdigital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#00CE44] hover:bg-[#00b53c] text-black flex items-center justify-center transition-colors shadow-none border-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/inceptivesdigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#00CE44] hover:bg-[#00b53c] text-black flex items-center justify-center transition-colors shadow-none border-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 5 Menu Columns with Clean White Link Texts */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4">
            {/* 1. Services */}
            <div>
              <div className="font-bold text-white text-[14px] mb-3.5 tracking-tight">Services</div>
              <ul className="space-y-2 text-[13px]">
                <li>
                  <Link to="/mobile-app-development" className="text-white hover:text-[#00CE44] transition-colors">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/ai-development" className="text-white hover:text-[#00CE44] transition-colors">
                    AI Development
                  </Link>
                </li>
                <li>
                  <Link to="/digital-product-development" className="text-white hover:text-[#00CE44] transition-colors">
                    Digital Product Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. Industries */}
            <div>
              <div className="font-bold text-white text-[14px] mb-3.5 tracking-tight">Industries</div>
              <ul className="space-y-2 text-[13px]">
                <li><Link to="/healthcare-app-development" className="text-white hover:text-[#00CE44] transition-colors">Healthcare</Link></li>
                <li><Link to="/fitness-app-development" className="text-white hover:text-[#00CE44] transition-colors">Fitness</Link></li>
                <li><Link to="/fintech-app-development" className="text-white hover:text-[#00CE44] transition-colors">FinTech</Link></li>
                <li><Link to="/dating-app-development-company" className="text-white hover:text-[#00CE44] transition-colors">Dating</Link></li>
                <li><Link to="/education-app-development-company" className="text-white hover:text-[#00CE44] transition-colors">Education</Link></li>
                <li><Link to="/real-estate-app-development-company" className="text-white hover:text-[#00CE44] transition-colors">Real Estate</Link></li>
                <li><Link to="/travel-app-development-company" className="text-white hover:text-[#00CE44] transition-colors">Travel</Link></li>
                <li><Link to="/food-delivery-app-development" className="text-white hover:text-[#00CE44] transition-colors">Food Delivery</Link></li>
                <li><Link to="/ecommerce-app-development-company" className="text-white hover:text-[#00CE44] transition-colors">eCommerce</Link></li>
                <li><Link to="/startup-app-development-company" className="text-white hover:text-[#00CE44] transition-colors">Startup</Link></li>
              </ul>
            </div>

            {/* 3. Case Studies */}
            <div>
              <div className="font-bold text-white text-[14px] mb-3.5 tracking-tight">Case Studies</div>
              <ul className="space-y-2 text-[13px]">
                <li><Link to="/portfolio/wordsmith-pro" className="text-white hover:text-[#00CE44] transition-colors">WordSmith Pro</Link></li>
                <li><Link to="/portfolio/dps-airem" className="text-white hover:text-[#00CE44] transition-colors">DPS Airem</Link></li>
                <li><Link to="/portfolio/state-of-the-art-chiropractic" className="text-white hover:text-[#00CE44] transition-colors">State of the Art Chiropractic</Link></li>
                <li><Link to="/portfolio/family-entertainment-group" className="text-white hover:text-[#00CE44] transition-colors">Family Entertainment Group</Link></li>
                <li><Link to="/portfolio/stakbread" className="text-white hover:text-[#00CE44] transition-colors">StakBread</Link></li>
              </ul>
            </div>

            {/* 4. Locations */}
            <div>
              <div className="font-bold text-white text-[14px] mb-3.5 tracking-tight">Locations</div>
              <ul className="space-y-2 text-[13px]">
                <li><Link to="/mobile-app-development-san-francisco" className="text-white hover:text-[#00CE44] transition-colors">San Francisco</Link></li>
                <li><Link to="/mobile-app-development-company-in-toronto-canada" className="text-white hover:text-[#00CE44] transition-colors">Toronto</Link></li>
                <li><Link to="/mobile-app-development-austin" className="text-white hover:text-[#00CE44] transition-colors">Austin</Link></li>
                <li><Link to="/mobile-app-development-new-york" className="text-white hover:text-[#00CE44] transition-colors">New York</Link></li>
                <li><Link to="/mobile-app-development-company-singapore" className="text-white hover:text-[#00CE44] transition-colors">Singapore</Link></li>
                <li><Link to="/mobile-app-development-company-london-uk" className="text-white hover:text-[#00CE44] transition-colors">London</Link></li>
                <li><Link to="/mobile-app-development-company-dubai-uae" className="text-white hover:text-[#00CE44] transition-colors">Dubai</Link></li>
              </ul>
            </div>

            {/* 5. Company */}
            <div>
              <div className="font-bold text-white text-[14px] mb-3.5 tracking-tight">Company</div>
              <ul className="space-y-2 text-[13px]">
                <li><Link to="/about-us" className="text-white hover:text-[#00CE44] transition-colors">About</Link></li>
                <li><Link to="/blog" className="text-white hover:text-[#00CE44] transition-colors">Blog</Link></li>
                <li><Link to="/press-release" className="text-white hover:text-[#00CE44] transition-colors">Press &amp; Media</Link></li>
                <li><Link to="/partnership" className="text-white hover:text-[#00CE44] transition-colors">Partnership</Link></li>
                <li><Link to="/life-at-inceptives-digital" className="text-white hover:text-[#00CE44] transition-colors">Life At Inceptives Digital</Link></li>
                <li><Link to="/leadership" className="text-white hover:text-[#00CE44] transition-colors">Leadership</Link></li>
                <li><Link to="/founders-letter" className="text-white hover:text-[#00CE44] transition-colors">Founder's Letter</Link></li>
                <li><Link to="/contact-us" className="text-white hover:text-[#00CE44] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="border-t border-white/[0.08] my-8" />

        {/* Section 2: Recognized and Reviewed On */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-2">
          <div>
            <h3 className="font-bold text-white text-[17px] sm:text-[19px]">
              Recognized and Reviewed On
            </h3>
            <p className="text-[#8e929b] text-[13px] mt-1">
              Independent reviews and industry recognition from established B2B platforms.
            </p>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 shrink-0">
            {footerTrustBadges.map((badge) => (
              <a
                key={`footer-${badge.name}`}
                href={badge.url}
                target="_blank"
                rel={getRel(badge.rel)}
                className="inline-block transition-opacity hover:opacity-80"
              >
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider 2 */}
        <div className="border-t border-white/[0.08] my-8" />

        {/* Section 3: Our Locations */}
        <div>
          <h3 className="font-bold text-white text-[17px] sm:text-[19px] mb-6">
            Our Locations
          </h3>

          {/* Desktop Layout: Row 1 has 5 cards, Row 2 has 4 centered cards */}
          <div className="hidden lg:block space-y-4">
            {/* Row 1: 5 Cards */}
            <div className="grid grid-cols-5 gap-3.5">
              {row1Locations.map((loc) => (
                <div
                  key={loc.name}
                  className="bg-[#18191d] rounded-[20px] p-5 border-none shadow-none text-left"
                >
                  <img
                    src={loc.flag}
                    alt={loc.name}
                    className="w-8 h-8 rounded-full object-contain mb-3 block"
                  />
                  {/* Name has NO underline on hover */}
                  <div className="text-white font-bold text-[14px] leading-snug mb-1.5 select-none">
                    {loc.name}
                  </div>
                  {/* Address has hover:underline on hover and links to map */}
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white text-[12px] leading-relaxed block hover:underline cursor-pointer transition-colors"
                  >
                    {loc.address}
                  </a>
                </div>
              ))}
            </div>

            {/* Row 2: 4 Cards Centered */}
            <div className="flex justify-center gap-3.5">
              {row2Locations.map((loc) => (
                <div
                  key={loc.name}
                  className="bg-[#18191d] rounded-[20px] p-5 border-none shadow-none text-left w-[calc((100%-4*0.875rem)/5)]"
                >
                  <img
                    src={loc.flag}
                    alt={loc.name}
                    className="w-8 h-8 rounded-full object-cover mb-3 block"
                  />
                  {/* Name has NO underline on hover */}
                  <div className="text-white font-bold text-[14px] leading-snug mb-1.5 select-none">
                    {loc.name}
                  </div>
                  {/* Address has hover:underline on hover and links to map */}
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white text-[12px] leading-relaxed block hover:underline cursor-pointer transition-colors"
                  >
                    {loc.address}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Layout: Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:hidden gap-4">
            {allLocations.map((loc) => (
              <div
                key={loc.name}
                className="bg-[#18191d] rounded-[20px] p-5 border-none shadow-none text-left"
              >
                <img
                  src={loc.flag}
                  alt={loc.name}
                  className="w-8 h-8 rounded-full object-cover mb-3 block"
                />
                {/* Name has NO underline on hover */}
                <div className="text-white font-bold text-[14px] leading-snug mb-1.5 select-none">
                  {loc.name}
                </div>
                {/* Address has hover:underline on hover and links to map */}
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white text-[12px] leading-relaxed block hover:underline cursor-pointer transition-colors"
                >
                  {loc.address}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Divider 3 */}
        <div className="border-t border-white/[0.08] mt-12 mb-6" />

        {/* Section 4: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e929b]">
          <div>
            © 2026 IT Core Solutions LLC DBA Inceptives Digital. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-white hover:text-[#00CE44] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-condition" className="text-white hover:text-[#00CE44] transition-colors">
              Terms of Use
            </Link>
            <a
              href="https://www.dmca.com/Protection/Status.aspx?ID=f91eaa7d-6fbf-4058-bfda-4801f7c9b566"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/assets/flags/dmca.png"
                alt="DMCA Protected"
                loading="lazy"
                decoding="async"
                className="h-5 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Section 5: Full-Width Video Below Copyright */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none mt-2">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-auto block object-cover"
        >
          <source src="/assets/footer.mp4" type="video/mp4" />
        </video>
      </div>
    </footer>
  )
}
