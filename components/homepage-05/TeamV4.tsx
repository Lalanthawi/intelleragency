import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const teamData = [
  {
    id: 1,
    name: 'Theresa Webb',
    position: 'Founder & CEO',
    image: '/images/team/team-2.png',
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'Creative Director',
    image: '/images/team/team-3.png',
  },
  {
    id: 3,
    name: 'Jane Smith',
    position: 'Marketing Manager',
    image: '/images/team/team-7.png',
  },
  {
    id: 4,
    name: 'Michael Brown',
    position: 'Lead Developer',
    image: '/images/team/team-4.png',
  },
  {
    id: 5,
    name: 'Emily Davis',
    position: 'UX/UI Designer',
    image: '/images/team/team-5.png',
  },
  {
    id: 6,
    name: 'David Wilson',
    position: 'Sales Executive',
    image: '/images/team/team-6.png',
  },
]

const TeamV4 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 lg:mb-20">
          <RevealWrapper
            as="p"
            className="text-center font-satoshi text-sm font-normal uppercase leading-6 tracking-[3px]">
            Team
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3 text-center lg:mt-5">The visionaries behind every frame</h2>
          </TextAppearAnimation>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.map((item) => (
            <div key={item.id} className="group">
              <Link href={`/team/${item.id}`}>
                <figure className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-auto w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  />
                </figure>
                <figcaption className="mt-6">
                  <h6 className="text-[25px] leading-[1.2] tracking-[-0.72px]">{item.name}</h6>
                  <p className="text-base leading-[1.4]">{item.position}</p>
                </figcaption>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamV4
