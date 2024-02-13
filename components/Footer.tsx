"use client"

import Link from "next/link"
import { FooterConnectionQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

const Footer = (props: {
  data: FooterConnectionQuery
  variables: {}
  query: string
}) => {
  const { data } = useTina(props)
  const footerdata = data.footerConnection.edges

  return (
    <div className="py-10 text-center text-sm">
      <hr />
      {footerdata?.map((data: any) => (
        <p key={data.node.id}>
          The{" "}
          <Link
            href={data.node.link}
            target="_self"
            className="underline-offset-2 hover:text-emerald-500 hover:underline"
          >
            {data.node.name}
          </Link>{" "}
          Web
        </p>
      ))}
    </div>
  )
}

export default Footer
