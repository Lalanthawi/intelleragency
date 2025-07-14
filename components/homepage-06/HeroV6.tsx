import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import AnimatedHeroImage from './AnimatedHeroImage'

const HeroV6 = () => {
  return (
    <RevealWrapper as="section" className="relative overflow-hidden">
      <div className="relative overflow-hidden pb-12 pt-28 sm:pb-28 md:pt-36 lg:pb-[120px] lg:pt-[220px]">
        <HeroGradientAnimation />
        <div className="container">
          <RevealWrapper className="text-center">
            <h1 className="font-semibold">
              <span className="block font-instrument font-normal italic">Rivor</span>
              Creative Design Agency
            </h1>
            <ul className="mt-10 flex list-none justify-center md:mt-14">
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
        </div>
      </div>
      <AnimatedHeroImage />
    </RevealWrapper>
  )
}

export default HeroV6
