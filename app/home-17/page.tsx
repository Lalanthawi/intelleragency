import ClientSuccessStories from '@/components/homepage-17/ClientSuccessStories'
import DawnloadOurApp from '@/components/homepage-17/DawnloadOurApp'
import HeroV17 from '@/components/homepage-17/HeroV17'
import MarqueeV3 from '@/components/homepage-17/MarqueeV3'
import ServicesV15 from '@/components/homepage-17/ServicesV15'
import SocialProof from '@/components/homepage-17/SocialProof'
import WhyChooseUsV6 from '@/components/homepage-17/WhyChooseUsV6'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutTwo from '@/components/shared/LayoutTwo'

export const metadata = {
  title: 'App Development  - Rivor',
}

const homepage17 = () => {
  return (
    <LayoutTwo>
      <HeroV17 />
      <SocialProof />
      <MarqueeV3 />
      <ClientSuccessStories />
      <ServicesV15 />
      <DawnloadOurApp />
      <WhyChooseUsV6 />
      <FaqV2 titleChange />
      <CTA buttonText="Book a Free Consultation">
        Let’s Build
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/13.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/12.png' },
          ]}
        />
        Next
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">App Together</span>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage17
