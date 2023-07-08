import Box from '@/components/chakra/box'
import Main from '@/components/main'
import NextImage from 'next/image'
import Image from '@/components/chakra/image'
import Text from '@/components/chakra/text'
import SlideFade from '@/components/chakra/slidefade'
import { dancing, noto } from '@/lib/fonts'
import { Balancer } from 'react-wrap-balancer'
import Heading from '@/components/chakra/heading'
import HomeDescription from './description'
import Lettres from '@/components/lettres'
import Stack from '@/components/chakra/stack'
import Link from '@/components/chakra/link'

export default function Home() {
  return (
    <Main>
      <Box
        overflow={'hidden'}
        height={'50vh'}
        position={'relative'}
        borderRadius={30}>
        <NextImage priority style={{ objectFit: 'cover', objectPosition: '50% 5%' }} src='/c.jpg' fill={true} alt='Cover'></NextImage>
        <Text
          top={'50%'}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          position={'absolute'}
          bgColor={'rgba(251, 255, 213, 0.8)'}
          color={'green.700'}
          borderRadius={20}
          p={'0px 20px'}
          className={dancing.className}
          fontSize={50}>
          <Balancer>
            A Narix Hine Present
          </Balancer>
        </Text>
      </Box>


      <Box position={'relative'}>
        <SlideFade in offsetY={10}>
          <Image
            src={'/logo2.png'}
            alt='Logo'
            width={50}
            position={'absolute'}
            top={-25}
            left={'50%'}
            transform={'translate(-50%, 0)'}
          ></Image>
        </SlideFade>

        <Text
          top={5}
          left={5}
          position={'absolute'}
          fontSize={30}
          className={noto.className}>
          “
        </Text>
        <Text
          bottom={-10}
          right={5}
          position={'absolute'}
          fontSize={30}
          className={noto.className}>
          ”
        </Text>
        <br></br><br></br>
        <HomeDescription></HomeDescription>
      </Box>

      <br></br>
      <Heading textAlign={'center'}>Featured</Heading>

      <br></br>
      <Stack width={'90%'} m={'0 auto'} spacing={3}>
        <Lettres
          width='100%'
          tags={['hello', 'world']}
          id=''
          title='Lorem ipsom'
          img='/c.jpg'
          desc='Quisque varius bibendum arcu id lobortis. Mauris lobortis metus at quam bibendum vehicula. Aenean ut ante eu odio blandit venenatis. In efficitur venenatis ante eget imperdiet.'></Lettres>
      </Stack>

      <br></br><br></br>
      <Box p={5} style={{ boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' }}>
        <Heading textAlign={'center'} size={'lg'} fontWeight={'medium'} color={'teal.500'}><Link href='https://misskey.cloud/@lettres' target='_blank'>Misskey ⧉</Link></Heading>
        <iframe src='https://missbed.narix.link/timeboard/misskey.cloud/9gwc5sdvr8' className='mx-auto my-6 h-64 w-4/5 p-5' style={{ boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' }}></iframe>
      </Box>
    </Main>
  )
}
