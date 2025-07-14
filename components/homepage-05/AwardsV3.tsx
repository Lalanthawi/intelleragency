'use client'

import { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import VideoModal from '../shared/VideoModal'

const AwardsV3 = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 lg:mb-20">
          <RevealWrapper
            as="p"
            className="reveal-me text-center font-satoshi text-sm font-normal uppercase leading-6 tracking-[3px]">
            Award
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3 text-center lg:mt-5">
              Winning digital marketing <br className="hidden md:block" />
              agency
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-1.5 text-center">
              Rivor is a WordPress web design and SEO company with proven results.
              <br className="hidden md:block" />
              Use some award images
            </p>
          </TextAppearAnimation>
        </div>
        <figure onClick={() => setOpen(true)}>
          <img src="/images/home-5/awards-feature-img.png" alt="awards" className="w-full cursor-pause" />
        </figure>
      </div>
      <VideoModal open={open} setOpen={setOpen}></VideoModal>
    </section>
  )
}

export default AwardsV3
