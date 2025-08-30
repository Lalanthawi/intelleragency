import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const data = [
  {
    id: 1,
    image: '/images/travel-blogs/travel-1.png',
    title: 'Budget travel with comfort.',
    description: 'Assistance whenever and wherever you need it.',
  },
  {
    id: 2,
    image: '/images/travel-blogs/travel-2.png',
    title: 'Luxury getaways for less.',
    description: 'Premium experiences at exceptional value.',
  },
  {
    id: 3,
    image: '/images/travel-blogs/travel-3.png',
    title: 'Honeymoon & Romantic getaways',
    description: 'Unforgettable experiences for thrill seekers.',
  },
]

const ExclusiveTravelDeals = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center lg:mb-16">
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 text-center">
              Limited-Time travel
              <i className="font-instrument">deals just </i>
              <br className="hidden md:block" />
              <i className="font-instrument">for you! </i>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <RevealWrapper key={item.id} as="figure" className="reveal-me relative">
              <img src={item.image} alt={item.title} className="h-auto w-full object-cover" />
              <div className="absolute bottom-10 left-[30px] md:bottom-2 xl:bottom-10">
                <h6 className="text-backgroundBody">{item.title}</h6>
                <p className="mb-11 mt-2.5 text-backgroundBody/70">{item.description}</p>
                <div className="mx-auto w-[90%] md:mx-0 md:w-auto">
                  <Link
                    href="/contact"
                    className="rv-button rv-button-primary rv-button-sm-v2 block text-center md:inline-block">
                    <div className="rv-button-top">
                      <span>Book Now</span>
                    </div>
                    <div className="rv-button-bottom">
                      <span>Book Now</span>
                    </div>
                  </Link>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExclusiveTravelDeals
