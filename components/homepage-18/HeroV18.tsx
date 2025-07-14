import RevealWrapper from '@/components/animation/RevealWrapper'
import Link from 'next/link'

const HeroV18 = () => {
  return (
    <>
      {/*=====================================
   Hero Section
======================================*/}
      <section className="relative overflow-hidden pb-14 pt-[137px] md:pb-[90px] md:pt-[180px] lg:pb-[110px] lg:pt-[150px]">
        {/* Gradient Background Effect */}
        <div
          id="hero-gradient-wrapper"
          className="h-fw-full absolute top-1/2 -z-10 w-full -translate-y-1/2 scale-75 blur-[90px]">
          <img
            src="/images/hero-gradient-background.png"
            alt="hero-gradient-background"
            id="hero-gradient"
            className="absolute top-1/2 -translate-y-1/2"
          />
        </div>
        {/* Hero Content */}
        <RevealWrapper className="container">
          {/* Hero Heading */}
          <h1 className="mb-6 mt-5 border-y border-secondary/40 py-6 dark:border-backgroundBody/40 sm:mt-10 md:mb-10 lg:py-10 xl:leading-[1.1]">
            The right words. <i className="font-instrument">The right strategy.</i> The right results.
          </h1>
          <p className="md:max-w-[670px]">
            We are Rivor, a copywriting and content agency dedicated to helping brands grow through engaging,
            high-impact writing.
          </p>
          {/* CTA Buttons */}
          <ul className="mt-8 flex list-none justify-start md:mt-14">
            {/* Primary CTA Button */}
            <li className="block w-full text-center md:inline-block md:w-auto">
              <Link href="/contact" className="rv-button rv-button-sm rv-button-primary block md:inline-block">
                <div className="rv-button-top">
                  <span>Let’s Talk</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Let’s Talk</span>
                </div>
              </Link>
            </li>
          </ul>
        </RevealWrapper>
      </section>
    </>
  )
}

export default HeroV18
