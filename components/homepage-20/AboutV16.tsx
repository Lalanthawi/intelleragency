import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const AboutV16 = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[150px] xl:pb-[200px]" aria-labelledby="about-heading">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">About Us</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-6">Your social media growth partners.</h2>
          </TextAppearAnimation>
          <RevealWrapper as="p" className="mx-auto max-w-3xl">
            Social media success requires more than just posts—it needs strategy, creativity, and execution. We bring
            all three.
          </RevealWrapper>
          <RevealWrapper className="mt-7 justify-self-center max-md:w-full md:mt-14">
            <Link
              href="/team"
              className="rv-button rv-button-white mx-auto block w-full text-center md:inline-block md:w-auto"
              aria-label="Learn more about our team members">
              <div className="rv-button-top">
                <span>Meet the Team</span>
              </div>
              <div className="rv-button-bottom">
                <span>Meet the Team</span>
              </div>
            </Link>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutV16
