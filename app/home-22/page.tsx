import Clients from '@/components/homepage-03/Clients'
import AboutV15 from '@/components/homepage-16/AboutV15'
import AchievementGridV2 from '@/components/homepage-18/AchievementGridV2'
import HeroV22 from '@/components/homepage-22/HeroV22'
import OurExpertiseV3 from '@/components/homepage-22/OurExpertiseV3'
import OurPortfolio from '@/components/homepage-22/OurPortfolio'
import OurServices from '@/components/homepage-22/OurServices'
import PricingV5 from '@/components/homepage-22/PricingV5'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Event Planner Agency - Rivor',
}

export interface ServicesType {
  slug: string
  content: string
  [key: string]: any
}

const servicesData: ServicesType[] = getMarkDownData('data/event-planner')

const homepage22 = () => {
  return (
    <LayoutTwo>
      <HeroV22 />
      <AboutV15
        badge="About Us"
        title="Creating flawless events with a personal touch"
        subTitle="With over 15 years of experience and 2.4K+ successful events, Rivor is your trusted partner in planning, designing, and executing extraordinary events. We believe every occasion is unique and deserves meticulous attention to details."
        description="From intimate gatherings to grand celebrations, our team ensures seamless coordination, innovative designs, and stress-free execution to create lasting impressions."
        buttonText="Meet Our Team"
        buttonLink="/team"
      />
      <AchievementGridV2 />
      <OurExpertiseV3 />
      <OurServices servicesData={servicesData} />
      <OurPortfolio />
      <Clients />
      <PricingV5 />
      <CTA buttonText="Schedule a Free Consultation">
        Let’s Plan
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/17.png' },
            { id: '2', img: '/images/agent/14.jpg' },
            { id: '3', img: '/images/agent/16.png' },
          ]}
        />
        Your
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Dream Event Today!</span>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage22
