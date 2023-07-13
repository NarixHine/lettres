'use client'

import { useBreakpointValue } from "@chakra-ui/react"

export default function Misskey() {
    const misskeySrc = useBreakpointValue({
        base: 'https://missbed.narix.link/timeline/misskey.cloud/9gwc5sdvr8',
        lg: 'https://missbed.narix.link/timeboard/misskey.cloud/9gwc5sdvr8'
    })
    return <iframe src={misskeySrc} allowTransparency height={248} className='mx-auto my-6 w-full px-5'></iframe>
}
