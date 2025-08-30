'use client'

import { data } from '@/data/logo/logo'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import RevealWrapper from '../animation/RevealWrapper'

const MarqueeV4 = () => {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  const handleMouseEnter = () => {
    pauseMarquee()
  }

  const handleMouseLeave = () => {
    resumeMarquee()
  }
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]" aria-labelledby="partners-heading">
      <div>
        <h2 id="partners-heading" className="sr-only">
          Our Trusted Partners
        </h2>
        <RevealWrapper as="p" className="container mb-10 text-center lg:mb-16">
          Driving engagement and revenue for top brands worldwide.
        </RevealWrapper>
        <RevealWrapper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden"
          aria-label="Partner logos carousel">
          <div
            ref={marqueeRef}
            className="z-50 flex w-fit flex-nowrap whitespace-nowrap will-change-transform"
            aria-live="off">
            {data.map((item) => (
              <div
                key={item.id}
                className="z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border-y border-r border-y-secondary/10 border-r-secondary/10 bg-backgroundBody dark:border-y-backgroundBody/10 dark:border-r-backgroundBody/10 dark:bg-dark">
                <img src={item.logo} alt={item.alt} className="inline-block dark:hidden" />
                <img src={item.darkLogo} alt={item.alt} className="hidden dark:inline-block" />
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default MarqueeV4
