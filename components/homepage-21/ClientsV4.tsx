import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Image from 'next/image'
import TextAppearAnimation02 from '../animation/TextAppearAnimation02'

const clientLogos = [
  {
    id: 1,
    lightSrc: '/images/marquee-img/invert.svg',
    darkSrc: '/images/marquee-img/invert-dark.svg',
    alt: 'Invert Logo',
  },
  {
    id: 2,
    lightSrc: '/images/marquee-img/greenish.svg',
    darkSrc: '/images/marquee-img/greenish-dark.svg',
    alt: 'Greenish Logo',
  },
  {
    id: 3,
    lightSrc: '/images/marquee-img/invert.svg',
    darkSrc: '/images/marquee-img/invert-dark.svg',
    alt: 'Invert Logo',
  },
  {
    id: 4,
    lightSrc: '/images/marquee-img/greenish.svg',
    darkSrc: '/images/marquee-img/greenish-dark.svg',
    alt: 'Greenish Logo',
  },
  {
    id: 5,
    lightSrc: '/images/marquee-img/invert.svg',
    darkSrc: '/images/marquee-img/invert-dark.svg',
    alt: 'Invert Logo',
  },
  {
    id: 6,
    lightSrc: '/images/marquee-img/greenish.svg',
    darkSrc: '/images/marquee-img/greenish-dark.svg',
    alt: 'Greenish Logo',
  },
  {
    id: 7,
    lightSrc: '/images/marquee-img/invert.svg',
    darkSrc: '/images/marquee-img/invert-dark.svg',
    alt: 'Invert Logo',
  },
  {
    id: 8,
    lightSrc: '/images/marquee-img/greenish.svg',
    darkSrc: '/images/marquee-img/greenish-dark.svg',
    alt: 'Greenish Logo',
  },
]

const ClientsV4 = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <TextAppearAnimation02>
            <h2 className="text-appear-2 my-3">
              Trusted by leading
              <span className="font-instrument italic"> businesses</span>
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation>
            <p className="text-appear">
              We have successfully represented Fortune 500 companies, small businesses, and individuals, earning
              clients' trust across industries.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="mx-auto grid max-w-4xl border-x border-t dark:border-dark max-md:grid-cols-2 md:grid-cols-4 max-md:[&>*:nth-child(2)]:border-r-0 [&>*:nth-child(4)]:border-r-0 max-md:[&>*:nth-child(6)]:border-r-0 [&>*:nth-child(8)]:border-r-0 [&>*]:border-b [&>*]:border-r dark:[&>*]:border-dark">
          {clientLogos.map((logo) => (
            <figure key={logo.id} className="px-12 py-8">
              <Image src={logo.lightSrc} alt={logo.alt} width={120} height={60} className="inline dark:hidden" />
              <Image src={logo.darkSrc} alt={logo.alt} width={120} height={60} className="hidden dark:inline" />
            </figure>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ClientsV4
