import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const biotif = localFont({
  variable: '--font-body',
  src: [
    {
      path: './fonts/Biotif/Biotif-Regular.woff2',
      weight: 'normal',
      style: 'bold',
    },
    {
      path: './fonts/Biotif/Biotif-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './fonts/Biotif/Biotif-RegularItalic.woff2',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: './fonts/Biotif/Biotif-Book.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

const neuzeitGrotesk = localFont({
  variable: '--font-heading',
  src: './fonts/NeuzeitGrotesk/NeuzeitGrotesk-Bold.woff2',
  style: 'normal',
  weight: 'bold',
})

// TODO: colocar fonte
const firaCode = localFont({
  variable: '--font-code',
  src: './fonts/NeuzeitGrotesk/NeuzeitGrotesk-Bold.woff2',
  style: 'normal',
  weight: 'normal',
})

export const metadata: Metadata = {
  title: 'Victor Santos',
  description: 'Programming goes far beyond syntax.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${biotif.variable} ${neuzeitGrotesk.variable} ${firaCode.variable} antialiased min-h-screen bg-background`}
        // style={{
        //   backgroundImage:
        //     'linear-gradient(to bottom, transparent 98%, #212024 98%), linear-gradient(to right, #08070b 98%, #212024 98%)',
        //   backgroundSize: '96px 96px, 96px 96px',
        // }}
      >
        <div
          className="max-w-[calc(760px+2*20px)] px-[20px] ml-auto mr-auto min-h-screen flex flex-col bg-background"
          style={{
            boxShadow: '0px 0px 620px 210px rgba(8,7,11,0.9)',
          }}
        >
          <Navbar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  )
}
