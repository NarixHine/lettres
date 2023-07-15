'use client'

import { Box, Button } from '@chakra-ui/react'
import Divider from './chakra/divider'
import { useRouter } from 'next/navigation'

export default function List({ items }: {
    items: {
        text: string,
        url: string
    }[]
}) {
    const router = useRouter()
    return (<>
        <Divider my={1}></Divider>
        {
            items.map(({ text, url }) => (
                <Box key={text}>
                    <Button onClick={() => router.push(url)} colorScheme='twitter' variant='ghost' w={'full'} py={1}>
                        {text}
                    </Button>
                    <Divider my={1} opacity={0.5}></Divider>
                </Box>
            ))
        }
    </>)
}
