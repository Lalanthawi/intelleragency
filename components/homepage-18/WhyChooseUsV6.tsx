import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Link from 'next/link'
import React, { FC } from 'react'

// TypeScript interfaces
interface IndustryProps {
  id: string
  title: string
  description: string
}

// Industry Item Component
const IndustryItem: React.FC<IndustryProps> = ({ title, description, id }) => {
  return (
    <RevealWrapper className="py-2.5">
      <h6>{title}</h6>
      <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px]">{description}</p>
    </RevealWrapper>
  )
}

// Industries Data
const industriesData: IndustryProps[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    description: 'Product descriptions, email marketing, and ad copy.',
  },
  {
    id: 'saas',
    title: 'SaaS & Technology',
    description: 'Clear, engaging messaging that simplifies complex solutions.',
  },
  {
    id: 'finance',
    title: 'Finance & Legal',
    description: 'Trust-building content for regulated industries.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Wellness',
    description: 'Empathetic, informative content that connects with audiences.',
  },
  {
    id: 'luxury',
    title: 'Luxury & Lifestyle',
    description: 'Sophisticated storytelling that enhances brand value.',
  },
]

// Main Component
const WhyChooseUsV6: FC = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        {/* Content Area */}
        <div className="flex flex-col-reverse gap-y-8 md:flex-row-reverse md:gap-5 lg:gap-10 xl:gap-x-20">
          {/* Industries List */}
          <div className="md:w-[45%]">
            <div className="[&>*:not(:first-child)]:mt-3.5">
              {industriesData.map((industry) => (
                <IndustryItem
                  key={industry.id}
                  id={industry.id}
                  title={industry.title}
                  description={industry.description}
                />
              ))}
            </div>
            <ul className="reveal-me mt-7 max-md:w-full md:mt-14">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/team" className="rv-button rv-button-sm rv-button-primary block md:inline-block">
                  <div className="rv-button-top">
                    <span>Get in Touch</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span className="text-nowrap">Get in Touch</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Heading */}
          <RevealWrapper className="md:w-[55%]">
            <TextAppearAnimation>
              <h2 className="text-appear">
                Industries
                <br className="hidden md:block" />
                <i className="font-instrument"> We serve</i>
              </h2>
            </TextAppearAnimation>

            <TextAppearAnimation>
              <p className="text-appear mt-4">
                We create tailored content for businesses across a wide range of
                <br />
                industries:
              </p>
            </TextAppearAnimation>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsV6
