import { ProjectListPageComponent } from "@/components/app/projects/project-list-page"
import client from "@/tina/__generated__/client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WhiteCanZE - Projects",
  description: "My Proejcts List :)",
}

const page = async () => {
  const result = await client.queries.projectConnection()

  return <ProjectListPageComponent {...result} />
}

export default page
