import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import CaseStudy from '@/components/homepage-18/CaseStudy'
import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'

interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

const caseStudiesData: WorkType[] = getMarkDownData('data/copy-write-agency')

const PortfolioV5 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="md:flex-1">
            <RevealWrapper className="rv-badge reveal-me">
              <span className="rv-badge-text">Success Stories</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear mt-3 overflow-hidden">
                Real results
                <span className="font-instrument italic"> real impact</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="max-md:w-full md:flex-1">
            <TextAppearAnimation>
              <p className="text-appear overflow-hidden md:text-right">
                Words that win customers, Build trust &amp; increase revenue
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/project" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>More Case Studies</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>More Case Studies</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
        <div className="mb-[60px] space-y-[30px]">
          {caseStudiesData.map((study) => (
            <CaseStudy
              key={study.slug}
              title={study.title}
              image={study.image}
              challenges={study.challenges}
              detailsLink={`/copy-write-agency/${study.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioV5
