'use client'
import { BlogType } from '@/app/ai-blog/page'
import RevealWrapper from '@/components/animation/RevealWrapper'
import Link from 'next/link'
import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface ClientSuccessStoriesV2Props {
  blog: BlogType[]
}

const ClientSuccessStoriesV2: FC<ClientSuccessStoriesV2Props> = ({ blog }) => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="container">
        <div className="mb-9 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-16 lg:justify-between">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Success
                <i className="font-instrument"> stories</i>
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="w-full md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                Our user-centered design encourages productivity and boosts revenue.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/portfolio-agency/case-study" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Read More Success Stories</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Read More Success Stories</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper>
          <Swiper
            loop
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}>
            {blog.map((story) => (
              <SwiperSlide key={story.slug}>
                <figure className="relative">
                  <Link href={`/communication-agency/blog/${story.slug}`}>
                    <div className="relative">
                      <img
                        src={story?.thumbnail}
                        alt={`Success Story - ${story?.title}`}
                        width={400}
                        height={300}
                        className="h-auto w-full"
                      />
                      <div className="absolute bottom-0 left-0 h-[150px] w-full bg-gradient-to-t from-secondary/85 to-secondary/5" />
                      <h3 className="absolute bottom-6 left-6 z-10 text-backgroundBody">{story?.title}</h3>
                    </div>
                  </Link>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ClientSuccessStoriesV2
