'use client'
import useReveal from '@/hooks/useReveal'

const AboutV3 = () => {
  const { revealRef } = useReveal()
  return (
    <section className="relative overflow-hidden pb-14 pt-6 md:pb-16 lg:pb-[88px] lg:pt-12 xl:pb-[100px]">
      <div className="container">
        <h3
          className="text-left text-2xl font-normal text-secondary/90 dark:text-backgroundBody/70 lg:text-3xl lg:leading-[1.2] lg:tracking-[0.72px] xl:text-4xl"
          ref={revealRef}>
          At Rivor, we believe design goes beyond aesthetics—it’s about crafting meaningful connections that inspire,
          engage, and leave a lasting impact. Our approach blends creativity with strategy, ensuring that every design
          element serves a purpose. Whether it’s branding, user experience, or digital interfaces, we focus on
          innovation that resonates with your audience.
        </h3>
      </div>
    </section>
  )
}

export default AboutV3
