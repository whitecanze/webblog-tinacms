import client from "@/tina/__generated__/client"
import { notFound, usePathname } from "next/navigation"
import { PostPageComponent } from "@/components/app/posts/post-page"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WhiteCanZE - Blog",
  description: "My Blog List :)",
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const result = await client.queries
    .post({
      relativePath: `${params.slug}.mdx`,
    })
    .then((result) => {
      return result
    })
    .catch((err) => {
      console.error(err)
      return notFound()
    })

  return <PostPageComponent {...result} />
}

export default Page
