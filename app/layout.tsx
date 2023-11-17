import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ToasterContext from './context/ToasterContext'
import AuthContext from "@/app/context/AuthContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Messenger With NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContext>
        <ToasterContext />
        {children}
        </AuthContext>
      </body>
    </html>
  )
}
