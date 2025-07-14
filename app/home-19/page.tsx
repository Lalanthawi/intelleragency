import AboutV15 from '@/components/homepage-16/AboutV15'
import BlogPostsV6 from '@/components/homepage-19/BlogPostsV6'
import ElevateBrandV2 from '@/components/homepage-19/ElevateBrandV2'
import HeroV19 from '@/components/homepage-19/HeroV19'
import OurExpertiseV2 from '@/components/homepage-19/OurExpertiseV2'
import PricingV4 from '@/components/homepage-19/PricingV4'
import ProcessV10 from '@/components/homepage-19/ProcessV10'
import ProjectsPost from '@/components/homepage-19/ProjectsPost'
import AchievementGridV3 from '@/components/shared/AchievementGridV3'
import ClientsV5 from '@/components/shared/ClientsV5'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'

export const metadata = {
  title: 'Startup Agency - Rivor',
}

const homepage19 = () => {
  return (
    <LayoutTwo>
      <HeroV19 />
      <AboutV15
        badge="About Us"
        title="Data driven agency for visionary startups"
        subTitle="At Rivor Marketing Agency, we believe in creating impactful, data-driven marketing campaigns that connect brands with their audiences. Our team of strategists, creatives, and data analysts work together to deliver measurable results that fuel business growth."
        description="With years of experience in startup acceleration, we craft innovative strategies that help businesses thrive in competitive markets."
        buttonText="Learn More "
        buttonLink="/about"
      />
      <AchievementGridV3 />
      <ProjectsPost />
      <ElevateBrandV2 />
      <OurExpertiseV2 />
      <ProcessV10 />
      <PricingV4 />
      <ClientsV5 />
      <BlogPostsV6 />
      <CTA buttonText="Start your project">
        Let’s Build
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/14.png' },
            { id: '2', img: '/images/agent/12.png' },
            { id: '3', img: '/images/agent/13.png' },
          ]}
        />
        Something
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Great Together</span>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage19
