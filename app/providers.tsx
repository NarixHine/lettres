'use client'

import CMS from '@/components/chakra/cms'
import theme from '@/lib/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-wrap-balancer'
import { Analytics } from '@vercel/analytics/react'

export function Providers({ children }: {
    children: React.ReactNode
}) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <CMS></CMS>
                <Analytics></Analytics>
                <Provider>{children}</Provider>
            </ChakraProvider>
        </CacheProvider>
    )
}