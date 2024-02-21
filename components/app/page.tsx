"use client"

import { PageQuery } from "@/tina/__generated__/types"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import {
  TextBox,
  TweetEmbed,
  PullQuote,
  CaptionedImage,
  VideoPlayer,
} from "@/components/RichText"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export const PageComponent = (props: {
  data: PageQuery
  variables: {
    relativePath: string
  }
  query: string
}) => {
  const { data } = useTina(props)

  const title = data.page.title
  const content = data.page.body

  const pathname = usePathname()
  useEffect(() => {
    if (pathname) {
      const title = pathname?.split("/")[1]
      document.title =
        "WhiteCanZE - " + title[0].toUpperCase() + title.substring(1)
    }
  }, [pathname])

  return (
    <article>
      <h1 data-tina-field={tinaField(data.page, "title")}>{title}</h1>
      <section data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown
          components={{
            TextBox,
            TweetEmbed,
            PullQuote,
            CaptionedImage,
            VideoPlayer,
          }}
          content={content}
        />
      </section>
    </article>
  )
}
