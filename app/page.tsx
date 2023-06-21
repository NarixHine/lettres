import Box from '@/components/box'
import Main from '@/components/main'
import NextImage from 'next/image'
import Image from '@/components/image'

export default function Home() {
  return (
    <Main>
      <Box
        backgroundSize={'100% 20px'}
        boxShadow={'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px'}
        overflow={'hidden'}
        width={'100vw'}
        height={'40vh'}
        position={'relative'}
        animation={'fadeIn 1s'}>
        <NextImage style={{ objectFit: 'cover', objectPosition: '50% 35%' }} src='/c.jpg' fill={true} alt='Cover'></NextImage>
      </Box>
      <Box position={'relative'}>
        <Image
          src={'/logo2.png'}
          alt='Logo'
          width={70}
          position={'absolute'}
          top={-50}
          left={'50%'}
          transform={'translate(-50%, 0)'}
          animation={'fadeIn 2s'}
        ></Image>
      </Box>
    </Main>
  )
}
