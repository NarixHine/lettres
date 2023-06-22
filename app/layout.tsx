import { noto } from '@/utils/fonts'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/navbar'
import { ClerkProvider } from '@clerk/nextjs'


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
        <body className={noto.className}>
          <Providers>
            <Navbar></Navbar>
            {children}
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  )
}
