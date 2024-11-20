import type { Metadata } from 'next'
import {  Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Bricolage_Grotesque({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Join Our Waitlist',
  description: 'Be the first to know when we launch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#374151',
              color: '#fff',
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}