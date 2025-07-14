import AboutV11 from '@/components/homepage-12/AboutV11'
import BlogPostV7 from '@/components/homepage-12/BlogPostV7'
import HeroV12 from '@/components/homepage-12/HeroV12'
import Pricing from '@/components/homepage-12/Pricing'
import ProcessV7 from '@/components/homepage-12/ProcessV7'
import ServicesV11 from '@/components/homepage-12/ServicesV11'
import TestimonialV8 from '@/components/homepage-12/TestimonialV8'
import WhyChooseUs from '@/components/homepage-12/WhyChooseUs'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import MarqueeV2 from '@/components/shared/MarqueeV2'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'AI Solutions - Rivor',
}

interface BlogsType {
  slug: string
  content: string
  [key: string]: any
}

const blogPosts: BlogsType[] = getMarkDownData('data/ai-solutions/blog')

const homepage12 = () => {
  return (
    <LayoutTwo>
      <HeroV12 />
      <MarqueeV2 />
      <AboutV11 />
      <ServicesV11 />
      <WhyChooseUs />
      <ProcessV7 />
      <TestimonialV8 />
      <Pricing />
      <BlogPostV7 posts={blogPosts} />
      <CTA headingClass="xl:text-[92px]" buttonText="Book a Free AI Consultation">
        Your AI
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/09.png' },
            { id: '2', img: '/images/agent/10.png' },
            { id: '3', img: '/images/agent/07.png' },
          ]}
        />
        Transformation
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Starts Today</span>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage12
