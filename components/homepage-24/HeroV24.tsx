import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const HeroV24 = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-14 pt-[137px] md:pb-16 md:pt-[160px] lg:pb-[88px] xl:pb-[112px] xl:pt-[220px]"
      aria-labelledby="hero-heading">
      <div id="hero-gradient-wrapper" className="absolute left-0 top-0 -z-10 blur-[65px]" aria-hidden="true">
        <img
          src="/images/hero-gradient-background.png"
          alt="hero"
          id="hero-gradient"
          className="left-0 top-0"
          role="presentation"
        />
      </div>
      <RevealWrapper className="reveal-me mx-auto flex max-w-[1600px] flex-col items-start justify-start gap-y-8 px-6 md:px-14 xl:flex-row xl:justify-between">
        <div className="flex-1">
          <RevealWrapper
            as="h1"
            id="hero-heading"
            className="reveal-me text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]">
            Transform <br className="hidden md:block" />
            business with <br className="hidden md:block" />
            <span className="font-instrument"> consulting</span>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl">
            We provide expert advice and actionable strategies to help you grow, streamline operations, and stay ahead
            in a competitive market.
          </RevealWrapper>

          <div className="mt-7 md:mt-9 lg:mt-14">
            <Link
              href="/contact"
              className="rv-button rv-button-primary rv-button-sm block md:inline-block"
              aria-label="Book a Free Consultation">
              <div className="rv-button-top text-center">
                <span>Book a Free Consultation</span>
              </div>
              <div className="rv-button-bottom text-center">
                <span className="text-nowrap">Book a Free Consultation</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col gap-5 md:flex-row" aria-label="Business consulting imagery">
          <figure>
            <img
              src="/images/hero-img/business-hero-1.png"
              alt="Business professionals in a consultation meeting"
              className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </figure>
          <figure>
            <img
              src="/images/hero-img/business-hero-2.png"
              alt="Business growth and strategy visualization"
              className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </figure>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default HeroV24
