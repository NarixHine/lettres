'use client'

import { useColorMode } from '@chakra-ui/react'
import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In'
}

export default function SignInPage() {
    const { colorMode } = useColorMode()
    return <SignIn appearance={{ baseTheme: colorMode === 'dark' ? dark : undefined }} />
  }
