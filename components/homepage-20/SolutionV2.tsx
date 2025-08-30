'use client'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const data = [
  {
    id: 1,
    title: 'Content creation',
    description: 'Engaging posts, reels, TikToks, and high-quality visuals.',
  },
  {
    id: 2,
    title: 'Influencer marketing',
    description: 'Collaborate with top influencers for brand awareness.',
  },
  {
    id: 3,
    title: 'Paid social ads',
    description: 'Facebook, Instagram, TikTok, and LinkedIn ads for maximum ROI.',
  },
  {
    id: 4,
    title: 'Social media strategy',
    description: 'Develop tailored strategies to enhance online presence.',
  },
  {
    id: 5,
    title: 'Analytics & Reporting',
    description: 'Detailed insights to measure campaign success.',
  },
  {
    id: 6,
    title: 'Community management',
    description: 'Engage and grow your audience through active community interaction.',
  },
  {
    id: 7,
    title: 'Email marketing',
    description: 'Craft targeted email campaigns to boost engagement and conversions.',
  },
  {
    id: 8,
    title: 'Crisis management',
    description: 'Manage and mitigate crises effectively to protect brand reputation.',
  },
]

const SolutionV2 = () => {
  const { contentRef, triggerRef } = useHorizontalScroll({
    extraScroll: 0,
  })

  return (
    <section
      ref={triggerRef}
      className="service-section overflow-hidden bg-[#CBE8DF] pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
      aria-labelledby="solutions-heading">
      <div className="container">
        <div className="grid grid-cols-12 items-start gap-y-3 md:gap-x-8">
          <div className="col-span-12 lg:col-span-7">
            <TextAppearAnimation>
              <h2 className="text-appear text-left text-secondary dark:text-secondary max-md:text-3xl max-sm:text-3xl">
                Social media <br />
                <span className="font-instrument italic text-secondary dark:text-secondary">solutions for</span>
                <span className="font-instrument italic text-secondary dark:text-secondary">every brand.</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <TextAppearAnimation>
              <p className="text-appear text-secondary/70 dark:text-secondary/70">
                Our agency has been the trusted partner for businesses looking to maximize their social media presence.
                Our comprehensive suite of solutions includes:
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-7 md:mt-14">
              <Link
                href="/services"
                className="rv-button rv-button-white mx-auto block w-full text-center md:inline-block md:w-auto"
                aria-label="View our detailed service offerings">
                <div className="rv-button-top">
                  <span>Explore Our Services</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Explore Our Services</span>
                </div>
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="service-wrapper mt-16 flex flex-col gap-6 overflow-x-hidden max-md:px-5 md:w-fit md:flex-row md:flex-nowrap md:pl-[20%] md:pr-10"
        aria-label="Our service offerings">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-1 flex-col gap-4 rounded-none border-t border-t-secondary bg-backgroundBody px-5 py-14 dark:border-t-primary dark:bg-black md:w-[370px] md:flex-row md:gap-[22px] md:px-[25px] md:py-[70px]">
            <div aria-hidden="true">
              <p className="font-instrument text-5xl font-normal leading-[64px] text-black dark:text-white max-md:text-3xl">
                0{item.id}
              </p>
            </div>
            <div className="space-y-4 md:space-y-8">
              <h3 className="font-normal leading-[110%] tracking-[-1.08px] text-black dark:text-white max-md:text-2xl md:max-w-[200px] md:text-4xl">
                {item.title}
              </h3>
              <p className="text-base font-normal leading-6 tracking-[0.32px] text-colorText dark:text-backgroundBody/70">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SolutionV2
