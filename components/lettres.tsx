'use client'

import { useState } from 'react'
import { Box, Heading, Text, Img, Flex, Center, useColorModeValue, HStack, ResponsiveValue, } from '@chakra-ui/react'
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import Link from './chakra/link'

export default function Lettres({ img, title, desc, id, tags, width }: {
    img: string,
    title: string,
    desc: string,
    id: string,
    tags: string[],
    width: ResponsiveValue<number | (string & {})>
}) {
    const [liked, setLiked] = useState(false)
    const router = useRouter()
    return (
        <Center>
            <Box
                w={width}
                rounded={'sm'}
                mx={[0, 5]}
                overflow={'hidden'}
                bg='white'
                border={'1px'}
                borderColor='black'
                boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
                <Box h={'200px'} borderBottom={'1px'} borderColor='black'>
                    <Img
                        src={img}
                        roundedTop={'sm'}
                        objectFit='cover'
                        h='full'
                        w='full'
                        alt={'Blog Image'}
                    />
                </Box>
                <Box p={4} pb={3}>
                    <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'} noOfLines={5} my={1}>
                        {desc}
                    </Text>
                    {tags.map((tag) => (
                        <Box
                            key={tag}
                            bg='black'
                            display={'inline-block'}
                            px={2}
                            py={1}
                            mx={2}
                            my={1}
                            color='white'
                            mb={2}>
                            <Link href={`/tag/${tag}`} _hover={{ textDecoration: 'none' }} fontSize={'xs'} fontWeight='medium'>
                                {tag}
                            </Link>
                        </Box>
                    ))}
                </Box>
                <HStack borderTop={'1px'} color='black'>
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
                        <BsArrowUpRight />
                    </Flex>
                    <Flex
                        p={4}
                        alignItems='center'
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        borderLeft={'1px'}
                        cursor='pointer'
                        onClick={() => setLiked(!liked)}>
                        {liked ? (
                            <BsHeartFill fill='red' fontSize={'24px'} />
                        ) : (
                            <BsHeart fontSize={'24px'} />
                        )}
                    </Flex>
                </HStack>
            </Box>
        </Center>
    )
}
