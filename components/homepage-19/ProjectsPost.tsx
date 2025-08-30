import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ProjectsPost = () => {
  interface ProjectsType {
    slug: string
    content: string
    [key: string]: any
  }

  const featuredProjects: ProjectsType[] = getMarkDownData('data/startup-agency/project').reverse()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-5 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation>
              <h2 className="text-appear">
                Our featured <br className="hidden md:block" />
                <span className="pr-[4px] font-instrument italic">projects</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="max-w-md flex-1">
            <TextAppearAnimation>
              <p className="text-appear max-md:text-justify md:text-right">
                Include a portfolio grid showcasing previous branding &amp; startup projects
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/digital-agency" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>View More Projects</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>View More Projects</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center gap-8 gap-y-12 md:grid-cols-2 md:items-start">
          {featuredProjects.map((project) => (
            <RevealWrapper className="reveal-me underline-hover-effect group relative" key={project.slug}>
              <Link href={`/startup-agency/project/${project.slug}`}>
                <figure className="overflow-hidden">
                  <img
                    src={project.image}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={project.alt}
                  />
                </figure>
              </Link>
              <Link href={`/startup-agency/project/${project.slug}`}>
                <div className="blog-title">
                  <h3>{project.title}</h3>
                </div>
              </Link>
              <p className="mt-3 text-[13px] font-normal uppercase leading-4 tracking-[2px] text-secondary dark:text-backgroundBody">
                {project.category}
              </p>
              <div className="mt-[30px] border-b dark:border-dark" />
              <Link href={`/startup-agency/project/${project.slug}`}>
                <div className="absolute left-1/2 top-1/2 flex h-[74px] w-[136px] -translate-x-[90%] translate-y-[35%] scale-95 items-center justify-center gap-1 bg-primary px-8 py-6 uppercase opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:scale-100 group-hover:opacity-100">
                  <span className="text-secondary">view</span>
                  <img src="/images/home-5/ArrowUpRight-dark.svg" alt="ArrowUpRight-dark" />
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPost
