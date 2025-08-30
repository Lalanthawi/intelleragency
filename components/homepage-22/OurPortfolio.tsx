import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const portfolioImages = [
  {
    id: 1,
    src: 'images/marquee-img/our-portfolio-01.png',
    alt: 'client Logo',
  },
  {
    id: 2,
    src: 'images/marquee-img/our-portfolio-02.png',
    alt: 'client Logo',
  },
  {
    id: 3,
    src: 'images/marquee-img/our-portfolio-03.png',
    alt: 'client Logo',
  },
  {
    id: 4,
    src: 'images/marquee-img/our-portfolio-04.png',
    alt: 'client Logo',
  },
  {
    id: 5,
    src: 'images/marquee-img/our-portfolio-05.png',
    alt: 'client Logo',
  },
  {
    id: 6,
    src: 'images/marquee-img/our-portfolio-06.png',
    alt: 'client Logo',
  },
  {
    id: 7,
    src: 'images/marquee-img/our-portfolio-07.png',
    alt: 'client Logo',
  },
  {
    id: 8,
    src: 'images/marquee-img/our-portfolio-08.png',
    alt: 'client Logo',
  },
  {
    id: 9,
    src: 'images/marquee-img/our-portfolio-09.png',
    alt: 'client Logo',
  },
  {
    id: 10,
    src: 'images/marquee-img/our-portfolio-10.png',
    alt: 'client Logo',
  },
]

const OurPortfolio = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">Our Portfolio</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              A glimpse of our
              <i className="font-instrument">unforgettable </i>
              <br className="hidden md:block" />
              <i className="font-instrument">events </i>
            </h2>
          </TextAppearAnimation>
        </div>
      </div>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center justify-around gap-5 md:gap-[30px]">
            {portfolioImages.map((img) => (
              <div className="h-72 min-w-60 md:h-[460px] md:min-w-[370px]" key={img.id}>
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center justify-around gap-5 pt-[30px] md:gap-[30px]">
            {portfolioImages.toReversed().map((img) => (
              <div className="h-72 min-w-60 md:h-[460px] md:min-w-[370px]" key={img.id}>
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default OurPortfolio
