import Main from '@/components/main'
import markdownToHtml from 'zenn-markdown-html'
import 'zenn-content-css'
import styles from './lettres.module.css'
import Shelf from '@/components/shelf'
import { getXataClient } from '@/lib/xata'
import { includes } from '@xata.io/client'
import Text from '@/components/chakra/text'

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

export default async function TagPage({ params }: { params: { tag: string } }) {
    const { tag } = params
    const { lettres, tagDesc } = await getData(tag)
    return (<Main>
        <Text fontWeight={'bold'} fontSize={'5xl'} textAlign={'center'}>#{tag}</Text>
        <div className={`znc text-center ${styles.znc}`} dangerouslySetInnerHTML={{ __html: markdownToHtml(tagDesc) }}></div>
        <br></br>
        <Shelf lettres={lettres}></Shelf>
    </Main>)
}
