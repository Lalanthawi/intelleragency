import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    id: 1,
    title: 'Results driven PR strategies',
    description: 'We measure impact, not just impressions.',
  },
  {
    id: 2,
    title: 'Direct access to top media outlets',
    description: 'We have strong relationships with influential journalists.',
  },
  {
    id: 3,
    title: 'Proactive crisis management',
    description: 'Assistance whenever and wherever you need it.',
  },
  {
    id: 4,
    title: 'Tailored strategies for maximum ROI',
    description: 'Authentic experiences with trusted professionals.',
  },
  {
    id: 5,
    title: 'Industry leading PR experts',
    description: "We take care of everything, so you don't have to.",
  },
]
const WhyChooseUsV8 = () => {
  return (
    <section className="relative overflow-hidden py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear">
                Why choose
                <i className="font-instrument"> Rivor? </i>
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="w-full md:max-w-80 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                What travel details do you need? Flight info, itinerary, expenses, or something else?
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Talk to an Expert</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Talk to an Expert</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:gap-14 lg:gap-16 xl:gap-x-20 2xl:gap-x-[130px]">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b">
            {features.map((feature) => (
              <RevealWrapper key={feature.id} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{feature.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">{feature.description}</p>
              </RevealWrapper>
            ))}

            <RevealWrapper className="reveal-me mt-7 md:mt-9 lg:mt-14">
              <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
                <div className="rv-button-top text-center">
                  <span>Talk to an Expert</span>
                </div>
                <div className="rv-button-bottom text-center">
                  <span className="text-nowrap">Talk to an Expert</span>
                </div>
              </Link>
            </RevealWrapper>
          </div>

          <RevealWrapper as="figure" className="reveal-me md:w-1/2">
            <Image
              src="/images/home-5/why-rivor-v3.png"
              alt="Why Choose Rivor"
              width={600}
              height={700}
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsV8
