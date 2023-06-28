'use client'

import { Divider, Text, AbsoluteCenter, Box, Image } from '@chakra-ui/react'

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
            <Text textAlign={'center'} fontStyle={'italic'} opacity={0.6} fontSize={'sm'} my={5}>
                {info}
            </Text>
        </>
    )
}
