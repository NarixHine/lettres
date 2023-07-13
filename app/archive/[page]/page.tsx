import Main from '@/components/main'
import Pagination from '@/components/pagination'
import Shelf from '@/components/shelf'
import { getXataClient } from '@/lib/xata'

const PAGE_SIZE = 8

async function getData(page: number) {
    const client = getXataClient()
    const totalCount = await client.db.lettres.aggregate({
        lettresCount: {
            count: '*',
        },
    })

    const pageCount = Math.ceil(totalCount.aggs.lettresCount / PAGE_SIZE)
    const lettres = (await client.db.lettres.select(['id', 'desc', 'title', 'tags', 'cover', 'xata.createdAt']).getPaginated({
        pagination: {
            size: PAGE_SIZE,
            offset: (page - 1) * PAGE_SIZE,
        },
        sort: {
            'xata.createdAt': 'desc'
        },
        consistency: 'eventual'
    })).records

    return { lettres, pageCount }
}

export default async function ArchivePage({ params }: { params: { page: string } }) {
    const page = parseInt(params.page)
    const { lettres, pageCount } = await getData(page)
    return (<Main>
        <Shelf lettres={lettres}></Shelf>
        <br></br>
        <Pagination pageCount={pageCount} currentPage={page}></Pagination>
    </Main>)
}
