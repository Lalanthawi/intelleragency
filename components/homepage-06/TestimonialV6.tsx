'use client'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ITestimonial {
  id: number
  feedback: string
  date: string
  name: string
  position: string
  avatar: string
}

const data: ITestimonial[] = [
  {
    id: 1,
    feedback:
      'Rivor completely transformed our brand identity. Their creativity and attention to detail exceeded our expectations!',
    date: '03 Feb, 2024',
    name: 'Leslie Alexander',
    position: 'Product Designer',
    avatar: '/images/avatar/review-1.png',
  },
  {
    id: 2,
    feedback: 'An amazing experience working with Rivor. The team is professional, efficient, and creative!',
    date: '15 Mar, 2024',
    name: 'Jane Cooper',
    position: 'Marketing Specialist',
    avatar: '/images/avatar/review-2.png',
  },
  {
    id: 3,
    feedback: 'Rivor provided top-notch service. Their expertise helped us scale our business!',
    date: '28 Apr, 2024',
    name: 'Robert Fox',
    position: 'Business Owner',
    avatar: '/images/avatar/review-3.png',
  },
  {
    id: 4,
    feedback: 'The design and development team at Rivor is phenomenal. I highly recommend them!',
    date: '10 May, 2024',
    name: 'Emily Davis',
    position: 'UX Designer',
    avatar: '/images/avatar/review-4.png',
  },
  {
    id: 5,
    feedback:
      'Rivor completely transformed our brand identity. Their creativity and attention to detail exceeded our expectations!',
    date: '03 Feb, 2024',
    name: 'Leslie Alexander',
    position: 'Product Designer',
    avatar: '/images/avatar/review-5.png',
  },
  {
    id: 6,
    feedback: 'An amazing experience working with Rivor. The team is professional, efficient, and creative!',
    date: '15 Mar, 2024',
    name: 'Jane Cooper',
    position: 'Marketing Specialist',
    avatar: '/images/avatar/review-6.png',
  },
]

const TestimonialV6 = () => {
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section
      ref={triggerRef}
      className="service-section relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <h2 className="text-appear leading-[1.1]">
              What our clients in
              <span className="font-instrument font-medium italic"> say</span>
            </h2>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <p className="text-appear max-w-lg md:place-self-end md:text-right">
              We offer a full suite of creative solutions tailored to your brand's success.
            </p>
            <ul className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/services" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Read More Testimonials</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Read More Testimonials</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <article
        ref={contentRef}
        className="service-wrapper reveal-me flex w-fit flex-row flex-nowrap gap-9 overflow-x-hidden pl-[7%] md:pl-[20%] md:pr-10">
        {data.map((testimonial) => (
          <div key={testimonial.id} className="w-[395px] md:w-[570px]">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={107} height={70} viewBox="0 0 107 70" fill="none">
                <path
                  d="M93.8875 26.3658C97.8489 27.6974 101.018 30.0943 103.395 33.5564C105.772 36.7523 106.96 40.3476 106.96 44.3424C107.224 48.3372 106.168 52.332 103.791 56.3268C101.678 60.0553 98.2451 63.2512 93.4913 65.9144C85.8324 69.9092 79.0979 70.9745 73.2877 69.1103C67.4775 66.9797 63.3839 63.7838 61.007 59.5227C59.6865 57.3921 58.6301 54.4626 57.8378 50.7341C57.3096 47.0056 57.0455 43.144 57.0455 39.1492C57.3096 34.888 57.8378 30.7601 58.6301 26.7652C59.4224 22.7704 60.6109 19.4414 62.1955 16.7782C63.516 14.914 65.1006 12.9166 66.9493 10.786C68.5339 8.92175 70.3826 7.0575 72.4954 5.19326C74.8723 3.32901 77.5133 1.59792 80.4184 0L94.2836 0.798962C92.4349 2.92953 90.7183 4.92694 89.1337 6.79118C87.8132 8.38911 86.6247 9.85387 85.5683 11.1855C84.5119 12.5171 83.4555 13.7155 82.3991 14.7808C80.5504 16.6451 79.0979 18.5093 78.0415 20.3735C76.9851 21.9715 76.0607 23.7026 75.2684 25.5668C74.7402 27.431 74.7402 29.2953 75.2684 31.1595C78.7017 27.431 82.6632 25.5668 87.1529 25.5668C89.2657 25.5668 91.5106 25.8331 93.8875 26.3658ZM39.2188 28.3632C42.9162 30.4937 45.5572 33.4233 47.1418 37.1518C48.9905 40.6139 49.6507 44.3424 49.1225 48.3372C48.5943 52.332 46.8777 56.0605 43.9726 59.5227C41.3316 62.9849 37.3701 65.6481 32.0881 67.5123C23.901 70.1755 17.1665 70.0424 11.8845 67.1128C6.60249 63.917 3.03715 60.0553 1.18845 55.5279C0.39615 53.131 0 50.0683 0 46.3398C0 42.6113 0.39615 38.7497 1.18845 34.7549C1.98075 30.7601 3.03715 26.8984 4.35765 23.1699C5.67814 19.4414 7.39479 16.3787 9.50759 13.9818C11.0922 12.1176 12.9409 10.3865 15.0537 8.78859C16.9024 7.45698 19.0152 5.99222 21.3921 4.39429C24.0331 2.79637 26.9382 1.3316 30.1074 0L43.9726 3.59533C41.8598 5.45958 39.8791 7.0575 38.0304 8.38911C36.4458 9.72071 34.9932 10.9192 33.6727 11.9844C32.3522 13.0497 31.0317 14.115 29.7112 15.1803C27.8625 16.7782 26.2779 18.3761 24.9574 19.9741C23.6369 21.3057 22.4485 22.9036 21.3921 24.7678C20.3357 26.3658 19.9395 28.0968 20.2036 29.9611C22.3164 28.3632 24.4292 27.431 26.542 27.1647C28.9189 26.6321 31.0317 26.4989 32.8804 26.7652C34.9932 27.0316 37.106 27.5642 39.2188 28.3632Z"
                  fill="url(#paint0_linear_5524_5583)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5524_5583"
                    x1="134.547"
                    y1="18.0106"
                    x2="50.9596"
                    y2="-47.7788"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#12D8CC" stopOpacity="0.03" />
                    <stop offset={1} stopColor="#FF6100" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div className="-mt-3 pl-16">
              <p className="mb-5 max-w-[500px] text-lg leading-[1.6] tracking-[0.36px]">"{testimonial.feedback}"</p>
              <p className="left-[18px] mb-4 text-xs font-semibold tracking-[0.9px] text-black dark:text-backgroundBody">
                - {testimonial.date}
              </p>
            </div>
            <div className="flex flex-col">
              <img src={testimonial.avatar} alt={testimonial.name} className="size-16 object-cover" />
              <div className="mt-2">
                <h4 className="text-2xl leading-[1.1]">{testimonial.name}</h4>
                <p className="mt-[1px] text-sm leading-[1.6] tracking-wide">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default TestimonialV6
