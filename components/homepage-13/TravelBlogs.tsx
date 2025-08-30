import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface BlogType {
  slug: string
  content: string
  [key: string]: any
}

const blogpost: BlogType[] = getMarkDownData('data/travel-agency/blog')

const TravelBlogs = () => {
  return (
    <section className="relative mb-14 w-full bg-[#DDF3EC] pt-14 md:mb-[272px] md:pt-16 lg:mb-[260px] lg:pt-[88px] xl:mb-[250px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear dark:text-secondary">
                Insider tips &amp;
                <i className="font-instrument dark:text-secondary">Destination guides</i>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:max-w-[370px] md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg dark:text-colorText md:place-self-end md:text-right">
                Discover key trends and insights to elevate your organization.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/ai-blog" className="rv-button rv-button-white block !bg-[#DDF3EC] md:inline-block">
                  <div className="rv-button-top !bg-[#DDF3EC] dark:!border-secondary/30">
                    <span className="!text-secondary">Read More</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Read More</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogpost?.map((item) => (
            <div key={item.slug} className="relative">
              <RevealWrapper as="figure" className="reveal-me w-full">
                <img src={item?.thumbnail} alt={item?.title} className="h-auto w-full object-cover" />
              </RevealWrapper>
              <RevealWrapper className="reveal-me absolute inset-x-[5px] top-[22%] mx-auto max-w-[calc(100%-10px)] bg-backgroundBody px-6 pb-8 pt-6 dark:bg-dark sm:top-[38%] md:top-1/2 lg:top-3/4">
                <div className="rv-badge mb-3">
                  <span className="rv-badge-text">{item?.category}</span>
                </div>
                <div className="blog-title mb-7 mt-1.5">
                  <Link href={`/travel-agency/blog/${item.slug}`}>
                    <h3 className="text-[34px] font-normal lg:leading-[1.05]">{item?.title}</h3>
                  </Link>
                </div>
                <div className="mx-auto w-[90%] md:mx-0 md:w-auto">
                  <Link
                    href={`/travel-agency/blog/${item.slug}`}
                    className="rv-button rv-button-white rv-button-sm-v2 block text-center md:inline-block">
                    <div className="rv-button-top">
                      <span>Read More</span>
                    </div>
                    <div className="rv-button-bottom">
                      <span>Read More</span>
                    </div>
                  </Link>
                </div>
              </RevealWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TravelBlogs
