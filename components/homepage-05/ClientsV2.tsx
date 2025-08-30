import testimonialData from '@/data/testimonials/testimonialV2.json'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ClientsV2 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <RevealWrapper as="p" className="reveal-me text-center text-sm font-normal uppercase leading-6 tracking-[3px]">
          Testimonials
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mb-10 mt-3 text-center lg:mb-20">
            Read what our amazing past <br className="hidden md:block" />
            clients say
          </h2>
        </TextAppearAnimation>
      </div>

      <RevealWrapper>
        <div className="flex items-center gap-[30px] max-sm:mb-[1px]">
          <Marquee pauseOnHover speed={110} autoFill>
            {testimonialData?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-96 border p-[30px] first:ml-[30px] dark:border-dark max-md:min-h-[237px] md:max-h-[237px] md:w-[470px]">
                <p className="text-[17px] leading-normal tracking-normal">{testimonial.feedback}</p>
                <div className="mt-[29px] flex items-center gap-4">
                  <Image src={testimonial.image} width={64} height={64} quality={90} alt="Review Author" />
                  <div>
                    <h3 className="text-xl font-medium leading-[1.2] tracking-wide">{testimonial.name}</h3>
                    <p className="mt-[3.5px] text-base font-light leading-5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default ClientsV2
