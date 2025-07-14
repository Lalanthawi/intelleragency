import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import AboutHoverImages from './AboutHoverImages'

const HeroV13 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-[120px] sm:pt-[135px] md:pb-16 md:pt-[150px] lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-48">
      <div className="relative">
        {/* Gradient Background Effect */}
        <div className="h-fw-full absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 scale-75 blur-[60px]">
          <img
            src="/images/hero-gradient-bg.png"
            alt="hero-gradient-background"
            className="absolute left-[42%] top-[44%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {/* Hero Content */}
        <RevealWrapper className="container">
          <h1 className="text-center">
            Unforgettable journeys,
            <i className="font-instrument"> expertly planned</i>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-center">
            From exotic escapes to thrilling adventures, Rivor Travels creates experiences that go beyond expectations.
            Your dream trip starts here!
          </p>
          {/* Hero Buttons */}
          <ul className="mt-14 flex cursor-pointer list-none justify-center">
            <li className="w-full text-center">
              <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
                <div className="rv-button-top">
                  <span>Plan Your Trip</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Plan Your Trip</span>
                </div>
              </Link>
            </li>
          </ul>
        </RevealWrapper>
      </div>
      {/* About-Hero Image Content */}
      <AboutHoverImages />
    </section>
  )
}

export default HeroV13
