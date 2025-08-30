import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const data = [
  {
    id: 1,
    reviewText:
      "The level of innovation and technical expertise demonstrated by this team is outstanding. They've transformed our digital presence completely.",
    authorName: 'Kristin Watson',
    authorRole: 'CEO, Tech Innovators',
    authorImage: '/images/avatar/review-13.png',
    rating: 5,
  },
  {
    id: 2,
    reviewText:
      'Working with this team has been a game-changer for our business. Their attention to detail and creative solutions exceeded our expectations.',
    authorName: 'Marcus Rodriguez',
    authorRole: 'Founder, Innovation Labs',
    authorImage: '/images/avatar/review-13.png',
    rating: 4,
  },
  {
    id: 3,
    reviewText:
      'The collaboration with this team has been exceptional. Their insights and strategies have significantly improved our project outcomes.',
    authorName: 'Emily Johnson',
    authorRole: 'Project Manager, Creative Agency',
    authorImage: '/images/avatar/review-14.png',
    rating: 5,
  },
  {
    id: 4,
    reviewText: 'Their commitment to excellence and innovative approach has made a significant impact on our success.',
    authorName: 'John Doe',
    authorRole: 'Marketing Director, Global Corp',
    authorImage: '/images/avatar/review-15.png',
    rating: 3,
  },
  {
    id: 5,
    reviewText:
      'The support and guidance provided by this team have been invaluable. They truly care about their clients and their success.',
    authorName: 'Jane Smith',
    authorRole: 'Operations Manager, Future Tech',
    authorImage: '/images/avatar/review-16.png',
    rating: 2,
  },
  {
    id: 6,
    reviewText:
      'Their innovative solutions and proactive approach have helped us achieve our goals faster than we anticipated.',
    authorName: 'Michael Brown',
    authorRole: 'Product Owner, NextGen Solutions',
    authorImage: '/images/avatar/review-17.png',
    rating: 4,
  },
]

const TestimonialV8 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-7 text-center lg:mb-14">
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 text-center">
              What our
              <i className="font-instrument">clients say </i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-3xl">
              Lorem ipsum dolor sit amet consectetur. Elit facilisis maecenas euismod vulputate. Dignissim natoque
              nascetur donec urna in vel vitae.
            </p>
          </TextAppearAnimation>
        </div>

        <article className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <RevealWrapper key={item.id} className="reveal-me border p-2.5 dark:border-dark">
              <div className="p-5">
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <span key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={15} viewBox="0 0 16 15" fill="none">
                        <path
                          d="M7.25672 0.486272C7.53172 -0.162091 8.46832 -0.162091 8.74332 0.486274L10.3663 4.31303C10.4823 4.58637 10.7445 4.77313 11.0454 4.79678L15.2582 5.12799C15.9719 5.18411 16.2614 6.05763 15.7175 6.51446L12.5079 9.2107C12.2786 9.40331 12.1784 9.70552 12.2485 9.99343L13.2291 14.0249C13.3952 14.7079 12.6375 15.2478 12.0264 14.8818L8.41965 12.7214C8.16202 12.5671 7.83802 12.5671 7.5804 12.7214L3.9736 14.8818C3.3625 15.2478 2.60477 14.7079 2.77091 14.0249L3.75155 9.99343C3.82159 9.70552 3.72147 9.40331 3.49221 9.2107L0.28245 6.51446C-0.261375 6.05763 0.0280544 5.18411 0.741835 5.12799L4.9547 4.79678C5.25561 4.77313 5.51774 4.58637 5.63367 4.31303L7.25672 0.486272Z"
                          fill="#12D8CC"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <p className="text-lg italic leading-[1.6] tracking-[0.36px]">{item.reviewText}</p>
              </div>
              <div className="border-t py-3 dark:border-dark">
                <figcaption className="flex items-center gap-4 px-5">
                  <img src={item.authorImage} alt={item.authorName} className="size-14 object-cover" />
                  <div>
                    <h6 className="mb-1 text-[22px] leading-[1.2]">{item.authorName}</h6>
                    <p className="text-sm font-light leading-5 text-secondary/70">{item.authorRole}</p>
                  </div>
                </figcaption>
              </div>
            </RevealWrapper>
          ))}
        </article>
      </div>
    </section>
  )
}

export default TestimonialV8
