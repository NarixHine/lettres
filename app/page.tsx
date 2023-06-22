import Box from '@/components/box'
import Main from '@/components/main'
import NextImage from 'next/image'
import Image from '@/components/image'
import Text from '@/components/text'
import SlideFade from '@/components/slidefade'
import { dancing, raleway } from '@/lib/fonts'
import { Balancer } from 'react-wrap-balancer'
import Divider from '@/components/divider'
import Heading from '@/components/heading'
import { useColorModeValue } from '@chakra-ui/react'
import HomeDescription from './description'

export default function Home() {
  return (
    <Main>
      <Box
        overflow={'hidden'}
        height={'50vh'}
        position={'relative'}
        borderRadius={30}>
        <NextImage style={{ objectFit: 'cover', objectPosition: '50% 3%' }} src='/c.jpg' fill={true} alt='Cover'></NextImage>
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
            Presented by Narix Hine
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
          left={0}
          position={'absolute'}
          fontSize={30}>
          “
        </Text>
        <Text
          bottom={-30}
          right={0}
          position={'absolute'}
          fontSize={30}>
          ”
        </Text>
        <br></br><br></br>
        <HomeDescription></HomeDescription>
      </Box>

      <br></br>
      <Heading>Featured</Heading>

    </Main>
  )
}
