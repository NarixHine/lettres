'use client'

import { useColorMode } from '@chakra-ui/react'
import { UserProfile } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function SignInPage() {
    const { colorMode } = useColorMode()
    return (
        <main style={{ display: 'flex', justifyContent: 'center', marginTop: 30, marginBottom: 30 }}>
            <UserProfile appearance={{ baseTheme: colorMode === 'dark' ? dark : undefined }} />
        </main>
    )
}
