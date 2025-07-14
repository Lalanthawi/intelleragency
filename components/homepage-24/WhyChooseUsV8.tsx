import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WhyChooseUsV8 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <TextAppearAnimation>
            <h2 className="text-appear lg:leading-[1.1]">
              Why choose
              <span className="font-instrument italic"> rivor? </span>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-3 text-lg font-normal text-black/70 dark:text-backgroundBody/70">
              At Rivor, we don’t just plan events; we create experiences. Here’s why our clients trust us
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me grid grid-cols-12 gap-[30px]">
          <div className="col-span-12 flex-1 border px-[30px] py-10 dark:border-dark lg:col-span-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none">
                <rect
                  width={60}
                  height={60}
                  transform="translate(0.5)"
                  className="fill-backgroundBody dark:fill-secondary"
                />
                <path
                  d="M31.25 12.5C31.25 12.0858 30.9142 11.75 30.5 11.75C30.0858 11.75 29.75 12.0858 29.75 12.5H31.25ZM29.75 47.5C29.75 47.9142 30.0858 48.25 30.5 48.25C30.9142 48.25 31.25 47.9142 31.25 47.5H29.75ZM37.9219 16.875C37.9219 16.4608 37.5861 16.125 37.1719 16.125C36.7577 16.125 36.4219 16.4608 36.4219 16.875H37.9219ZM36.4219 43.125C36.4219 43.5392 36.7577 43.875 37.1719 43.875C37.5861 43.875 37.9219 43.5392 37.9219 43.125H36.4219ZM44.5781 21.25C44.5781 20.8358 44.2423 20.5 43.8281 20.5C43.4139 20.5 43.0781 20.8358 43.0781 21.25H44.5781ZM43.0781 38.75C43.0781 39.1642 43.4139 39.5 43.8281 39.5C44.2423 39.5 44.5781 39.1642 44.5781 38.75H43.0781ZM51.25 25.625C51.25 25.2108 50.9142 24.875 50.5 24.875C50.0858 24.875 49.75 25.2108 49.75 25.625H51.25ZM49.75 34.375C49.75 34.7892 50.0858 35.125 50.5 35.125C50.9142 35.125 51.25 34.7892 51.25 34.375H49.75ZM23.0781 43.125C23.0781 43.5392 23.4139 43.875 23.8281 43.875C24.2423 43.875 24.5781 43.5392 24.5781 43.125H23.0781ZM24.5781 16.875C24.5781 16.4608 24.2423 16.125 23.8281 16.125C23.4139 16.125 23.0781 16.4608 23.0781 16.875H24.5781ZM16.4219 38.75C16.4219 39.1642 16.7577 39.5 17.1719 39.5C17.5861 39.5 17.9219 39.1642 17.9219 38.75H16.4219ZM17.9219 21.25C17.9219 20.8358 17.5861 20.5 17.1719 20.5C16.7577 20.5 16.4219 20.8358 16.4219 21.25H17.9219ZM9.75 34.375C9.75 34.7892 10.0858 35.125 10.5 35.125C10.9142 35.125 11.25 34.7892 11.25 34.375H9.75ZM11.25 25.625C11.25 25.2108 10.9142 24.875 10.5 24.875C10.0858 24.875 9.75 25.2108 9.75 25.625H11.25ZM29.75 12.5V47.5H31.25V12.5H29.75ZM36.4219 16.875V43.125H37.9219V16.875H36.4219ZM43.0781 21.25V38.75H44.5781V21.25H43.0781ZM49.75 25.625V34.375H51.25V25.625H49.75ZM24.5781 43.125V16.875H23.0781V43.125H24.5781ZM17.9219 38.75V21.25H16.4219V38.75H17.9219ZM11.25 34.375V25.625H9.75V34.375H11.25Z"
                  className="stroke-secondary dark:stroke-backgroundBody"
                />
              </svg>
            </span>
            <h5 className="mb-3 mt-6">Industry experts</h5>
            <p className="text-base font-normal leading-[25.6px] text-black/70 dark:text-backgroundBody/70">
              Years of experience in business consulting
            </p>
          </div>
          <div className="col-span-12 flex-1 border px-[30px] py-10 dark:border-dark lg:col-span-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none">
                <rect
                  width={60}
                  height={60}
                  transform="translate(0.5)"
                  className="fill-backgroundBody dark:fill-secondary"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0966 10L14.7852 27.7771H24.0966L17.1137 50L46.2137 27.7771H33.4109L40.3937 10H24.0966Z"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h5 className="mb-3 mt-6">Proven results</h5>
            <p className="text-base font-normal leading-[25.6px] text-black/70 dark:text-backgroundBody/70">
              Data-driven strategies that work
            </p>
          </div>
          <div className="col-span-12 flex-1 border px-[30px] py-10 dark:border-dark lg:col-span-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none">
                <rect
                  width={60}
                  height={60}
                  transform="translate(0.5)"
                  className="fill-backgroundBody dark:fill-secondary"
                />
                <path
                  d="M10.1141 20.7855C9.75894 20.9986 9.64377 21.4593 9.85688 21.8144C10.07 22.1696 10.5307 22.2848 10.8859 22.0717L10.1141 20.7855ZM24.7857 12.8571L25.2357 12.2571C24.9918 12.0742 24.6613 12.0571 24.3998 12.214L24.7857 12.8571ZM36.2143 21.4286L35.7643 22.0286C36.0379 22.2338 36.4157 22.2279 36.6828 22.0142L36.2143 21.4286ZM50.9685 10.5857C51.292 10.3269 51.3444 9.85493 51.0857 9.53148C50.8269 9.20803 50.3549 9.15559 50.0315 9.41435L50.9685 10.5857ZM46.8934 50.0002C46.8934 50.4144 47.2292 50.7502 47.6434 50.7502C48.0576 50.7502 48.3934 50.4144 48.3934 50.0002H46.8934ZM48.3934 27.1431C48.3934 26.7289 48.0576 26.3931 47.6434 26.3931C47.2292 26.3931 46.8934 26.7289 46.8934 27.1431H48.3934ZM24.034 50.0002C24.034 50.4144 24.3698 50.7502 24.784 50.7502C25.1983 50.7502 25.534 50.4144 25.534 50.0002H24.034ZM25.534 27.1431C25.534 26.7289 25.1983 26.3931 24.784 26.3931C24.3698 26.3931 24.034 26.7289 24.034 27.1431H25.534ZM35.4637 50.0001C35.4637 50.4143 35.7995 50.7501 36.2137 50.7501C36.6279 50.7501 36.9637 50.4143 36.9637 50.0001H35.4637ZM36.9637 35.7144C36.9637 35.3001 36.6279 34.9644 36.2137 34.9644C35.7995 34.9644 35.4637 35.3001 35.4637 35.7144H36.9637ZM12.6083 50.0001C12.6083 50.4143 12.944 50.7501 13.3583 50.7501C13.7725 50.7501 14.1083 50.4143 14.1083 50.0001H12.6083ZM14.1083 35.7144C14.1083 35.3001 13.7725 34.9644 13.3583 34.9644C12.944 34.9644 12.6083 35.3001 12.6083 35.7144H14.1083ZM10.8859 22.0717L25.1716 13.5003L24.3998 12.214L10.1141 20.7855L10.8859 22.0717ZM24.3357 13.4571L35.7643 22.0286L36.6643 20.8286L25.2357 12.2571L24.3357 13.4571ZM36.6828 22.0142L50.9685 10.5857L50.0315 9.41435L35.7458 20.8429L36.6828 22.0142ZM48.3934 50.0002V27.1431H46.8934V50.0002H48.3934ZM25.534 50.0002V27.1431H24.034V50.0002H25.534ZM36.9637 50.0001V35.7144H35.4637V50.0001H36.9637ZM14.1083 50.0001V35.7144H12.6083V50.0001H14.1083Z"
                  className="stroke-secondary dark:stroke-backgroundBody"
                />
              </svg>
            </span>
            <h5 className="mb-3 mt-6">Customized solutions</h5>
            <p className="text-base font-normal leading-[25.6px] text-black/70 dark:text-backgroundBody/70">
              Tailored approaches for every business
            </p>
          </div>
          <div className="col-span-12 flex-1 border px-[30px] py-10 dark:border-dark lg:col-span-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none">
                <rect
                  width={60}
                  height={60}
                  transform="translate(0.5)"
                  className="fill-backgroundBody dark:fill-secondary"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.5002 16.6662C30.5002 20.3476 27.5157 23.3319 23.8341 23.3319C20.1525 23.3319 17.168 20.3476 17.168 16.6662C17.168 12.9848 20.1525 10.0005 23.8341 10.0005C27.5157 10.0005 30.5002 12.9848 30.5002 16.6662Z"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.1673 40.6654C37.1673 45.8083 31.1983 49.9997 23.8322 49.9997C16.4661 49.9997 10.5 45.8197 10.5 40.6654C10.5 35.5111 16.4689 31.334 23.8351 31.334C31.2012 31.334 37.1673 35.5111 37.1673 40.6654Z"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.6137 22.8901C44.6137 25.0993 42.8228 26.8901 40.6135 26.8901C38.4042 26.8901 36.6133 25.0993 36.6133 22.8901C36.6133 20.681 38.4042 18.8901 40.6135 18.8901C41.6744 18.8901 42.6919 19.3116 43.4421 20.0617C44.1923 20.8119 44.6137 21.8293 44.6137 22.8901Z"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.5 47.3333C46.5395 47.6649 50.0994 44.6977 50.5005 40.6647C50.0979 36.6328 46.5385 33.6672 42.5 33.999"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h5 className="mb-3 mt-6">End to end support</h5>
            <p className="text-base font-normal leading-[25.6px] text-black/70 dark:text-backgroundBody/70">
              From planning to execution
            </p>
          </div>
        </RevealWrapper>
        <RevealWrapper as="ul" className="reveal-me mt-7 justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Schedule a Free Call</span>
              </div>
              <div className="rv-button-bottom text-nowrap">
                <span>Schedule a Free Call</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhyChooseUsV8
