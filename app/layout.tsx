import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Akshay's Portfolio",
  description: "A collection of Akshay's projects and skills",
  generator: "Akshay's Portfolio",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
