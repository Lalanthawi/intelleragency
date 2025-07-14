import AboutV15 from '@/components/homepage-16/AboutV15'
import BlogPostV8 from '@/components/homepage-23/BlogPostV8'
import HeroV23 from '@/components/homepage-23/HeroV23'
import PortfolioV7 from '@/components/homepage-23/PortfolioV7'
import PricingV5 from '@/components/homepage-23/PricingV5'
import SolutionV3 from '@/components/homepage-23/SolutionV3'
import TestimonialV11 from '@/components/homepage-23/TestimonialV11'
import WhyChooseUsV7 from '@/components/homepage-23/WhyChooseUsV7'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'Insurance Agency - Rivor',
}

const homepage23 = () => {
  return (
    <LayoutTwo>
      <HeroV23 />
      <Video />
      <AboutV15
        title="Expert advice. Personalized insurance solutions."
        subTitle="For over [X] years, Rivor has been a leading insurance consultancy firm, helping businesses and individuals navigate the complexities of insurance. Our expertise spans risk management, claims assistance, regulatory compliance, and customized insurance planning."
        description="From intimate gatherings to grand celebrations, our team ensures seamless coordination, innovative designs, and stress-free execution to create lasting impressions."
        buttonText="Meet Our Experts"
        buttonLink="/team"
      />
      <SolutionV3 />
      <WhyChooseUsV7 />
      <TestimonialV11 />
      <PortfolioV7 />
      <PricingV5 />
      <BlogPostV8 />
      <CTA buttonText="Schedule a Consultation">
        Let’s Protect
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/18.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        Your
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Future Together</span>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage23
