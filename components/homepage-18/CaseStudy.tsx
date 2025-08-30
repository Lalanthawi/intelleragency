import RevealWrapper from '@/components/animation/RevealWrapper'
import Link from 'next/link'
import { FC } from 'react'

interface CaseStudyProps {
  title: string
  image: string
  challenges: string[]
  imageAlt?: string
  detailsLink: string
}

const CaseStudy: FC<CaseStudyProps> = ({ title, image, challenges, imageAlt = 'Case Study Image', detailsLink }) => {
  return (
    <RevealWrapper className="underline-hover-effect group relative flex flex-col items-center lg:flex-row">
      <figure className="-z-30 max-w-[870px] overflow-hidden">
        <Link href={detailsLink} className="block">
          <img
            src={image}
            className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
            alt={imageAlt}
          />
        </Link>
      </figure>
      <div className="z-30 w-full border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
        <div className="blog-title mb-3.5 lg:mb-5">
          <Link href={detailsLink}>
            <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">{title}</h3>
          </Link>
        </div>
        <ul className="mb-10 pl-5">
          {challenges.map((challenge, index) => (
            <li key={`challenge-${index + 1}`} className="list-disc text-secondary/70 dark:text-backgroundBody/70">
              {challenge}
            </li>
          ))}
        </ul>
        <Link href={detailsLink} className="rv-button rv-button-white">
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
  )
}

export default CaseStudy
