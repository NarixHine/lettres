export default function Main({ children }: {
    children: React.ReactNode
}) {
    return (
        <main style={{ width: '100%', textAlign: 'center' }}>{children}</main>
    )
}
