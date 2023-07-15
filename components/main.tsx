import Box from './chakra/box';

export default function Main({ children }: {
    children: React.ReactNode,
}) {
    return (
        <Box as='main' w={'full'} minH={'calc(100vh - 145px)'} px={{ base: '7%', sm: '10%', md: '15%', lg: '20%' }} py={10}>{children}</Box>
    )
}
