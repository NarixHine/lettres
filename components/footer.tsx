'use client'

import { Divider, AbsoluteCenter, Box, Image } from '@chakra-ui/react'
import Markdown from './markdown'

export default function Footer({ info, logo }: {
    info: string,
    logo: string
}) {
    return (
        <>
            <Box position={'relative'} my={5}>
                <Divider></Divider>
                <AbsoluteCenter>
                    <Image src={logo} alt='Logo' height={10}></Image>
                </AbsoluteCenter>
            </Box>
            <Box textAlign={'center'} opacity={0.6} fontSize={'sm'} my={4}>
                <Markdown md={info}></Markdown>
            </Box>
        </>
    )
}
