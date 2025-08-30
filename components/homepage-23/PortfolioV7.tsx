import { cn } from '@/utils/cn'
import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

interface ProjectType {
  slug: string
  content: string
  [key: string]: any
}

const projects: ProjectType[] = getMarkDownData('data/insurance-agency/projects').reverse()

const PortfolioV7 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container grid gap-10 max-md:gap-y-12 md:grid-cols-2">
        {projects.map((item, index) => {
          if (index % 2 !== 0) {
            return (
              <RevealWrapper key={item.slug} className="reveal-me group col-span-full md:justify-self-end">
                <Link href={`/insurance-agency/project/${item.slug}`} className="w-full">
                  <div className="underline-hover-effect flex w-full flex-col items-end gap-x-10 gap-y-6 md:flex-row-reverse md:items-center">
                    <figure className="w-full overflow-hidden md:w-[31%]">
                      <img
                        src={item?.image}
                        alt={item.title}
                        className="block h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                      />
                    </figure>
                    <div className="text-right md:mt-9">
                      <p className="font-poppins text-xs font-normal uppercase leading-3 tracking-[5px] text-secondary dark:text-backgroundBody md:leading-6 md:tracking-[8px]">
                        {item?.category}
                      </p>
                      <div className="blog-title mb-2 mt-3 md:mt-4 lg:mb-4 lg:mt-5 xl:mt-7">
                        <h3 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[56px] lg:leading-[1.2] lg:tracking-[-1.68px]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-base leading-[1.4] tracking-[0.48px] md:text-2xl">/{item?.year}</p>
                    </div>
                  </div>
                </Link>
              </RevealWrapper>
            )
          }

          return (
            <RevealWrapper key={item.slug} className={cn('reveal-me group col-span-full')}>
              <Link href={`/insurance-agency/project/${item.slug}`} className="max-md:w-full">
                <div className="underline-hover-effect flex w-full flex-col items-start gap-x-10 gap-y-6 md:flex-row md:items-center">
                  <figure className="w-full overflow-hidden md:w-[56%]">
                    <img
                      src={item?.image}
                      alt={item.title}
                      className="block h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    />
                  </figure>
                  <div className="flex-1 md:mt-14">
                    <p className="font-poppins text-xs font-normal uppercase leading-3 tracking-[5px] text-secondary dark:text-backgroundBody md:leading-6 md:tracking-[8px]">
                      {item?.category}
                    </p>
                    <div className="blog-title mb-2 mt-3 md:mt-4 lg:mb-4 lg:mt-5 xl:mt-7">
                      <h3 className="text-nowrap text-3xl sm:text-4xl md:text-[40px] lg:text-[56px] lg:leading-[1.2] lg:tracking-[-1.68px]">
                        {item?.title}
                      </h3>
                    </div>
                    <p className="text-base leading-[1.4] tracking-[0.48px] md:text-2xl">/{item?.year}</p>
                  </div>
                </div>
              </Link>
            </RevealWrapper>
          )
        })}
      </div>

      <RevealWrapper as="ul" className="reveal-me mt-[60px] flex justify-center">
        <li className="mx-auto block w-[90%] md:inline-block md:w-auto">
          <Link href="/digital-agency" className="rv-button rv-button-primary2 block md:inline-block">
            <div className="rv-button-top text-center">
              <span>See all projects</span>
            </div>
            <div className="rv-button-bottom text-center">
              <span>See all projects</span>
            </div>
          </Link>
        </li>
      </RevealWrapper>
    </section>
  )
}

export default PortfolioV7
