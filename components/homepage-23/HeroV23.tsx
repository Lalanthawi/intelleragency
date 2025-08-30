import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const HeroV23 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-[137px] md:pb-[90px] md:pt-[250px] lg:pb-[112px] lg:pt-[330px]">
      <HeroGradientAnimation />
      <RevealWrapper className="container text-center">
        <div className="relative mx-auto mb-3 w-[280px] text-sm font-normal uppercase text-black before:absolute before:left-4 before:top-1/2 before:h-px before:w-[30px] before:bg-black/70 before:content-[''] after:absolute after:right-4 after:top-1/2 after:h-px after:w-[30px] after:bg-black/70 after:content-[''] dark:text-white dark:before:bg-backgroundBody/70 dark:after:bg-backgroundBody/70 md:w-[400px] md:before:w-[80px] md:after:w-[80px]">
          <span>Secure Your Future</span>
        </div>

        <h1 className="max-sm:text-3xl xl:leading-[1.1]">
          Your trusted partner in <span className="font-instrument italic">insurance &amp; Risk</span> management.
        </h1>

        <ul className="mt-8 flex list-none justify-center md:mt-14">
          <li className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-sm rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Let’s Get Started</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Let’s Get Started</span>
              </div>
            </Link>
          </li>
        </ul>
      </RevealWrapper>
    </section>
  )
}

export default HeroV23
