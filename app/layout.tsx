import { noto, raleway } from '@/lib/fonts'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/navbar'
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/footer'
import { kv } from '@vercel/kv'

export const metadata = {
  title: 'Lettres',
}

async function getData() {
  const [logo, title, footer] = await Promise.all([
    kv.get('logo'),
    kv.get('title'),
    kv.get('footer')
  ]) as string[]
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
