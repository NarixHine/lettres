import Main from '@/components/main'
import Heading from '@/components/chakra/heading'
import Button from '@/components/chakra/button'
import Text from '@/components/chakra/text'
import Box from '@/components/chakra/box'

export default function ErrorPanel({
  error,
  reset,
}: {
  error: Error
  reset?: () => void
}) {
  return (
    <Main className='text-center flex flex-col justify-center space-y-2'>
      <Heading fontSize={'6xl'} color={'red.300'}>Error</Heading>
      <Text fontSize='2xl'>{error.message}</Text>
      {reset ? <Box py={1}>
        <Button colorScheme='red' onClick={reset}>Retry</Button>
      </Box> : <></>}
    </Main>
  )
}
