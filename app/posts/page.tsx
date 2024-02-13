import { PostListPageComponent } from "@/components/app/posts/post-list-page"
import client from "@/tina/__generated__/client"

const page = async () => {
  const posts = await client.queries.postConnection()

  return <PostListPageComponent {...posts} />
}

export default page
