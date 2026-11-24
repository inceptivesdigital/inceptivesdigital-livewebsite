import { useEffect } from 'react'
import GameHero from './components/GameHero'
import GameReviewStrip from './components/GameReviewStrip'
import GameServicesGrid from './components/GameServicesGrid'
import GameMultiPlatform from './components/GameMultiPlatform'
import GameMidCta from './components/GameMidCta'
import GameWhenToConsider from './components/GameWhenToConsider'
import GameEnginesGrid from './components/GameEnginesGrid'
import GameProcess from './components/GameProcess'
import GameMarketGrowth from './components/GameMarketGrowth'
import GameTypesGrid from './components/GameTypesGrid'
import GameBenefitsAndCost from './components/GameBenefitsAndCost'
import StandardTechStack from '../../../components/StandardTechStack'
import Testimonials from '../../../components/Testimonials'
import AwardsSection from '../../../components/AwardsSection'
import FAQSection from '../../../components/FAQSection'

const GAME_TECH_STACK = [
  {
    name: 'Game Engines',
    items: [
      { name: 'Unity Engine', img: '/assets/mobile-game/logos/unity.svg', alt: 'Unity Game Engine' },
      { name: 'Unreal Engine', img: '/assets/mobile-game/logos/unrealengine.svg', alt: 'Unreal Game Engine' },
      { name: 'Godot Engine', img: '/assets/mobile-game/logos/godot.svg', alt: 'Godot Game Engine' },
      { name: 'Cocos Engine', img: '/assets/mobile-game/logos/cocos.svg', alt: 'Cocos2d Game Engine' },
      { name: 'CryEngine', img: '/assets/mobile-game/logos/cryengine.svg', alt: 'CryEngine 3D Game Engine' },
      { name: 'GameMaker Studio', img: '/assets/mobile-game/logos/gamemaker.svg', alt: 'GameMaker Studio' },
      { name: 'Roblox Studio', img: '/assets/mobile-game/logos/roblox.svg', alt: 'Roblox Studio' },
    ],
  },
  {
    name: 'Mobile & Native Platforms',
    items: [
      { name: 'Apple iOS', img: '/assets/mobile-game/logos/apple.svg', alt: 'Apple iOS Game Development' },
      { name: 'Android', img: '/assets/mobile-game/logos/android.svg', alt: 'Android Game Development' },
      { name: 'Swift', img: '/assets/mobile-app/tech/swift.svg', alt: 'Swift iOS Game Development' },
      { name: 'SwiftUI', img: '/assets/mobile-app/tech/swiftui.svg', alt: 'SwiftUI' },
      { name: 'Kotlin', img: '/assets/mobile-app/tech/kotlin.svg', alt: 'Kotlin Android Game Development' },
      { name: 'Android SDK', img: '/assets/mobile-app/tech/android-sdk.svg', alt: 'Android SDK' },
    ],
  },
  {
    name: 'Languages & Web',
    items: [
      { name: 'C++', img: '/assets/mobile-game/logos/cplusplus.svg', alt: 'C++ Game Programming' },
      { name: 'C#', img: '/assets/mobile-game/logos/csharp.svg', alt: 'C# Unity Programming' },
      { name: 'HTML5', img: '/assets/mobile-game/logos/html5.svg', alt: 'HTML5 Browser Games' },
      { name: 'TypeScript', img: '/assets/mobile-app/typescript.jpg', alt: 'TypeScript' },
      { name: 'JavaScript', img: '/assets/mobile-app/javascript.png', alt: 'JavaScript' },
      { name: 'Flutter', img: '/assets/mobile-app/tech/flutter.svg', alt: 'Flutter' },
    ],
  },
  {
    name: 'Cloud & Multiplayer Backend',
    items: [
      { name: 'AWS', img: '/assets/mobile-app/aws.jpg', alt: 'AWS GameLift & Cloud' },
      { name: 'Microsoft Azure', img: '/assets/mobile-game/logos/azure.svg', alt: 'Microsoft Azure PlayFab' },
      { name: 'Google Cloud', img: '/assets/mobile-app/goole-cloud-platform.jpg', alt: 'Google Cloud Platform' },
      { name: 'Firebase', img: '/assets/mobile-app/firebase.jpg', alt: 'Firebase Realtime & Auth' },
      { name: 'Node.js', img: '/assets/mobile-app/node.jpg', alt: 'Node.js Multiplayer Server' },
      { name: 'PostgreSQL', img: '/assets/mobile-app/postgreSQL.jpg', alt: 'PostgreSQL' },
      { name: 'MongoDB', img: '/assets/mobile-app/mongoDB.jpg', alt: 'MongoDB' },
      { name: 'Redis', img: '/assets/mobile-app/redis.jpg', alt: 'Redis Leaderboards & Caching' },
    ],
  },
  {
    name: 'DevOps, Analytics & QA',
    items: [
      { name: 'Docker', img: '/assets/mobile-app/docker.jpg', alt: 'Docker Containers' },
      { name: 'GitHub Actions', img: '/assets/mobile-app/gitHub-actions.jpg', alt: 'GitHub Actions CI/CD' },
      { name: 'Fastlane', img: '/assets/mobile-app/fastlane.jpg', alt: 'Fastlane Store Releases' },
      { name: 'Google Analytics', img: '/assets/mobile-app/google-analytics.jpg', alt: 'Google Analytics' },
      { name: 'Mixpanel', img: '/assets/mobile-app/tech/mixpanel.svg', alt: 'Mixpanel Player Analytics' },
      { name: 'Sentry', img: '/assets/mobile-app/tech/sentry.svg', alt: 'Sentry Error Tracking' },
      { name: 'Crashlytics', img: '/assets/mobile-app/tech/crashlytics.svg', alt: 'Firebase Crashlytics' },
    ],
  },
]

