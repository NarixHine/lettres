'use client'

import { Box, useColorModeValue, } from '@chakra-ui/react'
import Link from './chakra/link'

export default function Tags({ tags }: {
    tags: string[] | null | undefined
}) {
    const blackInDay = useColorModeValue('black', 'white')
    const whiteInDay = useColorModeValue('white', 'black')
    return <>{
        (tags ?? []).map((tag) => (
            <Box
                key={tag}
                bg={blackInDay}
                color={whiteInDay}
                display={'inline-block'}
                px={2}
                pb={1}
                mx={1}
                my={1}
                mb={2}>
                <Link href={`/tag/${tag}`} _hover={{ textDecoration: 'none' }} fontSize={'xs'} fontWeight='medium'>
                    {tag}
                </Link>
            </Box>
        ))
    }</>
}
