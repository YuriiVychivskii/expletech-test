import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Expletech',
  description: 'Testing project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
