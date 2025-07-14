import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const travelBenefits = [
  {
    title: 'Tailored experiences',
    description: 'Every trip is customized to suit your interests.',
  },
  {
    title: 'Best price guarantee',
    description: 'Exclusive travel deals and unbeatable offers.',
  },
  {
    title: '24/7 Support',
    description: 'Assistance whenever and wherever you need it.',
  },
  {
    title: 'Expert local guides',
    description: 'Authentic experiences with trusted professionals.',
  },
  {
    title: 'Hassle-Free travel planning',
    description: 'We take care of everything, so you don’t have to.',
  },
]

const WhyChooseUsV2 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear">
                Why choose Rivor
                <i className="font-instrument"> travels? </i>
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
                    <span>Start Planning</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Start Planning</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:gap-14 lg:gap-16 xl:gap-x-20 2xl:gap-x-[130px]">
          <div className="md:w-1/2 [&>*]:border-b">
            {travelBenefits.map((benefit, index) => (
              <RevealWrapper key={index} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{benefit.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">{benefit.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="reveal-me md:w-1/2">
            <img src="/images/home-5/why-rivor-v2.png" alt="AI Solutions" className="h-full w-full" />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsV2
