import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import {
  AdvertisingCopyIcon,
  BrandMessagingIcon,
  DigitalContentIcon,
  EmailSalesCopyIcon,
  SeoCopywritingIcon,
  ThoughtLeadershipIcon,
} from '@/components/homepage-18/Icons'
import ServiceCard from '@/components/homepage-18/ServiceCard'
import Link from 'next/link'
import React, { FC } from 'react'

// TypeScript interfaces
export interface ServiceCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

// Services data
const ServicesData: ServiceCardProps[] = [
  {
    id: '1',
    title: 'Brand messaging',
    description: 'Define your voice and establish authority.',
    icon: <BrandMessagingIcon />,
    href: 'services/media',
  },
  {
    id: '2',
    title: 'SEO copywriting',
    description: 'Rank higher and convert visitors into customers.',
    icon: <SeoCopywritingIcon />,
    href: 'services/media',
  },
  {
    id: '3',
    title: 'Advertising copy',
    description: 'Persuasive copy designed to sell.',
    icon: <AdvertisingCopyIcon />,
    href: 'services/media',
  },
  {
    id: '4',
    title: 'Thought leadership',
    description: 'Expert-driven content that builds credibility.',
    icon: <ThoughtLeadershipIcon />,
    href: 'services/media',
  },
  {
    id: '5',
    title: 'Email & sales copy',
    description: 'Turn clicks into customers with strong messaging.',
    icon: <EmailSalesCopyIcon />,
    href: 'services/media',
  },
  {
    id: '6',
    title: 'Digital content',
    description: 'Engage your audience with compelling storytelling.',
    icon: <DigitalContentIcon />,
    href: 'services/media',
  },
]

const ServicesV15: FC = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="md:flex-1">
            <RevealWrapper className="rv-badge">
              <span className="rv-badge-text">Services</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear mt-3">
                Copy that
                <span className="font-instrument italic"> drives growth</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="max-md:w-full md:flex-1">
            <TextAppearAnimation>
              <p className="text-appear md:text-right">Words that win customers, Build trust &amp; increase revenue</p>
            </TextAppearAnimation>

            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/services" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Explore Our Services</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Explore Our Services</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {ServicesData.map((service) => (
          <ServiceCard
            id={service.id}
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            href={service.href}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesV15
