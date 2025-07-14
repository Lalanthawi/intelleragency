import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const OurExpertiseV2 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Why Choose Rivor</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              Strategic thinking
              <i className="font-instrument"> Creative </i>
              <br className="hidden md:block" />
              <i className="font-instrument">execution</i>
              Lasting impact.
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">Let me know if you need something more tailored!</p>
          </TextAppearAnimation>
        </div>
        <article>
          <RevealWrapper className="reveal-me mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            <div className="flex-1 border px-[30px] py-20 dark:border-dark">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                  <rect width={60} height={60} className="fill-backgroundBody dark:fill-secondary" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.6422 28.5873L26.8523 21.4072L23.0599 28.5873C22.7916 29.1124 22.4037 29.5671 21.9274 29.9148C21.4483 30.2643 20.8946 30.498 20.31 30.5973L12.5001 32.1224L17.9525 38.6224C18.3203 39.0237 18.5974 39.4995 18.765 40.0174C18.9312 40.5343 18.9833 41.081 18.9175 41.62L17.88 50.0001L25.0724 46.535C25.6282 46.2696 26.2364 46.132 26.8523 46.1325C27.4307 46.132 28.0007 46.2701 28.5148 46.535L35.8696 49.7851L34.8297 41.5C34.7639 40.961 34.8159 40.4143 34.9822 39.8974C35.1497 39.3795 35.4268 38.9037 35.7946 38.5024L41.202 32.1124L33.3922 30.5873C32.8075 30.488 32.2539 30.2543 31.7747 29.9048C31.2997 29.5599 30.9119 29.1088 30.6422 28.5873Z"
                    className="stroke-secondary dark:stroke-backgroundBody"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M46.4725 11.8704C46.7073 11.6365 46.708 11.2566 46.4741 11.0218C46.2402 10.7871 45.8603 10.7864 45.6256 11.0203L46.4725 11.8704ZM36.9283 19.6854C36.6935 19.9192 36.6928 20.2991 36.9267 20.5339C37.1606 20.7686 37.5405 20.7693 37.7752 20.5355L36.9283 19.6854ZM47.9234 19.09C48.1582 18.8562 48.159 18.4763 47.9252 18.2415C47.6914 18.0067 47.3115 18.0059 47.0767 18.2397L47.9234 19.09ZM41.2768 24.0147C41.042 24.2486 41.0412 24.6284 41.275 24.8633C41.5088 25.0981 41.8887 25.0989 42.1235 24.8651L41.2768 24.0147ZM39.2259 10.4252C39.4607 10.1914 39.4615 9.81146 39.2277 9.57665C38.9939 9.34183 38.614 9.34102 38.3791 9.57483L39.2259 10.4252ZM32.5768 15.3524C32.342 15.5862 32.3411 15.9661 32.5749 16.2009C32.8088 16.4357 33.1887 16.4366 33.4235 16.2027L32.5768 15.3524ZM45.6256 11.0203L36.9283 19.6854L37.7752 20.5355L46.4725 11.8704L45.6256 11.0203ZM47.0767 18.2397L41.2768 24.0147L42.1235 24.8651L47.9234 19.09L47.0767 18.2397ZM38.3791 9.57483L32.5768 15.3524L33.4235 16.2027L39.2259 10.4252L38.3791 9.57483Z"
                    className="fill-secondary dark:fill-backgroundBody"
                  />
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">Startup focused expertise</h5>
              <p>We understand what it takes to launch and grow a business..</p>
            </div>

            <div className="flex-1 border px-[30px] py-20 dark:border-dark">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none">
                  <rect
                    width={60}
                    height={60}
                    transform="translate(0.333252)"
                    className="fill-backgroundBody dark:fill-secondary"
                  />
                  <path
                    d="M31.0833 12.5C31.0833 12.0858 30.7475 11.75 30.3333 11.75C29.919 11.75 29.5833 12.0858 29.5833 12.5H31.0833ZM29.5833 47.5C29.5833 47.9142 29.919 48.25 30.3333 48.25C30.7475 48.25 31.0833 47.9142 31.0833 47.5H29.5833ZM37.7532 16.875C37.7532 16.4608 37.4174 16.125 37.0032 16.125C36.589 16.125 36.2532 16.4608 36.2532 16.875H37.7532ZM36.2532 43.125C36.2532 43.5392 36.589 43.875 37.0032 43.875C37.4174 43.875 37.7532 43.5392 37.7532 43.125H36.2532ZM44.4133 21.25C44.4133 20.8358 44.0775 20.5 43.6633 20.5C43.2491 20.5 42.9133 20.8358 42.9133 21.25H44.4133ZM42.9133 38.75C42.9133 39.1642 43.2491 39.5 43.6633 39.5C44.0775 39.5 44.4133 39.1642 44.4133 38.75H42.9133ZM51.0833 25.625C51.0833 25.2108 50.7475 24.875 50.3333 24.875C49.919 24.875 49.5833 25.2108 49.5833 25.625H51.0833ZM49.5833 34.375C49.5833 34.7892 49.919 35.125 50.3333 35.125C50.7475 35.125 51.0833 34.7892 51.0833 34.375H49.5833ZM22.9133 43.125C22.9133 43.5392 23.2491 43.875 23.6633 43.875C24.0775 43.875 24.4133 43.5392 24.4133 43.125H22.9133ZM24.4133 16.875C24.4133 16.4608 24.0775 16.125 23.6633 16.125C23.2491 16.125 22.9133 16.4608 22.9133 16.875H24.4133ZM16.2532 38.75C16.2532 39.1642 16.589 39.5 17.0032 39.5C17.4174 39.5 17.7532 39.1642 17.7532 38.75H16.2532ZM17.7532 21.25C17.7532 20.8358 17.4174 20.5 17.0032 20.5C16.589 20.5 16.2532 20.8358 16.2532 21.25H17.7532ZM9.58325 34.375C9.58325 34.7892 9.91904 35.125 10.3333 35.125C10.7475 35.125 11.0833 34.7892 11.0833 34.375H9.58325ZM11.0833 25.625C11.0833 25.2108 10.7475 24.875 10.3333 24.875C9.91904 24.875 9.58325 25.2108 9.58325 25.625H11.0833ZM29.5833 12.5V47.5H31.0833V12.5H29.5833ZM36.2532 16.875V43.125H37.7532V16.875H36.2532ZM42.9133 21.25V38.75H44.4133V21.25H42.9133ZM49.5833 25.625V34.375H51.0833V25.625H49.5833ZM24.4133 43.125V16.875H22.9133V43.125H24.4133ZM17.7532 38.75V21.25H16.2532V38.75H17.7532ZM11.0833 34.375V25.625H9.58325V34.375H11.0833Z"
                    className="fill-secondary dark:fill-backgroundBody"
                  />
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">Fundraising ready solutions</h5>
              <p>Helping startups craft compelling pitch decks and brand messaging.</p>
            </div>

            <div className="flex-1 border px-[30px] py-20 dark:border-dark">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none">
                  <rect
                    width={60}
                    height={60}
                    transform="translate(0.666504)"
                    className="fill-backgroundBody dark:fill-secondary"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.2636 10L14.9521 27.7771H24.2636L17.2807 50L46.3807 27.7771H33.5779L40.5607 10H24.2636Z"
                    className="stroke-secondary dark:stroke-backgroundBody"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h5 className="mb-2.5 mt-5">Data driven approach</h5>
              <p>Every decision is backed by insights and research.</p>
            </div>
          </RevealWrapper>
        </article>
        <RevealWrapper as="ul" className="reveal-me mt-7 justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/team" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>Start Your Journey</span>
              </div>
              <div className="rv-button-bottom">
                <span>Start Your Journey</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default OurExpertiseV2
