export default function Main({ children }: {
    children: React.ReactNode,
}) {
    return (
        <main style={{ width: 'calc(100% - 100px)', margin: 50 }}>{children}</main>
    )
}
