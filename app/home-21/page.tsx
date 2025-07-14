import TestimonialV10 from '@/components/homepage-18/TestimonialV10'
import SolutionV2 from '@/components/homepage-20/SolutionV2'
import CaseStudyV2 from '@/components/homepage-21/CaseStudyV2'
import ClientsV4 from '@/components/homepage-21/ClientsV4'
import FaqV3 from '@/components/homepage-21/FaqV3'
import Hero21 from '@/components/homepage-21/Hero21'
import OurExpertiseV3 from '@/components/homepage-21/OurExpertiseV3'
import TeamV5 from '@/components/homepage-21/TeamV5'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Law Firm Agency - Rivor',
}
const Homepage21 = () => {
  return (
    <LayoutTwo>
      <Hero21 />
      <OurExpertiseV3 />
      <SolutionV2 />
      <TeamV5 />
      <CaseStudyV2 />
      <ClientsV4 />
      <TestimonialV10 />
      <FaqV3 />
      <CTA buttonText="Book a Free Consultation">
        Request a
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/16.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        Free
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Consultation</span>
      </CTA>
    </LayoutTwo>
  )
}

export default Homepage21
