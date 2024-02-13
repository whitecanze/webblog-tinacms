"use client"
import { useTheme } from "next-themes"
import { RxMoon, RxSun } from "react-icons/rx"

export const ThemeToggle = () => {
  const { setTheme } = useTheme()
  return (
    <>
      <button
        onClick={() => setTheme("light")}
        className="hidden text-gray-300 dark:flex"
      >
        <RxSun />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="flex text-gray-900 dark:hidden"
      >
        <RxMoon />
      </button>
    </>
  )
}
