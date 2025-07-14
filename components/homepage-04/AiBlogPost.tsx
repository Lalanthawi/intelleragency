'use client'

import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const cardData = [
  {
    id: 1,
    badge: 'E-commerce Revolution',
    title: 'Building Scalable Marketplace: AI-Powered Shopping Experience',
    image: '/images/home-ai/ai-card-1.jpg',
    textColor: 'text-secondary',
  },
  {
    id: 2,
    badge: 'Smart Education',
    title: 'Digital Learning Platform: Transforming Online Education',
    image: '/images/home-ai/ai-card-2.jpg',
    textColor: 'text-white',
  },
  {
    id: 3,
    badge: 'FinTech Innovation',
    title: 'Next-Gen Banking: Building Secure Digital Payment Solutions',
    image: '/images/home-ai/ai-card-3.png',
    textColor: 'text-secondary',
  },
  {
    id: 4,
    badge: 'Healthcare Tech',
    title: 'Digital Health Platform: Revolutionizing Patient Care Management',
    image: '/images/home-ai/ai-card-4.jpg',
    textColor: 'text-white',
  },
  {
    id: 5,
    badge: 'Smart Cities',
    title: 'Urban Innovation: IoT Solutions for Connected Communities',
    image: '/images/home-ai/ai-card-3.png',
    textColor: 'text-secondary',
  },
]

const AiBlogPost = () => {
  return (
    <section className="relative z-50 pb-[120px]">
      <div className="relative h-full w-full lg:w-[90%] lg:translate-x-28 xl:translate-x-[250px]">
        <div className="-mt-[20px] mb-5 flex lg:-mt-[170px] lg:mb-10">
          <Swiper
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            slidesPerView={4}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              1440: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}>
            {cardData.map((card) => (
              <SwiperSlide key={card.id}>
                <div
                  className="!h-[400px] w-full bg-cover bg-center lg:!h-[572px]"
                  style={{ backgroundImage: `url(${card.image})` }}>
                  <div className="p-5 lg:p-10">
                    <div className="rv-badge mb-3 border-none lg:mb-5">
                      <span className="rv-badge-text">{card.badge}</span>
                    </div>
                    <h5 className={card.textColor}>{card.title}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute left-0 flex gap-4">
          <figure className="swiper-button-prev group relative size-16 border border-secondary/10 bg-backgroundBody duration-500 hover:bg-secondary focus:bg-secondary dark:border-backgroundBody/10 dark:bg-dark dark:hover:bg-primary dark:focus:bg-primary lg:size-24">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                className="h-4 w-4 stroke-black group-hover:stroke-white group-focus:stroke-white dark:stroke-white dark:group-hover:stroke-black dark:group-focus:stroke-black lg:h-8 lg:w-8">
                <path d="M27 16H5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 7L5 16L14 25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </figure>
          <figure className="swiper-button-next group relative size-16 border border-secondary/10 bg-backgroundBody transition-all duration-500 hover:bg-secondary focus:bg-secondary dark:border-backgroundBody/10 dark:bg-dark dark:hover:bg-primary dark:focus:bg-primary lg:size-24">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                className="h-4 w-4 stroke-black group-hover:stroke-white group-focus:stroke-white dark:stroke-white dark:group-hover:stroke-black dark:group-focus:stroke-black lg:h-8 lg:w-8">
                <path d="M5 16H27" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 7L27 16L18 25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default AiBlogPost
