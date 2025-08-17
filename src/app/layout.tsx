import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Navbar } from '../components/navbar'
import { ThemeProvider } from '../components/theme-provider'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Next.js MCP Server',
  description: 'Next.js Model Context Protocol Server with API key management',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div style={{ paddingTop: '64px' }}>
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}