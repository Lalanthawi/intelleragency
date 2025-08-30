import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ProcessV7 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="text-center">
          <TextAppearAnimation>
            <h2 className="text-appear mb-7 text-center lg:mb-14">
              From concept to
              <i className="font-instrument">AI-Powered </i>
              <br className="hidden md:block" />
              <i className="font-instrument">execution</i>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="service-item-wrapper flex justify-center gap-[30px] max-md:flex-wrap">
          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <h2 className="service-item-number" aria-hidden="true"></h2>
            <h5 className="mb-5">Consultation</h5>
            <p className="text-center">Understanding your business needs.</p>
          </RevealWrapper>
          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <h2 className="service-item-number" aria-hidden="true"></h2>
            <h5 className="mb-5">AI model development</h5>
            <p className="text-center">Crafting custom AI solutions.</p>
          </RevealWrapper>
          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <h2 className="service-item-number" aria-hidden="true"></h2>
            <h5 className="mb-5">Scaling for growth</h5>
            <p className="text-center">Scalable AI solutions for your business.</p>
          </RevealWrapper>
        </div>

        <RevealWrapper as="ul" className="mt-14 flex justify-center">
          <li>
            <Link href="/contact" className="rv-button rv-button-sm rv-button-primary">
              <div className="rv-button-top">
                <span>Let’s Talk</span>
              </div>
              <div className="rv-button-bottom">
                <span>Let’s Talk</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV7
