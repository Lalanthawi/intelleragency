import RevealWrapper from '../animation/RevealWrapper'

const TravelImagesGallery = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-2 lg:gap-3.5 2xl:gap-7">
          <RevealWrapper className="reveal-me col-span-4 row-span-1">
            <img
              src="/images/travel-blogs/travel-gallary-1.png"
              alt="Van in mountains"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-4 row-span-2">
            <img
              src="/images/travel-blogs/travel-gallary-2.png"
              alt="Building on cliff edge"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-4 row-span-1">
            <img
              src="/images/travel-blogs/travel-gallary-5.png"
              alt="Mountain view"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-2 row-span-1">
            <img
              src="/images/travel-blogs/travel-gallary-3.png"
              alt="Travel finances"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-2 row-span-1">
            <img
              src="/images/travel-blogs/travel-gallary-4.png"
              alt="Person in forest"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper className="reveal-me col-span-4 row-span-1">
            <img
              src="/images/travel-blogs/travel-gallary-6.png"
              alt="City tram"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default TravelImagesGallery
