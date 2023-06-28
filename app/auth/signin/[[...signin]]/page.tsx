'use client'

import { useColorMode } from '@chakra-ui/react'
import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function SignInPage() {
    const { colorMode } = useColorMode()
    return <SignIn appearance={{ baseTheme: colorMode === 'dark' ? dark : undefined }} />
  }
