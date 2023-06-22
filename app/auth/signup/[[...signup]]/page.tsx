'use client'

import { raleway } from '@/lib/fonts'
import { useColorMode } from '@chakra-ui/react'
import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function SignUpPage() {
  const { colorMode } = useColorMode()
  return <SignUp appearance={{ variables: { fontFamily: raleway.style.fontFamily }, baseTheme: colorMode === 'dark' ? dark : undefined }} />
}
