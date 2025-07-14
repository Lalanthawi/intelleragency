'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

const AboutV11 = () => {
  const { revealRef } = useReveal()
  return (
    <section className="relative overflow-hidden pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <RevealWrapper className="container">
        <h3
          ref={revealRef}
          className="text-left text-2xl font-normal text-secondary/90 dark:text-backgroundBody/70 lg:text-3xl lg:leading-[1.2] lg:tracking-[0.72px] xl:text-4xl">
          At Rivor, we believe design goes beyond aesthetics—it’s about crafting meaningful connections that inspire,
          engage, and leave a lasting impact. Our approach blends creativity with strategy, ensuring that every design
          element serves a purpose. Whether it’s branding, user experience, or digital interfaces, we focus on
          innovation that resonates with your audience.
        </h3>
      </RevealWrapper>
    </section>
  )
}

export default AboutV11
