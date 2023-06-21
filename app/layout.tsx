import './globals.css'
import { Noto_Serif_SC } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '@/components/navbar'
import { ClerkProvider } from '@clerk/nextjs'
import Spacer from '@/components/spacer'
import CMS from '@/components/cms'

const noto = Noto_Serif_SC({ subsets: ['latin'], weight: ['400', '600'] })

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
            <CMS></CMS>
            <Navbar></Navbar>
            {children}
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  )
}
