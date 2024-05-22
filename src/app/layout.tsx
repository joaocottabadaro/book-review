import './globals.css'

import { Poppins } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: 'normal',
  variable: '--font-sans',
})

export const metadata = {
  title: 'Book rater',
  description: 'Book reviews',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable}   min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
