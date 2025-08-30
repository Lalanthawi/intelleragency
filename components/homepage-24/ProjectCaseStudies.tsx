import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface CaseStudyType {
  slug: string
  content: string
  [key: string]: any
}

const caseStudies: CaseStudyType[] = getMarkDownData('data/management-consulting/project')

const ProjectCaseStudies = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <TextAppearAnimation>
            <h2 className="text-appear">
              Helping businesses <span className="font-instrument italic">thrive</span>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {caseStudies.map((item) => (
            <RevealWrapper
              key={item.slug}
              className="reveal-me underline-hover-effect group relative flex flex-col items-center lg:flex-row">
              <figure className="-z-30 max-w-[870px] overflow-hidden">
                <Link href={`/management-consulting/project/${item.slug}`} className="block">
                  <img
                    src={item?.image}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={item?.title}
                  />
                </Link>
              </figure>

              <div className="z-30 w-full border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                <p className="mb-3.5 text-sm font-normal uppercase leading-6 tracking-[3px] text-black dark:text-white">
                  {item?.category}
                </p>
                <div className="blog-title mb-20 lg:mb-[104px]">
                  <Link href={`/management-consulting/project/${item.slug}`}>
                    <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {item?.title}
                    </h3>
                  </Link>
                </div>
                <Link href={`/management-consulting/project/${item.slug}`} className="rv-button rv-button-white">
                  <div className="rv-button-top text-center">
                    <span className="mr-2">Read Case Study</span>
                    <img className="inline dark:hidden" src="/images/icons/top-arrow.svg" alt="Arrow Icon" />
                    <img className="hidden dark:inline" src="/images/icons/top-arrow-dark.svg" alt="Arrow Icon" />
                  </div>
                  <div className="rv-button-bottom text-center">
                    <span className="mr-2">Read Case Study</span>
                    <img className="hidden dark:inline" src="/images/icons/top-arrow.svg" alt="Arrow Icon" />
                    <img className="inline dark:hidden" src="/images/icons/top-arrow-dark.svg" alt="Arrow Icon" />
                  </div>
                </Link>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper as="ul" className="reveal-me mt-7 justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/portfolio-agency/case-study" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>Read More Case Studies</span>
              </div>
              <div className="rv-button-bottom">
                <span>Read More Case Studies</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProjectCaseStudies
