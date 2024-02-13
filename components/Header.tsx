import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import {
  RxHome,
  RxPerson,
  RxChatBubble,
  RxDividerVertical,
  RxCode,
} from "react-icons/rx"
import { RiYoutubeFill, RiTwitterFill, RiGithubFill } from "react-icons/ri"

const Header = () => {
  return (
    <header className="mb-20 mt-16 flex content-center items-center justify-between font-sans text-base">
      <div className="flex gap-4">
        <Link
          href="/"
          className="underline-offset-2 hover:text-emerald-500 hover:underline max-sm:hidden"
        >
          Home
        </Link>
        <Link href="/" className="sm:hidden">
          <RxHome />
        </Link>
        <Link
          href="/posts"
          className="underline-offset-2 hover:text-emerald-500 hover:underline max-sm:hidden"
        >
          Blog
        </Link>
        <Link href="/posts" className="sm:hidden">
          <RxChatBubble />
        </Link>
        <Link
          href="/about"
          className="underline-offset-2 hover:text-emerald-500 hover:underline max-sm:hidden"
        >
          About
        </Link>
        <Link href="/about" className="sm:hidden">
          <RxPerson />
        </Link>
        <Link
          href="/projects"
          className="underline-offset-2 hover:text-emerald-500 hover:underline max-sm:hidden"
        >
          Projects
        </Link>
        <Link
          href="/projects"
          className="underline-offset-2 hover:text-emerald-500 hover:underline sm:hidden"
        >
          <RxCode />
        </Link>
      </div>
      <div className="flex justify-between gap-4">
        {/* <Link href="https://youtube.com/">
          <RiYoutubeFill />
        </Link>
        <Link href="https://x.com/">
          <RiTwitterFill />
        </Link> */}
        <Link href="https://github.com/whitecanze" target="_blank">
          <RiGithubFill />
        </Link>
        <RxDividerVertical className="text-gray-300 dark:text-gray-600" />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
