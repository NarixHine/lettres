'use client'

import { useColorModeValue } from '@chakra-ui/react'
import Balancer from 'react-wrap-balancer'
import Text from '@/components/chakra/text'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function HomeDesc({ desc }: { desc: string }) {
    return (
        <Text
            as={'div'}
            fontSize={'larger'}
            bgClip='text'
            textAlign={'center'}
            bgGradient={useColorModeValue('linear(to-l,rgb(30, 190, 170),rgb(22, 37, 199))', 'linear(to-l,rgb(199, 255, 243),rgb(199, 207, 255))')}>
            <Balancer>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {desc}
                </ReactMarkdown>
            </Balancer>
        </Text>
    )
} 
