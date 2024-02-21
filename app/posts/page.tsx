import { PostListPageComponent } from "@/components/app/posts/post-list-page"
import client from "@/tina/__generated__/client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WhiteCanZE - Blog",
  description: "My Blog List :)",
}

const page = async () => {
  const posts = await client.queries.postConnection()

  return <PostListPageComponent {...posts} />
}

export default page
