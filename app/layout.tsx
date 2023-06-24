import { noto, raleway } from '@/lib/fonts'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/navbar'
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/footer'


export const metadata = {
  title: 'Lettres',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='zh-CN'>
      <ClerkProvider>
        <body style={{ fontFamily: `${raleway.style.fontFamily}, ${noto.style.fontFamily}` }}>
          <Providers>
            <Navbar></Navbar>

            {children}

            <Footer></Footer>
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  )
}
