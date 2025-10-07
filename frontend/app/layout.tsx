import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Toaster } from "../components/ui/toaster"
import { PostHogProvider } from "../providers/posthog"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DeepReasoning",
  icons: {
    icon: "/deepreasoning.ico"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-background min-h-screen antialiased`} suppressHydrationWarning>
        <PostHogProvider>
          {children}
          <Toaster />
        </PostHogProvider>
        <Script src="https://app.chibi.sh/scripts/simple.js" data-project-id="deep-claude" />
      </body>
    </html>
  )
}
