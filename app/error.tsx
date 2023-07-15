'use client'

import Main from '@/components/main'
import { Box, Button, Heading, Text } from '@chakra-ui/react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <Main className='text-center flex flex-col justify-center space-y-2'>
      <Heading fontSize={'6xl'}>Error</Heading>
      <Text fontSize='2xl' color={'red.300'}>{error.message}</Text>
      <Box py={1}>
        <Button colorScheme='red' onClick={reset}>Retry</Button>
      </Box>
    </Main>
  )
}
