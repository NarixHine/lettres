import Form from '@/components/form'
import { getXataClient } from '@/lib/xata'

async function getData() {
    const client = getXataClient()

    const [floatingLogo, slogan, cover, desc] = (await client
        .db
        .settings
        .read('home'))?.config as string[]
    const [logo, title, footer, footerLogo] = (await client
        .db
        .settings
        .read('layout'))?.config as string[]
    return {
        floatingLogo,
        slogan,
        cover,
        desc,
        logo,
        title,
        footer,
        footerLogo
    }
}

export default async function AdminPage() {
    const {
        floatingLogo,
        slogan,
        cover,
        desc,
        logo,
        title,
        footer,
        footerLogo
    } = await getData()

    const submit = async (data: FormData) => {
        'use server'

        const get = (key: string) => data.get(key) as string
        const client = getXataClient()
        await Promise.all([
            client.db.settings.update('home', { config: [get('floatingLogo'), get('slogan'), get('cover'), get('desc')] }),
            client.db.settings.update('layout', { config: [get('logo'), get('title'), get('footer'), get('footerLogo')] })
        ])
    }

    return (<Form action={submit} view='/' items={[{
        text: 'Title',
        name: 'title',
        value: title
    }, {
        text: 'Logo URL',
        name: 'logo',
        value: logo
    }, {
        text: 'Floating Logo URL',
        name: 'floatingLogo',
        value: floatingLogo
    }, {
        text: 'Footer Logo URL',
        name: 'footerLogo',
        value: footerLogo
    }, {
        text: 'Footer Text',
        name: 'footer',
        value: footer
    }, {
        text: 'Slogan',
        name: 'slogan',
        value: slogan
    }, {
        text: 'Cover Image URL',
        name: 'cover',
        value: cover
    }, {
        text: 'Website Description',
        multiline: true,
        name: 'desc',
        value: desc
    }]}></Form>)
}
