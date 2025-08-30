import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface ProjectType {
  slug: string
  content: string
  [key: string]: any
}

const projects: ProjectType[] = getMarkDownData('data/social-media-marketing/project')

const PortfolioV6 = () => {
  return (
    <section
      className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[150px] lg:pt-[150px] xl:pb-[200px] xl:pt-[200px]"
      aria-labelledby="portfolio-heading">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">Success Stories</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-10 text-center lg:mb-20">
              Real growth, <i className="font-instrument">real results</i>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {projects.map((item) => (
            <RevealWrapper
              as="article"
              key={item.slug}
              className="underline-hover-effect group relative flex flex-col items-center lg:flex-row">
              <figure className="-z-30 max-w-[870px] overflow-hidden">
                <Link
                  href={`/social-media-marketing/project/${item.slug}`}
                  className="block"
                  aria-label="View complete case study for retail brand engagement">
                  <img
                    src={item?.image}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={item?.title}
                    width={870}
                    height={580}
                  />
                </Link>
              </figure>
              <div className="z-30 w-full border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                <p className="mb-3.5 text-sm font-normal uppercase leading-6 tracking-[3px] text-black dark:text-white">
                  {item?.category}
                </p>
                <div className="blog-title mb-3.5 lg:mb-5">
                  <Link
                    href={`/social-media-marketing/project/${item.slug}`}
                    aria-label="Read the full case study about 3X engagement growth">
                    <h3 className="text-[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {item?.title}
                    </h3>
                  </Link>
                </div>
                <p className="mb-10 text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
                  {item?.description}
                </p>

                <Link
                  href={`/social-media-marketing/project/${item.slug}`}
                  className="rv-button rv-button-white"
                  aria-label="Read full case study about 3X engagement growth">
                  <div className="rv-button-top text-center">
                    <span className="mr-2">Read Case Study</span>
                    <img
                      className="inline dark:hidden"
                      src="/images/icons/top-arrow.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                    <img
                      className="hidden dark:inline"
                      src="/images/icons/top-arrow-dark.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="rv-button-bottom text-center">
                    <span className="mr-2">Read Case Study</span>
                    <img
                      className="hidden dark:inline"
                      src="/images/icons/top-arrow.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                    <img
                      className="inline dark:hidden"
                      src="/images/icons/top-arrow-dark.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper className="reveal-me mt-7 justify-self-center text-center max-md:w-full md:mt-14">
          <Link
            href="/portfolio-agency/case-study"
            className="rv-button rv-button-white mx-auto block w-full md:inline-block md:w-auto"
            aria-label="View all our case studies and success stories">
            <div className="rv-button-top">
              <span>Read More Case Studies</span>
            </div>
            <div className="rv-button-bottom">
              <span>Read More Case Studies</span>
            </div>
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PortfolioV6
