import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface ServicesType {
  slug: string
  content: string
  [key: string]: any
}
const photography: ServicesType[] = getMarkDownData('data/photography-studio/services')
const photographyServices = photography.filter((item) => item?.photography)

const ServicesV5 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <TextAppearAnimation>
            <h2 className="text-appear">My Services</h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[1170px]">
          {photographyServices.map((photoService, index) => (
            <Link href={`/photography-studio/services/${photoService.slug}`} key={photoService.slug} className="block">
              <div
                className={`group relative overflow-hidden border-x border-t bg-backgroundBody dark:border-dark dark:bg-dark ${index === photographyServices.length - 1 ? 'border-b' : ''} `}>
                <div className="group relative z-10 flex cursor-pointer items-center justify-between px-5 py-10 md:px-10 md:py-[60px]">
                  <h3 className="relative z-10 flex flex-col gap-x-32 gap-y-3 text-[25px] font-normal leading-[25.2px] md:flex-row md:items-center md:text-4xl md:leading-[1.2] lg:text-[42px] xl:text-5xl">
                    <span className="font-medium">{photoService.title}</span>
                    <p className="mt-2 max-w-lg pr-[2px] text-base md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                      {photoService.description}
                    </p>
                  </h3>

                  <div className="transform transition-transform duration-500 ease-in-out group-hover:rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path
                        d="M5 16H27"
                        className="stroke-black dark:stroke-white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 7L27 16L18 25"
                        className="stroke-black dark:stroke-white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <figure className="h-0 -translate-y-4 transform opacity-0 transition-all duration-700 ease-in-out group-hover:h-[110px] group-hover:translate-y-0 group-hover:opacity-100 md:group-hover:h-[160px] lg:group-hover:h-[230px]">
                    <img
                      src={photoService.thumbnail}
                      alt="Hover on Photography Services"
                      className="object-cover px-5 pb-5 pt-4 transition-all duration-700 ease-in-out md:px-10 md:pb-10"
                    />
                  </figure>
                </div>
              </div>
            </Link>
          ))}
        </RevealWrapper>
        <RevealWrapper as="ul" className="mt-14 flex justify-center">
          <li className="max-md:w-full">
            <Link href="/services" className="rv-button rv-button-white block text-center md:inline-block">
              <div className="rv-button-top">
                <span>Explore Services</span>
              </div>
              <div className="rv-button-bottom">
                <span>Explore Services</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ServicesV5
