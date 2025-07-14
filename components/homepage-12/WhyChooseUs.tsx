import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <TextAppearAnimation>
            <h2 className="text-appear mt-3">
              Why choose <i className="font-instrument">Rivor?</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">The Rivor Advantage — All That Works for You</p>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*]:border-b">
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>Proven AI Expertise</h5>
              <p className="tracking-[ 0.32px] top-3 text-base leading-[1.6]">Top AI experts with proven success.</p>
            </RevealWrapper>
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>Tailored Solutions</h5>
              <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">
                We are also the all AI have—each solution is tailored.
              </p>
            </RevealWrapper>
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>Data-Driven Insights</h5>
              <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">AI analytics for accurate decisions.</p>
            </RevealWrapper>
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>Seamless Integration</h5>
              <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">
                All that fits effortlessly into your existing systems.
              </p>
            </RevealWrapper>
            <RevealWrapper className="py-3.5 pr-[30px] lg:py-[30px]">
              <h5>ROI-Focused results</h5>
              <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">
                AI solutions to enhance efficiency and profits.
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper as="figure" className="md:w-1/2">
            <img src="/images/home-5/why-rivor.png" alt="AI Solutions" className="h-full w-full" />
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

export default WhyChooseUs
