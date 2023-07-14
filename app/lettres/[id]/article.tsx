'use client'

import { useEffect } from 'react'
import styles from '@/styles/znc.module.css'
import { useRouter } from 'next/navigation'

export default function Article({ __html }: { __html: string }) {
    const router = useRouter()
    useEffect(() => {
        const article = document.getElementsByClassName('znc')[0]
        const anchors = article.getElementsByTagName('a')
        Array.from(anchors).forEach((anchor) => {
            if (anchor.href !== '') {
                anchor.onclick = (event) => {
                    event.preventDefault()
                    router.push(anchor.href)
                }
            }
        })
    }, [router])
    return (
        <article className={`znc ${styles.znc}`} dangerouslySetInnerHTML={{ __html }}></article>
    )
}
