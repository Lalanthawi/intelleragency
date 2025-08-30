import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'

interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

const caseStudiesData: WorkType[] = getMarkDownData('data/law-firm-agency/project')

const CaseStudyV2 = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[150px] xl:pb-[200px]">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">Case Studies</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-10 text-center lg:mb-20">
              Winning cases, <i className="font-instrument">changing lives</i>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {caseStudiesData.map((study) => (
            <RevealWrapper
              key={study.slug}
              className="underline-hover-effect reveal-me group relative flex flex-col items-center lg:flex-row">
              <figure className="-z-30 max-w-[870px] overflow-hidden">
                <Link href={`/law-firm-agency/project/${study.slug}`} className="block">
                  <Image
                    src={study.image}
                    width={870}
                    height={580}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt="Case Study Image"
                  />
                </Link>
              </figure>
              <div className="z-30 w-full border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                <p className="mb-3.5 text-sm font-normal uppercase leading-6 tracking-[3px] text-black dark:text-white">
                  {study.category}
                </p>
                <div className="blog-title mb-3.5 lg:mb-5">
                  <Link href={`/law-firm-agency/project/${study.slug}`}>
                    <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {study.title}
                    </h3>
                  </Link>
                </div>
                <p className="mb-10 text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
                  {study.description}
                </p>
                <Link href={`/law-firm-agency/project/${study.slug}`} className="rv-button rv-button-white">
                  <div className="rv-button-top text-center">
                    <span className="mr-2">Read Case Study</span>
                    <Image
                      className="inline dark:hidden"
                      src="/images/icons/top-arrow.svg"
                      width={16}
                      height={16}
                      alt="Arrow Icon"
                    />
                    <Image
                      className="hidden dark:inline"
                      src="/images/icons/top-arrow-dark.svg"
                      width={16}
                      height={16}
                      alt="Arrow Icon"
                    />
                  </div>
                  <div className="rv-button-bottom text-center">
                    <span className="mr-2">Read Case Study</span>
                    <Image
                      className="hidden dark:inline"
                      src="/images/icons/top-arrow.svg"
                      width={16}
                      height={16}
                      alt="Arrow Icon"
                    />
                    <Image
                      className="inline dark:hidden"
                      src="/images/icons/top-arrow-dark.svg"
                      width={16}
                      height={16}
                      alt="Arrow Icon"
                    />
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

export default CaseStudyV2
