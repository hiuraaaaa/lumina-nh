import type { Metadata } from 'next'
import config from '@/config'
import './globals.css'

export const metadata: Metadata = {
  title: config.site.fullName,
  description: config.site.description,
  keywords: config.site.keywords,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
