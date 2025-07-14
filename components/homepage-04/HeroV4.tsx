import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const HeroV4 = () => {
  return (
    <RevealWrapper
      as="section"
      className="relative overflow-hidden pb-20 pt-[110px] md:pb-24 md:pt-[150px] lg:pb-32 xl:pb-[180px] xl:pt-[180px]">
      <HeroGradientAnimation />
      <div className="container">
        <h1 className="text-center text-[80px] uppercase sm:text-[100px] md:text-[240px] lg:text-[340px] xl:text-[420px] xl:leading-[404px] xl:tracking-[-12.12px]">
          Rivor
        </h1>
      </div>
    </RevealWrapper>
  )
}

export default HeroV4
