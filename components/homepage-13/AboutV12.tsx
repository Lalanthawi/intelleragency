import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const AboutV12 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Who We Are</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Crafting personalized <br />
              <i className="font-instrument">travel experiences</i>
            </h2>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="mt-8 flex flex-col items-center justify-between gap-y-5 md:mt-16 md:flex-row md:gap-x-[30px]">
          <figure className="w-full md:h-[400px] md:w-[570px]">
            <img src="/images/home-3/about-banner.png" alt="about-banner" className="w-full" />
          </figure>
          <figcaption>
            <p className="max-w-xl">
              At Rivor Travels, we believe that travel is more than just visiting new places—it's about creating
              unforgettable memories. With years of experience, global connections, and a passion for exploration, we
              specialize in designing customized itineraries that match your style, budget, and dreams.
            </p>
            <ul className="mt-20 justify-self-start max-md:w-full md:mt-36">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/portfolio-agency/case-study" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>View Case Studies</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>View Case Studies</span>
                  </div>
                </Link>
              </li>
            </ul>
          </figcaption>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AboutV12
