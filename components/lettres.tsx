'use client'

import { Box, Heading, Text, Img, Flex, Center, useColorModeValue, HStack, ResponsiveValue, } from '@chakra-ui/react'
import { BiLinkExternal } from 'react-icons/bi'
import { ImEnter } from 'react-icons/im'
import { useRouter } from 'next/navigation'
import Link from './chakra/link'
import Tags from './tags'

export default function Lettres({ cover, title, desc, id, tags, width, date }: {
    cover: string | null | undefined,
    title: string,
    desc: string | null | undefined,
    id: string,
    tags: string[] | null | undefined,
    date: Date,
    width: ResponsiveValue<number | (string & {})>
}) {
    const router = useRouter()
    const blackInDay = useColorModeValue('black', 'white')
    const whiteInDay = useColorModeValue('white', 'black')
    return (
        <Center>
            <Box
                w={width}
                rounded={'sm'}
                mx={[0, 5]}
                overflow={'hidden'}
                border={'1px'}
                borderColor={blackInDay}
                boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
                {
                    cover ? <Box h={'200px'} borderBottom={'1px'} borderColor='black'>
                        <Img
                            src={cover}
                            roundedTop={'sm'}
                            objectFit='cover'
                            h='full'
                            w='full'
                            alt={'Blog Image'}
                        />
                    </Box> : <></>
                }
                <Box p={4} pb={3}>
                    <Heading fontSize={'2xl'} noOfLines={1} display={'inline'}>
                        {title}
                    </Heading>
                    <Text as='sup' color={useColorModeValue('gray.600', 'gray.400')} mx={2}>{date.toDateString()}</Text>
                    <Text noOfLines={5} my={1}>
                        {desc}
                    </Text>
                   <Tags tags={tags}></Tags>
                </Box>
                <HStack borderTop={'1px'}>
                    <Flex
                        p={4}
                        alignItems='center'
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        cursor={'pointer'}
                        onClick={() => router.push(`/lettres/${id}`)}
                        w='full'>
                        <Text fontSize={'md'} fontWeight={'semibold'}>
                            View the Lettres
                        </Text>
                        <ImEnter fontSize={'20px'} />
                    </Flex>
                    <Flex
                        p={4}
                        as={'a'}
                        href={`/lettres/${id}`}
                        target='_blank'
                        alignItems='center'
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        borderLeft={'1px'}
                    >
                        <BiLinkExternal fontSize={'24px'} />
                    </Flex>
                </HStack>
            </Box>
        </Center>
    )
}
