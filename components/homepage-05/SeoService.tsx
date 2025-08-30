'use client'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import { MarkdownData } from '@/interface'
import Link from 'next/link'
import { FC } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

interface ServiceData {
  servicesData: MarkdownData[]
}

const SeoService: FC<ServiceData> = ({ servicesData }) => {
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section
      ref={triggerRef}
      className="service-section relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <h2>Our SEO Expertise</h2>
      </div>
      <div
        ref={contentRef}
        className="service-wrapper mt-16 flex flex-col gap-6 overflow-x-hidden max-md:px-5 md:w-fit md:flex-row md:flex-nowrap md:pl-[20%] md:pr-10">
        <RevealWrapper>
          <div className="grid max-h-[404px] w-[332px] content-between">
            <p className="text-sm uppercase leading-[1.1] tracking-[3px] text-secondary dark:text-backgroundBody">
              Our services
            </p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={97} height={96} viewBox="0 0 97 96" fill="none">
                <path
                  d="M60.5 48L78.5 66M78.5 66L60.5 84M78.5 66H24.5V12"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </RevealWrapper>
        {servicesData.map((card) => (
          <div key={card.slug} className="group border p-5 dark:border-dark md:w-[740px] md:p-[30px] lg:w-[890px]">
            <Link href={`seo-agency/services/${card.slug}`}>
              <div className="flex flex-col items-start gap-y-7 md:flex-row md:gap-x-12">
                <figure className="max-md:w-full">
                  <img src={card.thumbnail} alt={card.title} className="h-auto w-full" />
                </figure>

                <div className="flex flex-col justify-between">
                  <figure className="relative mb-[50px] mt-2 hidden size-20 cursor-pointer self-end overflow-hidden border bg-backgroundBody p-7 transition-all duration-500 group-hover:border-none group-hover:bg-primary dark:border-dark dark:bg-dark md:block lg:p-8">
                    <img
                      src="/images/icons/arrow-Icon.svg"
                      alt="Arrow Icon"
                      className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:hidden"
                    />
                    <img
                      src="/images/home-5/arrow-Icon.svg"
                      alt="Arrow Icon"
                      className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:block"
                    />
                    <img
                      src="/images/icons/arrow-Icon.svg"
                      alt="Arrow Icon"
                      className="absolute -translate-x-[47px] translate-y-16 opacity-0 transition-all duration-500 group-hover:-translate-y-[3px] group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </figure>
                  <p className="text-base lg:text-lg">{card.description}</p>
                </div>
              </div>
              <div className="flex items-end justify-between sm:mt-2">
                <h4 className="text-[25px] lg:text-[46px] lg:leading-[1.1] lg:tracking-[-1.44px]">{card.title}</h4>
                <span className="text-5xl font-normal leading-[1.1] tracking-[-2px] text-black/10 dark:text-backgroundBody/10 sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:tracking-[-2.88px]">
                  0{card.serialNumber}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SeoService
