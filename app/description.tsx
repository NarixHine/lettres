'use client'

import { useColorModeValue } from '@chakra-ui/react'
import Balancer from 'react-wrap-balancer'
import Text from '@/components/chakra/text'

export default function HomeDescription() {
    return (
        <Text
            fontSize={'larger'}
            bgClip='text'
            textAlign={'center'}
            bgGradient={useColorModeValue('linear(to-l,rgb(30, 190, 170),rgb(22, 37, 199))', 'linear(to-l,rgb(199, 255, 243),rgb(199, 207, 255))')}>
            <Balancer>*Lettres* (/lɛtʁ/, the French word for “letters”) mainly consists of mathematical and linguistic study notes for myself, study notes for my classmates, and study notes for everyone, apart from some daily life records and literary works. The creation of Lettres is aimed at providing knowledge thereof and keeping track of my studying process.</Balancer>
        </Text>
    )
} 
