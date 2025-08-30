import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '../animation/RevealWrapper'
import TableOfContent from '../shared/TableOfContent'

const ServiceContent = ({ service }: any) => {
  const headings = service.content.match(/### .+/g) ?? []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-8 md:px-20">
        <div className="flex flex-col justify-start gap-8 lg:flex-row">
          <aside className="min-w-[275px] flex-1">
            <div className="sticky top-28">
              <TableOfContent tableOfContents={tableOfContents} />
            </div>
          </aside>

          <article className="project-details-body">
            <RevealWrapper as="figure" className="h-[497px] w-full">
              <Image
                width={870}
                height={497}
                src={service.data?.coverImage}
                alt="Services Big Img"
                className="h-full w-full object-cover object-center"
              />
            </RevealWrapper>
            <RevealWrapper>
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{service.content}</ReactMarkdown>
            </RevealWrapper>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ServiceContent
