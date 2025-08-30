import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface ProjectServicesType {
  slug: string
  content: string
  [key: string]: any
}

const projectServicesData: ProjectServicesType[] = getMarkDownData('data/photography-studio/work')
const projectServices = projectServicesData.toSorted((a, b) => a.year - b.year)

const ProjectServices = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <TextAppearAnimation>
            <h2 className="text-appear">Selected Work</h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center gap-[30px] gap-y-10 md:grid-cols-2 md:items-start">
          {projectServices.map((project) => (
            <RevealWrapper
              key={project.slug}
              className="underline-hover-effect group w-full border px-5 pb-7 pt-5 dark:border-dark">
              <Link href={`/photography-studio/work/${project.slug}`} className="w-full">
                <figure className="overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    width={508}
                    height={416}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt="Blog Images"
                  />
                </figure>

                <div className="mb-2 mt-[26px] flex items-center justify-between lg:mb-3">
                  <div className="rv-badge">
                    <span className="rv-badge-text">{project.tags}</span>
                  </div>
                  <p className="text-base leading-8 tracking-[0.48px] text-secondary dark:text-white md:text-[22px]">
                    {project.year}
                  </p>
                </div>

                <div className="blog-title">
                  <h3 className="text-3xl font-normal lg:text-[42px] lg:leading-[1.2] lg:tracking-[-1.68px] xl:text-[50px]">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper as="ul" className="mt-14 flex justify-center">
          <li className="max-md:w-full">
            <Link href="/design-agency" className="rv-button rv-button-white block text-center md:inline-block">
              <div className="rv-button-top">
                <span>View All works</span>
              </div>
              <div className="rv-button-bottom">
                <span>View All works</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProjectServices
