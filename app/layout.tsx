import { noto, raleway } from '@/lib/fonts'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/navbar'
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/footer'
import { Metadata } from 'next'
import { getXataClient } from '@/lib/xata'

export async function generateMetadata(): Promise<Metadata> {
  const { title } = await getData()
  return {
    title,
    applicationName: title,
    appleWebApp: {
      capable: true,
      title,
      statusBarStyle: 'default',
    },
    formatDetection: {
      telephone: false,
    },
    themeColor: '#1A202C',
    viewport:
      'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
    manifest: '/manifest.json',
  }
}

async function getData() {
  const client = getXataClient()
  const [logo, title, footer, footerLogo] = (await client
    .db
    .settings
    .read('layout'))?.config as string[]
  return {
    logo,
    title,
    footer,
    footerLogo
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { logo, title, footer, footerLogo } = await getData()

  return (
    <html lang='zh-CN'>
      <ClerkProvider>
        <body style={{ fontFamily: `${raleway.style.fontFamily}, ${noto.style.fontFamily}` }}>
          <Providers>
            <Navbar logo={logo} title={title}></Navbar>
            {children}
            <Footer info={footer} logo={footerLogo}></Footer>
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  )
}