const GAME_FAQS = [
  {
    q: 'What mobile game development services does Inceptives Digital offer?',
    a: 'We provide end-to-end mobile game development services including 2D and 3D game development, iOS and Android game engineering, HTML5 browser games, AR/VR gaming experiences, game prototyping, UI/UX design, QA testing, and post-launch live operations.',
  },
  {
    q: 'Which game engines do you use for mobile game development?',
    a: 'Our developers work with industry-leading engines including Unity, Unreal Engine, Godot, Cocos2d, CryEngine, GameMaker Studio, Buildbox, Defold, Phaser, and Roblox Studio—selecting the right engine based on your genre, visual fidelity, and target platforms.',
  },
  {
    q: 'How much does it cost to develop a mobile game?',
    a: 'Mobile game development costs typically range from $5,000 to $50,000 for focused mobile games and $50,000 to $200,000+ for feature-rich 3D, multiplayer, or AR/VR titles. Final pricing depends on gameplay complexity, art scope, backend infrastructure, and target platforms.',
  },
  {
    q: 'How long does it take to build a mobile game?',
    a: 'Simple 2D mobile games typically take 2 to 6 months, indie and mid-complexity games take 3 to 12 months, and large-scale PC/console or multiplayer titles require 6 to 24 months depending on feature scope and testing cycles.',
  },
  {
    q: 'Can you add gamification features to our existing mobile app?',
    a: 'Yes. We integrate leaderboards, achievements, daily quests, reward systems, and interactive challenges into existing iOS and Android apps without compromising app speed or stability.',
  },
  {
    q: 'Do you provide post-launch support and live operations for mobile games?',
    a: 'Yes. Our post-launch team handles bug fixes, OS compatibility updates, server scaling, in-app events, monetization tuning, and new content drops to keep players engaged and retained after launch.',
  },
]

export default function MobileGameDevelopmentPage() {
  useEffect(() => {
    const seoTitle = 'Mobile Game Development Company USA | iOS & Android'
    const seoDesc =
      'As a top mobile game development company, Inceptives Digital builds mobile games for all devices, delivering immersive experiences on iOS, Android, and beyond.'

    document.title = seoTitle

    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', seoDesc)
    setMeta('meta[property="og:title"]', 'property', 'og:title', seoTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', seoDesc)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seoTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seoDesc)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://inceptivesdigital.com/mobile-game-development')
  }, [])

  return (
    <div className="bg-[#0b0c0f] text-white selection:bg-[#00CE44] selection:text-black">
      {/* 1. Hero Banner */}
      <GameHero />

      {/* 1b. Review Badges Strip (Clutch, GoodFirms, Bark, Trustpilot) */}
      <GameReviewStrip />

      {/* 2. Diverse Mobile Game Development Services + 4 Stats Bar */}
      <GameServicesGrid />

      {/* 3. Multi-Platform Mobile Game Development Expertise */}
      <GameMultiPlatform />

      {/* 4. Mid CTA Banner */}
      <GameMidCta />

      {/* 5. When Should You Consider Our Mobile Game Development Services */}
      <GameWhenToConsider />

      {/* 6. Mobile Game Development Backed By The Best Engines (10 Engines) */}
      <GameEnginesGrid />

      {/* 7. Tech Stack — Homepage Standard Two-Panel Green Design */}
      <StandardTechStack
        heading={
          <>
            Next-Gen Tech Stack We Use For{' '}
            <span className="text-[#00CE44]">Game Development</span>
          </>
        }
        subtitle="Our game app development team utilizes the latest tech stack to create robust, scalable, and high-performing games across iOS, Android, web, and AR/VR."
        categories={GAME_TECH_STACK}
      />

      {/* 8. Testimonials — Directly Below Tech Stack (Exact Homepage Design) */}
      <Testimonials
        heading="Trust We Have Built With Our Exceptional Mobile Game Development Services"
        subtitle="From fast-moving startups to established enterprises, our clients trust us to engineer engaging mobile games and interactive digital products."
      />

      {/* 9. Our End-to-End Mobile Game Development Process */}
      <GameProcess />

      {/* 11. Why Businesses Are Developing Games in 2026 & Business Growth */}
      <GameMarketGrowth />

      {/* 12. Types of Games We Develop (10 Categories) */}
      <GameTypesGrid />

      {/* 13. Benefits, Cost Breakdown, Quote CTA & Why Choose Us */}
      <GameBenefitsAndCost />

      {/* 14. Awards & Recognitions (Clean Floating Logos) */}
      <AwardsSection />

      {/* 15. FAQs — Exact Homepage Design */}
      <FAQSection
        heading="Frequently Asked Questions About Mobile Game Development"
        faqs={GAME_FAQS}
      />
    </div>
  )
}
