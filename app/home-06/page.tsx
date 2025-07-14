import AboutV9 from '@/components/homepage-06/AboutV9'
import BlogPostsV3 from '@/components/homepage-06/BlogPostsV3'
import HeroV6 from '@/components/homepage-06/HeroV6'
import ProcessV5 from '@/components/homepage-06/ProcessV5'
import ServicesV9 from '@/components/homepage-06/ServicesV9'
import TestimonialV6 from '@/components/homepage-06/TestimonialV6'
import ClientsV3 from '@/components/shared/ClientsV3'
import ClientV4 from '@/components/shared/ClientV4'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Creative Agency - Rivor',
}

const page = () => {
  return (
    <LayoutOne>
      <HeroV6 />
      <AboutV9 />
      <ClientsV3 />
      <BlogPostsV3 />
      <ServicesV9 />
      <ClientV4 />
      <ProcessV5 />
      <TestimonialV6 />

      <CTA showContactForm>
        Let’s
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/07.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/06.png' },
          ]}
        />
        Create
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Something Iconic</span>
      </CTA>
    </LayoutOne>
  )
}

export default page
