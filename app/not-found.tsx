import Heading from '@/components/chakra/heading'
import Main from '@/components/main'
import Text from '@/components/chakra/text'

export default function NotFound() {
  return (
    <Main className='text-center flex flex-col justify-center'>
      <Heading fontSize={'6xl'}>Error</Heading>
      <Text fontSize='2xl' color={'red.300'}>404 NOT FOUND</Text>
    </Main>
  )
}
