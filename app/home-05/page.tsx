import AboutV3 from '@/components/homepage-05/AboutV3'
import AwardsV3 from '@/components/homepage-05/AwardsV3'
import ClientsV2 from '@/components/homepage-05/ClientsV2'
import HeroV5 from '@/components/homepage-05/HeroV5'
import PortfolioV4 from '@/components/homepage-05/PortfolioV4'
import ProcessV3 from '@/components/homepage-05/ProcessV3'
import SeoService from '@/components/homepage-05/SeoService'
import SeoServiceV2 from '@/components/homepage-05/SeoServiceV2'
import TeamV4 from '@/components/homepage-05/TeamV4'
import BlogListV2 from '@/components/shared/BlogListV2'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/shared/Marquee'
import { MarkdownData } from '@/interface'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Seo Agency - Rivor',
}

const servicesData: MarkdownData[] = getMarkDownData('data/seo-agency/services').sort(
  //@ts-ignore
  (a, b) => a?.serialNumber - b?.serialNumber,
)
const homepage5 = () => {
  return (
    <LayoutOne>
      <HeroV5 />
      <AboutV3 />
      <Marquee withBorder={false} />
      <SeoService servicesData={servicesData} />
      <PortfolioV4 />
      <ClientsV2 />
      <AwardsV3 />
      <SeoServiceV2 />
      <TeamV4 />
      <ProcessV3 />
      <BlogListV2 />
      <CTA buttonText="GET FREE PROPOSAL">
        Ready to
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/04.png' },
            { id: '2', img: '/images/agent/05.png' },
            { id: '3', img: '/images/agent/06.png' },
          ]}
        />
        grow
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">your business?</i>
      </CTA>
    </LayoutOne>
  )
}

export default homepage5
