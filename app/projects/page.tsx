import { ProjectListPageComponent } from "@/components/app/projects/project-list-page"
import client from "@/tina/__generated__/client"

const page = async () => {
  const result = await client.queries.projectConnection()

  return <ProjectListPageComponent {...result} />
}

export default page
