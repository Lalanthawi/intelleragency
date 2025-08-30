import RevealWrapper from '@/components/animation/RevealWrapper'
import {
  DrivenCopywritingIcon,
  IndustryKnowledgeIcon,
  PsychologyWritingIcon,
  ScalableSolutionsIcon,
  SeoStrategyIcon,
} from '@/components/homepage-18/Icons'
import Link from 'next/link'
import React, { FC } from 'react'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface ExpertiseCardProps {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

const ExpertiseCard: FC<ExpertiseCardProps> = ({ icon, title, description, id }) => {
  return (
    <div className="flex-1 border px-[30px] py-20 dark:border-dark">
      <span>{icon}</span>
      <h5 className="mb-2.5 mt-5 lg:text-[35px]">{title}</h5>
      <p className="text-base leading-[1.6]">{description}</p>
    </div>
  )
}

const TOP_ROW_EXPERTISE: ExpertiseCardProps[] = [
  {
    id: 'driven-copywriting',
    icon: <DrivenCopywritingIcon />,
    title: 'Driven copywriting',
    description: 'Every piece of content is designed to engage and convert.',
  },
  {
    id: 'scalable-solutions',
    icon: <ScalableSolutionsIcon />,
    title: 'Scalable solutions',
    description: "Whether you're a startup or an enterprise, we adapt to your needs.",
  },
  {
    id: 'psychology-writing',
    icon: <PsychologyWritingIcon />,
    title: 'Psychology writing',
    description: 'Persuasive content built on deep consumer insights.',
  },
]

const BOTTOM_ROW_EXPERTISE: ExpertiseCardProps[] = [
  {
    id: 'seo-strategy',
    icon: <SeoStrategyIcon />,
    title: 'SEO & Digital strategy expertise',
    description: 'Content that ranks and performs.',
  },
  {
    id: 'industry-knowledge',
    icon: <IndustryKnowledgeIcon />,
    title: 'Industry specific knowledge',
    description: 'Experienced writers with sector expertise.',
  },
]

// Main Component
const OurExpertise: FC = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="md:w-[60%] md:self-start">
            <RevealWrapper className="rv-badge reveal-me mb-2">
              <span className="rv-badge-text">Why Brands Choose Us</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Smart, scalable &amp;
                <i className="font-instrument"> secure </i>
                <i className="font-instrument"> solutions </i>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:w-[40%] md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                We provide smart, secure solutions tailored to your business for smooth digital transformation.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-primary rv-button-sm block md:inline-block">
                  <div className="rv-button-top">
                    <span>Let's Talk</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Let's Talk</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <article>
          <RevealWrapper className="reveal-me mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {TOP_ROW_EXPERTISE.map((expertise) => (
              <ExpertiseCard
                key={expertise.id}
                id={expertise.id}
                icon={expertise.icon}
                title={expertise.title}
                description={expertise.description}
              />
            ))}
          </RevealWrapper>

          <RevealWrapper className="reveal-me flex flex-col gap-[30px] md:flex-row">
            {BOTTOM_ROW_EXPERTISE.map((expertise) => (
              <RevealWrapper
                key={expertise.id}
                className="reveal-me min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
                <span>{expertise.icon}</span>
                <h5 className="mb-2.5 mt-5 lg:text-[35px]">{expertise.title}</h5>
                <p className="text-base leading-[1.6]">{expertise.description}</p>
              </RevealWrapper>
            ))}
          </RevealWrapper>
        </article>
      </div>
    </section>
  )
}

export default OurExpertise
