import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

const ourWork: WorkType[] = getMarkDownData('data/strategic-branding')

const OurWorkV2 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="rv-badge mb-3">
          <span className="rv-badge-text">Our Creative Impact</span>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mb-3">
            Brand identities that <br />
            speak
            <i className="font-instrument"> for themselves</i>
          </h2>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear">A Legacy of Award-Winning productions</p>
        </TextAppearAnimation>
      </div>

      <div className="relative mx-auto mb-[60px] grid max-w-[1500px] grid-cols-1 items-center justify-items-center gap-[30px] gap-y-10 px-5 after:absolute after:top-1/2 after:h-[1px] after:w-full after:bg-secondary/10 after:content-[''] dark:after:bg-backgroundBody/10 md:grid-cols-2 md:items-start md:before:absolute md:before:h-full md:before:w-[1px] md:before:bg-secondary/10 md:before:content-[''] md:dark:before:bg-backgroundBody/10">
        {ourWork.map((item) => (
          <RevealWrapper key={item.slug} className="underline-hover-effect group w-full">
            <Link href={`/strategic-branding/${item.slug}`} className="block">
              <figure className="w-full overflow-hidden">
                <img
                  src={item?.image}
                  className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  alt={item?.title}
                />
              </figure>
            </Link>
            <Link href={`/strategic-branding/${item.slug}`} className="mt-[30px] block">
              <div className="blog-title">
                <h3>{item?.title}</h3>
              </div>
              <p className="mt-3.5 text-xs uppercase leading-[1.2] tracking-[0.96px] text-secondary/70 dark:text-backgroundBody/70">
                A complete rebrand that positioned them as a global icon.
              </p>
            </Link>
          </RevealWrapper>
        ))}
      </div>

      <RevealWrapper as="ul" className="flex justify-center px-5">
        <li className="mx-auto block max-md:w-full md:ml-auto md:inline-block md:w-auto">
          <Link
            href="/portfolio-agency/case-study"
            className="rv-button rv-button-secondary block text-center md:inline-block">
            <div className="rv-button-top">
              <span>View More Projects</span>
            </div>
            <div className="rv-button-bottom">
              <span>View More Projects</span>
            </div>
          </Link>
        </li>
      </RevealWrapper>
    </section>
  )
}

export default OurWorkV2
