import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const HeroV5 = () => {
  return (
    <section className="relative overflow-hidden pb-7 pt-32 md:pb-16 lg:pb-[88px] lg:pt-[140px] xl:pb-[100px] xl:pt-[180px]">
      <RevealWrapper className="flex flex-col items-center justify-center gap-y-8 pl-10 md:justify-between xl:flex-row">
        <div className="container max-sm:!-ml-[5%] lg:!ml-[10%] xl:!ml-[7%]">
          <p className="font-poppins flex items-center gap-5 text-sm font-normal uppercase leading-6 tracking-[3px] max-md:justify-center">
            SEO Agency
          </p>
          <h1 className="mt-2 block sm:mt-6 md:hidden">We are the brilliants in terms of digital marketing</h1>
          <h1 className="mt-6 hidden text-5xl font-medium md:block lg:text-6xl xl:text-7xl">
            We are the <br />
            brilliants in terms <br />
            of digital marketing
          </h1>
          <div className="mt-6">
            <figure className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={36} height={37} viewBox="0 0 36 37" fill="none">
                  <circle cx={18} cy="18.457" r={18} className="fill-backgroundBody dark:fill-secondary" />
                  <circle
                    cx={18}
                    cy="18.457"
                    r="17.5"
                    className="stroke-[#181818] dark:stroke-[#EDF0F5]"
                    strokeOpacity="0.1"
                  />
                  <path
                    d="M25.5754 16.1759L20.6567 15.4234L18.4521 10.7204C18.2874 10.3692 17.7121 10.3692 17.5474 10.7204L15.3434 15.4234L10.4248 16.1759C10.0208 16.238 9.85943 16.73 10.1428 17.0205L13.7161 20.6886L12.8714 25.8743C12.8041 26.2863 13.2434 26.5954 13.6068 26.3931L18.0001 23.9615L22.3934 26.3938C22.7534 26.5941 23.1967 26.2909 23.1287 25.875L22.2841 20.6893L25.8574 17.0211C26.1407 16.73 25.9787 16.238 25.5754 16.1759Z"
                    fill="#12D8CC"
                  />
                </svg>
              </span>
              <figcaption>
                <p className="text-base font-semibold leading-[1.1] text-secondary dark:text-backgroundBody">4.5</p>
                <p className="mt-1 text-sm leading-[1.1] text-secondary dark:text-backgroundBody">Positive Review</p>
              </figcaption>
            </figure>

            <div className="my-3 flex [&>*:not(:first-child)]:-ml-4">
              <img src="/images/home-5/review-1.png" alt="User" className="size-[52px]" />
              <img src="/images/home-5/review-2.png" alt="User" className="size-[52px]" />
              <img src="/images/home-5/review-3.png" alt="User" className="size-[52px]" />
              <Link
                href="#"
                className="group relative size-[52px] cursor-pointer rounded-full border-[1.9px] border-backgroundBody bg-secondary p-4 dark:bg-backgroundBody">
                <figure>
                  <img
                    src="/images/home-5/ArrowUpRight.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:hidden"
                  />
                  <img
                    src="/images/home-5/ArrowUpRight.svg"
                    alt="Arrow Icon"
                    className="absolute inline -translate-x-5 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[2px] group-hover:translate-y-[1%] group-hover:opacity-100 dark:hidden"
                  />
                  <img
                    src="/images/home-5/ArrowUpRight-dark.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:inline"
                  />
                  <img
                    src="/images/home-5/ArrowUpRight-dark.svg"
                    alt="Arrow Icon"
                    className="absolute hidden -translate-x-5 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[2px] group-hover:translate-y-[1%] group-hover:opacity-100 dark:inline"
                  />
                </figure>
              </Link>
            </div>
            <p className="text-base leading-[1.2] text-secondary dark:text-backgroundBody">
              <span className="text-primary">Trusted by 18k+</span> <br />
              Clients Across the Globe
            </p>
          </div>

          <ul className="mt-14 flex list-none justify-start">
            <li className="block w-full text-center md:inline-block md:w-auto">
              <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
                <div className="rv-button-top">
                  <span>GET MY FREE PROPOSAL</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">GET MY FREE PROPOSAL</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <figure>
          <img src="/images/home-5/hero-img.png" alt="Hero" />
        </figure>
      </RevealWrapper>
    </section>
  )
}

export default HeroV5
