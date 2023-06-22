'use client'

import { ColorModeScript } from '@chakra-ui/react'
import theme from '../utils/theme'

export default function CMS() {
    return (<ColorModeScript initialColorMode={theme.config.initialColorMode} />)
}
