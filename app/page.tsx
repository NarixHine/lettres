import Box from '@/components/box'
import Main from '@/components/main'
import NextImage from 'next/image'
import Image from '@/components/image'

export default function Home() {
  return (
    <Main>
      <Box
        backgroundSize={'100% 20px'}
        overflow={'hidden'}
        width={'100vw'}
        height={'40vh'}
        position={'relative'}>
        <NextImage style={{ objectFit: 'cover', objectPosition: '50% 35%' }} src='/c.jpg' fill={true} alt='Cover'></NextImage>
      </Box>
      <Box position={'relative'}>
        <Image
          src={'/logo2.png'}
          alt='Logo'
          width={50}
          position={'absolute'}
          top={-25}
          left={'50%'}
          transform={'translate(-50%, 0)'}
          animation={'fadeIn 2s'}
          style={{ animationFillMode: 'forwards' }}
        ></Image>
      </Box>
    </Main>
  )
}
