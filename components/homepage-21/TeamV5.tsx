import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import teamMemberV3 from '@/data/teamMemberV3.json'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Teams from '../aboutpage-02/Teams'

export interface PropTypeTeamMember {
  id?: string
  image?: string
  title?: string
  position?: string
}

const TeamV5: FC<PropTypeTeamMember> = () => {
  return (
    <section className="py-14 md:py-16 lg:py-[150px] xl:py-[200px]">
      <div className="container w-full">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2 text-secondary dark:text-white max-sm:text-3xl">
                Meet our CEO &amp;
                <span className="font-instrument italic"> Lead Advocate </span>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="max-md:w-full md:max-w-[470px]">
            <TextAppearAnimation02>
              <p className="text-appear-2 max-w-lg text-secondary/70 dark:text-backgroundBody/70 max-md:text-left md:place-self-end md:text-right">
                The people who make the magic happen behind the camera
              </p>
            </TextAppearAnimation02>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="max-lg:hidden lg:block">
          <Teams team={teamMemberV3} />
        </div>

        {/* Mobile/Tablet Layout (below lg) */}
        <div className="max-lg:block lg:hidden">
          <div className="relative grid grid-cols-1 items-center justify-center gap-10 sm:grid-cols-2">
            {teamMemberV3.map((member) => (
              <RevealWrapper key={member.id} className="relative">
                <Image
                  src={member.image}
                  alt={`Team member - ${member.title}`}
                  className="h-full w-full object-cover shadow-lg"
                  width={384}
                  height={384}
                />
                <div className="absolute bottom-0 left-0 right-0 m-5 bg-primary px-4 py-4">
                  <Link href="/team-details">
                    <div className="project-title mb-1">
                      <h3 className="dark:text-secondary lg:text-4xl lg:leading-[1.2] lg:tracking-[-1.08px]">
                        {member.title}
                      </h3>
                    </div>
                  </Link>
                  <p className="text-lg font-light leading-5 text-black/70 dark:text-black/70">{member.position}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamV5
