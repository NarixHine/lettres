import Form from '@/components/form'
import { getXataClient } from '@/lib/xata'
import { notFound } from 'next/navigation'

async function getData(id: string) {
    const client = getXataClient()
    const lettres = await client
        .db
        .lettres
        .read(id)
    return lettres
}

export default async function LettresEditPage({ params }: { params: { id: string } }) {
    const { id } = params
    const lettres = id === 'new' ? { desc: '', pin: false, cover: '', title: '', tags: [], body: '', cn: true } : await getData(id)
    if (lettres) {
        const { desc, pin, cover, title, tags, body, cn } = lettres
        const submit = async (data: FormData) => {
            'use server'

            const get = (key: string) => data.get(key) as string
            const client = getXataClient()
            await client.db.lettres.createOrUpdate(get('id'), {
                desc: get('desc'),
                pin: get('pin') === 'on',
                cover: get('cover'),
                title: get('title'),
                tags: get('tags').split(' '),
                body: get('body'),
                cn: get('cn') === 'on'
            })
        }
        const del = async () => {
            'use server'

            const client = getXataClient()
            await client.db.lettres.delete(id)
        }

        return (<Form action={submit} view={id === 'new' ? undefined : `/lettres/${id}`} items={[{
            text: 'ID',
            name: 'id',
            value: id,
            editable: id === 'new'
        }, {
            text: 'Title',
            name: 'title',
            value: title
        }, {
            text: 'Cover Image URL',
            name: 'cover',
            value: cover
        }, {
            text: 'Description',
            name: 'desc',
            value: desc
        }, {
            text: 'Tags',
            name: 'tags',
            value: tags?.join(' ')
        }, {
            text: 'Main Text',
            multiline: true,
            name: 'body',
            value: body
        }]}
            boolItems={[{
                text: 'Pin on Homepage',
                name: 'pin',
                value: pin
            }, {
                text: 'Availability in China',
                name: 'cn',
                value: cn
            }]}
            deleteAction={id === 'new' ? undefined : del}></Form>)
    }
    else {
        notFound()
    }
}
