import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HR Development System',
  description: 'Your HR Development System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Dashboard</Link>
          <Link href="/competency-database">Competency Database</Link>
          <Link href="/online-learning">Online Learning</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
