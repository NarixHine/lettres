import Box from '@/components/chakra/box'
import Main from '@/components/main'
import NextImage from 'next/image'
import Image from '@/components/chakra/image'
import Text from '@/components/chakra/text'
import SlideFade from '@/components/chakra/slidefade'
import { dancing, noto } from '@/lib/fonts'
import { Balancer } from 'react-wrap-balancer'
import Heading from '@/components/chakra/heading'
import Lettres from '@/components/lettres'
import Stack from '@/components/chakra/stack'
import Link from '@/components/chakra/link'
import { getXataClient } from '@/lib/xata'
import HomeDesc from './description'
import Misskey from './misskey'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const { slogan } = await getData()
  return {
    description: slogan,
  }
}

async function getData() {
  const client = getXataClient()
  const [floatingLogo, slogan, cover, desc] = (await client
    .db
    .settings
    .read('home'))?.config as string[]
  const lettres = await client
    .db
    .lettres
    .select(['id', 'desc', 'title', 'tags', 'cover', 'xata.createdAt'])
    .filter({ pin: true })
    .getMany()
  return {
    floatingLogo,
    slogan,
    cover,
    desc,
    lettres
  }
}

export default async function Home() {
  const { cover, slogan, floatingLogo, lettres, desc } = await getData()

  return (
    <Main>
      <Box
        overflow={'hidden'}
        height={'50vh'}
        position={'relative'}
        borderRadius={30}>
        <NextImage priority style={{ objectFit: 'cover' }} src={cover} fill={true} alt='Cover'></NextImage>
        <Balancer>
          <Text
            top={'50%'}
            left={'50%'}
            transform={'translate(-50%, -50%)'}
            position={'absolute'}
            color={'rgb(64,120,108)'}
            borderRadius={20}
            p={'0px 20px'}
            className={`${dancing.className} bg-slate-100/80`}
            backgroundImage={'linear-gradient(rgb(255,255,255) 1px, transparent 1px),linear-gradient(90deg, rgb(255,255,255) 1px, transparent 1px)'}
            backgroundSize={'20px 20px, 20px 20px'}
            fontSize={50}>
            {slogan}
          </Text>
        </Balancer>
      </Box>

      <Box position={'relative'}>
        <SlideFade in offsetY={10}>
          <Image
            src={floatingLogo}
            alt='Logo'
            width={50}
            opacity={0.7}
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
          fontSize={30}
          className={noto.className}>
          “
        </Text>
        <Text
          bottom={-10}
          right={0}
          position={'absolute'}
          fontSize={30}
          className={noto.className}>
          ”
        </Text>
        <br></br><br></br>
        <HomeDesc desc={desc} />
      </Box>

      <br></br>
      <Heading textAlign={'center'}>Featured</Heading>

      <br></br>
      <Stack width={'90%'} m={'0 auto'} spacing={10}>{
        lettres.map(({ id, title, desc, tags, cover, xata }) => (
          <Lettres
            key={id}
            width='100%'
            tags={tags}
            id={id}
            title={title}
            cover={cover}
            desc={desc}
            date={xata.createdAt}
          />
        ))
      }</Stack>

      <br></br>
      <Box textAlign={'center'} borderBottom={'rgba(3, 102, 214, 0.3) double 6px'} my={3}>
        <Box className='animate-bounce'>
          <Link href='/archive/1' fontSize={'3xl'} className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Archive ➣</Link>
        </Box>
      </Box>

      <br></br>
      <Box p={5} style={{ boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' }}>
        <Text textAlign={'center'} fontSize={'2xl'} color={'teal.500'}><Link href='https://misskey.cloud/@lettres' target='_blank'>Misskey ⧉</Link></Text>
        <Misskey></Misskey>
      </Box>
    </Main >
  )
}
