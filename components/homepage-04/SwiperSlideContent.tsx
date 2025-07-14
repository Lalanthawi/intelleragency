'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface SwiperSlideContentProps {
  feedback: string
  name: string
  position: string
  img: StaticImageData
}

const SwiperSlideContent: FC<SwiperSlideContentProps> = ({ feedback, name, position, img }) => {
  return (
    <div className="flex flex-col content-between items-start gap-y-5 md:flex-row md:space-x-10">
      <Image
        src={img}
        alt="User"
        height={260}
        width={260}
        className="object-cover max-md:w-full md:max-h-[260px] md:max-w-[300px]"
      />
      <div className="flex flex-col md:max-w-[650px]">
        <p className="text-lg leading-[1.6] tracking-[0.36px]">{feedback}</p>
        <div className="mb-[34px] mt-5 flex items-center gap-x-6">
          <p className="text-2xl leading-[1.1]">{name}</p>
          <p>|</p>
          <p className="text-sm leading-[1.6]">{position}</p>
        </div>
        <div className="mt-12 flex items-center justify-between">
          <div className="flex space-x-3">
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/staticmania"
              className="border p-1.5 duration-300 hover:bg-primary dark:border-dark md:p-3">
              <img src="/images/home-4/linkedin.png" alt="icon" className="mt-[2px] block dark:hidden" />
              <img src="/images/home-4/linkedin-dark.png" alt="icon" className="mt-[2px] hidden dark:block" />
            </Link>
            <Link
              href="https://x.com/heystaticmania"
              target="_blank"
              className="border p-1.5 duration-300 hover:bg-primary dark:border-dark md:p-3">
              <img src="/images/home-4/old-twitter.png" alt="icon" className="block dark:hidden" />
              <img src="/images/home-4/old-twitter-dark.png" alt="icon" className="hidden dark:block" />
            </Link>
            <Link
              href="https://www.instagram.com/staticmania_/"
              target="_blank"
              className="border p-1.5 duration-300 hover:bg-primary dark:border-dark md:p-3">
              <img src="/images/home-4/instragram.png" alt="icon" className="block dark:hidden" />
              <img src="/images/home-4/instragram-dark.png" alt="icon" className="hidden dark:block" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwiperSlideContent
