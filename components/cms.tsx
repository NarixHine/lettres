'use client'

import { ColorModeScript } from '@chakra-ui/react'
import theme from '../lib/theme'

export default function CMS() {
    return (<ColorModeScript initialColorMode={theme.config.initialColorMode} />)
}
