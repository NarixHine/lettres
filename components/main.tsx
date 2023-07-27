import Box from './chakra/box'

export default function Main({ children, className }: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <Box as='main' w={'full'} minH={'calc(100vh - 150px)'} px={{ base: '7%', sm: '10%', md: '15%', lg: '20%' }} py={10} className={className}>{children}</Box>
    )
}
