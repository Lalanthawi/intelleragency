import RevealWrapper from '@/components/animation/RevealWrapper'
import CounterAnimation from '@/utils/CounterAnimation'

const AchievementGridV2 = () => {
  const stats = [
    { number: 25, suffix: '', label: 'Years of industry experience' },
    { number: 50, suffix: '+', label: 'Results oriented copy' },
    { number: 30, suffix: '%', label: 'Performance optimized' },
  ]

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <RevealWrapper className="flex flex-wrap items-center justify-center gap-[30px]">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="flex min-h-[180px] min-w-[280px] flex-col items-center justify-center space-y-3 border p-5 dark:border-dark md:p-[30px] lg:min-h-[212px] lg:min-w-[320px]"
              id="counter">
              <h2 className="lg:text-7xl">
                <CounterAnimation number={stat.number} /> {stat.suffix}
              </h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AchievementGridV2
