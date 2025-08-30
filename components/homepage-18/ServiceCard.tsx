import RevealWrapper from '@/components/animation/RevealWrapper'
import { ArrowIcon } from '@/components/homepage-18/Icons'
import { ServiceCardProps } from '@/components/homepage-18/ServicesV15'
import Link from 'next/link'
import React from 'react'

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href, id }) => {
  return (
    <RevealWrapper className="reveal-me group border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]">
      <Link href={href}>
        <span>{icon}</span>
        <h5 className="mb-2 mt-4 lg:mb-3 lg:mt-6">{title}</h5>
        <p className="mb-20 lg:mb-[106px]">{description}</p>
        <div className="flex items-center justify-center overflow-hidden border p-8 transition-colors duration-[400ms] ease-team-bezier group-hover:bg-secondary dark:border-dark dark:group-hover:bg-backgroundBody max-lg:size-16 lg:h-24 lg:w-[92px]">
          <ArrowIcon />
        </div>
      </Link>
    </RevealWrapper>
  )
}

export default ServiceCard
