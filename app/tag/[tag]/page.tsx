import Main from '@/components/main'
import Pagination from '@/components/pagination'
import Shelf from '@/components/shelf'
import { getXataClient } from '@/src/xata'
import { includes } from '@xata.io/client'

async function getData(tag: string) {
    const client = getXataClient()
    const lettres = await client
        .db
        .lettres
        .select(['id', 'desc', 'title', 'tags', 'cover', 'xata.createdAt'])
        .sort('xata.createdAt', 'desc')
        .filter('tags', includes(tag))
        .getAll()
    return lettres
}

export default async function TagPage({ params }: { params: { tag: string } }) {
    const { tag } = params
    const lettres = await getData(tag)
    return (<Main>
        <Shelf lettres={lettres}></Shelf>
    </Main>)
}
