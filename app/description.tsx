'use client'

import { raleway } from '@/lib/fonts'
import { useColorModeValue } from '@chakra-ui/react'
import Balancer from 'react-wrap-balancer'
import Text from '@/components/text'

export default function HomeDescription() {
    return (
        <Text
            className={raleway.className}
            fontSize={'larger'}
            bgClip='text'
            bgGradient={useColorModeValue('linear(to-l,rgb(30, 190, 170),rgb(22, 37, 199))', 'linear(to-l,rgb(199, 255, 243),rgb(199, 207, 255))')}>
            <Balancer>*Lettres* (/lɛtʁ/, the French word for “letters”) mainly consists of mathematical and linguistic study notes for myself, study notes for my classmates, and study notes for everyone, apart from some daily life records and literary works. The creation of Lettres is aimed at providing knowledge thereof and keeping track of my studying process. Correction and sharing are greatly appreciated.</Balancer>
        </Text>
    )
} 
