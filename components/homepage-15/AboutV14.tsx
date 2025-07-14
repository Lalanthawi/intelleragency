'use client'
import useReveal from '@/hooks/useReveal'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const AboutV14 = () => {
  const { revealRef } = useReveal()
  return (
    <section className="mx-auto max-w-[1600px] px-4 pb-14 pt-28 md:px-[30px] md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div className="flex flex-col justify-center gap-3 gap-y-9 md:flex-row md:justify-between">
        <div className="flex-1 md:max-w-[570px]">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">About us</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear text-[38px] font-normal leading-[1.3] md:text-[47px] md:leading-[1.2] lg:text-[54px] lg:leading-[1.17] lg:tracking-[-2.16px] xl:text-[64px]">
              Building purpose- driven brands with in
              <i className="font-instrument italic">strategy &amp; Creativity</i>
            </h2>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="max-w-full md:max-w-sm lg:max-w-md xl:max-w-3xl">
          <h5 ref={revealRef} className="text-secondary/70 dark:text-backgroundBody/70 md:text-right">
            At Rivor Branding, we think a brand is way more than just a logo—it’s all about the experience, the
            connection, and the promise you make. We’re here to help businesses find their voice, create their identity,
            and come up with a strategy that sets them up for lasting success.
          </h5>
          <RevealWrapper as="ul" className="mt-7 justify-self-end max-md:w-full md:mt-10">
            <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
              <Link href="/team" className="rv-button rv-button-white block md:inline-block">
                <div className="rv-button-top">
                  <span>Meet Our Team</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Meet Our Team</span>
                </div>
              </Link>
            </li>
          </RevealWrapper>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AboutV14
