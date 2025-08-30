import RevealWrapper from '@/components/animation/RevealWrapper'
import Link from 'next/link'

const WhatWeOffer = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="grid grid-cols-12 items-start gap-y-16 lg:gap-x-16">
          <RevealWrapper className="reveal-me col-span-12 lg:col-span-6 lg:h-full">
            <img src="/images/services/offer-v2.png" alt="expertise" className="h-full w-full" />
          </RevealWrapper>
          <RevealWrapper className="col-span-12 space-y-7 lg:col-span-6">
            <div className="space-y-2">
              <h2>
                We don’t just tell stories—
                <span className="font-instrument italic">We make </span>
                <span className="font-instrument italic">them matter.</span>
              </h2>
              <p className="xl text-lg font-normal leading-[28.8px] tracking-[0.36px] text-black/70 dark:text-backgroundBody/70">
                Our team of PR experts, media strategists, and crisis management specialists help businesses gain
                visibility, credibility, and authority.
              </p>
            </div>
            <div>
              <ul className="list-inside list-disc space-y-0.5">
                <li className="text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
                  Key Stats (optional):
                </li>
                <li className="text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
                  200+ successful PR campaigns
                </li>
                <li className="text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
                  $100M+ in media value generated
                </li>
                <li className="text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
                  Featured in Forbes, WSJ, Business Insider, Bloomberg
                </li>
              </ul>
              <div className="mt-7 justify-self-start max-md:w-full md:mt-10">
                <div className="mx-auto block w-full text-center md:inline-block md:w-auto">
                  <Link href="/team" className="rv-button rv-button-white block md:inline-block">
                    <div className="rv-button-top">
                      <span>Meet Our Team</span>
                    </div>
                    <div className="rv-button-bottom text-nowrap">
                      <span>Meet Our Team</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
