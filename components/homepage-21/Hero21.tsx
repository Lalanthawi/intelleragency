import RevealWrapper from '@/components/animation/RevealWrapper'
import Link from 'next/link'

const Hero21 = () => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden lg:h-screen">
      <div className="absolute -bottom-4 left-0 h-full w-full bg-gradient-to-b from-dark/20 to-dark" />
      <video className="absolute left-0 top-0 z-[-1] h-full w-full object-cover" autoPlay muted loop>
        <source src="/images/lawyer-hero-video.mp4" type="video/mp4" />
        <track src="/subtitles/lawyer-hero-video-en.vtt" kind="subtitles" srcLang="en" label="English" />
        <track
          src="/descriptions/lawyer-hero-video-desc.vtt"
          kind="descriptions"
          srcLang="en"
          label="English Descriptions"
        />
        Your browser does not support the video tag.
      </video>
      {/* Hero Content */}
      <RevealWrapper className="reveal-me container absolute left-1/3 top-1/2 z-40 -translate-x-1/3 -translate-y-1/2">
        <h1 className="mb-3 text-backgroundBody max-md:leading-none max-sm:text-4xl">
          Your trusted legal <br className="hidden md:block" />
          Advocates –<br className="hidden md:block" />
          <i className="font-instrument text-inherit">Protecting your future</i>
        </h1>
        <p className="max-w-3xl text-backgroundBody/70 max-sm:text-sm">
          At Rivor Law Firm, we combine decades of experience with a relentless commitment to justice, ensuring you
          receive the expert legal counsel you deserve.
        </p>
        {/* Primary CTA Button */}
        <ul className="mt-7 flex list-none justify-start lg:mt-14">
          <li className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Request a Free Consultation</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Request a Free Consultation</span>
              </div>
            </Link>
          </li>
        </ul>
      </RevealWrapper>
    </section>
  )
}

export default Hero21
