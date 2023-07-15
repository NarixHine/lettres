import Center from '@/components/chakra/center'
import Head from 'next/head'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Center height={'80vh'} width={'100%'}>
            <Head>
                <title>Auth</title>
            </Head>
            {children}
        </Center>
    )
}
