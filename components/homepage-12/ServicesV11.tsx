import { MarkdownData } from '@/interface'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const businessSolutionServices: MarkdownData[] = getMarkDownData('data/ai-solutions/services').sort(
  //@ts-ignore
  (a, b) => a.serialNumber - b.serialNumber,
)

const sliceOne = businessSolutionServices.slice(0, 3)
const sliceTwo = businessSolutionServices.slice(3, 6)

const ServicesV11 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Smart AI solutions tailored to
                <i className="font-instrument"> your needs </i>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                We build AI solutions that streamline operations and drive revenue growth.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/services" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Explore AI Services</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Explore AI Services</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center px-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark">
        {/* Service Card1 */}
        {sliceOne.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
            <div>
              {/* Front Side */}
              <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                <span>
                  <Image
                    src={service.lightLogo}
                    alt="service-icon"
                    width={40}
                    height={40}
                    className="inline-block dark:hidden"
                  />
                  <Image
                    src={service.darkLogo}
                    alt="service-icon"
                    width={40}
                    height={40}
                    className="hidden dark:inline-block"
                  />
                </span>
                <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
                <p>{service.description}</p>
              </div>
              {/* Hover Back Side */}
              <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
                <span>
                  <Image
                    src={service.darkLogo}
                    alt="service-icon"
                    width={40}
                    height={40}
                    className="inline-block dark:hidden"
                  />
                  <Image
                    src={service.lightLogo}
                    alt="service-icon"
                    width={40}
                    height={40}
                    className="hidden dark:inline-block"
                  />
                </span>
                <h5 className="mb-3 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
                  {service.title}
                </h5>
                <p className="mb-10 text-backgroundBody dark:text-secondary">{service.description}</p>
                <Link
                  href={`/ai-solutions/services/${service.slug}`}
                  className="rv-button rv-button-sm-v2 rv-button-secondary-v2">
                  <div className="rv-button-top flex items-center gap-2">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-backgroundBody dark:stroke-secondary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="rv-button-bottom flex items-center">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-secondary dark:stroke-backgroundBody"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
      {/* second Card Container */}
      <div className="flex flex-wrap justify-center px-5 max-lg:mt-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark max-lg:[&>*]:border-y max-lg:dark:[&>*]:border-y-dark lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark">
        {/* Service Card v2 */}
        {sliceTwo.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
            <div>
              {/* Front Side */}
              <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                <span>
                  <Image
                    src={service.lightLogo}
                    alt="service-icon"
                    width={40}
                    height={40}
                    className="inline-block dark:hidden"
                  />
                  <Image
                    src={service.darkLogo}
                    alt="service-icon"
                    width={40}
                    height={40}
                    className="hidden dark:inline-block"
                  />
                </span>
                <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
                <p>{service.description}</p>
              </div>
              {/* Hover Back Side */}
              <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
                <span>
                  <Image
                    src={service.darkLogo}
                    alt="service-icon"
                    width={40}
                    height={40}
                    className="inline-block dark:hidden"
                  />
                  <Image
                    src={service.lightLogo}
                    alt="service-icon"
                    width={40}
                    height={40}
                    className="hidden dark:inline-block"
                  />
                </span>
                <h5 className="mb-3 mt-9 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
                  {service.title}
                </h5>
                <p className="mb-10 text-backgroundBody dark:text-secondary">{service.description}</p>
                <Link
                  href={`/ai-solutions/services/${service.slug}`}
                  className="rv-button rv-button-sm-v2 rv-button-secondary-v2">
                  <div className="rv-button-top flex items-center gap-2">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-backgroundBody dark:stroke-secondary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="rv-button-bottom flex items-center">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-secondary dark:stroke-backgroundBody"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default ServicesV11
