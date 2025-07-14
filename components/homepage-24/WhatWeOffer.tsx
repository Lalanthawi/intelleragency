import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WhatWeOffer = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-y-16 lg:gap-x-16">
          <RevealWrapper as="figure" className="reveal-me col-span-12 lg:col-span-6">
            <img src="/images/services/offer.png" alt="expertise" className="w-full" />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-12 space-y-7 lg:col-span-6">
            <div className="space-y-2">
              <TextAppearAnimation>
                <h2 className="text-appear lg:leading-[1.1]">
                  Your partner in
                  <span className="font-instrument italic">business excellence</span>
                </h2>
              </TextAppearAnimation>
              <TextAppearAnimation>
                <p className="text-appear text-base font-normal text-black/70 dark:text-backgroundBody/70 md:text-lg md:leading-[28.8px] md:tracking-[0.36px]">
                  At Rivor, we specialize in business strategy, operations, and leadership consulting to help companies
                  overcome challenges and scale efficiently.
                </p>
              </TextAppearAnimation>
            </div>
            <div>
              <TextAppearAnimation>
                <p className="text-appear mb-3 text-3xl font-normal text-black dark:text-white md:text-4xl md:leading-10 md:tracking-[-1.08px]">
                  What we offer
                </p>
              </TextAppearAnimation>
              <RevealWrapper as="ul" className="reveal-me list-inside list-disc space-y-0.5">
                <li className="text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
                  Expert guidance tailored to your needs
                </li>
                <li className="text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
                  Data-driven strategies for measurable success
                </li>
                <li className="text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
                  Hands-on support for implementation
                </li>
              </RevealWrapper>
              <RevealWrapper as="ul" className="reveal-me mt-7 justify-self-start max-md:w-full md:mt-10">
                <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                  <Link href="/team" className="rv-button rv-button-white block md:inline-block">
                    <div className="rv-button-top">
                      <span>Meet Our Team</span>
                    </div>
                    <div className="rv-button-bottom text-nowrap">
                      <span>Meet Our Team</span>
                    </div>
                  </Link>
                </li>
              </RevealWrapper>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
