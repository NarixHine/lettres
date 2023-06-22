'use client'

import { Box, Collapse, Flex, Icon, IconButton, Stack, Text, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import Link from '../link'
import Image from '../image'
import { UserButton, useAuth } from '@clerk/nextjs'
import { CiLogin } from 'react-icons/ci'
import { useRouter } from 'next/navigation'
import { anto, raleway } from '@/utils/fonts'
import { dark } from '@clerk/themes'

interface NavItem {
    label: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Explore',
        children: [
            {
                label: 'Ask AI',
                href: '#',
            },
            {
                label: 'Search',
                href: '#',
            },
        ],
    },
    {
        label: 'Restricted Pages',
        children: [
            {
                label: 'Control Panel',
                href: '/admin'
            }
        ]
    }
]

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure()
    const { userId } = useAuth()
    const { colorMode } = useColorMode()
    const router = useRouter()

    return (
        <Box position={'sticky'} top={0} zIndex={999} opacity={0.9} backdropFilter={'blur(5px)'}>
            <Flex
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1 }}
                    ml={{ base: -2 }}
                    display='flex'>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify='center'>
                    <Link
                        href='/'
                        _hover={{ textDecoration: 'none' }}
                        textAlign='center'
                        fontSize={30}
                        color='rgba(31,78,121,0.8)'
                        className={anto.className}>
                        <Image src={'/logo.png'} alt='Logo' height={30} style={{ display: 'inline', marginRight: 10, marginBottom: 5 }}></Image>
                        Lettres
                    </Link>
                </Flex>

                <Flex
                    flex={{ base: 1 }}
                    justify={'flex-end'}
                    direction={'row'}>
                    {
                        userId ?
                            <UserButton
                                userProfileMode='navigation'
                                userProfileUrl='/profile'
                                appearance={{ variables: { fontFamily: raleway.style.fontFamily }, baseTheme: colorMode === 'dark' ? dark : undefined }}
                                afterSignOutUrl='/' /> :
                            <IconButton onClick={() => router.push('/auth/signin')} variant={'ghost'} icon={<Icon as={CiLogin}></Icon>} aria-label='Sign In'></IconButton>
                    }
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <Nav />
            </Collapse>
        </Box>
    )
}

function Nav() {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

function MobileNavItem({ label, children, href }: NavItem) {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0 !important' }}>
                <Stack
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href} fontWeight={600} color={'gray.500'}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}
