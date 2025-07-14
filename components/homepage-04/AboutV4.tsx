import CounterList from '@/data/counterData.json'
import aboutImg from '@/public/images/portfolio/about-banner.png'
import CounterAnimation from '@/utils/CounterAnimation'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
const { CounterData } = CounterList

const AboutV4 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-20 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-40 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <div className="mb-10 flex flex-col justify-center gap-x-16 gap-y-6 border-y py-6 dark:border-dark max-md:items-center md:mb-[70px] md:flex-row md:justify-between md:py-10">
          <h3 className="text-center max-md:text-3xl md:flex-1">Join in the journey</h3>
          <div className="flex gap-9 max-md:flex-wrap max-md:justify-center md:gap-[60px]">
            {CounterData.map((item) => (
              <div key={item.id}>
                <h4 className="mb-2 text-center font-normal leading-[1.1] md:text-[47px] lg:mb-5 lg:text-[54px] lg:leading-[1.2] xl:text-[64px]">
                  <CounterAnimation number={Number(item.number)} />
                  <span>{item.rightIcon}</span>
                </h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <RevealWrapper className="rv-badge mb-2">
            <span className="rv-badge-text">About</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h3 className="text-appear mb-8 text-3xl leading-tight sm:text-[34px] md:text-[44px] lg:mb-[52px] lg:text-[54px] xl:text-[64px] xl:leading-[1.1]">
              A few words about me
            </h3>
          </TextAppearAnimation>
          <RevealWrapper className="flex flex-col gap-x-16 gap-y-16 lg:flex-row">
            <Image src={aboutImg} alt="About me" className="max-lg:w-full" />
            <div>
              <p className="text-lg leading-[1.6] tracking-[0.36px]">
                At Rivor Travels, we believe that travel is more than just visiting new places—it's about creating
                unforgettable memories. With years of experience, global connections, and a passion for exploration, we
                specialize in designing customized itineraries that match your style, budget, and dreams.
              </p>
              <p className="mb-14 mt-5 text-lg leading-[1.6] tracking-[0.36px]">
                Whether capturing the unspoken love between two souls, the vibrant energy of bustling city streets, or
                the tender innocence of a child's gaze, each frame becomes a testament to my relentless pursuit of
                visual excellence.
              </p>
              <ul>
                <li>
                  <Link href="/about" className="rv-button rv-button-white block text-center md:inline-block">
                    <div className="rv-button-top">
                      <span>Meet Our Experts</span>
                    </div>
                    <div className="rv-button-bottom">
                      <span>Meet Our Experts</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutV4
