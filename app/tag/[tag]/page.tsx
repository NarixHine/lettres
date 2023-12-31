import Main from '@/components/main'
import Shelf from '@/components/shelf'
import { getXataClient } from '@/lib/xata'
import { includes } from '@xata.io/client'
import Text from '@/components/chakra/text'
import { Metadata } from 'next'
import Markdown from '@/components/markdown'
import { Balancer } from 'react-wrap-balancer'

interface TagParam {
    params: { tag: string }
}

export async function generateMetadata(
    { params }: TagParam
): Promise<Metadata> {
    const tag = decodeURIComponent(params.tag)
    const { tagDesc } = await getData(decodeURIComponent(tag))
    return {
        title: `#${tag}`,
        description: tagDesc
    }
}

async function getData(tag: string) {
    const client = getXataClient()
    const lettres = await client
        .db
        .lettres
        .select(['id', 'desc', 'title', 'tags', 'cover', 'xata.createdAt'])
        .sort('xata.createdAt', 'desc')
        .filter('tags', includes(tag))
        .getAll()
    const tagDesc = (await client
        .db
        .tags
        .select(['desc'])
        .filter('tag', tag)
        .getFirst())
        ?.desc ?? ''
    return { lettres, tagDesc }
}

export default async function TagPage({ params }: TagParam) {
    const tag = decodeURIComponent(params.tag)
    const { lettres, tagDesc } = await getData(decodeURIComponent(tag))
    return (<Main>
        <Text fontWeight={'bold'} fontSize={'5xl'} textAlign={'center'}>#{tag}</Text>
        <Balancer>
            <Markdown md={tagDesc} className={'text-center'}></Markdown>
        </Balancer>
        <br></br>
        <Shelf lettres={lettres}></Shelf>
    </Main>)
}
