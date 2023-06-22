import { HTMLProps } from 'react'

export default function Main({ children }: {
    children: React.ReactNode,
}) {
    return (
        <main style={{ width: 'calc(100% - 100px)', textAlign: 'center', margin: 50 }}>{children}</main>
    )
}
