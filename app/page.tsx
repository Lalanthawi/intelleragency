import Hero from '@/components/homepage-01/Hero'
import Portfolio from '@/components/homepage-01/Portfolio'
import Testimonial from '@/components/homepage-01/Testimonial'
import About from '@/components/shared/About'
import ClientsV3 from '@/components/shared/ClientsV3'
import Community from '@/components/shared/Community'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import ServicesV8 from '@/components/shared/ServicesV8'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'Inteller Agency | Design Agency',
}

const Home = () => {
  return (
    <LayoutOne>
      <Hero />
      <Video />
      <About />
      <Portfolio />
      <ClientsV3 />
      <ServicesV8 />
      <Community />
      <FAQ />
      <Testimonial />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&q=80&fit=crop' },
            { id: '2', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&q=80&fit=crop' },
            { id: '3', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&q=80&fit=crop' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default Home
