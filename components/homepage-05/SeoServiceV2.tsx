import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const SeoServiceV2 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 lg:mb-20">
          <RevealWrapper
            as="p"
            className="text-center font-satoshi text-sm font-normal uppercase leading-6 tracking-[3px]">
            Why Choose Rivor
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3 text-center lg:mt-5">Expert SEO services for growth</h2>
          </TextAppearAnimation>
        </div>

        <div className="flex flex-col gap-[29px] md:flex-row">
          <div className="md:w-1/2 [&>*]:border-b">
            <div>
              <h5 className="py-[30px] pr-[30px]">15 Years experience</h5>
            </div>
            <div>
              <h5 className="py-[30px] pr-[30px]">25 K Projects done successfully</h5>
            </div>
            <div>
              <h5 className="py-[30px] pr-[30px]">28 Marketing team members</h5>
            </div>
            <div>
              <h5 className="py-[30px] pr-[30px]">10 Achieved awards</h5>
            </div>
          </div>
          <figure className="md:w-1/2">
            <img src="/images/home-5/seo-feature.png" alt="Marketing professional" className="h-full w-full" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default SeoServiceV2
