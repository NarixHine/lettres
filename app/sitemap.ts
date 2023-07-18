import { getXataClient } from '@/lib/xata'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const client = getXataClient()
    const lettres = (await client.db.lettres.select(['id', 'xata.updatedAt']).getAll()).map(({ id, xata }) => ({
        url: `/lettres/${id}`,
        lastModified: xata.updatedAt
    }))
    const tags = (await client.db.tags.select(['tag', 'xata.updatedAt']).getAll()).map(({ tag, xata }) => ({
        url: `/tag/${tag}`,
        lastModified: xata.updatedAt
    }))
    return [
        {
            url: '/',
            lastModified: new Date(),
        },
        ...lettres,
        ...tags
    ]
}
