'use client'

import { useBreakpointValue } from "@chakra-ui/react"

export default function Misskey() {
    const misskeySrc = useBreakpointValue({
        base: 'https://missbed.narix.link/timeline/misskey.cloud/9gwc5sdvr8',
        lg: 'https://missbed.narix.link/timeboard/misskey.cloud/9gwc5sdvr8'
    })
    return <iframe src={misskeySrc} className='mx-auto my-6 h-64 w-4/5 p-5'></iframe>
}
