'use client'

import NextLink from 'next/link'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { JSX, DetailedHTMLProps, AnchorHTMLAttributes } from 'react'

export default function Link(props: JSX.IntrinsicAttributes & Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, keyof LinkProps> & { htmlTranslate?: 'yes' | 'no' | undefined } & LinkProps & { as?: 'a' | undefined }) {
    return (
        <ChakraLink as={NextLink} {...props}></ChakraLink>
    )
}
