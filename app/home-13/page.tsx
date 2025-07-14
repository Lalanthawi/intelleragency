import AboutV12 from '@/components/homepage-13/AboutV12'
import ExclusiveTravelDeals from '@/components/homepage-13/ExclusiveTravelDeals'
import HeroV13 from '@/components/homepage-13/HeroV13'
import ServicesV12 from '@/components/homepage-13/ServicesV12'
import TravelBlogs from '@/components/homepage-13/TravelBlogs'
import TravelImagesGallery from '@/components/homepage-13/TravelImagesGallery'
import WhyChooseUsV2 from '@/components/homepage-13/WhyChooseUsV2'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import TestimonialV2 from '@/components/shared/TestimonialV2'

export const metadata = {
  title: 'Travel Agency - Rivor',
}

const homepage13 = () => {
  return (
    <LayoutTwo>
      <HeroV13 />
      <AboutV12 />
      <ServicesV12 />
      <WhyChooseUsV2 />
      <TestimonialV2 />
      <TravelBlogs />
      <ExclusiveTravelDeals />
      <TravelImagesGallery />
      <CTA buttonText="Plan Your Trip">
        Start Your
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        Adventure
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Today</span>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage13
