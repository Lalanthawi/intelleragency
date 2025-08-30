import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Link from 'next/link'

const OurExpertiseV3 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[150px] lg:pt-[150px] xl:pb-[200px] xl:pt-[200px]">
      <div className="container">
        <div className="grid grid-cols-12 items-start gap-y-16 lg:gap-x-16">
          <RevealWrapper as="figure" className="col-span-12 h-full lg:col-span-6">
            <img src="/images/avatar/expertise.png" alt="expertise" className="h-full w-full max-w-full object-cover" />
          </RevealWrapper>
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3">
              <RevealWrapper className="rv-badge reveal-me">
                <span className="rv-badge-text">Experience</span>
              </RevealWrapper>
              <TextAppearAnimation>
                <h2 className="text-appear lg:leading-[1.10]">
                  <span className="font-instrument italic">25+</span> years of legal excellence
                </h2>
              </TextAppearAnimation>

              <RevealWrapper
                as="p"
                className="text-lg font-normal leading-[28.8px] tracking-[0.36px] text-black/70 dark:text-backgroundBody/70 max-sm:text-sm">
                With a track record of success, our attorneys bring decades of expertise to every case, providing
                comprehensive legal solutions tailored to your needs.
              </RevealWrapper>
            </div>
            <RevealWrapper as="ul" className="mt-7 justify-self-start max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/team" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Meet Our Experts</span>
                  </div>
                  <div className="rv-button-bottom text-nowrap">
                    <span>Meet Our Experts</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurExpertiseV3
