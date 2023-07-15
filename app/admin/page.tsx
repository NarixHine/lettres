import Form from '@/components/form'
import { getXataClient } from '@/lib/xata'

async function getData() {
    const client = getXataClient()

    const [floatingLogo, slogan, cover, desc] = (await client
        .db
        .settings
        .select(['config'])
        .filter({ name: 'home' })
        .getFirst())?.config as string[]
    const [logo, title, footer] = (await client
        .db
        .settings
        .select(['config'])
        .filter({ name: 'layout' })
        .getFirst())?.config as string[]
    return {
        floatingLogo,
        slogan,
        cover,
        desc,
        logo,
        title,
        footer
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
        footer
    } = await getData()

    const submit = async (data: FormData) => {
        'use server'
        const client = getXataClient()
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
        text: 'Footer Text',
        name: 'footer',
        value: footer
    }, {
        text: 'Floating Logo URL',
        name: 'floatingLogo',
        value: floatingLogo
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
