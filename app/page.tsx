import client from "@/tina/__generated__/client"
import { HomePageComponent } from "@/components/app/home-page"

const HomePage = async () => {
  const result = await client.queries.homePage()

  return <HomePageComponent {...result} />
}

export default HomePage
