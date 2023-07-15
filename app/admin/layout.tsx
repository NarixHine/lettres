import Main from '@/components/main'
import { getXataClient } from '@/lib/xata'
import Tab, { Tabs, TabList, TabPanels, TabPanel } from '@/components/chakra/tab'
import { Metadata } from 'next'
import List from '@/components/list'
import { currentUser } from '@clerk/nextjs'
import ErrorPanel from '@/components/error'

export const metadata: Metadata = {
    title: 'Admin Console'
}

async function getData() {
    const client = getXataClient()
    const lettres = await client
        .db
        .lettres
        .select(['id', 'title'])
        .sort('xata.updatedAt', 'desc')
        .getAll()
    const tags = await client
        .db
        .tags
        .select(['tag'])
        .getAll()
    return { lettres, tags }
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const role = (await currentUser())?.publicMetadata.role
    if (role !== 'admin')
        return <ErrorPanel error={new Error('403 FORBIDDEN')}></ErrorPanel>

    const { lettres, tags } = await getData()

    return (
        <Main>
            <Tabs>
                <TabList>
                    <Tab>Lettres</Tab>
                    <Tab>Tags</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <List items={lettres.map(({ id, title }) => ({
                            text: title,
                            url: `/admin/lettres/${id}`
                        })).concat({
                            text: 'New Lettres',
                            url: '/admin/lettres/new'
                        })}></List>
                    </TabPanel>

                    <TabPanel>
                        <List items={tags.map(({ tag }) => ({
                            text: tag as string,
                            url: `/admin/tag/${tag}`
                        })).concat({
                            text: 'New Tag',
                            url: '/admin/tag/new'
                        })}></List>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <br></br>
            {children}
        </Main>
    )
}
