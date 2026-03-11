import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Manoday Kadam – Portfolio',
  description: 'AI and Data Science Engineer portfolio showcasing projects in machine learning, GenAI, and real-time communication.',
  openGraph: {
    title: 'Manoday Kadam – Portfolio',
    description: 'AI and Data Science Engineer portfolio.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F1EFED',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  )
}
