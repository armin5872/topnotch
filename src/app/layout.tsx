import type { Metadata } from 'next'
import './bootstrap.min.css'
import Navbar from './topnotch-proto/Navbar'
import Footer from './topnotch-proto/footer'
import './globals.css'
import SmoothScroll from './SmoothScroll'

export const metadata: Metadata = {
  title: 'TopNotch Programmers',
  description:
    'TopNotch A Professinal Website For Making Websites Your Business',
  keywords: [
    'TopNotch Programmers',
    'TopNotch',
    'TopNotch Website',
    'TopNotch Web Development',
    'TopNotch Web Design',
    'TopNotch Web Development Company',
    'TopNotch Web Design Company',
  ],
  authors: [{ name: 'Armin', url: 'https://topnotch-bay.vercel.app/' }],
  creator: 'Armin',
  publisher: 'Armin',
  applicationName: 'TopNotch Programmers',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light dark',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'TopNotch Programmers',
    description:
      'TopNotch A Professinal Website For Making Websites Your Business',
    url: 'https://topnotch-bay.vercel.app/',
    siteName: 'TopNotch Programmers',
    images: [
      {
        url: '/topnotch-logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SmoothScroll>
      <html lang='en'>
        <head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
        </head>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </SmoothScroll>
  )
}
