import Script from 'next/script'

export default function LettresLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <Script src='https://embed.zenn.studio/js/listen-embed-event.js'></Script>
        </>
    )
}
