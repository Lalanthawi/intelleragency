import RevealWrapper from '@/components/animation/RevealWrapper'
import Link from 'next/link'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const PressFeatures = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative overflow-hidden bg-[url('/images/agent/press-feature.png')] bg-cover bg-fixed bg-center bg-no-repeat py-40">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,rgba(21,21,21,0.9)_0%,rgba(21,21,21,0.9)_100%)]" />

        <div className="container relative z-10 text-center">
          <TextAppearAnimation>
            <h2 className="text-appear-2 text-backgroundBody max-md:text-5xl">
              <i className="font-instrument italic text-inherit">outlets</i>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex min-h-[100px] min-w-[200px] items-center justify-center border border-dark">
              <img src="/images/icons/forbes.svg" alt="forbes" />
            </div>
            <div className="flex min-h-[100px] min-w-[200px] items-center justify-center border border-dark">
              <img src="/images/icons/wsj.svg" alt="wsj" />
            </div>
            <div className="flex min-h-[100px] min-w-[200px] items-center justify-center border border-dark">
              <img src="/images/icons/cnn.svg" alt="cnn" />
            </div>
            <div className="flex min-h-[100px] min-w-[200px] items-center justify-center border border-dark">
              <img src="/images/icons/tc.svg" alt="tc" />
            </div>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-7 md:mt-9 lg:mt-14">
            <Link href="/contact" className="rv-button rv-button-secondary block md:inline-block">
              <div className="rv-button-top text-center">
                <span>View Our Press Features</span>
              </div>
              <div className="rv-button-bottom text-center">
                <span className="text-nowrap">View Our Press Features</span>
              </div>
            </Link>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default PressFeatures
