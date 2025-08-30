import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const data = [
  {
    id: 1,
    title: 'Strategy Session',
    description: 'Understanding your brand’s goals and target audience.',
  },
  {
    id: 2,
    title: 'Content Creation',
    description: 'Designing high-impact posts, reels, and videos.',
  },
  {
    id: 3,
    title: 'Execution',
    description: 'Creating engaging brand and digital experiences.',
  },
  {
    id: 4,
    title: 'Optimization',
    description: 'Analyzing and refining strategies for maximum results.',
  },
]

const ProcessV9 = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-labelledby="process-heading">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">Our Process</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Proven steps to boost your
              <i className="font-instrument">social media growth.</i>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {data.map((item) => (
            <RevealWrapper key={item.id} className="w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="relative mx-auto grid min-h-[300px] grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-[72px] bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody/20">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-backgroundBody">
                    Step {item.id.toString().padStart(2, '0')}
                  </span>
                </div>
                <h6 className="text-2xl font-normal leading-[1.1] text-black dark:text-white">{item.title}</h6>
                <p className="text-base font-normal leading-[1.3] text-black/70 dark:text-backgroundBody/70">
                  {item.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper className="mt-7 text-center md:mt-14">
          <Link
            href="/contact"
            className="rv-button rv-button-primary mx-auto block w-full md:inline-block md:w-auto"
            aria-label="Start your social media growth journey with us">
            <div className="rv-button-top">
              <span>Let's Start Growing</span>
            </div>
            <div className="rv-button-bottom text-nowrap">
              <span>Let's Start Growing</span>
            </div>
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV9
