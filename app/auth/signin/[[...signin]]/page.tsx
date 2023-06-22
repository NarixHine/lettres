'use client'

import { raleway } from '@/utils/fonts'
import { useColorMode } from '@chakra-ui/react'
import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function SignInPage() {
    const { colorMode } = useColorMode()
    return <SignIn appearance={{ variables: { fontFamily: raleway.style.fontFamily }, baseTheme: colorMode === 'dark' ? dark : undefined }} />
  }
