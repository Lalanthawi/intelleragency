'use client'
import heroBanner from '@/public/images/hero-banner.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const AnimatedHeroImage = () => {
  const imageRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 70%',
          end: 'top 0%',
          scrub: 1,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
  return (
    <figure className="mx-auto w-[97%] overflow-hidden sm:w-full" ref={imageRef}>
      <Image src={heroBanner} alt="Hero Banner Big Image" className="mx-auto w-[97%] sm:w-full" />
    </figure>
  )
}

export default AnimatedHeroImage
