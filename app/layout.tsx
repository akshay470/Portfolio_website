import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Akshay Lad | Full Stack Developer',
  description: 'Computer Science Undergraduate | Web Developer | Problem Solver. Passionate about building efficient applications and solving real-world problems with code.',
  keywords: ['Full Stack Developer', 'Web Developer', 'React', 'Node.js', 'Kotlin', 'IIIT Lucknow'],
  authors: [{ name: 'Akshay Lad' }],
  openGraph: {
    title: 'Akshay Lad | Full Stack Developer',
    description: 'Passionate about building efficient applications and solving real-world problems with code.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased min-h-screen">{children}</body>
    </html>
  )
}
