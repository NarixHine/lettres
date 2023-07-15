'use client'

import { useColorMode } from '@chakra-ui/react'
import { UserProfile } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Head from 'next/head'

export default function ProfilePage() {
    const { colorMode } = useColorMode()
    return (
        <main style={{ display: 'flex', justifyContent: 'center', marginTop: 30, marginBottom: 30 }}>
            <Head>
                <title>User Profile</title>
            </Head>
            <UserProfile appearance={{ baseTheme: colorMode === 'dark' ? dark : undefined }} />
        </main>
    )
}
