'use client'

import { useColorMode } from '@chakra-ui/react'
import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up'
}

export default function SignUpPage() {
  const { colorMode } = useColorMode()
  return <SignUp appearance={{ baseTheme: colorMode === 'dark' ? dark : undefined }} />
}
