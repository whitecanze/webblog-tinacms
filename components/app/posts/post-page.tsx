"use client"

import {
  TextBox,
  TweetEmbed,
  PullQuote,
  CaptionedImage,
  VideoPlayer,
} from "@/components/RichText"
import { PostQuery } from "@/tina/__generated__/types"
import { useEffect } from "react"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

export const PostPageComponent = (props: {
  data: PostQuery
  variables: {
    relativePath: string
  }
  query: string
}) => {
  const { data } = useTina(props)

  const title = data.post.title
  const content = data.post.body

  useEffect(() => {
    if (title) document.title = "WhiteCanZE - " + title
  }, [title])

  return (
    <article>
      <h1 data-tina-field={tinaField(data.post, "title")}>{title}</h1>
      <section data-tina-field={tinaField(data.post, "body")}>
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
