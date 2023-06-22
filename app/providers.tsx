'use client'

import CMS from '@/components/cms'
import theme from '@/lib/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-wrap-balancer'

export function Providers({ children }: {
    children: React.ReactNode
}) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <CMS></CMS>
                <Provider>{children}</Provider>
            </ChakraProvider>
        </CacheProvider>
    )
}