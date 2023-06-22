import Center from '@/components/center'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Center height={'80vh'} width={'100%'}>
            {children}
        </Center>
    )
}
