'use client'

import { ColorModeScript } from '@chakra-ui/react'
import theme from '../../src/theme'

export default function CMS() {
    return (<ColorModeScript initialColorMode={theme.config.initialColorMode} />)
}
