'use client'
import { useEffect, useRef } from 'react'
import RevealWrapperV2 from '../animation/RevealWrapperV2'

const AboutHoverImages = () => {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = galleryRef.current
    if (!container) return

    const images = container.querySelectorAll<HTMLElement>('.about-image')

    images[0]?.classList.add('about-active-image')

    const onImageHover = (e: Event) => {
      images.forEach((img) => img.classList.remove('about-active-image'))
      ;(e.currentTarget as HTMLElement)?.classList.add('about-active-image')
    }

    images.forEach((img) => img.addEventListener('mouseenter', onImageHover))

    return () => {
      images.forEach((img) => img.removeEventListener('mouseenter', onImageHover))
    }
  }, [])

  return (
    <div className="container pt-14 md:pt-28" ref={galleryRef}>
      <RevealWrapperV2 className="flex items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-5 md:space-x-5">
        <figure className="about-image about-active-image h-[450px] cursor-pointer lg:min-h-[660px]">
          <img src="/images/hero-img/about-hero-1.png" alt="About Hero 1" className="h-full w-full object-cover" />
        </figure>
        <figure className="about-image h-[450px] cursor-pointer lg:min-h-[660px]">
          <img src="/images/hero-img/about-hero-2.png" alt="About Hero 2" className="h-full w-full object-cover" />
        </figure>
        <figure className="about-image h-[450px] cursor-pointer lg:min-h-[660px]">
          <img src="/images/hero-img/about-hero-3.png" alt="About Hero 3" className="h-full w-full object-cover" />
        </figure>
      </RevealWrapperV2>
    </div>
  )
}

export default AboutHoverImages
