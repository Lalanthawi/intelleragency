'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import RevealWrapperV2 from '../animation/RevealWrapperV2'

const HeroV19 = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (isInitialized) return

    const initCircleText = () => {
      const text = textRef.current
      if (!text) return

      const originalText = 'Discover other project on Webflow.'
      const chars = originalText.trim().split('')
      const angleStep = 360 / chars.length // Distribute characters evenly

      const formattedText = chars
        .map((char, i) => {
          const angle = i * angleStep
          // Adjust transform-origin based on container size
          return `<span 
          style="
            position: absolute;
            left: 50%;
            top: 8%;
            transform: rotate(${angle}deg);
            transform-origin: 0 50px;
            display: inline-block;
          "
        >${char}</span>`
        })
        .join('')

      text.innerHTML = formattedText
      setIsInitialized(true)
    }

    requestAnimationFrame(initCircleText)
  }, [isInitialized])

  return (
    <section className="relative overflow-hidden pt-[137px] md:pt-[160px] xl:pt-[180px]">
      {/* Gradient Background Wrapper */}
      <div
        id="hero-gradient-wrapper"
        className="absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0">
        <img
          src="/images/hero-gradient-background.png"
          alt="hero-gradient-background"
          id="hero-gradient"
          className="-top-[10%] left-0 scale-50"
        />
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row">
        {/* Content */}
        <div className="md:flex-1">
          <RevealWrapper
            as="h1"
            className="reveal-me text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]">
            Helping <br className="hidden lg:block" />
            startups scale <br className="hidden lg:block" />
            &amp;<i className="font-instrument"> design better</i>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3">
            From branding to digital product development, we turn ideas into
            <br className="hidden lg:block" />
            impactful businesses.
          </RevealWrapper>
          {/* Hero Buttons */}
          <RevealWrapperV2 as="ul" className="reveal-me-2 mt-7 cursor-pointer md:mt-9 lg:mt-14">
            <li>
              <Link href="/contact" className="rv-button rv-button-primary rv-button-sm block md:inline-block">
                <div className="rv-button-top text-center">
                  <span>Get Started</span>
                </div>
                <div className="rv-button-bottom text-center">
                  <span className="text-nowrap">Get Started</span>
                </div>
              </Link>
            </li>
          </RevealWrapperV2>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <figure className="relative mt-[78px]">
            {/* logo */}
            <div className="absolute -left-0 -top-[12%] mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full before:absolute before:h-[140px] before:w-[140px] before:rounded-full before:bg-white before:content-[''] dark:before:bg-secondary lg:-left-[12%]">
              <figure className="relative z-50">
                <img src="/images/icons/text-circle-logo.png" alt="text-circle-logo" className="inline dark:hidden" />
                <img
                  src="/images/icons/text-circle-dark-logo.png"
                  alt="text-circle-logo"
                  className="hidden dark:inline"
                />
              </figure>
              <div
                ref={textRef}
                className="text-2 h-[120px] w-[120px] rounded-full bg-secondary text-[10px] text-backgroundBody dark:bg-backgroundBody dark:text-secondary"></div>
            </div>
            <img src="/images/hero-img/startup-hero-1.jpg" alt="hero-img" className="max-sm:w-full" />
          </figure>
          <figure>
            <img src="/images/hero-img/startup-hero-2.jpg" alt="hero-img" className="max-sm:w-full" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default HeroV19
