import AboutV16 from '@/components/homepage-20/AboutV16'
import BlogPostsV7 from '@/components/homepage-20/BlogPostsV7'
import HeroV20 from '@/components/homepage-20/HeroV20'
import MarqueeV4 from '@/components/homepage-20/MarqueeV4'
import PortfolioV6 from '@/components/homepage-20/PortfolioV6'
import ProcessV9 from '@/components/homepage-20/ProcessV9'
import SolutionV2 from '@/components/homepage-20/SolutionV2'
import TestimonialV10 from '@/components/homepage-20/TestimonialV10'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import VideoV2 from '@/components/shared/VideoV2'

export const metadata = {
  title: 'Social Media Marketing Agency - Rivor',
}

const homepage20 = () => {
  return (
    <LayoutTwo>
      <HeroV20 />
      <VideoV2 thumbnail="/images/video-thumbnail-02.png" />
      <MarqueeV4 />
      <AboutV16 />
      <SolutionV2 />
      <PortfolioV6 />
      <ProcessV9 />
      <TestimonialV10 />
      <BlogPostsV7 />
      <CTA buttonText="Get a Free Strategy Call">
        Let’s Scale
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/15.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        Brand
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">on Social Media!</span>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage20
