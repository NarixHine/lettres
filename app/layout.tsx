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
  }
}

async function getData() {
  const client = getXataClient()
  const [logo, title, footer] = (await client
    .db
    .settings
    .read('layout'))?.config as string[]
  return {
    logo,
    title,
    footer
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { logo, title, footer } = await getData()

  return (
    <html lang='zh-CN'>
      <ClerkProvider>
        <body style={{ fontFamily: `${raleway.style.fontFamily}, ${noto.style.fontFamily}` }}>
          <Providers>
            <Navbar logo={logo} title={title}></Navbar>

            {children}

            <Footer info={footer} logo={logo}></Footer>
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  )
}
