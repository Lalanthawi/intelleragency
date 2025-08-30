import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface BlogType {
  slug: string
  content: string
  [key: string]: any
}

const blogpost: BlogType[] = getMarkDownData('data/insurance-agency/blog')

const BlogPostV8 = () => {
  return (
    <section className="bg-transparent pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation>
              <h2 className="text-appear mt-3 md:mt-4">
                Insights &amp;
                <span className="font-instrument italic">resources</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1">
            <TextAppearAnimation>
              <p className="text-appear md:text-right">
                We champion athletes, storytellers, and brands that shape culture and inspire the world with their
                unique perspectives.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/portfolio-agency/case-study" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Read Our Blog</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Read Our Blog</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-items-center gap-x-6 gap-y-[60px] md:grid-cols-2 md:items-start lg:grid-cols-3">
          {blogpost.map((item) => (
            <RevealWrapper key={item.slug} className="reveal-me group max-w-[370px]">
              <figure className="overflow-hidden">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </figure>
              <Link href={`/insurance-agency/blog/${item?.slug}`}>
                <div className="blog-title mb-5 mt-[30px]">
                  <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                    {item?.title}
                  </h3>
                </div>
              </Link>
              <Link href={`/insurance-agency/blog/${item?.slug}`} className="rv-button rv-button-primary2">
                <div className="rv-button-top flex items-center !text-center">
                  <span className="pr-1">Read More</span>
                  <img className="inline dark:hidden" src="/images/icons/top-arrow.svg" alt="Arrow Icon" />
                  <img className="hidden dark:inline" src="/images/icons/top-arrow-dark.svg" alt="Arrow Icon" />
                </div>
                <div className="rv-button-bottom flex items-center !text-center">
                  <span className="pr-1">Read More</span>
                  <img className="inline" src="/images/icons/top-arrow.svg" alt="Arrow Icon" />
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPostV8
