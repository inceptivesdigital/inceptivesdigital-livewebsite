import { useEffect } from 'react'
import ClientMarquee from '../components/ClientMarquee'
import Testimonials from '../components/Testimonials'
import AwardsSection from '../components/AwardsSection'
import FAQSection from '../components/FAQSection'
import BlogSection from '../components/BlogSection'
import BookingCTA from '../components/BookingCTA'

import StaffHero from './StaffAugmentation/StaffHero'
import StaffScaleSmarter from './StaffAugmentation/StaffScaleSmarter'
import StaffBenefits from './StaffAugmentation/StaffBenefits'
import StaffTeamBuilder from './StaffAugmentation/StaffTeamBuilder'
import StaffRolesGrid from './StaffAugmentation/StaffRolesGrid'
import StaffTechSections from './StaffAugmentation/StaffTechSections'
import StaffToolsStack from './StaffAugmentation/StaffToolsStack'
import StaffProcess from './StaffAugmentation/StaffProcess'
import StaffWhyChoose from './StaffAugmentation/StaffWhyChoose'

const STAFF_FAQS = [
  {
    q: 'How quickly can you provide us with the right IT professionals?',
    a: "We understand that time is crucial for your projects. That's why we are here to connect you with our pre-vetted IT experts between 5 and 7 business days to avoid any delays in your delivery timelines.",
  },
  {
    q: 'What types of IT roles can we augment through your services?',
    a: 'Our pool of talents includes software developers, QA engineers, DevOps specialists, UI/UX designers, project managers, blockchain developers, and many more. Whatever your project needs, we will provide the expertise required.',
  },
  {
    q: 'How do you ensure the quality of the professionals you provide?',
    a: 'Every individual developer in our system goes through a very rigorous, multi-step selection process. We assess technical skills, communication, and cultural fit to ensure that they are able to harmoniously and promptly integrate into your team.',
  },
  {
    q: 'Will we have the flexibility to scale up or down depending on the project needs?',
    a: 'Absolutely, our staff augmentation model is fully flexible. We can scale up or down at any time with no long-term commitment, unlike what is involved with traditional hiring gains.',
  },
  {
    q: 'How do your professionals integrate with our existing workflows?',
    a: 'Our IT professionals are trained to adapt quickly to your tools, processes, and communication style, which allows smooth collaboration just like your in-house team.',
  },
  {
    q: 'Is staff augmentation cheaper than hiring full-time employees?',
    a: "Yes. Under our model, you save on recruitment, training, benefits, and all overhead costs. So, when you want talent, you pay for that talent only—it's an efficient money-saver.",
  },
  {
    q: 'What ongoing support do we get once the professionals join our team?',
    a: "We don't place talent and disappear. Our support management team provides continuous support by performing regular check-ins and performance checks to ensure all your projects run smoothly and expectations are met.",
  },
]

export default function StaffAugmentation() {
  useEffect(() => {
    const title = 'IT Staff Augmentation Services USA | Hire Top IT Talent'
    const description =
      'Access skilled IT talent with our staff augmentation services quickly to scale your team, accelerate development, and meet project deadlines seamlessly.'

    document.title = title

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', 'https://inceptivesdigital.com/staff-augmentation')
  }, [])

  return (
    <div className="bg-[#000000] text-white selection:bg-[#00CE44] selection:text-black">
      <StaffHero />
      <StaffScaleSmarter />
      <ClientMarquee />
      <StaffBenefits />
      <StaffTeamBuilder />
      <StaffRolesGrid />
      <StaffTechSections />
      <StaffToolsStack />
      <StaffProcess />
      <Testimonials
        heading="Hear It From Our Clients!"
        subtitle="We build products that work — and relationships that last. Our clients don't just launch with us, they scale with us. These reviews speak for themselves."
      />
      <StaffWhyChoose />
      <AwardsSection />
      <FAQSection faqs={STAFF_FAQS} heading="IT Staff Augmentation FAQs" />
      <BlogSection />
      <BookingCTA />
    </div>
  )
}
