import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const AboutV13 = () => {
  return (
    <section className="relative pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <HeroGradientAnimation />
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">About</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-6">Pioneering creativity in film &amp; Media</h2>
          </TextAppearAnimation>
          <RevealWrapper as="h5">
            Rivor is a leading film production agency dedicated to crafting powerful visual narratives. With a team of
            visionary filmmakers, cinematographers, and VFX artists, we deliver world-class productions across feature
            films, commercials, documentaries, and branded content.
          </RevealWrapper>
          <RevealWrapper as="p" className="mx-auto mt-3 max-w-3xl">
            Our mission is simple: to create breathtaking cinematic experiences that captivate audiences and leave a
            lasting impact.
          </RevealWrapper>
          <RevealWrapper as="ul" className="mt-7 justify-self-center max-md:w-full md:mt-14">
            <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
              <Link href="/team" className="rv-button rv-button-white block md:inline-block">
                <div className="rv-button-top">
                  <span>Meet Our Team</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Meet Our Team</span>
                </div>
              </Link>
            </li>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutV13
