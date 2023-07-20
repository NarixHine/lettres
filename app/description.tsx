'use client'

import { useColorModeValue } from '@chakra-ui/react'
import Balancer from 'react-wrap-balancer'
import Text from '@/components/chakra/text'
import Markdown from '@/components/markdown'

export default function HomeDesc({ desc }: { desc: string }) {
    return (
        <Text
            as={'div'}
            fontSize={'larger'}
            bgClip='text'
            textAlign={'center'}
            bgGradient={useColorModeValue('linear(to-l,rgb(30, 190, 170),rgb(22, 37, 199))', 'linear(to-l,rgb(199, 255, 243),rgb(199, 207, 255))')}>
            <Balancer>
                <Markdown md={desc}></Markdown>
            </Balancer>
        </Text>
    )
} 
