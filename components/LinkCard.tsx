import Link from "next/link"
import React from "react"

const LinkCard = ({
  link,
  title,
  description,
}: {
  link: string
  title: string
  description: string
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="group relative overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-800/50 hover:bg-zinc-400/50 dark:border-zinc-600 dark:hover:border-zinc-400/50 dark:hover:bg-zinc-800/10 md:gap-8"
    >
      <article className="p-4 md:p-8">
        <h2 className="z-20 text-xl font-medium text-zinc-800 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white lg:text-3xl">
          {title}
        </h2>
        <p className="text-zinc 600 z-20 mt-4 text-sm group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-200">
          {description}
        </p>
      </article>
    </Link>
  )
}

export default LinkCard
