import Box from './chakra/box';

export default function Main({ children }: {
    children: React.ReactNode,
}) {
    return (
        <Box as='main' w={'full'} minH={'calc(100vh - 160px)'} px={{ base: '7%', sm: '10%', md: '15%', lg: '20%' }} pt={10} pb={5}>{children}</Box>
    )
}
