'use client'

import styles from './pagination.module.css'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function Pagination({ currentPage, pageCount }: {
    currentPage: number,
    pageCount: number
}) {
    const router = useRouter()
    return (
        <Box w={'full'}>
            <Breadcrumb className={styles.pagination}>
                {
                    Array.from(Array(pageCount).keys()).map((page) => (
                        <BreadcrumbItem isCurrentPage={page + 1 === currentPage} fontSize={'xl'} key={page}>
                            <BreadcrumbLink opacity={'0.7'} color={page + 1 === currentPage ? 'teal.400' : ''} onClick={() => router.push(`/archive/${page + 1}`)}>{page + 1}</BreadcrumbLink>
                        </BreadcrumbItem>
                    ))
                }
            </Breadcrumb>
        </Box>
    )
}
