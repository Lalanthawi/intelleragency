import TestimonialV9 from '@/components/homepage-14/TestimonialV9'
import AboutV14 from '@/components/homepage-15/AboutV14'
import BrandingProcess from '@/components/homepage-15/BrandingProcess'
import ElevateBrand from '@/components/homepage-15/ElevateBrand'
import HeroV15 from '@/components/homepage-15/HeroV15'
import OurWorkV2 from '@/components/homepage-15/OurWorkV2'
import PricingV2 from '@/components/homepage-15/PricingV2'
import WhyChooseUsV4 from '@/components/homepage-15/WhyChooseUsV4'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'

export const metadata = {
  title: 'Strategic Branding - Rivor',
}

const homepage15 = () => {
  return (
    <LayoutTwo>
      <HeroV15 />
      <AboutV14 />
      <OurWorkV2 />
      <ElevateBrand />
      <WhyChooseUsV4 />
      <PricingV2 />
      <BrandingProcess />
      <TestimonialV9 />
      <CTA headingClass="xl:text-[88px]" buttonText="Start Your Project">
        Let’s Create
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.jpg' },
            { id: '2', img: '/images/agent/09.png' },
            { id: '3', img: '/images/agent/10.png' },
          ]}
        />
        Something
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Extraordinary</span>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage15
