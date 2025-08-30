import { MarkdownData } from '@/interface'
import topArrowDark from '@/public/images/icons/top-arrow-dark.svg'
import topArrow from '@/public/images/icons/top-arrow.svg'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const seoProjectsData: MarkdownData[] = getMarkDownData('data/seo-agency/projects')

const PortfolioV4 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div>
          <RevealWrapper
            as="p"
            className="text-center font-satoshi text-sm font-normal uppercase leading-6 tracking-[3px]">
            SEO Agency
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-10 mt-3 text-center lg:mb-20 lg:mt-5">Our results speak for themselves</h2>
          </TextAppearAnimation>
        </div>

        <div className="mb-[60px] space-y-10">
          {seoProjectsData.map((project) => (
            <RevealWrapper
              key={project.slug}
              className="underline-hover-effect group relative flex flex-col items-center lg:flex-row">
              <figure className="h-full max-w-[870px] overflow-hidden">
                <Link href={`/seo-agency/projects/${project.slug}`} className="block">
                  <img
                    src={project.thumbnail}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt="case-studies Img"
                  />
                </Link>
              </figure>

              {/* Overlapping Content Card */}
              <div className="z-30 max-w-[570px] border bg-backgroundBody p-[30px] dark:border-dark dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0">
                <p className="mb-[14px] font-satoshi text-sm font-normal uppercase leading-6 tracking-[3px]">
                  {project.category}
                </p>
                <div className="blog-title mb-3.5 lg:mb-5">
                  <Link href={`/seo-agency/projects/${project.slug}`}>
                    <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {project.title}
                    </h3>
                  </Link>
                </div>
                <p className="mb-10">{project.description.slice(0, 100)}</p>

                <Link href={`/seo-agency/projects/${project.slug}`} className="rv-button rv-button-white">
                  <div className="rv-button-top text-center">
                    <span className="mr-2"> project Study</span>
                    <Image className="inline dark:hidden" src={topArrow} alt="Arrow Icon" />
                    <Image className="hidden dark:inline" src={topArrowDark} alt="Arrow Icon" />
                  </div>
                  <div className="rv-button-bottom text-center">
                    <span className="mr-2"> project Study</span>
                    <Image className="hidden dark:inline" src={topArrow} alt="Arrow Icon" />
                    <Image className="inline dark:hidden" src={topArrowDark} alt="Arrow Icon" />
                  </div>
                </Link>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper as="ul" className="reveal-me flex justify-center">
          <li className="mx-auto block w-[90%] md:inline-block md:w-auto">
            <Link
              href="/portfolio-agency/case-study"
              className="rv-button rv-button-white block text-center md:inline-block">
              <div className="rv-button-top">
                <span>View All Project</span>
              </div>
              <div className="rv-button-bottom">
                <span>View All Project</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PortfolioV4
