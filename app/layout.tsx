import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import client from "@/tina/__generated__/client"
import { Poppins } from "next/font/google"

export const metadata: Metadata = {
  title: "Riku",
  description: "My Web Dev Blog :)",
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const result = await client.queries.footerConnection()

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="prose-xl mx-auto my-20 w-full max-w-4xl px-4 dark:prose-invert md:px-0">
            <Header />
            <main>
              {children}
            </main>
            <Footer {...result} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
