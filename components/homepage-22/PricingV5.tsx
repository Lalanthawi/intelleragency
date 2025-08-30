import { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

type Plan = {
  title: string
  price: string
  features: string[]
  ctaText?: string
  ctaVariant?: string
  isFeatured?: StaticImageData
}

const CheckmarkIcon = () => (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="inline dark:hidden"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8486 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z"
        fill="currentColor"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="hidden dark:inline"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8486 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z"
        fill="currentColor"
      />
    </svg>
  </span>
)

const pricingPlans: Plan[] = [
  {
    title: 'Starter Package',
    price: '$999',
    features: ['Basic Components & variants', 'Basic Components & variants', 'Lifetime updates'],
    ctaVariant: 'white',
  },
  {
    title: 'Growth Package',
    price: '$2,499',
    features: [
      'Logo & Brand Identity (5 Concepts)',
      'Full Brand Strategy & Messaging Guide',
      'Stationery & Social Media Branding',
      'Two Rounds of Revisions',
    ],
    ctaVariant: 'primary',
  },
  {
    title: 'Premium Package',
    price: '$4,999',
    features: [
      'Complete Brand Identity & Guidelines',
      'Website & Social Media Branding',
      'Lifetime updates',
      'Advanced Market Research',
      'Dedicated Branding Consultant',
    ],
    ctaVariant: 'white',
  },
]

const PricingV5: React.FC = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-7 text-center lg:mb-14">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">Pricing</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 text-center">
              Affordable & flexible
              <i className="font-instrument"> event </i>
              <br className="hidden md:block" />
              <i className="font-instrument"> packages </i>
            </h2>
          </TextAppearAnimation>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1600px] items-center justify-center gap-[30px] max-2xl:flex-wrap max-sm:px-5">
        {pricingPlans.map((plan, index) => {
          const { title, price, features, ctaText = 'Get Started', ctaVariant = 'white' } = plan

          return (
            <RevealWrapper
              key={index}
              className="reveal-me relative min-h-[510px] min-w-full border bg-backgroundBody px-[30px] pt-[30px] dark:border-dark dark:bg-dark sm:min-w-[416px]">
              <div className="relative mb-3 flex justify-end">
                <div className="rv-badge">
                  <span className="rv-badge-text">{title}</span>
                </div>
              </div>

              <h3 className="relative mb-[30px] text-6xl leading-[60px] max-sm:text-4xl">{price}</h3>

              <ul className="relative mt-10 [&>*:not(:last-child)]:mb-2 md:[&>*:not(:last-child)]:mb-3">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex list-none gap-[10px] text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70">
                    <CheckmarkIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-8 w-[calc(100%-60px)]">
                <Link href="#" className={`rv-button rv-button-${ctaVariant} w-full`}>
                  <div className="rv-button-top !w-full !text-center">
                    <span className="font-normal">{ctaText}</span>
                  </div>
                  <div className="rv-button-bottom !w-full !text-center">
                    <span className="font-normal">{ctaText}</span>
                  </div>
                </Link>
              </div>
            </RevealWrapper>
          )
        })}
      </div>
    </section>
  )
}

export default PricingV5
