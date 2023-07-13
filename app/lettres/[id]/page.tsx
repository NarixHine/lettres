import { getXataClient } from '@/lib/xata'
import { notFound } from 'next/navigation'
import markdownToHtml from 'zenn-markdown-html'
import 'zenn-content-css'
import NextImage from 'next/image'
import Main from '@/components/main'
import Text from '@/components/chakra/text'
import Tags from '@/components/tags'
import Box from '@/components/chakra/box'
import Article from './article'

async function getData(id: string) {
    const client = getXataClient()
    const data = await client
        .db
        .lettres
        .select(['desc', 'title', 'tags', 'cover', 'xata.createdAt', 'body'])
        .filter({ id })
        .getFirst()
    return data
}

export default async function LettresPage({ params }: { params: { id: string } }) {
    const lettres = await getData(params.id)
    if (lettres) {
        const __html = markdownToHtml(lettres.body)
        const { title, desc, cover, tags } = lettres
        return (<Main>
            {
                cover ? <Box
                    mb={3}
                    overflow={'hidden'}
                    height={'40vh'}
                    position={'relative'}
                    borderRadius={30}>
                    <NextImage priority style={{ objectFit: 'cover' }} src={cover} fill={true} alt='Cover'></NextImage>
                </Box> : <></>
            }
            <Text as={'h1'} fontSize={'6xl'} mb={-1}>{title}</Text>
            <Text className='relative border-l border-solid pl-2 ml-4 mb-3 opacity-80'>{desc}</Text>
            <Tags tags={tags}></Tags>

            <hr style={{ margin: 10 }}></hr>

            <Article __html={__html}></Article>
        </Main>)
    }
    else {
        notFound()
    }
}
