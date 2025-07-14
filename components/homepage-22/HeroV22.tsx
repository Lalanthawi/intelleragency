import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const HeroV22 = () => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden lg:h-screen">
      <div className="absolute -bottom-4 left-0 h-full w-full bg-gradient-to-b from-[rgba(237,240,245,0.08)] to-[#EDF0F5] dark:from-[rgba(21,21,21,0.08)] dark:to-[#151515]" />
      <video
        preload="none"
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline>
        <source src="/video/promo.mp4" type="video/mp4" />
        <track src="subtitles/lawyer-hero-video-en.vtt" kind="subtitles" srcLang="en" label="English" />
        <track
          src="descriptions/lawyer-hero-video-desc.vtt"
          kind="descriptions"
          srcLang="en"
          label="English Descriptions"
        />
        Your browser does not support the video tag.
      </video>

      <RevealWrapper className="reveal-me container absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="rv-badge mb-3">
          <span className="rv-badge-text">Memories</span>
        </div>
        <h1 className="mb-3 max-md:leading-none max-sm:text-4xl">
          Seamless planning
          <br className="hidden md:block" />
          <i className="font-instrument text-inherit">exceptional events</i>
        </h1>
        <p className="mx-auto max-w-3xl">
          At Rivor Law Firm, we combine decades of experience with a relentless commitment to justice, ensuring you
          receive the expert legal counsel you deserve.
        </p>

        <div className="mt-7 flex list-none justify-center lg:mt-14">
          <div className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Book a Free Consultation</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Book a Free Consultation</span>
              </div>
            </Link>
          </div>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default HeroV22
