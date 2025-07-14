'use client'

import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import HeroGradientAnimationV2 from '../shared/HeroGradientAnimationV2'

const HeroV12 = () => {
  const heroImage1Ref = useRef<HTMLDivElement>(null)
  const heroImage2Ref = useRef<HTMLDivElement>(null)
  const heroImage3Ref = useRef<HTMLDivElement>(null)
  const heroButtonRef = useRef<HTMLAnchorElement>(null)

  const [isHovered, setIsHovered] = useState(true)

  useEffect(() => {
    if (!heroImage1Ref.current || !heroImage2Ref.current || !heroImage3Ref.current) return

    gsap.set(heroImage1Ref.current, {
      x: -320,
      opacity: 0.8,
      rotate: -20,
      visibility: 'visible',
    })

    gsap.set(heroImage2Ref.current, {
      x: 280,
      opacity: 0.8,
      rotate: 20,
      visibility: 'visible',
    })

    gsap.set(heroImage3Ref.current, {
      scale: 0,
      opacity: 0.8,
      rotate: -17,
      visibility: 'visible',
    })
  }, [])

  useEffect(() => {
    if (!heroImage1Ref.current || !heroImage2Ref.current || !heroImage3Ref.current) return

    const ctx = gsap.context(() => {
      const image1 = heroImage1Ref.current
      const image2 = heroImage2Ref.current
      const image3 = heroImage3Ref.current

      gsap.killTweensOf([image1, image2, image3])

      if (isHovered) {
        gsap.fromTo(
          image1,
          { x: -320, opacity: 0.8, rotate: -20 },
          { duration: 0.5, x: 0, opacity: 1, rotate: 0, ease: 'power2.out' },
        )

        gsap.fromTo(
          image2,
          { x: 280, opacity: 0.8, rotate: 20 },
          { duration: 0.5, x: 0, opacity: 1, rotate: 0, ease: 'power2.out' },
        )

        gsap.fromTo(
          image3,
          { scale: 0, opacity: 0.8, rotate: -17 },
          { duration: 0.5, scale: 1, opacity: 1, rotate: 0, ease: 'power2.out' },
        )
      } else {
        gsap.fromTo(
          image1,
          { x: 0, opacity: 1, rotate: 0 },
          { duration: 1.2, x: -320, opacity: 0.8, rotate: -20, ease: 'power1.inOut' },
        )

        gsap.fromTo(
          image2,
          { x: 0, opacity: 1, rotate: 0 },
          { duration: 1.2, x: 280, opacity: 0.8, rotate: 20, ease: 'power1.inOut' },
        )

        gsap.fromTo(
          image3,
          { scale: 1, opacity: 1, rotate: 0 },
          { duration: 1, scale: 0, opacity: 0.8, rotate: -17, ease: 'back.in(1.2)' },
        )
      }
    })

    return () => ctx.revert()
  }, [isHovered])

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <section className="relative overflow-hidden pb-14 pt-[120px] sm:pt-[135px] md:pb-16 md:pt-[150px] lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <HeroGradientAnimationV2 />
        <RevealWrapper className="flex items-center justify-center">
          <div className="rv-badge mb-2">
            <span className="rv-badge-text">AI-Driven Creativity</span>
          </div>
        </RevealWrapper>
        <TextAppearAnimation>
          <h1 className="text-appear text-center 2xl:leading-[1.21]">
            Empowering businesses with
            <i className="font-instrument"> AI-Powered </i>
            innovation
          </h1>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear mx-auto mt-3 max-w-3xl text-center">
            From intelligent automation to groundbreaking AI solutions, Rivor transforms how businesses operate,
            innovate, and grow.
          </p>
        </TextAppearAnimation>
        <RevealWrapper as="ul" className="mt-14 flex list-none justify-center">
          <li className="w-full text-center">
            <Link
              href="/contact"
              className="rv-button rv-button-primary block cursor-pointer md:inline-block"
              ref={heroButtonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div className="rv-button-top">
                <span>Discover AI Solutions</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Discover AI Solutions</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
      <div className="absolute -left-[4.5%] top-[42%] hidden md:block" ref={heroImage1Ref}>
        <img src="/images/hero-img/hero-img-05.png" alt="hero" className="reveal-me" />
      </div>
      <div className="absolute -right-[5%] top-[12%] hidden md:block" ref={heroImage2Ref}>
        <img src="/images/hero-img/hero-img-06.png" alt="hero" />
      </div>
      <div className="absolute bottom-[0%] right-[18.5%] hidden lg:block" ref={heroImage3Ref}>
        <img src="/images/hero-img/hero-img-07.png" alt="hero" className="reveal-me" />
      </div>
    </section>
  )
}

export default HeroV12
