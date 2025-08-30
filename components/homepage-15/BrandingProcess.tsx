import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation02 from '../animation/TextAppearAnimation02'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const BrandingProcess = () => {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5 pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="">
          <HeroGradientAnimation />
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-normal leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              A thoughtful, strategic approach
              <i className="font-instrument"> to branding</i>
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear text-lg leading-[1.6] tracking-[0.36px]">
              We shape brands that stand the test of time
            </p>
          </TextAppearAnimation02>

          <Link href="#" className="rv-button rv-button-white mt-7 md:mt-14">
            <div className="rv-button-top text-center">
              <span className="font-normal">Start Your Branding Journey</span>
            </div>
            <div className="rv-button-bottom text-center">
              <span className="font-normal">Start Your Branding Journey</span>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-y-[26px]">
          <RevealWrapper className="border-r px-[30px] py-[50px] dark:border-dark">
            <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
              1
            </h2>
            <h5 className="mb-6 mt-4">Research &amp; Discovery</h5>
            <p className="text-base">Understanding your business and audience.</p>
          </RevealWrapper>
          <RevealWrapper className="px-[30px] py-[50px]">
            <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
              2
            </h2>
            <h5 className="mb-6 mt-4">Strategy &amp; Positioning</h5>
            <p className="text-base">Crafting a unique brand message.</p>
          </RevealWrapper>
          <RevealWrapper className="border-r px-[30px] py-[50px] dark:border-dark">
            <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
              3
            </h2>
            <h5 className="mb-6 mt-4">Design &amp; Prototyping</h5>
            <p className="text-base">Developing your visual identity.</p>
          </RevealWrapper>
          <RevealWrapper className="px-[30px] py-[50px]">
            <h2 className="font-instrument text-5xl font-normal italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
              4
            </h2>
            <h5 className="mb-6 mt-4">Execution &amp; Launch</h5>
            <p className="text-base">Bringing your brand to life.</p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BrandingProcess
