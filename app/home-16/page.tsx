import AboutV15 from '@/components/homepage-16/AboutV15'
import HeroV16 from '@/components/homepage-16/HeroV16'
import MarketingBlog from '@/components/homepage-16/MarketingBlog'
import ProcessV8 from '@/components/homepage-16/ProcessV8'
import ProjectServicesV4 from '@/components/homepage-16/ProjectServicesV4'
import ServicesV14 from '@/components/homepage-16/ServicesV14'
import WhyChooseUsV5 from '@/components/homepage-16/WhyChooseUsV5'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'

export const metadata = {
  title: 'Innovative Marketing  - Rivor',
}

const homepage16 = () => {
  return (
    <LayoutTwo>
      <HeroV16 />
      <AboutV15
        badge="About"
        title="Your growth partner in the digital age"
        subTitle="At Rivor Marketing Agency, we believe in creating impactful, data-driven marketing campaigns that connect brands with their audiences. Our team of strategists, creatives, and data analysts work together to deliver measurable results that fuel business growth."
        description="With years of experience in startup acceleration, we craft innovative strategies that help businesses thrive in competitive markets."
        buttonText="Learn More About Us"
        buttonLink="/about"
      />
      <ServicesV14 />
      <ProjectServicesV4 />
      <WhyChooseUsV5 />
      <ProcessV8 />
      <MarketingBlog />
      <CTA buttonText="Schedule a Free Strategy Session">
        Ready to
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/12.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/09.png' },
          ]}
        />
        Elevate
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Your Marketing?</span>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage16
