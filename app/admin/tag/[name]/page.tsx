import Form from '@/components/form'
import { getXataClient } from '@/lib/xata'
import { auth } from '@clerk/nextjs'
import { log } from 'next-axiom'
import { notFound } from 'next/navigation'

async function getData(name: string) {
    const client = getXataClient()
    const tag = await client
        .db
        .tags
        .filter('tag', name)
        .getFirst()
    return tag
}

export default async function TagEditPage({ params }: { params: { name: string } }) {
    const { name } = params
    const Tag = name === 'new' ? { tag: 'new', desc: '', id: undefined } : await getData(name)
    if (Tag) {
        const { tag, desc, id } = Tag
        const submit = async (data: FormData) => {
            'use server'

            const get = (key: string) => data.get(key) as string
            const client = getXataClient()
            const config = {
                tag: get('tag'),
                desc: get('desc'),
            }
            if (id) {
                await client.db.tags.update(id, config)
            }
            else {
                await client.db.tags.create(config)
            }

            log.info(`Tag ${id ? 'Updated' : 'Created'}`, { new: config, uid: auth().userId })
        }
        const del = async () => {
            'use server'

            const client = getXataClient()
            if (id) {
                await client.db.tags.delete(id)
                
                log.info(`Tag Deleted`, { tag: { Tag }, uid: auth().userId })
            }
        }

        return (<Form action={submit} view={id ? `/tag/${name}` : undefined} items={[{
            text: 'Tag Name',
            name: 'tag',
            value: tag,
            editable: !id
        }, {
            text: 'Description',
            name: 'desc',
            value: desc,
            multiline: true
        }]}
            deleteAction={id ? del : undefined}></Form>)
    }
    else {
        notFound()
    }
}
