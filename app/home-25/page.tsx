import ClientsV2 from '@/components/homepage-05/ClientsV2'
import SolutionV3 from '@/components/homepage-23/SolutionV3'
import ClientSuccessStoriesV2 from '@/components/homepage-25/ClientSuccessStoriesV2'
import HeroV25 from '@/components/homepage-25/HeroV25'
import MarqueeV5 from '@/components/homepage-25/MarqueeV5'
import PressFeatures from '@/components/homepage-25/PressFeatures'
import WhatWeOffer from '@/components/homepage-25/WhatWeOffer'
import WhyChooseUsV8 from '@/components/homepage-25/WhyChooseUsV8'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import getMarkDownData from '@/utils/GetMarkDownData'
import { Metadata } from 'next'
import { BlogType } from '../ai-blog/page'

export const metadata: Metadata = {
  title: 'PR & Communications Agency - Rivor',
}

const blogPosts: BlogType[] = getMarkDownData('data/communication-agency/blog')

const Homepage25 = () => {
  return (
    <LayoutTwo>
      <HeroV25 />
      <MarqueeV5 />
      <WhatWeOffer />
      <SolutionV3 />
      <WhyChooseUsV8 />
      <ClientSuccessStoriesV2 blog={blogPosts} />
      <ClientsV2 />
      <PressFeatures />
      <CTA buttonText="Let’s get started">
        Let’s Make
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/21.png' },
            { id: '2', img: '/images/agent/18.png' },
            { id: '3', img: '/images/agent/17.png' },
          ]}
        />
        Headlines
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Together</span>
      </CTA>
    </LayoutTwo>
  )
}

export default Homepage25
