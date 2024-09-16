import type { Metadata } from 'next'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';  

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
        <main>{children}</main>
      </body>
    </html>
  )
}
