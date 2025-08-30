import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ProcessV5 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div>
          <RevealWrapper className="mb-2 text-center text-sm font-normal uppercase leading-6 tracking-[3px] lg:mb-3">
            Open for new work
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-10 text-center lg:mb-20">
              Bringing ideas to life, <i className="font-instrument">Seamlessly</i>
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
        <RevealWrapper as="ul" className="mt-14 flex list-none justify-center">
          <li className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/portfolio-agency/case-study" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Let’s Start Your Project</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Let’s Start Your Project</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV5
