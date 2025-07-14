import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ProcessV3 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div>
          <RevealWrapper className="mb-2 text-center text-sm font-normal uppercase leading-6 tracking-[3px] lg:mb-3">
            Our Process
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-10 text-center lg:mb-20">
              A simple, yet effective <br />
              SEO ranking process
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="service-item-wrapper flex justify-center gap-[30px] max-md:flex-wrap">
          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <div className="service-item-number"></div>
            <h5 className="mb-5">Keyword Research</h5>
            <p className="text-center">Dive deep into your market, understand your</p>
          </RevealWrapper>

          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <div className="service-item-number"></div>
            <h5 className="mb-5">Link Building</h5>
            <p className="text-center">Dive deep into your market, understand your</p>
          </RevealWrapper>

          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <div className="service-item-number"></div>
            <h5 className="mb-5">Ranking</h5>
            <p className="text-center">Dive deep into your market, understand your</p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default ProcessV3
