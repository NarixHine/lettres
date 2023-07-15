'use client'

import { useEffect } from 'react'
import styles from '@/styles/znc.module.css'
import { useRouter } from 'next/navigation'
import markdownToHtml from 'zenn-markdown-html'

export default function Markdown({ md, className }: { md: string, className?: string }) {
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
        <article className={`znc ${styles.znc} ${className}`} dangerouslySetInnerHTML={{ __html: markdownToHtml(md) }}></article>
    )
}
