export default function Main({ children }: {
    children: React.ReactNode,
}) {
    return (
        <main style={{ width: '70%', margin: '50px 15%' }}>{children}</main>
    )
}
