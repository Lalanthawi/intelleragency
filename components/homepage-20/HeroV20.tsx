import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import CtaImageSlider from '../shared/CtaImageSlider'
import HeroGradientAnimationV2 from '../shared/HeroGradientAnimationV2'

const HeroV20 = () => {
  return (
    <section
      className="relative overflow-hidden pb-14 pt-28 md:pb-[90px] md:pt-[180px] lg:pb-[112px] lg:pt-[200px]"
      aria-labelledby="hero-heading">
      <HeroGradientAnimationV2 />
      <RevealWrapper className="container text-center">
        <RevealWrapper className="rv-badge mb-3">
          <span className="rv-badge-text">Social Media</span>
        </RevealWrapper>
        <h1 id="hero-heading" className="xl:leading-[1.1]">
          Your brand's growth engine <i className="font-instrument">social media</i>
          <CtaImageSlider
            slides={[
              { id: '1', img: '/images/agent/15.png' },
              { id: '2', img: '/images/agent/12.png' },
              { id: '3', img: '/images/agent/13.png' },
            ]}
          />
          that converts.
        </h1>
        <p className="mx-auto mt-3 text-center md:max-w-[670px]">
          We help brands dominate social media with viral content, high-converting ads, and data-driven strategies.
        </p>
        <div className="mt-8 flex justify-center md:mt-14">
          <Link
            href="/contact"
            className="rv-button rv-button-sm rv-button-primary block w-full text-center md:inline-block md:w-auto"
            aria-label="Schedule your free consultation call">
            <div className="rv-button-top">
              <span>Get a Free Call</span>
            </div>
            <div className="rv-button-bottom">
              <span className="text-nowrap">Get a Free Call</span>
            </div>
          </Link>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default HeroV20
