import { getXataClient } from '@/lib/xata'
import { notFound, redirect } from 'next/navigation'
import NextImage from 'next/image'
import Main from '@/components/main'
import Text from '@/components/chakra/text'
import Tags from '@/components/tags'
import Box from '@/components/chakra/box'
import { Metadata } from 'next'
import Markdown from '@/components/markdown'
import { headers } from 'next/dist/client/components/headers'
import ErrorPanel from '@/components/error'
import { auth, currentUser } from '@clerk/nextjs'

interface LettresParams {
    params: { id: string }
}

export async function generateMetadata({ params }: LettresParams): Promise<Metadata> {
    const { title, desc } = await getData(params.id) ?? { title: '404' }
    return {
        title,
        description: desc
    }
}

async function getData(id: string) {
    const client = getXataClient()
    const data = await client
        .db
        .lettres
        .select(['desc', 'title', 'tags', 'cover', 'xata.createdAt', 'body', 'cn', 'insider'])
        .filter({ id })
        .getFirst()
    return data
}

export default async function LettresPage({ params }: LettresParams) {
    const lettres = await getData(params.id)
    if (lettres) {
        const { title, desc, cover, tags, body, cn, insider } = lettres
        if (!cn && headers().get('cf-ipcountry') === 'CN') {
            return <ErrorPanel error={new Error('451 UNAVAILABLE IN CHINA')}></ErrorPanel>
        }
        if (insider) {
            if (auth().userId) {
                const role = (await currentUser())?.publicMetadata.role
                if (role !== 'insider' && role !== 'admin') {
                    return <ErrorPanel error={new Error('403 FORBIDDEN')} desc={'You are viewing an *Insider Lettres*, which is not available to general visitors.'}></ErrorPanel>
                }
            }
            else {
                return redirect('/auth/signin')
            }
        }

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
            <Text as={'h1'} fontSize={'4xl'}>{title}</Text>
            <Text className='relative border-l border-solid pl-2 ml-4 my-4 opacity-80'>{desc}</Text>
            <Tags tags={tags}></Tags>

            <hr style={{ margin: 10 }}></hr>

            <Markdown md={body}></Markdown>
        </Main>)
    }
    else {
        notFound()
    }
}
